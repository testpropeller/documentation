import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Test Propeller',
    tagline: 'Give each test its own prod-like environment in milliseconds.',
    favicon: 'img/favicon.ico',

    url: 'https://testpropeller.com',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Test Propeller',
            logo: {
                alt: 'Test Propeller logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left',
                },
                {
                    to: '/pricing',
                    label: 'Pricing',
                    position: 'left',
                },
                {
                    href: '/console/sign-in',
                    label: 'Sign in',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs',
                        },
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'Pricing',
                            to: '/pricing',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/...',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/testpropeller',
                        },
                    ],
                },
                {
                    title: 'Client Libraries',
                    items: [
                        {
                            label: 'Java',
                            to: '/docs/client-library/java',
                        },
                        {
                            label: 'Rust',
                            to: '/docs/client-library/rust',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Test Propeller`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

    scripts: [
        {
            src: '/plausible/script.js',
            defer: true,
            'data-api': '/plausible/event',
            'data-domain': 'testpropeller.com',
        },
    ],
};

export default config;
