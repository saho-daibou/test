<?php
session_start();
mb_internal_encoding("utf8");

$handlename = trim($_POST['handlename']);
$title      = trim($_POST['title']);
$comments   = trim($_POST['comments']);

//入力値の一時保存
$_SESSION['handlename'] = $handlename;
$_SESSION['title']      = $title;
$_SESSION['comments']   = $comments;

if (
    strlen($handlename) > 0 &&
    strlen($title) > 0 &&
    strlen($comments) > 0
) {
    $pdo = new PDO("mysql:dbname=practice_php;host=localhost;","root","");

    $pdo->exec(
        "INSERT INTO diworks_keijiban(handlename, title, comments)
         VALUES ('{$handlename}', '{$title}', '{$comments}')"
    );

    //登録成功時は入力値クリア
    $_SESSION = [];
}

header("Location:http://localhost/diworks_keijiban/index.php");
exit;
?>

