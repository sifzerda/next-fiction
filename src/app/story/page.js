// src/app/story.js
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import storyBanner from '../assets/storybanner.png'; // Adjust the path as necessary
import Image from "next/image";

function Story() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="bg-bootstrapDark border border-black text-white rounded-t-md rounded-b-none px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto shadow">
        <h1 className="font-geistSans text-xl font-semibold mb-2 text-center">STORY</h1>

        <blockquote className="text-sm italic mb-2">
          “It is a mistake to fancy that horror is associated inextricably with darkness, silence, and solitude.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— H. P. Lovecraft</span>
        </blockquote>

        <blockquote className="text-sm italic">
          “More disturbing than the unknown is a distortion of the familiar.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Magic: The Gathering</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image
          src={storyBanner} // Replace with actual path
          alt="Atmospheric horror background"
          width={1600}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-1 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">About the Techniques</h2>

          <h3 id="home">Home</h3>

          <p className="text-sm mb-4 font-rubik">
            These horror techniques leverage language, pacing, and atmosphere to provoke emotional and psychological responses.
            Carefully chosen words and imagery distort what’s familiar, creating unease and suspense in the reader’s mind.
          </p>

          <h3 id="blog">Blog</h3>

          <p className="text-sm font-rubik">
            Below are key elements often used in horror storytelling to enhance tension and unsettle the audience.
          </p>

          <h3 id="contact">Contact</h3>

          <h1 className="text-2xl font-bold mb-4">Leave a Comment</h1>

          <CommentForm />
          <CommentList />

         {/* Back to Top Link */}
          <a href="#" className="mt-6 inline-block px-4 py-2 bg-white text-black rounded border border-gray-400 shadow hover:bg-gray-200 transition">Back to Top</a>

        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4">
          {/* About Box */}
          <div className="w-36 bg-minty border border-black text-black flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-red-500">About</div>
            <p className="font-source-code-pro text-xs mt-1">Learn more about our story and mission.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-minty border border-black text-black flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-red-500">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li className="mb-px">
                <a href="#blog" className="hover:underline">Blog</a>
              </li>
              <li className="mb-px">
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-minty border border-black text-black flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-red-500">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/types" className="hover:underline">Types</a>
              </li>
              <li className="mb-px">
                <a href="/scarywords" className="hover:underline">Scary Words</a>
              </li>
              <li className="mb-px">
                <a href="/tropes" className="hover:underline">Tropes</a>
              </li>
            </ol>
          </div>

        </div>


      </section>

    </Layout>
  );
}

export default Story;