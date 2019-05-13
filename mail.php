<?php
require ('PHPMailer/PHPMailerAutoload.php');
$data = file_get_contents('php://input');
$decodedData = json_decode($data);

$mail = new PHPMailer();
$mail->isSendmail();
$mail->Host = 'smtp.ionos.com';
$mail->SMTPAuth = true;
$mail->Username = "info@lakeelectronicsgroup.com";
$mail->Password =  "michael5191";
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->From = 'info@lakeelectronicsgroup.com'; // *
$mail->addAddress('info@lakeelectronicsgroup.com'); // *
$mail->FromName = "LEG Inquiry"; // *
$mail->WordWrap = 50;
$mail->isHTML(true);
$mail->Subject = 'LEG Inquiry from ' . $decodedData->name; // *
$mail->Body    = 'From - ' . $decodedData->name . '<br><br>Email - ' . $decodedData->email . '<br><br>Phone - ' . $decodedData->phone . '<br><br>Message from sender - ' . $decodedData->message; // *
if(!$mail->Send()) {
    $error = 'Mail error: '.$mail->ErrorInfo;
    echo $error;
} else {
    $success = 'Message sent!';
    echo $success;
}