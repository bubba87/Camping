// Données des stations de ski MagicPass 2025-2026 avec emplacements camping-car HIVER
const skiStations = [
    // ========== FRIBOURG (5 stations) ==========
    {
        id: 1,
        name: "La Berra",
        region: "Fribourg",
        lat: 46.6756,
        lng: 7.0917,
        rvParking: {
            available: true,
            capacity: 25,
            winterAccess: true,
            price: 25,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Parking P1, La Berra, 1669 Les Sciernes-d'Albeuve",
            contact: "+41 26 928 14 80",
            notes: "Parking directement aux pieds des pistes",
            shortDesc: "Grand parking sécurisé au pied des pistes, accès facile toute l'année"
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
        lat: 46.5445,
        lng: 7.0189,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste", "toilets", "wifi"],
            address: "Plan-Francey, 1663 Moléson-sur-Gruyères",
            contact: "+41 26 921 29 29",
            notes: "Accès par funiculaire, parking au village",
            shortDesc: "Parking au village, accès funiculaire, cadre pittoresque de Gruyère"
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
        lat: 46.6189,
        lng: 7.1623,
        rvParking: {
            available: true,
            capacity: 12,
            winterAccess: true,
            price: 20,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Parking Télécabine, 1637 Charmey",
            contact: "+41 26 927 15 15",
            notes: "Parking près de la télécabine, accès bains thermaux",
            shortDesc: "Parking télécabine, proche des bains thermaux de Charmey"
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
        lat: 46.3023,
        lng: 7.0534,
        rvParking: {
            available: true,
            capacity: 20,
            winterAccess: true,
            price: 15,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Barboleuse, 1882 Gryon",
            contact: "+41 24 498 00 00",
            notes: "Tarif inclut 2 taxes de séjour adulte et carte Bienvenue, hiver: aire de Barboleuse uniquement",
            shortDesc: "En hiver: aire de Barboleuse, tarif inclut carte Bienvenue avec avantages"
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
        lat: 46.3451,
        lng: 7.0123,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 14,
            amenities: ["electricity", "water", "waste", "toilets"],
            address: "Place des Feuilles, 1854 Leysin",
            contact: "+41 24 493 33 00",
            notes: "10 CHF/nuit + 3.80 CHF taxe séjour/personne, paiement au centre sportif, séjour max 5 nuits",
            shortDesc: "Aire proche du centre sportif, séjour max 5 nuits"
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
        lat: 46.4756,
        lng: 7.1334,
        rvParking: {
            available: true,
            capacity: 25,
            winterAccess: true,
            price: 24,
            amenities: ["electricity", "water", "waste", "toilets", "shower"],
            address: "Camping Le Berceau, Route des Mosses 16, 1660 Château-d'Oex",
            contact: "+41 26 924 62 34",
            notes: "Camping ouvert toute l'année: 15 CHF emplacement + 9 CHF/adulte + 3 CHF taxe + 4 CHF électricité",
            shortDesc: "Camping 4 saisons, accès piscine gratuit, village des montgolfières"
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

    // ========== VALAIS (7 stations) ==========
    {
        id: 11,
        name: "Anzère",
        region: "Valais - Sierre",
        lat: 46.2978,
        lng: 7.4123,
        rvParking: {
            available: true,
            capacity: 15,
            winterAccess: true,
            price: 6,
            amenities: ["electricity", "water", "waste"],
            address: "Parking de l'Avenir, 1972 Anzère",
            contact: "+41 27 399 28 00",
            notes: "Taxe de séjour: 5.50 CHF/adulte, 2.75 CHF/enfant -16 ans, paiement par QR code Twint",
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
        lat: 46.1756,
        lng: 7.5678,
        rvParking: {
            available: true,
            capacity: 26,
            winterAccess: true,
            price: 30,
            amenities: ["electricity", "water", "waste"],
            address: "Les Bouesses, Route de Moiry 27, 3961 Grimentz",
            contact: "+41 27 476 17 00",
            notes: "Hiver: 30 CHF/jour taxe incluse, carte Anniviers Liberté offerte, 26 bornes électriques",
            shortDesc: "Aire Les Bouesses, taxe de séjour incluse avec carte Anniviers Liberté"
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
        lat: 46.1089,
        lng: 7.9281,
        rvParking: {
            available: true,
            capacity: 45,
            winterAccess: true,
            price: 37,
            amenities: ["electricity", "water", "waste", "toilets", "wifi", "shower"],
            address: "Parkhaus Alpin Express P4, 3906 Saas-Fee",
            contact: "+41 27 958 18 58",
            notes: "30 CHF parking + 7 CHF taxe/personne pour SaastalCard (obligatoire), village sans voiture",
            shortDesc: "Parkhaus Alpin Express moderne, SaastalCard obligatoire, village piéton"
        },
        skiResort: {
            altitude: "1800-3600m",
            pistes: "100km",
            magicPass: true
        }
    },
    {
        id: 16,
        name: "Blatten-Belalp",
        region: "Valais - Naters",
        lat: 46.3723,
        lng: 7.9823,
        rvParking: {
            available: true,
            capacity: 10,
            winterAccess: true,
            price: 20,
            amenities: ["electricity", "water"],
            address: "Park'n'Sleep Rischinu, Rischinerwald, 3914 Blatten b. Naters",
            contact: "+41 27 921 60 40",
            notes: "Nouvelle station Magic Pass 2025-26, navette gratuite vers télécabine en hiver",
            shortDesc: "Park'n'Sleep en forêt, navette gratuite vers télécabine"
        },
        skiResort: {
            altitude: "1322-3118m",
            pistes: "60km",
            magicPass: true
        }
    },
    {
        id: 17,
        name: "Unterbäch",
        region: "Valais - Raron",
        lat: 46.3012,
        lng: 7.8156,
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
