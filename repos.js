$(document).ready(function() {
  getWatchedRepos();

function getWatchedRepos()
{
  $( '#result' ).html( "<h1></h1>");
  var html = "<br>";
    $.ajax( {
    	url : "https://api.github.com/users/gracielovelace/watched",
    	dataType : "jsonp",
    	success : function ( returndata ) {
      	$.each( returndata.data, function ( i, item ) {
        	html += '<table>' +
          	'<h2><a href="' + this.html_url + '">' + this.name + '</a></h2>' +
          	'<ul class="repo_details">' +
            '<li id="owner">' + 'Owner: ' + this.owner.login + '</li><br>' +
          	'<li id="language">' + 'Language: ' + this.language + '</li><br>' +
          	'</ul>' +
            '<hr>' +
          	'</table>';
      	} );
      $( '#result' ).append(html );
     } // close success handler
     });

}

}); //close document ready
