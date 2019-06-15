function myGitHub() {
    console.log('`myGitHub ran`')
    $('#github-link').on('click', function(event) {
        event.PreventDefault();
        window.open("https://github.com/LindenDaniels");

    });
    $(myGitHub);
}