const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: '破壳 Ai',  // 站点标题
  tagline: 'Focus - Keep things simple',  // 副标题
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
          // path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pokoai/Docusaurus/pokeai/',
          // showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/pokoai/Docusaurus/pokeai/blog/',
          postsPerPage: 7,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '近期发布',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Poke Ai, Inc.`,
          },
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
      hideableSidebar: true,
      // 搜索栏
      algolia: {
        appId: 'IHADMADDLQ',
        apiKey: '2656c19069bdd85551b275601202758f',
        indexName: 'docusaurus',
        contextualSearch: true,
      },
      // TOC
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: '破壳Ai',  // 页头标题
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
            docId: 'wiki/wiki-intro',
            position: 'left',
            label: '知识库&',
          },
          {
            type: 'doc',
            docId: 'reading/reading-intro',
            position: 'left',
            label: '书斋~',
          },
          {
            type: 'doc',
            docId: 'exercise/exercise-intro',
            position: 'left',
            label: '运动>',
          },
          {
            type: 'doc',
            docId: 'thinking/thinking-intro',
            position: 'left',
            label: '思考?',
          },
          {to: 'blog', label: '博客', position: 'right'},
          {to: 'about', label: '关于', position: 'right'},
          {
            href: 'https://comment.pokeai.cn',
            // to: 'discussion',
            label: '留言',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '笔记',
            items: [
              {
                label: '知识库',
                to: 'docs/wiki',
              },
              {
                label: '理财',   // aaaaaa,折腾了这么久，结果是label写成了lable
                to: 'docs/finance'
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: '联系我',
                href: 'https://pokeai.cn/about#:~:text=%E9%82%AE%E7%AE%B1%3Apokeai%40outlook.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Pokoai/Docusaurus',
              },
            ],
          },
          {
            title: '导航',
            items: [
              {
                label: '博客',
                to: '/blog',
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
