# Supreme Group Website Frontend

A modern, performant, and accessible frontend implementation of the Supreme Group website using Next.js 14 with App Router and Tailwind CSS.

## 🌐 Live Demo

[View Live Demo](https://supreme-group.vercel.app/)

## 🛠 Tech Stack

- **Frontend Framework**: Next.js 14 - Chosen for its built-in performance optimizations, server-side rendering capabilities, and excellent developer experience
- **Language**: TypeScript - For type safety and better developer experience
- **Styling**: Tailwind CSS - For rapid development, consistent design system, and optimal performance through its JIT compiler
- **State Management**: React Hooks (useState, useRef, useEffect) - For efficient local state management
- **Animation**: CSS Transitions & Transform - For smooth, performant animations
- **Media Handling**: Next.js Image and Video components for optimized media delivery
- **Deployment**: Vercel - For seamless deployment and optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/actuallyroy/BlacksOf-Assignment.git
cd BlacksOf-Assignment
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗 Component Architecture

The project follows Next.js 14 App Router architecture with a focus on interactive components:

```
src/
├── app/              # Next.js 14 App Router directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page with main interactive features
│   ├── globals.css   # Global styles
│   └── favicon.ico   # Site favicon
├── components/       # Reusable UI components
│   ├── Header.tsx    # Site navigation with scroll behavior
│   ├── Hero.tsx      # Hero section with video background
│   ├── Footer.tsx    # Site footer
│   └── ContactForm.tsx # Contact form component
```

### Key Features

- **Interactive 3D Models**: Dynamic vehicle showcase with multiple view angles
- **Video Integration**: Optimized video playback with custom controls
- **Scroll-Based Animations**: Smooth transitions triggered by scroll position
- **Responsive Controls**: Custom video player with progress indicator
- **State Management**: Efficient state handling for vehicle types and video playback

## 📱 Responsive Design Strategy

The website implements a mobile-first responsive design approach using Tailwind CSS breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Laptop**: 1024px - 1280px
- **Desktop**: > 1280px

Key responsive features:
- Fluid typography using Tailwind's responsive text classes
- Adaptive layouts for vehicle showcase
- Responsive video players and controls
- Touch-friendly interface for mobile devices
- Optimized media loading for different screen sizes

## ⚡ Performance Optimizations

1. **Video Optimization**
   - Lazy loading of video content
   - Multiple video formats for different sections
   - Custom video player with optimized controls
   - Progress tracking for better user experience

2. **Scroll Performance**
   - Efficient scroll-based animations
   - Debounced scroll event handlers
   - Hardware-accelerated transforms
   - Smooth transitions between states

3. **Asset Management**
   - Optimized video delivery
   - Responsive image loading
   - SVG icons for crisp rendering
   - Efficient state transitions

## ♿ Accessibility

The website follows WCAG 2.1 guidelines:

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Video player accessibility
- Focus management for interactive elements
- Screen reader friendly content
- Clear visual hierarchy

## 🎨 Design Implementation

Pixel-perfect implementation achieved through:
- Custom video player controls
- Smooth state transitions
- Interactive vehicle type switching
- Progress indicators for video playback
- Responsive layout adaptations

## 🧪 Testing

Current testing implementation includes:
- Manual cross-browser testing
- Responsive design testing
- Video playback testing
- State management testing
- Scroll behavior testing

## 🔄 Future Improvements

1. **Performance**
   - Implement video preloading
   - Add WebP format support
   - Optimize scroll animations
   - Implement virtual scrolling

2. **Features**
   - Add more vehicle categories
   - Enhance video controls
   - Implement 360° view
   - Add more interactive elements

3. **Testing**
   - Add unit tests for state management
   - Implement E2E tests
   - Add video playback tests
   - Performance benchmark tests

## 📝 Additional Notes

### Challenges Faced
1. Implementing smooth scroll-based animations
2. Managing multiple video states
3. Optimizing performance for mobile devices
4. Coordinating state transitions

### Solutions Implemented
1. Custom scroll progress tracking
2. Efficient video state management
3. Optimized mobile performance
4. Smooth transition system

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

This means you are free to:
- Use this software for any purpose
- Change the software to suit your needs
- Share the software with your friends and neighbors
- Share the changes you make

Under the following conditions:
- If you distribute this code, you must include the source code
- Any modifications must also be under the GNU GPL
- You must state significant changes made to the software
- Include the original license and copyright notices
