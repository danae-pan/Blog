/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Penetration Testing Journal',
  tagline: 'My journey through penetration testing and red teaming.',
  url: 'https://danae-pan.github.io', 
  baseUrl: '/',
  organizationName: 'danae-pan',
  projectName: 'Blog', 
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          blogTitle: 'Intro to Red Team',
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
          to: '/blog',
          label: 'Blog',
          position: 'left',
        }
      ],
    },
    colorMode: {
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
