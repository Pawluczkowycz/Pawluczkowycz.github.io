
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $formContainer = $("#form-container");

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var $submitButton = $('#submit-btn');
    var $streetInput = $('#street').val();
    var $cityInput = $('#city').val();
    var $googleAddress = '"https://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
    
    $formContainer.append('<img class="" src=' + $googleAddress + $streetInput + $cityInput+ '">');
    
    // NYTimes AJAX Request
    var $myKey = '5fd8e8fa153a9766443971124d83123a:12:72810650',
      $nytimesAddress = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +$cityInput +"&page=1&sort=newest&api-key=" +$myKey;
    
    $.getJSON($nytimesAddress , function(data) {
        
        var articles = '';
        
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
          var article = articles[i];
          $nytElem.append('<li class="article">' +
            '<a href="' +article.web_url +'" target="_blank">' +article.headline.main
              +'</a>'
              +'<p>' + article.snippet +'</p>'
            +'</li>');
        };

    }).fail(function() {
      $nytElem.append('<li class="error-message">New York Times Articles Could Not Be Loaded. Sorry.</li>');
    });
    
    // Wikipedia AJAX Request
    var $wikiAddress = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+$cityInput +'&format=json&callback=wikiCallback';
    
      // For Errors in the Request
    var wikiRequestTimeout = setTimeout(function() {
      $wikiElem.text("failed to get wikipedia resources");
    }, 10000);
    
    $.ajax({
      url: $wikiAddress,
      dataType: 'jsonp',
      success: function(data) {
        console.log(data);
        for (var i = 0; i < data[1].length; i++) {
          $wikiElem.append('<li class="wiki-topics"><a href=' + data[3][i] + ' target="_blank">' + data[1][i] +'</a></li>');
        };
        
        clearTimeout(wikiRequestTimeout);
      }
    })
    
    return false;
};

$('#form-container').submit(loadData);

// loadData();
