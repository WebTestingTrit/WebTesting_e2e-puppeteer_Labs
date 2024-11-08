//import { Launcher } from 'chrome-launcher';
import puppeteer from 'puppeteer';
import request from 'request';
import util from 'util';

/**
 * chrome configuration
 */
const chrome_config = {
  output: 'json',
  chromeFlags: ['--disable-mobile-emulation --headless']
};
/**
 * arranges a browser instance managed by puppeteer
 * @returns {Object} chrome, browser and chrome_config
 */
export const arrangeBrowser = async function arrangeBrowser() {
  const { chrome, chrome_config } = await launchChrome();
  const browser = await connectToChrome(chrome);
  return { chrome, browser, chrome_config };
};

/**
 * launches a chrome instance managed by puppeteer
 * @returns {Object} chrome and chrome_config
 */
async function launchChrome() {
  const chrome = await puppeteer.launch(chrome_config);
  chrome_config.port = chrome.port;
  return { chrome, chrome_config };
}
/**
 * connects to a chrome instance managed by puppeteer
 * @param {*} chrome
 * @returns {Object} browser
 */
async function connectToChrome(chrome) {
  const response = await util.promisify(request)(`http://localhost:${chrome.port}/json/version`);
  const { webSocketDebuggerUrl } = JSON.parse(response.body);
  const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });
  return browser;
}
