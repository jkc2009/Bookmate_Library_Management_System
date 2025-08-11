<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borrowed Books Management</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <a href="index.html">Back to Home</a>
    <h2>Borrowed Books</h2>
    <table>
        <tr>
            <th>No.</th>
            <th>Book Title</th>
            <th>Member Name</th>
            <th>Membership ID</th>
            <th>Phone</th>
            <th>Borrow Date</th>
            <th>Due Date</th>
        </tr>
        <?php
            // Connect to the database
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "library_db";

            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Query the borrowed_books table
            $sql = "SELECT book_title, member_name, membership_id, member_phone, borrow_date, due_date FROM borrowed_books ORDER BY borrow_date DESC";
            $result = $conn->query($sql);

            if (!$result) {
                die("Query failed: " . $conn->error);
            }

            $serialNumber = 1;

            if ($result->num_rows > 0) {
                // Output data of each row
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>".$serialNumber."</td>";
                    echo "<td>".$row["book_title"]."</td>";
                    echo "<td>".$row["member_name"]."</td>";
                    echo "<td>".$row["membership_id"]."</td>";
                    echo "<td>".$row["member_phone"]."</td>";
                    echo "<td>".$row["borrow_date"]."</td>";
                    echo "<td>".$row["due_date"]."</td>";
                    echo "</tr>";
                    $serialNumber++;
                }
            } else {
                echo "<tr><td colspan='7'>No books currently borrowed</td></tr>";
            }
            $conn->close();
        ?>
    </table>
</body>
</html>