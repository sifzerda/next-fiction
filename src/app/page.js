// src/app/About.js
import Layout from '../components/Layout';
import Image from "next/image";

function About() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="bg-bootstrapDark border border-black text-white rounded-t-md rounded-b-none px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto shadow">
        <h1 className="font-amatic-sc text-xl font-semibold mb-2 text-center">About</h1>

        <blockquote className="text-sm italic mb-2">
          “By this art you may contemplate the variation of the 23 letters.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— 'The Library of Babel', Jorge Luis Borges</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image
          src="/your-image.jpg" // Replace with actual path
          alt="Atmospheric horror background"
          width={1600}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-10 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">About the Techniques</h3>

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
