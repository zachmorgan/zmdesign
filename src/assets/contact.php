<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $state = $_POST['state'];

  $from = 'From: ' + $email; 
  $to = 'zmorgandesign@hotmail.com'; 
  $subject = 'Project Querry';

  $body = "From: $name\n E-Mail: $email\n Message:\n $message";

  $body = "From: $name\n E-Mail: $email\n Message:\n $message";

  if ($_POST['submit']) {
    if ($name != '' && $email != '') {
      if ($state == '') {				 
        if (mail ($to, $subject, $body, $from)) { 
          echo '<p class="passed">Your message has been sent!</p>';
        } else { 
          echo '<p class="fail">Something went wrong, go back and try again!</p>'; 
        } 
      } else if ($_POST['submit'] && $state != '') {
        echo '';
      }
    } else {
      echo '<p class="fail">You need to fill in all required fields!!</p>';
    }
  }
?>