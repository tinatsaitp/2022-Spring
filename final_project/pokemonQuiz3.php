<?php
// Start the session
session_start();
?>

<!DOCTYPE html>
<html>

<head>
  <title> Pokemon Quiz - Result </title>
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- google font: https://fonts.google.com/specimen/Varela+Round?query=Round#standard-styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">

  <!-- API Link -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
  <link rel="stylesheet" href="pokemonQuiz.css" type="text/css">
</head>





<body>
  <h1> Pokemon Quiz </h1>
  <p id="cited">Created by Yun-Ting Tsai </p>
  
  <div class="content">
    <h3> Your Input: </h3>

    <?php
    // Echo session variables that were set on previous page
    echo "Pokemon Gender: " . $_SESSION['pokeGender'] . "<br>";
    echo "Pokemon Color: " . $_SESSION['color'] . "<br>";
    echo "Pokemon Type: " . $_SESSION['type'] . "<br>";
    echo "Pokemon Growth Rate: " . $_SESSION['growthRate'] . "<br>";
    ?>

    <br>
  </div>
  <p class="brown"> *** If you don't get a Destiny Pokemon, please refresh the page until you get the result. *** </p>

  <h2 class="biggerTitle brown"> Congratulation <?php echo $_SESSION['name'] ?>! </h2>
  <h2 class="biggerTitle brown"> Your Destiny Pokemon Is </h2>
  <br>

  <div id="output_card">
  </div>

  <br>
  <br>

  <input type="button" class="submit" value="Redo Quiz" onclick="location='pokemonQuiz1.php'" />

  <br>
  <br>
  <br>

  <script>
    var genders = "<?php echo $_SESSION['pokeGender']; ?>";
    var colors = "<?php echo $_SESSION['color']; ?>";
    var types = "<?php echo $_SESSION['type']; ?>";
    var growthRates = "<?php echo $_SESSION['growthRate']; ?>";
  </script>

  <script src="pokemonQuiz.js"></script>

  <!-- 
    SQL Tables Inner Join:
    SELECT name, gender, age, pokeGender, color, type, growthRate from pokemonquiz t1 INNER JOIN pokemonquizall t2 ON t1.id=t2.id
  -->

</body>
</html>