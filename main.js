console.log("ready!");

$(document).ready(function(){
    $('.change-text-button').click(function(){
        $("p").text('Paragraph Changed...');
    });
});

$(document).ready(function(){
    $('.change-color-button').click(function(){
        $(".change-color").css("background-color", "red")
    });
});

$(document).ready(function(){
    $('.change-height-button').click(function(){
        $(".height").css("height", "50vh")
    });
});