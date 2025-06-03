// src/app/antagonists.js
"use client"; 
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import antagBanner from '../assets/antagbanner.jpg'; 
import Image from "next/image";
import Link from "next/link";

function Antagonists() {
return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Premise</h1>

        <blockquote className="text-sm italic mb-2">
          “Whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Herman Hesse</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “When the storytelling goes bad in society, the result is decadence.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Aristotle</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={antagBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex flex-col-reverse sm:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-storytelling" className="mb-2 font-semibold">1.1 Storytelling</h3>

          <p className="text-sm mb-4 font-rubik">
            The most important skill you need to write fiction is storytelling. Robert McKee defines storytelling as: <i>“the creative conversion of life itself to a more powerful, clearer, more meaningful experience.” </i>
            <FootnoteRef text="Robert McKee, Story, Substance, Structure, Style and the Principles of Screenwriting." />
          </p>

          <p className="text-sm mb-4 font-rubik">
            He says the essence of storytelling is the ability to evoke a story with a single, silent image. That is the basis of what a storyteller is trying to do.
          </p>

          <h3 id="post-whatisastory" className="mb-2 font-semibold">1.2 What is a Story?</h3>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.2.2 The Opposite of Expectation</h4>
















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
            <p className="font-source-code-pro text-xs mt-1">The antagonist is the main character whose goal provides the main source of conflict and obstacle to the protagonist.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-what-is-an-antagonist" className="hover:underline hover:text-white">16.1: What is an Antagonist?</a>
              </li>
              <li className="mb-px">
                <a href="#post-importance-antagonist" className="hover:underline hover:text-white">16.2: The Importance of Antagonism</a>
              </li>
              <li className="mb-px">
                <a href="#post-antagonistic-forces" className="hover:underline hover:text-white">16.3: Antagonistic Forces</a>
              </li>
              <li className="mb-px">
                <a href="#post-degrees-of-antagonism" className="hover:underline hover:text-white">16.4: Degrees of Antagonism</a>
              </li>
              <li className="mb-px">
                <a href="#post-negation-of-negation" className="hover:underline hover:text-white">16.5: The Negation of a Negation</a>
              </li>
              <li className="mb-px">
                <a href="#post-protagonist=antagonist" className="hover:underline hover:text-white">16.6: Protagonist = Antagonist</a>
              </li>
              <li className="mb-px">
                <a href="#post-how-to-create-antagonist" className="hover:underline hover:text-white">16.7: How to Create an Antagonist</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/conflict" className="hover:underline hover:text-white">Conflict</a>
              </li>
              <li className="mb-px">
                <a href="/mainCharacters" className="hover:underline hover:text-white">Main Characters</a>
              </li>
              <li className="mb-px">
                <a href="/synopsis" className="hover:underline hover:text-white">Synopsis</a>
              </li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Antagonists;