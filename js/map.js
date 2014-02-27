function mapInit() {
	map = new OpenLayers.Map("theMap", {
		controls:[new OpenLayers.Control.Navigation()],
			maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
			maxResolution: 156543.0399,
			numZoomLevels: 19,
			units: 'm',
		projection: new OpenLayers.Projection("EPSG:900913"),
		displayProjection: new OpenLayers.Projection("EPSG:4326")
	} );
	osmAddMap_Layers();
	if (typeof(localStorage.zoom) == 'undefined')
	{
		localStorage.lat = localStorage.lon = 0;
		localStorage.zoom = 3;
		map.setCenter(new OpenLayers.LonLat(0, 0), 3);
	}
	else
		map.setCenter(new OpenLayers.LonLat(localStorage.lon, localStorage.lat), localStorage.zoom);
}

// Define the map layers
function osmAddMap_Layers() {
	layerMapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik");
	map.addLayer(layerMapnik);
}


function uiInit()
{
	if( /Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) 
	{
		document.body.appendChild(document.getElementById("save"));
		document.body.appendChild(document.getElementById("theMap"));
                document.body.removeChild(document.getElementById("controlsTable"));
	}
}

function moveMap(dx, dy) {
	map.moveByPx(dx, dy);
}

function zoomMap(dz) {
	map.zoomTo(map.getZoom() + dz);
}

function persistMapLocation()
{
	var lonLat = map.getCenter();
	localStorage.lat = lonLat.lat;
	localStorage.lon = lonLat.lon;
	localStorage.zoom = map.getZoom();
}
