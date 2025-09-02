# Epic Heroes Summit - Event Website

A modern, responsive React + Tailwind CSS event website featuring anime/superhero themes with stunning visual design.

## 🚀 Features

- **Modern Design**: Vibrant gradients, smooth animations, and premium styling
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Interactive Components**: 
  - Collapsible mobile navigation
  - Countdown timer
  - Expandable schedule items
  - Multi-step registration form
- **Smooth Animations**: Hover effects, fade-ins, and scale transitions
- **Professional Sections**:
  - Hero section with background images
  - Speaker cards with social links
  - Interactive schedule with day tabs
  - Registration form with ticket selection
  - Venue information with map
  - Footer with newsletter signup

## 🎨 Design Features

- **Color Palette**: Primary blues, secondary purples, accent greens
- **Typography**: Inter + Poppins font pairing
- **Effects**: Glass morphism, gradient backgrounds, soft shadows
- **Animations**: Custom keyframes for floating, fading, and scaling
- **Background Images**: Integrated anime/superhero imagery

## 🛠️ Tech Stack

- React 18
- Tailwind CSS 3
- Custom CSS animations
- Responsive grid layouts
- Modern ES6+ JavaScript

## 📱 Responsive Design

- **Mobile**: Hamburger menu, stacked layouts, touch-friendly buttons
- **Tablet**: Optimized grid layouts and spacing
- **Desktop**: Full-width layouts with hover effects

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Responsive navigation
│   ├── Hero.js            # Hero section with countdown
│   ├── About.js           # About event section
│   ├── Speakers.js        # Speaker cards grid
│   ├── Schedule.js        # Interactive schedule
│   ├── Registration.js    # Registration form
│   ├── Venue.js          # Venue & location info
│   └── Footer.js         # Footer with links
├── App.js                # Main app component
├── index.js             # React entry point
└── index.css            # Global styles & utilities
```

## 🎯 Key Components

### Hero Section
- Background image integration
- Animated countdown timer
- Gradient text effects
- Call-to-action buttons

### Navigation
- Sticky header with scroll effects
- Mobile hamburger menu
- Smooth scroll navigation

### Schedule
- Day-based tab navigation
- Collapsible session details
- Session type indicators
- Mobile-optimized layout

### Registration
- Multi-step form validation
- Ticket type selection
- Success state handling
- Form field animations

## 🎨 Customization

The design system is built with CSS custom properties and Tailwind utilities:

- **Colors**: Modify `tailwind.config.js` for brand colors
- **Fonts**: Update font imports in `index.css`
- **Animations**: Custom keyframes in `tailwind.config.js`
- **Components**: Reusable classes in `index.css`

## 📸 Background Images

Place your event images in the `public` folder and reference them in components:
- `demon-slayer-3840x5270-10716.jpg`
- `one-piece-luffy-gear-5-3840x4163-10747.jpg`
- `spiderman.jpeg`

## 🌟 Performance

- Optimized images and lazy loading
- Minimal bundle size with tree shaking
- Efficient CSS with Tailwind purging
- Smooth 60fps animations

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness
5. Submit a pull request

## 📄 License

MIT License - feel free to use for your own events!

---

Built with ❤️ for epic events and legendary heroes!