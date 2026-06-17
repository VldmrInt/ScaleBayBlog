import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: 'ScaleBay Docs',
      defaultLocale: 'ru',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      sidebar: [
        {
          label: 'Разделы',
          items: [
            { label: 'Правила и FAQ', slug: 'rules-faq' },
            {
              label: 'Блог',
              items: [
                { label: 'Все публикации', slug: 'blog' },
                { label: 'Scalebay готовится к большому обновлению', slug: 'blog/scalebay-big-update' },
                { label: 'Немного новостей про новый ScaleBay', slug: 'blog/scalebay-news' },
              ],
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
