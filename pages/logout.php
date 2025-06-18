<?php
require_once 'config.php';

session_destroy();
header('Location: account_shoes.php');
exit();
?>