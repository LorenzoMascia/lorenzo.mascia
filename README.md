# Sito Web Personale

Un sito web personale minimale e moderno con animazioni fluide e design pulito.

## ✨ Caratteristiche

- 🎨 Design minimale e moderno
- ⚡ Animazioni fluide e interattive
- 📱 Completamente responsive
- 🎯 Effetto sottolineatura animata
- 📊 Timeline della carriera con linee animate
- 🚀 Sezione progetti con hover effects
- 🌙 Dark theme di default
- 💫 Easter egg nascosto (prova il Konami code!)

## 🚀 Deploy su GitHub Pages

### Metodo 1: Repository dedicato (username.github.io)

1. Crea un nuovo repository su GitHub chiamato esattamente `tuousername.github.io` (sostituisci "tuousername" con il tuo username GitHub)

2. Inizializza il repository locale:
   ```bash
   cd personal-website
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   ```

3. Collega e carica il repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/tuousername/tuousername.github.io.git
   git push -u origin main
   ```

4. Il tuo sito sarà disponibile automaticamente a: `https://tuousername.github.io`

### Metodo 2: Branch gh-pages in un repository esistente

1. Crea un nuovo repository su GitHub (es. `personal-site`)

2. Inizializza e carica:
   ```bash
   cd personal-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tuousername/personal-site.git
   git push -u origin main
   ```

3. Vai su GitHub > Settings > Pages
4. Sotto "Source" seleziona "main" branch e "/" (root) folder
5. Clicca "Save"

6. Il tuo sito sarà disponibile a: `https://tuousername.github.io/personal-site`

## 🎨 Personalizzazione

### Informazioni personali

Modifica `index.html`:

- **Nome**: Cerca `<h1 class="hero-title">Il Tuo Nome</h1>` e sostituisci con il tuo nome
- **Descrizione**: Modifica il testo nella sezione `.hero-description`
- **Timeline**: Aggiorna gli anni e le fasi nella sezione `.timeline-labels`
- **Progetti**: Modifica i link, nomi e tecnologie nella sezione `.projects-grid`
- **Social Links**: Aggiorna i link GitHub, LinkedIn ed email nel footer

### Colori

Modifica le variabili CSS in `style.css`:

```css
:root {
    --color-background: oklch(0.15 0.02 250);  /* Colore sfondo */
    --color-text: oklch(0.95 0.02 250);        /* Colore testo */
    --color-accent: oklch(0.59 0.17 154);      /* Colore accento (verde) */
    --color-secondary: oklch(0.7 0.1 200);     /* Colore secondario */
}
```

### Aggiungere la tua foto

Sostituisci il `<svg>` nella sezione `.profile-image` con:

```html
<img src="tua-foto.jpg" alt="Il Tuo Nome">
```

E aggiungi questo CSS:

```css
.profile-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

## 📁 Struttura dei file

```
personal-website/
├── index.html      # Struttura HTML principale
├── style.css       # Stili e animazioni
├── script.js       # Interazioni JavaScript
└── README.md       # Questo file
```

## 🎯 Funzionalità interattive

- **Sottolineatura animata**: Passa il mouse sulle parole sottolineate per vedere l'effetto wobble
- **Timeline**: Clicca sui punti della timeline per effetti di ripple
- **Project cards**: Hover per vedere le animazioni
- **Konami code**: Prova a digitare: ↑ ↑ ↓ ↓ ← → ← → B A

## 🛠️ Tecnologie utilizzate

- HTML5
- CSS3 (con variabili CSS e animazioni moderne)
- JavaScript vanilla (ES6+)
- SVG per grafiche vettoriali
- Intersection Observer API
- No framework o librerie esterne richieste!

## 📱 Browser supportati

- Chrome/Edge (ultimi 2 versioni)
- Firefox (ultimi 2 versioni)
- Safari (ultimi 2 versioni)
- Mobile browsers

## 💡 Suggerimenti

1. **Performance**: Il sito è già ottimizzato, ma considera di aggiungere `loading="lazy"` alle immagini se ne aggiungi molte

2. **SEO**: Aggiungi meta tags per social media (Open Graph, Twitter Cards)

3. **Analytics**: Considera di aggiungere Google Analytics o Plausible per tracciare i visitatori

4. **Custom Domain**: Puoi collegare un dominio personalizzato nelle impostazioni di GitHub Pages

## 📝 Licenza

Sentiti libero di usare questo template per il tuo sito personale!

## 🤝 Contribuire

Se trovi bug o hai suggerimenti, sentiti libero di aprire un issue o una pull request.

---

Made with ❤️ and lots of ☕
