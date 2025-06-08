// src/app/secondaryCharacters.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import secoBanner from '../assets/secobanner.png';
import Image from "next/image";

function SecondaryCharacters() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Secondary Characters</h1>

        <blockquote className="text-sm italic mb-2">
          “Fictional characters are made of words, not flesh; they do not have free will, they do not exercise volition. They are easily born, and as easily killed off.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— John Banville</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “...[E]ach character has to have an agenda, and you need to know what they want and what they are willing to do to get it...and be mindful of it throughout the story.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Christopher Moore</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={secoBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-what-is-a-secondary-character" className="mb-2 font-semibold">8.1: What is A Secondary Character?</h3>

          <p>DEFINE A SECONDARY CHARACTER.</p>

          <h3 id="post-orbit-the-main-character">8.2: Orbit the Main Character</h3>
          <p>Every secondary character should orbit a main character, otherwise it's worth asking whether they should be in the story.</p>
          <p>Less important characters should be introduced only as necessary. For instance, if a character attends school, you need to depict teachers and other students, but if school isn’t a major setting, they don’t need as much attention and should only behave and be described in ways which say something about the important characters. In other words, it’s a bit like the main characters are planets and the side characters are moons which orbit around them. The behavior of side characters should be designated by the character arc or trajectory of – where do you want your main characters to go and how will the side characters help/hinder them? What do you want to say about your main characters and how will that description be communicated (expressly or by conduct) by the side characters? Side characters are like the wheels of a car, or the oil that lubricates the wheels; whereas main characters are the passengers (the plot is the driver). When the bus stops, the wheels stop and are forgotten, and it’s the passengers who get off and arrive at the destination.</p>
          <p>You should avoid having your side characters say things heavily charged with emotion (joy, fear, anger, lust). It's not going to have a meaningful effect because side characters do not have arcs, so you have provided no build-up for their reaction. Therefore, worst of all, the spontaneity may in fact be taken for comedy.</p>

          <h3 id="post-fire-some-extras">8.3: Fire Some Extras</h3>
          <p> Every side character must serve an individual purpose. If your protagonist has a group of friends, every single member of that group must serve a separate function in the story – and not ‘the female friend,’ ‘the black friend,’ ‘the gay friend,’ etc. If your protagonist only needs one friend, then give them only one friend.</p>

          <h3 id="post-the-perfect-friend">8.4: The Perfect Friend</h3>
          <p>Fiction writing has a cliché about protagonists having ‘perfect’ friends. These are either the ‘people you wish were your friends’ or the sycophantic lapdogs of the protagonist. </p>
          <p>The role of the first kind is to liven up the protagonist’s life, introducing the protagonist to interesting new people, places and activities. The best friend is always ‘up to 11,’ cheerful, adventurous, hilarious and a little crazy. It’s that person who goads the protagonist to try new things because ‘why not?’ The protagonist wishes they were this person.</p>
          <p>The role of the second kind is to trumpet the glories of the protagonist, to pick up the protagonist when they’re down and doubtful; provide the shoulder to cry on, defend the protagonist’s honour no matter. They are fiercely loyal, humble, generous, and generally well-adjusted. This person wishes they were the protagonist.</p>
          <p>You want to avoid writing either of these characters. Going by writing standards, these characters are far from perfect. </p>
          <p>The problem is these characters don’t challenge your protagonist in any way. Best friend characters should put your protagonist in situations which expose aspects of your protagonist, but not necessarily gratify them. Characters should disagree and compromise.</p>

          <h3 id="post-idiosyncratic-characters">8.5: Idiosyncratic Characters</h3>
          <h5>(1) TYPE </h5>
          <p>.... </p>
          <p>.... </p>

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
            <p className="font-source-code-pro text-xs mt-1">Secondary characters support a main character and are only relevant so much as they do so.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-storytelling" className="hover:underline hover:text-white">8.1: What is A Secondary Character?</a>
              </li>
              <li className="mb-px">
                <a href="#post-whatisastory" className="hover:underline hover:text-white">8.2: Orbit the Main Character</a>
              </li>
              <li className="mb-px">
                <a href="#post-mainelementsofstory" className="hover:underline hover:text-white">8.3: Fire Some Extras</a>
              </li>
              <li className="mb-px">
                <a href="#post-josephcampbellmyths" className="hover:underline hover:text-white">8.4: The Perfect Friend</a>
              </li>
              <li className="mb-px">
                <a href="#post-mythsandmisconceptions" className="hover:underline hover:text-white">8.5: Idiosyncratic Characters</a>
              </li>
              <li className="mb-px">
                <a href="#post-philosophyofstory" className="hover:underline hover:text-white">8.6: The Role Model</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/premise" className="hover:underline hover:text-white">Main Characters</a>
              </li>
              <li className="mb-px">
                <a href="/plot" className="hover:underline hover:text-white">Dialogue</a>
              </li>
              <li className="mb-px">
                <a href="/synopsis" className="hover:underline hover:text-white">POV</a>
              </li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default SecondaryCharacters;