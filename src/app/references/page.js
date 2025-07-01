// src/app/references.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
//import FootnoteRef from '../../components/FootnoteRef';
//import subtextBanner from '../assets/subtextbanner.jpg';
//import Image from "next/image";

function Subtext() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1>References</h1>

        <blockquote>
          “QUOTE.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— ATTRIBUTION</span>
        </blockquote>
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto -mt-5 px-4 text-black flex flex-col-reverse md:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <hr /> {/* ---------------------------------------------------------*/}

          {/* Instructional Guides */}
          <h2 id="post-instructional-guides" className="mt-6 font-semibold text-lg">I. Instructional Guides</h2>
          <ol className="list-decimal list-inside text-sm space-y-1 pl-4">
            <li>Bickham, Jack. <em>The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)</em>. Writer's Digest Books, 1992.</li>
            <li>Burnett, Hallie, and Whit Burnett. <em>Fiction Writer's Handbook</em>. HarperCollins, 2003.</li>
            <li>Campbell, Joseph. <em>The Hero with a Thousand Faces</em>. Princeton University Press, 1949.</li>
            <li>Carroll, David. <em>A Manual of Writer's Tricks</em>. Writer's Digest Books, 1996.</li>
            <li>Clark, Roy Peter. <em>Writing Tools: 50 Essential Strategies for Every Writer</em>. Little, Brown and Company, 2006.</li>
            <li>Edgerton, Les. <em>Hooked: Write Fiction That Grabs Readers at Page One & Never Lets Them Go</em>. Writer's Digest Books, 2007.</li>
            <li>Frey, James. <em>How to Write a Damn Good Novel Part 1</em>. St. Martin's Griffin, 1987.</li>
            <li>Hart, Jack. <em>Storycraft: Complete Guide to Writing Creative Nonfiction</em>. University of Chicago Press, 2011.</li>
            <li>King, Stephen. <em>On Writing</em>. Scribner, 2000.</li>
            <li>King, Stephen. <em>Danse Macabre</em>. Berkley, 1981.</li>
            <li>King, Stephen. <em>‘Writing Successfully in 10 Minutes&#39;</em>. Unpublished, N/A.</li>
            <li>Macauley, Robie, & Lanning, George. <em>Technique In Fiction (2nd ed)</em>. Macmillan, 1979.</li>
            <li>Mayer, Bob. <em>70 Solutions to Common Writing Mistakes</em>. Writer's Digest Books, 2005.</li>
            <li>Mayer, Bob. <em>Fiction Writers Toolkit</em>. Writer's Digest Books, 2009.</li>
            <li>McKee, Robert. <em>Story: Substance, Structure, Style and the Principles of Screenwriting</em>. HarperCollins, 1997.</li>
            <li>Meredith, Robert, and John Fitzgerald. <em>Structuring your novel: From basic idea to finished manuscript</em>. Penguin Books, 2008.</li>
            <li>Mittelmark, Howard, and Sandra Newman. <em>How NOT to Write a Novel</em>. Harper Perennial, 2008.</li>
            <li>Sloane, William. <em>The Craft of Writing</em>. Touchstone, 1987.</li>
            <li>Smith Jr., James. <em>You Can Write a Novel</em>. Harper Perennial, 2010.</li>
            <li>Snyder, Blake. <em>Save the Cat!</em>. Michael Wiese Productions, 2005.</li>
            <li>Snyder, Blake. <em>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of</em>. Michael Wiese Productions, 2009.</li>
            <li>St. John, Cheryl. <em>Crafting Dynamic Dialogue</em>. Writer's Digest Books, 2004.</li>
            <li>Stein, Sol. <em>Stein On Writing</em>. St. Martin's Press, 1995.</li>
            <li>Stein, Sol. <em>How To Grow A Novel</em>. Back Bay Books, 1999.</li>
            <li>Stephens-Davidowitz, Seth. <em>Everybody Lies</em>. Random House, 2017.</li>
            <li>Yagoda, Ben. <em>How to Not Write Bad</em>. Riverhead Books, 2013.</li>
          </ol>

          <hr /> {/* ---------------------------------------------------------*/}

          {/* Fiction */}
          <h2 id="post-fiction" className="mt-6 font-semibold text-lg">II. Fiction</h2>
          <ol className="list-decimal list-inside text-sm space-y-1 pl-4">
            <li>Bickham, Jack. <em>The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)</em>. Writer's Digest Books, 1992.</li>
            <li>Burnett, Hallie, and Whit Burnett. <em>Fiction Writer's Handbook</em>. HarperCollins, 2003.</li>
            <li>Campbell, Joseph. <em>The Hero with a Thousand Faces</em>. Princeton University Press, 1949.</li>
            <li>Carroll, David. <em>A Manual of Writer's Tricks</em>. Writer's Digest Books, 1996.</li>
            <li>Clark, Roy Peter. <em>Writing Tools: 50 Essential Strategies for Every Writer</em>. Little, Brown and Company, 2006.</li>
            <li>Edgerton, Les. <em>Hooked: Write Fiction That Grabs Readers at Page One & Never Lets Them Go</em>. Writer's Digest Books, 2007.</li>
            <li>Frey, James. <em>How to Write a Damn Good Novel Part 1</em>. St. Martin's Griffin, 1987.</li>
            <li>Hart, Jack. <em>Storycraft: Complete Guide to Writing Creative Nonfiction</em>. University of Chicago Press, 2011.</li>
            <li>King, Stephen. <em>On Writing</em>. Scribner, 2000.</li>
            <li>King, Stephen. <em>Danse Macabre</em>. Berkley, 1981.</li>
            <li>King, Stephen. <em>‘Writing Successfully in 10 Minutes&#39;</em>. Unpublished, N/A.</li>
            <li>Macauley, Robie, & Lanning, George. <em>Technique In Fiction (2nd ed)</em>. Macmillan, 1979.</li>
            <li>Mayer, Bob. <em>70 Solutions to Common Writing Mistakes</em>. Writer's Digest Books, 2005.</li>
            <li>Mayer, Bob. <em>Fiction Writers Toolkit</em>. Writer's Digest Books, 2009.</li>
            <li>McKee, Robert. <em>Story: Substance, Structure, Style and the Principles of Screenwriting</em>. HarperCollins, 1997.</li>
            <li>Meredith, Robert, and John Fitzgerald. <em>Structuring your novel: From basic idea to finished manuscript</em>. Penguin Books, 2008.</li>
            <li>Mittelmark, Howard, and Sandra Newman. <em>How NOT to Write a Novel</em>. Harper Perennial, 2008.</li>
            <li>Sloane, William. <em>The Craft of Writing</em>. Touchstone, 1987.</li>
            <li>Smith Jr., James. <em>You Can Write a Novel</em>. Harper Perennial, 2010.</li>
            <li>Snyder, Blake. <em>Save the Cat!</em>. Michael Wiese Productions, 2005.</li>
            <li>Snyder, Blake. <em>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of</em>. Michael Wiese Productions, 2009.</li>
            <li>St. John, Cheryl. <em>Crafting Dynamic Dialogue</em>. Writer's Digest Books, 2004.</li>
            <li>Stein, Sol. <em>Stein On Writing</em>. St. Martin's Press, 1995.</li>
            <li>Stein, Sol. <em>How To Grow A Novel</em>. Back Bay Books, 1999.</li>
            <li>Stephens-Davidowitz, Seth. <em>Everybody Lies</em>. Random House, 2017.</li>
            <li>Yagoda, Ben. <em>How to Not Write Bad</em>. Riverhead Books, 2013.</li>
          </ol>

          <hr /> {/* ---------------------------------------------------------*/}

          {/* Non-Fiction */}
          <h2 id="post-nonfiction" className="mt-6 font-semibold text-lg">III. Non-Fiction</h2>
          <ol className="list-decimal list-inside text-sm space-y-1 pl-4">
            <li>Bickham, Jack. <em>The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)</em>. Writer's Digest Books, 1992.</li>
            <li>Burnett, Hallie, and Whit Burnett. <em>Fiction Writer's Handbook</em>. HarperCollins, 2003.</li>
            <li>Campbell, Joseph. <em>The Hero with a Thousand Faces</em>. Princeton University Press, 1949.</li>
            <li>Carroll, David. <em>A Manual of Writer's Tricks</em>. Writer's Digest Books, 1996.</li>
            <li>Clark, Roy Peter. <em>Writing Tools: 50 Essential Strategies for Every Writer</em>. Little, Brown and Company, 2006.</li>
            <li>Edgerton, Les. <em>Hooked: Write Fiction That Grabs Readers at Page One & Never Lets Them Go</em>. Writer's Digest Books, 2007.</li>
            <li>Frey, James. <em>How to Write a Damn Good Novel Part 1</em>. St. Martin's Griffin, 1987.</li>
            <li>Hart, Jack. <em>Storycraft: Complete Guide to Writing Creative Nonfiction</em>. University of Chicago Press, 2011.</li>
            <li>King, Stephen. <em>On Writing</em>. Scribner, 2000.</li>
            <li>King, Stephen. <em>Danse Macabre</em>. Berkley, 1981.</li>
            <li>King, Stephen. <em>‘Writing Successfully in 10 Minutes&#39;</em>. Unpublished, N/A.</li>
            <li>Macauley, Robie, & Lanning, George. <em>Technique In Fiction (2nd ed)</em>. Macmillan, 1979.</li>
            <li>Mayer, Bob. <em>70 Solutions to Common Writing Mistakes</em>. Writer's Digest Books, 2005.</li>
            <li>Mayer, Bob. <em>Fiction Writers Toolkit</em>. Writer's Digest Books, 2009.</li>
            <li>McKee, Robert. <em>Story: Substance, Structure, Style and the Principles of Screenwriting</em>. HarperCollins, 1997.</li>
            <li>Meredith, Robert, and John Fitzgerald. <em>Structuring your novel: From basic idea to finished manuscript</em>. Penguin Books, 2008.</li>
            <li>Mittelmark, Howard, and Sandra Newman. <em>How NOT to Write a Novel</em>. Harper Perennial, 2008.</li>
            <li>Sloane, William. <em>The Craft of Writing</em>. Touchstone, 1987.</li>
            <li>Smith Jr., James. <em>You Can Write a Novel</em>. Harper Perennial, 2010.</li>
            <li>Snyder, Blake. <em>Save the Cat!</em>. Michael Wiese Productions, 2005.</li>
            <li>Snyder, Blake. <em>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of</em>. Michael Wiese Productions, 2009.</li>
            <li>St. John, Cheryl. <em>Crafting Dynamic Dialogue</em>. Writer's Digest Books, 2004.</li>
            <li>Stein, Sol. <em>Stein On Writing</em>. St. Martin's Press, 1995.</li>
            <li>Stein, Sol. <em>How To Grow A Novel</em>. Back Bay Books, 1999.</li>
            <li>Stephens-Davidowitz, Seth. <em>Everybody Lies</em>. Random House, 2017.</li>
            <li>Yagoda, Ben. <em>How to Not Write Bad</em>. Riverhead Books, 2013.</li>
          </ol>

          <hr /> {/* ---------------------------------------------------------*/}

          {/* Other */}
          <h2 id="post-other" className="mt-6 font-semibold text-lg">IV. Other</h2>
          <ol className="list-decimal list-inside text-sm space-y-1 pl-4">
            <li>Bickham, Jack. <em>The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)</em>. Writer's Digest Books, 1992.</li>
            <li>Burnett, Hallie, and Whit Burnett. <em>Fiction Writer's Handbook</em>. HarperCollins, 2003.</li>
            <li>Campbell, Joseph. <em>The Hero with a Thousand Faces</em>. Princeton University Press, 1949.</li>
            <li>Carroll, David. <em>A Manual of Writer's Tricks</em>. Writer's Digest Books, 1996.</li>
            <li>Clark, Roy Peter. <em>Writing Tools: 50 Essential Strategies for Every Writer</em>. Little, Brown and Company, 2006.</li>
            <li>Edgerton, Les. <em>Hooked: Write Fiction That Grabs Readers at Page One & Never Lets Them Go</em>. Writer's Digest Books, 2007.</li>
            <li>Frey, James. <em>How to Write a Damn Good Novel Part 1</em>. St. Martin's Griffin, 1987.</li>
            <li>Hart, Jack. <em>Storycraft: Complete Guide to Writing Creative Nonfiction</em>. University of Chicago Press, 2011.</li>
            <li>King, Stephen. <em>On Writing</em>. Scribner, 2000.</li>
            <li>King, Stephen. <em>Danse Macabre</em>. Berkley, 1981.</li>
            <li>King, Stephen. <em>‘Writing Successfully in 10 Minutes&#39;</em>. Unpublished, N/A.</li>
            <li>Macauley, Robie, & Lanning, George. <em>Technique In Fiction (2nd ed)</em>. Macmillan, 1979.</li>
            <li>Mayer, Bob. <em>70 Solutions to Common Writing Mistakes</em>. Writer's Digest Books, 2005.</li>
            <li>Mayer, Bob. <em>Fiction Writers Toolkit</em>. Writer's Digest Books, 2009.</li>
            <li>McKee, Robert. <em>Story: Substance, Structure, Style and the Principles of Screenwriting</em>. HarperCollins, 1997.</li>
            <li>Meredith, Robert, and John Fitzgerald. <em>Structuring your novel: From basic idea to finished manuscript</em>. Penguin Books, 2008.</li>
            <li>Mittelmark, Howard, and Sandra Newman. <em>How NOT to Write a Novel</em>. Harper Perennial, 2008.</li>
            <li>Sloane, William. <em>The Craft of Writing</em>. Touchstone, 1987.</li>
            <li>Smith Jr., James. <em>You Can Write a Novel</em>. Harper Perennial, 2010.</li>
            <li>Snyder, Blake. <em>Save the Cat!</em>. Michael Wiese Productions, 2005.</li>
            <li>Snyder, Blake. <em>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of</em>. Michael Wiese Productions, 2009.</li>
            <li>St. John, Cheryl. <em>Crafting Dynamic Dialogue</em>. Writer's Digest Books, 2004.</li>
            <li>Stein, Sol. <em>Stein On Writing</em>. St. Martin's Press, 1995.</li>
            <li>Stein, Sol. <em>How To Grow A Novel</em>. Back Bay Books, 1999.</li>
            <li>Stephens-Davidowitz, Seth. <em>Everybody Lies</em>. Random House, 2017.</li>
            <li>Yagoda, Ben. <em>How to Not Write Bad</em>. Riverhead Books, 2013.</li>
          </ol>

          <hr /> {/* ---------------------------------------------------------*/}


          {/* Back to Top Link */}
          <a href="#" className="mt-6 inline-block px-4 py-2 bg-white text-midBlue rounded border border-midBlue shadow hover:bg-gray-200 hover:text-midBluey hover:border-midBluey transition">Back to Top</a>
        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4 items-center md:items-start mt-6">

          {/* Index Box */}
          <div
            id="index-box"
            className="w-full sm:w-60 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-none text-xs leading-tight m-0 p-0 -ml-0">

              <li className="mb-px"><a href="#post-instructional-guides" className="hover:underline hover:text-white">I. Instructional Guides</a></li>
              <li className="mb-px"><a href="#post-fiction" className="hover:underline hover:text-white">II. Fiction</a></li>
              <li className="mb-px"><a href="#post-non-fiction" className="hover:underline hover:text-white">III. Non-Fiction</a></li>
              <li className="mb-px"><a href="#post-other" className="hover:underline hover:text-white">IV. Other</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Subtext;