window.onload = init;



//create a map
function init(){

    

    const map = new ol.Map({
        
        view: new ol.View({
            projection: 'EPSG:4326',
            center: [151.259, -33.799],
            zoom: 9,
           // rotation: 0.5            
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            new ol.layer.Vector({
                //title:'added layer',
                source: new ol.source.Vector({
                    url:'SydneyData.geojson',
                    format: new ol.format.GeoJSON
                })

            })

        ],
        target:'js-map',
        keyboardEventTarget: document
    })    
    //console.log(map.getView().calculateExtent());
    //console.log(map.getView().getCenter());
   //console.log(map.getView().getProjection());


   

}
    


