var wms_layers = [];

var format___0 = new ol.format.GeoJSON();
var features___0 = format___0.readFeatures(json___0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___0.addFeatures(features___0);
var lyr___0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___0, 
                style: style___0,
                popuplayertitle: "احياء_الرياض",
                interactive: false,
    title: 'احياء_الرياض<br />\
    <img src="styles/legend/__0_0.png" /> ١ - ٣٩<br />\
    <img src="styles/legend/__0_1.png" /> ٣٩ - ٧٨<br />\
    <img src="styles/legend/__0_2.png" /> ٧٨ - ١١٦<br />\
    <img src="styles/legend/__0_3.png" /> ١١٦ - ١٥٥<br />\
    <img src="styles/legend/__0_4.png" /> ١٥٥ - ١٩٣<br />'
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "مستشفيات الرياض",
                interactive: true,
    title: 'مستشفيات الرياض<br />\
    <img src="styles/legend/_1_0.png" /> ٠ - ٢٨٤<br />\
    <img src="styles/legend/_1_1.png" /> ٢٨٤ - ٣٠٠<br />\
    <img src="styles/legend/_1_2.png" /> ٣٠٠ - ٣٨٠<br />\
    <img src="styles/legend/_1_3.png" /> ٣٨٠ - ٥٠٠<br />\
    <img src="styles/legend/_1_4.png" /> ٥٠٠ - ١١٠٠<br />'
        });

lyr___0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr___0,lyr__1];
lyr___0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NEIGHBORH_': 'NEIGHBORH_', 'NEIGHBORH1': 'NEIGHBORH1', 'OLD_NEIGHB': 'OLD_NEIGHB', 'SUB_MUNC_I': 'SUB_MUNC_I', 'SUB_MUNC_A': 'SUB_MUNC_A', 'SUB_MUNC_E': 'SUB_MUNC_E', 'OLD_SUB_MU': 'OLD_SUB_MU', 'OLD_SUB__1': 'OLD_SUB__1', 'NEIGHBOR_1': 'NEIGHBOR_1', 'POPULATION': 'POPULATION', 'DEV_AREA': 'DEV_AREA', 'DEV_AREA_K': 'DEV_AREA_K', 'STREETS_LE': 'STREETS_LE', 'STREETS__1': 'STREETS__1', 'STREETS_AR': 'STREETS_AR', 'STREETS__2': 'STREETS__2', 'VACANT_LAN': 'VACANT_LAN', 'DWILING_UN': 'DWILING_UN', 'SHAPE_Leng': 'SHAPE_Leng', 'FillTransp': 'FillTransp', 'OutlineTra': 'OutlineTra', 'SymbolID': 'SymbolID', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', });
lyr__1.set('fieldAliases', {'الاسم': 'الاسم', 'موقعه': 'موقعه', 'شارع': 'شارع', 'المسا': 'المسا', 'السعة': 'السعة', });
lyr___0.set('fieldImages', {'OBJECTID': 'TextEdit', 'NEIGHBORH_': 'TextEdit', 'NEIGHBORH1': 'TextEdit', 'OLD_NEIGHB': 'TextEdit', 'SUB_MUNC_I': 'TextEdit', 'SUB_MUNC_A': 'TextEdit', 'SUB_MUNC_E': 'TextEdit', 'OLD_SUB_MU': 'TextEdit', 'OLD_SUB__1': 'TextEdit', 'NEIGHBOR_1': 'TextEdit', 'POPULATION': 'TextEdit', 'DEV_AREA': 'TextEdit', 'DEV_AREA_K': 'TextEdit', 'STREETS_LE': 'TextEdit', 'STREETS__1': 'TextEdit', 'STREETS_AR': 'TextEdit', 'STREETS__2': 'TextEdit', 'VACANT_LAN': 'TextEdit', 'DWILING_UN': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'FillTransp': 'TextEdit', 'OutlineTra': 'TextEdit', 'SymbolID': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr__1.set('fieldImages', {'الاسم': 'TextEdit', 'موقعه': 'TextEdit', 'شارع': 'TextEdit', 'المسا': 'TextEdit', 'السعة': 'TextEdit', });
lyr___0.set('fieldLabels', {'OBJECTID': 'no label', 'NEIGHBORH_': 'no label', 'NEIGHBORH1': 'no label', 'OLD_NEIGHB': 'no label', 'SUB_MUNC_I': 'no label', 'SUB_MUNC_A': 'no label', 'SUB_MUNC_E': 'no label', 'OLD_SUB_MU': 'no label', 'OLD_SUB__1': 'no label', 'NEIGHBOR_1': 'no label', 'POPULATION': 'no label', 'DEV_AREA': 'no label', 'DEV_AREA_K': 'no label', 'STREETS_LE': 'no label', 'STREETS__1': 'no label', 'STREETS_AR': 'no label', 'STREETS__2': 'no label', 'VACANT_LAN': 'no label', 'DWILING_UN': 'no label', 'SHAPE_Leng': 'no label', 'FillTransp': 'no label', 'OutlineTra': 'no label', 'SymbolID': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Area': 'no label', });
lyr__1.set('fieldLabels', {'الاسم': 'inline label - always visible', 'موقعه': 'inline label - always visible', 'شارع': 'inline label - always visible', 'المسا': 'inline label - always visible', 'السعة': 'inline label - always visible', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});