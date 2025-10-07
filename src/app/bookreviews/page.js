// src/app/bookreviews.js
"use client";
import Link from "next/link";
import Layout from '../../components/Layout';
import BookList from '../../components/BookList';

import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import conflictBanner from '../assets/conflictbanner.jpg';
import Image from "next/image";

function BookReviews() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1>Book Reviews</h1>

        <blockquote>
          “QUOTE.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Leo Tolstoy</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={conflictBanner} alt="premise background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto -mt-5 px-0 text-black flex flex-col-reverse md:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <hr /> {/* ---------------------------------------------------------*/}



<BookList />

















          <h2 id="post-what-is-conflict">5.1. What is Conflict?</h2>
          <p>Conflict is struggle between your protagonist and their goals. Conflict is hardship but it is not fate, adversity, bad Luck, misfortune, or coincidence.  These things happen by blind accident or by random chance. They are caused by forces which are indifferent to your protagonist, have no explanation, no resolution, and no purpose. They make the existence of your protagonist unnecessary because they would have happened anyway, to someone else, or no one at all.</p>
          <p>That's not to say you can't write a flash flood or lottery win into your story; but it's not the conflict. The conflict is the struggle this causes to your protagonist. Also, accidents can happen in your story, but they must communicate important information. For instance, if accidents repeatedly happen it's not the accidents themselves that are important, it's that your character is accident-prone, or reckless, or impulsive and this is important for later. In fact, an unexpected accident, or misfortune is a great way of showing an unexpected side to your character; how they react in a stressful situation, etc.</p>
          <p>By contrast with fate and chance, conflict happens in measures, proportionate to your protag's goal progress. You can't decide what happens in your story based on the flip of a coin.</p>
          <p>Conflict also gives your character an opportunity to respond; they have some power to try to change the course of events (even if they fail). Blind misfortune, on the other hand, doesn't care who your protagonist is, and gives him no opportunity, and no recourse.</p>

          <div className="quote-box">
            <p>"Your character can't sit home passively and accidentally get a telephone call from friend Max, who then volunteers a crucial clue in the murder mystery. Your character has to think things over and then decide that he will call people seeking information. After calling several other people, he comes to Max on his list. He calls Max. Max doesn't want to tell him, but you make your character persist. Finally your character convinces Max to talk, and Max gives him the next clue." </p>
            <p><i>— Jack Bickham</i>
              <FootnoteRef text={`JACK BICKHAM,\nThe 38 Most Common Fiction Writing Mistakes (And How To Avoid Them).`} />
           </p>
            </div>

          <p>Notice how the conflict, by making the information harder to get, makes it seem more valuable and after the effort, will make the reader more interested to know what it is. This reinforces an economy of information (
            <Link href="/description#post-11-3" className="text-yellow-400 underline hover:text-yellow-300">
              see 11.3 Information Economy
            </Link>).</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-why-is-it-important">5.2. Why Is It Important?</h2>
          <p>Conflict is the most crucial element of a story. It's a thread which should run through every aspect of your story. However, conflict is difficult to write because it often means making things harder for your characters - and yourself, as the writer.</p>
          <p>If there is a lack of conflict in your work, it might be due to use of blocking or providing counteroffers which fall short of the initial promise.</p>
          <p>Any scene with conflict must be shown as if it's happening, not 'told' (summarized).</p>

          <hr /> {/* ---------------------------------------------------------*/}
          <h1 id="post-conflict-comments" className="text-base text-llBlue bg-bootstrapDark p-4">Leave a Comment</h1>

          <CommentForm />
          <CommentList />

          {/* ------------------------------------------------- end --------------------------------------------- */}

          {/* Back to Top Link */}
          <div className="mt-6 text-right">
            <a href="#" className="inline-block px-4 py-2 bg-bootstrapDark text-llBlue rounded border border-llBlue shadow hover:text-yellow hover:border-yellow transition">Back to Top</a>
          </div>

        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4 items-center md:items-start mt-6">
          {/* About Box */}
          <div className="w-full md:w-60 bg-bootstrapDark border border-black text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">About</div>
            <p className="font-source-code-pro text-xs mt-1">Conflict is made up in the obstacles which keep the protagonist struggling to attain their goals.</p>
          </div>

          {/* Index Box */}
          <div
            id="index-box"
            className="w-full md:w-60 bg-bootstrapDark  border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-none text-xs leading-tight m-0 p-0 -ml-0">
              <li className="mb-px"><a href="#post-what-is-conflict" className="text-xs hover:underline hover:text-white">Fiction: Classical Literature</a></li>
              <li className="mb-px"><a href="#post-what-is-conflict" className="text-xs hover:underline hover:text-white">Fiction: Mainstream</a></li>
              <li className="mb-px"><a href="#post-why-is-it-important" className="text-xs hover:underline hover:text-white">NF: Science</a></li>
              <li className="mb-px"><a href="#post-types-of-conflict" className="text-xs hover:underline hover:text-white">NF: Pseudoscience</a></li>
              <li className="mb-px"><a href="#post-conflict-does-not-equal-fight" className="text-xs hover:underline hover:text-white">NF: Religion and Atheism</a></li>
              <li className="mb-px"><a href="#post-how-to-create-conflict" className="text-xs hover:underline hover:text-white">Bio: Trauma</a></li>
              <li className="mb-px"><a href="#post-plans-must-be-complicated" className="text-xs hover:underline hover:text-white">Bio: Celebrity</a></li>
                            <li className="mb-px"><a href="#post-plans-must-be-complicated" className="text-xs hover:underline hover:text-white">LGBT</a></li>
              <li className="mb-px"><a href="#post-conflict-comments" className="text-xs hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default BookReviews;