// @ts-nocheck
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://sensecraft-hmi-docs.seeed.cc',

	redirects: {
    '/': '/en/',
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
				label: 'Guides',
				translations: {
					'zh-CN': '指南',
					'ja': 'ガイド',
					'es': 'Guías',
				},
				items: [
					{
						label: 'Getting Started',
						link: '/guides/getting-started/',
					translations: {
						'zh-CN': '快速入门',
						'ja': 'はじめに',
						'es': 'Primeros pasos',
					},
					},
					{
						label: 'Firmware Update and Flashing',
						link: '/guides/firmware-update/',
						translations: {
							'zh-CN': '固件更新和刷写',
							'ja': 'ファームウェアアップデートとフラッシュ',
							'es': 'Actualización y flasheo de firmware',
						},
					},
					{
						label: 'Workspace Interface & Templates',
						link: '/guides/workspace-interface/',
						translations: {
							'zh-CN': '工作区界面和模板',
							'ja': 'ワークスペースインターフェースとテンプレート',
							'es': 'Interfaz del espacio de trabajo y plantillas',
						},
					},
					{
						label: 'Advanced Tools',
						link: '/guides/advanced-tools/',
						translations: {
							'zh-CN': '高级工具',
							'ja': '高度なツール',
							'es': 'Herramientas avanzadas',
						},
					},
					{
						label: 'AI Generation Function',
						link: '/guides/sensecraft-hmi-ai-generator/',
						translations: {
							'zh-CN': 'AI 生成功能',
							'ja': 'AI 生成機能',
							'es': 'Función de generación con IA',
						},
					},
					{
						label: 'Gallery Function',
						link: '/guides/sensecraft-hmi-gallery/',
						translations: {
							'zh-CN': '图库功能',
							'ja': 'ギャラリー機能',
							'es': 'Función de galería',
						},
					},
					{
						label: 'Canvas Function',
						link: '/guides/sensecraft-hmi-canvas/',
						translations: {
							'zh-CN': 'UI 设计功能',
							'ja': 'UI 設計機能',
							'es': 'Función Canvas',
						},
					},
					{
						label: 'RSS Function',
						link: '/guides/sensecraft-hmi-rss/',
						translations: {
							'zh-CN': 'RSS 功能',
							'ja': 'RSS 機能',
							'es': 'Función RSS',
						},
					},
					{
						label: 'Web Function',
						link: '/guides/sensecraft-hmi-web/',
						translations: {
							'zh-CN': '网页功能',
							'ja': 'Web 機能',
							'es': 'Función Web',
						},
					},
					{
						label: 'Deploying to Your Device',
						link: '/guides/deploying-to-device/',
						translations: {
							'zh-CN': '部署到设备',
							'ja': 'デバイスへのデプロイ',
							'es': 'Implementación en tu dispositivo',
						},
					},
				],
			},
			{
				label: 'Video Guide',
				translations: {
					'zh-CN': '视频指南',
					'ja': 'ビデオガイド',
					'es': 'Guía en video',
				},
				items: [
					{
						label: 'Video Guide',
						link: '/video-guide/',
						translations: {
							'zh-CN': '视频指南',
							'ja': 'ビデオガイド',
							'es': 'Guía en video',
						},
					},
				],
			},
			{
				label: 'Supported Hardware',
				translations: {
					'zh-CN': '支持的硬件',
					'ja': 'サポートされているハードウェア',
					'es': 'Hardware compatible',
				},
				items: [
					{
						label: 'Supported Hardware',
						link: '/supported-hardware/',
						translations: {
							'zh-CN': '支持的硬件',
							'ja': 'サポートされているハードウェア',
							'es': 'Hardware compatible',
						},
					},
				],
			},
			{
				label: 'Pricing',
				translations: {
					'zh-CN': '价格',
					'ja': '価格',
					'es': 'Precios',
				},
				items: [
					{
						label: 'Pricing',
						link: '/pricing/',
						translations: {
							'zh-CN': '价格',
							'ja': '価格',
							'es': 'Precios',
						},
					},
				],
			},
			{
				label: 'Release Notes',
				translations: {
					'zh-CN': '发布说明',
					'ja': 'リリースノート',
					'es': 'Notas de versión',
				},
				items: [
					{
						label: 'Release Notes',
						link: '/release-notes/',
						translations: {
							'zh-CN': '发布说明',
							'ja': 'リリースノート',
							'es': 'Notas de versión',
						},
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
