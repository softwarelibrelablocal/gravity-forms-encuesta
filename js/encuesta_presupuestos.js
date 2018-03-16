jQuery( document ).ready(function() {
	
	//Mostramos los combos correspondiente a la plaza
	if (typeof numpag !== "undefined") {
		if(numpag == 2) {
			for(i=0;i<numopcion;i++) {
				jQuery(".gchoice_2_4_" + i).show();
			}
		}
	}
	
	//Al hacer resize llamamos a la funcion que adapta las google charts
	//window.onresize = resize(numpag);
	
	window.addEventListener('resize', function(event){
		resize(numpag);
	});
	
	//Anclas para las plazas
	jQuery( ".stat_combo_plazas" ).change(function() {			 
		scrollhacia('contenedor_plaza_' + this.value);
	});
});


/**************************************************************************/
/*                       FUNCIONES                                        */
/**************************************************************************/

/**
 * function to load a given css file
 */
loadCSS = function(href) {
	var cssLink = jQuery("<link rel='stylesheet' type='text/css' href='" + href + "'>");
	jQuery("head").append(cssLink);
};


function resize(numpag) {		
	if(numpag == 'estadisticas'){
		google.charts.setOnLoadCallback(drawChart1);
		google.charts.setOnLoadCallback(drawChart2);
		google.charts.setOnLoadCallback(drawChart3);
		google.charts.setOnLoadCallback(drawChart4);
		google.charts.setOnLoadCallback(drawChart6);
		google.charts.setOnLoadCallback(drawChart7);
		google.charts.setOnLoadCallback(drawChart9);
		google.charts.setOnLoadCallback(drawChart10);
		google.charts.setOnLoadCallback(drawChart11);
		google.charts.setOnLoadCallback(drawChart13);
		google.charts.setOnLoadCallback(drawChart14);
		google.charts.setOnLoadCallback(drawChart15);
		google.charts.setOnLoadCallback(drawChart16);
		google.charts.setOnLoadCallback(drawChart19);
		google.charts.setOnLoadCallback(drawChart20);
		google.charts.setOnLoadCallback(drawChart21);
	}
}

function scrollhacia(id){
	var tiempo = 1000;
	jQuery('body').scrollTo('#' + id,tiempo);
}