// src/app/suspense.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";

function Suspense() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1>Suspense</h1>

        <blockquote>
          “You do not keep the audience's interest by giving it information, but by withholding information.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Robert McKee</span>
        </blockquote>
        <blockquote>
          “The easiest thing for a reader to do is to quit reading.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Michael Gartner</span>
        </blockquote>
        <blockquote>
          “Make them laugh. Make them cry. But, most of all, make them wait.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Charles Dickens</span>
        </blockquote>
      </div>

      {/* 
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={suspenseBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>
*/}

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={premiseBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto -mt-5 px-0 text-black flex flex-col-reverse md:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-storytelling">13.1 What is Suspense?</h2>
          <p>Suspense is basically just holding off on resolving conflict or answering plot-related questions for as long as possible. It&#39;s necessary if you want the reader to keep reading until the end. </p>
          <p>Burnett and Burnett
            <FootnoteRef text={`HALLIE BURNETT AND WHIT BURNETT,\nFiction Writer's Handbook.`} />
            says suspense is “that half-revealed something which makes us ask for more,” and is ‘essential&#39; even if only “a matter of how a girl will make up her mind, or a young man turn his back on his fears.”</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-how-to-create-suspense">13.2 How to Create Suspense</h2>
          <p>One way of providing suspense is, obviously, to stubbornly refuse to provide a resolution until the very end of the story.</p>
          <p>The problem is your conflict risks going ‘cold&#39; for the reader; they might assume the conflict is of no importance and probably won&#39;t be resolved by the end, and subsequently stop reading.</p>
          <p>Alternatively, you want to provide build ups of suspense on the way to the resolution; making small promises which add up to your resolution being really worthwhile, whilst reminding the reader that the conflict hasn&#39;t been forgotten, and teasing that the end will provide the answer.</p>
          <p>I like Sol Stein&#39;s
            <FootnoteRef text={`SOL STEIN,\nOn Writing.`} />
            workmanlike definition of suspense as where the reader wants something to happen and it isn&#39;t happening yet, or the reader wants something to stop, and it doesn&#39;t. However, it doesn&#39;t capture the variety of ways you can invite suspense into your story. The reader might: </p>
          <ol>
            <li>Want something to happen, or </li>
            <li>Want something to <i>not</i> happen, or  </li>
            <li>Not know, of multiple, terrible outcomes, which is worse, or  </li>
            <li>Of a ‘too good to be true&#39; outcome, how it could go wrong, or  </li>
            <li>Of a guaranteed confrontation, when the confrontation will actually occur, and under what circumstances, etc. </li>
          </ol>

          <p>The layman definition of suspense tends to associate suspense building with raising the stakes. That is one form of suspense building but it&#39;s not the only one. In order to build suspense, all you need to do is supply information, or create events which lend the final outcome more weight.</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-tension">13.3 Tension</h2>

          <h3>13.3.1 What Is Tension?</h3>
          <p>Sol Stein defines this as a separate concept from suspense. I tend to think of it as an offshoot of suspense, or suspense in miniature. Generally, suspense refers to the protraction of the main plotline. Tension refers to the little obstacles which are auxiliary to the main plotline, but still delay the main plotline&#39;s resolution.</p>
          <p>Here&#39;s what suspense is not:
            <FootnoteRef text={`STEPHEN KING,\nThe Dead Zone.`} />
          </p>

          <div className="quote-box">
            <p className="italic">A thick feeling of tension had begun to creep into his body.</p>
          </div>
          <p>As with most writing effects, you cannot generate tension merely by telling your reader it&#39;s there. You have to create it.</p>

          <h3>13.3.2 How to Create Tension</h3>
          <p>A basic way of increasing tension is to take your protagonist&#39;s plan and shoot little holes in it. They have to fire a gun; they miss. They have to make a delivery, or pick someone up; they&#39;re late. This not only adds tension, it makes your story sound more realistic because life events rarely turn out exactly as planned.</p>
          <p>You can increase tension merely by rearranging sentences and how information is delivered – this affects pacing, i.e. protracting or delaying how quickly narrative points are resolved. </p>
          <p>Generally, to increase tension, make the pacing frustrate the protagonist&#39;s intention. If your protagonist needs time, speed the pacing up. If your protagonist needs to be fast, slow the pacing down.</p>
          <p>You slow pacing by adding detail. A way to speed pacing up is what Sol Stein calls ‘skipping for effect&#39;. This is where you selectively omit information. For example:
            <FootnoteRef text={`JOHN CHEEVER,\nThe Country Husband.`} /></p>

          <div className="quote-box">
            <p className="italic">He washed his body, shaved his jaws, drank his coffee, and missed the seven-thirty-one.</p>
          </div>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-pacing">13.4 Pacing</h2>

          <h3>13.4.1 	What Is Pacing</h3>

          <p>Pacing describes several things:</p>

          <ol>
            <li>The speed you give the reader information;</li>
            <ol>
              <li>a.	This may relate to the speed the protagonist makes mental connections or the speed they take in mental stimuli;</li>
            </ol>
            <li>The speed of singular events being described;</li>
            <ol>
              <li>This is the speed gauged of a single physical, determined start to finish;</li>
            </ol>
            <li>The speed of a chain of multiple events being described;</li>
            <ol>
              <li>Of related events (or a single event comprised of multiple smaller events) this is the overall sense of how quickly those events happened, one after another.</li>
            </ol>
          </ol>

          <h3>13.4.2 	Why is it important?</h3>

          <p>Roy Clark
            <FootnoteRef text={`ROY PETER CLARK,\nWriting Tools: 50 Essential Strategies for Every Writer.`} />
            lists three reasons to manipulate a story&#39;s pacing:</p>

          <ol>
            <li>To simplify the complex; </li>
            <li>To create suspense;</li>
            <li>To focus on the emotional truth.</li>
          </ol>

          <p>By ‘emotional truth&#39; Clark means that long sentences sound more ‘academic&#39; and intellectual, allowing time to process complicated ideas, whereas short sentences sound more powered by raw emotional, as if observations and thoughts are whipping along on an almost subconscious level.</p>
          <p>For instance, shorter sentences are more appropriate to describe a person dying quickly, not only to convey the quick passage of time, but to convey that, you don&#39;t have complicated thoughts in that situation; only immediate, vivid and emotional ones.</p>
          <p>However, when you want to let the reader rest and think, you go for longer sentences.</p>
          <p>Pacing also influences how fast the reader determines events are happening. Events may be physical, or mental (e.g. the speed the protagonist makes mental connections or the speed they take in mental stimuli). Because many physical events occur to your protagonist as mental stimuli, there is overlap.</p>
          <p>By example, two Stephen King stories: </p>

          <h5>I. Fast Pacing:</h5>
          <p>In Children of the Corn, the events happen within a day or so. This largely because the circumstance of the plot; a bunch of townspeople have been murdered and the protagonists are captives of the remaining children. The plot events must play out very quickly after this point to manage the likelihood of the protagonists running away or calling authorities – on that logic, there is no sense drawing the events out longer.</p>
          <h5>II. Slow Pacing</h5>
          <p> In The Dead Zone, the events happen across many years. While the protagonist is in a coma, events aren&#39;t skipped over until he wakes up, but continue to be described to convey the long passage of time and sense of change while he is comatose.</p>
          <p>After he has awoken, the rest of the story plays out across a few years between the protagonist making a psychic prediction, and it coming true. This is to convey how far into the future he can see, and the sense of uncertainty or dread in the meantime.</p>

          <h3>13.4.3	No-Clock Pacing</h3>
          <p>It&#39;s tempting to reduce pacing to literal references of the passage of time, e.g.</p>
          <div className="custom-box">
            <p><i>We left two hours later.</i></p>
            <p><i>The city was a twenty minute drive away.</i></p>
            <p><i>I worked at this job for six months before they fired me.</i></p>
          </div>

          <p>Etc.</p>

          <p>There are two problems with this: (1) it&#39;s too formulaic and, (2) reminding your reader the passage of time in the story risks reminding them of the passage of time in real life, and that is the opposite of what a story – in trying to immerse someone – is aiming to do.</p>
          <p>Try to convey the passage of time by the activities your characters are doing, or observations going around them, e.g. </p>

          <div className="quote-box">
            <p><i>The dance floor eventually gets crowded, mostly with guys, but the vibe is good. I have about ninety beers as another incredible African sky turns from blue to orange to purple to black. The music gets louder and more insistent. I soldier through broken conversations with drunken strangers.
              <FootnoteRef text={`CHUCK THOMPSON,\nTo Hellholes and Back.`} />
            </i></p>
          </div>

          <p>Multiple parts of this paragraph jump time ahead – ‘ninety beers&#39;, the sky changing colour, several ‘conversations.&#39;</p>

          {/* ------------------------------------------------- comments Form footnotes --------------------------------------------- */}

          <hr /> {/* ---------------------------------------------------------*/}
          <h1 id="post-suspense-comments" className="text-base text-llBlue bg-bootstrapDark p-4">Leave a Comment</h1>

          <CommentForm />
          <CommentList />

          {/* Back to Top Link */}
          <div className="mt-6 text-right">
            <a href="#" className="inline-block px-4 py-2 bg-bootstrapDark text-llBlue rounded border border-llBlue shadow hover:text-yellow hover:border-yellow transition">Back to Top</a>
          </div>

        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4 items-center md:items-start mt-6">
          {/* About Box */}
          <div className="w-full md:w-60 bg-bootstrapDark border border-black text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">About</div>
            <p className="font-source-code-pro text-xs mt-1">Suspense is created by withholding relevant information from the reader, or leaving conflict unresolved.</p>
          </div>

          {/* Index Box */}
          <div
            id="index-box"
            className="w-full md:w-60 bg-bootstrapDark  border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-none text-xs leading-tight m-0 p-0 -ml-0">
              <li className="mb-px"><a href="#post-what-is-suspense" className="hover:underline hover:text-white">13.1 What is Suspense?</a></li>
              <li className="mb-px"><a href="#post-how-to-create-suspense" className="hover:underline hover:text-white">13.2 How to Create Suspense</a></li>
              <li className="mb-px"><a href="#post-tension" className="hover:underline hover:text-white">13.3 Tension</a></li>
              <li className="mb-px"><a href="#post-pacing" className="hover:underline hover:text-white">13.4 Pacing</a></li>
              <li className="mb-px"><a href="#post-suspense-comments" className="hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div
            id="also-see-box"
            className="w-full md:w-60 bg-bootstrapDark  border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight m-0 p-0 -ml-0">
              <li className="mb-px"><a href="/conflict" className="hover:underline hover:text-white">Conflict</a></li>
              <li className="mb-px"><a href="/subtext" className="hover:underline hover:text-white">Subtext</a></li>
              <li className="mb-px"><a href="/writingDevices" className="hover:underline hover:text-white">Writing Devices</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Suspense;