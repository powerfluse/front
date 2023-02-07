module.exports = {
    async redirects() {
        return [
            {
                source: '/novelle-sprengstoffgesetz',
                destination: '/aktuelles/positionspapier-silvester',
                permanent: true,
            },
        ]
    },
    images: {
        domains: ['localhost', 'cms.bvpk.org'],
    },
}
