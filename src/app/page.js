// src/app/About.js
import Layout from '../components/Layout';
import splashPic from './assets/splashPic.jpg';
import Image from "next/image";

function About() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div id="searchbar" className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl text-yellow font-semibold mb-2 text-center">About</h1>

        <blockquote>
          “If an eternal traveler should journey in any direction, he would find after untold centuries that the same volumes are repeated in the same disorder — which, repeated, becomes order: the Order.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— 'The Library of Babel', Jorge Luis Borges</span>
        </blockquote>
      </div>

      {/* Centered Image Below Banner */}
      <div className="w-full flex justify-center mt-0">
        <Image
          src={splashPic}
          alt="Visual related to techniques"
          width={300}
          height={300}
          className="border border-black w-full max-w-[400px] h-auto object-cover rounded shadow"
          priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto -mt-5 px-4 text-black flex flex-col-reverse md:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-center">About this Site</h3>

          <p>
            This is a blog which stores a collection of advice and tips for fiction writing. It's a resource
            for writers looking to improve their craft and write better, more effective stories.
          </p>

          <p>
          The blog covers various topics, including: 
          storytelling, 
          premise, 
          plot construction, 
          themes, 
          conflict building, 
          scenes, 
          main characters, 
          supporting characters, 
          setting selection, 
          subtext, descriptions, 
          dialogue-writing, 
          suspense-building, 
          POV, 
          voice, 
          antagonists, 
          beginnings, 
          middles, 
          endings, 
          miscellaneous writing devices, 
          editing, and 
          marketing tools.
          </p>

        </div>

      </section>

    </Layout>
  );
}

export default About;
