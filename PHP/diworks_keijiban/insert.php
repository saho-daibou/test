<?php
mb_internal_encoding("utf8");

$handlename = trim($_POST['handlename']);
$title      = trim($_POST['title']);
$comments   = trim($_POST['comments']);

$pdo = new PDO("mysql:dbname=practice_php;host=localhost;","root","");
$pdo ->exec("insert into diworks_keijiban(handlename,title,comments)
    values('".$_POST['handlename']."','".$_POST['title']."','".$_POST['comments']."');");

header("Location:http://localhost/diworks_keijiban/index.php");
exit;
?>

