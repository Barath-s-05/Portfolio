# Barath - Personal Portfolio

A modern dark-themed personal portfolio website showcasing my skills, projects, and experience as a Creative Developer & Student Tech Enthusiast.

## Features

- 🎨 Modern dark-themed UI with glassmorphism effects
- 🌟 Electric blue, soft violet, and cyan accent colors
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🔲 Section-based navigation with snap scrolling
- 🎯 Custom animated cursor
- 🌗 Dark/light mode toggle
- 📈 Interactive skill progress indicators
- 🏗 Project filtering system
- 📝 Contact form with validation
- 📊 Scroll progress indicator
- 🔄 "Back to top" button

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Custom SVG icons
- **Theming**: next-themes

## Sections

- **Hero**: Full-screen split layout with animated 3D blob
- **About**: Skills showcase with progress rings
- **Projects**: Interactive grid with filtering
- **Experience**: Timeline-style career journey
- **Contact**: Form with social links

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

To customize this portfolio for your own use:

1. Update personal information in the components:
   - Name, role, contact details in `page.tsx`
   - Skills in `components/About.tsx`
   - Projects in `components/Projects.tsx`
   - Experience in `components/Experience.tsx`

2. Modify the color scheme in `app/globals.css`

3. Adjust animations and transitions in individual components

## Deployment

This project is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

Alternatively, you can build and deploy manually:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the MIT License.