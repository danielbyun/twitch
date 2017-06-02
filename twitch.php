<?php
    define ("TITLE", "twitch.tv API");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo TITLE; ?></title>
    <link href="css/twitch.css" rel="stylesheet">
</head>
<body>
    <header><h3><?php echo TITLE; ?></h3></header>
    <section id="wrapper">
        <div id="freecodecamp">
            <div id="fccStream"></div>
            <small id="online"></small>
            <small id="game"></small>
            <p id="movieQuote"></p>
        </div>
        <div id="follower">
            <h1>freeCodeCamp followers</h1>
            <h3 id="offline"></h3>
            <h3 id="onlineFollower"></h3>
            <p id="onlineStatus"></p>
        </div>
    </section>
<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
<script src="js/twitch.js" type="text/javascript"></script>
</body>
</html>