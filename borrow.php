<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "library_db";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $book_title = $_POST['book_title'];
    $book_id = $_POST['book_id'];
    $name = $_POST['name'];
    $membership_id = $_POST['membership_id'];
    $phone = $_POST['phone'];
    $borrow_date = date("Y-m-d");
    $due_date = date('Y-m-d', strtotime('+14 days'));

    $sql = "INSERT INTO borrowed_books (book_title, book_id, member_name, membership_id, member_phone, borrow_date, due_date)
    VALUES ('$book_title', '$book_id', '$name', '$membership_id', '$phone', '$borrow_date', '$due_date')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Book borrowed successfully! Due date: " . $due_date . "');</script>";
        echo "<script>window.setTimeout(function(){ window.location.href = 'index.html'; }, 1000);</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>