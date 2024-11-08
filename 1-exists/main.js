import { closeBrowser, getBrowser } from '../lib/puppets.js';
import testContent from './content.js';
import testExistence from './existence.js';
/**
 * checks if the site exists
 */
async function test() {
  const browser = await getBrowser();
  const pagePuppet = await browser.newPage();
  const inputPageUrl = `https://www.trainingit.es/`;
  await testExistence(pagePuppet, inputPageUrl);
  await testContent(
    pagePuppet,
    inputPageUrl,
    `Formación IT online y presencial orientada a desarrolladores - TrainingIT`
  );
  await closeBrowser(browser);
}
/**
 * basic testing with puppeteer
 */
test();

// const { getBrowser, closeBrowser, takeScreenshot } = require(`./lib/puppets`);
// await takeScreenshot(pagePuppet);
