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
    }
];
