// ✅ Import des modules nécessaires
const express = require('express');
const path = require('path');

// ✅ Création de l’application Express
const app = express();
const PORT = 3000;

// ✅ Dossier contenant les fichiers du site
// (Ici, tous tes fichiers HTML et images sont dans le même dossier que server.js)
app.use(express.static(__dirname));

// ✅ Route par défaut (page d'accueil)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ✅ Lancement du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
