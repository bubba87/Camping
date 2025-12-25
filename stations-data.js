// Données des stations de ski MagicPass 2025-2026 avec emplacements camping-car HIVER
// COORDONNÉES GPS = PARKING CAMPING-CAR (pas les sommets!)
const skiStations = [
    // ========== FRIBOURG (5 stations) ==========
    {
        id: 1,
        name: "La Berra",
        region: "Fribourg",
        lat: 46.68646,
        lng: 7.15432,
        rvParking: {
            available: true,
            capacity: 25,
            winterAccess: true,
            price: 25,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Le Brandt, 1634 La Roche FR",
            contact: "+41 26 928 14 80",
            notes: "Parking près du téléphérique, calme la nuit, 5km du centre",
            shortDesc: "Grand parking près du téléphérique, calme, vue panoramique"
        },
        skiResort: {
            altitude: "1267-1723m",
            pistes: "13km",
            magicPass: true
        }
    },
    {
        id: 2,
        name: "Moléson",
        region: "Fribourg - Gruyère",
        lat: 46.56128,
        lng: 7.03820,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Parking Funiculaire, Route du Moléson 228, 1663 Moléson-sur-Gruyères",
            contact: "+41 26 921 29 29",
            notes: "Grand parking funiculaire 600 places, gratuit hors saison, à 5km de Gruyères",
            shortDesc: "Grand parking funiculaire au pied des pistes, accès direct télécabine"
        },
        skiResort: {
            altitude: "1100-2002m",
            pistes: "11km",
            magicPass: true
        }
    },
    {
        id: 3,
        name: "Les Paccots",
        region: "Fribourg - Veveyse",
        lat: 46.5234,
        lng: 6.9445,
        rvParking: {
            available: true,
            capacity: 20,
            winterAccess: true,
            price: 25,
            amenities: ["electricity", "water", "waste", "toilets", "shower"],
            address: "Camping Le Bivouac, 1619 Les Paccots",
            contact: "+41 21 948 73 21",
            notes: "Camping ouvert toute l'année, au bord du lac",
            shortDesc: "Camping 4 saisons au bord du lac, cadre paisible et nature"
        },
        skiResort: {
            altitude: "1062-1470m",
            pistes: "8km",
            magicPass: true
        }
    },
    {
        id: 4,
        name: "Charmey",
        region: "Fribourg - Gruyère",
        lat: 46.6183,
        lng: 7.1693,
        rvParking: {
            available: true,
            capacity: 10,
            winterAccess: true,
            price: 19,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Aire camping-car, 7 Les Charrières, 1637 Charmey",
            contact: "+41 26 927 15 15",
            notes: "19 CHF pour 2 pers + bon 20 CHF commerces. Service eau/vidange/élec (5 CHF token 100L ou 6h élec). Télécabine 50m",
            shortDesc: "Aire camping-car à 50m de la télécabine, bon 20 CHF inclus"
        },
        skiResort: {
            altitude: "900-1730m",
            pistes: "28km",
            magicPass: true
        }
    },
    {
        id: 5,
        name: "Schwarzsee",
        region: "Fribourg",
        lat: 46.6678,
        lng: 7.2892,
        rvParking: {
            available: true,
            capacity: 18,
            winterAccess: true,
            price: 43,
            amenities: ["electricity", "water", "waste", "toilets", "shower"],
            address: "Camping Seeweid, 1716 Schwarzsee",
            contact: "+41 26 412 16 79",
            notes: "Camping ouvert toute l'année, au bord du lac",
            shortDesc: "Camping au bord du Lac Noir, ouvert toute l'année"
        },
        skiResort: {
            altitude: "1046-1750m",
            pistes: "10km",
            magicPass: true
        }
    },

    // ========== VAUD (5 stations) ==========
    {
        id: 6,
        name: "Villars-Gryon",
        region: "Vaud - Alpes Vaudoises",
        lat: 46.28252,
        lng: 7.07008,
        rvParking: {
            available: true,
            capacity: 3,
            winterAccess: true,
            price: 15,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Place de la Barboleuse, 1882 Gryon",
            contact: "+41 24 498 00 00",
            notes: "HIVER: seulement Barboleuse (2-3 places, travaux). 15 CHF pour 2 pers taxes incluses, élec 2 CHF, max 2 nuits",
            shortDesc: "Hiver: Barboleuse uniquement, 15 CHF avec carte Bienvenue incluse"
        },
        skiResort: {
            altitude: "1200-2120m",
            pistes: "115km",
            magicPass: true
        }
    },
    {
        id: 7,
        name: "Leysin",
        region: "Vaud - Alpes Vaudoises",
        lat: 46.34088,
        lng: 7.019631,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 14,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Place des Feuilles, 1854 Leysin",
            contact: "+41 24 493 33 00",
            notes: "10 CHF/nuit + 3.80 CHF taxe séjour/personne, paiement au centre sportif, séjour max 5 nuits",
            shortDesc: "Aire proche du centre sportif, grand parking plat, max 5 nuits"
        },
        skiResort: {
            altitude: "1260-2205m",
            pistes: "60km",
            magicPass: true
        }
    },
    {
        id: 8,
        name: "Les Mosses-La Lécherette",
        region: "Vaud - Alpes Vaudoises",
        lat: 46.3967,
        lng: 7.1034,
        rvParking: {
            available: true,
            capacity: 10,
            winterAccess: true,
            price: 15,
            amenities: ["electricity", "water", "toilets"],
            address: "Col des Mosses, 1862 Les Mosses",
            contact: "+41 24 491 14 66",
            notes: "Parking au col, accès direct aux pistes",
            shortDesc: "Parking au col, accès direct pistes et ski de fond"
        },
        skiResort: {
            altitude: "1445-2002m",
            pistes: "50km",
            magicPass: true
        }
    },
    {
        id: 9,
        name: "Château-d'Oex",
        region: "Vaud - Pays-d'Enhaut",
        lat: 46.4669137,
        lng: 7.124832,
        rvParking: {
            available: true,
            capacity: 25,
            winterAccess: true,
            price: 31,
            amenities: ["electricity", "water", "waste", "toilets", "shower"],
            address: "Camping Le Berceau, Route des Mosses 16, 1660 Château-d'Oex",
            contact: "+41 26 924 62 34",
            notes: "Camping 3★ ouvert toute l'année, au bord de la Sarine. 15 CHF emplacement + 9 CHF/adulte + 3 CHF taxe + 4 CHF élec = 31 CHF total",
            shortDesc: "Camping 3★ au bord de la Sarine, piscine gratuite, village des montgolfières"
        },
        skiResort: {
            altitude: "1000-1628m",
            pistes: "38km",
            magicPass: true
        }
    },
    {
        id: 10,
        name: "Les Pléiades",
        region: "Vaud - Riviera-Pays-d'Enhaut",
        lat: 46.4845,
        lng: 6.9223,
        rvParking: {
            available: true,
            capacity: 8,
            winterAccess: true,
            price: 10,
            amenities: ["electricity", "toilets"],
            address: "Parking Les Pléiades, 1808 Les Monts-de-Corsier",
            contact: "+41 21 989 33 30",
            notes: "Petit parking de montagne, vue panoramique sur le Léman",
            shortDesc: "Petit parking panoramique, vue exceptionnelle sur le Léman et les Alpes"
        },
        skiResort: {
            altitude: "1360-1400m",
            pistes: "6km",
            magicPass: true
        }
    },

    // ========== VALAIS (8 stations) ==========
    {
        id: 11,
        name: "Anzère",
        region: "Valais - Sierre",
        lat: 46.29727,
        lng: 7.40688,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 6,
            amenities: ["electricity", "water", "waste"],
            address: "Parking de l'Avenir, Route d'Anzère, 1972 Anzère",
            contact: "+41 27 399 28 00",
            notes: "Parking + taxe de séjour: 5.50 CHF/adulte, 2.75 CHF/enfant -16 ans, paiement par QR code Twint",
            shortDesc: "Parking de l'Avenir en bas du village, paiement par QR code"
        },
        skiResort: {
            altitude: "1500-2420m",
            pistes: "58km",
            magicPass: true
        }
    },
    {
        id: 12,
        name: "Ovronnaz",
        region: "Valais - Leytron",
        lat: 46.2023,
        lng: 7.1889,
        rvParking: {
            available: true,
            capacity: 20,
            winterAccess: true,
            price: 25,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Parking Central, 1911 Ovronnaz",
            contact: "+41 27 306 42 93",
            notes: "Accès direct aux pistes et bains thermaux",
            shortDesc: "Parking central, accès pistes et bains thermaux d'Ovronnaz"
        },
        skiResort: {
            altitude: "1340-2466m",
            pistes: "32km",
            magicPass: true
        }
    },
    {
        id: 13,
        name: "Grimentz",
        region: "Valais - Val d'Anniviers",
        lat: 46.17381,
        lng: 7.57235,
        rvParking: {
            available: true,
            capacity: 26,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste"],
            address: "Les Bouesses, Route de Moiry 27, 3961 Grimentz",
            contact: "+41 27 476 17 00",
            notes: "Hiver: 30 CHF/jour taxe incluse, carte Anniviers Liberté offerte, 26 bornes électriques, 200m des remontées",
            shortDesc: "Aire Les Bouesses, 200m des pistes, carte Anniviers Liberté incluse"
        },
        skiResort: {
            altitude: "1570-2900m",
            pistes: "115km",
            magicPass: true
        }
    },
    {
        id: 14,
        name: "Saint-Luc",
        region: "Valais - Val d'Anniviers",
        lat: 46.2245,
        lng: 7.6134,
        rvParking: {
            available: true,
            capacity: 18,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste"],
            address: "Chandolin - Route d'Echertès, 3961 Chandolin",
            contact: "+41 27 476 17 00",
            notes: "Hiver: 30 CHF/jour taxe incluse, 4 bornes 18 prises électriques, carte Anniviers Liberté",
            shortDesc: "Aire de Chandolin sous l'Auberge Les Choucas, carte Anniviers Liberté"
        },
        skiResort: {
            altitude: "1650-3025m",
            pistes: "115km",
            magicPass: true
        }
    },
    {
        id: 15,
        name: "Saas-Fee",
        region: "Valais - Saastal",
        lat: 46.109520,
        lng: 7.930490,
        rvParking: {
            available: true,
            capacity: 45,
            winterAccess: true,
            price: 37,
            amenities: ["electricity", "water", "waste", "toilets", "wifi", "shower"],
            address: "Parkhaus P4, Kantonsstrasse 14, 3906 Saas-Fee",
            contact: "+41 27 958 18 58",
            notes: "30 CHF parking + 7 CHF taxe/personne pour SaastalCard (obligatoire), village sans voiture, bus gratuit vers centre",
            shortDesc: "Parkhaus P4 derrière parking principal, SaastalCard obligatoire, village piéton"
        },
        skiResort: {
            altitude: "1800-3600m",
            pistes: "100km",
            magicPass: true
        }
    },
    {
        id: 16,
        name: "Saas-Almagell",
        region: "Valais - Saastal",
        lat: 46.09084,
        lng: 7.9568,
        rvParking: {
            available: true,
            capacity: 60,
            winterAccess: true,
            price: 9,
            amenities: ["electricity", "water", "waste"],
            address: "Bilgersche, 3905 Saas-Almagell",
            contact: "+41 27 957 18 88",
            notes: "9 CHF pour 2 personnes taxes incluses, grand parking asphalté 60 places, ouvert toute l'année",
            shortDesc: "Grand parking asphalté Bilgersche, 9 CHF/nuit taxes incluses"
        },
        skiResort: {
            altitude: "1672-3200m",
            pistes: "100km",
            magicPass: true
        }
    },
    {
        id: 17,
        name: "Blatten-Belalp",
        region: "Valais - Naters",
        lat: 46.364714,
        lng: 7.989872,
        rvParking: {
            available: true,
            capacity: 200,
            winterAccess: true,
            price: 5,
            amenities: ["electricity", "water"],
            address: "Parkplatz Rischinen, Rischinustrasse, 3914 Blatten b. Naters",
            contact: "+41 27 921 60 40",
            notes: "Nouvelle station Magic Pass 2025-26. Grand parking 200 places, 5 CHF/jour, Sportbus GRATUIT vers télécabine en hiver",
            shortDesc: "Grand parking Rischinen 200 places en forêt, bus gratuit vers télécabine"
        },
        skiResort: {
            altitude: "1322-3118m",
            pistes: "60km",
            magicPass: true
        }
    },
    {
        id: 18,
        name: "Unterbäch",
        region: "Valais - Raron",
        lat: 46.28858,
        lng: 7.80143,
        rvParking: {
            available: true,
            capacity: 5,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste", "toilets", "shower", "wifi"],
            address: "Seepark Augstbord, 3944 Unterbäch",
            contact: "+41 27 934 56 00",
            notes: "30 CHF pour 2 personnes avec taxes incluses, équipement complet, max 8m, réservation recommandée",
            shortDesc: "Seepark Augstbord avec services complets, réservation recommandée"
        },
        skiResort: {
            altitude: "1230-2350m",
            pistes: "18km",
            magicPass: true
        }
    }
];
