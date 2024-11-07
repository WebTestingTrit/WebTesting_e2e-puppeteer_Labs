import { closeBrowser, getBrowser } from '../lib/puppets.js';
import testExistence from './existence.js';

async function test() {
  const browser = await getBrowser();
  const pagePuppet = await browser.newPage();
  await testExistence(pagePuppet);
  await closeBrowser(browser);
}
test();

// const { getBrowser, closeBrowser, takeScreenshot } = require(`./lib/puppets`);
// await takeScreenshot(pagePuppet);
