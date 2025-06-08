// src/app/subtext.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import subtextBanner from '../assets/subtextbanner.jpg';
import Image from "next/image";

function Subtext() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Subtext</h1>

        <blockquote className="text-sm italic mb-2">
          “QUOTE.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— ATTRIBUTION</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={subtextBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-what-is-subtext">10.1: What is subtext?</h3>

          <p>Stories are made up of text and subtext. Text is the surficial and literal meaning conveyed by the words. Subtext is the latent implied (or belied) meaning. </p>
          <p>One way of thinking of it; Subtext conveys that people cohabit two worlds simultaneously: one of present reality, of words, sights, sounds and activity. And a second; the inner world of conscious and subconscious thought, desire, impulse and emotion.</p>
          <p>When your characters are in a position where they wouldn’t realistically express what they mean, you use subtext to communicate.</p>
          <p>Example:
            <FootnoteRef text="War of the Worlds, (2005)." />
          </p>

          <p className='italic'>Father: Here we go, some nice peanut butter sandwiches.</p>
          <p className='italic'>Daughter: I’m allergic to peanut butter.</p>
          <p className='italic'>Father: Since when?</p>
          <p className='italic'>Daughter: Birth.</p>

          <p>Subtext = bad father. This is conveyed more dynamically here in an interaction, than the daughter merely spinning off a cliché like "I hate you, you were never there."</p>
          <p>You can also convey subtext through action and description. For example, a game played between characters could be the arena for subtext of deadly opposition between rivals, or flirting between potential love interests. Just note the character saying, “You’re good at chess. Also, you’re cute. Let’s go out,” is not subtext, it’s just text, because there is only one way of reading it. Rather, it’s subtext when dialogue or action acquires a secondary, implied meaning, that is, there are two (not necessarily opposing) ways of reading the situation; the textual and the subtextual, e.g.</p>

          <p className='italic'>She: “You haven’t moved your King.”</p>
          <p className='italic'>He: “I’m waiting for the right moment.”</p>
          <p className='italic'>She: “You’ve had plenty of opportunities to get closer.”</p>
          <p className='italic'>He: “I want to surprise you.”</p>

          <p>Another example: In Flowers for Algernon,
            <FootnoteRef text="Flowers for Algernon, Daniel Keyes." />
            the main character is developing new romantic interest in the love interest, but doesn’t consciously realise it (yet). The protagonist idly reminisces; ‘she looked younger than I remembered.’ That is the textual/primary meaning, while the secondary/subtextual meaning is that he finds her more physically attractive.</p>
          <p>Another example: In The Dead Zone,
            <FootnoteRef text="The Dead Zone, Stephen King." />
            the secondary protagonist evaluates the relationship material of her date by thinking, ‘[He] never made [her] cry.’ The subtext being that a previous boyfriend has.</p>

          <h4>10.1.1 Types of Subtext</h4>
          <p>There are two kinds of subtext, let's call them:</p>

          <ol>
            <li>Concurrent, and</li>
            <li>Contradictory.</li>
          </ol>

          <h5>Concurrent</h5>
          <p>This is where the subtextual meaning – although different to – is not in contradiction with the textual meaning. That is, both meanings can be taken together, without affecting each other.</p>
          <p>For example, the way a character describes their house may be subtext for the way the character subconsciously feels about themselves. Description of the interior may also suggest things about the character’s mentality (messy, organized, artistic, etc). That the description/dialogue describes both the house and the character is not in contradiction – maybe the character intended the likeness. </p>
          <p>The title of the short story, ‘A Clean, Well-Lighted Place’
            <FootnoteRef text="Winner Take Nothing, Ernest Hemingway." />
            is subtext for a person’s place in the world, in that it’s opposite (a dirty, disorganized, dark place) refers to the larger universe. </p>

          <h5>Contradictory</h5>
          <p>This is where the textual and subtextual meanings are contradictory and cannot be taken together; if one is true, the other must be false.</p>
          <p>For example, if a character makes a joke at a funeral, the subtext may be that they didn’t actually care much for the deceased. This action is inconsistent with the character’s action in attending the funeral. Therefore, either the intention to attend is genuine, or the joke-telling was – they can’t both be.</p>

          <h4>10.1.2 	Why Use It?</h4>
          <p>Subtext mirrors the duality of the real world. Nothing is what it seems. People don’t always mean what they say and they hide their true intentions and feelings. To paint an authentic view of the world, you must show your insight into its duplicity.</p>
          <p>The author’s job is to portray the extreme heights and drops of human experience. However, it’s those extremes that people are least likely to expose to one another in the open. In a practical sense, people don’t normally go up to each other and say, ‘I hate you,’ or ‘I love you.’ Subtext is a compromise for this inherent contradiction – having your characters say what they mean without having to confess it.  </p>
          <p>Also, readers don’t want to be told the story; they want to find it out for themselves. If your story has no subtext, the reader will feel like they have no brain. </p>

          <h3 id="post-symbolism">10.2 Symbolism</h3>
          <p>Symbolism is far less important than subtext, so don’t worry too much about it, but it’s still worth knowing what it is and what it does.</p>
          <p>Differences between symbolism and subtext:</p>
          <ol>
            <li>Symbolism is conveyed abstractly, through colour, imagery, sound and other impressions, whereas subtext is conveyed more directly, through dialogue, mood and action;</li>
            <li>Symbolism doesn’t reveal your characters’ mental states and unspoken inclinations, whereas subtext does;</li>
            <li>Symbolism should not be consciously acknowledged by the reader; it should be noticed on some unassuming, subconscious level. Whereas, the point of subtext is to be consciously noticed. </li>
          </ol>

          <p>Subtext is absolutely necessary for a work pitched at anyone over the age of eight, however, symbolism is optional. Why not be simple about it: if you don’t need it, why have it? Where the work is complicated or subtle or has a lot of different thematic concerns, symbolism might be useful to flag and distinguish each concern. </p>
          <p>If you do use it, make sure it’s not obvious, but in the background to build mood. For instance:</p>
          <ol>
            <li>Good (subtle/effective) symbolism: A character is walking through a fairground. In the background, some circus attractions are described, including a tiger in a cage. The tiger in the cage symbolizes a mounting danger, or risk.</li>
            <li>Bad (clumsy/ineffective) symbolism: A character is walking through a park. In the background, a circus is setting up, including a tiger in a cage, symbolizing impending danger or risk. This is clumsy because the circus and tiger in cage draws attention to itself, and risks making itself known purely as symbolism. Don’t enable your reader become more of an expert on your story than you are.</li>
          </ol>
          <p>Symbolism is very easy to get wrong. There’s a risk that you could rely on symbolism as a substitute for thematic development through actual writing, for instance, using the colour red to denote love rather than having characters just act and interact in ways which suggest love, and assuming the reader will pick up on it. </p>

          <h4>10.2.1 	Types of Symbolism</h4>
          <p>There are generally two types of symbolism:</p>

          <ol>
            <li>External Imagery:</li>
          </ol>

          <p>This relies on an existing connection between image (logos) and meaning (semantic), e.g. spiders = fear; applies = temptation. The risk with this is if the reader doesn’t make the connection (e.g. they don’t fear spiders, or dislike apples) the effect fails. </p>

          <ol>
            <li>External Imagery:</li>
          </ol>

          <p>This creates a new connection between image and meaning, for instance, birds = anxiety; oranges = death. This is harder, relying more on organic writing ability, but can be memorably evocative if done right.</p>

          {/* ------------------------------------------------- comments Form footnotes --------------------------------------------- */}

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
            <p className="font-source-code-pro text-xs mt-1">Subtext is the deeper or hidden meaning implied by the story text.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-storytelling" className="hover:underline hover:text-white">10.1: What is subtext?</a></li>
              <li className="mb-px"><a href="#post-whatisastory" className="hover:underline hover:text-white">10.2: Symbolism</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/premise" className="hover:underline hover:text-white">Themes</a></li>
              <li className="mb-px"><a href="/plot" className="hover:underline hover:text-white">Conflict</a></li>
              <li className="mb-px"><a href="/synopsis" className="hover:underline hover:text-white">Dialogue</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Subtext;