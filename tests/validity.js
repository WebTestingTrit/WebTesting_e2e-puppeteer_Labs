import { given, then, when } from '../lib/bit.tester.js';

export default async function (pagePuppet) {
  await given(`A site url`, async () => {
    const inputPageUrl = `https://es.aiddbot.com`;
    await when(`we scrap it for empty links`, async () => {
      await pagePuppet.goto(inputPageUrl, { waitUntil: `load` });
      const actual = await pagePuppet.evaluate(() =>
        window.find(`a:is(:not([href]),[href=""],[href="#"])`)
      );
      const expected = false;
      then(`have no one`, actual, expected);
    });
  });
}
