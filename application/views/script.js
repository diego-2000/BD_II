var pivot = new WebDataRocks({
    container: "#wdr-component",
    toolbar: false,
    report: {
        "dataSource": {
            "dataSourceType": "json",
            "data": getCANTIDADData()
        },
        slice: {
            reportFilters: [
                {
                    uniqueName: "EDAD"                
                }
            ],
            rows: [{
                uniqueName: "FECHA_DEF.Day"                
            }, {
                uniqueName: "Measures"
            }],
            columns: [{
                uniqueName: "MUNICIPIO_RES",
                "filter": {
                    "members": [
                        "MUNICIPIO_RES.GUSTAVO A. MADERO",
                        "MUNICIPIO_RES.ALVARO OBREGON",
                        "MUNICIPIO_RES.AZCAPOTZALCO",
                        "MUNICIPIO_RES.BENITO JUAREZ",
                        "MUNICIPIO_RES.COYOACAN",
                        "MUNICIPIO_RES.CUAJIMALPA DE MORELOS",
                        "MUNICIPIO_RES.CUAUHTEMOC",
                        "MUNICIPIO_RES.IZTACALCO",
                        "MUNICIPIO_RES.IZTAPALAPA",
                        "MUNICIPIO_RES.LA MAGDALENA CONTRERAS",
                        "MUNICIPIO_RES.MIGUEL HIDALGO",
                        "MUNICIPIO_RES.MILPA ALTA",
                        "MUNICIPIO_RES.TLAHUAC",
                        "MUNICIPIO_RES.TLALPAN",
                        "MUNICIPIO_RES.VENUSTIANO CARRANZA",
                        "MUNICIPIO_RES.XOCHIMILCO",
                    ]
                }
            }],
            measures: [{
                uniqueName: "CANTIDAD"
            }]
        }
    },
    reportcomplete: function() {
        pivot.off("reportcomplete");
        createChart();
    }
});

Highcharts.theme= {
    colors: ['#f45b5b',
    '#8085e9',
    '#8d4654',
    '#7798BF',
    '#aaeeee',
    '#ff0066',
    '#eeaaee',
    '#55BF3B',
    '#DF5353',
    '#7798BF',
    '#aaeeee'],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Open Sans', fontWeight: 'bold'
        }
    }
    ,
    title: {
        style: {
            color: 'black', fontSize: '16px', fontWeight: 'bold', fontFamily: 'Open Sans'
        }
    }
    ,
    subtitle: {
        style: {
            color: 'black', fontSize: '18px', fontWeight: 'bold', fontFamily: 'Open Sans'
        }
    }
    ,
    tooltip: {
        borderWidth: 0
    }
    ,
    legend: {
        itemStyle: {
            fontWeight: 'bold', fontSize: '13px'
        }
    }
    ,
    xAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    }
    ,
    yAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    }
    ,
    plotOptions: {
        series: {
            shadow: true
        }
        ,
        candlestick: {
            lineColor: '#404048'
        }
        ,
        map: {
            shadow: false
        }
    }
    , // Highstock specific
    navigator: {
        xAxis: {
            gridLineColor: '#D0D0D8'
        }
    }
    ,
    rangeSelector: {
        buttonTheme: {
            fill: 'white',
            stroke: '#C0C0C8',
            'stroke-width': 1,
            states: {
                select: {
                    fill: '#D0D0D8'
                }
            }
        }
    }
    ,
    scrollbar: {
        trackBorderColor: '#C0C0C8'
    }
    , // General
    background2: '#E0E0E8'
};
// apply the theme
Highcharts.setOptions(Highcharts.theme);
function createChart() {
    pivot.highcharts.getData({
        type: "area"
    }, function(data) {
        Highcharts.setOptions({
            subtitle: {
                text: 'CANTIDAD'
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Defunciones {point.y} '
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            }
        });
        Highcharts.chart("highchartsContainer", data);
    }, 
    
    function(data) {
        Highcharts.setOptions({
            subtitle: {
                text: 'CANTIDAD'
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Defunciones {point.y}'
            },
            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            }
        });
        Highcharts.chart("highchartsContainer", data);
    });
}

function getCANTIDADData() {
    
    return [
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 48,
          "CANTIDAD": 2
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/05",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 71,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 74,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 86,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "MUJER",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 48,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/03",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 89,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/29",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 81,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/03",
          "MUNICIPIO_RES": "beni",
          "SEXO": "MUJER",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 43,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/02",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "HOMBRE",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 73,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 48,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "MUJER",
          "EDAD": 92,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 75,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/04",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 48,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/05",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 33,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 48,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 99,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/08",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 67,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/30",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 33,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 32,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 47,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/02",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 94,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 33,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "MUJER",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 35,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/30",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 93,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "TLAHUAC",
          "SEXO": "HOMBRE",
          "EDAD": 82,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/01",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 32,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 81,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/03",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "HOMBRE",
          "EDAD": 41,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "TLAHUAC",
          "SEXO": "HOMBRE",
          "EDAD": 48,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 32,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 29,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "MUJER",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/28",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "MUJER",
          "EDAD": 80,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/29",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 73,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 58,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 67,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 39,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 37,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 77,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 58,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 71,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/08",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/29",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/08",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 74,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 77,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 30,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 92,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 67,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 85,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "HOMBRE",
          "EDAD": 90,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/25",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 41,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 40,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 81,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 84,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "MUJER",
          "EDAD": 81,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 58,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 73,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 44,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "HOMBRE",
          "EDAD": 31,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/01",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 48,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "MUJER",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 71,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 87,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "MUJER",
          "EDAD": 83,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 48,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 38,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/03",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "MUJER",
          "EDAD": 83,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 73,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 47,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 37,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 67,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 79,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 77,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/02",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 39,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 41,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/05",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 85,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 43,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 74,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 42,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 29,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "HOMBRE",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 80,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 26,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 83,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/04",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/08",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/01",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/26",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 38,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/05",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 93,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "MUJER",
          "EDAD": 79,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 80,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 78,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 88,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 77,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 79,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "MUJER",
          "EDAD": 42,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 79,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "MUJER",
          "EDAD": 91,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 48,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "MUJER",
          "EDAD": 84,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/26",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/27",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "MUJER",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/01",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 44,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/29",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 75,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 33,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 74,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "MUJER",
          "EDAD": 78,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 36,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "MUJER",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 78,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 58,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 94,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 81,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 38,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 74,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/29",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 74,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/30",
          "MUNICIPIO_RES": "TLAHUAC",
          "SEXO": "HOMBRE",
          "EDAD": 73,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "MUJER",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 58,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/02",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 43,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 28,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 74,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 73,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "MUJER",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "MUJER",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "MUJER",
          "EDAD": 43,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 50,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 67,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 84,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/08",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 19,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 93,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 77,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 82,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 75,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "HOMBRE",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/30",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 44,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "MUJER",
          "EDAD": 75,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 47,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "TLAHUAC",
          "SEXO": "MUJER",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "MILPA ALTA",
          "SEXO": "MUJER",
          "EDAD": 41,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 41,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "MUJER",
          "EDAD": 43,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 78,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/03",
          "MUNICIPIO_RES": "TLAHUAC",
          "SEXO": "HOMBRE",
          "EDAD": 81,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/27",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 47,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/26",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 42,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 50,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 44,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/03",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 30,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 88,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "MUJER",
          "EDAD": 50,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 44,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/03",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 50,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 49,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "TLAHUAC",
          "SEXO": "HOMBRE",
          "EDAD": 83,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 50,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "MUJER",
          "EDAD": 73,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 77,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "MUJER",
          "EDAD": 38,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/08",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "HOMBRE",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "MUJER",
          "EDAD": 39,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/04",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/23",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 79,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/04",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/05",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 44,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 47,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "MUJER",
          "EDAD": 43,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/04",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 36,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "MILPA ALTA",
          "SEXO": "HOMBRE",
          "EDAD": 69,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/02",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 85,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 58,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 41,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "MUJER",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 84,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/30",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 58,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/29",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 83,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 22,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 47,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/06",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/01",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "HOMBRE",
          "EDAD": 41,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "MUJER",
          "EDAD": 88,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/07",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 45,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "MUJER",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/04",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 42,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/01",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/16",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 70,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 43,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 77,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "TLALPAN",
          "SEXO": "HOMBRE",
          "EDAD": 55,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/09",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 71,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 71,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/29",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 40,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 83,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "MUJER",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 57,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 79,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "MIGUEL HIDALGO",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/08",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/21",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 74,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 37,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "HOMBRE",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/23",
          "MUNICIPIO_RES": "TLAHUAC",
          "SEXO": "HOMBRE",
          "EDAD": 42,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "COYOACAN",
          "SEXO": "MUJER",
          "EDAD": 85,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 72,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/27",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 58,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 78,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 61,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "HOMBRE",
          "EDAD": 78,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 42,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/30",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "MUJER",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 90,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 47,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 66,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/03/31",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 64,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/28",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "MUJER",
          "EDAD": 83,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/19",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "HOMBRE",
          "EDAD": 36,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/12",
          "MUNICIPIO_RES": "IZTACALCO",
          "SEXO": "HOMBRE",
          "EDAD": 76,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 52,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 77,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "MUJER",
          "EDAD": 63,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "HOMBRE",
          "EDAD": 47,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 65,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/13",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 73,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/24",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "CUAJIMALPA DE MORELOS",
          "SEXO": "HOMBRE",
          "EDAD": 38,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/20",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 59,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/25",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 35,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/03",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 78,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/05",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 46,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "LA MAGDALENA CONTRERAS",
          "SEXO": "MUJER",
          "EDAD": 89,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 51,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/15",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "MUJER",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/22",
          "MUNICIPIO_RES": "TLAHUAC",
          "SEXO": "HOMBRE",
          "EDAD": 62,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "AZCAPOTZALCO",
          "SEXO": "HOMBRE",
          "EDAD": 68,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/18",
          "MUNICIPIO_RES": "XOCHIMILCO",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/11",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "MUJER",
          "EDAD": 60,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/17",
          "MUNICIPIO_RES": "VENUSTIANO CARRANZA",
          "SEXO": "HOMBRE",
          "EDAD": 50,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/26",
          "MUNICIPIO_RES": "BENITO JUAREZ",
          "SEXO": "MUJER",
          "EDAD": 75,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "CUAUHTEMOC",
          "SEXO": "HOMBRE",
          "EDAD": 54,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/10",
          "MUNICIPIO_RES": "IZTAPALAPA",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/16",
          "MUNICIPIO_RES": "GUSTAVO A. MADERO",
          "SEXO": "HOMBRE",
          "EDAD": 56,
          "CANTIDAD": 1
        },
        {
          "FECHA_DEF": "2020/04/14",
          "MUNICIPIO_RES": "ALVARO OBREGON",
          "SEXO": "HOMBRE",
          "EDAD": 53,
          "CANTIDAD": 1
        }
      ]
}