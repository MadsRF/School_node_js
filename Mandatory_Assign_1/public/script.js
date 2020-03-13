//test
console.log($(2+2))

// routing for the topmenu buttons 
$(document).ready( () => {
    $("#go_to_main_menu").click( () => {
        //alert("test")
        window.location.replace("/");
    });
    $("#go_to_node").click( () => {
        //alert("test 1")
        window.location.replace("/node_page");
    });
    $("#go_to_js").click( () => {
        //alert("test 2")
        window.location.replace("/js_page");
    });
    $("#go_to_cmd").click( () => {
        //alert("test 3")
        window.location.replace("/cmd_page");
    });
    $("#go_to_functions").click( () => {
        //alert("test 5")
        window.location.replace("/functions_page");
    });
    $("#go_to_rest_api").click( () => {
        //alert("test 6")
        window.location.replace("/rest_api_page");
    });
    $("#go_to_json_page").click( () => {
        //alert("test 7")
        window.location.replace("/json_page");
    });
    $("#go_to_jquery").click( () => {
        //alert("test 8")
        window.location.replace("/jquery_page");
    });    
});

// main menu button text
$(document).ready( () => {
    $("#go_to_main_menu").html("Main Menu");
    $("#go_to_node").html("Node.js");
    $("#go_to_js").html("JavaScript");
    $("#go_to_cmd").html("Commands");
    $("#go_to_functions").html("Functions");
    $("#go_to_rest_api").html("REST api");
    $("#go_to_json_page").html("Json");
    $("#go_to_jquery").html("jQuery");
});

// sets styling for the pages 
$(document).ready( () =>{
    // styling for all the footers 
    $(".made_by_footer").html("<p>Mads Rune Frederiksen</p>");
    
    // styling for the body text and images
    $(".body_context").css("text-align","center");
    $(".body_context_text").css("text-align", "left");
    $(".body_context_text").css("margin", "2% 15% 2% 15%"); // top, right, bottom, left    
});

// load text for the pages (gotten from Stack overflow. https://stackoverflow.com/questions/6470567/jquery-load-txt-file-and-insert-into-div/6470598)
$(document).ready( () => {
    $("#text_body_cmd").load("text/cmd.txt");
    $("#text_body_js").load("text/js.txt");
    $("#text_body_functions").load("text/functions.txt");
    $("#text_body_jquery").load("text/jquery.txt");
    $("#text_body_json").load("text/json.txt");
}); 

