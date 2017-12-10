var repos_shown = 3, i = 0, updated_at, repocard;

$.ajax({
    url: 'https://api.github.com/users/organtrouble/repos',
    data: {
        client_id: '8f4811327c91837d406a',
        client_secret: '74456c5fe1405499c9c67ce6e327794f7bbad330',
        sort: 'updated',
        direction: 'desc',
        cache: 'false'
    },
    error: (request, status, error) => {
        console.log("Sorry there was an error retrieving the github repositories");
    }
}).done((repos) => {
    $('.progress').hide();

    $.each(repos, (index, repo) => {
        updated_at = (repo.updated_at).substring(0, 10);
        repocard = `<div class="repo_card">
                        <span class="card_title">${repo.name}</span>
                        <div class="contentInRepoCard">
                            <p>Description: <strong>${repo.description}</strong></p>
                            <p>Language: <strong>${repo.language}</strong></p>
                            <p>Last Modified: <strong>${updated_at}</strong></p>
                        </div>
                        <div class="seeMore">
                            <a class="seeMoreButton" href="${repo.html_url}">See More</a>
                        </div>
                    </div>`
        $("#git-cards").append(repocard);
        if(i >= 3) {
            $(('#repo' + i)).hide();
        }
        i++;
    })
});
