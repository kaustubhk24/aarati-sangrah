// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'संग्रह',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sangrah.justinclicks.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kaustubhk24', // Usually your GitHub org/user name.
  projectName: 'sangrah', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'mr',
    locales: ['mr'],
    localeConfigs: {
      mr: {
        label: 'देवनागरी',
        direction: 'ltr',
        htmlLang: 'mr-IN',
        path: 'mr',
      },},
  },
  

  presets: [
    [
    
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
    [ require.resolve('docusaurus-lunr-search'), {
      languages: ['en'] // language codes
    }],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-BDZNJ51SEP',
        anonymizeIP: true,
      },
    ],
   [
      
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/512X512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#bf43bb',
          },
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        // id: 'support_us',
        // content:
        //   'If you want to contribute please <a target="_blank" href="https://github.com/kaustubhk24/sangrah"> visit here</a> ',
        // backgroundColor: 'aliceblue',
        // textColor: '#091E42',
        // isCloseable: true,

        id: 'new_update',
        content:
          'श्री पार्थिव गणेश प्रतिष्ठापणापूजेसाठी   <a href="/parthiv-ganesh-pratishthapana"> येथे क्लिक करा </a> ',
        backgroundColor: 'aliceblue',
        textColor: '#091E42',
        isCloseable: true,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        style:'primary',

        title: 'संग्रह',
        logo: {
          alt: 'संग्रह',
          src: 'img/favicon.ico ',
        },
        items: [
         { type: 'localeDropdown',
          position: 'right',},
          { href: "https://github.com/kaustubhk24/aarati-sangrah", label: "GitHub", position: "right" },

        ],
     
      },
      footer: {
        style: 'dark',
       
        copyright: `Proudly Hosted on GitHub Pages & Built with Docusaurus.`,
        links: [
          {
            label: 'Copyright Issue',
            href: 'https://github.com/kaustubhk24/aarati-sangrah/issues/new?assignees=kaustubhk24&labels=Copyrights+Issues&template=copyright-issue.md&title=',
          },]

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
    
};


module.exports = config;
