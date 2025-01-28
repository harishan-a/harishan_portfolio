# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my professional experience, projects, and technical skills. Features smooth animations, interactive UI elements, and a clean, minimalist design.

## Author

**Harishan Amutheesan**  
Software Engineering Student (Graduating May 2025)  
[LinkedIn](https://linkedin.com/in/harishan-a) | [GitHub](https://github.com/harishan-a)

## Features

- **Modern Design**: Clean, minimalist interface with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Interactive UI**: Dynamic elements with hover effects and smooth scroll animations
- **Dark Theme**: Eye-friendly dark theme with subtle gradients and glass-morphism effects
- **Performance Optimized**: Built with performance in mind using Next.js and Framer Motion
- **SEO Friendly**: Optimized meta tags and semantic HTML structure

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Version Control**: Git

## Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── sections/                 # Page section components
│   │   ├── Contact.tsx          # Contact section
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Projects.tsx        # Projects section
│   │   ├── Skills.tsx         # Skills section
│   │   └── WorkExperience.tsx # Work experience section
│   ├── CustomCursor.tsx        # Custom cursor component
│   ├── ExperienceCard.tsx      # Experience card component
│   ├── Layout.tsx             # Main layout wrapper
│   └── ProjectCard.tsx        # Project card component
├── data/                       # Content data
│   └── content.ts             # Projects, experience, and skills data
├── pages/                      # Next.js pages
│   ├── api/                   # API routes
│   │   └── hello.ts          # Example API route
│   ├── _app.tsx              # Custom App component
│   ├── _document.tsx         # Custom Document component
│   ├── index.tsx             # Home page
│   └── photography.tsx       # Photography portfolio page
├── styles/                    # Global styles
│   └── globals.css           # Global CSS and Tailwind imports
└── types/                     # TypeScript type definitions
    └── index.ts              # Shared interfaces and types
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/harishan-a/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Deployment

The site is automatically deployed to Vercel with each push to the main branch. You can view the live site at [your-domain.com](https://your-domain.com).

## Key Features

- **Dynamic Project Cards**: Interactive cards showcasing various projects with technology tags
- **Smooth Scroll Navigation**: Section-based navigation with smooth scrolling
- **Responsive Images**: Optimized image loading with Next.js Image component
- **Interactive UI Elements**: Hover effects and animations using Framer Motion
- **Type-Safe Code**: Fully typed with TypeScript for better development experience
- **SEO Optimization**: Meta tags and semantic HTML for better search engine visibility

## Development

- **Code Style**: The project follows a consistent code style using ESLint and Prettier
- **Type Safety**: Strict TypeScript configuration for better type safety
- **Component Structure**: Modular components with clear separation of concerns
- **State Management**: Efficient state management using React hooks
- **Performance**: Optimized for Core Web Vitals and performance metrics

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern portfolio trends
- Built with Next.js, the React framework by Vercel
- Animations powered by Framer Motion
- Styling enhanced by Tailwind CSS

## Contact

For any inquiries or feedback, please reach out:
- Email: harishan9@gmail.com
- LinkedIn: [harishan-a](https://linkedin.com/in/harishan-a)
- GitHub: [@harishan-a](https://github.com/harishan-a)
