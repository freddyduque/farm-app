<?php
include_once '../../includes/vakuno/mailer.php';
$user_token="$9$2y$10$HsE.qJ3joy0kAX17dpOh5OYyAC1y68yKvAKUHOazK5iOBalo56dze";

  $splitted=explode("$", $user_token);

  for($i=2;$i<count($splitted);$i++){
    $token.="$".$splitted[$i];
  }
  $user_id = intval($splitted[1]);
d($token);
