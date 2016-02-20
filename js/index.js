$(document).ready(function()
{
	//Descarga inicial de prácticas
	$.ajax({
		url: "descarga_inicial.php"
	})
	.done(function(data,textStatus,jqXHR)
	{
		alert("Entre en el done");
		alert("Data->"+data.success);
		alert("Numero de filas->"+data.num_rows);
	})
	.fail(function(jqXHR,textStatus,errorThrown)
	{
		alert("Entre en el fail");
        if (jqXHR.status === 0) {
            console.log('Not connected.\nPlease verify your network connection.');
          }else if (jqXHR.status == 404) {
            console.log('The requested page not found. [404]');
	      }else if (jqXHR.status == 500) {
	            console.log('Internal Server Error [500].');
	      }else if (jqXHR === 'parsererror') {
	            console.log('Requested JSON parse failed.');
	      }else if (jqXHR === 'timeout') {
	            console.log('Time out error.');
	      }else if (jqXHR === 'abort') {
	            console.log('Ajax request aborted.');
	      }else{
	            console.log('Uncaught Error.\n' + jqXHR.responseText);
	      }

	});
	
	$("#proyecto1").hover(function()
	{
		$("#texto_proyecto1").fadeIn();
	},
	function()
	{
		$("#texto_proyecto1").css("display","none");
	});
	$("#proyecto1").click(function()
	{
		setTimeout(function(){location.href="http://banot.etsii.ull.es/alu4588/FINAL_PLANTILLA/index.php";},850);
	});
	$("#stw").click(function()
	{
		$("#practicas").show();
		$("#practica1_").show();
		location.href="#practicas";
		$("#asignatura_elegida").html("Sistemas y tecnologías web");
		$("#texto_no_asignaturas").css("display","none");
	});
	$("#practica1").hover(function()
	{
		$("#texto_practica1").fadeIn();
	},
	function()
	{
		$("#texto_practica1").css("display","none");
	});
  $("#practica2").hover(function()
  {
    $("#texto_practica2").fadeIn();
  },
  function()
  {
    $("#texto_practica2").css("display","none");
  }
)
	$("#tio").click(function()
	{
		$("#practicas").show();
		location.href="#practicas";
		$("#asignatura_elegida").html("Tecnologías de la Información para las organizaciones");
		$("#practica1_").css("display","none");
		$("#texto_no_asignaturas").show();
		$("#texto_no_asignaturas").html("No se han realizado prácticas todavía...");
	});
	$("#adbd").click(function()
	{
		$("#practicas").show();
		location.href="#practicas";
		$("#asignatura_elegida").html("Administración y diseño de base de datos");
		$("#practica1_").css("display","none");
		$("#texto_no_asignaturas").show();
		$("#texto_no_asignaturas").html("No se han realizado prácticas todavía...");
	});
	$("#gco").click(function()
	{
		$("#practicas").show();
		location.href="#practicas";
		$("#asignatura_elegida").html("Gestión del conocimiento en las organizaciones");
		$("#practica1_").css("display","none");
		$("#texto_no_asignaturas").show();
		$("#texto_no_asignaturas").html("No se han realizado prácticas todavía...");
	});
	$("#lpp").click(function()
	{
		$("#practicas").show();
		location.href="#practicas";
		$("#asignatura_elegida").html("Lenguajes y paradigmas de programación");
		$("#practica1_").css("display","none");
		$("#texto_no_asignaturas").show();
		$("#texto_no_asignaturas").html("No se han realizado prácticas todavía...");
	});
	$("#ia").click(function()
	{
		$("#practicas").show();
		location.href="#practicas";
		$("#asignatura_elegida").html("Inteligencia artificial");
		$("#practica1_").css("display","none");
		$("#texto_no_asignaturas").show();
		$("#texto_no_asignaturas").html("No se han realizado prácticas todavía...");
	});
});