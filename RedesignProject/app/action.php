<!doctype html> <html> <head> <meta charset="utf-8"> <title></title> <meta name="description" content=""> <meta name="viewport" content="width=device-width"> <!-- Place favicon.ico and apple-touch-icon.png in the root directory --> <link rel="stylesheet" href="styles/main.882cd6b3.css"> <base href="/"> </head> <body ng-app="redesignProjectApp"> <!--[if lte IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]--> <!-- Add your site or application content here --> <div class="header"> <div class="navbar navbar-default" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="/">Viento Y Agua</a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse" ng-include="'views/nav.html'"> </div> </div> </div> </div>


 <div class="container">
        <div class="jumbotron animated fadeIn">

            <?php
            echo 'Thank you for responding, ';
           echo "<br>";
            echo $_POST['firstName'];
           echo ' ';
            echo $_POST['lastName'];
           echo "<br>";
           echo 'This was the message sent:';
           echo "<br>";
           echo $_POST['email'] ;
           echo "<br>";
           echo $_POST['subject'] ;
           echo "<br>";
           echo $_POST['message'] ;
           ?>

        </div>
    </div>




<div class="footer" ng-include="'views/footer.html'"> </div> <!-- Google Analytics: change UA-XXXXX-X to be your site's ID --> <script>!function(A,n,g,u,l,a,r){A.GoogleAnalyticsObject=l,A[l]=A[l]||function(){
       (A[l].q=A[l].q||[]).push(arguments)},A[l].l=+new Date,a=n.createElement(g),
       r=n.getElementsByTagName(g)[0],a.src=u,r.parentNode.insertBefore(a,r)
       }(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

       ga('create', 'UA-XXXXX-X');
       ga('send', 'pageview');</script> <script src="scripts/vendor.37408b0b.js"></script> <script src="scripts/scripts.2f609b34.js"></script> </body> </html>
