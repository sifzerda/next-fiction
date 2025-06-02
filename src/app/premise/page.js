// src/app/premise.js
"use client"; 
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";

function Premise() {
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
        <Image src={premiseBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
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
            <p className="font-source-code-pro text-xs mt-1">A story is a collection of events which altogether create a meaningful whole that is greater than the sum of its parts.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-storytelling" className="hover:underline hover:text-white">1.1 Storytelling</a>
              </li>
              <li className="mb-px">
                <a href="#post-whatisastory" className="hover:underline hover:text-white">1.2 What Is A Story?</a>
              </li>
              <li className="mb-px">
                <a href="#post-mainelementsofstory" className="hover:underline hover:text-white">1.3 The Main Elements of a Story</a>
              </li>
              <li className="mb-px">
                <a href="#post-josephcampbellmyths" className="hover:underline hover:text-white">1.5 Joseph Campbell’s Myths</a>
              </li>
              <li className="mb-px">
                <a href="#post-mythsandmisconceptions" className="hover:underline hover:text-white">1.6 Myths and Misconceptions</a>
              </li>
              <li className="mb-px">
                <a href="#post-philosophyofstory" className="hover:underline hover:text-white">1.7 The Philosophy of Storytelling</a>
              </li>
              <li className="mb-px">
                <a href="#post-medium" className="hover:underline hover:text-white">1.8 Medium</a>
              </li>
              <li className="mb-px">
                <a href="#post-pixarstorytelling" className="hover:underline hover:text-white">1.9 Pixar Storytelling</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/premise" className="hover:underline hover:text-white">Premise</a>
              </li>
              <li className="mb-px">
                <a href="/plot" className="hover:underline hover:text-white">Plot</a>
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

export default Premise;