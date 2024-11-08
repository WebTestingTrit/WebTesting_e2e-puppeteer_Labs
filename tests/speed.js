import { getAudits } from '../lib/auditor.js';
import { given, then, when } from '../lib/bit.tester.js';
import { arrangeBrowser } from '../lib/lighter.js';

/**
 * tests the speed of the page
 * @param {*} inputPageUrl page url
 */
export default async function (inputPageUrl) {
  await given(`A deployed site`, async () => {
    const { chrome, browser, chrome_config } = await arrangeBrowser();
    await when(`we get the page audit scores`, async () => {
      const audits = await getAudits(inputPageUrl, chrome_config);
      const minimumExpected = 0.89;
      const expected = true;
      const score = audits.find(a => a.id === 'speed-index').score;
      const actual = score > minimumExpected;
      then(`Speed Index faster than ${minimumExpected}`, actual, expected);
    });
    browser.disconnect();
    await chrome.kill();
  });
}

// score = audits.find(a => a.id === 'first-meaningful-paint').score;
// actual = score > minimumExpected;
// then(`First Meaningful Paint better than ${minimumExpected}`, actual, expected);
// score = audits.find(a => a.id === 'first-cpu-idle').score;
// actual = score > minimumExpected;
// then(`First CPU Idle better than ${minimumExpected}`, actual, expected);
// score = audits.find(a => a.id === 'interactive').score;
// actual = score > minimumExpected;
// then(`Time to Interactive better than ${minimumExpected}`, actual, expected);
