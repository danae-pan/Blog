module.exports = {
  title: 'Penetration Testing Journal',
  tagline: 'My journey through penetration testing and red teaming.',
  url: 'https://danae-pan.github.io', 
  baseUrl: '/Blog/',
  organizationName: 'danae-pan',
  projectName: 'Blog',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs', 
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
          blogTitle: 'Intro to Red Team',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL',
          path: './blog', 
          editUrl: 'https://github.com/danae-pan/Blog',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'About Me',
      items: [
        {
          to: '/docs/phases/Introduction',  
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/blog/', 
          label: 'Write Ups',
          position: 'left',
        },
        {
          to: '/docs/stories/Brain: the first computer virus',  
          label: 'Bedtime Stories',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/danae-pan',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/anastasia-danai-panagiotopoulou',
            },
          ],
        },
      ],
    },
  },
};
