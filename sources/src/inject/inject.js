var defaultColour = [
    '6e9ef0',
    'bd66bd',
    '81d166',
    'e8b864',
    'e87364',
    'e3e858'
];



function searching() {
    console.log("startSearching");
    var h1 = $('body').find("h1"),
        h2 = $('body').find("h2"),
        h3 = $('body').find("h3"),
        h4 = $('body').find("h4"),
        h5 = $('body').find("h5"),
        h6 = $('body').find("h6");

    for(var i=1; i<=6; i++){
        $('body').find('h'+i).addClass('ch-h'+i+'-tags');
        $('body').find('h'+i).attr('name', 'h'+i);
        $('body').find('h'+i).attr('title', 'h'+i);
    }



    var name = "#ch-floatMenu";
    var floatHTML = "<div id='ch-floatMenu'><ul><li class='ch-h1-tags'>H1 Tags</li><li class='ch-h2-tags'>H2 Tags</li>"+
        "<li class='ch-h3-tags'>H3 Tags</li><li class='ch-h4-tags'>H4 Tags</li><li class='ch-h5-tags'>H5 Tags</li>"+
        "<li class='ch-h6-tags'>H6 Tags</li></ul></div>";



    $('body').append(floatHTML);
    getSettings();
    $(name).fadeIn(1000);


    var menuYloc = 0;
    $(window).scroll(function () {
        var offset = menuYloc+$(document).scrollTop()+"px";
        $(name).animate({top:offset},{duration:500,queue:false});

    });





    $('#ch-floatMenu li').each(function(i){
        var number = $('h'+(i+1)).length;
        //console.log((i+1) +' '+number);
        $(this).html('H'+(i+1)+' Tags ('+number+')');
    })

}


function header(){
    $(":header").css({ background:'#CCC', color:'blue' });
}


function getSettings(){
    chrome.storage.sync.get('chSettings', function(data){
        for(var i=0; i< data.chSettings.length; i++){
            $('.ch-h'+(i+1)+'-tags').css({
                backgroundColor: '#'+data.chSettings[i]
            });
        }
    });
}




searching();