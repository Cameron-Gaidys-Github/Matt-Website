<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email format. Please provide a valid email address.';
        exit;
    }

    $to = 'atoz-mg@pacbell.net';
    $subject = 'New message from your website';
    $message_body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $message_body)) {
        echo 'Message sent successfully! Thank you for contacting us.';
    } else {
        echo 'Failed to send message. Please try again later.';

    }
}
?>
