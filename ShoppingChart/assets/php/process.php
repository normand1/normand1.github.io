<?php 
$toemail = 'test@youremail.com'; // To Email Address
$name = $_POST['name']; // Name Field
$email = $_POST['email']; // Email Field
$message = $_POST['message']; // Message Field
if(mail($toemail, 'Subject', $message, 'From: ' . $email)) {
	echo '<div class="cmessage" >Your email was sent successfully.</div>'; // Send succesfull message 
} else {
	echo '<div class="cmessage">There was a problem sending your email.</div>'; // Send Error Message
}
?>