// @ts-nocheck
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://sensecraft-hmi-docs.seeed.cc',

	redirects: {
    '/': '/en/',
    '/en': '/en/overview/',
  	},
	integrations: [
		starlight({
			title: 'SenseCraft HMI',
			description: 'Official documentation for SenseCraft HMI - No-code UI builder for Seeed Studio displays.',
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
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
		lastUpdated: true,
		sidebar: [
			{
				label: 'Overview',
				link: '/overview/',
				translations: {
					'zh-CN': '概览',
					'ja': '概要',
					'es': 'Descripción general',
				},
			},
			{
				label: 'Supported Hardware',
				link: '/supported_hardware/',
				translations: {
					'zh-CN': '支持的硬件',
					'ja': 'サポートされているハードウェア',
					'es': 'Hardware compatible',
				},
			},
			{
				label: 'Guides',
				translations: {
					'zh-CN': '指南',
					'ja': 'ガイド',
					'es': 'Guías',
				},
				items: [
					{
						label: 'Getting Started',
						link: '/guides/getting_started/',
						translations: {
							'zh-CN': '快速入门',
							'ja': 'はじめに',
							'es': 'Primeros pasos',
						},
					},
					{
						label: 'Workspace',
						link: '/guides/workspace/',
						translations: {
							'zh-CN': '工作区',
							'ja': 'ワークスペース',
							'es': 'Espacio de trabajo',
						},
					},
					{
						label: 'AI Generation',
						link: '/guides/ai_gen/',
						translations: {
							'zh-CN': 'AI 生成',
							'ja': 'AI 生成',
							'es': 'Generación con IA',
						},
					},
				],
			},
			{
				label: 'Release Notes',
				link: '/release_note/',
				translations: {
					'zh-CN': '发布说明',
					'ja': 'リリースノート',
					'es': 'Notas de versión',
				},
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
