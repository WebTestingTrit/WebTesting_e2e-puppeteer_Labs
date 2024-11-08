import { closeBrowser, getBrowser } from './lib/puppets.js';

const targetUrl = 'https://es.aiddbot.com';

async function test() {
  const browser = await getBrowser();
  const pagePuppet = await browser.newPage();
  await pagePuppet.goto(targetUrl, { waitUntil: 'load' });
  await closeBrowser(browser);
}

/**
 * initial testing with puppeteer
 */
test();

// const { getBrowser, closeBrowser, takeScreenshot } = require(`./lib/puppets`);
// await takeScreenshot(pagePuppet);
