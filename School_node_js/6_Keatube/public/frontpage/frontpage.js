$(document).ready( () =>{
    //ajax get function
    $.get("videos?page=1", (data) => {
        data.response.map((video) => {
            $("#video-gallery").append(`<a href="player/${video.fileName}">${video.title}</a>`)
        });
    });
});

