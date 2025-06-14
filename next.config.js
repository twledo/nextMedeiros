/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // ajuda a pegar erros no React em dev
  swcMinify: true,       // usa o compilador SWC para minificar (mais rápido)
  // Se você usar imagens externas, pode configurar domains aqui, ex:
  // images: {
  //   domains: ['example.com'],
  // },
};

module.exports = nextConfig;
