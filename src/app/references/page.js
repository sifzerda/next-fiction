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
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">References</h1>

        <blockquote className="text-sm italic mb-2">
          “QUOTE.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— ATTRIBUTION</span>
        </blockquote>
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          {/* Instructional Guides */}
          <h3 id="post-instructional-guides" className="mt-6 font-semibold text-lg">Instructional Guides</h3>
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
            <li>King, Stephen. <em>‘Writing Successfully in 10 Minutes’</em>. Unpublished, N/A.</li>
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

          {/* Fiction */}
          <h3 id="post-fiction" className="mt-6 font-semibold text-lg">Fiction</h3>
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
            <li>King, Stephen. <em>‘Writing Successfully in 10 Minutes’</em>. Unpublished, N/A.</li>
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

          {/* Non-Fiction */}
          <h3 id="post-nonfiction" className="mt-6 font-semibold text-lg">Non-Fiction</h3>
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
            <li>King, Stephen. <em>‘Writing Successfully in 10 Minutes’</em>. Unpublished, N/A.</li>
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

          {/* Other */}
          <h3 id="post-other" className="mt-6 font-semibold text-lg">Other</h3>
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
            <li>King, Stephen. <em>‘Writing Successfully in 10 Minutes’</em>. Unpublished, N/A.</li>
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

          {/* ------------------------------------------------- comments Form footnotes --------------------------------------------- */}

          <hr className="my-6 border-t border-gray-400" />
          <h1 className="text-2xl font-bold mb-4">Leave a Comment</h1>

          <CommentForm />
          <CommentList />

          {/* Back to Top Link */}
          <a href="#" className="mt-6 inline-block px-4 py-2 bg-white text-midBlue rounded border border-midBlue shadow hover:bg-gray-200 hover:text-midBluey hover:border-midBluey transition">Back to Top</a>
        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4">
          {/* About Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">About</div>
            <p className="font-source-code-pro text-xs mt-1">Subtext is the deeper or hidden meaning implied by the story text.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-storytelling" className="hover:underline hover:text-white">10.1: What is subtext?</a></li>
              <li className="mb-px"><a href="#post-whatisastory" className="hover:underline hover:text-white">10.2: Symbolism</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/premise" className="hover:underline hover:text-white">Themes</a></li>
              <li className="mb-px"><a href="/plot" className="hover:underline hover:text-white">Conflict</a></li>
              <li className="mb-px"><a href="/synopsis" className="hover:underline hover:text-white">Dialogue</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Subtext;