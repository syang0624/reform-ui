# Reform Party UI

A comprehensive React component library built with Tailwind CSS for the Reform Party nomination platform. This library provides a complete set of accessible, customizable UI components following the Reform Party design system.

## Features

- 🎨 **Complete Design System** - All colors, styles, and components aligned with Reform Party branding
- ♿ **Accessible** - Built on Radix UI primitives for excellent accessibility
- 🎯 **Type-Safe** - Full TypeScript support
- 🌗 **Dark Mode** - Built-in dark mode support
- 📦 **Tree-Shakeable** - Only import what you need
- 🎨 **Customizable** - Easy to customize through CSS variables

## Installation

```bash
npm install @reform-party/ui
# or
yarn add @reform-party/ui
# or
pnpm add @reform-party/ui
```

## Quick Start

### 1. Import the styles

Add the Reform Party UI styles to your application:

```tsx
// In your root layout or _app file
import '@reform-party/ui/styles';
```

### 2. Configure Tailwind CSS

Use the Reform Party preset in your Tailwind configuration:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import reformPreset from '@reform-party/ui/tailwind';

const config: Config = {
  presets: [reformPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './node_modules/@reform-party/ui/dist/**/*.{js,mjs}',
  ],
};

export default config;
```

### 3. Use the components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@reform-party/ui';

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Reform Party</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Available Components

### Layout & Structure
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `Separator`
- `Sheet`
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`

### Form Components
- `Button`
- `Input`
- `Textarea`
- `Label`
- `Checkbox`
- `RadioGroup`, `RadioGroupItem`
- `Select`
- `Switch`
- `Slider`

### Feedback & Overlays
- `Alert`, `AlertDescription`, `AlertTitle`
- `AlertDialog`
- `Dialog`
- `Toast`, `Toaster`
- `Progress`
- `Spinner`
- `Skeleton`

### Navigation
- `DropdownMenu`
- `PageTransition`

### Display
- `Avatar`, `AvatarImage`, `AvatarFallback`
- `Badge`
- `Table`

## Color System

Reform Party UI uses a comprehensive color system based on the Reform Party brand:

### Primary Colors

The primary color is Reform Party Orange (`#FF7210`) with a full range of shades:

```tsx
import { reformColors, reformColorsHex } from '@reform-party/ui/colors';

// Use in your code
const primaryColor = reformColorsHex.primary.DEFAULT; // "#FF7210"

// Or use with Tailwind
<div className="bg-primary-500 text-white">
  Reform Party Orange
</div>
```

### Available Color Scales

- **Primary** - 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- **Secondary** - Subtle slate colors
- **Semantic** - background, foreground, muted, accent, destructive, border, etc.

### Dark Mode

All components support dark mode out of the box. Toggle dark mode by adding the `dark` class to your root element:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

## Customization

### CSS Variables

You can customize the design system by overriding CSS variables:

```css
:root {
  /* Override primary color */
  --color-primary: 255 114 16;
  --primary: 255 114 16;

  /* Override border radius */
  --radius: 0.5rem;

  /* Override other colors */
  --background: 255 255 255;
  --foreground: 15 23 42;
}
```

### Tailwind Configuration

Extend the preset with your own customizations:

```ts
import reformPreset from '@reform-party/ui/tailwind';

export default {
  presets: [reformPreset],
  theme: {
    extend: {
      // Your custom overrides
      colors: {
        custom: '#123456',
      },
    },
  },
};
```

## Utility Functions

The library includes helpful utility functions:

```tsx
import { cn, formatDate, delay, generateId } from '@reform-party/ui';

// Merge Tailwind classes
const className = cn('text-base', 'font-bold', 'text-primary');

// Format dates in Korean locale
const formatted = formatDate(new Date(), 'long');

// Generate unique IDs
const id = generateId('form');

// Async delay
await delay(1000);
```

## TypeScript

All components are fully typed. Import types as needed:

```tsx
import type { ButtonProps } from '@reform-party/ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Examples

### Form Example

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Checkbox,
} from '@reform-party/ui';

export default function LoginForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
}
```

### Dialog Example

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from '@reform-party/ui';

export default function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

## Building from Source

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run type checking
npm run type-check
```

## License

MIT

## Support

For issues and questions, please visit the [GitHub repository](https://github.com/reform-party/ui).
