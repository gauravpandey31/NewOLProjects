
var baseMapLayer = new ol.layer.Tile({
    source: new ol.source.OSM(), 

})

var layerArray = [baseMapLayer]

var newView = new ol.View({
    center: [16826546.48952642, -4007066.957553634],
    zoom: 9,
           
})

//1) create a map
var map = new ol.Map({
        // view propoerty            
    view: newView,
    layers: layerArray,
    target:'js-map',
            
})

//2) new style for new vector layer and a geojson layer to the map
var newStroke = new ol.style.Stroke({
color: '#ffff00',
width: 1.5
})

var newFillStyle = new ol.style.Fill({
color : '#fff'
});

var newStyle = new ol.style.Style({
fill: newFillStyle,
stroke: newStroke
})

var newLayerSource = new ol.source.Vector({
format: new ol.format.GeoJSON(),
url: 'SydneyData.geojson'            
})

var newLayer = new ol.layer.Vector({
source: newLayerSource,
style: newStyle
})

map.addLayer(newLayer)

// 3) select a feature with a single click on the map

// var featureSelect = new ol.interaction.Select({
    
// })
                  
// map.addInteraction(featureSelect)        


//4) Draw a point

var newPointSource = new ol.source.Vector()

var newPointLayer = new ol.layer.Vector({
    source: newPointSource
})

map.addLayer(newPointLayer)

var drawPointInteraction = new ol.interaction.Draw({
    type:'Point',
    source: newPointSource
})

function startDrawPoint(){
    map.addInteraction(drawPointInteraction)
}
drawPointInteraction.on('drawend', function(evt){
    map.removeInteraction(drawPointInteraction)

})
//Draw a Polyline

var newPolylineSource = new ol.source.Vector()

var newPolylineLayer = new ol.layer.Vector({
    source: newPolylineLayer
})

map.addLayer(newPolylineLayer)

var drawPolylineInteraction = new ol.interaction.Draw({
    type: 'LineString',
    source: newPolylineSource
})

function startDrawPolyline(){
    map.addInteraction(drawPolylineInteraction)
}

drawPolylineInteraction.on('drawend',function(evt){
    map.removeInteration(drawPolylineInteraction)
})
//Draw a Polygon
var newPolygonSource = new ol.source.Vector()

var newPolygonLayer = new ol.layer.Vector({
    source: newPolygonLayer
})

map.addLayer(newPolygonLayer)

var drawPolygonInteraction = new ol.interaction.Draw({
    type: 'Polygon',
    source: newPolygonSource
})

function startDrawPolygon(){
    map.addInteraction(drawPolygonInteraction)
}
drawPolygonInteraction.on('drawend', function(evt){
    map.removeInteraction(drawPolygonInteraction)
})


