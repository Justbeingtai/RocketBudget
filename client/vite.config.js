import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      'process.env.VITE_GRAPHQL_URI': mode === 'production'
        ? '"https://rocketbudget.onrender.com/graphql"'
        : '"http://localhost:4000/graphql"'
    }
  };
});
