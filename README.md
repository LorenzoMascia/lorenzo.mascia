# Lorenzo Mascia - Sito Web Personale

Sito web personale di Lorenzo Mascia - Full-stack developer. Un design minimale e moderno con animazioni fluide e tema chiaro.

## ✨ Caratteristiche

- 🎨 Design minimale e moderno
- ⚡ Animazioni fluide e interattive
- 📱 Completamente responsive
- 🎯 Effetto sottolineatura animata
- 📊 Timeline della carriera con linee animate
- 🚀 Sezione progetti con hover effects
- 🌙 Tema dark elegante
- 🎄 **Speciale Natale 2024**: Albero di Natale 3D animato in canvas come background + Effetto neve interattivo cliccando sulla foto profilo!
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
    --color-background: oklch(0.15 0.02 250);  /* Colore sfondo (dark) */
    --color-text: oklch(0.95 0.02 250);        /* Colore testo (chiaro) */
    --color-accent: oklch(0.59 0.17 154);      /* Colore accento (verde) */
    --color-secondary: oklch(0.7 0.1 200);     /* Colore secondario */
}
```

> **Nota**: Per il periodo natalizio 2024, il sito usa un tema dark. Per tornare al tema chiaro dopo le feste, modifica i valori di `--color-background` e `--color-text`.

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
├── index.html      # Struttura HTML principale + canvas background
├── style.css       # Stili e animazioni (tema dark natalizio) + canvas styling
├── script.js       # Canvas 3D tree + interazioni + effetto neve su click foto
├── LORE.png        # Foto profilo (clickabile per neve)
├── examples/       # Esempi di riferimento per animazioni
│   ├── tree_example
│   └── snow_example
└── README.md       # Questo file
```

## 🎯 Funzionalità interattive

- **Sottolineatura animata**: Passa il mouse sulle parole sottolineate per vedere l'effetto wobble
- **Timeline**: Clicca sui punti della timeline per effetti di ripple
- **Project cards**: Hover per vedere le animazioni
- **🎄 Albero di Natale 3D**: Background animato con particelle canvas che creano un albero 3D rotante con neve
- **❄️ Neve Interattiva**: Clicca sulla foto profilo per far nevicare! (dura 30 secondi)
- **Konami code**: Prova a digitare: ↑ ↑ ↓ ↓ ← → ← → B A

## 🛠️ Tecnologie utilizzate

- HTML5
- CSS3 (con variabili CSS e animazioni moderne)
- JavaScript vanilla (ES6+)
- **GSAP 3.12** per animazioni avanzate dell'albero 3D canvas
- **Canvas 2D** per l'albero di Natale 3D rotante con particelle e neve
- SVG per grafiche vettoriali
- Intersection Observer API
- Web Animations API per l'effetto neve interattivo

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

## 🎄 Versione Natalizia 2024

Questa versione include decorazioni natalizie speciali:
- **Albero 3D Canvas**: Background animato con ~1000 particelle che creano un albero di Natale rotante in 3D con neve che cade continuamente
- **Effetto neve interattivo**: Click sulla foto profilo per far nevicare sul sito intero (dura 30 secondi)
- **Tema dark**: Sfondo nero puro per massimo contrasto con l'albero luminoso
- **Animazione intro**: L'albero "cresce" dal basso all'apertura della pagina
- **Rotazione continua**: L'albero ruota lentamente su se stesso creando un effetto 3D ipnotico
- **Neve permanente**: Fiocchi di neve che cadono costantemente sul background canvas

Per rimuovere le decorazioni natalizie dopo le feste, cerca il commit: `feat: 🎄 christmas-2024-special-edition` e reverta le modifiche relative all'albero canvas e alla neve.

---

**Lorenzo Mascia** - Full-stack Developer

🎄 Buon Natale 2024! ❄️
