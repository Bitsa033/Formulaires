<?php
	header('Access-Control-Allow-Origin: http://localhost:3000');

	if (isset($_POST['name']) && isset($_POST['annee'])&& !empty($_POST['name']) && isset($_POST['annee'])) {
		# code...
		$user = $_POST['name'];
		$annee=$_POST['annee'];
		$age= 2023 - $_POST['annee'];

		echo $user.", vous avez: ".$age." ans";
	}
	else {
		echo "Remplissez vos champs";
	}
?>
