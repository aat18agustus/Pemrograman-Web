<?php
include 'connect.php';
$id = $_GET['id'];
mysqli_query($connection, "DELETE FROM user WHERE id='$id'");

header("location:index.php?pesan=hapus");
