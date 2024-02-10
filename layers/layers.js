var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_2 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_lab1_3 = new ol.format.GeoJSON();
var features_lab1_3 = format_lab1_3.readFeatures(json_lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_3.addFeatures(features_lab1_3);
var lyr_lab1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lab1_3, 
                style: style_lab1_3,
                interactive: true,
                title: '<img src="styles/legend/lab1_3.png" /> lab 1'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_4, 
                style: style_building_4,
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_housebuilding_5 = new ol.format.GeoJSON();
var features_housebuilding_5 = format_housebuilding_5.readFeatures(json_housebuilding_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_housebuilding_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_housebuilding_5.addFeatures(features_housebuilding_5);
var lyr_housebuilding_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_housebuilding_5, 
                style: style_housebuilding_5,
                interactive: true,
                title: '<img src="styles/legend/housebuilding_5.png" /> house — building'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });
var format_roadhighway_7 = new ol.format.GeoJSON();
var features_roadhighway_7 = format_roadhighway_7.readFeatures(json_roadhighway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadhighway_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadhighway_7.addFeatures(features_roadhighway_7);
var lyr_roadhighway_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roadhighway_7, 
                style: style_roadhighway_7,
                interactive: true,
                title: '<img src="styles/legend/roadhighway_7.png" /> road — highway'
            });
var format_highway_8 = new ol.format.GeoJSON();
var features_highway_8 = format_highway_8.readFeatures(json_highway_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_8.addFeatures(features_highway_8);
var lyr_highway_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_8, 
                style: style_highway_8,
                interactive: true,
                title: '<img src="styles/legend/highway_8.png" /> highway'
            });
var format_road1highway_9 = new ol.format.GeoJSON();
var features_road1highway_9 = format_road1highway_9.readFeatures(json_road1highway_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road1highway_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road1highway_9.addFeatures(features_road1highway_9);
var lyr_road1highway_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road1highway_9, 
                style: style_road1highway_9,
                interactive: true,
                title: '<img src="styles/legend/road1highway_9.png" /> road1 — highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_YandexSatellite_2.setVisible(true);lyr_lab1_3.setVisible(true);lyr_building_4.setVisible(true);lyr_housebuilding_5.setVisible(true);lyr_highway_6.setVisible(true);lyr_roadhighway_7.setVisible(true);lyr_highway_8.setVisible(true);lyr_road1highway_9.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_YandexSatellite_2,lyr_lab1_3,lyr_building_4,lyr_housebuilding_5,lyr_highway_6,lyr_roadhighway_7,lyr_highway_8,lyr_road1highway_9];
lyr_lab1_3.set('fieldAliases', {'name': 'name', });
lyr_building_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'shop': 'shop', 'payment:cash': 'payment:cash', 'opening_hours': 'opening_hours', 'name:ru': 'name:ru', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_housebuilding_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'shop': 'shop', 'payment:cash': 'payment:cash', 'opening_hours': 'opening_hours', 'name:ru': 'name:ru', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'public_transport': 'public_transport', 'departures_board': 'departures_board', 'shelter': 'shelter', 'operator': 'operator', 'network': 'network', 'name': 'name', 'bus': 'bus', 'bench': 'bench', });
lyr_roadhighway_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'public_transport': 'public_transport', 'departures_board': 'departures_board', 'shelter': 'shelter', 'operator': 'operator', 'network': 'network', 'name': 'name', 'bus': 'bus', 'bench': 'bench', });
lyr_highway_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'surface': 'surface', 'lanes': 'lanes', 'ref': 'ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_road1highway_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'surface': 'surface', 'lanes': 'lanes', 'ref': 'ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_lab1_3.set('fieldImages', {'name': 'TextEdit', });
lyr_building_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'shop': '', 'payment:cash': '', 'opening_hours': '', 'name:ru': '', 'name': '', 'addr:street': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_housebuilding_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'shop': 'TextEdit', 'payment:cash': 'TextEdit', 'opening_hours': 'TextEdit', 'name:ru': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': '', });
lyr_highway_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'public_transport': '', 'departures_board': '', 'shelter': '', 'operator': '', 'network': '', 'name': '', 'bus': '', 'bench': '', });
lyr_roadhighway_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'public_transport': '', 'departures_board': '', 'shelter': '', 'operator': '', 'network': '', 'name': '', 'bus': '', 'bench': '', });
lyr_highway_8.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'motor_vehicle': '', 'horse': '', 'foot': '', 'bicycle': '', 'oneway': '', 'maxspeed': '', 'surface': '', 'lanes': '', 'ref': '', 'name:etymology:wikidata': '', 'name': '', });
lyr_road1highway_9.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'motor_vehicle': '', 'horse': '', 'foot': '', 'bicycle': '', 'oneway': '', 'maxspeed': '', 'surface': '', 'lanes': '', 'ref': '', 'name:etymology:wikidata': '', 'name': '', });
lyr_lab1_3.set('fieldLabels', {'name': 'no label', });
lyr_building_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'shop': 'no label', 'payment:cash': 'no label', 'opening_hours': 'no label', 'name:ru': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_housebuilding_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'shop': 'no label', 'payment:cash': 'no label', 'opening_hours': 'no label', 'name:ru': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'public_transport': 'no label', 'departures_board': 'no label', 'shelter': 'no label', 'operator': 'no label', 'network': 'no label', 'name': 'no label', 'bus': 'no label', 'bench': 'no label', });
lyr_roadhighway_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'public_transport': 'no label', 'departures_board': 'no label', 'shelter': 'no label', 'operator': 'no label', 'network': 'no label', 'name': 'no label', 'bus': 'no label', 'bench': 'no label', });
lyr_highway_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'lanes': 'no label', 'ref': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', });
lyr_road1highway_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'lanes': 'no label', 'ref': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', });
lyr_road1highway_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});