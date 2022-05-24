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
    if (isset($_POST['name'], $_POST['gender'], $_POST['age'])) {
        $name = $_POST['name'];
        $gender = $_POST['gender'];
        $age = $_POST['age'];
    } else {
        echo 'You need to input all the details.';
    }

    //inserting form data into a table in your database
    //student is the name of the table i created and name, age, genre, singer, song are the names of my columns
    $sql = "INSERT INTO pokemonquiz (name, gender, age)
    VALUES ('$name', '$gender', '$age')";
    

    $_SESSION['name'] = $name;


        //return status to user
    if (mysqli_query($conn, $sql)) {
        //link to next the html page
        //echo "Congratulation " . $name;
        header('Location: pokemonQuiz2.php');
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    //close connection
    mysqli_close($conn);
?>