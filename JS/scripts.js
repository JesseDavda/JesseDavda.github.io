$(document).ready(() => {

    var navScroll = new Waypoint({
        element: document.getElementById('scroll_waypoint'),
        handler: () => {
            $('nav').css("backgroundColor", "rgba(0, 0, 0, 0.3)");
        }
    })

});
