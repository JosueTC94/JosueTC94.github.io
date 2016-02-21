$(document).ready(function()
{
  alert("probando");
  $("#dsi").click(function()
  {
    $.getJSON('bd.js', function(datos){
        //mostramos el nombre del colegio
        console.log(datos.Asignatura);

        //mostramos la lista de estudiantes con sus notas y paises
        console.log('\nLista de Prácticas');
        $.each(datos.practicas, function(posicion, practica){
            console.log(' >',
                'Posición: ' + posicion,
                '/ Nombre: ' + practica.titulo,
                '/ Nota: ' + practica.url,
                '/ País: ' + practica.url_paginaweb
            );
        });

        //mostramos la lista de profesores
        console.log('\nLista de profesores');
        $.each(datos.profesores, function(indice, nombre){
            console.log(' >', indice + '.' + nombre);
        });
    });

  });
});
