// Données des stations de ski MagicPass avec emplacements camping-car
const skiStations = [
    {
        id: 1,
        name: "La Berra",
        region: "Fribourg",
        lat: 46.6917,
        lng: 7.0889,
        rvParking: {
            available: true,
            capacity: 25,
            winterAccess: true,
            price: 25,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Parking P1, La Berra, 1669 Les Sciernes-d'Albeuve",
            contact: "+41 26 928 14 80",
            notes: "Parking directement aux pieds des pistes"
        },
        skiResort: {
            altitude: "1267-1723m",
            pistes: "13",
            magicPass: true
        }
    },
    {
        id: 2,
        name: "Moléson",
        region: "Gruyère",
        lat: 46.5447,
        lng: 7.0186,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Plan-Francey, 1663 Moléson-sur-Gruyères",
            contact: "+41 26 921 29 29",
            notes: "Accès par funiculaire, parking au village"
        },
        skiResort: {
            altitude: "1100-2002m",
            pistes: "11",
            magicPass: true
        }
    },
    {
        id: 3,
        name: "Les Paccots",
        region: "Vaud",
        lat: 46.5278,
        lng: 6.9542,
        rvParking: {
            available: true,
            capacity: 20,
            winterAccess: true,
            price: 20,
            amenities: ["electricity", "toilets"],
            address: "Centre du village, 1619 Les Paccots",
            contact: "+41 21 947 17 17",
            notes: "Parking au centre, navette gratuite vers les pistes"
        },
        skiResort: {
            altitude: "1062-1700m",
            pistes: "8",
            magicPass: true
        }
    },
    {
        id: 4,
        name: "Charmey",
        region: "Fribourg",
        lat: 46.6186,
        lng: 7.1611,
        rvParking: {
            available: true,
            capacity: 12,
            winterAccess: true,
            price: 22,
            amenities: ["electricity", "water", "waste", "toilets", "shower"],
            address: "Parking des Dents-Vertes, 1637 Charmey",
            contact: "+41 26 927 55 80",
            notes: "Proche des thermes et du domaine skiable"
        },
        skiResort: {
            altitude: "900-1720m",
            pistes: "12",
            magicPass: true
        }
    },
    {
        id: 5,
        name: "Schwarzsee",
        region: "Fribourg",
        lat: 46.6561,
        lng: 7.2858,
        rvParking: {
            available: true,
            capacity: 18,
            winterAccess: true,
            price: 28,
            amenities: ["electricity", "water", "toilets"],
            address: "Gypsera, 1716 Schwarzsee",
            contact: "+41 26 412 13 13",
            notes: "Vue magnifique sur les Préalpes"
        },
        skiResort: {
            altitude: "1046-1750m",
            pistes: "10",
            magicPass: true
        }
    },
    {
        id: 6,
        name: "Les Pléiades",
        region: "Vaud",
        lat: 46.4686,
        lng: 6.9203,
        rvParking: {
            available: true,
            capacity: 10,
            winterAccess: true,
            price: 18,
            amenities: ["toilets"],
            address: "Lally, 1808 Les Monts-de-Corsier",
            contact: "+41 21 921 05 38",
            notes: "Petit domaine familial, parking simple"
        },
        skiResort: {
            altitude: "1360-1400m",
            pistes: "6",
            magicPass: true
        }
    },
    {
        id: 7,
        name: "Jaun-Dorf",
        region: "Fribourg",
        lat: 46.6111,
        lng: 7.2750,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 24,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Dorfplatz, 1656 Jaun",
            contact: "+41 26 929 81 81",
            notes: "Village authentique, ambiance calme"
        },
        skiResort: {
            altitude: "1014-1509m",
            pistes: "7",
            magicPass: true
        }
    },
    {
        id: 8,
        name: "Rathvel",
        region: "Fribourg",
        lat: 46.7333,
        lng: 7.0667,
        rvParking: {
            available: true,
            capacity: 8,
            winterAccess: true,
            price: 15,
            amenities: ["toilets"],
            address: "Rathvel, 3280 Murten",
            contact: "+41 26 670 99 88",
            notes: "Petit domaine, idéal pour familles"
        },
        skiResort: {
            altitude: "1050-1200m",
            pistes: "4",
            magicPass: true
        }
    },
    {
        id: 9,
        name: "Villars-Gryon",
        region: "Vaud",
        lat: 46.2978,
        lng: 7.0556,
        rvParking: {
            available: true,
            capacity: 30,
            winterAccess: true,
            price: 35,
            amenities: ["electricity", "water", "waste", "toilets", "wifi", "shower"],
            address: "Parking Roc d'Orsay, 1884 Villars-sur-Ollon",
            contact: "+41 24 495 32 32",
            notes: "Grand domaine, toutes commodités"
        },
        skiResort: {
            altitude: "1200-2971m",
            pistes: "44",
            magicPass: true
        }
    },
    {
        id: 10,
        name: "Leysin",
        region: "Vaud",
        lat: 46.3444,
        lng: 7.0103,
        rvParking: {
            available: true,
            capacity: 22,
            winterAccess: true,
            price: 32,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Place du Marché, 1854 Leysin",
            contact: "+41 24 493 33 00",
            notes: "Station dynamique, parking central"
        },
        skiResort: {
            altitude: "1260-2200m",
            pistes: "60km",
            magicPass: true
        }
    },
    {
        id: 11,
        name: "Les Mosses",
        region: "Vaud",
        lat: 46.3958,
        lng: 7.1000,
        rvParking: {
            available: true,
            capacity: 20,
            winterAccess: true,
            price: 26,
            amenities: ["electricity", "water", "toilets"],
            address: "Col des Mosses, 1862 Les Mosses",
            contact: "+41 24 491 14 66",
            notes: "Sur le col, accès facile"
        },
        skiResort: {
            altitude: "1445-1920m",
            pistes: "15",
            magicPass: true
        }
    },
    {
        id: 12,
        name: "La Lécherette",
        region: "Vaud",
        lat: 46.4333,
        lng: 7.1167,
        rvParking: {
            available: true,
            capacity: 12,
            winterAccess: true,
            price: 22,
            amenities: ["electricity", "toilets"],
            address: "Village, 1862 La Lécherette",
            contact: "+41 24 491 32 32",
            notes: "Station familiale et tranquille"
        },
        skiResort: {
            altitude: "1385-1678m",
            pistes: "8",
            magicPass: true
        }
    },
    {
        id: 13,
        name: "Château-d'Oex",
        region: "Vaud",
        lat: 46.4758,
        lng: 7.1333,
        rvParking: {
            available: true,
            capacity: 16,
            winterAccess: true,
            price: 28,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "La Frasse, 1660 Château-d'Oex",
            contact: "+41 26 924 25 25",
            notes: "Capitale de la montgolfière, parking spacieux"
        },
        skiResort: {
            altitude: "958-2000m",
            pistes: "12",
            magicPass: true
        }
    },
    {
        id: 14,
        name: "Rougemont",
        region: "Vaud",
        lat: 46.4917,
        lng: 7.2083,
        rvParking: {
            available: true,
            capacity: 10,
            winterAccess: true,
            price: 25,
            amenities: ["electricity", "water", "toilets"],
            address: "Parking Videmanette, 1659 Rougemont",
            contact: "+41 26 925 11 66",
            notes: "Charmant village, parking au calme"
        },
        skiResort: {
            altitude: "1060-2156m",
            pistes: "10",
            magicPass: true
        }
    },
    {
        id: 15,
        name: "Ovronnaz",
        region: "Valais",
        lat: 46.2333,
        lng: 7.1833,
        rvParking: {
            available: true,
            capacity: 18,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste", "toilets", "shower"],
            address: "Parking Principal, 1911 Ovronnaz",
            contact: "+41 27 306 42 93",
            notes: "Combiné ski et thermes possible"
        },
        skiResort: {
            altitude: "1350-2466m",
            pistes: "25km",
            magicPass: true
        }
    },
    {
        id: 16,
        name: "Anzère",
        region: "Valais",
        lat: 46.2989,
        lng: 7.4006,
        rvParking: {
            available: true,
            capacity: 25,
            winterAccess: true,
            price: 32,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Parking P1, Route de Guérite, 1972 Anzère",
            contact: "+41 27 399 28 00",
            notes: "Station familiale ensoleillée, parking spacieux"
        },
        skiResort: {
            altitude: "1500-2420m",
            pistes: "58km",
            magicPass: true
        }
    },
    {
        id: 17,
        name: "Nendaz",
        region: "Valais - 4 Vallées",
        lat: 46.1919,
        lng: 7.2894,
        rvParking: {
            available: true,
            capacity: 35,
            winterAccess: true,
            price: 38,
            amenities: ["electricity", "water", "waste", "toilets", "wifi", "shower"],
            address: "Parking de la Télécabine, 1997 Haute-Nendaz",
            contact: "+41 27 289 55 89",
            notes: "Accès au domaine des 4 Vallées, parking équipé"
        },
        skiResort: {
            altitude: "1350-3330m",
            pistes: "410km (4 Vallées)",
            magicPass: true
        }
    },
    {
        id: 18,
        name: "Veysonnaz",
        region: "Valais - 4 Vallées",
        lat: 46.1994,
        lng: 7.3378,
        rvParking: {
            available: true,
            capacity: 28,
            winterAccess: true,
            price: 35,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Parking des Mayens, 1993 Veysonnaz",
            contact: "+41 27 207 10 53",
            notes: "Village authentique, accès 4 Vallées"
        },
        skiResort: {
            altitude: "1350-3330m",
            pistes: "410km (4 Vallées)",
            magicPass: true
        }
    },
    {
        id: 19,
        name: "Thyon",
        region: "Valais - 4 Vallées",
        lat: 46.1753,
        lng: 7.3747,
        rvParking: {
            available: true,
            capacity: 30,
            winterAccess: true,
            price: 36,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Les Collons, 1988 Thyon",
            contact: "+41 27 281 27 27",
            notes: "Au cœur des 4 Vallées, parking moderne"
        },
        skiResort: {
            altitude: "1350-3330m",
            pistes: "410km (4 Vallées)",
            magicPass: true
        }
    },
    {
        id: 20,
        name: "La Tzoumaz",
        region: "Valais - 4 Vallées",
        lat: 46.1361,
        lng: 7.2194,
        rvParking: {
            available: true,
            capacity: 20,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "toilets"],
            address: "Parking Principal, 1918 La Tzoumaz",
            contact: "+41 27 306 42 00",
            notes: "Station calme, porte d'entrée des 4 Vallées"
        },
        skiResort: {
            altitude: "1500-3330m",
            pistes: "410km (4 Vallées)",
            magicPass: true
        }
    },
    {
        id: 21,
        name: "Champéry",
        region: "Valais - Portes du Soleil",
        lat: 46.1756,
        lng: 6.8706,
        rvParking: {
            available: true,
            capacity: 40,
            winterAccess: true,
            price: 40,
            amenities: ["electricity", "water", "waste", "toilets", "wifi", "shower"],
            address: "Parking du Téléphérique, 1874 Champéry",
            contact: "+41 24 479 20 20",
            notes: "Village typique, accès Portes du Soleil"
        },
        skiResort: {
            altitude: "1050-2466m",
            pistes: "650km (Portes du Soleil)",
            magicPass: true
        }
    },
    {
        id: 22,
        name: "Morgins",
        region: "Valais - Portes du Soleil",
        lat: 46.2361,
        lng: 6.8550,
        rvParking: {
            available: true,
            capacity: 32,
            winterAccess: true,
            price: 36,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Route de la Jorette, 1875 Morgins",
            contact: "+41 24 477 23 61",
            notes: "Station familiale, domaine Portes du Soleil"
        },
        skiResort: {
            altitude: "1350-2466m",
            pistes: "650km (Portes du Soleil)",
            magicPass: true
        }
    },
    {
        id: 23,
        name: "Torgon",
        region: "Valais - Portes du Soleil",
        lat: 46.2822,
        lng: 6.8361,
        rvParking: {
            available: true,
            capacity: 24,
            winterAccess: true,
            price: 32,
            amenities: ["electricity", "water", "toilets", "wifi"],
            address: "Centre Station, 1899 Torgon",
            contact: "+41 24 481 21 21",
            notes: "Station-village, vue sur le Léman"
        },
        skiResort: {
            altitude: "1100-2400m",
            pistes: "650km (Portes du Soleil)",
            magicPass: true
        }
    },
    {
        id: 24,
        name: "Champoussin",
        region: "Valais - Portes du Soleil",
        lat: 46.1919,
        lng: 6.8856,
        rvParking: {
            available: true,
            capacity: 18,
            winterAccess: true,
            price: 28,
            amenities: ["electricity", "water", "toilets"],
            address: "Parking Central, 1873 Champoussin",
            contact: "+41 24 477 21 00",
            notes: "Petit village, connexion Portes du Soleil"
        },
        skiResort: {
            altitude: "1580-2400m",
            pistes: "650km (Portes du Soleil)",
            magicPass: true
        }
    },
    {
        id: 25,
        name: "Les Crosets",
        region: "Valais - Portes du Soleil",
        lat: 46.1869,
        lng: 6.8294,
        rvParking: {
            available: true,
            capacity: 22,
            winterAccess: true,
            price: 34,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Route des Crosets, 1873 Les Crosets",
            contact: "+41 24 477 13 44",
            notes: "En altitude, ski aux pieds possible"
        },
        skiResort: {
            altitude: "1650-2466m",
            pistes: "650km (Portes du Soleil)",
            magicPass: true
        }
    },
    {
        id: 26,
        name: "Grimentz",
        region: "Valais - Val d'Anniviers",
        lat: 46.1828,
        lng: 7.5731,
        rvParking: {
            available: true,
            capacity: 26,
            winterAccess: true,
            price: 33,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Parking du Téléphérique, 3961 Grimentz",
            contact: "+41 27 476 17 00",
            notes: "Village classé, architecture traditionnelle"
        },
        skiResort: {
            altitude: "1570-2900m",
            pistes: "115km",
            magicPass: true
        }
    },
    {
        id: 27,
        name: "Saint-Luc",
        region: "Valais - Val d'Anniviers",
        lat: 46.2261,
        lng: 7.6111,
        rvParking: {
            available: true,
            capacity: 20,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "toilets", "wifi"],
            address: "Route de Tignousa, 3961 Saint-Luc",
            contact: "+41 27 476 16 00",
            notes: "Observatoire astronomique, village ensoleillé"
        },
        skiResort: {
            altitude: "1650-3025m",
            pistes: "115km",
            magicPass: true
        }
    },
    {
        id: 28,
        name: "Chandolin",
        region: "Valais - Val d'Anniviers",
        lat: 46.2628,
        lng: 7.5964,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 28,
            amenities: ["electricity", "toilets"],
            address: "Village, 3967 Chandolin",
            contact: "+41 27 475 18 38",
            notes: "Plus haut village avec église, charme authentique"
        },
        skiResort: {
            altitude: "1936-3000m",
            pistes: "115km",
            magicPass: true
        }
    },
    {
        id: 29,
        name: "Vercorin",
        region: "Valais",
        lat: 46.2575,
        lng: 7.5417,
        rvParking: {
            available: true,
            capacity: 22,
            winterAccess: true,
            price: 29,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Parking des Crêtes, 3967 Vercorin",
            contact: "+41 27 455 58 55",
            notes: "Station sans voiture, parking en périphérie"
        },
        skiResort: {
            altitude: "1340-2650m",
            pistes: "35km",
            magicPass: true
        }
    },
    {
        id: 30,
        name: "Grächen",
        region: "Valais",
        lat: 46.1950,
        lng: 7.8372,
        rvParking: {
            available: true,
            capacity: 30,
            winterAccess: true,
            price: 34,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Parking Hannigalp, 3925 Grächen",
            contact: "+41 27 956 36 06",
            notes: "Village de montagne sans voiture, parking équipé"
        },
        skiResort: {
            altitude: "1619-2868m",
            pistes: "42km",
            magicPass: true
        }
    },
    {
        id: 31,
        name: "Saas-Grund",
        region: "Valais - Saastal",
        lat: 46.1247,
        lng: 7.9383,
        rvParking: {
            available: true,
            capacity: 28,
            winterAccess: true,
            price: 32,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Parking Talstation, 3910 Saas-Grund",
            contact: "+41 27 958 18 58",
            notes: "Vallée de Saas, ambiance authentique"
        },
        skiResort: {
            altitude: "1559-3200m",
            pistes: "35km",
            magicPass: true
        }
    },
    {
        id: 32,
        name: "Bellwald",
        region: "Valais - Goms",
        lat: 46.4256,
        lng: 8.1619,
        rvParking: {
            available: true,
            capacity: 20,
            winterAccess: true,
            price: 26,
            amenities: ["electricity", "water", "toilets"],
            address: "Parking Richinen, 3997 Bellwald",
            contact: "+41 27 971 16 84",
            notes: "Haut-Valais, domaine familial tranquille"
        },
        skiResort: {
            altitude: "1600-2560m",
            pistes: "40km",
            magicPass: true
        }
    },
    {
        id: 33,
        name: "Blatten-Belalp",
        region: "Valais - Aletsch",
        lat: 46.4172,
        lng: 7.9817,
        rvParking: {
            available: true,
            capacity: 24,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Blatten bei Naters, 3914 Blatten",
            contact: "+41 27 921 60 40",
            notes: "Vue sur le glacier d'Aletsch"
        },
        skiResort: {
            altitude: "1322-3118m",
            pistes: "60km",
            magicPass: true
        }
    },
    {
        id: 34,
        name: "Unterbäch",
        region: "Valais",
        lat: 46.2800,
        lng: 7.7961,
        rvParking: {
            available: true,
            capacity: 16,
            winterAccess: true,
            price: 27,
            amenities: ["electricity", "water", "toilets"],
            address: "Dorfzentrum, 3944 Unterbäch",
            contact: "+41 27 934 56 85",
            notes: "Village ensoleillé, cadre familial"
        },
        skiResort: {
            altitude: "1230-2350m",
            pistes: "20km",
            magicPass: true
        }
    },
    {
        id: 35,
        name: "Bruson",
        region: "Valais - 4 Vallées",
        lat: 46.0717,
        lng: 7.2119,
        rvParking: {
            available: true,
            capacity: 18,
            winterAccess: true,
            price: 28,
            amenities: ["electricity", "water", "toilets"],
            address: "Route de Bruson, 1934 Bruson",
            contact: "+41 27 776 16 77",
            notes: "Secteur authentique des 4 Vallées"
        },
        skiResort: {
            altitude: "1080-2700m",
            pistes: "410km (4 Vallées)",
            magicPass: true
        }
    },
    {
        id: 36,
        name: "Evolène",
        region: "Valais - Val d'Hérens",
        lat: 46.1153,
        lng: 7.5039,
        rvParking: {
            available: true,
            capacity: 14,
            winterAccess: true,
            price: 25,
            amenities: ["electricity", "toilets"],
            address: "Parking Télécabine, 1983 Evolène",
            contact: "+41 27 283 40 00",
            notes: "Village traditionnel, Val d'Hérens"
        },
        skiResort: {
            altitude: "1370-2450m",
            pistes: "28km",
            magicPass: true
        }
    }
];
