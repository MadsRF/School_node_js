$(document).ready( () => {
    const url = window.location.href;
    let videoId = url.substr(url.lastIndexOf("/") + 1);
    console.log("video id: " + videoId);

    const player = `<video controls>
    <source src="/${videoId}" >
    Your browser does not support the video tag.
</video>`;

    $("#player").append(player);
});




