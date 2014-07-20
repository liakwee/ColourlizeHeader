$(document).ready(function(){
    $('.msg').hide();
    chrome.storage.sync.get('chSettings', function(data){
        for(var i=0; i< data.chSettings.length; i++){
            $('#h'+(i+1)).val(data.chSettings[i]);
            $('#h'+(i+1)).css({
                borderRightWidth: 20,
                borderRightStyle: 'solid',
                borderRightColor: '#'+data.chSettings[i]
            });
        }
    });

    initPicker();

    $('#reset').on('click', function(){
        var defaultColour = [
            '6e9ef0',
            'bd66bd',
            '81d166',
            'e8b864',
            'e87364',
            'e3e858'
        ];

        $('.colpicker').each(function(i){
            $(this).val(defaultColour[i]);
        });

        for(var i=0; i< defaultColour.length; i++){
            $('#h'+(i+1)).val(defaultColour[i]);
            $('#h'+(i+1)).css({
                borderRightWidth: 20,
                borderRightStyle: 'solid',
                borderRightColor: '#'+defaultColour[i]
            });
        }

        initPicker();
    })

    $('#save').on('click', function(){
        var settings = [];

        $('.colpicker').each(function(){
            settings.push($(this).val());
        });
        console.log(settings);
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'chSettings': settings}, function() {
            // Notify that we saved.
            console.log('Settings saved');
            $('.msg').fadeIn(500);
            setTimeout(function(){
                $('.msg').fadeOut(300);
            }, 1000);
        });
    });
});


function initPicker(){
    $('.colpicker').each(function(){
        $(this).colpick({
            layout:'hex',
            submit:0,
            color: $(this).val(),
            colorScheme:'dark',
            onChange:function(hsb,hex,rgb,el,bySetColor) {
                $(el).css('border-color','#'+hex);
                // Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
                if(!bySetColor) $(el).val(hex);
            }
        }).keyup(function(){
            $(this).colpickSetColor(this.value);
        });
    });
}

