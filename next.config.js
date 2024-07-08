// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: [ "en", "cs" ],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "cs"
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  experimental: {
    // ssr and displayName are configured by default
    swcFileReading: false,
    styledComponents: true,
    externalDir: true,
    esModule: false
  },
  webpack5: true,

  reactStrictMode: true,

  async rewrites() {
    return [
      // Optional Language
      // Query object shape: { lang?: string }

      //list
      { source: "/:lang(cs)?/pocet-firem", destination: "/firmCount" },
      { source: "/:lang(cs)?/hledani", destination: "/search" },
      { source: "/:lang(cs)?/rozsirene-hledani", destination: "/advancedSearch" },

      //account
      { source: "/:lang(cs)?/prihlaseni", destination: "/login" },
      { source: "/:lang(cs)?/odhlaseni", destination: "/logout" },
      { source: "/:lang(cs)?/muj-ucet", destination: "/account" },
      { source: "/:lang(cs)?/registrace", destination: "/registration" },
      { source: "/:lang(cs)?/zapomenute-heslo", destination: "/lostPassword" },
      { source: "/:lang(cs)?/zmena-hesla", destination: "/changePassword" },
      { source: "/:lang(cs)?/sprava-registrovanych-udaju", destination: "/accountDataChange" },

      //menu
      { source: "/:lang(cs)?/uvod", destination: "/home" },
      { source: "/:lang(cs)?/sluzby", destination: "/services" },
      { source: "/:lang(cs)?/balicek-firem", destination: "/package" },

      //services detail
      { source: "/:lang(cs)?/databaze-firem", destination: "/databaseFirm" },
      { source: "/:lang(cs)?/otevrena-data", destination: "/openData" },
      { source: "/:lang(cs)?/volna-mista", destination: "/jobs" },
      { source: "/:lang(cs)?/vyberova-rizeni", destination: "/tender" },

      //footer
      { source: "/:lang(cs)?/kontakty", destination: "/contact" },
      { source: "/:lang(cs)?/telefony", destination: "/phones" },
      { source: "/:lang(cs)?/nejcasteji-hledane-firmy", destination: "/topSearchFirm" },
      { source: "/:lang(cs)?/nejcasteji-hledane-osoby", destination: "/topSearchPerson" },
      { source: "/:lang(cs)?/nejcasteji-hledane-telefony", destination: "/topSearchPhone" },
      { source: "/:lang(cs)?/ochrana-informaci", destination: "/privacyPolicy" },
      { source: "/:lang(cs)?/vseobecne-obchodni-podminky", destination: "/termsAndConditions" },

      // Advanced rewrite
      // Query object shape: { id: string } (in addition to dynamic route param)

      //url with params
      { source: "/:lang(cs)?/telefon/:phoneUid", destination: "/phone/:phoneUid" },
      { source: "/:lang(cs)?/firma/:firmUid", destination: "/firm/:firmUid" },
      { source: "/:lang(cs)?/produkt/:productUid", destination: "/product/:productUid" },
      { source: "/:lang(cs)?/osoba/:personUid", destination: "/person/:personUid" },
      { source: "/:lang(cs)?/obnoveni-hesla/:newPassToken", destination: "/newPassword/:newPassToken" },
      { source: "/:lang(cs)?/nejcasteji-hledane-firmy/:topSearchCode", destination: "/topSearchFirm/:topSearchCode" },
      { source: "/:lang(cs)?/nejcasteji-hledane-osoby/:topSearchCode", destination: "/topSearchPerson/:topSearchCode" },
      { source: "/:lang(cs)?/nejcasteji-hledane-telefony/:topSearchCode", destination: "/topSearchPhone/:topSearchCode" }
    ]
  }
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
