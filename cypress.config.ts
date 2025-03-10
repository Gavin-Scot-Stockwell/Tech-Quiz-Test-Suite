import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
            viteConfig: customViteConfig,
        },
        specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
        supportFile: false,
    },

    e2e: {
        baseUrl: 'http://localhost:3001',
        specPattern: "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}",
        supportFile: false,

    },
});