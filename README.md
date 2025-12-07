# 🚀 Portfolio - Davy Lassechere

> Portfolio personnel moderne et interactif d'un Ingénieur DevOps, Coach et Innovateur IA

[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)

## ✨ Caractéristiques

- 🎨 **Design moderne** avec effets néon et style LEGO
- 🌐 **Multilingue** - Interface en français
- 📱 **Responsive** - Adapté à tous les écrans
- ⚡ **Performance** - Build optimisé avec Vite
- 🐳 **Docker** - Déploiement simplifié
- 🎭 **Animations** - Effets visuels fluides et attractifs

## 🛠️ Technologies

| Catégorie | Stack |
|-----------|-------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, PostCSS |
| **Conteneurisation** | Docker, Docker Compose |
| **Serveur** | Nginx (Alpine) |
| **Outils** | ESLint, Git |

## 🚀 Démarrage rapide

### Prérequis

- Docker & Docker Compose
- Git

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/DavyLss/portfolio.git
cd portfolio

# Lancer avec Docker Compose
docker compose up -d --build
```

L'application sera accessible sur **http://localhost:3000**

## 📦 Scripts disponibles

```bash
# Mode développement
cd build
npm run dev

# Build de production
npm run build

# Linting
npm run lint

# Vérification TypeScript
npm run typecheck
```

## 🐳 Docker

### Build manuel

```bash
cd build
docker build -t portfolio:latest .
docker run -p 3000:80 portfolio:latest
```

### Docker Compose

```bash
# Démarrer
docker compose up -d

# Arrêter
docker compose down

# Rebuild
docker compose up -d --build

# Logs
docker compose logs -f
```

## 📁 Structure du projet

```
portfolio/
├── build/                  # Code source de l'application
│   ├── src/
│   │   ├── components/    # Composants React
│   │   ├── App.tsx        # Composant principal
│   │   └── main.tsx       # Point d'entrée
│   ├── public/            # Assets statiques
│   ├── Dockerfile         # Configuration Docker
│   └── nginx.conf         # Configuration Nginx
├── docker-compose.yml     # Configuration Docker Compose
├── LICENSE                # Licence propriétaire
└── README.md              # Ce fichier
```

## 🌟 Sections du portfolio

- **Hero** - Présentation avec avatar et badges
- **Bio** - Qui suis-je ? Mission, Expertise, Passion
- **Compétences** - Stack technique complète
- **Expérience** - Parcours professionnel détaillé
- **Projets** - Réalisations notables
- **IA & Automatisation** - Expertise en intelligence artificielle
- **Contact** - Coordonnées et liens sociaux

## 📝 Configuration

### Variables d'environnement

Le projet utilise des variables d'environnement pour la configuration (fichier `.env`).

### Personnalisation

Les couleurs, styles et contenus sont facilement personnalisables via les composants React dans `build/src/components/`.

## 🔒 Licence

Copyright © 2025 Davy Lassechere. Tous droits réservés.

Ce projet est sous licence propriétaire. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

**Utilisation non autorisée interdite** - Le code, le design, les textes et toutes les informations contenues dans ce portfolio ne peuvent être utilisés, copiés, modifiés ou distribués sans autorisation écrite préalable.

## 📧 Contact

- **Email** : davy@lassechere.fr
- **Blog** : [blog.lassechere.fr](https://blog.lassechere.fr)
- **Communauté** : [wearedevops.fr](https://wearedevops.fr)
- **LinkedIn** : [Davy Lassechere](https://www.linkedin.com/in/davy-l-4199b0159/)

---

<div align="center">

**Construit avec passion** 💙 **en React, TypeScript et Tailwind CSS**

</div>
