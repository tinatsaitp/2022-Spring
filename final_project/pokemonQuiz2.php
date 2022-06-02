<!DOCTYPE html>
<html>

<head>
  <title> Pokemon Quiz - Quiz Start </title>
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
    <h2> Start Quiz </h2>
    <h3> Rules: </h3>
    <h4>
      1. Complete the following questions. <br>
      2. After completing all questions, click Submit button to view your result.
    </h4>
    <p>
      [Important] Once you submit your answers, you won't be able to return to this page again. <br> So please choose your answers carefully.
    </p>
  </div>
  
  <form action='pokemonQuiz02.php' method="post">
    <div class="row">
      <div class="column circle">
        <h2>Pokemon Gender:</h2>

        <input type="radio" id="male" name="pokeGender" value="male" required>
        <label for="Male"> Male </label><br>

        <input type="radio" id="female" name="pokeGender" value="female">
        <label for="Female"> Female </label><br>

        <input type="radio" id="genderless" name="pokeGender" value="genderless">
        <label for="Genderless"> Genderless </label><br>
      </div>


      <br>


      <div class="column circle">
        <h2>Pokemon Color:</h2>
        
        <input type="radio" id="red" name="color" value="red" required>
        <label for="Red"> Red </label>
        <br>
        
        <input type="radio" id="yellow" name="color" value="yellow">
        <label for="Yellow"> Yellow </label>
        <br>

        <input type="radio" id="green" name="color" value="green">
        <label for="Green"> Green </label>
        <br>

        <input type="radio" id="blue" name="color" value="blue">
        <label for="Blue"> Blue </label>
        <br>

        <input type="radio" id="purple" name="color" value="purple">
        <label for="Purple"> Purple </label>
        <br>

        <input type="radio" id="pink" name="color" value="pink">
        <label for="Pink"> Pink </label>
        <br>

        <input type="radio" id="brown" name="color" value="brown">
        <label for="Brown"> Brown </label>
        <br>

        <input type="radio" id="white" name="color" value="white">
        <label for="White"> White </label>
        <br>

        <input type="radio" id="gray" name="color" value="gray">
        <label for="Gray"> Gray </label>
        <br>

        <input type="radio" id="black" name="color" value="black">
        <label for="Black"> Black </label>
        <br>
      </div>
    </div>

      <br>


    <div class="row">
      <div class="column circle">
        <h2>Pokemon Type:</h2>

        <input type="radio" id="normal" name="type" value="normal" required>
        <label for="Normal"> Normal </label>

        <input type="radio" id="fighting" name="type" value="fighting">
        <label for="Fighting"> Fighting </label><br>

        <input type="radio" id="flying" name="type" value="flying">
        <label for="Flying"> Flying </label>

        <input type="radio" id="poison" name="type" value="poison">
        <label for="Poison"> Poison </label><br>

        <input type="Radio" id="ground" name="type" value="ground">
        <label for="Ground"> Ground </label>

        <input type="radio" id="rock" name="type" value="rock">
        <label for="Rock"> Rock </label><br>

        <input type="radio" id="bug" name="type" value="bug">
        <label for="Bug"> Bug </label>

        <input type="radio" id="ghost" name="type" value="ghost">
        <label for="Ghost"> Ghost </label><br>

        <input type="radio" id="steel" name="type" value="steel" required>
        <label for="Steel"> Steel </label>

        <input type="radio" id="fire" name="type" value="fire">
        <label for="Fire"> Fire </label><br>

        <input type="radio" id="water" name="type" value="water">
        <label for="Water"> Water </label>

        <input type="radio" id="grass" name="type" value="grass">
        <label for="Grass"> Grass </label><br>

        <input type="radio" id="electric" name="type" value="electric">
        <label for="Electric"> Electric </label>

        <input type="Radio" id="psychic" name="type" value="psychic" required>
        <label for="Psychic"> Psychic </label><br>

        <input type="radio" id="ice" name="type" value="ice">
        <label for="Ice"> Ice </label>

        <input type="radio" id="dragon" name="type" value="dragon">
        <label for="Dragon"> Dragon </label><br>

        <input type="radio" id="dark" name="type" value="dark">
        <label for="Dark"> Dark </label>

        <input type="radio" id="fairy" name="v" value="fairy">
        <label for="Fairy"> Fairy </label><br>

        <input type="radio" id="shadow" name="type" value="shadow">
        <label for="Shadow"> Shadow </label>

        <input type="radio" id="unknown" name="type" value="unknown">
        <label for="Unknown"> Unknown </label><br>
      </div>


      <br>


      <div class="column circle">
        <br>
        <h2>Pokemon Growth Rate:</h2>
        
        <input type="radio" id="slow" name="growthRate" value="slow" required>
        <label for="Slow"> Slow </label><br>

        <input type="radio" id="medium" name="growthRate" value="medium">
        <label for="Medium"> Medium </label><br>

        <input type="radio" id="fast" name="growthRate" value="fast">
        <label for="Fast"> Fast </label><br>

        <input type="radio" id="medium-slow" name="growthRate" value="medium-slow">
        <label for="Medium-Slow"> Medium Slow </label><br>

        <input type="radio" id="slow-then-very-fast" name="growthRate" value="slow-then-very-fast" required>
        <label for="Slow-Then-Very-Fast"> Slow Then Very Fast </label><br>

        <input type="radio" id="fast-then-very-slow" name="growthRate" value="fast-then-very-slow">
        <label for="Fast-Then-Very-Slow"> Fast Then Very Slow </label><br>
      </div>
    </div>

      <input type="submit" name="submit" id="submit" class="submit">
  </form>

  <br>
  <br>
  <br>
  <br>
      
</body>
</html>