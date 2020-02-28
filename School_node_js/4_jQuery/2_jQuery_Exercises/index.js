// 1-5
$(document).ready( () => {
    // 1
    $("body").css("text-align","center");
    // 2
    $("#title").html("<h2>New title</h2>");
    // 3
    $(".subtitle-box").css("background-color","red");
    // 4
    $(".temp").hide();
    // 5
    $(".reason").css("border-style", "dashed");
});

// 6-8
$(document).ready( () => {
    // 6
    $("#first-list").css("font-weight", "bold");
    // 7
    //$("ol li:last").css("text-decoration", "underline");
    $("ol li").last().css("text-decoration", "underline");
    // 8 - counts from 1
    $("ol li:nth-child(2)").css("text-decoration","line-through");
    // 8 - counts from 0
    $("ol li:eg(1)").css("text-decoration","line-through");
});

// 9-10
$(document).ready( () => {
    // 9
    // $(".second-list").css("font-style","italic");
    $(".second-list li, span").css("font-style","italic");
    // 10
    // $(".second-list").find("span").css("font-size","0.5em");
    $("ul span").css("font-size","0.5em");

});

// 11-15
$(document).ready( () => {
    // 11
    // $(".unused-box").find("label").remove();
    $(".unused-box label").remove();
    // 12 
    $(".unused-box").append("<p> Second Sentence </p>");
    // 13
    $(".unused-box").prepend("<p> First Sentence </p>");
    // 14
    $(".unused-box").attr("class", "used-box");
    // 15
    $(".used-box").click( () => {
        $(".used-box").toggleClass("used-boxed-clicked");
    });
});

// 16-18
$(document).ready( () => {
    // 16 - Could also use .hover
    $("#submit-button").mouseenter( (event) => {
        $(event.currentTarget).text("You're ready to click");
    });
    $("#submit-button").mouseleave( () => {
        $("#submit-button").text("Click");
    });
    // 17
    $("#submit-button").click( () => {
        let listnumber = $("#first-list li").length + 1;
        $("#first-list li").last().append("<li>Reason "+ listnumber +" </li>");
        // 18
        console.log($(event.currentTarget).parent());
    });
    
});