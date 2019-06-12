onload = init;
var mymap;
function init() {
	//Setar para aparecer na posição do usuário
	mymap = L.map('mapid').setView([51.505, -0.09], 13)
	
	navigator.geolocation.getCurrentPosition(showPosition);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox.streets',
    //criar seu token no mapbox
    accessToken: 'pk.eyJ1IjoiZ3VpbGhlcm1lMTMwMTEiLCJhIjoiY2p3a2o3cnZqMG1xeTQ5cWdtdnFiMGxqOCJ9.g8dBOakcmdsJpGdgwTSOKw'
	}).addTo(mymap);
	//Add Button Listener
	var b = document.getElementById("btn_add")
	b.addEventListener('click', buttonListener);

	mymap.on('click', autoFill)
}
//atualiza a posição
function showPosition(pos){
	console.log(pos.coords.latitude, pos.coords.longitude);

	var lat = pos.coords.latitude;
	var long = pos.coords.longitude;
	mymap.setView([lat, long], 13);

}

//Função para adicionar marcador
function buttonListener(){	
	var latitude = document.getElementById('lat').value
	var longitude = document.getElementById('long').value
	// var desc = document.getElementById('desc').value

	var m = L.marker([latitude, longitude]).addTo(mymap);
	m.bindPopup('<img style="max-width: 100%;" src="http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg">hello </img>');
	console.log(latitude, longitude, desc)
}

//Challenge: Mostrar a foto do lugar no balão. Dica: desc pode ser um HTML
function addImageToMap(){
	var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
		imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
	L.imageOverlay(imageUrl, imageBounds).addTo(mymap);
}

//Challenge: Auto preencher lat e long ao clicar em algum lugar do mapa
function autoFill(pos){
	console.log(pos);
	var m = L.marker([pos.latlng.lat, pos.latlng.lng]).addTo(mymap)
}