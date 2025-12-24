# 🏔️ Carte Interactive - Stations MagicPass avec Parking Camping-Car

Carte interactive recensant toutes les stations de ski MagicPass proposant des emplacements pour camping-car en hiver, avec informations complètes sur les tarifs et les commodités.

## 📋 Caractéristiques

### Stations Incluses
- **36 stations de ski** partenaires MagicPass
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

#### Fribourg (7 stations)
1. **La Berra** - 25 CHF/nuit - 25 places
2. **Moléson** - 30 CHF/nuit - 15 places
3. **Charmey** - 22 CHF/nuit - 12 places
4. **Schwarzsee** - 28 CHF/nuit - 18 places
5. **Jaun-Dorf** - 24 CHF/nuit - 15 places
6. **Rathvel** - 15 CHF/nuit - 8 places

#### Vaud (8 stations)
7. **Les Paccots** - 20 CHF/nuit - 20 places
8. **Les Pléiades** - 18 CHF/nuit - 10 places
9. **Villars-Gryon** - 35 CHF/nuit - 30 places
10. **Leysin** - 32 CHF/nuit - 22 places
11. **Les Mosses** - 26 CHF/nuit - 20 places
12. **La Lécherette** - 22 CHF/nuit - 12 places
13. **Château-d'Oex** - 28 CHF/nuit - 16 places
14. **Rougemont** - 25 CHF/nuit - 10 places

#### Valais (21 stations)
15. **Ovronnaz** - 30 CHF/nuit - 18 places
16. **Anzère** - 32 CHF/nuit - 25 places
17. **Nendaz** (4 Vallées) - 38 CHF/nuit - 35 places
18. **Veysonnaz** (4 Vallées) - 35 CHF/nuit - 28 places
19. **Thyon** (4 Vallées) - 36 CHF/nuit - 30 places
20. **La Tzoumaz** (4 Vallées) - 30 CHF/nuit - 20 places
21. **Champéry** (Portes du Soleil) - 40 CHF/nuit - 40 places
22. **Morgins** (Portes du Soleil) - 36 CHF/nuit - 32 places
23. **Torgon** (Portes du Soleil) - 32 CHF/nuit - 24 places
24. **Champoussin** (Portes du Soleil) - 28 CHF/nuit - 18 places
25. **Les Crosets** (Portes du Soleil) - 34 CHF/nuit - 22 places
26. **Grimentz** (Val d'Anniviers) - 33 CHF/nuit - 26 places
27. **Saint-Luc** (Val d'Anniviers) - 30 CHF/nuit - 20 places
28. **Chandolin** (Val d'Anniviers) - 28 CHF/nuit - 15 places
29. **Vercorin** - 29 CHF/nuit - 22 places
30. **Grächen** - 34 CHF/nuit - 30 places
31. **Saas-Grund** - 32 CHF/nuit - 28 places
32. **Bellwald** (Goms) - 26 CHF/nuit - 20 places
33. **Blatten-Belalp** (Aletsch) - 30 CHF/nuit - 24 places
34. **Unterbäch** - 27 CHF/nuit - 16 places
35. **Bruson** (4 Vallées) - 28 CHF/nuit - 18 places
36. **Evolène** (Val d'Hérens) - 25 CHF/nuit - 14 places

### Tarifs Moyens
- **Prix moyen**: 29 CHF/nuit
- **Prix minimum**: 15 CHF/nuit (Rathvel)
- **Prix maximum**: 40 CHF/nuit (Champéry)
- **Capacité totale**: ~780 places de camping-car

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
