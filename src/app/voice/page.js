// src/app/voice.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";

function Voice() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Voice</h1>

        <blockquote className="text-sm italic mb-2">
          “Style is […] a matter of knowing when one has said enough.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Hallie & Whit Burnett</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Somerset Maugham</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “Good writing is like a window pane.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— George Orwell</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “We pay attention to externals when we do not know what else to do with a poem.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— I. A. Richards</span>
        </blockquote>
      </div>

      {/* 
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={voiceBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
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

          <h3 id="post-what-is-voice">15.1: What is Voice?</h3>

          <p>'Voice' refers to the individuality of your writing. It's also referred to as 'style' i.e. writing style. Just like you can distinguish different people’s voices in a room, you should be able to distinguish different authors’ writing voices out of a pile of texts.</p>

          <p>Sol Stein says voice has two components: <i>'the originality of what is said and the originality of the way it is said.'</i>
            <FootnoteRef text="Sol Stein, Stein on Writing: A Master Editor of Some of the Most Successful Writers of Our Century Shares His Craft Techniques and Strategies." />
          </p>

          <p>Like speaking voice, there are a multiple indicators of writing voice:</p>
            <ol>
              <li>Vernacular, formality/colloqiualism, syntax and figures of speech;</li>
              <li>More reliance on concrete or abstract language;</li>
              <li>Inward looking (e.g. 'I' focused) or outward looking ('others', 'objects' and 'outsides');</li>
              <li>Serious, detached, emotional or light, witty, jovial;</li>
            </ol>

          <p>If you want an even clearer indicator of 'voice,' take different works and try reading paragraphs out loud (or listening to someone else read them out loud). Some styles sound natural spoken, whereas others do not survive the leap from thought to speech.</p>

          <p>Ben Yagoda
            <FootnoteRef text="Ben Yagoda, How to Not Write Bad." />
            explains: There was a spoken language before there was a written language, and good writing has always been intimately connected to the ear, whether the short sentences of Hemingway or the near-endless periods of Samuel Johnson and David Foster Wallace.</p>

          <p>Another term for this is the 'middle style'; sometimes it’s claimed to be “transparent” prose. That’s because it’s clear, precise, and concise and doesn’t call attention to itself.</p>
          <p>William Hazlitt gave it some other names, and a good characterization, back in 1821:</p>

          <p><i>“To write a genuine familiar or truly English style, is to write as anyone would speak in common conversation, who had a thorough command and choice of words, or who could discourse with ease, force, and perspicuity.”</i>
            <FootnoteRef text="William Hazlitt." />
          </p>

          <p>He also gives an example of voiceless – soulless – writing:</p>
          <p><i>‘Not only do journalists possess an undying passion to uncover and showcase relevant information to enhance the public’s knowledge on current events, but exhibit a willingness to go to great lengths to obtain stories fit to print.’ </i></p>
          <p>It has all the telltale signs of mindless writing: wordiness, clichés, and catchphrases poorly used; subjects and verbs that don’t line up; incorrect use of words; faulty parallelism.</p>

          <p>The purpose of style is not merely to sound “amusing or lyrical or emotive or profound or fun” but to:<FootnoteRef text="David Carroll, A Manual of Writer's Tricks." /></p>
          <ol>
            <li>Gain the audience's attention</li>
            <li>Hold their interest</li>
            <li>Win their long-term confidence so that they keep reading.</li>
          </ol>

          <h2 id="post-how-to-create-voice">15.2: How to Create Voice</h2>

          <p>You create your own writing voice/style in two ways:</p>

          <h5>(1) By practicing writing</h5>

          <p>The only way you can critique and develop your own writing is by actually writing and read and critically appraise what you’ve written, sometimes months or years after writing it. By doing so, you will attune yourself to your existing style and be able to decide what you like and dislike about it. This will inform the styles which you subsequently are inspired by.</p>
          <p>For instance, if you are concerned your writing waffles too much, you might take special notice of concise writing styles, and make effort to emulate them.</p>

          <h5>(2) By reading and incorporating other writing styles</h5>

          <p>The styles you incorporate will include writers you naturally write like, and writers you wish you wrote like. Somewhere in between you’ll find a happy medium. If you read a lot, you will also pick up lots of writing tricks and techniques from different authors - who, you won't particularly wish to write like - but which you will minutely be inspired by in very select ways. You will also critically learn the styles you don't want to emulate, and you should take note what those styles did which made you dislike them.</p>

          <h2 id="post-be-quiet">15.3: Be Quiet</h2>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="italic">One must be careful to distinguish between those who write beautiful things and those who write things beautifully
              <FootnoteRef text="Somerset Maugham." />
            </p>
          </div>

          <p>The best voice/style is the least noticeable. Like symbolism, voice is not something you want shoved in your face while you’re reading – it’s something you appreciate in afterthought.</p>

          <p>Bickham says:
            <FootnoteRef text="Jack Bickham, The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)." />
          </p>

          <p><code><i>“Your style and attitude in your stories should be like a clean pane of glass through which the reader sees the action. If </i>[your writing]<i> pose</i>[s] <i>and posture</i>[s]… [it'll] <i>draw attention to you as a writer, rather than to what's happening.” </i></code></p>

          <p>Mittelmark and Newman agree, saying:
            <FootnoteRef text="Howard Mittelmark and Sandra Newman, How NOT to Write a Novel." />
            words which draw attention to themselves draw attention away from the story you are telling and remind the reader that they are reading a story.</p>

          <p>Writing only works <i>"when both parties [reader and writer] agree beforehand on what words mean."</i></p>
          <p>They advise to choose only the word/s which are the best to express the idea.</p>

          <p>There's no point consciously striving for style, William Sloane says.
            <FootnoteRef text="William Sloane, The Craft of Writing." />
            Your style should recreate your tone of voice. The paradoxical thing about style is it's like an accent; you shouldn't be aware of your own.</p>

          <p>Don’t worry too much about actively modifying your writing style (and if you are consciously striving to write in a ‘voice’, then it isn’t your real voice). Focus more on writing in a natural, comfortable way, Also, realise that writing style may surface as much in your editing technique as your writing technique – which words you remove and how you rearrange and re-write your sentences.</p>

          <h3 id="post-contrast">15.4: Contrast</h3>

          <p>If you’re interested in learning what your writing voice sounds/reads like, try these two activities: Get a book by an author whose voice you’re familiar with, choose a random chapter and attempt the write the subsequent chapter. If you already know what happens in the subsequent chapter, your chapter will probably mimic that, and the difference will be the pure writing styles of the author and yourself.</p>
          <p>If you haven’t yet read the subsequent chapter, this activity will still work, but it will also show you as the differences in structuring, plotting and pacing, between the author and yourself, which is also informative (works better if you haven’t read the subsequent chapter). </p>

          {/* ---------------------------------------------------------------------------------------------- */}

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
            <p className="font-source-code-pro text-xs mt-1">A writer's voice is an expression of their personality or individuality created through their writing style: their word choice, syntax, and tone.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-what-is-voice" className="hover:underline hover:text-white">15.1: What is Voice?</a></li>
              <li className="mb-px"><a href="#post-how-to-create-voice" className="hover:underline hover:text-white">15.2: How to Create Voice</a></li>
              <li className="mb-px"><a href="#post-be-quiet" className="hover:underline hover:text-white">15.3: Be Quiet</a></li>
              <li className="mb-px"><a href="#post-contrast" className="hover:underline hover:text-white">15.4: Contrast</a></li>
              <li className="mb-px"><a href="#post-voice-comments" className="hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/premise" className="hover:underline hover:text-white">Premise</a></li>
              <li className="mb-px"><a href="/plot" className="hover:underline hover:text-white">Plot</a></li>
              <li className="mb-px"><a href="/synopsis" className="hover:underline hover:text-white">Synopsis</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Voice;