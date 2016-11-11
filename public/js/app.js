var opcion='<option value="{{#}}">{{name}}</option>';
var opcion2='<div class="contenido">{{name}}</div>';
$(document).ready(function(){
	var especies="";
	var personaje="";
	$.getJSON("https://swapi.co/api/species/",function(response){
            $.each(response.results, function(i,specie){
            var id="";
            var id2;
            for(var i=0;i<specie.people.length;i++){
            	id+=specie.people[i].substr(-3);
            	id2=id.substring(0, id.length-1);
            };
            especies+=opcion.replace("{{name}}", specie.name).replace("{{#}}",id2);
        });
        $("#especies").change(function(e) {
        	$("#contenido").html("");
            var id3= $(this).val().split("/"); //
            for (var i = 0; i < id3.length; i++) {
                $.getJSON("https://swapi.co/api/people/" + id3[i] + "/", function(responce_2) {
                        personaje=opcion2.replace("{{name}}", responce_2.name);
                        $("#contenido").append(personaje);
                    });
            }
        });
        $("#especies").append(especies);
    });
});

