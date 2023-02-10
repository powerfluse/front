module.exports = {
    async redirects() {
        return [
            {
                source: '/novelle-sprengstoffgesetz',
                destination: '/aktuelles/positionspapier-silvester',
                permanent: true,
            },
            {
                source: '/mitgliedschaft',
                destination: '/mitgliedschaft-waehlen',
                permanent: true,
            },
        ]
    },
    images: {
        domains: ['localhost', 'cms.bvpk.org'],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}
