var size = 0;
var placement = 'point';
function categories_ANAK_KRAKATAU_28(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'berpotensi terhadap hujan abu dan kemungkinan dapat terkena lontaran batu pijar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'berpotensi terlanda aliran lava dan kemungkinan awan panas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'berpotensi terlanda hujan abu lebat dan kemungkinan dapat terkena lontaran batu pijar ukuran kerikil':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sering terlanda aliran lava dan kemungkian awan panas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sering terlanda hujan abu lebat dan lontaran batu pijar atau bom vulkanik':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(97,233,222,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ANAK_KRAKATAU_28 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("REMARK");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ANAK_KRAKATAU_28(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
