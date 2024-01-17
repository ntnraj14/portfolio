/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

const nextConfig = nextTranslate({
    images: {
          domains: ['luxury-panda.static.domains'],
        }
    })

module.exports = nextConfig