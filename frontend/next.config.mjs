// next.config.mjs

export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/welcome',
          permanent: true, // Use true for permanent redirects, false otherwise
        },
      ];
    },
  };
  