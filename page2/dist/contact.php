<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Adresse e-mail de destination (remplacez par votre adresse e-mail)
    $to = "reslane49100@gmail.com";

    // Sujet de l'e-mail
    $subject = "Nouveau message de $name";

    // Corps de l'e-mail
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // En-têtes de l'e-mail
    $headers = "From: $email";

    // Envoyer l'e-mail
    mail($to, $subject, $body, $headers);
}
?>
