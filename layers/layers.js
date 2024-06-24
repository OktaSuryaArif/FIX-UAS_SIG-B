ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11172295.911788, -834787.005885, 12533448.116099, -295790.603813]);
var wms_layers = [];


        var lyr_GoogleRoads_0 = new ol.layer.Tile({
            'title': 'Google Roads',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Terrain_1 = new ol.layer.Tile({
            'title': 'Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Lampung_Zonasi_2 = new ol.format.GeoJSON();
var features_Lampung_Zonasi_2 = format_Lampung_Zonasi_2.readFeatures(json_Lampung_Zonasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lampung_Zonasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lampung_Zonasi_2.addFeatures(features_Lampung_Zonasi_2);
var lyr_Lampung_Zonasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lampung_Zonasi_2, 
                style: style_Lampung_Zonasi_2,
                popuplayertitle: "Lampung_Zonasi",
                interactive: true,
    title: 'Lampung_Zonasi<br />\
    <img src="styles/legend/Lampung_Zonasi_2_0.png" /> Danau Tapal Kuda<br />\
    <img src="styles/legend/Lampung_Zonasi_2_1.png" /> Danau/Situ<br />\
    <img src="styles/legend/Lampung_Zonasi_2_2.png" /> Menengah<br />\
    <img src="styles/legend/Lampung_Zonasi_2_3.png" /> Rendah<br />\
    <img src="styles/legend/Lampung_Zonasi_2_4.png" /> Sangat Rendah<br />\
    <img src="styles/legend/Lampung_Zonasi_2_5.png" /> Tinggi<br />\
    <img src="styles/legend/Lampung_Zonasi_2_6.png" /> Waduk<br />\
    <img src="styles/legend/Lampung_Zonasi_2_7.png" /> <br />'
        });
var format_Banten_Zonasi_3 = new ol.format.GeoJSON();
var features_Banten_Zonasi_3 = format_Banten_Zonasi_3.readFeatures(json_Banten_Zonasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banten_Zonasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banten_Zonasi_3.addFeatures(features_Banten_Zonasi_3);
var lyr_Banten_Zonasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banten_Zonasi_3, 
                style: style_Banten_Zonasi_3,
                popuplayertitle: "Banten_Zonasi",
                interactive: true,
    title: 'Banten_Zonasi<br />\
    <img src="styles/legend/Banten_Zonasi_3_0.png" /> Tinggi<br />\
    <img src="styles/legend/Banten_Zonasi_3_1.png" /> Menengah<br />\
    <img src="styles/legend/Banten_Zonasi_3_2.png" /> Rendah<br />\
    <img src="styles/legend/Banten_Zonasi_3_3.png" /> Sangat Rendah<br />\
    <img src="styles/legend/Banten_Zonasi_3_4.png" /> <br />'
        });
var format_PEMUKIMAN_AR_50K_4 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_4 = format_PEMUKIMAN_AR_50K_4.readFeatures(json_PEMUKIMAN_AR_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_4.addFeatures(features_PEMUKIMAN_AR_50K_4);
var lyr_PEMUKIMAN_AR_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_4, 
                style: style_PEMUKIMAN_AR_50K_4,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_4.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_5 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_5 = format_PEMUKIMAN_AR_50K_5.readFeatures(json_PEMUKIMAN_AR_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_5.addFeatures(features_PEMUKIMAN_AR_50K_5);
var lyr_PEMUKIMAN_AR_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_5, 
                style: style_PEMUKIMAN_AR_50K_5,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_5.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_6 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_6 = format_PEMUKIMAN_AR_50K_6.readFeatures(json_PEMUKIMAN_AR_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_6.addFeatures(features_PEMUKIMAN_AR_50K_6);
var lyr_PEMUKIMAN_AR_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_6, 
                style: style_PEMUKIMAN_AR_50K_6,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_6.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_7 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_7 = format_PEMUKIMAN_AR_50K_7.readFeatures(json_PEMUKIMAN_AR_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_7.addFeatures(features_PEMUKIMAN_AR_50K_7);
var lyr_PEMUKIMAN_AR_50K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_7, 
                style: style_PEMUKIMAN_AR_50K_7,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_7.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_8 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_8 = format_PEMUKIMAN_AR_50K_8.readFeatures(json_PEMUKIMAN_AR_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_8.addFeatures(features_PEMUKIMAN_AR_50K_8);
var lyr_PEMUKIMAN_AR_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_8, 
                style: style_PEMUKIMAN_AR_50K_8,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_8.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_9 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_9 = format_PEMUKIMAN_AR_50K_9.readFeatures(json_PEMUKIMAN_AR_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_9.addFeatures(features_PEMUKIMAN_AR_50K_9);
var lyr_PEMUKIMAN_AR_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_9, 
                style: style_PEMUKIMAN_AR_50K_9,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_9.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_10 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_10 = format_PEMUKIMAN_AR_50K_10.readFeatures(json_PEMUKIMAN_AR_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_10.addFeatures(features_PEMUKIMAN_AR_50K_10);
var lyr_PEMUKIMAN_AR_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_10, 
                style: style_PEMUKIMAN_AR_50K_10,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_10.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_11 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_11 = format_PEMUKIMAN_AR_50K_11.readFeatures(json_PEMUKIMAN_AR_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_11.addFeatures(features_PEMUKIMAN_AR_50K_11);
var lyr_PEMUKIMAN_AR_50K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_11, 
                style: style_PEMUKIMAN_AR_50K_11,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_11.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_12 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_12 = format_PEMUKIMAN_AR_50K_12.readFeatures(json_PEMUKIMAN_AR_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_12.addFeatures(features_PEMUKIMAN_AR_50K_12);
var lyr_PEMUKIMAN_AR_50K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_12, 
                style: style_PEMUKIMAN_AR_50K_12,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_12.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_13 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_13 = format_PEMUKIMAN_AR_50K_13.readFeatures(json_PEMUKIMAN_AR_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_13.addFeatures(features_PEMUKIMAN_AR_50K_13);
var lyr_PEMUKIMAN_AR_50K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_13, 
                style: style_PEMUKIMAN_AR_50K_13,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_13.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_14 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_14 = format_PEMUKIMAN_AR_50K_14.readFeatures(json_PEMUKIMAN_AR_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_14.addFeatures(features_PEMUKIMAN_AR_50K_14);
var lyr_PEMUKIMAN_AR_50K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_14, 
                style: style_PEMUKIMAN_AR_50K_14,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_14.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_15 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_15 = format_PEMUKIMAN_AR_50K_15.readFeatures(json_PEMUKIMAN_AR_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_15.addFeatures(features_PEMUKIMAN_AR_50K_15);
var lyr_PEMUKIMAN_AR_50K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_15, 
                style: style_PEMUKIMAN_AR_50K_15,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_15.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_16 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_16 = format_PEMUKIMAN_AR_50K_16.readFeatures(json_PEMUKIMAN_AR_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_16.addFeatures(features_PEMUKIMAN_AR_50K_16);
var lyr_PEMUKIMAN_AR_50K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_16, 
                style: style_PEMUKIMAN_AR_50K_16,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_16.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_17 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_17 = format_PEMUKIMAN_AR_50K_17.readFeatures(json_PEMUKIMAN_AR_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_17.addFeatures(features_PEMUKIMAN_AR_50K_17);
var lyr_PEMUKIMAN_AR_50K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_17, 
                style: style_PEMUKIMAN_AR_50K_17,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_17.png" /> PEMUKIMAN_AR_50K'
            });
var format_PEMUKIMAN_AR_25K_18 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_18 = format_PEMUKIMAN_AR_25K_18.readFeatures(json_PEMUKIMAN_AR_25K_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_18.addFeatures(features_PEMUKIMAN_AR_25K_18);
var lyr_PEMUKIMAN_AR_25K_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_18, 
                style: style_PEMUKIMAN_AR_25K_18,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_18.png" /> PEMUKIMAN_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_19 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_19 = format_PEMUKIMAN_AR_25K_19.readFeatures(json_PEMUKIMAN_AR_25K_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_19.addFeatures(features_PEMUKIMAN_AR_25K_19);
var lyr_PEMUKIMAN_AR_25K_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_19, 
                style: style_PEMUKIMAN_AR_25K_19,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_19.png" /> PEMUKIMAN_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_20 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_20 = format_PEMUKIMAN_AR_25K_20.readFeatures(json_PEMUKIMAN_AR_25K_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_20.addFeatures(features_PEMUKIMAN_AR_25K_20);
var lyr_PEMUKIMAN_AR_25K_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_20, 
                style: style_PEMUKIMAN_AR_25K_20,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_20.png" /> PEMUKIMAN_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_21 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_21 = format_PEMUKIMAN_AR_25K_21.readFeatures(json_PEMUKIMAN_AR_25K_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_21.addFeatures(features_PEMUKIMAN_AR_25K_21);
var lyr_PEMUKIMAN_AR_25K_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_21, 
                style: style_PEMUKIMAN_AR_25K_21,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_21.png" /> PEMUKIMAN_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_22 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_22 = format_PEMUKIMAN_AR_25K_22.readFeatures(json_PEMUKIMAN_AR_25K_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_22.addFeatures(features_PEMUKIMAN_AR_25K_22);
var lyr_PEMUKIMAN_AR_25K_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_22, 
                style: style_PEMUKIMAN_AR_25K_22,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_22.png" /> PEMUKIMAN_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_23 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_23 = format_PEMUKIMAN_AR_25K_23.readFeatures(json_PEMUKIMAN_AR_25K_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_23.addFeatures(features_PEMUKIMAN_AR_25K_23);
var lyr_PEMUKIMAN_AR_25K_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_23, 
                style: style_PEMUKIMAN_AR_25K_23,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_23.png" /> PEMUKIMAN_AR_25K'
            });
var format_KRB_Tsunami_Teluk_Lampung_24 = new ol.format.GeoJSON();
var features_KRB_Tsunami_Teluk_Lampung_24 = format_KRB_Tsunami_Teluk_Lampung_24.readFeatures(json_KRB_Tsunami_Teluk_Lampung_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KRB_Tsunami_Teluk_Lampung_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRB_Tsunami_Teluk_Lampung_24.addFeatures(features_KRB_Tsunami_Teluk_Lampung_24);
var lyr_KRB_Tsunami_Teluk_Lampung_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRB_Tsunami_Teluk_Lampung_24, 
                style: style_KRB_Tsunami_Teluk_Lampung_24,
                popuplayertitle: "KRB_Tsunami_Teluk_Lampung",
                interactive: true,
    title: 'KRB_Tsunami_Teluk_Lampung<br />\
    <img src="styles/legend/KRB_Tsunami_Teluk_Lampung_24_0.png" /> KRB Tsunami Tinggi<br />\
    <img src="styles/legend/KRB_Tsunami_Teluk_Lampung_24_1.png" /> KRB Tsunami Menengah<br />\
    <img src="styles/legend/KRB_Tsunami_Teluk_Lampung_24_2.png" /> KRB Tsunami Rendah<br />\
    <img src="styles/legend/KRB_Tsunami_Teluk_Lampung_24_3.png" /> <br />'
        });
var format_KRB_Tsunami_Banten_25 = new ol.format.GeoJSON();
var features_KRB_Tsunami_Banten_25 = format_KRB_Tsunami_Banten_25.readFeatures(json_KRB_Tsunami_Banten_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KRB_Tsunami_Banten_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRB_Tsunami_Banten_25.addFeatures(features_KRB_Tsunami_Banten_25);
var lyr_KRB_Tsunami_Banten_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRB_Tsunami_Banten_25, 
                style: style_KRB_Tsunami_Banten_25,
                popuplayertitle: "KRB_Tsunami_Banten",
                interactive: true,
    title: 'KRB_Tsunami_Banten<br />\
    <img src="styles/legend/KRB_Tsunami_Banten_25_0.png" /> KRB Tsunami Tinggi<br />\
    <img src="styles/legend/KRB_Tsunami_Banten_25_1.png" /> KRB Tsunami Menengah<br />\
    <img src="styles/legend/KRB_Tsunami_Banten_25_2.png" /> KRB Tsunami Rendah<br />\
    <img src="styles/legend/KRB_Tsunami_Banten_25_3.png" /> <br />'
        });
var format_LAMPUNG_26 = new ol.format.GeoJSON();
var features_LAMPUNG_26 = format_LAMPUNG_26.readFeatures(json_LAMPUNG_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAMPUNG_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMPUNG_26.addFeatures(features_LAMPUNG_26);
var lyr_LAMPUNG_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMPUNG_26, 
                style: style_LAMPUNG_26,
                popuplayertitle: "LAMPUNG",
                interactive: true,
    title: 'LAMPUNG<br />\
    <img src="styles/legend/LAMPUNG_26_0.png" /> Kawasan Rawan Bencana Gempabumi Tinggi<br />\
    <img src="styles/legend/LAMPUNG_26_1.png" /> Kawasan Rawan Bencana Gempabumi Menengah<br />\
    <img src="styles/legend/LAMPUNG_26_2.png" /> Kawasan Rawan Bencana Gempabumi Rendah<br />\
    <img src="styles/legend/LAMPUNG_26_3.png" /> <br />'
        });
var format_BANTEN_27 = new ol.format.GeoJSON();
var features_BANTEN_27 = format_BANTEN_27.readFeatures(json_BANTEN_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANTEN_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANTEN_27.addFeatures(features_BANTEN_27);
var lyr_BANTEN_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANTEN_27, 
                style: style_BANTEN_27,
                popuplayertitle: "BANTEN",
                interactive: true,
    title: 'BANTEN<br />\
    <img src="styles/legend/BANTEN_27_0.png" /> Kawasan Rawan Bencana Gempabumi Tinggi<br />\
    <img src="styles/legend/BANTEN_27_1.png" /> Kawasan Rawan Bencana Gempabumi Menengah<br />\
    <img src="styles/legend/BANTEN_27_2.png" /> Kawasan Rawan Bencana Gempabumi Rendah<br />\
    <img src="styles/legend/BANTEN_27_3.png" /> Kawasan Rawan Bencana Gempabumi Sangat Rendah<br />\
    <img src="styles/legend/BANTEN_27_4.png" /> <br />'
        });
var format_ANAK_KRAKATAU_28 = new ol.format.GeoJSON();
var features_ANAK_KRAKATAU_28 = format_ANAK_KRAKATAU_28.readFeatures(json_ANAK_KRAKATAU_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANAK_KRAKATAU_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANAK_KRAKATAU_28.addFeatures(features_ANAK_KRAKATAU_28);
var lyr_ANAK_KRAKATAU_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANAK_KRAKATAU_28, 
                style: style_ANAK_KRAKATAU_28,
                popuplayertitle: "ANAK_KRAKATAU",
                interactive: true,
    title: 'ANAK_KRAKATAU<br />\
    <img src="styles/legend/ANAK_KRAKATAU_28_0.png" /> berpotensi terhadap hujan abu dan kemungkinan dapat terkena lontaran batu pijar<br />\
    <img src="styles/legend/ANAK_KRAKATAU_28_1.png" /> berpotensi terlanda aliran lava dan kemungkinan awan panas<br />\
    <img src="styles/legend/ANAK_KRAKATAU_28_2.png" /> berpotensi terlanda hujan abu lebat dan kemungkinan dapat terkena lontaran batu pijar ukuran kerikil<br />\
    <img src="styles/legend/ANAK_KRAKATAU_28_3.png" /> sering terlanda aliran lava dan kemungkian awan panas<br />\
    <img src="styles/legend/ANAK_KRAKATAU_28_4.png" /> sering terlanda hujan abu lebat dan lontaran batu pijar atau bom vulkanik<br />\
    <img src="styles/legend/ANAK_KRAKATAU_28_5.png" /> <br />'
        });
var format_DEMPO_29 = new ol.format.GeoJSON();
var features_DEMPO_29 = format_DEMPO_29.readFeatures(json_DEMPO_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEMPO_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEMPO_29.addFeatures(features_DEMPO_29);
var lyr_DEMPO_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEMPO_29, 
                style: style_DEMPO_29,
                popuplayertitle: "DEMPO",
                interactive: true,
    title: 'DEMPO<br />\
    <img src="styles/legend/DEMPO_29_0.png" /> berpotensi terlanda aliran awan panas dan aliran lava<br />\
    <img src="styles/legend/DEMPO_29_1.png" /> berpotensi terlanda aliran lahar hujan dan kemungkinan perluasan awan panas<br />\
    <img src="styles/legend/DEMPO_29_2.png" /> berpotensi terlanda hujan abu lebat dan lontaran batu pijar<br />\
    <img src="styles/legend/DEMPO_29_3.png" /> berpotensi tertimpa hujan abu dan kemungkinan dapat tertimpa lontaran batu pijar<br />\
    <img src="styles/legend/DEMPO_29_4.png" /> sangat berpotensi terlanda aliran awan panas dan aliran lava<br />\
    <img src="styles/legend/DEMPO_29_5.png" /> sangat berpotensi tertimpa lontaran batu pijar berupa bom gunungapi atau pecahan batuan skoria, hujan abu lebat, dan hujan lumpur<br />\
    <img src="styles/legend/DEMPO_29_6.png" /> <br />'
        });
var format_SALAK_30 = new ol.format.GeoJSON();
var features_SALAK_30 = format_SALAK_30.readFeatures(json_SALAK_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALAK_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALAK_30.addFeatures(features_SALAK_30);
var lyr_SALAK_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SALAK_30, 
                style: style_SALAK_30,
                popuplayertitle: "SALAK",
                interactive: true,
    title: 'SALAK<br />\
    <img src="styles/legend/SALAK_30_0.png" /> berpotensi terlanda aliran lahar<br />\
    <img src="styles/legend/SALAK_30_1.png" /> berpotensi terlanda aliran lumpur panas, aliran lahar hujan, dan kemungkinan aliran awan panas atau lava<br />\
    <img src="styles/legend/SALAK_30_2.png" /> berpotensi terlanda hujan abu dan kemungkinan dapat terkena lontaran batu pijar<br />\
    <img src="styles/legend/SALAK_30_3.png" /> berpotensi terlanda hujan abu lebat dan lontaran batu pijar<br />\
    <img src="styles/legend/SALAK_30_4.png" /> selalu terancam aliran lumpur panas, base surge, gas beracun dan kemungkinan aliran awan panas atau aliran lava<br />\
    <img src="styles/legend/SALAK_30_5.png" /> selalu terancam lontaran batu pijar, lumpur panas, dan hujan abu lebat<br />\
    <img src="styles/legend/SALAK_30_6.png" /> <br />'
        });
var group_GunungBerapi = new ol.layer.Group({
                                layers: [lyr_ANAK_KRAKATAU_28,lyr_DEMPO_29,lyr_SALAK_30,],
                                fold: "open",
                                title: "GunungBerapi"});
var group_GempaBumi = new ol.layer.Group({
                                layers: [lyr_LAMPUNG_26,lyr_BANTEN_27,],
                                fold: "open",
                                title: "Gempa Bumi"});
var group_Tsunami = new ol.layer.Group({
                                layers: [lyr_KRB_Tsunami_Teluk_Lampung_24,lyr_KRB_Tsunami_Banten_25,],
                                fold: "open",
                                title: "Tsunami"});
var group_Banten = new ol.layer.Group({
                                layers: [lyr_PEMUKIMAN_AR_25K_18,lyr_PEMUKIMAN_AR_25K_19,lyr_PEMUKIMAN_AR_25K_20,lyr_PEMUKIMAN_AR_25K_21,lyr_PEMUKIMAN_AR_25K_22,lyr_PEMUKIMAN_AR_25K_23,],
                                fold: "open",
                                title: "Banten"});
var group_Lampung = new ol.layer.Group({
                                layers: [lyr_PEMUKIMAN_AR_50K_4,lyr_PEMUKIMAN_AR_50K_5,lyr_PEMUKIMAN_AR_50K_6,lyr_PEMUKIMAN_AR_50K_7,lyr_PEMUKIMAN_AR_50K_8,lyr_PEMUKIMAN_AR_50K_9,lyr_PEMUKIMAN_AR_50K_10,lyr_PEMUKIMAN_AR_50K_11,lyr_PEMUKIMAN_AR_50K_12,lyr_PEMUKIMAN_AR_50K_13,lyr_PEMUKIMAN_AR_50K_14,lyr_PEMUKIMAN_AR_50K_15,lyr_PEMUKIMAN_AR_50K_16,lyr_PEMUKIMAN_AR_50K_17,],
                                fold: "open",
                                title: "Lampung"});
var group_FaktorLainnya = new ol.layer.Group({
                                layers: [lyr_Lampung_Zonasi_2,lyr_Banten_Zonasi_3,],
                                fold: "open",
                                title: "Faktor Lainnya"});
var group_Maps = new ol.layer.Group({
                                layers: [lyr_GoogleRoads_0,lyr_Terrain_1,],
                                fold: "open",
                                title: "Maps"});

lyr_GoogleRoads_0.setVisible(true);lyr_Terrain_1.setVisible(true);lyr_Lampung_Zonasi_2.setVisible(true);lyr_Banten_Zonasi_3.setVisible(true);lyr_PEMUKIMAN_AR_50K_4.setVisible(true);lyr_PEMUKIMAN_AR_50K_5.setVisible(true);lyr_PEMUKIMAN_AR_50K_6.setVisible(true);lyr_PEMUKIMAN_AR_50K_7.setVisible(true);lyr_PEMUKIMAN_AR_50K_8.setVisible(true);lyr_PEMUKIMAN_AR_50K_9.setVisible(true);lyr_PEMUKIMAN_AR_50K_10.setVisible(true);lyr_PEMUKIMAN_AR_50K_11.setVisible(true);lyr_PEMUKIMAN_AR_50K_12.setVisible(true);lyr_PEMUKIMAN_AR_50K_13.setVisible(true);lyr_PEMUKIMAN_AR_50K_14.setVisible(true);lyr_PEMUKIMAN_AR_50K_15.setVisible(true);lyr_PEMUKIMAN_AR_50K_16.setVisible(true);lyr_PEMUKIMAN_AR_50K_17.setVisible(true);lyr_PEMUKIMAN_AR_25K_18.setVisible(true);lyr_PEMUKIMAN_AR_25K_19.setVisible(true);lyr_PEMUKIMAN_AR_25K_20.setVisible(true);lyr_PEMUKIMAN_AR_25K_21.setVisible(true);lyr_PEMUKIMAN_AR_25K_22.setVisible(true);lyr_PEMUKIMAN_AR_25K_23.setVisible(true);lyr_KRB_Tsunami_Teluk_Lampung_24.setVisible(true);lyr_KRB_Tsunami_Banten_25.setVisible(true);lyr_LAMPUNG_26.setVisible(true);lyr_BANTEN_27.setVisible(true);lyr_ANAK_KRAKATAU_28.setVisible(true);lyr_DEMPO_29.setVisible(true);lyr_SALAK_30.setVisible(true);
var layersList = [group_Maps,group_FaktorLainnya,group_Lampung,group_Banten,group_Tsunami,group_GempaBumi,group_GunungBerapi];
lyr_Lampung_Zonasi_2.set('fieldAliases', {'Zona': 'Zona', 'Keterangan': 'Keterangan', 'Tahun': 'Tahun', 'Wilayah': 'Wilayah', 'LCODE': 'LCODE', 'Unsur': 'Unsur', });
lyr_Banten_Zonasi_3.set('fieldAliases', {'Zona': 'Zona', 'Unsur': 'Unsur', 'Keterangan': 'Keterangan', 'Tahun': 'Tahun', 'Wilayah': 'Wilayah', 'LCODE': 'LCODE', });
lyr_PEMUKIMAN_AR_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KRB_Tsunami_Teluk_Lampung_24.set('fieldAliases', {'ID': 'ID', 'UNSUR': 'UNSUR', 'KETERANGAN': 'KETERANGAN', 'TAHUN': 'TAHUN', 'WILAYAH': 'WILAYAH', 'LCODE': 'LCODE', 'FCODE': 'FCODE', });
lyr_KRB_Tsunami_Banten_25.set('fieldAliases', {'ID': 'ID', 'UNSUR': 'UNSUR', 'KETERANGAN': 'KETERANGAN', 'TAHUN': 'TAHUN', 'WILAYAH': 'WILAYAH', 'LCODE': 'LCODE', 'FCODE': 'FCODE', });
lyr_LAMPUNG_26.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KRBID': 'KRBID', 'KELAS': 'KELAS', 'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'FCODE': 'FCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BANTEN_27.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KRBID': 'KRBID', 'KELAS': 'KELAS', 'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'FCODE': 'FCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ANAK_KRAKATAU_28.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'REMARK': 'REMARK', 'THTERBIT': 'THTERBIT', 'CLAPI': 'CLAPI', 'DEPMAG': 'DEPMAG', 'ERU': 'ERU', 'INDGA': 'INDGA', 'KOORDX': 'KOORDX', 'KOORDY': 'KOORDY', 'LAV': 'LAV', 'MATGA': 'MATGA', 'MON': 'MON', 'SRS_ID': 'SRS_ID', 'TEK': 'TEK', 'TIM': 'TIM', 'VEI': 'VEI', 'VIC': 'VIC', 'DUR': 'DUR', 'VEEA': 'VEEA', });
lyr_DEMPO_29.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'REMARK': 'REMARK', 'THTERBIT': 'THTERBIT', 'CLAPI': 'CLAPI', 'DEPMAG': 'DEPMAG', 'ERU': 'ERU', 'INDGA': 'INDGA', 'KOORDX': 'KOORDX', 'KOORDY': 'KOORDY', 'LAV': 'LAV', 'MATGA': 'MATGA', 'MON': 'MON', 'SRS_ID': 'SRS_ID', 'TEK': 'TEK', 'TIM': 'TIM', 'VEI': 'VEI', 'VIC': 'VIC', 'DUR': 'DUR', 'VEEA': 'VEEA', });
lyr_SALAK_30.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'REMARK': 'REMARK', 'THTERBIT': 'THTERBIT', 'CLAPI': 'CLAPI', 'DEPMAG': 'DEPMAG', 'ERU': 'ERU', 'INDGA': 'INDGA', 'KOORDX': 'KOORDX', 'KOORDY': 'KOORDY', 'LAV': 'LAV', 'MATGA': 'MATGA', 'MON': 'MON', 'SRS_ID': 'SRS_ID', 'TEK': 'TEK', 'TIM': 'TIM', 'VEI': 'VEI', 'VIC': 'VIC', 'DUR': 'DUR', 'VEEA': 'VEEA', });
lyr_Lampung_Zonasi_2.set('fieldImages', {'Zona': 'TextEdit', 'Keterangan': 'TextEdit', 'Tahun': 'Range', 'Wilayah': 'TextEdit', 'LCODE': 'TextEdit', 'Unsur': 'TextEdit', });
lyr_Banten_Zonasi_3.set('fieldImages', {'Zona': 'TextEdit', 'Unsur': 'TextEdit', 'Keterangan': 'TextEdit', 'Tahun': 'Range', 'Wilayah': 'TextEdit', 'LCODE': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_12.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMUKIMAN_AR_50K_13.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMUKIMAN_AR_50K_14.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMUKIMAN_AR_50K_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMUKIMAN_AR_50K_16.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PEMUKIMAN_AR_50K_17.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_18.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_19.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_20.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_21.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_22.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_23.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KRB_Tsunami_Teluk_Lampung_24.set('fieldImages', {'ID': 'Range', 'UNSUR': 'TextEdit', 'KETERANGAN': 'TextEdit', 'TAHUN': 'Range', 'WILAYAH': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', });
lyr_KRB_Tsunami_Banten_25.set('fieldImages', {'ID': 'Range', 'UNSUR': 'TextEdit', 'KETERANGAN': 'TextEdit', 'TAHUN': 'Range', 'WILAYAH': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', });
lyr_LAMPUNG_26.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRBID': 'TextEdit', 'KELAS': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BANTEN_27.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRBID': 'TextEdit', 'KELAS': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ANAK_KRAKATAU_28.set('fieldImages', {'OBJECTID_1': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'REMARK': 'TextEdit', 'THTERBIT': 'Range', 'CLAPI': 'Range', 'DEPMAG': 'Range', 'ERU': 'Range', 'INDGA': 'Range', 'KOORDX': 'TextEdit', 'KOORDY': 'TextEdit', 'LAV': 'Range', 'MATGA': 'Range', 'MON': 'Range', 'SRS_ID': 'TextEdit', 'TEK': 'Range', 'TIM': 'DateTime', 'VEI': 'Range', 'VIC': 'Range', 'DUR': 'Range', 'VEEA': 'TextEdit', });
lyr_DEMPO_29.set('fieldImages', {'OBJECTID_1': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'REMARK': 'TextEdit', 'THTERBIT': 'Range', 'CLAPI': 'Range', 'DEPMAG': 'Range', 'ERU': 'Range', 'INDGA': 'Range', 'KOORDX': 'TextEdit', 'KOORDY': 'TextEdit', 'LAV': 'Range', 'MATGA': 'Range', 'MON': 'Range', 'SRS_ID': 'TextEdit', 'TEK': 'Range', 'TIM': 'DateTime', 'VEI': 'Range', 'VIC': 'Range', 'DUR': 'Range', 'VEEA': 'TextEdit', });
lyr_SALAK_30.set('fieldImages', {'OBJECTID_1': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'REMARK': 'TextEdit', 'THTERBIT': 'Range', 'CLAPI': 'Range', 'DEPMAG': 'Range', 'ERU': 'Range', 'INDGA': 'Range', 'KOORDX': 'TextEdit', 'KOORDY': 'TextEdit', 'LAV': 'Range', 'MATGA': 'Range', 'MON': 'Range', 'SRS_ID': 'TextEdit', 'TEK': 'Range', 'TIM': 'DateTime', 'VEI': 'Range', 'VIC': 'Range', 'DUR': 'Range', 'VEEA': 'TextEdit', });
lyr_Lampung_Zonasi_2.set('fieldLabels', {'Zona': 'no label', 'Keterangan': 'no label', 'Tahun': 'no label', 'Wilayah': 'no label', 'LCODE': 'no label', 'Unsur': 'no label', });
lyr_Banten_Zonasi_3.set('fieldLabels', {'Zona': 'no label', 'Unsur': 'no label', 'Keterangan': 'no label', 'Tahun': 'no label', 'Wilayah': 'no label', 'LCODE': 'no label', });
lyr_PEMUKIMAN_AR_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_12.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_16.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_17.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_18.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_19.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_20.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_21.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_22.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_23.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KRB_Tsunami_Teluk_Lampung_24.set('fieldLabels', {'ID': 'no label', 'UNSUR': 'no label', 'KETERANGAN': 'no label', 'TAHUN': 'no label', 'WILAYAH': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', });
lyr_KRB_Tsunami_Banten_25.set('fieldLabels', {'ID': 'no label', 'UNSUR': 'no label', 'KETERANGAN': 'no label', 'TAHUN': 'no label', 'WILAYAH': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', });
lyr_LAMPUNG_26.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'KRBID': 'no label', 'KELAS': 'no label', 'NAMOBJ': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_BANTEN_27.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'KRBID': 'no label', 'KELAS': 'no label', 'NAMOBJ': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_ANAK_KRAKATAU_28.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'REMARK': 'no label', 'THTERBIT': 'no label', 'CLAPI': 'no label', 'DEPMAG': 'no label', 'ERU': 'no label', 'INDGA': 'no label', 'KOORDX': 'no label', 'KOORDY': 'no label', 'LAV': 'no label', 'MATGA': 'no label', 'MON': 'no label', 'SRS_ID': 'no label', 'TEK': 'no label', 'TIM': 'no label', 'VEI': 'no label', 'VIC': 'no label', 'DUR': 'no label', 'VEEA': 'no label', });
lyr_DEMPO_29.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'REMARK': 'no label', 'THTERBIT': 'no label', 'CLAPI': 'no label', 'DEPMAG': 'no label', 'ERU': 'no label', 'INDGA': 'no label', 'KOORDX': 'no label', 'KOORDY': 'no label', 'LAV': 'no label', 'MATGA': 'no label', 'MON': 'no label', 'SRS_ID': 'no label', 'TEK': 'no label', 'TIM': 'no label', 'VEI': 'no label', 'VIC': 'no label', 'DUR': 'no label', 'VEEA': 'no label', });
lyr_SALAK_30.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'REMARK': 'no label', 'THTERBIT': 'no label', 'CLAPI': 'no label', 'DEPMAG': 'no label', 'ERU': 'no label', 'INDGA': 'no label', 'KOORDX': 'no label', 'KOORDY': 'no label', 'LAV': 'no label', 'MATGA': 'no label', 'MON': 'no label', 'SRS_ID': 'no label', 'TEK': 'no label', 'TIM': 'no label', 'VEI': 'no label', 'VIC': 'no label', 'DUR': 'no label', 'VEEA': 'no label', });
lyr_SALAK_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});