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
    axios.get('https://api.instagram.com/oembed?url=http://instagram.com/p/' + shortLinks[i] +'/&maxwidth=320&omitscript=true&hidecaption=true').then(body => {
        console.log(body.data);
        var picture = '<img src="' + body.data.thumbnail_url + '" class="ipic" />';
        $('.picture').append(picture);
    }).catch(e => {
        console.log(e);
    });
}

$.ajax({
    url: 'https://api.github.com/users/jessedavda/repos',
    data: {
      client_id: 'fe6a05f90ceda83952b9',
      client_secret: 'f4d0f7b75347ca4d6a11fe8338c590b94b675fbd',
      sort: 'updated',
      direction: 'desc',
      cache: 'false'
  },
  error: e => {
      console.log("github_api_error: " + e);
  }
}).done((repos) => {
    $.each(repos, (index, repo) => {
        console.log(repo);
        var repo_card = '<div class="repo">' +
            '<h3>' + repo.name + '</h3>' +
            '<p><strong>Desription: </strong>' + repo.description + '</p>' +
            '<p class="language"><strong>' + repo.language + '</strong></p>' +
            '<div class="break"></div>' +
            '<a href="' + repo.svn_url + '">Learn More</a>' +
        '</div>';

        $('.repositories').append(repo_card);
    })
});
