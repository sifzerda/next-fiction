import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const BASE_URL = 'http://localhost:3000'; // Adjust to your dev URL
const OUTPUT_FILE = path.resolve(process.cwd(), 'public/searchIndex.json');

// List your app routes here — adjust to match your app's actual pages
const routes = [
  '/',
  '/contact',
  '/story',
  '/premise',
  '/plot',
  '/herojourney',
  '/themes',
  '/conflict',
  '/scenes',
  '/mainCharacters',
  '/secondaryCharacters',
  '/setting',
  '/subtext',
  '/description',
  '/dialogue',
  '/suspense',
  '/pov',
  '/voice',
  '/antagonists',
  '/theFirstWords',
  '/theNextWords',
  '/theLastWords',
  '/writingDevices',
  '/editing',
  '/marketing',
  '/references',
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const results = [];

  for (const route of routes) {
    const url = BASE_URL + route;
    console.log(`Crawling ${url} ...`);
    await page.goto(url, { waitUntil: 'networkidle0' });

    const { textContent, pageTitle } = await page.evaluate(() => {
      // Remove unwanted elements (nav, footer, etc.)
      document.querySelectorAll('nav, header, footer, aside, button').forEach(el => el.remove());

      function getVisibleText(element) {
        if (!element) return '';

        if (
          element.tagName === 'A' || // skip links
          element.tagName === 'BUTTON' // skip buttons
        ) return '';

        if (
          element.nodeType === Node.TEXT_NODE &&
          element.textContent.trim() !== ''
        ) {
          return element.textContent.trim() + ' ';
        }

        if (
          element.nodeType === Node.ELEMENT_NODE &&
          ['SCRIPT', 'STYLE', 'NOSCRIPT', 'META', 'HEAD', 'TITLE'].includes(element.tagName)
        ) {
          return '';
        }

        let text = '';
        element.childNodes.forEach(child => {
          text += getVisibleText(child);
        });
        return text;
      }

      const textContent = getVisibleText(document.body).replace(/\s+/g, ' ').trim();

      let pageTitle = 'No Title';
      const h1 = document.querySelector('h1');
      if (h1) pageTitle = h1.textContent.trim();

      return { textContent, pageTitle };
    });

    results.push({
      title: pageTitle,
      content: textContent,
      url: route,
    });
  }

  await browser.close();

  // Write to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`✅ Search index saved to ${OUTPUT_FILE}`);
})();