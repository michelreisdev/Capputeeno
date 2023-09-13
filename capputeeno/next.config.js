/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents: true
    },
    images: {
        remotePatterns: [{
            hostname: 'storage.googleapis.com',
        }]
     }
}

module.exports = nextConfig
