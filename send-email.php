<?php

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = 'User: '.$name. ' Message: '.$_POST['message'];
    $sendTo = 'valeriiderevshchykov@gmail.com';
//send email
    mail($sendTo , "This is an email from: " .$email, $message);
}