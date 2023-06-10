import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
    content: ['./src/**/*.jsx', './src/**/*.css'],
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
