$(document).ready(function() {
  getWatchedRepos();

function getWatchedRepos()
{
  $( '#result' ).html( "" );
  var html = "<h2>Submit your favorite respositories here!</h2>";
    $.ajax( {
    	url : "https://api.github.com/users/bvasko/watched",
    	dataType : "jsonp",
    	success : function ( returndata ) {
      	$.each( returndata.data, function ( i, item ) {
        	html += '<table>' +
          // <div class="row">
          //   <br>
          //   <div class="col-md-2 col-sm-3 text-center">
          //     <a class="story-title" href="#"><img alt="" src="http://api.randomuser.me/portraits/thumb/men/58.jpg" style="width:100px;height:100px" class="img-circle"></a>
          //   </div>
          //   <div class="col-md-10 col-sm-9">
          //     <h3>Repurpose Content to Reach a Wider Audience</h3>
          //     <div class="row">
          //       <div class="col-xs-9">
          //         <h4><span class="label label-default">97thfloor.com</span></h4><h4>
          //         <small style="font-family:courier,'new courier';" class="text-muted">2 hours ago  • <a href="#" class="text-muted">Read More</a></small>
          //         </h4></div>
          //       <div class="col-xs-3"></div>
          //     </div>
          //     <br><br>
          //   </div>
          // </div>
          // <hr>

          	'<h3><a href="' + this.html_url + '">' + this.name + '</a></h3>' +
          	'<ul class="repo_details">' +
            '<li id="owner">' + 'Owner: ' + this.owner.login + '</li>' +
          	'<li id="language">' + 'Language: ' + this.language + '</li><br>' +
            '<li id="description">' + 'Description: ' + this.description + '</li>' +
          	'</ul>' +
            '<hr>' +
          	'</table>';
      	} );
      $( '#result' ).append(html );
     } // close success handler
     });

}

}); //close document ready
