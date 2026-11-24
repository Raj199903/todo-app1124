/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/todo-app1124' : '',
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages,
  },
}

export default nextConfig
