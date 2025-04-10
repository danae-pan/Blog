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

          blogTitle: 'Intro to Red Team',
          path: './docs/blog', 
          editUrl: 'https://github.com/danae-pan/Blog',
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
          to: '/docs/blog/Jerry', 
          label: 'Write Ups',
          position: 'left',
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
