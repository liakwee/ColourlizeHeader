$(document).ready(function(){

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

        initPicker();
    })
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
