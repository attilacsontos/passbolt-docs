/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  adminGuideSidebar: require('./admin.sidebar'),
  contributeGuideSidebar: require('./contribute.sidebar'),
  hostingGuideSidebar: require('./hosting.sidebar'),
  userGuideSidebar: require('./user.sidebar'),
  developmentGuideSidebar: require('./development.sidebar')
};

module.exports = sidebars;
