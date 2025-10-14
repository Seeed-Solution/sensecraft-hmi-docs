// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://sensecraft-hmi-docs.seeed.cc',
	integrations: [
		starlight({
			title: 'SenseCraft HMI for E-Paper | ESP32 Display by Seeed Studio',
			description: 'Build e-paper/e-ink displays with ESP32-S3. No-code HMI platform by Seeed Studio for reTerminal E. Home Assistant compatible. Open-source TRMNL alternative.',
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
					items: [
						{
							label: 'SenseCraft HMI Overview',
							link: '/guides/sensecraft_hmi_overview/',
						},
						{
							label: 'AI Generation Function',
							link: '/guides/sensecraft_hmi_ai_generator/',
						},
						{
							label: 'Canvas Function',
							link: '/guides/sensecraft_hmi_canvas/',
						},
						{
							label: 'Gallery Function',
							link: '/guides/sensecraft_hmi_gallery/',
						},
						{
							label: 'RSS Function',
							link: '/guides/sensecraft_hmi_rss/',
						},
						{
							label: 'Web Function',
							link: '/guides/sensecraft_hmi_web/',
						},
					],
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
						content: 'Seeed Studio, e-paper, e-ink, ESP32, ESP32-S3, Home Assistant, TRMNL alternative, HMI, reTerminal E, no-code, UI builder, electronic paper display, IoT dashboard, Seeed e-paper, smart home display',
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
						'operatingSystem': 'ESP32-S3',
						'description': 'No-code UI builder for e-paper displays. Build interfaces for Seeed reTerminal E, compatible with Home Assistant. Open-source TRMNL alternative.',
						'keywords': 'ESP32, ESP32-S3, e-paper, e-ink, Home Assistant, TRMNL, Seeed Studio',
						'softwareRequirements': 'ESP32-S3 microcontroller, E-paper display',
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
						'featureList': [
							'Drag-and-drop UI designer',
							'ESP32-S3 optimized',
							'Home Assistant integration',
							'Low power consumption',
							'Open-source alternative to TRMNL',
							'7.5" and 7.3" e-paper support'
						],
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
