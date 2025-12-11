# Lorenzo Mascia - Sito Web Personale

Sito web personale di Lorenzo Mascia - Full-stack developer. Un design minimale e moderno con animazioni fluide e tema chiaro.

## ✨ Caratteristiche

- 🎨 Design minimale e moderno
- ⚡ Animazioni fluide e interattive
- 📱 Completamente responsive
- 🎯 Effetto sottolineatura animata
- 📊 Timeline della carriera con linee animate
- 🚀 Sezione progetti con hover effects
- ☀️ Tema chiaro e pulito
- 💫 Easter egg nascosto (prova il Konami code!)

## 🚀 Deploy su GitHub Pages

### Metodo 1: Repository dedicato (username.github.io)

1. Crea un nuovo repository su GitHub chiamato esattamente `lorenzomascia.github.io`

2. Inizializza il repository locale:
   ```bash
   cd lorenzo.mascia
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   ```

3. Collega e carica il repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/lorenzomascia/lorenzomascia.github.io.git
   git push -u origin main
   ```

4. Il sito sarà disponibile automaticamente a: `https://lorenzomascia.github.io`

### Metodo 2: Branch gh-pages in un repository esistente

1. Crea un nuovo repository su GitHub (es. `lorenzo-mascia-portfolio`)

2. Inizializza e carica:
   ```bash
   cd lorenzo.mascia
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/lorenzomascia/lorenzo-mascia-portfolio.git
   git push -u origin main
   ```

3. Vai su GitHub > Settings > Pages
4. Sotto "Source" seleziona "main" branch e "/" (root) folder
5. Clicca "Save"

6. Il sito sarà disponibile a: `https://lorenzomascia.github.io/lorenzo-mascia-portfolio`

## 🎨 Personalizzazione

### Informazioni personali

Modifica `index.html`:

- **Nome**: Lorenzo Mascia (già configurato)
- **Descrizione**: Modifica il testo nella sezione `.hero-description` secondo le tue preferenze
- **Timeline**: Aggiorna gli anni e le fasi nella sezione `.timeline-labels` con il tuo percorso
- **Progetti**: Modifica i link, nomi e tecnologie nella sezione `.projects-grid` con i tuoi progetti reali
- **Social Links**: Aggiorna i link GitHub, LinkedIn ed email nel footer con i tuoi profili reali

### Colori

Modifica le variabili CSS in `style.css`:

```css
:root {
    --color-background: oklch(0.98 0.01 250);  /* Colore sfondo (bianco) */
    --color-text: oklch(0.2 0.02 250);         /* Colore testo (scuro) */
    --color-accent: oklch(0.59 0.17 154);      /* Colore accento (verde) */
    --color-secondary: oklch(0.5 0.05 250);    /* Colore secondario */
}
```

### Foto profilo

La foto profilo è già configurata con `LORE.png`. Per cambiarla:

1. Sostituisci il file `LORE.png` con la tua nuova foto
2. Oppure modifica l'attributo `src` in `index.html`:

```html
<img src="tua-nuova-foto.jpg" alt="Lorenzo Mascia">
```

## 📁 Struttura dei file

```
lorenzo.mascia/
├── index.html      # Struttura HTML principale
├── style.css       # Stili e animazioni
├── script.js       # Interazioni JavaScript
├── LORE.png        # Foto profilo
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

---

**Lorenzo Mascia** - Full-stack Developer

Made with ❤️ and lots of ☕
