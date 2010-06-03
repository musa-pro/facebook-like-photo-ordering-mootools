window.addEvent('domready', function() {
      /* create sortables */
    	var sb = new Sortables('sortable-thumbs', {
    		/* set options */
    		clone:true,
    		revert: true,
    		/* initialization stuff here */
    		initialize: function() {
            			
    		},
    		/* once an item is selected */
    		onStart: function(el,cl) {       
    			el.setStyle('background','#EEEEEE');    		 
    		},
    		onSort: function(el, clone){
          sorted = true;
        },
    		/* when a drag is complete */
    		onComplete: function(el) {
    			el.setStyle('background','#FFFFFF');
    			
    			if(sorted) {
              sorted = false; // clear it out again
              
                //build a string of the order
          			var sort_order = '';    			
          			sort_order = sb.serialize();
          			
          			//do an ajax request
          			var req = new Request({
          					url:'save.php',
          					method:'post',
          					autoCancel:true,
          					data:'sort_order=' + sort_order,
          					onRequest: function() {},
          					onSuccess: function(data) {
          					 	alert(data);
                       //update divs if needed
          					}
          				}).send();
          				
          			}
    			
    		}
    	});
	
});
