// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: 'https://docs.sensecraft-hmi.com',
	integrations: [
		starlight({
			title: 'SenseCraft HMI for E-Paper',
			description: 'Official documentation for SenseCraft HMI - No-code UI builder for e-paper/e-ink displays. Design interfaces for reTerminal E series with drag-and-drop simplicity.',
			favicon: '/favicon.png',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Seeed-Solution/sensecraft-hmi-docs'
				}
			],
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
				zh: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
			},
			lastUpdated: true,
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						href: '/favicon.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'shortcut icon',
						type: 'image/png',
						href: '/favicon.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'e-paper, e-ink, HMI, reTerminal E, ESP32-S3, no-code, UI builder, electronic paper display, low power display, IoT dashboard',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: '/og-image.png',
					},
				},
				{
					tag: 'script',
					attrs: {
						type: 'application/ld+json',
					},
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'SoftwareApplication',
						'name': 'SenseCraft HMI',
						'applicationCategory': 'DeveloperApplication',
						'operatingSystem': 'Web',
						'description': 'No-code UI builder for e-paper and e-ink displays',
						'offers': {
							'@type': 'Offer',
							'price': '0',
							'priceCurrency': 'USD',
						},
						'creator': {
							'@type': 'Organization',
							'name': 'Seeed Studio',
							'url': 'https://www.seeedstudio.com',
						},
					}),
				},
			],
		}),
	],
	markdown: {
		shikiConfig: {
			theme: 'github-dark-dimmed',
			wrap: true,
		},
	},
	vite: {
		ssr: {
			noExternal: ['@astrojs/starlight'],
		},
	},
});
