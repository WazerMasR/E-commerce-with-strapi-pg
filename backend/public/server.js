const strapi = require('@strapi/strapi');

// @ts-ignore
strapi({ dir: process.cwd() }).start().then(() => {
    console.log('Strapi server is running...');
});
