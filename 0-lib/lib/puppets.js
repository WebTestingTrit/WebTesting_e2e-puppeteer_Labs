// const path = require(`path`);

import puppeteer from 'puppeteer';

let browser = null;
export const getBrowser = async function getBrowser() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 768, height: 1024 },
      devtools: false
    });
  }
  return browser;
};

export const closeBrowser = async function close(browser) {
  await browser.close();
};

// exports.takeScreenshot = async function takeScreenshot(pagePuppet) {
//   const timeStamp = new Date().getTime();
//   const shotPath = path.join(process.cwd(), 'images', `${timeStamp}.png`);
//   await pagePuppet.screenshot({
//     path: shotPath,
//     fullPage: false
//   });
// };
