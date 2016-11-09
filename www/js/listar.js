function setarMapa(rua) {
	var localizador = new google.maps.Geocoder();

	localizador.geocode({"address" : rua}, function(registro, status) {
    	if(status == google.maps.GeocoderStatus.OK) {    
    		var lat  = registro[0].geometry.location.lat();
    		var long = registro[0].geometry.location.lng();
    		
    		// pra montar mapas é sempre latitude e longitude
    		// endereço não serve
    		// agora montaremos um mapa manualmente via API´S COMANDOS DO GOOGLE maps
    		// ROADMAP apenas desenho, HYBRID meio maps, SATELITE full maps

    		var configuracoes = {
    			zoom:      15, // normalmente varia de 01 a 21
    			center:    new google.maps.LatLng(lat, long), // Posição central
    			mapTypeId: google.maps.MapTypeId.ROADMAP  // tipo do mapa (calor normal rotas) 				   			
    		}

    		// esse get(0) é para transformar do jquery para o js puro e o google entender
    		var mapa = new google.maps.Map($('#mapa').get(0), configuracoes);

    		new google.maps.Marker({
    			map: mapa,
    			position: new google.maps.LatLng(lat, long),
    			animation: google.maps.Animation.DROP
    		});
    	}    	
	});
}