const {i18n} = require('./next-i18next.config')
/** @type {import('next').NextConfig} */
const nextConfig = (phase, {defaultConfig}) => {
    return {
        reactStrictMode: true,
        images: {
            domains: ['fakeimg.pl', 'picsum.photos']
        },
        compiler: {
            // ssr and displayName are configured by default
            styledComponents: true,
        },
        i18n,
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig