/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "jeevatix",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",      
      providers: {
        cloudflare: "5.38.0",
      },
    };
  },
  async run() {
    // 1. Setup Cloudflare Hyperdrive (Connection Pooling ke DB PostgreSQL Self-Hosted/External)
    // const hyperdrive = new sst.cloudflare.Hyperdrive("JeevatixDatabase", {
    //   connectionString: process.env.DATABASE_URL,
    // });

    // 2. Setup Cloudflare Queues (Untuk Background Processing - Email & Analytics)
    // const emailQueue = new sst.cloudflare.Queue("EmailQueue");

    // 3. Setup Hono API Worker
    const api = new sst.cloudflare.Worker("JeevatixAPI", {
      handler: "apps/api/src/index.ts",
      url: true,
      // link: [hyperdrive, emailQueue], // Menghubungkan Worker dengan Hyperdrive dan Queue
    });

    // 4. Setup Astro Frontend (Dapat di-*deploy* ke Cloudflare Pages / Workers)
    // Nantinya kita bisa gunakan adaptor `@astrojs/cloudflare`
    
    return {
      apiEndpoint: api.url,
    };
  },
});
