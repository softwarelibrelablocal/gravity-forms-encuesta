
var opciones_pag_2 = 5;
var opciones_pag_3 = 4;
var opciones_pag_4 = 4;
var opciones_pag_5 = 4;
var opciones_pag_6 = 4;
var opciones_pag_7 = 4;

jQuery( document ).ready(function() {
	init();
	
	//asignar los eventos a los combos
	combos_eventos();
	
	jQuery(".ginput_container_select").addClass("col-xs-2 col-xs-pull-10");
	
	jQuery(".gfield_label").addClass("col-xs-10 col-xs-push-2");
	jQuery(".ginput_container_text").addClass("col-xs-10 col-md-push-2");
	jQuery(".no_pull > .gfield_label").removeClass("col-xs-10 col-xs-push-2");
	jQuery(".no_pull > .ginput_container_text").removeClass("col-xs-10 col-md-push-2");
	
	jQuery("#gform_wrapper_3").css("visibility", "visible");
	
	jQuery('.DNI > div > input').keyup(function () { 
	  this.value = this.value.replace(/[^0-9\.]/g,'');
	});
	
	
	

});

function combos_eventos(){
	//alert('dentro de asignar eventos');
	jQuery( "select" ).each(function() {
		// *** OJO SI SE CAMBIA EL CODIGO DE ESTA FUNCION HAY QUE CAMBIARLO TAMBIEN EN LA FUNCION DE ABAJO DE BORRADO****/
		jQuery( this ).change(function() {
			
			//alert('dentro de change');
			
			var id_select = jQuery(this).attr('id')

			var pagina_id = jQuery(this).parent().parent().parent().parent().parent().attr('id');
			var numero_pagina = pagina_id.substring(pagina_id.length - 1, pagina_id.length);
			
			//alert("pagina_id:" + pagina_id + " - numero_pagina:" + numero_pagina);

			//el combo actual solo se queda con la opcion seleccionada y los otros (de la misma pagina) se les quita esa opcion
			actualizar_combos(id_select,numero_pagina);
		});
		
	});
}

function actualizar_combos(id_select,numero_pagina){
	
	//alert("dentro de actualizar");

	var opcion_seleccionada = jQuery('option:selected','#' + id_select).text();
	var opcion_seleccionada_val = jQuery('option:selected','#' + id_select).val();
	
	
	//alert('opcion_seleccionada:' + opcion_seleccionada);
	
	//alert('numero_pagina:' + numero_pagina);
	
	//alert('id_select:' + id_select);
	
	//recorremos todos los combos
	jQuery( "select" ).each(function() {
			
		//alert(jQuery('option:selected',this).text());
		
		
		//jQuery("select#mySelect option[value='option1']").hide();
		
		
		var pagina_id = jQuery(this).parent().parent().parent().parent().parent().attr('id');
		var numero_pagina_ = pagina_id.substring(pagina_id.length - 1, pagina_id.length);
		
		var id_select_ = jQuery(this).attr('id');
		
		//alert("numero_pagina_:" + numero_pagina_);
		
		//si es un combo de la misma pagina que el combo cambiado
		if(numero_pagina == numero_pagina_){
		
			//si no es el combo cambiado eliminamos la opcion del combo cambiado
			if(id_select_ != id_select){
				//alert('No es el combo seleccionado, borramos la opcion seleccionada');
				
				//borra la opcion seleccionada en los demas
				//menos cuando el la opcion vacia de eleccion

				//alert('opcion_seleccionada:' + opcion_seleccionada);				
				//alert('id_select_:' + id_select_);
				
				
				jQuery('#' + id_select_).hideOption(opcion_seleccionada_val);
				
				

				
			}else{
				// si es el combo cambiado borramos todoas las otras opciones
				//alert('Es el combo seleccionado, borramos las otras opciones');
				jQuery('#' + id_select).find('option').each(function() {
					
						//alert("id_select:" + id_select + " - text:" + jQuery(this).text() );
						//alert(jQuery(this).val());
						
						//borra todas las opciones menos la sececcionada
						if(jQuery(this).text() != opcion_seleccionada){
							jQuery('#' + id_select_).hideOption(jQuery(this).val());
						}
					
				});
			}
		} 
		
	});
}

function init(){
	jQuery( "select" ).each(function() {
		var opcion_seleccionada = jQuery('option:selected',this).val();
		
		var id_select_ = jQuery(this).attr('id');
		
		//alert("opcion_seleccionada:" + opcion_seleccionada);
		
		//alert(opcion_seleccionada);
		if(opcion_seleccionada != ''){
			jQuery(this).find('option').each(function() {
				
				//alert("id:" + id + " - text:" + jQuery(this).text() );
				//alert(jQuery(this).val());
				
				//borra todas las opciones menos la sececcionada
				if(jQuery(this).val() != opcion_seleccionada){
					//alert("borro opcion");
					jQuery('#' + id_select_).hideOption(jQuery(this).val());
				}
					
			});
			
			var pagina_id = jQuery(this).parent().parent().parent().parent().parent().attr('id');
			var numero_pagina_ = pagina_id.substring(pagina_id.length - 1, pagina_id.length);
			actualizar_combos(id_select_,numero_pagina_);
		}
		
		//hay que quitar la opcion seleccionada de los demas combos (si no es vacio)
		
		
		//var pagina_id = jQuery(this).parent().parent().parent().parent().parent().attr('id');
		//var numero_pagina_ = pagina_id.substring(pagina_id.length - 1, pagina_id.length);
		//actualizar_combos(id_select_,numero_pagina_);
	});	
}


function borrar_orden(pagina){
	jQuery( "select" ).each(function() {
	
		var pagina_id = jQuery(this).parent().parent().parent().parent().parent().attr('id');
		var pagina_ = pagina_id.substring(pagina_id.length - 1, pagina_id.length);
		var id_select_ = jQuery(this).attr('id');
		
		//alert("pagina:" + pagina_);

		if(pagina == pagina_){
			//borramos todas las opciones
			/*
			jQuery(this).find('option').each(function() {
				
				jQuery('#' + id_select_).hideOption(jQuery(this).val());
					
			});
			*/
			
			//las volvemos a poner todas
			eval("numero_opciones = opciones_pag_" + pagina);
			
			//alert(numero_opciones);
			for(i=0;i<=numero_opciones;i++){
				if(i==0){
					//alert('elimino opcion seleccione');
					jQuery('#' + id_select_).showOption('');
					//jQuery(this).append('<option val=""></option>');
				}else{
					//alert('elimino opcion');
					jQuery('#' + id_select_).showOption(i);
					//jQuery(this).append('<option val="' + i + '">' + i + '</option>');
				}
			}
			
			jQuery('option[value=""]', this).prop("selected", true);
		}
		
	});
	
	//combos_eventos();

}


jQuery.fn.extend({
  toggleOption: function (value, show) {
    /// <summary>Show or hide the desired option</summary>
    return this.filter('select').each(function () {
      var select = jQuery(this);
      if (typeof show === 'undefined') {
        show = select.find('option[value="' + value + '"]').length == 0;
      }
      if (show) {
        select.showOption(value);
      }
      else {
        select.hideOption(value);
      }
    });
  },
  showOption: function (value) {
    /// <summary>Show the desired option in the location it was in when hideOption was first used</summary>
    return this.filter('select').each(function () {
      var select = jQuery(this);
      var found = select.find('option[value="' + value + '"]').length != 0;
      if (found) return; // already there

      var info = select.data('opt' + value);
      if (!info) return; // abort... hideOption has not been used yet

      var targetIndex = info.data('i');
      var options = select.find('option');
      var lastIndex = options.length - 1;
      if (lastIndex == -1) {
        select.prepend(info);
      }
      else {
        options.each(function (i, e) {
          var opt = jQuery(e);
          if (opt.data('i') > targetIndex) {
            opt.before(info);
            return false;
          }
          else if (i == lastIndex) {
            opt.after(info);
            return false;
          }
        });
      }
      return;
    });
  },
  hideOption: function (value) {
    /// <summary>Hide the desired option, but remember where it was to be able to put it back where it was</summary>
    return this.filter('select').each(function () {
      var select = jQuery(this);
      var opt = select.find('option[value="' + value + '"]').eq(0);
      if (!opt.length) return;

      if (!select.data('optionsModified')) {
        // remember the order
        select.find('option').each(function (i, e) {
          jQuery(e).data('i', i);
        });
        select.data('optionsModified', true);
      }

      select.data('opt' + value, opt.detach());
      return;
    });
  }
});
