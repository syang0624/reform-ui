import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    colors: 'src/colors.ts',
    tailwind: 'src/tailwind.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'tailwindcss',
    'framer-motion',
    'next-themes',
    'sonner',
    '@radix-ui/react-icons',
  ],
  treeshake: true,
  minify: false,
  // Copy CSS file to dist
  async onSuccess() {
    const fs = await import('fs/promises');
    const path = await import('path');

    try {
      await fs.copyFile(
        path.join('src', 'styles.css'),
        path.join('dist', 'styles.css')
      );
      console.log('✓ Copied styles.css to dist');
    } catch (error) {
      console.error('Failed to copy styles.css:', error);
    }
  },
});
