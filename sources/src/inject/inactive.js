$('#ch-floatMenu').remove();

for(var i=1; i<=6; i++){
    $('body').find('h'+i).removeClass('ch-h'+i+'-tags');
    $('body').find('h'+i).attr('name', '');
    $('body').find('h'+i).attr('title', '');
    $('body').find('h'+i).css('background', '');
}