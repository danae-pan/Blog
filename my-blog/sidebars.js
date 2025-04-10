/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Penetration Testing Phases',
      items: [
        'phases/Introduction',
        'phases/Pre-Engagement',
      ],
    },
  ],
  
  blogSidebar: [
    {
      type: 'category',
      label: 'Intro to Red Team',
      items: [
        'blog/Jerry',
        'blog/Sau',
        'blog/Cap',
        'blog/GoodGames',
        'blog/Devvortex',
        'blog/Paper',
      ],
    },
  ]
};

