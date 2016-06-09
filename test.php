<?php
include("../../includes/mysql.php");
// Our database object
$db = new mysql();
$rows = $db -> select("SELECT * FROM VK_USER WHERE ID=1;");
foreach ($rows as $value)
{
  extract($value);
  echo $ID.' '.$EMAIL.' '.$PASSWORD;
}
var_dump($db);
// Quote and escape form submitted values

//$name = $db -> quote("Freddy");//$_POST['username']);
//$email = $db -> quote("freddy.duque@gmail.com");//$_POST['email']);

// Insert the values into the database
//$result = $db -> query("INSERT INTO `users` (`name`,`email`) VALUES (" . $name . "," . $email . ")");
?>
