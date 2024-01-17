// i18n.js
module.exports = {
  locales: ["en", "fr"],
  pages: {
    "*": ["common"],
    "/": ["home"],
    "/about": ["about"],
    "/settings": ["settings", "common"]
  },
  loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
  defaultNS: "common"
}