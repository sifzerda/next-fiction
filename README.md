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

This is a blog which provides an in-depth guide on fiction and narrative writing. There are 25+ pages each covering a separate topic on writing, including plot, dialogue, characters, conflict, theme, settings, etc. 

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

# Visuals <a name="visuals"></a>

![screenshot](https://github.com/user-attachments/assets/f88a64b6-5f3c-4e1f-a250-0ac4eb3a823a)

URL:

https://fiction-map.vercel.app/

# Installation <a name="installation"></a>

- npm install i
- npm run start

# Usage <a name="usage"></a>

A serverless SPA app router NEXT.js app. The back-end is handled serverless on a Prisma Neon database on Vercel. It enables user registration for basic account access, and user authentication by JWT. Users can leave comments on each page, and contact me via a contact form on the contact page.

User authentication with JWTs allow users to create an account, which stores user posts on subjects. Each page displays a separate comment list. The user profile page shows a user's posts. Registered users are welcome to leave comments, criticism, and feedback on the pages if any part of the site has been helpful to your writing.

# Tech <a name="tech"></a>

- Next.js: SPA with app router
- Prisma: queries on users and comments
- Postgres, Vercel neon: stores user accounts and comments
- Zustand: store dynamically managing footnote assignment
- Fuse: index site content to enable sitewide keyword search

## Footnotes

New Footnotes can be added by pasting: 

```bash
<FootnoteRef text="Author, Title." />
```

Right after a reference/quote (no space) and filling in the full citation. Paste before </ p>  to preserve formatting.

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

- [ ] add basic formatting:
  - [ ] colours
  - [ ] links/nav
- [ ] add header component 
- [x] footer content
- [ ] page elements (title/quote/banner/text sections)

- [ ] condense logline, synopsis and title as 'marketing'

- [ ] add a 'chapter' entry to prisma schema/db and link it to comment, so every comment not only is linked to a user, but also has a subject, so when you display comments, it doesn't display every comment, only the ones left on the relevant chapter page

- [ ] resize text or spacing in sidebar or alter so all the links fit

Changes (for similarly updating horror map)
- uppcase'd nav links
- combinend nav into header
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
- [x] Fix up main nav tab pages: Portfolio page, contact page, about, etc.
- [x] fill in About summary cards for each chapter

- [x] change bs-light gold boxes to 'custom light box' (pale yellow)
- [x] either move footnotes below thought section, or shift footnotes into tooltips which display on ft# hover
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
- [ ] remove the blue footnotes sections out of each chapter
- [ ] style the footnotes with black tooltip styling
- [x] style the under the volcano part in scenes like the nexus stuff (with footnotes)

### LATER:
- [x] when page flexes in, the 'about' 'index' and 'also see' parts are pushed to the bottom of page. they need to be pushed to the top under the image banner.

- [x] figure out how to work out the subjects href list when page flexed narrow or on mobile phone. Can it be pushed  to center (otherwise remaining the same, clicking to open)

Changes:

- removed padding-top: 40px for div justify center (footer) /
- removed zerda author attribution /
- removed disabled newer button /
- changed banner image html and added banner images
- filled in elsewhere box to say Also see with 3 links
- changed img location from public to assets /
- removed spare portfolio and profile and other navs /
- removed sidebar comp and subjects comp /
- removed superfluous package json installations /
- filled about section summaries
- removed extra router links from main and app.jsx /
- ~~Made footnotes a dynamic context (see components)~~ changed to zustand store
- added '  overflow-y: scroll;' to html on globals.css
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


PAGES TO DO:

- [x] description
- [x] dialogue
- [x] voice
- [x] antagonists
- [x] the first words
- [x] the next words
- [x] the last words
- [ ] writing devices + writer's block
- [ ] marketing: title + synopsis + logline
- [ ] references


Stuff to check:
- every page has a index link to comments
- check all index links work and are correct
