$(document).ready(function(){

    $("#submitWeather").click(function(){

      var city = $("#city").val();

      if(city != ""){

        $.ajax({
          url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&lang=fr" + "&APPID=7568989301bbecac5c9ccf11ef4ec153",
          type: "GET",
          dataType : "jsonp",
          success: function(data){
              var widget = show(data);

              $("#show").html(widget);

              $("#city").val("");
          }

        });

      }else{
        $("#error").html("Doit être Remplis");
      }

    });

});
function show(data){

  return "<h3>Ville: "+ data.name +"<h3>" +
         "<h3>Temps: "+ data.weather[0].description +"<h3>" +
         "<h3>Température: "+ data.main.temp +"°<h3>" +
         "<h3>Humidité: "+ data.main.humidity +"%<h3>" +
         "<h3>Température min: "+ data.main.temp_min +"°<h3>" +
         "<h3>Température max: "+ data.main.temp_max +"°<h3>" ;
};
