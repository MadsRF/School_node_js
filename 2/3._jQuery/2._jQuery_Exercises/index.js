// 1 - 5
$("body").css("text-align", "center");

// $("#title h2").text("New title");

//$("#title").html("<h2>New title</h2>");

$("#title").children("h2").html("<h2>New title</h2>");

$(".subtitle-box").css("background-color", "green");

//$(".subtitle-box").css("background-color", "#ff0000");

//$(".temp").hide();

// $(".temp").css("display", "none");

// $(".subtitle-box h4").hide();

// $(".subtitle-box h4").css("visibility", "hidden");

$(".subtitle-box h4").css("opacity", "0%");

$("div.reason").css("border", "2px dashed black");

// 6 - 8
$("ol li").css("font-weight", "bold");

$("ol li:last").css("text-decoration", "underline");

$("ol li").last().css("text-decoration", "underline");

// $("ol li:nth-child(2)").css("text-decoration", "line-through");

// $("ol li:eq(1)").css("text-decoration", "line-through");

$("ol li:nth-of-type(2)").css("text-decoration", "line-through");

// 9 - 10
// $("ul > *").css("font-style", "italic");

// $(".second-list li, span").css("font-style", "italic");

$("#list").css("font-style", "italic");

$("ul span").css("font-size", ".5em");

// 11 - 15
$(".unused-box label").remove();

$(".unused-box").append("<p>Second Sentence</p>");

// $(".unused-box").html("<p>Second Sentence</p>");

// $(".unused-box").prepend("<p>First Sentence</p>");

// $(".unused-box p").before("<p>First Sentence</p>");

$("<p>First Sentence</p>").insertBefore(".unused-box p");

$(".unused-box").attr("class", "used-box");

$(".unused-box").toggleClass("used-box").toggleClass("unused-box");

$(".unused-box").addClass("used-box").removeClass("unused-box");


$(document).ready(() => {
    $(".used-box").click(() => {
        $(".used-box").toggleClass("used-boxed-clicked");
    });

/*     $("#submit-button").hover(
        () => {
            $("#submit-button").text("You're ready to click");
        }, 
        () => {
            $("#submit-button").text("Click");
        }
    ); */

/*     $("#submit-button").mouseenter(function() {
        console.log("regular", this);
        $(this).text("You're ready to click");
    });
    $("#submit-button").mouseleave((event) => {
        console.log("arrow", this);
        $(event.currentTarget).text("Click");
    }); */
/*     $("#submit-button").on("click mouseenter mouseleave", () => {
        console.log("I just clicked");
    });
 */

    $("#submit-button").click(() => {
        let listNumber = $("#first-list li").length + 1;
        $("#first-list").append("<li>Reason " + listNumber +"</li>");
        console.log($(event.currentTarget).parent())
    });
});



