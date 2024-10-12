document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('brand').addEventListener('change', filterModels);

    function filterModels() {
    var brand = document.getElementById("brand").value;
    var modelSelect = document.getElementById("Model");

    // Clear existing options
    modelSelect.innerHTML = '<option value="">Select Model</option>';

    // Add models based on selected brand
    var models = {
        'Audi': ['A3 35',
            'A4 1.8',
            'A4 2.0',
            'A4 3.0',
            'A4 30',
            'A4 35',
            'A4 New',
            'A6 2.0',
            'A6 2.7',
            'A6 2.8',
            'A6 2011-2015',
            'A6 3.0',
            'A6 35',
            'A7 2011-2015',
            'A8 L',
            'Q3 2.0',
            'Q3 2012-2015',
            'Q3 30',
            'Q3 35',
            'Q5 2.0',
            'Q5 2008-2012',
            'Q5 3.0',
            'Q5 30',
            'Q7 3.0',
            'Q7 35',
            'Q7 4.2',
            'Q7 45',
            'RS5 Coupe',
            'TT 2.0',
            'TT 40'],
           'BMW': ['1 Series',
            '3 Series',
            '5 Series',
            '6 Series',
            '7 Series',
            'X1 M',
            'X1 sDrive',
            'X1 sDrive20d',
            'X1 xDrive',
            'X3 2.5si',
            'X3 xDrive',
            'X3 xDrive20d',
            'X3 xDrive30d',
            'X5 2014-2019',
            'X5 3.0d',
            'X5 X5',
            'X5 xDrive',
            'X6 xDrive',
            'X6 xDrive30d',
            'Z4 2009-2013'],
           'Bentley': ['Continental Flying', 'Flying Spur'],
           'Datsun': ['GO NXT', 'GO Plus', 'GO T', 'Redi GO', 'redi-GO S', 'redi-GO T'],
           'Fiat': ['Abarth 595',
            'Avventura FIRE',
            'Avventura MULTIJET',
            'Avventura Urban',
            'Grande Punto',
            'Linea 1.3',
            'Linea Classic',
            'Linea Dynamic',
            'Linea Emotion',
            'Linea T',
            'Linea T-Jet',
            'Punto EVO'],
           'Ford': ['Aspire Ambiente',
            'Aspire Titanium',
            'Classic 1.4',
            'EcoSport 1.0',
            'EcoSport 1.5',
            'Ecosport 1.0',
            'Ecosport 1.5',
            'Ecosport Signature',
            'Endeavour 2.2',
            'Endeavour 2.5L',
            'Endeavour 3.0L',
            'Endeavour 3.2',
            'Endeavour 4x2',
            'Endeavour Hurricane',
            'Endeavour Titanium',
            'Endeavour XLT',
            'Fiesta 1.4',
            'Fiesta 1.5',
            'Fiesta 1.6',
            'Fiesta Classic',
            'Fiesta Diesel',
            'Fiesta EXi',
            'Fiesta Titanium',
            'Figo 1.2P',
            'Figo 1.5D',
            'Figo 2015-2019',
            'Figo Aspire',
            'Figo Diesel',
            'Figo Petrol',
            'Figo Titanium',
            'Freestyle Titanium',
            'Fusion Plus',
            'Ikon 1.3',
            'Ikon 1.4',
            'Ikon 1.6',
            'Mustang V8'],
           'Honda': ['Accord 2.4',
            'Accord 2001-2003',
            'Accord V6',
            'Accord VTi-L',
            'Amaze E',
            'Amaze EX',
            'Amaze S',
            'Amaze SX',
            'Amaze V',
            'Amaze VX',
            'BR-V i-DTEC',
            'BR-V i-VTEC',
            'BRV i-DTEC',
            'BRV i-VTEC',
            'Brio 1.2',
            'Brio E',
            'Brio EX',
            'Brio S',
            'Brio V',
            'Brio VX',
            'CR-V 2.0',
            'CR-V 2.0L',
            'CR-V 2.4',
            'CR-V 2.4L',
            'CR-V Diesel',
            'CR-V Petrol',
            'CR-V RVi',
            'City 1.3',
            'City 1.5',
            'City Corporate',
            'City V',
            'City ZX',
            'City i',
            'City i-DTEC',
            'City i-VTEC',
            'Civic 2006-2010',
            'Civic 2010-2013',
            'Jazz 1.2',
            'Jazz 1.5',
            'Jazz Active',
            'Jazz Exclusive',
            'Jazz Mode',
            'Jazz S',
            'Jazz Select',
            'Jazz V',
            'Jazz VX',
            'Mobilio E',
            'Mobilio RS',
            'Mobilio S',
            'Mobilio V',
            'WR-V Edge',
            'WRV i-DTEC',
            'WRV i-VTEC'],
           'Hyundai': ['Accent CRDi',
            'Accent Executive',
            'Accent GLE',
            'Accent GLS',
            'Accent GLX',
            'Creta 1.4',
            'Creta 1.6',
            'EON 1.0',
            'EON D',
            'EON Era',
            'EON LPG',
            'EON Magna',
            'EON Sportz',
            'Elantra 1.6',
            'Elantra 2.0',
            'Elantra CRDi',
            'Elantra GT',
            'Elantra SX',
            'Elite i20',
            'Getz 1.3',
            'Getz 1.5',
            'Getz GLE',
            'Getz GLS',
            'Getz GVS',
            'Grand i10',
            'Santa Fe',
            'Santro D',
            'Santro Xing',
            'Sonata 2.4',
            'Sonata Embera',
            'Sonata GOLD',
            'Sonata Transform',
            'Tucson 2.0',
            'Tucson CRDi',
            'Verna 1.4',
            'Verna 1.6',
            'Verna CRDi',
            'Verna SX',
            'Verna Transform',
            'Verna VTVT',
            'Verna XXi',
            'Verna Xi',
            'Xcent 1.1',
            'Xcent 1.2',
            'i10 Asta',
            'i10 Era',
            'i10 Magna',
            'i10 Magna(O)',
            'i10 Sportz',
            'i20 1.2',
            'i20 1.4',
            'i20 2015-2017',
            'i20 Active',
            'i20 Asta',
            'i20 Diesel',
            'i20 Era',
            'i20 Magna',
            'i20 Sportz'],
           'Isuzu': ['D-MAX V-Cross', 'MU 7', 'MUX 4WD'],
           'Jaguar': ['F Type',
            'XE 2.0L',
            'XE Portfolio',
            'XF 2.0',
            'XF 2.2',
            'XF 3.0',
            'XF Aero',
            'XF Diesel',
            'XJ 2.0L',
            'XJ 3.0L',
            'XJ 5.0'],
           'Jeep': ['Compass 1.4', 'Compass 2.0'],
           'Land Rover': ['Rover Discovery', 'Rover Freelander', 'Rover Range'],
           'Mahindra': ['Bolero DI',
            'Bolero Power',
            'Bolero SLE',
            'Bolero SLX',
            'Bolero VLX',
            'Bolero ZLX',
            'Bolero mHAWK',
            'KUV 100',
            'Logan Diesel',
            'Logan Petrol',
            'NuvoSport N6',
            'NuvoSport N8',
            'Quanto C2',
            'Quanto C4',
            'Quanto C6',
            'Quanto C8',
            'Renault Logan',
            'Scorpio 1.99',
            'Scorpio 2.6',
            'Scorpio 2009-2014',
            'Scorpio DX',
            'Scorpio LX',
            'Scorpio S10',
            'Scorpio S2',
            'Scorpio S4',
            'Scorpio S6',
            'Scorpio S8',
            'Scorpio SLE',
            'Scorpio SLX',
            'Scorpio VLS',
            'Scorpio VLX',
            'Ssangyong Rexton',
            'TUV 300',
            'Thar 4X4',
            'Thar CRDe',
            'Thar DI',
            'Verito 1.5',
            'Verito Vibe',
            'XUV300 W8',
            'XUV500 AT',
            'XUV500 W10',
            'XUV500 W4',
            'XUV500 W6',
            'XUV500 W7',
            'XUV500 W8',
            'XUV500 W9',
            'Xylo D2',
            'Xylo D4',
            'Xylo E2',
            'Xylo E4',
            'Xylo E8',
            'Xylo E9',
            'Xylo H4',
            'Xylo H9'],
           'Maruti': ['800 AC',
            '800 DX',
            '800 Std',
            'A-Star AT',
            'A-Star Lxi',
            'A-Star Vxi',
            'A-Star Zxi',
            'Alto 800',
            'Alto Green',
            'Alto K10',
            'Alto LX',
            'Alto LXI',
            'Alto LXi',
            'Alto Std',
            'Alto VXi',
            'Alto Vxi',
            'Alto XCITE',
            'Baleno Alpha',
            'Baleno Delta',
            'Baleno LXI',
            'Baleno RS',
            'Baleno Sigma',
            'Baleno Vxi',
            'Baleno Zeta',
            'Celerio CNG',
            'Celerio LDi',
            'Celerio LXI',
            'Celerio VXI',
            'Celerio X',
            'Celerio ZDi',
            'Celerio ZXI',
            'Ciaz 1.3',
            'Ciaz 1.4',
            'Ciaz AT',
            'Ciaz Alpha',
            'Ciaz RS',
            'Ciaz VDI',
            'Ciaz VDi',
            'Ciaz VXi',
            'Ciaz ZDi',
            'Ciaz ZXi',
            'Ciaz Zeta',
            'Dzire AMT',
            'Dzire LDI',
            'Dzire New',
            'Dzire VDI',
            'Dzire VXI',
            'Dzire ZDI',
            'Eeco 5',
            'Eeco 7',
            'Eeco CNG',
            'Eeco Smiles',
            'Ertiga LXI',
            'Ertiga Paseo',
            'Ertiga SHVS',
            'Ertiga VDI',
            'Ertiga VXI',
            'Ertiga ZDI',
            'Ertiga ZXI',
            'Esteem Vxi',
            'Grand Vitara',
            'Ignis 1.2',
            'Ignis 1.3',
            'Omni 5',
            'Omni 8',
            'Omni E',
            'Omni MPI',
            'Ritz AT',
            'Ritz LDi',
            'Ritz LXI',
            'Ritz LXi',
            'Ritz VDI',
            'Ritz VDi',
            'Ritz VXI',
            'Ritz VXi',
            'Ritz ZDi',
            'Ritz ZXI',
            'Ritz ZXi',
            'S Cross',
            'S-Cross Alpha',
            'S-Cross Delta',
            'S-Cross Zeta',
            'SX4 Green',
            'SX4 S',
            'SX4 VDI',
            'SX4 Vxi',
            'SX4 ZDI',
            'SX4 ZXI',
            'SX4 Zxi',
            'Swift AMT',
            'Swift DDiS',
            'Swift Dzire',
            'Swift LDI',
            'Swift LXI',
            'Swift LXi',
            'Swift Ldi',
            'Swift Lxi',
            'Swift RS',
            'Swift VDI',
            'Swift VDi',
            'Swift VVT',
            'Swift VXI',
            'Swift VXi',
            'Swift Vdi',
            'Swift ZDI',
            'Swift ZDi',
            'Swift ZXI',
            'Versa DX2',
            'Vitara Brezza',
            'Wagon R',
            'Zen Estilo',
            'Zen LX',
            'Zen LXI',
            'Zen LXi',
            'Zen VX',
            'Zen VXI',
            'Zen VXi'],
           'Mercedes-Benz': ['A Class',
            'B Class',
            'CLA 200',
            'CLA 45',
            'CLS-Class 2006-2010',
            'E-Class 200',
            'E-Class 2009-2013',
            'E-Class 2015-2017',
            'E-Class 230',
            'E-Class 250',
            'E-Class 280',
            'E-Class E',
            'E-Class E240',
            'E-Class E250',
            'E-Class E270',
            'E-Class E350',
            'E-Class E400',
            'E-Class Facelift',
            'GL-Class 2007',
            'GL-Class 350',
            'GLA Class',
            'GLC 220',
            'GLC 220d',
            'GLC 43',
            'GLE 250d',
            'GLE 350d',
            'GLS 350d',
            'M-Class ML',
            'New C-Class',
            'R-Class R350',
            'S Class',
            'S-Class 280',
            'S-Class 320',
            'S-Class S',
            'SL-Class SL',
            'SLC 43',
            'SLK-Class 55',
            'SLK-Class SLK'],
           'Mini Cooper': ['Clubman Cooper',
            'Cooper 3',
            'Cooper 5',
            'Cooper Convertible',
            'Cooper Countryman',
            'Cooper S',
            'Countryman Cooper'],
           'Mitsubishi': ['Cedia Sports',
            'Lancer 1.5',
            'Lancer GLXD',
            'Montero 3.2',
            'Outlander 2.4',
            'Pajero 2.8',
            'Pajero 4X4',
            'Pajero Sport'],
           'Nissan': ['370Z AT',
            'Evalia 2013',
            'Micra Active',
            'Micra Diesel',
            'Micra XE',
            'Micra XL',
            'Micra XV',
            'Sunny 2011-2014',
            'Sunny Diesel',
            'Sunny XE',
            'Sunny XL',
            'Sunny XV',
            'Teana XL',
            'Teana XV',
            'Terrano XE',
            'Terrano XL',
            'Terrano XV',
            'X-Trail SLX'],
           'Porsche': ['Boxster S',
            'Cayenne 2009-2014',
            'Cayenne Base',
            'Cayenne Diesel',
            'Cayenne S',
            'Cayenne Turbo',
            'Panamera 2010',
            'Panamera Diesel'],
           'Renault': ['Captur 1.5',
            'Duster 110PS',
            'Duster 85PS',
            'Duster Adventure',
            'Duster Petrol',
            'Duster RXZ',
            'Fluence 1.5',
            'Fluence 2.0',
            'Fluence Diesel',
            'KWID 1.0',
            'KWID AMT',
            'KWID Climber',
            'KWID RXL',
            'KWID RXT',
            'Koleos 2.0',
            'Koleos 4X2',
            'Lodgy 110PS',
            'Pulse Petrol',
            'Pulse RxL',
            'Pulse RxZ',
            'Scala Diesel',
            'Scala RxL'],
           'Skoda': ['Fabia 1.2',
            'Fabia 1.2L',
            'Fabia 1.4',
            'Fabia 1.6',
            'Laura 1.8',
            'Laura 1.9',
            'Laura Ambiente',
            'Laura Ambition',
            'Laura Elegance',
            'Laura L',
            'Laura RS',
            'Octavia 1.9',
            'Octavia 2.0',
            'Octavia Ambiente',
            'Octavia Ambition',
            'Octavia Classic',
            'Octavia Elegance',
            'Octavia L',
            'Octavia RS',
            'Octavia Rider',
            'Octavia Style',
            'Rapid 1.5',
            'Rapid 1.6',
            'Rapid 2013-2016',
            'Rapid Leisure',
            'Rapid Ultima',
            'Superb 1.8',
            'Superb 2.5',
            'Superb 2.8',
            'Superb 2009-2014',
            'Superb Ambition',
            'Superb Elegance',
            'Superb L&K',
            'Superb Petrol',
            'Superb Style',
            'Yeti Ambition',
            'Yeti Elegance'],
           'Tata': ['Bolt Quadrajet',
            'Bolt Revotron',
            'Hexa XT',
            'Hexa XTA',
            'Indica GLS',
            'Indica LEI',
            'Indica V2',
            'Indica Vista',
            'Indigo CS',
            'Indigo GLE',
            'Indigo LS',
            'Indigo LX',
            'Indigo XL',
            'Indigo eCS',
            'Manza Aqua',
            'Manza Aura',
            'Manza Club',
            'Manza ELAN',
            'Nano CX',
            'Nano Cx',
            'Nano LX',
            'Nano Lx',
            'Nano STD',
            'Nano Twist',
            'Nano XT',
            'Nano XTA',
            'New Safari',
            'Nexon 1.2',
            'Nexon 1.5',
            'Safari DICOR',
            'Safari Storme',
            'Sumo DX',
            'Sumo Delux',
            'Sumo EX',
            'Tiago 1.05',
            'Tiago 1.2',
            'Tiago AMT',
            'Tiago Wizz',
            'Tigor 1.05',
            'Tigor 1.2',
            'Tigor XE',
            'Venture EX',
            'Xenon XT',
            'Zest Quadrajet',
            'Zest Revotron'],
           'Toyota': ['Camry 2.5',
            'Camry A/T',
            'Camry Hybrid',
            'Camry MT',
            'Camry W2',
            'Camry W4',
            'Corolla 1.8',
            'Corolla Altis',
            'Corolla DX',
            'Corolla Executive',
            'Corolla H2',
            'Corolla H4',
            'Corolla H5',
            'Etios 1.4',
            'Etios Cross',
            'Etios G',
            'Etios GD',
            'Etios Liva',
            'Etios Petrol',
            'Etios V',
            'Etios VD',
            'Etios VX',
            'Etios VXD',
            'Fortuner 2.8',
            'Fortuner 3.0',
            'Fortuner 4x2',
            'Fortuner 4x4',
            'Fortuner TRD',
            'Innova 2.0',
            'Innova 2.5',
            'Innova Crysta',
            'Land Cruiser',
            'Platinum Etios',
            'Qualis FS'],
           'Volkswagen': ['Ameo 1.2',
            'Ameo 1.5',
            'Beetle 2.0',
            'CrossPolo 1.2',
            'CrossPolo 1.5',
            'Jetta 2007-2011',
            'Jetta 2012-2014',
            'Jetta 2013-2015',
            'Passat 1.8',
            'Passat 2.0',
            'Passat Diesel',
            'Passat Highline',
            'Polo 1.0',
            'Polo 1.2',
            'Polo 1.5',
            'Polo ALLSTAR',
            'Polo Diesel',
            'Polo GT',
            'Polo GTI',
            'Polo IPL',
            'Polo Petrol',
            'Tiguan 2.0',
            'Vento 1.2',
            'Vento 1.5',
            'Vento 1.6',
            'Vento 2013-2015',
            'Vento Diesel',
            'Vento IPL',
            'Vento Konekt',
            'Vento Magnific',
            'Vento Petrol',
            'Vento Sport',
            'Vento TSI'],
           'Volvo': ['S60 D3',
            'S60 D4',
            'S60 D5',
            'S80 2006-2013',
            'S80 D5',
            'V40 Cross',
            'V40 D3',
            'XC60 D4',
            'XC60 D5',
            'XC90 2007-2015']
        };

        if (brand in models) {
            models[brand].forEach(function(model) {
                var option = document.createElement("option");
                option.value = model;
                option.text = model;
                modelSelect.appendChild(option);
            });
        }
    }
});

console.log("Script loaded")