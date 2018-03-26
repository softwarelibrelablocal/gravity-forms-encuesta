ejemplo muestra una consulta sobre los presupuestos donde el ciudadano puede asignar prioridades de entre varias opciones.

### Requisitos ###

- Se debe tener instalado el plugin de WordPress **Gravity Forms**.

### Instalación e Instrucciones ###

1. Suba la carpeta **gravityforms-custom-resources** a su directorio **/wp-content/plugins/** (o importe el fichero zip con el plugin).
2. Active el plugin **Gravity Forms Custom Resourcesdesde** desde su menú de plugins en WordPress.
3. Importar el formulario de Gravity Forms desde el archivo **gravityforms-consulta-presupuestos.json**. Para ello vaya al menú de Gravity Forms: Formularios->Importar/Exportar->Importar formularios. Seleccione el fichero **gravityforms-consulta-presupuestos.json** que está en la carpeta del plugin **export_gravity_forms_to_import**
4. Creé una nueva página (o post) e inserte el **shortcode** del formulario de Gravity importado.
5. Cambie las urls de las imágenes representativas en los elementos HTML del formulario:
Ej: <img src="/presupuestos/wp-content/uploads/2016/01/PRESUPUESTOS-OTROS.jpg">
<div style="clear:both; margin-bottom: 30px;"></div>.
