# 🎄 Christmas Tree Canvas Animation

Beautiful 3D rotating Christmas tree animation using HTML5 Canvas and GSAP.

## ✨ Features

- **3D Rotation Effect**: ~1000 particles creating a spinning Christmas tree
- **Snow Animation**: Falling snow particles with rotation
- **Smooth Animations**: GSAP-powered animations at 60fps
- **Responsive**: Adapts to any screen size
- **Standalone**: Ready to be exported to any project

## 🚀 Usage

Simply copy the entire `christmas-tree-canvas` folder to your project:

```
christmas-tree-canvas/
├── index.html      # Main HTML file
├── style.css       # Styling and canvas positioning
├── script.js       # Canvas animation logic
└── README.md       # This file
```

### Quick Start

1. Open `index.html` in your browser
2. Enjoy the animated Christmas tree!

### Integration into Another Project

To add this to an existing website:

1. **Copy the HTML canvas elements:**
   ```html
   <div id="fixed-bg">
       <canvas id="c2"></canvas>
       <canvas id="c"></canvas>
   </div>
   ```

2. **Include the CSS:**
   ```html
   <link rel="stylesheet" href="christmas-tree-canvas/style.css">
   ```

3. **Add GSAP and the script:**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
   <script src="christmas-tree-canvas/script.js"></script>
   ```

## 🎨 Customization

You can customize the animation by modifying these variables in `script.js`:

- **Particle count**: Change `999` to increase/decrease particles
- **Tree spin duration**: Modify `d = 99` for faster/slower rotation
- **Snow speed**: Adjust `.timeScale(arr2[i].s / 700)`
- **Colors**: Change `ctx.fillStyle` and `ctx2.fillStyle`

## 📦 Dependencies

- [GSAP 3.12.4](https://greensock.com/gsap/) - Animation library

## 🎅 Credits

Created for Lorenzo Mascia's personal website.
Christmas 2024 Special Edition 🎄

## 📄 License

Free to use for personal and commercial projects.
