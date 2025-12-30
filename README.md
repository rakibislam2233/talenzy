# Talenzy Frontend

Talenzy is a modern social media platform designed for creative professionals to showcase their talents, connect with others, and grow their careers. Built with Next.js, TypeScript, and Tailwind CSS, it provides a seamless experience for sharing content across various creative categories.

## 🚀 Features

- **Social Feed**: Browse and interact with posts from creative professionals across multiple categories
- **Multi-media Posts**: Support for images, videos, and carousels in posts
- **Authentication System**: Login, registration, and user session management
- **Content Categories**: Organized content in categories like Music, Comedy, Design, Dance, Magic, Acting, and more
- **User Profiles**: Personal profiles to showcase your work and connect with others
- **Notifications**: Stay updated with platform notifications
- **Messaging**: Direct communication with other users
- **Discover People**: Find and connect with other creative professionals
- **Explore & Search**: Discover content based on categories and interests
- **Wallet & Payments**: Integrated wallet system for premium features
- **Settings**: Personalize your account and privacy settings
- **Hiring Requests**: Platform for connecting talent with opportunities
- **Gift System**: Send virtual gifts to other users
- **Stories**: Share temporary content that disappears after 24 hours

## 🛠 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Zod** - TypeScript-first schema validation
- **React Hook Form** - Performant forms with easy validation
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Production-ready motion library
- **TipTap** - Headless editor for rich text content
- **Radix UI** - Accessible UI primitives
- **Class Variance Authority** - Utility for handling component variants
- **React Easy Crop** - Image cropping functionality

## 📁 Project Structure

```
talenzy-frontend/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main application routes
│   │   ├── about/         # About page
│   │   ├── discover-people/ # Discover other users
│   │   ├── explore/       # Explore content
│   │   ├── gifts/         # Gift system
│   │   ├── help/          # Help and support
│   │   ├── hiring/        # Hiring requests
│   │   ├── messages/      # Direct messaging
│   │   ├── notifications/ # Platform notifications
│   │   ├── profile/       # User profiles
│   │   ├── saved/         # Saved content
│   │   ├── settings/      # Account settings
│   │   ├── verify/        # Verification pages
│   │   ├── wallet/        # Wallet system
│   │   ├── layout.tsx     # Main layout
│   │   └── page.tsx       # Home feed
│   ├── auth/              # Authentication routes
│   │   ├── forgot-password/ # Password recovery
│   │   ├── login/         # Login page
│   │   ├── register/      # Registration page
│   │   ├── reset-password/ # Password reset
│   │   ├── verify-otp/    # OTP verification
│   │   └── layout.tsx     # Auth layout
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── favicon.ico        # Favicon
├── components/            # React components
│   ├── create-post/       # Post creation components
│   ├── layout/            # Layout components
│   ├── modals/            # Modal dialogs
│   ├── pages/             # Page-specific components
│   ├── providers/         # Context providers
│   ├── ui/                # shadcn/ui components
│   ├── CreatePost.tsx     # Post creation component
│   ├── ExampleForm.tsx    # Form example
│   ├── FeedPost.tsx       # Feed post component
│   ├── HiringRequestModal.tsx # Hiring request modal
│   ├── Post.tsx           # Post component
│   ├── RightSidebar.tsx   # Right sidebar component
│   ├── SendGiftModal.tsx  # Gift sending modal
│   ├── ShareModal.tsx     # Share modal
│   └── Stories.tsx        # Stories component
├── context/               # React context providers
│   └── AuthContext.tsx    # Authentication context
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
│   ├── data.ts            # Mock data and categories
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Utility functions
├── public/                # Static assets
└── components.json        # shadcn/ui configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd talenzy-frontend
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
```

### Running in Production

```bash
npm start
```

## 🧩 Key Components

### Authentication System
The application uses a localStorage-based authentication system with React Context for state management. Users can log in, register, and maintain their session across page reloads.

### Content Categories
The platform supports multiple creative categories including:
- Music 🎵
- Comedy 🎭
- Design 🎨
- Dance 🩰
- Magic 🪄
- Acting 🎤
- Photography
- Fashion
- Tech
- Fitness
- Food
- Travel
- Books
- Pets

### Post System
The application supports rich media posts with:
- Single or multiple media items (images/videos)
- Captions and hashtags
- Like and comment functionality
- Category tagging
- Audio attribution

### UI Components
The application uses shadcn/ui components with custom styling:
- Buttons, cards, inputs, forms
- Modals and dialogs
- Interactive elements with animations
- Responsive design for all screen sizes

## 📝 Adding New Components

To add new shadcn/ui components to your project:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
```

## 🔧 Environment Variables

The application doesn't require any environment variables for basic operation, but you may need to add API endpoints for backend integration.

## 🧪 Testing

Run the development server to test the application:
```bash
npm run dev
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Zod Documentation](https://zod.dev)
- [React Hook Form Documentation](https://react-hook-form.com)
- [TipTap Documentation](https://tiptap.dev)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
