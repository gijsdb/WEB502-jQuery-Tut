console.log("ready!");

$(document).ready(function(){
    $('.change-text-button').click(function(){
        $("p").text('Paragraph Changed...');
    });
});