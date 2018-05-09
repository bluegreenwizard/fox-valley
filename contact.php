<?php
if ($_POST) {
  $errors = array();

  $name = filter_var($_POST['name'], FILTER_SANITIZE_EMAIL);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $subject = 'Fox Valley Contact Form: ';
  $subject .= filter_var($_POST['subject'], FILTER_SANITIZE_EMAIL);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_EMAIL);

  if ($_POST['about']) {
    $about = join("<br>", $_POST['about']);
  } else {
    $about = "No topics selected.";
  }

  $headers = "From: $name <$email>" . "\r\n";
  $headers .= 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $to = 'neufdl@charter.net';
  $body = "<b>Name:</b> $name<br><b>E-Mail:</b> $email<br><b>Topics:</b><br>$about<br><b>Message:</b><br> $message";

  //reCaptcha
  $captcha = $_POST['g-recaptcha-response'];
  $secret = "6LfJgxMUAAAAAL3gENwmws4TMT6I7vJ-AAjGcZvE";
  $user_ip = $_SERVER["REMOTE_ADDR"];

  $captcha_verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip=$user_ip");
  $result = json_decode($captcha_verify, true);

  //Error Checking
  if (!$result->success === 1) {
    $errors[] = 'Problem with reCaptcha. Please try again.';
    $errors[] = implode(', ', $result);
  }
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
  }

  //Send e-mail
  if (sizeof($errors) == 0) {
    if (mail($to, $subject, $body, $headers)) {
      $res = 'Thank you! We will get back to you shortly.';
    } else {
      $errors[] = 'There was an error sending your message.';
    }
  }
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Fox Valley Bahá'ís</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Aref+Ruqaa" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
    <script src='js/lib/jquery.min.js'></script>
    <script src='js/lib/jquery-ui.min.js'> </script>
    <script src="js/hamburger.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>

    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div id="container" class="container-fluid">
      <header>
        <h1><a href="index.html">Fox Valley Bahá'ís</a></h1>
        <div id="hamburger" class="mobile"><a href="#nav" id="burger-button"></a></div>
        <nav>
          <ul class="list-inline">
            <li><a href="index.html">Home</a></li>
            <li><a href="who.html">Who We Are</a></li>
            <li><a href="events.html">Local Activities</a></li>
            <li><a href="contact.php" class="current-page">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <div id="contact-content" class="container">
        <?php
          if (sizeof($errors) > 0) {
            print('<ul id="contact-notify">');
            foreach($errors as $error) {
              printf('<li class="text-danger"><p>%s</p></li>', $error);
            }
            print('</ul>');
          } else if ($res) {
            print('<ul id="contact-notify">');
            printf('<li class="text-success"><p>%s</p></li>', $res);
            print('</ul>');
          }
        ?>
        <div class="col-md-5" id="get-involved">
          <h2>Get Involved</h2>
          <p>Let us know how we can help you. We welcome your questions, comments, ideas and suggestions.</p>
          <p>Feel free to contact us using our web form, or call us at <strong>1-800-22-UNITE (national)</strong> or <strong>(920) 539-2979 (local)</strong>.</p>
        </div>

        <form id="contact-us" name="contact-us" class="col-md-offset-1 col-md-6 form-horizontal" role="form" method="post" action="contact.php">
          <div class="form-group">
            <label for="name" class="col-md-2 control-label">Name: </label>
            <div class="col-md-10">
              <input type="text" class="form-control" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-md-2 control-label">Email: </label>
            <div class="col-md-10">
              <input type="text" class="form-control" name="email" required />
            </div>
          </div>
          <fieldset>
            <legend>I want to know more about:</legend>
            <div class="form-group">
            <label for="about1" class="col-md-10">
              <input type="checkbox" id="about1" name="about[]" value="General Information"/>
              <span>General Information</span>
            </label>
          </div>
            <div class="form-group">
            <label for="about2" class="col-md-10">
              <input type="checkbox" id="about2" name="about[]" value="Children and Youth Classes"/>
              <span>Children and Youth Classes</span>
            </label>
          </div>
            <div class="form-group">
            <label for="about3" class="col-md-10">
              <input type="checkbox" id="about3" name="about[]" value="Study Circles"/>
              <span>Study Circles</span>
            </label>
          </div>
            <div class="form-group">
            <label for="about4" class="col-md-10">
              <input type="checkbox" id="about4" name="about[]" value="Devotional Gatherings"/>
              <span>Devotional Gatherings</span>
            </label>
          </div>
            <div class="form-group">
            <label for="about5" class="col-md-10">
              <input type="checkbox" id="about5" name="about[]" value="Other"/>
              <span>Other</span>
            </label>
          </div>
          </fieldset>
          <div class="form-group">
            <label for="subject" class="col-md-2 control-label">Subject: </label>
            <div class="col-md-10">
              <input type="text" class="form-control" name="subject" required />
            </div>
          </div>
          <div class="form-group">
            <label for="message" class="col-md-2">
                <span>Message: </span>
            </label>
            <div class="col-md-10">
              <textarea class="form-control col-md-10" cols="40" type="text" name="message" required></textarea>
            </div>
          </div>
          <div class="col-md-offset-2 g-recaptcha" data-sitekey="6LfJgxMUAAAAAKTPzxVpVpmjfMTTJOyH9rm6GsuM"></div>
          <div class="form-group">
            <div class="col-md-offset-2">
              <button class="btn btn-default" type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
      <footer id="page-footer">
        <p>Design by <a href="#">Nathaniel Perry</a>.</p>
      </footer>
    </div>
</body>
</html>
