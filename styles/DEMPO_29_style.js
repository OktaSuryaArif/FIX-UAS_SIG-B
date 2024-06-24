var size = 0;
var placement = 'point';
function categories_DEMPO_29(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'berpotensi terlanda aliran awan panas dan aliran lava':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'berpotensi terlanda aliran lahar hujan dan kemungkinan perluasan awan panas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'berpotensi terlanda hujan abu lebat dan lontaran batu pijar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'berpotensi tertimpa hujan abu dan kemungkinan dapat tertimpa lontaran batu pijar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sangat berpotensi terlanda aliran awan panas dan aliran lava':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sangat berpotensi tertimpa lontaran batu pijar berupa bom gunungapi atau pecahan batuan skoria, hujan abu lebat, dan hujan lumpur':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(171,210,53,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_DEMPO_29 = function(feature, resolution){
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
    
var style = categories_DEMPO_29(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
