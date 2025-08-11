<?php
    $servername = "localhost";
    $username = "root"; // Your MySQL username
    $password = ""; // Your MySQL password
    $database = "library_db"; // Name of your new database

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $book_title = $_POST['book_title'];
    $name = $_POST['name'];
    $membership_id = $_POST['membership_id'];
    $phone = $_POST['phone'];
    $borrow_date = date("Y-m-d"); // Current date
    $due_date = date('Y-m-d', strtotime('+14 days')); // Due date (e.g., 14 days)

    // Insert data into database
    $sql = "INSERT INTO borrowed_books (book_title, member_name, membership_id, member_phone, borrow_date, due_date)
    VALUES ('$book_title', '$name', '$membership_id', '$phone', '$borrow_date', '$due_date')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Book borrowed successfully! Due date: " . $due_date . "');</script>";
        echo "<script>window.setTimeout(function(){ window.location.href = 'index.html'; }, 1000);</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>