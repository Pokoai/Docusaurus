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
          sidebarCollapsible: true, //默认折叠
          // path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pokoai/Docusaurus/pokeai/',
          // showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
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
            title: '破壳Ai', // default to siteConfig.title
            description: '个人博客', // default to  `${siteConfig.title} Blog`
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
        
        // Optional: see doc section bellow
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
      // TOC
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      navbar: {
        title: '破壳Ai',  // 页头标题
        hideOnScroll: false,
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
            docId: 'thinking/thinking-intro',
            position: 'left',
            label: '认知提升+',
          },
          {
            type: 'doc',
            docId: 'reading/reading-intro',
            position: 'left',
            label: '书斋~',
          },
          {
            type: 'doc',
            docId: 'health/health-intro',
            position: 'left',
            label: '健康>',
          },
          // {
          //   type: 'doc',
          //   docId: 'week-plan/week-plan',
          //   position: 'left',
          //   label: 'week-plan',
          // },
          // {to: 'study-record', label: '学习志', position: 'left'},
          // {to: 'blog', label: '博客', position: 'right'},  // 使用第三方平台，与人交流
          
          {
            href: 'https://comment.pokeai.cn',
            // to: 'discussion',
            label: '留言',
            position: 'right',
          },
          // {
          //   href: 'https://nav.pokeai.cn',
          //   label: '信息站',
          //   position: 'right',
          // },
          // {to: 'about', label: '关于', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '专栏',
            items: [
              // { 
              //   label: '知识库',
              //   to: 'docs/wiki',
              // },
              {
                label: '理财',   // aaaaaa,折腾了这么久，结果是label写成了lable
                to: 'docs/finance'
              },
              {
                label: '副业',
                to: 'docs/sideline'
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
              // {
              //   label: '博客',
              //   to: '/blog',
              // },
              {
                label: '信息站',
                href: 'https://nav.pokeai.cn',
              },
              {
                label: '资源站',
                href: 'https://source.pokeai.cn',
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
