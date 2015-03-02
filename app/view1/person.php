<?php
//Variables for connecting to your database.
//These variable values come from your hosting account.
$hostname = "forgottenGenocid.db.5079411.hostedresource.com";
$username = "forgottenGenocid";
$dbname = "forgottenGenocid";

//These variable values need to be changed by you before deploying
$password = "my1stDB2!";
$usertable = "person";
$yourfield = "name";

//Connecting to your database
mysql_connect($hostname, $username, $password) OR DIE ("Unable to
connect to database! Please try again later.");
mysql_select_db($dbname);

//Fetching from your database table.
$query = "SELECT * FROM $usertable";
$result = mysql_query($query);

if ($result) {
    while($row = mysql_fetch_array($result)) {
        $name = $row["$yourfield"];
        echo "$name";
    }
}
?>
        