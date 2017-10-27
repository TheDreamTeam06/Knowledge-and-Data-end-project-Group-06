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
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="icon" href="favicon.png">
	</head>
	<body>
		<script src="js/friendquery.js"></script>
        <header>
            <div class ="content">
                <a href="index.php">
                <img border="0" alt="Home" src="home.png" width="30" height="30"></a>
            </div>
	<div><h1><span style="color:#ff0000;">S</span><span style="color:#ff2a00;">y</span><span style="color:#ff5500;">m</span><span style="color:#ff7f00;">p</span><span style="color:#ffbf00;">t</span><span style="color:#ffff00;">o</span><span style="color:#aaff00;">m</span><span style="color:#55ff00;"> </span><span style="color:#00ff00;">S</span><span style="color:#00ff80;">e</span><span style="color:#00ffff;">a</span><span style="color:#00aaff;">r</span><span style="color:#0055ff;">c</span><span style="color:#0000ff;">h</span><span style="color:#4600ff;">e</span><span style="color:#8b00ff;">r</span></div></h1>
	</header>
	<div class="page">

			<div class="row">
				<div class="col-md-1">
					<div class="content">
						<h3>Filter symptoms</h3>
						<p>Click on the symptoms below to add them to the filter.</p>
					</div>
				</div>
				<div class="col-md-2">
					<div class="content">
						<h3>Check your friend's body temperature.</h3>
						<select id="temperature">
						<option value="" disabled selected>Select an option</option>
  					<option value="Up">Up</option>
						<option value="normal">Normal</option>
  					<option value="Down">Down</option>
					</select>
					</div>
				</div>
				<div class="col-md-2">
					<div class="content">
						<h3>Check your friend's pupils.</h3>
						<select id="pupils">
						<option value="" disabled selected>Select an option</option>
  					<option value="Dilated">Dilated</option>
  					<option value="Normal">Normal</option>
						<option value="Constricted">Constricted</option>
					</select>
					</div>
				</div>
				<div class="col-md-2">
					<div class="content">
						<h3>Does your friend know the form of his drugs?</h3>
						<label>
						<input type='checkbox' id='powder' name='symptom' value='?drugs dr:ComesInForm dr:Powder .'>Powder
					</label>
					<label>
						<input type='checkbox' id='gas' name='symptom' value='?drugs dr:ComesInForm dr:Gas .'>Gas
					</label>
					<label>
						<input type='checkbox' id='liquid' name='symptom' value='?drugs dr:ComesInForm dr:Liquid .'>Liquid
					</label>
					<label>
						<input type='checkbox' id='mushrooms' name='symptom' value='?drugs dr:ComesInForm dr:Mushrooms .'>Mushrooms
					</label>
					<label>
						<input type='checkbox' id='plant' name='symptom' value='?drugs dr:ComesInForm dr:Plant .'>Plant
					</label>
					<label>
						<input type='checkbox' id='tablet' name='symptom' value='?drugs dr:ComesInForm dr:Tablet .'>Tablet
					</label>
					<label>
						<input type='checkbox' id='crystal' name='symptom' value='?drugs dr:ComesInForm dr:Crystal .'>Crystal
					</label>
					</div>
				</div>
				<div class="col-md-2">
					<div class="content">
						<h3>Does your friend know how you can take the drugs?</h3>
						<label>
						<input type='checkbox' id='inhaling' name='symptom' value='?drugs dr:IntakeMethod dr:Inhaling .'>Inhaling
					</label>
					<label>
						<input type='checkbox' id='injecting' name='symptom' value='?drugs dr:IntakeMethod dr:Injecting .'>Injecting
					</label>
					<label>
						<input type='checkbox' id='oral' name='symptom' value='?drugs dr:IntakeMethod dr:Oral .'>Oral
					</label>
					<label>
						<input type='checkbox' id='smoking' name='symptom' value='?drugs dr:IntakeMethod dr:Smoking .'>Smoking
					</label>
					<label>
						<input type='checkbox' id='snorting' name='symptom' value='?drugs dr:IntakeMethod dr:Snorting .'>Snorting
					</label>
					</div>
				</div>
				<div class="col-md-2">
					<div class="content">
						<h3>What physical symptoms does your friend show?</h3>
						<label>
						<input type='checkbox' id='blankstare' name='symptom' value='?drugs dr:PossibleEffect dr:BlankStare .'>Blank Stare
					</label>
					<label>
						<input type='checkbox' id='drymouth' name='symptom' value='?drugs dr:PossibleEffect dr:DryMouth .'>Dry Mouth
					</label>
					<label>
						<input type='checkbox' id='itching' name='symptom' value='?drugs dr:PossibleEffect dr:Itching .'>Itching
					</label>
					<label>
						<input type='checkbox' id='lackmuscle' name='symptom' value='?drugs dr:PossibleEffect dr:LackOfMuscleControl .'>Lack of Muscle Control
					</label>
					<label>
						<input type='checkbox' id='nausea' name='symptom' value='?drugs dr:PossibleEffect dr:Nausea .'>Nausea
					</label>
					<label>
						<input type='checkbox' id='redeyes' name='symptom' value='?drugs dr:PossibleEffect dr:RedEyes .'>Red Eyes
					</label>
					<label>
						<input type='checkbox' id='slowreflex' name='symptom' value='?drugs dr:PossibleEffect dr:SlowedReflexes .'>Slowed Reflexes
					</label>
					<label>
						<input type='checkbox' id='slurredspeech' name='symptom' value='?drugs dr:PossibleEffect dr:SlurredSpeech .'>Slurred Speech
					</label>
					<label>
						<input type='checkbox' id='teethgrinding' name='symptom' value='?drugs dr:PossibleEffect dr:TeethGrinding .'>Teeth Grinding
					</label>
					</div>
				</div>
				<div class="col-md-2">
					<div class="content">
						<h3>What psychological symptoms does your friend show?</h3>
						<label>
						<input type='checkbox' id='confusion' name='symptom' value='?drugs dr:PossibleEffect dr:Confusion .'>Confusion
					</label>
					<label>
						<input type='checkbox' id='cyclicbehaviour' name='symptom' value='?drugs dr:PossibleEffect dr:CyclicBehaviour .'>Cyclic Behaviour
					</label>
					<label>
						<input type='checkbox' id='disoriented' name='symptom' value='?drugs dr:PossibleEffect dr:Disoriented .'>Disoriented
					</label>
					<label>
						<input type='checkbox' id='drowsiness' name='symptom' value='?drugs dr:PossibleEffect dr:Drowsiness .'>Drowsiness
					</label>
					<label>
						<input type='checkbox' id='euphoria' name='symptom' value='?drugs dr:PossibleEffect dr:Euphoria .'>Euphoria
					</label>
					<label>
						<input type='checkbox' id='hallucinations' name='symptom' value='?drugs dr:PossibleEffect dr:Hallucinations .'>Hallucinations
					</label>
					<label>
						<input type='checkbox' id='increasedappetite' name='symptom' value='?drugs dr:PossibleEffect dr:IncreasedAppetite .'>Increased Appetite
					</label>
					<label>
						<input type='checkbox' id='lossofappetite' name='symptom' value='?drugs dr:PossibleEffect dr:LossOfAppetite .'>Loss of Appetite
					</label>
					<label>
						<input type='checkbox' id='paranoia' name='symptom' value='?drugs dr:PossibleEffect dr:Paranoia .'>Paranoia
					</label>
					<label>
						<input type='checkbox' id='relaxed' name='symptom' value='?drugs dr:PossibleEffect dr:Relaxed .'>Relaxed
					</label>
					<label>
						<input type='checkbox' id='repetitivespeech' name='symptom' value='?drugs dr:PossibleEffect dr:RepetitiveSpeech .'>Repetitive Speech
					</label>
					<label>
						<input type='checkbox' id='restlessness' name='symptom' value='?drugs dr:PossibleEffect dr:Restlessness .'>Restlessness
					</label>
					<label>
						<input type='checkbox' id='talkative' name='symptom' value='?drugs dr:PossibleEffect dr:Talkative .'>Talkative
					</label>
					</div>

				</div>
				<div class="buttondiv">
				<button onclick="myFunction()" class="button">Search query</button>
				</div>
				<div class="col-md-3">
					<div class="content" id="resultdiv">
						<h3>Drugs your friend might have used</h3>
						<ul id="queryresults">
						</ul>
					</div>
				</div>

			</div>
		</div>

	</body>
</html>
