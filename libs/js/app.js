$(document).ready(function(){
  $("#tAPaterno_Alumno").blur(function(){
    $("#tAPaterno_Padre").val($("#tAPaterno_Alumno").val());
  })

  $("#tCURP_Alumno").focus(function(){
    $("#tCURP_Alumno").val(calculaRFC($("#tNombres_Alumno"),$("#tAPaterno_Alumno"),$("#tAMaterno_Alumno"),$("#tFecNac_Alumno")));
  })

  $("#tCURP_Padre").focus(function(){
    $("#tCURP_Padre").val(calculaRFC($("#tNombres_Padre"),$("#tAPaterno_Padre"),$("#tAMaterno_Padre"),$("#tFecNac_Padre")));
  })

  $("#tCURP_Madre").focus(function(){
    $("#tCURP_Madre").val(calculaRFC($("#tNombres_Madre"),$("#tAPaterno_Madre"),$("#tAMaterno_Madre"),$("#tFecNac_Madre")));
  })

  $("#tAMaterno_Alumno").blur(function(){
    $("#tAPaterno_Madre").val($("#tAMaterno_Alumno").val());
  })

  $("#tCalle_Alumno").blur(function(){
    $("#tCalle_Madre").val($("#tCalle_Alumno").val());
    $("#tCalle_Padre").val($("#tCalle_Alumno").val());
  })

  $("#tNum_Alumno").blur(function(){
    $("#tNum_Madre").val($("#tNum_Alumno").val());
    $("#tNum_Padre").val($("#tNum_Alumno").val());
  })

  $("#tEntreCAlles_Alumno").blur(function(){
    $("#tEntreCAlles_Madre").val($("#tEntreCAlles_Alumno").val());
    $("#tEntreCAlles_Padre").val($("#tEntreCAlles_Alumno").val());
  })

  $("#tColonia_Alumno").blur(function(){
    $("#tColonia_Madre").val($("#tColonia_Alumno").val());
    $("#tColonia_Padre").val($("#tColonia_Alumno").val());
  })

  $("#tLocalidad_Alumno").blur(function(){
    $("#tLocalidad_Madre").val($("#tLocalidad_Alumno").val());
    $("#tLocalidad_Padre").val($("#tLocalidad_Alumno").val());
  })

  $("#tCP_Alumno").blur(function(){
    $("#tCP_Madre").val($("#tCP_Alumno").val());
    $("#tCP_Padre").val($("#tCP_Alumno").val());
  })

  $("#tFecNac_Alumno").datepicker({
    format: "dd/mm/yyyy",
    startView: 3,
    maxViewMode: 2,
    language: "es"
  });

  $("#tFecNac_Padre").datepicker({
    format: "dd/mm/yyyy",
    startView: 3,
    maxViewMode: 2,
    language: "es"
  });

  $("#tFecNac_Madre").datepicker({
    format: "dd/mm/yyyy",
    startView: 3,
    maxViewMode: 2,
    language: "es"
  });
});
