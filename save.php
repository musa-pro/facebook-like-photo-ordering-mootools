<?php
 $sort_order = $_REQUEST['sort_order'];
 $orders = explode(',',$_REQUEST['sort_order']);
 
 
 	
	foreach($orders as $order=>$id){		
			$query = 'UPDATE photo_table SET sort_order = '.$index.' WHERE id = '.$id;
			//...update query function as needed		
	}

print_R($orders);

?>
