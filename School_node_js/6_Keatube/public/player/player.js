const url = window.location.href;
let videoId = url.substr(url.lastIndexOf("/") + 1);

console.log(videoId);

$.get(`/videos/${videoId}`)
    .done((data) => {
        console.log(data.response);

        $("#title").text(data.response.title);

        const player = `<video id="player" controls>
                    <source src="/${videoId}" >
                    Your browser does not support the video tag.
                </video>`;

        $("#player").append(player);

        $("#description").text(data.response.description);
        
        $("#category").text(data.response.category);
        $("#tags").text(data.response.tags);
    })
    .catch((error) => {
        console.log(error);
        $("#title").text("Couldn't find the video");
    });