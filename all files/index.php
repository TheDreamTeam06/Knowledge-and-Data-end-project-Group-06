<?php
	if(!isset($_SESSION))
  {
    session_start();
  }

?>

<!DOCTYPE html>

<html>
	<head>
		<title>Drugapedia</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="icon" href="favicon.png">
	</head>
	<body>
		<header>
		<div><h1><span style="color:#ff0000;">D</span><span style="color:#ff4000;">r</span><span style="color:#ff7f00;">u</span><span style="color:#ffff00;">g</span><span style="color:#80ff00;">a</span><span style="color:#00ff00;">p</span><span style="color:#00ffff;">e</span><span style="color:#0080ff;">d</span><span style="color:#0000ff;">i</span><span style="color:#8b00ff;">a</span></div> </h1>
		</header>
		<div class="page">

			<div class="row index">
				<div class="col-md-4">
					<div class="content">
						<h3>Drugs Database</h3>
						<p>The drugs database provides a wide database of recreational drugs and additional information.</p>
						<a href="database.php"><button type="button" class="reserveerknop">Browse the database</button></a>
					</div>
				</div>
				<div class="col-md-4">
					<div class="content">
						<h3>Asking for a friend</h3>
						<p>The asking for a friend option allows you to search for symptoms of drug use and will provide possible drugs that have those symptoms.</p>
						<a href="symptoms.php"><button type="button" class="reserveerknop">Search for symptoms</button></a>
					</div>
				</div>
			</div>
		</div>
	</body>


</html>
