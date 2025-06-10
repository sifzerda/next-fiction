// src/app/theLastWords.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
//import Link from "next/link";

function TheLastWords() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">The Last Words</h1>

        <blockquote className="text-sm italic mb-2">
          “If you want a happy ending, that depends, of course, on where you stop your story”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Orson Welles</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “A great ending is inevitable yet unexpected.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Aristotle</span>
        </blockquote>
      </div>

      {/* 
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={premiseBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>
*/}

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={premiseBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-storytelling" className="mb-2 font-semibold">19.1: What is an Ending?</h3>

          <p>In order to know what an ending is supposed to do, you need to know what an ending is.</p>

          <h4>19.1.1 	Memory</h4>
          <p>The beginning of a story presumes ‘tabula rasa,’ i.e. you don’t need any foreknowledge for it to work. By contrast, an ending requires the foreknowledge of the plot. </p>
          <p>Your ending will be pointless if your reader approaches it ‘blank slate’. This may happen because you didn’t work in enough information throughout the course of your story to ‘remind’ your reader why the ending makes sense. Sometimes a story will try to short circuit this problem by inserting a flashback at the ending to do the work, but this is ‘cheating’ and should be avoided.  </p>

          <h4>19.1.2 	Meaningfulness</h4>
          <p>Remember a story is not just a series of events (see chapter 1: Story), there is some overall meaningfulness which makes the events transcend mere miscellaneous factual information and become self-contained. </p>
          <p>Aristotle’s quote at the start of this chapter illustrates this: ‘inevitable’ such that you could not remove the ending without damaging the whole work.  </p>

          <h3 id="post-ending-a-scene" >19.2: Ending a Scene</h3>
          <p>Your story may not have just one ending. If you raise live issues throughout your story (as you should) each of these will have endings, giving your story several ‘mini’ endings. These are also good practice for writing your ultimate ending.</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p>Your endings will be better if you remember that other parts of your story need endings, too. Sentences have endings. Paragraphs have endings. [And]…each of these mini-endings anticipates your finale</p>
            <p></p><i>— Roy Clark
              <FootnoteRef text="Roy Peter Clark, Writing Tools: 50 Essential Strategies for Every Writer." /></i>
          </div>

          <p>He’s not referring to the words that come at the end of the sentences and paragraphs, but sentences and paragraphs throughout your writing.</p>
          <p>An issue raised in one scene can be ‘ended’ or concluded in another scene. To do this, the sentences/paragraphs should reflect each other somehow. Make use of techniques such as:</p>

          <h4>19.1.1 	Repetition  </h4>
          <p>Repeating key words (particularly when they appear nowhere else in the story) can be a good way to flag an ending.</p>
          <p>See 18.3.10 Purposeful Repetition.</p>

          <h4>19.1.2 	Callback </h4>
          <p>A callback is any reference to previous information. This may include a character remembering something (better that they encounter something in-story that causes them to remember), or a full on flashback. The first time the information comes in, it may be left unconcluded until you callback to it in a later scene, e.g.</p>
          <p className="italic">The air siren split through the sky, like the first time it had played when I’d arrived in the compound and Charlie’s dead eyes had stared straight through me: “It’s not real today. One day it will be.”</p>
          <p className="italic">He did not know that the enemy had been killed three years ago. But the siren was as real today as it was then, because the enemy was already here. It was inside the perimeter, inside our minds. The siren went on, and on, and it never stopped.  </p>

          <h2 id="post-ending-a-chapter">19.3: Ending a Chapter</h2>
          <p>The end of a chapter should simultaneously have a sense of conclusion and continuation, or open-endedness. The reader must be rewarded for reaching the end, but enticed to continue. Resolve a small issue/s while keeping others open.</p>
          <p>To use a visual metaphor, it’s like you’re fishing with two rods at the same time; as you cast one line out, you’re pulling the other in, and you’re constantly alternating. As you conclude whether or not one line has caught something, the other is out there, yet unconfirmed. Never pull both lines in at the same time (even if you plan to cast them again at the start of the next chapter). If you lose your lines any time before the end of the story, you risk losing the reader as well. Reading a novel is work; the reader will take upon any excuse to stop reading at any point before the very end. Your ongoing goal is to prevent that – never be complacent that you have the reader now, you have them until the end. Always leave at least one ‘line,’ – or question/issue unanswered – for the reader to keep reading and wondering about. </p>
          <p>Look at the example of live issues raised by Sphere under section ‘2.3 Structuring the Plot with Interest.’ In Sphere, a single chapter never answers all of the questions by the end – and even the final chapter left some minor questions open.</p>
          <p>Look at this example of a chapter ending from ‘The Dead Zone’ by Stephen King:</p>
          <p className="italic">“I love you, Sarah,” Johnny said. So it was out, it couldn’t be called back, it hung between them in the moving car waiting for someone to do something about it. She did what she could.   </p>
          <p className="italic">“Thank you, Johnny.” They drove on in a comfortable silence.   </p>
          <p>Previously, love between these characters burgeoned throughout the chapter (and previous chapters). Now, abruptly, the issue is concluded; one character says ‘I love you,’ and the other conspicuously does not respond in kind. It resolves that she doesn’t love him (yet), but keeps a live issue open that she may in future, rather than if she just said ‘I love you,’ back. This ensures the reader sticks around to find out if she changes her mind, and if she doesn’t, how will the other react?</p>

          <h3 id="post-ending-an-act">19.4: Ending an Act</h3>
          <p>NOTHING HERE YET</p>

          <h3 id="post-ending-the-story">19.4: Ending the Story</h3>
          <p>NOTHING HERE YET</p>

          {/* ------------------------------------------------- Comment Form footnotes --------------------------------------------- */}

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
            <p className="font-source-code-pro text-xs mt-1">The end of a piece of writing should resolve or conclude previously established issues and conflict.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-what-is-an-ending" className="hover:underline hover:text-white">19.1: What is an Ending?</a></li>
              <li className="mb-px"><a href="#post-ending-a-scene" className="hover:underline hover:text-white">19.2: Ending a Scene</a></li>
              <li className="mb-px"><a href="#post-ending-a-chapter" className="hover:underline hover:text-white">19.3: Ending a Chapter</a></li>
              <li className="mb-px"><a href="#post-ending-an-act" className="hover:underline hover:text-white">19.4: Ending an Act</a></li>
              <li className="mb-px"><a href="#post-ending-the-story" className="hover:underline hover:text-white">19.5: Ending the Story</a></li>
              <li className="mb-px"><a href="#post-comments" className="hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/theFirstWords" className="hover:underline hover:text-white">The First Words</a></li>
              <li className="mb-px"><a href="/theNextWords" className="hover:underline hover:text-white">The Next Words</a></li>
              <li className="mb-px"><a href="/editing" className="hover:underline hover:text-white">Editing</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default TheLastWords;