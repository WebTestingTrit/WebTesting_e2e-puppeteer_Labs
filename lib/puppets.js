import path from 'path';
import puppeteer from 'puppeteer';

/**
 * browser instance managed by puppeteer
 */
let browser;
/**
 * gets a browser instance managed by puppeteer
 * @returns {Object} browser ready to use
 */
export const getBrowser = async function getBrowser() {
  if (browser) return browser;
  browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    devtools: false
  });
  return browser;
};

/**
 * closes the browser instance managed by puppeteer
 * @param {*} browser
 */
export const closeBrowser = async function close(browser) {
  await browser.close();
};

/**
 * takes a screenshot of the page managed by puppeteer
 * @param {*} pagePuppet
 */
export const takeScreenshot = async function takeScreenshot(pagePuppet) {
  const timeStamp = new Date().getTime();
  const shotPath = path.join(process.cwd(), 'images', `${timeStamp}.png`);
  await pagePuppet.screenshot({
    path: shotPath,
    fullPage: false
  });
};

/*


  // Grants permission for changing geolocation
  const context = browser.defaultBrowserContext();
  await context.overridePermissions('https://pptr.dev', ['geolocation']);
    // Changes to the north pole's location
  await page.setGeolocation({ latitude: 90, longitude: 0 });

  // Explorer
  https://tech-query.me/Puppeteer-IE/
*/
