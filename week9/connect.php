<?php
    //server info and log-in details
    //keep servername the same and change to your username, password, and database name
    $servername = "localhost:3308";
    $username = "web13";
    $password = "SP2022web13";
    $dbname = "web13db";
    
    //create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    //check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "connected successfully<br>";

    //pull form data and store in variables
    if (isset($_POST['name'], $_POST['age'], $_POST['genre'], $_POST['singer'], $_POST['song'])) {
        $name = $_POST['name'];
        $age = $_POST['age'];
        $genre = $_POST['genre'];
        $singer = $_POST['singer'];
        $song = $_POST['song'];
    } else {
        echo 'You need to input all the details.';
    }

    //inserting form data into a table in your database
    //student is the name of the table i created and name, age, genre, singer, song are the names of my columns
    $sql = "INSERT INTO students (name, age, genre, singer, song)
    VALUES ('$name', '$age', '$genre', '$singer', '$song')";
    
    //return status to user
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }

    //close connection
    mysqli_close($conn);
?>