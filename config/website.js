const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Nick Barrett - Full Stack Developer', // Navigation and Site Title
  siteTitleAlt: 'Nick Barrett', // Alternative Site title for SEO
  siteUrl: 'https://nickb.codes', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'I am a full stack developer with 10 years experience across all facets of web technologies.',
  userTwitter: '@njbarrett', // Twitter Username

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
