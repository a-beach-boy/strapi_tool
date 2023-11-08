#!/usr/bin/env node

import { cli } from "../src/utils/cli.mjs"
import { getReportFile } from "../src/utils/report.mjs"
import { getServiceCodex, updateService } from "../src/utils/strapi.mjs"

const options = cli()

console.log(options.file);

const config = {
  url: process.env.STRAPI_API_URL,
  token: process.env.STRAPI_TOKEN,
}

const strapiCodex = await getServiceCodex(config.url)

const result = getReportFile(options.file)
result.forEach(site => {
  Object.entries(site).forEach(([key, value]) => {
    if (typeof value === "string" || !strapiCodex[key.substring(1)]) {
      return;
    }

    const slug = key.substring(1);
    const data = value?.attributes?.fields.reduce((obj, item) => ({
      ...obj,
      [item?.name]: item?.values?.kentico,
    }), {});

    updateService(strapiCodex[slug], data);
  });
});
