 jQuery(document).ready(function() {
			
	if (typeof arr_google_img == "undefined" || !(arr_google_img instanceof Array)) {

	}else{
		
		for(i=1;i<=25;i++) {
		
			jQuery('#pregunta_'+arr_field_id[i]).tooltipster({
				content: jQuery('<span><img src="'+arr_google_img[i]+'" /></span>')
			});
		
		}		
	}            
 });