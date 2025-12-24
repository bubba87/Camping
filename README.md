# 🏔️ Carte Interactive - Stations MagicPass avec Parking Camping-Car

Carte interactive recensant toutes les stations de ski MagicPass proposant des emplacements pour camping-car en hiver, avec informations complètes sur les tarifs et les commodités.

## 📋 Caractéristiques

### Stations Incluses
- **15 stations de ski** partenaires MagicPass
- Régions: Fribourg, Vaud, Valais
- Toutes avec accès hivernal garanti

### Informations Disponibles

Pour chaque station, vous trouverez:

#### 🏔️ Domaine Skiable
- Altitude du domaine
- Nombre de pistes
- Confirmation MagicPass

#### 🚐 Parking Camping-Car
- Capacité d'accueil
- Prix par nuit (CHF)
- Accès hivernal
- Adresse exacte
- Contact direct

#### 🛠️ Commodités
- ⚡ Électricité
- 💧 Eau potable
- 🚿 Vidange eaux usées
- 🚻 Toilettes
- 📶 WiFi
- 🚿 Douches

## 🎯 Fonctionnalités de la Carte

### Recherche et Filtres
- **Recherche par nom** de station ou région
- **Filtre par prix** (jusqu'à 20, 30 ou 40 CHF/nuit)
- **Filtre par commodités** (électricité, eau, vidange, WiFi)

### Interface Interactive
- **Marqueurs colorés** selon la capacité:
  - 🟢 Vert: Plus de 15 places disponibles
  - 🟡 Jaune: Places limitées (moins de 15)
- **Popups détaillés** avec toutes les informations
- **Liste latérale** avec les stations filtrées
- **Clic sur une station** pour centrer la carte

## 🚀 Utilisation

### Ouverture Locale
1. Téléchargez tous les fichiers du projet
2. Ouvrez `index.html` dans votre navigateur web
3. La carte se charge automatiquement avec toutes les stations

### Navigation
- Utilisez la **molette** pour zoomer/dézoomer
- **Cliquez et faites glisser** pour déplacer la carte
- **Cliquez sur un marqueur** pour voir les détails
- **Cliquez sur une station** dans la liste pour la localiser

## 📊 Données des Stations

### Stations Recensées

1. **La Berra** (Fribourg) - 25 CHF/nuit
2. **Moléson** (Gruyère) - 30 CHF/nuit
3. **Les Paccots** (Vaud) - 20 CHF/nuit
4. **Charmey** (Fribourg) - 22 CHF/nuit
5. **Schwarzsee** (Fribourg) - 28 CHF/nuit
6. **Les Pléiades** (Vaud) - 18 CHF/nuit
7. **Jaun-Dorf** (Fribourg) - 24 CHF/nuit
8. **Rathvel** (Fribourg) - 15 CHF/nuit
9. **Villars-Gryon** (Vaud) - 35 CHF/nuit
10. **Leysin** (Vaud) - 32 CHF/nuit
11. **Les Mosses** (Vaud) - 26 CHF/nuit
12. **La Lécherette** (Vaud) - 22 CHF/nuit
13. **Château-d'Oex** (Vaud) - 28 CHF/nuit
14. **Rougemont** (Vaud) - 25 CHF/nuit
15. **Ovronnaz** (Valais) - 30 CHF/nuit

### Tarifs Moyens
- **Prix moyen**: 25 CHF/nuit
- **Prix minimum**: 15 CHF/nuit (Rathvel)
- **Prix maximum**: 35 CHF/nuit (Villars-Gryon)

## 🛠️ Technologies Utilisées

- **HTML5** - Structure de la page
- **CSS3** - Mise en page et design responsive
- **JavaScript** - Interactivité et filtres
- **Leaflet.js** - Bibliothèque de cartographie open-source
- **OpenStreetMap** - Données cartographiques

## 📱 Responsive Design

L'application s'adapte automatiquement à tous les écrans:
- 💻 Desktop: Vue complète avec sidebar
- 📱 Mobile: Vue empilée optimisée

## 📝 Structure des Fichiers

```
Camping/
├── index.html          # Page principale
├── stations-data.js    # Données des stations
├── map.js             # Logique de la carte
└── README.md          # Documentation
```

## 🔄 Mise à Jour des Données

Pour ajouter une nouvelle station, modifiez `stations-data.js`:

```javascript
{
    id: 16,
    name: "Nom de la Station",
    region: "Région",
    lat: 46.xxxx,
    lng: 7.xxxx,
    rvParking: {
        available: true,
        capacity: 20,
        winterAccess: true,
        price: 25,
        amenities: ["electricity", "water", "toilets"],
        address: "Adresse complète",
        contact: "+41 XX XXX XX XX",
        notes: "Informations supplémentaires"
    },
    skiResort: {
        altitude: "1000-2000m",
        pistes: "10",
        magicPass: true
    }
}
```

## ℹ️ Informations Importantes

### À Savoir
- Les tarifs indiqués sont donnés à titre indicatif
- Il est recommandé de **contacter la station** avant de vous déplacer
- Les places peuvent être **limitées en haute saison**
- Certains parkings nécessitent une **réservation**

### Conseils
- Arrivez tôt pour garantir une place
- Vérifiez les conditions météo et d'accès routier
- Respectez les règles du parking
- Vidangez uniquement aux emplacements prévus

## 📞 Contact

Pour toute question ou suggestion d'amélioration, n'hésitez pas à contribuer au projet.

## 📄 Licence

Ce projet est destiné à un usage personnel et informatif.

---

**Bon ski et bon voyage en camping-car! 🚐⛷️**
