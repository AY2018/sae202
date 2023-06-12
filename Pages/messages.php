<?php
// Assuming you have a MySQL database connection
$conn = mysqli_connect("localhost", "ayoubkahfy_final", "Ayoub2018ww", "ayoubkahfy_sae203");

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = isset($_POST['name']) ? $_POST['name'] : 'Anonyme';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // SQL to insert record
    $sql = "INSERT INTO messageTable (name, message, status) VALUES (?, ?, 'notOk')";

    // Prepare statement
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
      die("Error: " . $conn->error);
    }

    // Bind parameters
    $stmt->bind_param('ss', $name, $message);

    // Execute statement
    if ($stmt->execute()) {
      echo "Record inserted successfully";
    } else {
      echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/general.css">
    <link rel="stylesheet" href="../styles/new.css">
    <link rel="stylesheet" href="../styles/header_footer.css">
    <link rel="stylesheet" href="../styles/messages.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <title>Tu peux changer</title>
</head>

<body>
    <!-- Header -->
    <header id="header">
        <nav>
            <a href="../index.html">
                <h1 class="neonText">#OnTeVoit</h1>
            </a>
            <ul>
                <li><a href="./jeu.html">Fais ton choix</a></li>
                <li><a href="./harceleur.html">#OnTeVoit</a></li>
                <li class="current"><a href="./messages.php">Tu peux changer</a></li>
                <li><a href="./new.html">Je me fais harceler</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Harceleurs -->
        <article class="messages">
            <h1>Ceux qui ont choisi la bonne voie</h1>
            <section class="messages_container">
                <?php
                // Fetch and display messages
                $sql = "SELECT name, message FROM messageTable WHERE status = 'ok'";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo '<div class="messages_card">';
                        echo '<p class="name">'.htmlspecialchars($row["name"]).'</p>';
                        echo '<p class="messages_card_text">'.nl2br(htmlspecialchars($row["message"])).'</p>';
                        echo '</div>';
                    }
                } else {
                    echo "No messages found";
                }
                ?>
            </section>
            <a href="#" onclick="openForm()">Laisser un message</a>
        </article>
    </main>

    <article class="form_msg" id="formSection" style="display: none">
        <form action="messages.php" method="post">
            <i class="fa-solid fa-x" onclick="closeForm()"></i>
            <fieldset class="anonymouSection">
                <label for="anonymous">
                    <input type="radio" id="anonymous" name="name_option" value="Anonyme" checked
                        onchange="nameOptionChange()">
                    Anonyme
                </label>
    
                <label for="not_anonymous">
                    <input type="radio" id="not_anonymous" name="name_option" value="Not Anonyme"
                        onchange="nameOptionChange()">
                    Prénom
                </label>
            </fieldset>
    
    
            <fieldset>
                <label for="name">Prénom:</label>
                <input type="text" id="name" name="name" disabled value="Anonyme">
            </fieldset>
    
    
            <fieldset>
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Quelle est votre histoire? Voudriez-vous vous excuser?"></textarea>
            </fieldset>
    
            <input type="submit" value="Envoyer">
        </form>
    
    
    </article>

    <footer>
        <section class="footer_firstRow">
            <figure class="footer_section">
                <img src="../img/logoGiv1.png" alt="">
            </figure>
            <ul class="footer_section">
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-tiktok"></i></a></li>
            </ul>
            <div class="footer_section lastSection">
                <ul>
                    <li><a href="./conditions.html">Conditions générales</a></li>
                    <li><a href="./confidetialite.html">Politique de confidentialité</a></li>
                    <li><a href="../sitemap.xml">Plan du site</a></li>
                </ul>
            </div>
        </section>

        <section class="footer_secondRow">
            <p>© 2023 #OnTeVoit | Site créé par <a href="https://ay2018.github.io/cosmo/" target="_blank">Cosmo</a></p>
        </section>
    </footer>

    <script src="../js/slider.js"></script>
    <script src="../js/script.js"></script>
    <script>
        function nameOptionChange() {
            // Get the radio buttons
            var anonymous = document.getElementById('anonymous');
            var notAnonymous = document.getElementById('not_anonymous');

            // Get the text input field
            var nameInput = document.getElementById('name');

            // If the "anonymous" radio button is checked, disable the input field and set its value to "Anonyme"
            if (anonymous.checked) {
                nameInput.value = 'Anonyme';
                nameInput.disabled = true;
            }
            // If the "Prénom" radio button is checked, enable the input field and clear its value
            else if (notAnonymous.checked) {
                nameInput.value = '';
                nameInput.disabled = false;
            }
        }
    </script>

</body>

</html>