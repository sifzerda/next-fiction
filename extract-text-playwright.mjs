import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:3000'; // Change if needed
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
 // '/conflict',
 // '/scenes',
 // '/mainCharacters',
 // '/secondaryCharacters',
 // '/setting',
 // '/subtext',
 // '/description',
 // '/dialogue',
 // '/suspense',
 // '/pov',
  //'/voice',
  //'/antagonists',
  //'/theFirstWords',
  //'/theNextWords',
 // '/theLastWords',
  //'/writingDevices',
  //'/editing',
  //'/marketing',
  //'/references',
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const results = [];

  for (const route of routes) {
    const url = BASE_URL + route;
    console.log(`Crawling ${url} ...`);
    await page.goto(url, { waitUntil: 'networkidle' });

    const { textContent, pageTitle } = await page.evaluate(() => {
      // Remove global layout elements we want to exclude from indexing
      document.querySelectorAll('nav, header, footer, aside, button').forEach(el => el.remove());

      // Recursive text extractor excluding links and buttons
      function getVisibleText(element) {
        if (!element) return '';

        if (
          element.tagName === 'A' || // Exclude links
          element.tagName === 'BUTTON' // Exclude buttons
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

      // Extract all visible text from the whole body
      const textContent = getVisibleText(document.body).replace(/\s+/g, ' ').trim();

      // Use first h1 on the page as title, fallback to 'No Title'
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

  // Write results array to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`✅ Search index written to ${OUTPUT_FILE}`);
})();