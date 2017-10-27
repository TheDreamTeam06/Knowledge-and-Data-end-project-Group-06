<?php
    if(!isset($_SESSION))
  {
    session_start();
  }

?>

<html>
    <head>
        <title>Drugslist</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="styledatabase.css">
        <link rel="icon" href="favicon.png">
    </head>
    <body>
      <script src="js/sparqlquery.js"></script>
        <header>
            <div class ="content">
                <a href="index.php">
                <img border="0" alt="Home" src="home.png" width="30" height="30"></a>
            </div>
        <div><h1><span style="color:#ff0000;">D</span><span style="color:#ff4000;">r</span><span style="color:#ff7f00;">u</span><span style="color:#ffbf00;">g</span><span style="color:#ffff00;">s</span><span style="color:#aaff00;"> </span><span style="color:#55ff00;">D</span><span style="color:#00ff00;">a</span><span style="color:#00ff80;">t</span><span style="color:#00ffff;">a</span><span style="color:#0080ff;">b</span><span style="color:#0000ff;">a</span><span style="color:#4600ff;">s</span><span style="color:#8b00ff;">e</span></div> </h1>       </header>
        <div class="page">

            <div class="Infoside">
                <div class="col-md-5">
                    <div class="content information">
                      <ul>Name or different name:
                        <li id="Name"></li>
                      </ul>
                      <ul>Comes in form:
                        <li id="Form"></li>
                      </ul>
                      <ul>Use:
                        <li id="Intake"></li>
                      </ul>
                      <ul>Common effects:
                        <li id="Effect"></li>
                      </ul>
                      <ul>Common risks:
                        <li id="Risk"></li>
                      </ul>
                      <ul>Made of:
                        <li id="Active"></li>
                      </ul>
                      <ul>Chances of addiction:
                        <li id="Addiction"></li>
                      </ul>
                      <ul>Physical and mental dependency:
                        <li id="Dependency"></li>
                      </ul>
                      <ul>Excreted by:
                        <li id="Excretion"></li>
                      </ul>
                      <ul>Falls under drug law:
                        <li id="UK"></li>
                        <li id="US"></li>
                        <li id="AU"></li>
                        <li id="CA"></li>
                        <li id="DE"></li>
                      </ul>
                    </div>
            </div>

            <div class="druglist">
                <div class="col-md-6">
                    <div id="content">
                    </div>

            </div>
                </div>
            </div>
        </div>
    </body>


</html>
