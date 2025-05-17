import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  // GitHub Pages 배포를 위한 설정
  site: 'https://securil.github.io',  // securil GitHub 사용자명
  base: '/FamilyFoods',  // 리포지토리 이름
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  server: {
    port: 3000
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'zh', 'vi', 'th', 'ja'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: []
});
