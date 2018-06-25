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

    var words = ["JESSE DAVDA.", "A WEB DEVELOPER.", "AN ENTREPRENEUR."];

    var i = 0;

    setInterval(() => {
        $("#text-change").fadeOut(500, () => {
            $("#text-change").text(words[i]).fadeIn(500);
        });
        i = (i == (words.length - 1)) ? 0 : (i + 1);
    }, 3000);

    setInterval(() => {
        $('#top p').animate({'opacity' : '1'}, 500);
        $('#top p').animate({'opacity' : '0.5'}, 500);
    }, 1500);

});

var shortLinks = ['BHexlg9hn6lySVdp4RhkKuKdNRNwkgQEG0f-0U0', '7gTnVfI184aYwJvvQcwWRkLufQ1wKAQ81odRM0', '88zOiDI19Y2H06SylnO338iqKkVnBxhuU53po0'];

for(var i = 0; i <= 2; i++) {
    axios.get('https://api.instagram.com/oembed?url=http://instagram.com/p/' + shortLinks[i] +'/&maxwidth=320&omitscript=true').then(body => {
        console.log(body);
    }).catch(e => {
        console.log(e);
    });
}
