<?php
// Commencer une session
session_start();

if (isset($_SESSION['utilisateur'])) {
    header("Location: dashboard.php");
    exit();
}


// Si l'utilisateur a soumis le formulaire de connexion
if (isset($_POST['utilisateur']) && isset($_POST['mdp'])) {
    $utilisateur = $_POST['utilisateur'];
    $mdp = $_POST['mdp']; 

    // Connection 
    $conn = mysqli_connect("localhost", "ayoubkahfy_final", "Ayoub2018ww", "ayoubkahfy_sae203");

    // Query the database for user
    $sql = "SELECT id FROM user WHERE utilisateur = '$utilisateur' AND mdp = '$mdp'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_assoc($result);
    $_SESSION["loggedin"] = true;
    $_SESSION["id"] = $row["id"];
    $_SESSION["utilisateur"] = $utilisateur;

    header("Location: dashboard.php");
    exit();
} 

else {
    echo "<p class='failedLogin'> <i class='fa-solid fa-x'></i> Connexion échouée</p>";
}


    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Login</title>
</head>
<body>
    <form action="login.php" method="POST" class="loginForm">
    <p>
        <label>Nom d'utilisateur</label>
        <input type="text" name="utilisateur" required>
    </p>
    <p>
        <label>Mot de Passe</label>
        <input type="password" name="mdp" required>
    </p>
    <p>
        <input type="submit" value="Login" id="btn">
    </p>
</form>
</body>
</html>
