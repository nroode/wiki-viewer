// $(input).on('submit', searchWiki);
// var searchTerm = $(input).val();

// $('h1').on('click', searchWiki);



$('input').keypress(function(event) {
    if (event.which === 13){
            searchWiki();
    }          
});    
        


function searchWiki(event) {

    var searchTerm = $('input').val();
    $('input').val("");

    wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&origin=*";

    $.getJSON(wikiUrl, function (response) {
        console.log(response);
        var myLi = '';
        
            for (var j = 0; j < response[1].length; j++) {
                myLi += `<li><a href="${response[3][j]}"><div class="title"> ${response[1][j]}</div><br><span class="snippet"> ${response[2][j]}</span></a></li>`;
            }
        

        document.getElementById("searchResults").innerHTML = myLi;

    });

}