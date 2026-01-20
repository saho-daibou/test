

<?php
session_start();
mb_internal_encoding("utf8");
/* DB接続 */
$pdo = new PDO("mysql:dbname=practice_php;host=localhost;","root","");

/* 投稿データ取得 */
$stmt = $pdo->query("SELECT * FROM diworks_keijiban");
?>

<!doctype html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <title>diworksblog 掲示板</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <header>
            <div class="header-logo">
                <img src="diblog_logo.jpg" alt="D.I.BLOG ロゴ">
            </div>
            <nav>
                <ul>
                    <li>トップ</li>
                    <li>プロフィール</li>
                    <li>D.I.Blogについて</li>
                    <li>登録フォーム</li>
                    <li>問い合わせ</li>
                    <li>その他</li>
                </ul>
            </nav>
        </header>

        <main class="container">
            <div class="left">
                <h2>プログラミングに役立つ掲示板</h2>
                <!-- 投稿フォーム -->
                <div class="form-area">
                    <p id="form-title">入力フォーム</p>
                    <form method="post" action="insert_ver2.php">
                        <div>
                            <label>ハンドルネーム</label><br>
                            <input type="text" class="text" size="35" name="handlename"
                                   value="<?php echo $_SESSION['handlename'] ?? ''; ?>">
                        </div>
                        <div>
                            <label>タイトル</label><br>
                            <input type="text" class="text" size="35" name="title"
                                   value="<?php echo $_SESSION['title'] ?? ''; ?>">
                        </div>
                        <div>
                            <label>コメント</label><br>
                            <textarea name="comments" cols="75" rows="5"><?php
                                echo $_SESSION['comments'] ?? '';
                            ?></textarea>

                        </div>
                        <div>
                            <input type="submit" class="submit" value="投稿する">
                        </div>
                    </form>
                </div>

                <!-- 投稿一覧 -->
                <?php
                while ($row = $stmt->fetch()) {
                    echo "<div class='kiji'>";
                        echo "<div class='ktitle'>";
                            echo "<h3>" . $row['title'] . "</h3>";
                        echo "</div>";
                    echo "<div class='contents'>";
                    echo $row['comments'];
                    echo "<div class='handlename'>posted by " .
                         $row['handlename'] .
                         "</div>";
                    echo "</div>";
                    echo "</div>";
                }
                ?>
            </div>

            <div class="right">
                <section>
                    <h4>人気の記事</h4>
                    <ul>
                        <li>PHPオススメ本</li>
                        <li>PHP MyAdminの使い方</li>
                        <li>いま人気のエディタTops</li>
                        <li>HTMLの基礎</li>
                    </ul>
                </section>

                <section>
                    <h4>オススメリンク</h4>
                    <ul>
                        <li>ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</li>
                        <li>XAMPPのダウンロード</li>
                        <li>Eclipseのダウンロード</li>
                        <li>Bracketsのダウンロード</li>
                    </ul>
                </section>

                <section>
                    <h4>カテゴリ</h4>
                    <ul>
                        <li>HTML</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>JavaScript</li>
                    </ul>
                </section>
            </div>
        </main>

        <footer>
            <p>Copyright D.I.works | D.I.blog is the one which provides A to Z about programming</p>
        </footer>

    </body>
</html>

