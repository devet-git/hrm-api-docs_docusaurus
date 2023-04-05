// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'HRM API Docs',
	tagline: 'Welcome',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://hrm-api-docs-docusaurus.netlify.app',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	// organizationName: 'devet-git', // Usually your GitHub org/user name.
	// projectName: 'hrm- api - docs_docusaurus', // Usually your repo name.
	// onBrokenLinks: 'throw',
	// onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
		localeConfigs: {
			en: {
				label: 'English',
			},
		},
	},
	presets: [
		[
			/** @type {import('@docusaurus/preset-classic').Options} */
			'redocusaurus',
			{
				// Plugin Options for loading OpenAPI files
				specs: [
					{
						spec: './api.json',
						route: '/docs/api/',
					},
				],
				// Theme Options for modifying how redoc renders them
				theme: {
					// Change with your site colors
					primaryColor: '#1890ff',
				},
			},
		],
		[
			'classic',
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card' + '.jpg',
			navbar: {
				title: 'HRM API Docs',
				logo: { alt: 'HRM logo', src: 'img/logo.svg', },
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Tutorial',
					},
					// { to: '/blog', label: 'Blog', position: 'left' },
					{ to: '/docs/api', label: 'API', position: 'left' },
					{
						href: 'https://github.com/devet-git/hrm-api-docs_docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],

			},
			footer: {
				style: 'light',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro',
							},
							{
								label: 'API Reference',
								to: '/docs/api',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/devet-git/hrm-api-docs_docusaurus',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} HRM API Documentation`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			colorMode: {
				defaultMode: 'light',
				disableSwitch: false,
				respectPrefersColorScheme: false,
			},
		}),
};

module.exports = config;
