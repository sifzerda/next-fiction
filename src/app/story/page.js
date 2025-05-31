// src/app/story.js
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import storyBanner from '../assets/storybanner.png'; // Adjust the path as necessary
import Image from "next/image";

function Story() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold mb-2 text-center">Story</h1>

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
      <Image src={storyBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2 text-center">About the Techniques</h2>

          <h3 id="post 1-1" className="mb-2 font-semibold">1.1 Storytelling</h3>

          <p className="text-sm mb-4 font-rubik">
            This is a smaller sibling blog to my other site Fiction Map. It's a resource
            for writers looking to improve their craft and write scarier, better horror stories.
          </p>

          <h3 id="home" className="mb-2 font-semibold">Blog</h3>

          <p className="text-sm mb-4 font-rubik">
            This is a smaller sibling blog to my other site Fiction Map. It's a resource
            for writers looking to improve their craft and write scarier, better horror stories.
          </p>

          <h3 id="home" className="mb-2 font-semibold">Contact</h3>

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
            <p className="font-source-code-pro text-xs mt-1">Learn more about our story and mission.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#home" className="hover:underline hover:text-white">Home</a></li>
              <li className="mb-px"><a href="#blog" className="hover:underline hover:text-white">Blog</a></li>
              <li className="mb-px"><a href="#contact" className="hover:underline hover:text-white">Contact</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/types" className="hover:underline hover:text-white">Types</a>
              </li>
              <li className="mb-px">
                <a href="/scarywords" className="hover:underline hover:text-white">Scary Words</a>
              </li>
              <li className="mb-px">
                <a href="/tropes" className="hover:underline hover:text-white">Tropes</a>
              </li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Story;