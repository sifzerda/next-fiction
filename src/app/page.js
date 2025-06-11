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

        <blockquote className="text-sm italic mb-2">
          “If an eternal traveler should journey in any direction, he would find after untold centuries that the same volumes are repeated in the same disorder—which, repeated, becomes order: the Order. ”
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
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-center">About this Site</h3>

          <p className="text-sm mb-4 font-rubik">
            This is a smaller sibling blog to my other site Fiction Map. It's a resource
            for writers looking to improve their craft and write scarier, better horror stories.
          </p>

          <p className="text-sm font-rubik">
            Horror is a special genre. It is definable by what it does not possess:
            clear plot goals, antagonists, positive themes, tidy resolutions, and happy endings.
            If a reader is left with an overall sense of dread, confusion, bewilderment and upset, according
            to other genres, the story is a failure...
          </p>

        </div>

      </section>

    </Layout>
  );
}

export default About;
