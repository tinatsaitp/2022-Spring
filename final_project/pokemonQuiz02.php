<?php
// Start the session
session_start();
?>

<?php
    //server info and log-in details
    //keep servername the same and change to your username, password, and database name
    $servername = "localhost:3308";
    $username = "web13dbuser";
    $password = "SP2022web1010";
    $dbname = "web13db";
    
    //create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    //check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "connected successfully<br>";


    //pull form data and store in variables
    if (isset($_POST['pokeGender'], $_POST['color'], $_POST['type'], $_POST['growthRate'])) {
        $pokeGender = $_POST['pokeGender'];
        $color = $_POST['color'];
        $type = $_POST['type'];
        $growthRate = $_POST['growthRate'];
    } else {
        echo 'You need to input all the details.';
    }

    //inserting form data into a table in your database
    //student is the name of the table i created and name, age, genre, singer, song are the names of my columns
    $sql = "INSERT INTO pokemonquizall (pokeGender, color, type, growthRate)
    VALUES ('$pokeGender', '$color', '$type', '$growthRate')";
    

    $_SESSION['pokeGender'] = $pokeGender;
    $_SESSION['color'] = $color;
    $_SESSION['type'] = $type;
    $_SESSION['growthRate'] = $growthRate;


        //return status to user
    if (mysqli_query($conn, $sql)) {
        //link to next the html page
        //echo "Congratulation " . $name;
        header('Location: pokemonQuiz3.php');
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    //close connection
    mysqli_close($conn);
?>