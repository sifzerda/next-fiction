# Fiction Map

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Description ](#description)
- [Badges ](#badges)
- [Visuals ](#visuals)
- [Installation ](#installation)
- [Usage ](#usage)
- [Tech](#tech)
- [Support ](#support)
- [Contributing ](#contributing)
- [Authors and Acknowledgment ](#authors-and-acknowledgment)
- [License ](#license)
- [Project Status ](#project-status)
- [To Do ](#to-do)

# Description <a name="description"></a>

This is a creative writing blog which provides an in-depth guide on fiction and narrative writing. There are 25+ pages each covering a separate topic on writing, including plot, dialogue, characters, conflict, theme, settings, etc. 

The aim was to create a comprehensive guide for fiction-writing, compiling the most useful advice I've found in various how-to-write guides all in one single place. It cites professional advice, techniques, and examples. The guide assumes the user knows nothing about fiction-writing and explains concepts in depth. 

# Badges <a name="badges"></a>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) 
![Puppeteer](https://img.shields.io/badge/Puppeteer-white.svg?style=for-the-badge&logo=Puppeteer&logoColor=black)

# Visuals <a name="visuals"></a>

![screenshot](https://github.com/user-attachments/assets/f88a64b6-5f3c-4e1f-a250-0ac4eb3a823a)

URL:

https://fiction-map.vercel.app/

# Installation <a name="installation"></a>

- npm install i
- npm run start

## To scrape page content for search indexing:

- npm run start or dev
- node extract-text.mjs

# Usage <a name="usage"></a>

A serverless SPA app router NEXT.js app. The back-end is handled serverless on a Prisma Neon database on Vercel. It enables user registration for basic account access, and user authentication by JWT. Users can leave comments on each page, and contact me via a contact form on the contact page.

User authentication with JWTs allow users to create an account, which stores user posts on subjects. Each page displays a separate comment list. The user profile page shows a user's posts. Registered users are welcome to leave comments, criticism, and feedback on the pages if any part of the site has been helpful to your writing.

# Tech <a name="tech"></a>

- Next.js: SPA with app router
- Tailwind
- Prisma: queries on users and comments
- Postgres, Vercel neon: stores user accounts and comments
- Zustand: store dynamically managing footnote assignment
- Fuse: index site content to enable sitewide keyword search
- Puppeteer: scrapes text content for indexing
- Pointer Events API (for sidebar dragging on sm+ screens when height resized) OR
- tailwind remove scrollbar

## Footnotes and Tooltips

New Footnotes can be added by pasting right after a reference/quote (no space) and filling in the full citation. Paste before </ p>  to preserve formatting.: 

```bash
<FootnoteRef text={`AUTHOR,\nBook Title.`} /> 
```

New film citations can be added by pasting:

```bash
<FootnoteRef text={<><em>Film Title</em>, Production Studio, (Release Date).</>} />
```

New Tooltips can be added by pasting after the word with footnote:

```bash
<Tooltip number={1} text="Inner Tooltip text." />
```

# Support <a name="support"></a>

For support, users can contact tydamon@hotmail.com. Links to my github and the app repo are also in the footer of the blog.

# Contributing <a name="contributing"></a>

Any contributions you make are greatly appreciated. 

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/NewFeature)
3.	Commit your Changes (git commit -m 'Add some NewFeature')
4.	Push to the Branch (git push origin feature/NewFeature)
5.	Open a Pull Request

Contributors can also help provide writing tips or techniques, or anything not covered. Email me with writing tips and I will add these to the site, and attribute to you. You can also sign up for a user account and leave your feedback as comments.

# Authors and Acknowledgment <a name="authors-and-acknowledgment"></a>

The author acknowledges and credits those who have contributed to this project, including:

-   Refer to references page on app for list of writing materials referred to throughout site pages.

# License <a name="license"></a>

Distributed under the MIT License. See LICENSE.txt for more information.

# Project Status <a name="project-status"></a>

This project is substantially complete, with minor formalization and addition of content that still needs to be done throughout site.

# To Do <a name="to-do"></a>

- [x] add basic formatting:
  - [x] colours
  - [x] links/nav
- [x] add header component 
- [x] footer content
- [x] page elements (title/quote/banner/text sections)
- [x] condense logline, synopsis and title as 'marketing'
- [x] add a 'chapter' entry to prisma schema/db and link it to comment, so every comment not only is linked to a user, but also has a subject, so when you display comments, it doesn't display every comment, only the ones left on the relevant chapter page
- [x] resize text or spacing in sidebar or alter so all the links fit

Changes (for similarly updating horror map)
- uppcase'd nav links
- combined nav into header
- added footnote system (component and utils/footnotestore)

- [  ] User Account page with list of all comments user made
- [ ] Fix up reference page, grab all footnotes
- [ ] Give each subject page a proper image banner, remove post title 'continue reading' stuff:
banners are 1200 x 400
    - [x] story
    - [x] premise
    - [x] plot
    - [x] themes
    - [x] conflict
    - [x] scenes 
    - [x] main characters
    - [x] secondary characters
    - [x] setting
    - [x] subtext 
    - [ ] description
    - [ ] dialogue
    - [ ] suspense
    - [x] pov
    - [ ] voice
    - [x] antagonists
    - [ ] the first words
    - [ ] the next words
    - [ ] the last words
    - [ ] writing devices
    - [ ] writing block
    - [ ] editing
    - [ ] title 
    - [ ] logline
    - [ ] synopsis

- [ ] make sure contact page works. Can maybe use the same program as used to send demo bookings in next.js site
- add quotes for each chapter:
    - [x] story
    - [x] premise
    - [x] plot
    - [x] themes
    - [x] conflict
    - [ ] scenes
    - [x] main characters
    - [x] secondary characters
    - [x] setting
    - [ ] subtext 
    - [x] description
    - [x] dialogue
    - [x] suspense
    - [x] pov
    - [x] voice
    - [x] antagonists
    - [ ] the first words
    - [x] the next words
    - [x] the last words
    - [ ] writing devices
    - [x] writing block
    - [x] editing
    - [x] title 
    - [ ] logline
    - [ ] synopsis

- [ ] change the <link rel="icon" type="image/svg+xml" href="/vite.svg" /> inside index.html 
- [ ] there's a roy peter clark reference under conflict chapter -- look in original word doc to see what it is

Changes:

- ~~Made footnotes a dynamic context (see components)~~ changed to zustand store
- added ' overflow-y: scroll;' to html on globals.css
- changed yellow border to ridge
- added contact form

//============================================================//

Calendar stuff:

npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction
npm install react-big-calendar date-fns
npm install react-big-calendar react-dnd react-dnd-html5-backend date-fns
Code is in /scenes/page.js.

npm install fuse.js

//===========================================================//

ADD IDs to pages to find chunks via search (optional)

- once page content all finished, reIndex with extract-text.js

Stuff to check:
- [ ] every page has an index link to comments
- [x] check all index links work and are correct

- [ ] change all quote boxes to the blockquote br format
- [ ] replace tailwind classname's with custom classes, e.g. shorten h2, h3....s to < h3 > and p.... to < p > 

intertext links:
SEARCH:
(see 6.5 Diametrics)

See 18.3.10 Purposeful Repetition. (on the last words)

see 13.1.6 Starve the Ego, Feed the Soul (editing)
ly by the words, but their form and structure (for instance, see: ‘13.3.4 Deliberately awkward sentences,' and ‘10.1.1 When to not abridge'). (editing)

(see: 14.1.2 Desperate descriptive detailing of dialogic discourse does disservice). (the next words chapter)

(see 11.3 Information Economy) (the next words)

 13.2.7 Dialogue descriptions (the next words)

above rule of invisibility (see: 13.2.5) (the next words)

I also address this under ‘Cowardly or Courageous' under the Horror Section. (main charactetrs)

 (remember Blake Snyder&#39;s ‘Stasis = Death&#39; concept) (main characters)

footnotes are not resetting on page switch (they're accumulating)

r reason for existence, possibly through a ‘Microcosmic&#39; scene (main characters)

the ‘People avoid Jinxing&#39; rule. (main characters)

the strange sandwich Remember this rule under Part 2? It also applies to characters (actually, it applies to everything). (main hcaraterts)

<p>At 11.9 I said ‘Make the Abstract Concrete.&#39;</p> (description)


 <p>Note 13.2.3 Paragraphs says every paragraph should cover a single idea  (description)

similar to the 'strange sandwich' rule -- don't pile on double servings (description)


I noted under (XXXXX section) (description )





make text size of index box and also see box smaller to match about box

remove blue box bottom space add '<p className="mb-1">

potentially add height minimization scrollbar grabbing on sidebar for larger screens, using 'scrollbar hide' tailwind plugin

Consider using 'code' for direct quotes (or something else); e.g.  <p><code><i></i></code></p>

    Some content missing in chapter scenes:


    B.	Different Thing, Same Place: (part A is missing)
    Also where it says 'CONTENT'

    - For sidebar scrolling, consider the pointer api, pulling the sidebar down. Check copies folder and fix so it runs the other way. Try to put a vertical arrow (either double headed or pointing down) with a vertical line which you grab and drag up and down (so user is not grabbing the links and hover white boxes)


    there's an example missing in the next words, about tax department see "However, this rule is not always followed in real life. For instance, "