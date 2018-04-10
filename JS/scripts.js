$(document).ready(() => {

    var navScroll = new Waypoint({
        element: document.getElementById('scroll_waypoint'),
        handler: (direction) => {
            if(direction == "down") {
                $('nav').css("backgroundColor", "rgba(0, 0, 0, 0.3)");
            } else if(direction == "up") {
                $('nav').css("backgroundColor", "rgba(0, 0, 0, 0)");
            }
        }
    });

    var words = ["JESSE DAVDA", "A WEB DEVELOPER", "AN ENTREPRENEUR"];

    var i = 0;

    setInterval(() => {
        $("#text-change").fadeOut(500, () => {
            $("#text-change").text(words[i]).fadeIn(500);
        });
        i = (i == 2) ? 0 : i + 1;
        console.log(i);
    }, 3000);

});
