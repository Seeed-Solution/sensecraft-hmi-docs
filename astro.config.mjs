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
    '/zh': '/zh/overview/',
    '/ja': '/ja/overview/',
    '/es': '/es/overview/',
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
				collapsed: true,
				translations: {
					'zh-CN': '概览',
					'ja': '概要',
					'es': 'Descripción general',
				},
				items: [
					{
						label: 'Features',
						link: '/overview/#features',
						translations: {
							'zh-CN': '核心特性',
							'ja': '主な特徴',
							'es': 'Funciones principales',
						},
					},
					{
						label: 'Pricing',
						link: '/overview/#pricing',
						translations: {
							'zh-CN': '价格',
							'ja': '価格',
							'es': 'Precios',
						},
					},
					{
						label: 'Sign Up and Log In',
						link: '/overview/#sign-up-and-log-in',
						translations: {
							'zh-CN': '注册与登录',
							'ja': 'サインアップとログイン',
							'es': 'Registro e inicio de sesión',
						},
					},
				],
			},
			{
				label: 'Supported Hardware',
				link: '/supported_hardware/',
				collapsed: true,
				translations: {
					'zh-CN': '支持的硬件',
					'ja': 'サポートされているハードウェア',
					'es': 'Hardware compatible',
				},
				items: [
					{
						label: 'Compatibility Table',
						link: '/supported_hardware/#compatibility-table',
						translations: {
							'zh-CN': '兼容性表格',
							'ja': '互換性表',
							'es': 'Tabla de compatibilidad',
						},
					},
				],
			},
			{
				label: 'Guides',
				link: '/guides/getting_started/',
				collapsed: true,
				translations: {
					'zh-CN': '指南',
					'ja': 'ガイド',
					'es': 'Guías',
				},
				items: [
					{
						label: 'Getting Started',
						link: '/guides/getting_started/',
						collapsed: true,
						translations: {
							'zh-CN': '快速入门',
							'ja': 'はじめに',
							'es': 'Primeros pasos',
						},
						items: [
							{
								label: 'Update Your Device Firmware',
								link: '/guides/getting_started/#firmware-update',
								translations: {
									'zh-CN': '更新设备固件',
									'ja': 'デバイスのファームウェアを更新',
									'es': 'Actualiza el firmware de tu dispositivo',
								},
							},
							{
								label: 'Connect Your Device',
								link: '/guides/getting_started/#connect-device',
								translations: {
									'zh-CN': '连接您的设备',
									'ja': 'デバイスを接続する',
									'es': 'Conecta tu dispositivo',
								},
							},
							{
								label: 'Manage Your Device',
								link: '/guides/getting_started/#device-information',
								translations: {
									'zh-CN': '管理您的设备',
									'ja': 'デバイスを管理する',
									'es': 'Gestiona tu dispositivo',
								},
							},
							{
								label: 'Quickly Deploy Content',
								link: '/guides/getting_started/#quick-deployment',
								translations: {
									'zh-CN': '快速下发内容',
									'ja': 'コンテンツをすばやくデプロイ',
									'es': 'Despliega contenido rápidamente',
								},
							},
						],
					},
					{
						label: 'Canvas Designer',
						link: '/guides/workspace/',
						collapsed: true,
						translations: {
							'zh-CN': 'Canvas Designer',
							'ja': 'Canvas Designer',
							'es': 'Canvas Designer',
						},
						items: [
							{
								label: 'Get to Know the Canvas Designer',
								link: '/guides/workspace/#workspace-layout',
								translations: {
									'zh-CN': '了解 Canvas Designer',
									'ja': 'Canvas Designer を理解する',
									'es': 'Conoce Canvas Designer',
								},
							},
							{
								label: 'How to Build Your Page',
								link: '/guides/workspace/#build-your-page',
								translations: {
									'zh-CN': '如何创建您的页面',
									'ja': 'ページの作成方法',
									'es': 'Cómo crear tu página',
								},
							},
							{
								label: 'Basic Widgets',
								link: '/guides/workspace/#basic',
								translations: {
									'zh-CN': 'Basic Widgets',
									'ja': 'Basic Widgets',
									'es': 'Basic Widgets',
								},
							},
							{
								label: 'Component Widgets',
								link: '/guides/workspace/#component',
								translations: {
									'zh-CN': 'Component Widgets',
									'ja': 'Component Widgets',
									'es': 'Component Widgets',
								},
							},
							{
								label: 'My Widgets',
								link: '/guides/workspace/#my-widgets',
								translations: {
									'zh-CN': 'My Widgets',
									'ja': 'My Widgets',
									'es': 'My Widgets',
								},
							},
							{
								label: 'Data Widgets',
								link: '/guides/workspace/#data',
								translations: {
									'zh-CN': 'Data Widgets',
									'ja': 'Data Widgets',
									'es': 'Data Widgets',
								},
							},
						],
					},
					{
						label: 'AI Generation',
						link: '/guides/ai_gen/',
						collapsed: true,
						translations: {
							'zh-CN': 'AI 生成',
							'ja': 'AI 生成',
							'es': 'Generación con IA',
						},
						items: [
							{
								label: 'Using AI to Generate Images',
								link: '/guides/ai_gen/#ai-image-generator',
								translations: {
									'zh-CN': '使用 AI 生成图像',
									'ja': 'AI を使って画像を生成する',
									'es': 'Usar IA para generar imágenes',
								},
							},
							{
								label: 'Using AI to Build Layouts',
								link: '/guides/ai_gen/#ai-layout-generator',
								translations: {
									'zh-CN': '使用 AI 生成布局',
									'ja': 'AI を使ってレイアウトを作成する',
									'es': 'Usar IA para crear diseños',
								},
							},
							{
								label: 'Best Practices for AI Generation',
								link: '/guides/ai_gen/#best-practices-for-ai-generation',
								translations: {
									'zh-CN': 'AI 生成最佳实践',
									'ja': 'AI 生成のベストプラクティス',
									'es': 'Buenas prácticas para la generación con IA',
								},
							},
						],
					},
				],
			},
			{
				label: 'Release Notes',
				link: '/release_note/',
				collapsed: true,
				translations: {
					'zh-CN': '发布说明',
					'ja': 'リリースノート',
					'es': 'Notas de versión',
				},
				items: [
					{
						label: 'Latest Update',
						link: '/release_note/#latest-update',
						translations: {
							'zh-CN': '最新更新',
							'ja': '最新アップデート',
							'es': 'Última actualización',
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



