/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pagesのサブパス用（リポジトリ名に合わせて変更）
  // 例: https://username.github.io/spochan/ の場合
  basePath: process.env.NODE_ENV === "production" ? "/spochan" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/spochan" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
