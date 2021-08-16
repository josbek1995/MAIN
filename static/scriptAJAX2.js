/*--------------------------------------------- ANIMACION DEL MAPA DEL PERU SVG----------------------------------------------------- */

/* aqui cada que se selecciona un departamento en la lista desplegable, se pinta en el mapa */
$(function(){
    /*When the selected option changes, this function is triggered */
    $("#departamentos").change(function(){
        /*Here all svg paths properties are restarted to initial condition color style gray-white color*/
        $("#costo2").css("display","inline");
        let paths = document.getElementsByTagName("path")
        for(i = 0; i < paths.length; i++){
            document.getElementsByTagName("path")[i].setAttribute("style", "fill:#dddbda")
        }
        /* Here, the zone selected is highlighted */
        let displaydepartamento = $("#departamentos option:selected").text();
        document.getElementById(displaydepartamento).style.fill = "#367DCF";
    })
})

/*--------------------------------------------- TABLA DE DATATABLES----------------------------------------------------- */

/*Dependencia de la tabla con la seleccion del departamento */
$(document).ready(function () {
    $("#departamentos").selectpicker();
   
    function load_data(query) {
        $.ajax({
            url: "/livesearch",
            method: "POST",
            data: { query:query },
            success: function (data) { 
                $('#result').html(data);
                $('#result').append(data.htmlresponse);
            }
        });
    }
  
    $(document).on("change", "#departamentos", function () {
        $("#result").css("display","inline");
        var codigo_dpto = $("#departamentos").val();
        load_data(codigo_dpto);
    });
  
  });

