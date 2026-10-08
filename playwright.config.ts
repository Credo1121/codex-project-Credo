import { defineConfig } from '@playwright/test';
process.loadEnvFile('.env.qa.local');
export default defineConfig({testDir:'./tests',workers:1,retries:0,reporter:'list',use:{baseURL:'http://localhost:3000',locale:'de-DE',browserName:'chromium',launchOptions:{executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']},trace:'off',screenshot:'off'}});
