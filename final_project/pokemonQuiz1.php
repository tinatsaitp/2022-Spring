<!DOCTYPE html>
<html>

<head>
  <title> Pokemon Quiz - Personal Information </title>
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
    <h2 class="biggerTitle"> Welcome to the Pokemon Quiz </h2>
    <h3>This quiz can help you find your Destiny Pokemon. </h3>
    <h4> Please fill in your personal information before taking the quiz. </h4>
    <h3> Enjoy the Pokemon Quiz!</h3>
  </div>

  <form action='pokemonQuiz01.php' method="post">
    <h2> Personal Information </h2>
      <label for="Name">Name:</label>
        <input type='text' name="name" id="name" required>

      <br>
      <br>

      <label for="Gender">Gender:</label>
        <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
        </select>

      <br>
      <br>

      <label for="Age">Age Group:</label>
        <select name="age" id="age">
            <option value="under18">Under 18</option>
            <option value="18to25">18-25</option>
            <option value="26to45">26-45</option>
            <option value="46to62">46-62</option>
            <option value="above62">Above 62</option>
        </select>

      <br>
      <br>
    
      <input type="submit" name="submit" id="submit" class="submit" value="Next Page">
  </form>

    <br>
    <br>

</body>
</html>