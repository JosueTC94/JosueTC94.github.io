$(document).ready(function()
{
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