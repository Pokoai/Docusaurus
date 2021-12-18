const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Poke Ai',  // 站点标题
  tagline: 'Dinosaurs are cool',  // 副标题
  url: 'https://pokeai.cn',   // 网站域名
  baseUrl: '/',
  onBrokenLinks: 'ignore',  // 暂时修改为 ignore ,为了 vercel 能够成功 build 该项目
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',  // 站点图标
  organizationName: 'Pokoai', // Usually your GitHub org/user name.
  projectName: 'Docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          postsPerPage: 5,
          // feedOptions: {
          //   type: 'all',
          //   copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          // },
          // blogSidebarCount: 'ALL',
          // blogSidebarTitle: 'All our posts',
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
      algolia: {
        appId: 'IHADMADDLQ',
        apiKey: '2656c19069bdd85551b275601202758f',
        indexName: 'docusaurus',
        contextualSearch: true,
      },
      navbar: {
        title: 'Poke Ai',  // 页头标题
        logo: {
          alt: 'Poke Ai Logo',  // 页头 Logo 描述
          src: 'img/logo.svg',  // Logo 地址
          // srcDark: 'img/docusaurus_keytar.svg',
          // width: 32,
          // height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'wiki/intro',
            position: 'left',
            label: '知识库￥',
          },
          {
            type: 'doc',
            docId: 'thinking/doc-template',
            position: 'left',
            label: '思考?',
          },
          {
            type: 'doc',
            docId: 'reading/doc-template3',
            position: 'left',
            label: '书斋~',
          },
          {
            type: 'doc',
            docId: 'exercise/doc-template6',
            position: 'left',
            label: '运动>',
          },
          {to: 'blog', label: '博客', position: 'right'},
          {to: 'about', label: '关于', position: 'right'},
          {
            href: 'https://arctee.cn',
            label: '友链&导航站',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Wiki',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '其它',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Poke Ai, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
