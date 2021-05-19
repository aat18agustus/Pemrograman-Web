<?php

$connection = mysqli_connect("localhost", "root", "", "pemweb");
if (mysqli_connect_errno()) {
    echo mysqli_connect_errno();
}
