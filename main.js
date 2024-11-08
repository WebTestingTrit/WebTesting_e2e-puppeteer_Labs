import { closeBrowser, getBrowser, takeScreenshot } from './lib/puppets.js';
import testApi from './tests/api.js';
import testContent from './tests/content.js';
import testEmulation from './tests/emulation.js';
import testExistence from './tests/existence.js';
import testValidity from './tests/validity.js';

/**
 * main function that runs the tests
 */
async function test() {
  const { browser, pagePuppet } = await arrangeBefore();
  await testExistence(pagePuppet);
  await testContent(pagePuppet);
  await testInteraction(pagePuppet);
  await testEmulation(pagePuppet);
  await testValidity(pagePuppet);
  await takeScreenshot(pagePuppet);
  await cleanAfter(browser);
  //await testSpeed();
  await testApi();
}
/**
 * arranges the before tests
 * @returns {Object} browser and pagePuppet
 */
async function arrangeBefore() {
  const browser = await getBrowser();
  const pagePuppet = await browser.newPage();
  return { browser, pagePuppet };
}
/**
 * cleans up after the tests
 * @param {Object} browser
 */
async function cleanAfter(browser) {
  await closeBrowser(browser);
}

/**
 * runs the tests
 */
test();
