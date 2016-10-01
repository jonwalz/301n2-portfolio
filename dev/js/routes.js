page('/', function () {
    $("#aboutMe").hide();
    $("#contact").hide();

    Piece.fetchData(portfolioView.initIndexPage);
    articleController.index();
});

page('/about', function () {

    aboutController.index();
});

page('/contact', function(){

    contactController.index();
});

page();