$(document).ready( () => {
    
    $("#home").click( () => {
        window.location.replace("/home");
    });
    
    $("#news").click( () => {
        window.location.replace("/news");
    });
    
    $("#contact").click( () => {
        window.location.replace("/contact");
    });

    $("#email").click( () => {
        window.location.replace("/email");
    });
    
    $("#logout").click( () => {
        alert("You logged out");
        window.location.replace("/logout");
    });

    $(".sendEmailbtn").click( () => {
        alert("Email was sent");
        setTimeout(function () {
            window.location.replace("/email");
         }, 3000); 
    });
    
});