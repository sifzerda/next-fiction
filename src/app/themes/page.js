// src/app/themes.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import themesBanner from '../assets/themesbanner.jpg';
import Image from "next/image";

function Themes() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Themes</h1>

        <blockquote className="text-sm italic mb-2">
          “There are half a dozen subjects that I return to time and time again...[b]ecause most of my favourite writers do that, to hunt down the same topic or theme from different directions each time.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— David Bowie</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “Thematic significance in a novel arises from an exaggerated impression of life.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Mark Twain</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “To produce a mighty book, you must choose a mighty theme.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Ernest Hemingway</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={themesBanner} alt="premise background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex flex-col-reverse sm:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-what-is-theme" className="mb-2 font-semibold">4.1: What is Theme?</h3>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="text-sm mb-4 font-rubik">[Stories with themes contain] “experiences [that] comment on life, leaving the reader with some conclusion about the nature of existence that can be factually verified.”</p>
            <span className="italic">— Robert Meredith and John Fitzgerald
              <FootnoteRef text="Robert Meredith and John Fitzgerald, Structuring Your Novel: From Basic Idea to Finished Manuscript (Everyday Handbook)." />
            </span>
          </div>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="text-sm mb-4 font-rubik">[Themes are v]alues, the positive/negative charges of life, [which] are at the soul of our art. The writer shapes story around a perception of what's worth living for, what's worth dying for, what's foolish to pursue, the meaning of justice, truth — the essential values.</p>
            <span className="italic">— Robert McKee
              <FootnoteRef text="Robert McKee, Story: Substance, Structure, Style and the Principles of Screenwriting." />
            </span>
          </div>

          <p className="text-sm mb-4 font-rubik">Themes can be simple and absolute, or complex and variable. They can be optimistic or pessimistic. They can affirm the status quo or attempt to subvert it. They can be cliché or novel, obtuse or illuminating, pretentious or unassuming, cerebral or illogical. They can be familiar and comforting or bizarre and disconcerting. One of the most common themes in stories is that good ultimately triumphs over evil.</p>
          <p className="text-sm mb-4 font-rubik">Hart
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            which just keep repeating themselves. This is a virtue, as good themes endure, they speak to universal human experience -- they're not meant to reinvent the wheel. Hart quoted Paula LaRoque's list of themes or archetypes:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Quest,</li>
            <li>Search,</li>
            <li>Journey,</li>
            <li>Pursuit,</li>
            <li>Capture,</li>
            <li>Rescue,</li>
            <li>Escape,</li>
            <li>Love,</li>
            <li>Forbidden love,</li>
            <li>Unrequited love,</li>
            <li>Adventure,</li>
            <li>Riddle,</li>
            <li>Sacrifice,</li>
            <li>Discovery,</li>
            <li>Temptation,</li>
            <li>Loss or gain of identity,</li>
            <li>Metamorphosis,</li>
            <li>Transformation,</li>
            <li>Dragon-slaying,</li>
            <li>Descent into an underworld,</li>
            <li>Rebirth,</li>
            <li>Redemption,</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Hart also adds:</p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Maturation,</li>
            <li>Accepting flaws,</li>
            <li>Persistence in the face of longstanding or difficult challenges,</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Ultimately, all themes converge to seek cause, consequence, reason, and order.</p>

          <h3 id="post-the-thematic-conceit" className="mb-2 font-semibold">4.2: The Thematic Conceit</h3>
          <p className="text-sm mb-4 font-rubik">The theme can be phrased as a question, which the story answers. What are the central questions you want to put to the reader and write in order to answer? e.g. — </p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Love: can it survive unimaginable trauma?</li>
            <li>Time: is there any acceptable restitution if it's been lost?</li>
            <li>Entertainment: Does it make people dumber?</li>
            <li>Friendship: would you turn away from your friends to save yourself?</li>
            <li>Death: is there anything worse?</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">The end of the story should provide something in the way of an answer to your thematic concern, e.g. 'In these circumstances, love could not survive unimaginable trauma, because as set out by the story, X, Y and Z reasons prevented it.'</p>
          <p className="text-sm mb-4 font-rubik">Your themes should be questions that you as the author personally agonise over and you have not found other literature which adequately — if at all — address or answer the questions.</p>
          <p className="text-sm mb-4 font-rubik">Many popular books utilize uncontroversial themes which pose false questions - e.g. 'Love: will it save in the end? - Yes, it will'. This is uninteresting and cliché. Rather than challenging the reader to question their beliefs and consider new perspectives, your work effects an echo chamber of the reader's pre-existing beliefs (and your own beliefs). It also lacks boldness and conviction; it raises the inference that you are terrified that someone will disagree with you or critically examine your work, that you want quick, popular approval (and remuneration) for your work.</p>
          <p className="text-sm mb-4 font-rubik">You may brainstorm scenes before characters, or vice-versa. I prefer to start with scenes because it's easier to insert characters into established scenes - e.g. if you want a scene where a husband and wife are in an argument which turns into domestic violence, you can then set about writing those characters accordingly. Whereas it's difficult to create characters and then work out what they should do because characters can potentially do anything you want them to if you give them the right incentive.</p>

          <h3 id="post-the-inciting-question" className="mb-2 font-semibold">4.3: The Inciting Question</h3>
          <p className="text-sm mb-4 font-rubik">For commercial writing, your premise and your thematic concern are the most vital commercial aspects of your story, because you draw upon them whenever you try to advertise your book. Consider a book is the primary advertisement for itself: ideally, your title, cover design, tagline, hook, and blurb will refer to your premise. All other advertisements will be based on these.</p>
          <p className="text-sm mb-4 font-rubik">Another way of putting it is each of your title, cover design, tagline, hook and blurb should ask a question that makes the reader want to read your book, e.g. 'What if you were the last to know?'' or 'Would you do it?'' This is not the theme, but a thematic question, a question which converges back on your theme.</p>
          <p className="text-sm mb-4 font-rubik">These also don't have to be literal questions, but should elicit a question, for instance: 'He looked at the closed casket as it disappeared into the ground, feeling the weight of being the only person who knew the body wasn't in there,'' (Theme: Honesty) or 'She allowed him to remove her white veil, and got a better look at his face. And - That's not Ivan. (Theme: Identity)</p>

          <h3 id="post-how-to-create-a-theme" className="mb-2 font-semibold">4.4: How to Create a Theme</h3>
          <p className="text-sm mb-4 font-rubik">There are different methods for developing a theme:</p>
          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">4.3.1 	Synecdoche</h4>
          <p className="text-sm mb-4 font-rubik">Synecdoche is where a part of a thing represents the whole thing, or the whole represents a part.</p>
          <p className="text-sm mb-4 font-rubik">Normally the former is used to convey theme, such as where the relationship of two characters will make a comment on love (the theme) at large. The characters themselves may each constitute a synecdoche; the male character may represent men, the female character represent women, etc.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">4.3.2 	Symbolism</h4>
          <p className="text-sm mb-4 font-rubik">Your theme can also be represented by dissimilar things.</p>
          <p className="text-sm mb-4 font-rubik">For instance, if your theme related to the passage of time, you can't show time literally passing, second by second, in the story, so you may use visual imagery to suggest its passing.</p>
          <h3 id="post-dont-preach" className="mb-2 font-semibold">4.5: Don't Preach</h3>
          <p className="text-sm mb-4 font-rubik">Under '1.1. The Main Elements of a Story,' Theme came last on the list. Plot comes first because your reader wants to be entertained above all else. If they wanted to learn something they would read non-fiction. </p>
          <p className="text-sm mb-4 font-rubik">When you make THEME come first, you end up with a lecture - or worse, propaganda - not a story. Your plot bends to facilitate your opinion, rather than reflect the most interesting arrangement of events.</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="text-sm mb-4 font-rubik">[If there's] one fault that stands out above all others...by the young and inexperienced [writers], it is the tendency to sermonize and editorialize to drive home the theme...[This] novelist is convinced of the validity of his wisdom, gained from experience, and he wants…to persuade others about [his] truth...as a result he begins to lecture the reader.</p>
            <span className="italic">— Robert Meredith and John Fitzgerald
              <FootnoteRef text="Robert Meredith and John Fitzgerald, Structuring Your Novel: From Basic Idea to Finished Manuscript (Everyday Handbook)." />
            </span>
          </div>

          <h3 id="post-variations-on-a-theme" className="mb-2 font-semibold">4.6: Variations on a Theme</h3>
          <p className="text-sm mb-4 font-rubik">This topic is an intersection of themes and character creation.</p>
          <p className="text-sm mb-4 font-rubik">You might select a premise or theme for your story but be unsure how to create and populate your plot with scenes that flow from your central idea or premise rather than just being 'really cool things that happen' which you just thought up.</p>
          <p className="text-sm mb-4 font-rubik">One technique you can apply is to think of stories as an exploration of an idea or premise, and have the freedom to explore all “variations on a theme”, or idea. Variations may be embodied in other characters whose own dramas vie with the protagonist for resolution. Additionally making these dramas a zero sum game can raise the stakes and also ensure the dramas are relevant to the protagonists'. Once you populate your plot with these variations major scenes and ideas may start to write themselves.</p>
          <p className="text-sm mb-4 font-rubik">One way to explore this is, if a character advancing one position exists, there must exist a character who advances the equal and opposite position. The main example is if a character exists embodying good values - we call this the 'hero' - there must exist a character embodying bad values - we call this the 'villain'.</p>
          <p className="text-sm mb-4 font-rubik">Take, for example, the Disney animated version of the Hercules myth, which goes further than the traditional good/bad polarization.</p>
          <p className="text-sm mb-4 font-rubik">Take the premise: there exists a good demi-god. This actually contains two dimensions: a good person and someone with half divine presence and half lack of it. The latter is a more complicated position because it's defined by the presence of something and the lack of it at the same time. It's not a polarity, therefore it creates not one but two alternate positions.</p>
          <p className="text-sm mb-4 font-rubik">Characters/protagonists who are 'half and half' or contain ambiguous shades of traits or status or identity are effective in stories where some underlying story message is not black and white, or that an issue is not resolved only taking one point of view. A story with a demi protagonist such as Hercules works to suggest Hercules' divine and mortal points of view are necessary to resolve some drama. The Disney movie may not have specifically intended this, and it's not that demi characters can only be in these such stories, but is worth knowing.</p>
          <p className="text-sm mb-4 font-rubik">We can derive two available anti positions: (a) There exists a bad God, and (b) there exists a bad human. The movie supplies these alternate explorations and form character material. There is also another opposition along a different dimension: There exists a good man. A position derived from that is: (a) There exists a bad woman. The movie also supplies this position.</p>
          <p className="text-sm mb-4 font-rubik">Polarities/oppositions don't just have to be positive/negative. Robert McKee<FootnoteRef text="Robert McKee, Story: Substance, Structure, Style and the Principles of Screenwriting." /> refers to the idea of negatives against negatives. Basically, the idea there is a state opposing negativity which is to negativity what negativity is to positivity. A state even more negative than negative, but also opposite. See: 14.4 The Negation of a Negation.</p>

          {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

          <hr className="my-6 border-t border-gray-400" />
          <h1 className="text-2xl font-bold mb-4">Leave a Comment</h1>

          <CommentForm />
          <CommentList />

          {/* ------------------------------------------------- end --------------------------------------------- */}

          {/* Back to Top Link */}
          <a href="#" className="mt-6 inline-block px-4 py-2 bg-white text-midBlue rounded border border-midBlue shadow hover:bg-gray-200 hover:text-midBluey hover:border-midBluey transition">Back to Top</a>
        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4">
          {/* About Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">About</div>
            <p className="font-source-code-pro text-xs mt-1">Themes are central values or underlying messages or propositions conveyed through a story.</p>
          </div>

          {/* Index Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-what-is-theme" className="hover:underline hover:text-white">4.1: What is Theme?</a>
              </li>
              <li className="mb-px">
                <a href="#post-the-thematic-conceit" className="hover:underline hover:text-white">4.2: The Thematic Conceit</a>
              </li>
              <li className="mb-px">
                <a href="#post-the-inciting-question" className="hover:underline hover:text-white">4.3: The Inciting Question</a>
              </li>
              <li className="mb-px">
                <a href="#post-how-to-create-a-theme" className="hover:underline hover:text-white">4.4: How to Create a Theme</a>
              </li>
              <li className="mb-px">
                <a href="#post-dont-preach" className="hover:underline hover:text-white">4.5: Don't Preach</a>
              </li>
              <li className="mb-px">
                <a href="#post-variations-on-a-theme" className="hover:underline hover:text-white">4.6: Variations on a Theme</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/plot" className="hover:underline hover:text-white">Plot</a>
              </li>
              <li className="mb-px">
                <a href="/subtext" className="hover:underline hover:text-white">Subtext</a>
              </li>
              <li className="mb-px">
                <a href="/voice" className="hover:underline hover:text-white">Voice</a>
              </li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Themes;