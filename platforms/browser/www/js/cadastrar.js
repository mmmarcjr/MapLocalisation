
var lat, long;

navigator.geolocation.getCurrentPosition(function(dados) {
	// pegando as coordenadas
    lat  = dados.coords.latitude;
    long = dados.coords.longitude;    

    // inicializando o serviço de geocode
    var localizador = new google.maps.Geocoder();

    // criando um objeto de geolocalização
    var local = new google.maps.LatLng(lat, long);

    //Acionamos o comando que retorna o endereço
    localizador.geocode({"latLng" : local}, function(registro, status){
    	if(status == google.maps.GeocoderStatus.OK) {    
    	    $('#endereco').val(registro[0].formatted_address);
    	}
    });

    $('#exibir').click(function(){
    	var url = "http://maps.google.com?q=" + lat + "," + long + '&output=embed';

    	$('#mapa').attr('src', url);

    });
});