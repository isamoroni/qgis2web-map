var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_fontanelle_qfield_1 = new ol.format.GeoJSON();
var features_fontanelle_qfield_1 = format_fontanelle_qfield_1.readFeatures(json_fontanelle_qfield_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fontanelle_qfield_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fontanelle_qfield_1.addFeatures(features_fontanelle_qfield_1);
cluster_fontanelle_qfield_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_fontanelle_qfield_1
});
var lyr_fontanelle_qfield_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_fontanelle_qfield_1, 
                style: style_fontanelle_qfield_1,
                popuplayertitle: 'fontanelle_qfield',
                interactive: true,
                title: '<img src="styles/legend/fontanelle_qfield_1.png" /> fontanelle_qfield'
            });

lyr_OSMStandard_0.setVisible(true);lyr_fontanelle_qfield_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_fontanelle_qfield_1];
lyr_fontanelle_qfield_1.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'accesso': 'accesso', 'location': 'location', 'operator': 'operator', 'wheelchair': 'wheelchair', 'data': 'data', 'note': 'note', });
lyr_fontanelle_qfield_1.set('fieldImages', {'id': '', 'nome': '', 'accesso': '', 'location': '', 'operator': '', 'wheelchair': '', 'data': '', 'note': '', });
lyr_fontanelle_qfield_1.set('fieldLabels', {'id': 'header label - always visible', 'nome': 'no label', 'accesso': 'no label', 'location': 'no label', 'operator': 'no label', 'wheelchair': 'no label', 'data': 'no label', 'note': 'no label', });
lyr_fontanelle_qfield_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});