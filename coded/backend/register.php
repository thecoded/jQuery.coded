<?php



extract($_REQUEST);

if(!isset($db)){
	echo('[{"result":"fail", "reason":"Please send over a database to query."}]');
	return;
}
include_once('db.php');

$tableExists = dbQuery('SELECT codedUsers');

?>