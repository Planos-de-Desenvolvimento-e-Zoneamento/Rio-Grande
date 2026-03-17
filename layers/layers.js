ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-52.193366, -32.159096, -51.956425, -32.024573]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo'
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_15 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_15 = format_AcessosHidroviriosExternos_15.readFeatures(json_AcessosHidroviriosExternos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosExternos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_15.addFeatures(features_AcessosHidroviriosExternos_15);
var lyr_AcessosHidroviriosExternos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_15, 
                style: style_AcessosHidroviriosExternos_15,
                popuplayertitle: 'Acessos Hidroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_15.png" /> Acessos Hidroviários Externos '
            });
var format_AcessosDutoviriosExternos_16 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_16 = format_AcessosDutoviriosExternos_16.readFeatures(json_AcessosDutoviriosExternos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosExternos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_16.addFeatures(features_AcessosDutoviriosExternos_16);
var lyr_AcessosDutoviriosExternos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_16, 
                style: style_AcessosDutoviriosExternos_16,
                popuplayertitle: 'Acessos Dutoviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_16.png" /> Acessos Dutoviários Externos'
            });
var format_AcessosFerroviriosInternosLongoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_17 = format_AcessosFerroviriosInternosLongoPrazo_17.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_17.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_17);
var lyr_AcessosFerroviriosInternosLongoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_17, 
                style: style_AcessosFerroviriosInternosLongoPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_17.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_18 = format_AcessosFerroviriosInternosMdioPrazo_18.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_18.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_18);
var lyr_AcessosFerroviriosInternosMdioPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_18, 
                style: style_AcessosFerroviriosInternosMdioPrazo_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_18.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_19 = format_AcessosFerroviriosInternosCurtoPrazo_19.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_19.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_19);
var lyr_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_19, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_19,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_19.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_20 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_20 = format_AcessosFerroviriosInternosSituaoAtual_20.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_20.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_20);
var lyr_AcessosFerroviriosInternosSituaoAtual_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_20, 
                style: style_AcessosFerroviriosInternosSituaoAtual_20,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_20.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosFerroviriosExternos_21 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_21 = format_AcessosFerroviriosExternos_21.readFeatures(json_AcessosFerroviriosExternos_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosExternos_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_21.addFeatures(features_AcessosFerroviriosExternos_21);
var lyr_AcessosFerroviriosExternos_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_21, 
                style: style_AcessosFerroviriosExternos_21,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_21.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_22 = format_AcessosRodoviriosInternosLongoPrazo_22.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_22.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_22);
var lyr_AcessosRodoviriosInternosLongoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_22, 
                style: style_AcessosRodoviriosInternosLongoPrazo_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_22.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_23 = format_AcessosRodoviriosInternosMdioPrazo_23.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_23.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_23);
var lyr_AcessosRodoviriosInternosMdioPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_23, 
                style: style_AcessosRodoviriosInternosMdioPrazo_23,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_23.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_24 = format_AcessosRodoviriosInternosCurtoPrazo_24.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_24.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_24);
var lyr_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_24, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_24,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_24.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_25 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_25 = format_AcessosRodoviriosInternosSituaoAtual_25.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_25.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_25);
var lyr_AcessosRodoviriosInternosSituaoAtual_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_25, 
                style: style_AcessosRodoviriosInternosSituaoAtual_25,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_25.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_26 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_26 = format_AcessosRodoviriosExternos_26.readFeatures(json_AcessosRodoviriosExternos_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_26.addFeatures(features_AcessosRodoviriosExternos_26);
var lyr_AcessosRodoviriosExternos_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_26, 
                style: style_AcessosRodoviriosExternos_26,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_26.png" /> Acessos Rodoviários Externos '
            });
var format_reaseInstalaesAlfandegadas_27 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_27 = format_reaseInstalaesAlfandegadas_27.readFeatures(json_reaseInstalaesAlfandegadas_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_27.addFeatures(features_reaseInstalaesAlfandegadas_27);
var lyr_reaseInstalaesAlfandegadas_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_27, 
                style: style_reaseInstalaesAlfandegadas_27,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_27.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_36 = format_reasNoAfetassOperaesPorturiasLongoPrazo_36.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_36);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_36.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_37 = format_reasNoAfetassOperaesPorturiasMdioPrazo_37.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_37);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_37,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_37.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_38.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_38);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_38,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_38.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_39 = format_reasNoAfetassOperaesPorturiasSituaoAtual_39.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_39);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_39,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_39.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_40 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_40 = format_AcostagemLongoPrazo_40.readFeatures(json_AcostagemLongoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_40.addFeatures(features_AcostagemLongoPrazo_40);
var lyr_AcostagemLongoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_40, 
                style: style_AcostagemLongoPrazo_40,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_40.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_41 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_41 = format_AcostagemMdioPrazo_41.readFeatures(json_AcostagemMdioPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_41.addFeatures(features_AcostagemMdioPrazo_41);
var lyr_AcostagemMdioPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_41, 
                style: style_AcostagemMdioPrazo_41,
                popuplayertitle: 'Acostagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_41.png" /> Acostagem - Médio Prazo'
            });
var format_AcostagemCurtoPrazo_42 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_42 = format_AcostagemCurtoPrazo_42.readFeatures(json_AcostagemCurtoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_42.addFeatures(features_AcostagemCurtoPrazo_42);
var lyr_AcostagemCurtoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_42, 
                style: style_AcostagemCurtoPrazo_42,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_42.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_43 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_43 = format_AcostagemSituaoAtual_43.readFeatures(json_AcostagemSituaoAtual_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_43.addFeatures(features_AcostagemSituaoAtual_43);
var lyr_AcostagemSituaoAtual_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_43, 
                style: style_AcostagemSituaoAtual_43,
                popuplayertitle: 'Acostagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_43.png" /> Acostagem - Situação Atual'
            });
var format_ArmazenagemLongoPrazo_44 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_44 = format_ArmazenagemLongoPrazo_44.readFeatures(json_ArmazenagemLongoPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_44.addFeatures(features_ArmazenagemLongoPrazo_44);
var lyr_ArmazenagemLongoPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_44, 
                style: style_ArmazenagemLongoPrazo_44,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_44.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_45 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_45 = format_ArmazenagemMdioPrazo_45.readFeatures(json_ArmazenagemMdioPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_45.addFeatures(features_ArmazenagemMdioPrazo_45);
var lyr_ArmazenagemMdioPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_45, 
                style: style_ArmazenagemMdioPrazo_45,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_45.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_46 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_46 = format_ArmazenagemCurtoPrazo_46.readFeatures(json_ArmazenagemCurtoPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_46.addFeatures(features_ArmazenagemCurtoPrazo_46);
var lyr_ArmazenagemCurtoPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_46, 
                style: style_ArmazenagemCurtoPrazo_46,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_46.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_47 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_47 = format_ArmazenagemSituaoAtual_47.readFeatures(json_ArmazenagemSituaoAtual_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_47.addFeatures(features_ArmazenagemSituaoAtual_47);
var lyr_ArmazenagemSituaoAtual_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_47, 
                style: style_ArmazenagemSituaoAtual_47,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_47.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52 = new ol.format.GeoJSON();
var features_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52 = format_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52.readFeatures(json_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52.addFeatures(features_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52);
var lyr_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52, 
                style: style_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52,
                popuplayertitle: 'Áreas Afetas às Operacões Portuárias de Uso Público - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52.png" /> Áreas Afetas às Operacões Portuárias de Uso Público - Longo Prazo'
            });
var format_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53 = new ol.format.GeoJSON();
var features_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53 = format_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53.readFeatures(json_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53.addFeatures(features_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53);
var lyr_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53, 
                style: style_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53,
                popuplayertitle: 'Áreas Afetas às Operacões Portuárias de Uso Público - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53.png" /> Áreas Afetas às Operacões Portuárias de Uso Público - Médio Prazo'
            });
var format_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54 = new ol.format.GeoJSON();
var features_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54 = format_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54.readFeatures(json_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54.addFeatures(features_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54);
var lyr_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54, 
                style: style_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54,
                popuplayertitle: 'Áreas Afetas às Operacões Portuárias de Uso Público - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54.png" /> Áreas Afetas às Operacões Portuárias de Uso Público - Curto Prazo'
            });
var format_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55 = new ol.format.GeoJSON();
var features_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55 = format_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55.readFeatures(json_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55.addFeatures(features_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55);
var lyr_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55, 
                style: style_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55,
                popuplayertitle: 'Áreas Afetas às Operacões Portuárias de Uso Público - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55.png" /> Áreas Afetas às Operacões Portuárias de Uso Público - Situação Atual'
            });
var format_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56 = new ol.format.GeoJSON();
var features_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56 = format_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56.readFeatures(json_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56.addFeatures(features_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56);
var lyr_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56, 
                style: style_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56,
                popuplayertitle: 'Áreas Afetas às Operacões Portuárias com Servidão de Passagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56.png" /> Áreas Afetas às Operacões Portuárias com Servidão de Passagem - Longo Prazo'
            });
var format_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57 = new ol.format.GeoJSON();
var features_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57 = format_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57.readFeatures(json_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57.addFeatures(features_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57);
var lyr_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57, 
                style: style_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57,
                popuplayertitle: 'Áreas Afetas às Operacões Portuárias com Servidão de Passagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57.png" /> Áreas Afetas às Operacões Portuárias com Servidão de Passagem - Médio Prazo'
            });
var format_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58 = new ol.format.GeoJSON();
var features_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58 = format_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58.readFeatures(json_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58.addFeatures(features_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58);
var lyr_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58, 
                style: style_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58,
                popuplayertitle: 'Áreas Afetas às Operacões Portuárias com Servidão de Passagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58.png" /> Áreas Afetas às Operacões Portuárias com Servidão de Passagem - Curto Prazo'
            });
var format_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59 = new ol.format.GeoJSON();
var features_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59 = format_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59.readFeatures(json_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59.addFeatures(features_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59);
var lyr_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59, 
                style: style_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59,
                popuplayertitle: 'Áreas Afetas às Operacões Portuárias com Servidão de Passagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59.png" /> Áreas Afetas às Operacões Portuárias com Servidão de Passagem - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_60.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_61.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_63.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_64 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_64 = format_reasAfetassOperaesPorturiasLongoPrazo_64.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_64.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_64);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_64, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_64,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_64.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_65 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_65 = format_reasAfetassOperaesPorturiasMdioPrazo_65.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_65.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_65);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_65, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_65,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_65.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_66 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_66 = format_reasAfetassOperaesPorturiasCurtoPrazo_66.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_66.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_66);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_66, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_66,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_66.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_67 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_67 = format_reasAfetassOperaesPorturiasSituaoAtual_67.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_67.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_67);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_67, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_67,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_67.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodoRioGrande_68 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodoRioGrande_68 = format_PoligonaldareadoPortoOrganizadodoRioGrande_68.readFeatures(json_PoligonaldareadoPortoOrganizadodoRioGrande_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodoRioGrande_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodoRioGrande_68.addFeatures(features_PoligonaldareadoPortoOrganizadodoRioGrande_68);
var lyr_PoligonaldareadoPortoOrganizadodoRioGrande_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodoRioGrande_68, 
                style: style_PoligonaldareadoPortoOrganizadodoRioGrande_68,
                popuplayertitle: 'Poligonal da Área do Porto Organizado do Rio Grande',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodoRioGrande_68.png" /> Poligonal da Área do Porto Organizado do Rio Grande'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodoRioGrande_68,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_64,lyr_reasAfetassOperaesPorturiasMdioPrazo_65,lyr_reasAfetassOperaesPorturiasCurtoPrazo_66,lyr_reasAfetassOperaesPorturiasSituaoAtual_67,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperacesPorturiascomServidodePassagem = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56,lyr_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57,lyr_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58,lyr_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operacões Portuárias com Servidão de Passagem'});
var group_reasAfetassOperacesPorturiasdeUsoPblico = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52,lyr_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53,lyr_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54,lyr_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operacões Portuárias de Uso Público'});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_44,lyr_ArmazenagemMdioPrazo_45,lyr_ArmazenagemCurtoPrazo_46,lyr_ArmazenagemSituaoAtual_47,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_40,lyr_AcostagemMdioPrazo_41,lyr_AcostagemCurtoPrazo_42,lyr_AcostagemSituaoAtual_43,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_27,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_26,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_22,lyr_AcessosRodoviriosInternosMdioPrazo_23,lyr_AcessosRodoviriosInternosCurtoPrazo_24,lyr_AcessosRodoviriosInternosSituaoAtual_25,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_21,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_17,lyr_AcessosFerroviriosInternosMdioPrazo_18,lyr_AcessosFerroviriosInternosCurtoPrazo_19,lyr_AcessosFerroviriosInternosSituaoAtual_20,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos '});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_16,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos '});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_15,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosHidroviriosExternos_15.setVisible(false);lyr_AcessosDutoviriosExternos_16.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_18.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_19.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_20.setVisible(false);lyr_AcessosFerroviriosExternos_21.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_22.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_23.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_24.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_25.setVisible(false);lyr_AcessosRodoviriosExternos_26.setVisible(false);lyr_reaseInstalaesAlfandegadas_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.setVisible(false);lyr_AcostagemLongoPrazo_40.setVisible(false);lyr_AcostagemMdioPrazo_41.setVisible(false);lyr_AcostagemCurtoPrazo_42.setVisible(false);lyr_AcostagemSituaoAtual_43.setVisible(false);lyr_ArmazenagemLongoPrazo_44.setVisible(false);lyr_ArmazenagemMdioPrazo_45.setVisible(false);lyr_ArmazenagemCurtoPrazo_46.setVisible(false);lyr_ArmazenagemSituaoAtual_47.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.setVisible(false);lyr_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52.setVisible(false);lyr_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53.setVisible(false);lyr_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54.setVisible(false);lyr_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55.setVisible(false);lyr_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56.setVisible(false);lyr_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57.setVisible(false);lyr_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58.setVisible(false);lyr_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_64.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_65.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_66.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_67.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodoRioGrande_68.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosDutoviriosExternos,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperacesPorturiasdeUsoPblico,group_reasAfetassOperacesPorturiascomServidodePassagem,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Ins. Legal': 'Instrumento Legal', 'Area (m²)': 'Area (m²)', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'Tipo': 'Tipo de Área ', 'Inst Legal': 'Intrumento Legal', 'Area': 'Área (m²)', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'Ident.': 'Identificação', 'Funcao': 'Função ', 'Calado (m)': 'Calado (m)', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'Ident.': 'Identificação', 'Funcao': 'Função ', 'Calado (m)': 'Calado (m)', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'Ident.': 'Identificação', 'Funcao': 'Função ', 'Calado (m)': 'Calado (m)', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'Ident.': 'Identificação', 'Funcao': 'Função ', 'Calado (m)': 'Calado (m)', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'Nome': 'Nome', 'Função': 'Função', 'Calado (m)': 'Calado (m)', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'Nome': 'Nome', 'Função': 'Função', 'Calado (m)': 'Calado (m)', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'Nome': 'Nome', 'Função': 'Função', 'Calado (m)': 'Calado (m)', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'Nome': 'Nome', 'Função': 'Função', 'Calado (m)': 'Calado (m)', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado (m)': 'Calado (m)', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado (m)': 'Calado (m)', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado (m)': 'Calado (m)', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'Trecho': 'Trecho', 'Calado (m)': 'Calado (m)', });
lyr_AcessosHidroviriosExternos_15.set('fieldAliases', {'Nome': 'Nome', 'Calado(m)': 'Calado(m)', 'Atual.': 'Atualização', });
lyr_AcessosDutoviriosExternos_16.set('fieldAliases', {'Nome': 'Nome', 'Mat. Trans': 'Material Transportado ', 'Posicao': 'Posição ', 'Operador': 'Operador', 'T. Duto': 'Tipo de Duto ', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosExternos_21.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldAliases', {'Ident.': 'Identificação ', 'N° Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldAliases', {'Ident.': 'Identificação ', 'N° Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldAliases', {'Ident.': 'Identificação ', 'N° Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldAliases', {'Ident.': 'Identificação', 'N° Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_26.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldAliases', {'Nome': 'Nome', 'Ins. Legal': 'Instrumento Legal', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldAliases', {'Nome': 'Nome', 'T. Explo': 'Tipo de Exploração ', 'Util Atual': 'Util Atual', 'Area (m²)': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldAliases', {'Nome': 'Nome', 'T. Explo': 'Tipo de Exploração ', 'Util Atual': 'Utilização Atual da Área', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração ', 'Util Atual': 'Utilização Atual da Área', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldAliases', {'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração ', 'Util Atual': 'Utilização Atual da Área ', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldAliases', {'Nome': 'Nome', 'T. Cessao': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'T. Cessao': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'T. Cessao': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldAliases', {'Nome': 'Nome', 'T. Cessao': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area (m²)': 'Area (m²)', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área (m²': 'Área (m²)', });
lyr_AcostagemLongoPrazo_40.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berco': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp. (m)': 'Comprimento (m) ', 'Profund(m)': 'Profundidade (m) ', 'Calado (m)': 'Calado (m)', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_41.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berco': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp. (m)': 'Comprimento (m) ', 'Profund(m)': 'Profundidade (m) ', 'Calado (m)': 'Calado (m)', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_42.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berco': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp. (m)': 'Comprimento (m) ', 'Profund(m)': 'Profundidade (m) ', 'Calado (m)': 'Calado (m)', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_43.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berco': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas', 'Comp. (m)': 'Comprimento (m)', 'Profund(m)': 'Profundidade (m)', 'Calado (m)': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_44.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Vol. (m³)': 'Volume (m³) ', 'Area (m²)': 'Área (m²) ', });
lyr_ArmazenagemMdioPrazo_45.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Vol. (m³)': 'Volume (m³) ', 'Area (m²)': 'Área (m²) ', });
lyr_ArmazenagemCurtoPrazo_46.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Vol. (m³)': 'Volume (m³) ', 'Area (m²)': 'Área (m²) ', });
lyr_ArmazenagemSituaoAtual_47.set('fieldAliases', {'Nome': 'Nome', 'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Vol. (m³)': 'Volume (m³) ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'N° Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'N° Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'N° Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'N° Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'N° Cont.': 'Número do Contrato ', 'D. Início': 'D. Início', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'N° Cont.': 'Número do Contrato ', 'D. Início': 'D. Início', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'N° Cont.': 'Número do Contrato ', 'D. Início': 'D. Início', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'N° Cont.': 'Número do Contrato ', 'D. Início': 'D. Início', 'D. Term.': 'Data do Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_64.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_65.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_66.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Area (m²)': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_67.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Area (m²)': 'Área (m²) ', });
lyr_PoligonaldareadoPortoOrganizadodoRioGrande_68.set('fieldAliases', {'Name': 'Name', 'ins': 'Instrumento Legal', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Ins. Legal': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'Tipo': 'TextEdit', 'Inst Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'Ident.': 'TextEdit', 'Funcao': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'Ident.': 'TextEdit', 'Funcao': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'Ident.': 'TextEdit', 'Funcao': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'Ident.': 'TextEdit', 'Funcao': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'Nome': 'TextEdit', 'Função': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'Nome': 'TextEdit', 'Função': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'Nome': 'TextEdit', 'Função': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'Nome': 'TextEdit', 'Função': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'Trecho': 'TextEdit', 'Calado (m)': 'TextEdit', });
lyr_AcessosHidroviriosExternos_15.set('fieldImages', {'Nome': 'TextEdit', 'Calado(m)': 'TextEdit', 'Atual.': 'TextEdit', });
lyr_AcessosDutoviriosExternos_16.set('fieldImages', {'Nome': 'TextEdit', 'Mat. Trans': 'TextEdit', 'Posicao': 'TextEdit', 'Operador': 'TextEdit', 'T. Duto': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosExternos_21.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldImages', {'Ident.': 'TextEdit', 'N° Pistas': 'Range', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldImages', {'Ident.': 'TextEdit', 'N° Pistas': 'Range', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldImages', {'Ident.': 'TextEdit', 'N° Pistas': 'Range', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldImages', {'Ident.': 'TextEdit', 'N° Pistas': 'Range', });
lyr_AcessosRodoviriosExternos_26.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldImages', {'Nome': 'TextEdit', 'Ins. Legal': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldImages', {'Nome': 'TextEdit', 'T. Explo': 'TextEdit', 'Util Atual': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldImages', {'Nome': 'TextEdit', 'T. Explo': 'TextEdit', 'Util Atual': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util Atual': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldImages', {'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util Atual': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_AcostagemLongoPrazo_40.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. (m)': 'TextEdit', 'Profund(m)': 'TextEdit', 'Calado (m)': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_41.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. (m)': 'TextEdit', 'Profund(m)': 'TextEdit', 'Calado (m)': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_42.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. (m)': 'TextEdit', 'Profund(m)': 'TextEdit', 'Calado (m)': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_43.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. (m)': 'TextEdit', 'Profund(m)': 'TextEdit', 'Calado (m)': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_44.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Vol. (m³)': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_45.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Vol. (m³)': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_46.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Vol. (m³)': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_47.set('fieldImages', {'Nome': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Vol. (m³)': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56.set('fieldImages', {'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57.set('fieldImages', {'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58.set('fieldImages', {'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59.set('fieldImages', {'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60.set('fieldImages', {'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61.set('fieldImages', {'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62.set('fieldImages', {'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63.set('fieldImages', {'Arrend.': 'TextEdit', 'N° Cont.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_64.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_65.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_66.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_67.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Area (m²)': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodoRioGrande_68.set('fieldImages', {'Name': 'TextEdit', 'ins': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Ins. Legal': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Inst Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Calado(m)': 'inline label - visible with data', 'Atual.': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Mat. Trans': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'T. Duto': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_21.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'N° Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'N° Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'N° Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'N° Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Ins. Legal': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Explo': 'inline label - visible with data', 'Util Atual': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Explo': 'inline label - visible with data', 'Util Atual': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util Atual': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util Atual': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessao': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessao': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessao': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessao': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_40.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp. (m)': 'inline label - visible with data', 'Profund(m)': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_41.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp. (m)': 'inline label - visible with data', 'Profund(m)': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_42.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp. (m)': 'inline label - visible with data', 'Profund(m)': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_43.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp. (m)': 'inline label - visible with data', 'Profund(m)': 'inline label - visible with data', 'Calado (m)': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Vol. (m³)': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Vol. (m³)': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Vol. (m³)': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Vol. (m³)': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_49.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoLongoPrazo_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoMdioPrazo_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoCurtoPrazo_54.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperacesPorturiasdeUsoPblicoSituaoAtual_55.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemLongoPrazo_56.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'N° Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemMdioPrazo_57.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'N° Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemCurtoPrazo_58.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'N° Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperacesPorturiascomServidodePassagemSituaoAtual_59.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'N° Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_60.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'N° Cont.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_61.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'N° Cont.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_62.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'N° Cont.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_63.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'N° Cont.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Area (m²)': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodoRioGrande_68.set('fieldLabels', {'Name': 'inline label - visible with data', 'ins': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodoRioGrande_68.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});