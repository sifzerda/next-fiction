// src/app/writingDevices.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
//import Link from "next/link";

function WritersDevices() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Writing Devices</h1>

        <blockquote className="text-sm italic mb-2">
          “If there's a book that you want to read, but it hasn't been written yet, then you must write it.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Toni Morrison</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “You can always edit a bad page. You can't edit a blank page..”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Jodi Picoult</span>
        </blockquote>
      </div>

      {/* 
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={writingDevicesBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
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

          <h3 id="post-general" className="mb-2 font-semibold">20.1: GENERAL</h3>

          <p>GENERAL INFO HERE</p>

          <h3 id="post-offer/promise">20.2: Offer/Promise</h3>

          <p>This refers to story details making an implied promise to the audience that a particular idea will later unfold in a particular way. </p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p>“Make frequent promises that excitement or insight will soon be revealed to the reader. Sometimes an entire story can be made to turn on a single promise of things to come. In Treasure Island we are kept reading both by the tantalizing premise of buried treasure and the fact that somebody's going to find it. Will it be the pirates or Jim Hawkins's band?”</p>
            <p><i>— David Carroll</i>
              <FootnoteRef text="David Carroll, A Manual of Writer's Tricks." />
            </p>
          </div>

          <p>Example, in context, Rick Blaine's
            <FootnoteRef text="Casablanca, (1942)." />
            "Of all the gin joints in all the towns in all the world, she walks into mine," is a promise that Ilsa and himself will interact later, and buried feelings will resurface.</p>

          <p>Subsequently denying the development of that idea constitutes 'blocking' - see below. </p>
          <p>Example: In Pet Sematary, by establishing that the 'Sematary' resurrects creatures, King makes an offer that a character will die and be resurrected. If the main character decided not to resurrect someone at the last minute, it would result in the offer being 'blocked' (below).</p>
          <p>When the original offer/expectation is not met, but substituted with something else, this is called a 'counter offer'. If successful, the substitute will be something even better than the original offer. If unsuccessful, it will be something less interesting - however, an unsuccessful counter offer doesn't constitute a block. Blocks can have the effect of pulling the audience out of the story altogether, 'ripping' the story away from them, whereas an unsuccessful counter offer will merely make the audience less interested/invested.</p>

          <h3 id="post-blocking">20.3: Blocking</h3>
          <p>This refers to denying the development of an idea. This doesn't mean concluding an idea by going outside the audience's expectations, it means actively choking the idea and preventing any further development at all.</p>
          <p>Example: Really overused blocking is where an event was just a dream, or worse; the whole story was a dream. In effect, everything shown contained in the dream can be entirely severed from the plot (if you were recounting the plot to someone, you wouldn’t mention the dream as if it was part of the plot). Therefore it’s like it didn’t even happen at all (literally, it did not actually happen).</p>

          <h4>20.2.1 Examples of Blocked Promises: </h4>
          <p><strong>The 'Warning'</strong></p>
          <p className="indent-8 mb-2">X: “Where are you heading?”</p>
          <p className="indent-8 mb-2">Y: “I’m staying in Slains Hotel tonight.”</p>
          <p className="indent-8 mb-2">X: “Don’t you know it’s haunted? Don’t you stay in that place, I’m telling you, bad things will happen.” </p>
          <p className="mb-1">Corrected version #1:</p>
          <p className="indent-8 mb-2">X: “Where are you heading?”</p>
          <p className="indent-8 mb-2">Y: “I’m going camping on Fog Mountain.”</p>
          <p className="indent-8 mb-2">X: “Yeah? I know the place. Weren’t you up there last year?”</p>
          <p className="indent-8 mb-2">Y: “No, never been.”</p>
          <p className="indent-8 mb-2">X: “You sure? I could swear I remember you coming up. Or someone who looked just like you. Said you’d never come back.”</p>

          <p>Corrected version #2:</p>
          <p className="indent-8 mb-2">X: “Where are you heading?”</p>
          <p className="indent-8 mb-2">Y: “I’m going diving in Deadwood Lake.”</p>
          <p className="indent-8 mb-2">X: “Sounds like fun. I shuttle between Elmville and Mapledale regularly. Always pass the lake. But I’ve never stopped there. Not once. Never seen anyone swimming either. It’s interesting. You enjoy yourself.”</p>

          <p><strong>'Fortune Telling'</strong></p>
          <p className="indent-8 mb-2">X: Tommy slid a Dunhill out of the packet, lit up and took a drag, all the while not knowing that he had less than six hours to live.<FootnoteRef text="Carrie, Stephen King." /></p>

          <p><strong>'Cryptic Gobbledygook'</strong></p>
          <p className="indent-8 mb-2">“The Mother,” Marie said. </p>
          <p className="indent-8 mb-2">“What?”  </p>
          <p className="indent-8 mb-2">“The statue you’re staring at. It’s of the Mother.”   </p>
          <p className="indent-8 mb-2">“Who’s that?”   </p>
          <p className="indent-8 mb-2">“A very old goddess.”   </p>
          <p className="indent-8 mb-2">“Oh. What about this?” I pointed my knife at the road.   </p>
          <p className="indent-8 mb-2">“That takes you to a city.”   </p>
          <p className="indent-8 mb-2">“A city?”   </p>
          <p className='indent-8 mb-2'>“A city by the sea,” she said. “I don’t think you’d care to visit it.”   </p>
          <p className='indent-8 mb-2'>“By the sea?”   </p>
          <p className='indent-8 mb-2'>“It’s different here.”   </p>
          <p className='indent-8 mb-2'>“What does that mean?”   </p>
          <p className='indent-8 mb-2'>“You’ll see,” she said, and crossed the road.<FootnoteRef text="The Fisherman, John Langerman." /></p>

          <h3 id="post-reincorporation">20.4: Reincorporation</h3>
          <p>Revisiting an idea established earlier on in a story. For instance, Chekhov said that if a gun is shown in Act one, it must go off by Act three.</p>

          <h3 id="post-raising-the-stakes">20.5: Raising the Stakes</h3>
          <p>As the name suggests, making failure potentially risky (or more risky) for a protagonist.</p>

          <h3 id="post-setting-the-story">20.6: Setting the Story</h3>

          <h4>20.5.1 Setting the Story: The Microcosm</h4>
          <p>One methodical way of starting a story (as opposed to starting anywhere you like) is to dedicate the first chapter to some miniature episode in the main characters lives, which acts as a microcosm of the main story/themes. Clever intros can even subtly spoil the whole story, if you read into them correctly on a second read. This first chapter should be somewhat dislocated (but not entirely remote) from the plot (thus, an ‘episode’). It should promptly introduce all the main characters, and table the main issue/conflicts, without resolution. A good ‘microcosm’ intro may be provocative, quirky or interesting or controversial, and grab the reader. They’re also economic because they quickly sieve out the disinterested readers: if you don’t like the intro, you won’t like the rest.</p>
          <p><u>Example: </u> The Invitation (2015): although a film, there is a good example. The main characters accidently hit a fox with the car, and have to euthanize it. This doesn’t directly relate to the plot, but does reduce the entire conflict in the film, being: when is it acceptable – if at all – to assist a miserable or suffering person to suicide?</p>

          <h4>20.5.2 Setting the Story: The Question</h4>
          <p>Another - similar - way to start a story is to pose a question or raise an issue which isn’t properly realised or answered by the reader until they have all the details of the story. The question or issue can once again be put to the reader at the very end of the story, with new significance. The advantage of this method is that it deals with both start and end in one swoop.</p>
          <p>Example: In The Events At Poroth Farm
            <FootnoteRef text="The Events At Poroth Farm, T.E.D. Klein." />
            at the beginning, the main character seems to be afraid of a young kid vigilantly sitting on the steps of the courthouse across the road from his motel. Obviously the question is – why? You need to read the subsequent story, where the main character escapes from a monster that can take over people’s bodies to realise, by the end, that the monster may have caught up with the protagonist; it may now be the kid, waiting for the main character to leave his house.</p>

          <h3 id="post-self-awareness">20.7: Self-Awareness</h3>
          <p>Characters referencing writing devices in-story, e.g. 'that's so meta'. On a sliding scale of '1' (least self-aware) to '3' (most self-aware), it includes: </p>
          <ol>
            <li>Parody: Playfully borrowing and making fun of ideas from other works;</li>
            <li>Textuality: In-story references to other texts, implying the story is another such text, even if the characters aren't aware of it (ft: neverending story See Michael Ende's 'The Neverending Story' for an example of this done very well)</li>
            <li>Metatextuality: or 'meta': Characters interpret plot events through a lens of 'genre-savviness', even if they aren't aware they are in such a genre;</li>
            <li>'Breaking the fourth wall': This is the most extreme version, where characters are aware they are in a story, and make direct reference to the fact, or the reader themselves. </li>
          </ol>

          <p>Good writing uses writing devices to construct an illusion of reality. Drawing attention to these devices threatens that illusion. </p>
          <p>References to real-world media, brands, real-life people, etc, is not self-referential. If your protagonist owns a Harry Potter book on their bedroom shelf, it's a stab at verismilitude -- a legitimate writing device. If anything, this lends to the realism of your character.</p>
          <p>On the other hand, cultural references: brand names, references to other media, celebrities, etc, can date your writing as well as betray socioeconomic class.</p>
          <p>When it's self-referential, it detracts from realism; it reminds the author they're reading a story. It's like the protagonist is speaking directly to the reader, saying, "I know I'm only a character in a story." Worse, it can read like the <i>author</i> is speaking directly to the reader, saying, "I know it's only a story."</p>
          <p>Self-referentiality is one of those 'avant-gardist' styles. Remember the rule for using extra-conventional writing techniques? (hint, see: REF). You should not use them unless: (a) there is no other way you can convey your idea; (b) you are a wizard at the conventional stuff (and can therefore 'graduate' to higher forms).</p>

          <h3 id="post-irony">20.8: Irony</h3>
          <h4>20.6.1 What Is Irony?</h4>
          <p>The common understanding of irony is reality contradicting expectation; one thing is predicted, the opposite happens, and there is an odd or amusing lack of sync in the sequence of events. For a brief moment, the universal narrative is incoherent.</p>
          <p>On a deeper level, irony in reality communicates cosmic blindness. A rational mind can comprehend what ‘should’ have happened, which the larger universe was blind to. </p>
          <p>Unlike the cosmic order, you - the author - are not blind, and unlike the universe, your story is entirely governed by a single intention. Yet, stories have irony because the art is modelled off reality. But irony in reality doesn’t have a ‘point’; it’s the result of blind, coincidental accident, an unusual but statistical inevitability according to the laws of probability. Conversely, narrative irony exists only to serve a particular point; it’s calculated for a specific end. </p>
          <p>...You might say this is ironic?</p>

          <h4>20.6.2 Difference between Irony and Coincidence</h4>
          <p>This is an understandable confusion because the two concepts are so alike. Generally, Irony is characterised by the contrast of opposites, whereas coincidence is characterised by the comparison of similarity or relatedness. Something may fall short of being ironic, but may be a coincidence. </p>
          <p>Compare:</p>
          <p>If a prisoner on death row is pardoned and goes free on the day he was going to be executed, it’s merely a coincidence that the release date and execution date are <strong>the same</strong>. Contrast if the pardon comes one minute after the prisoner is executed, it’s ironic that the prisoner was supposed to be released, but <strong>the opposite</strong> happened; he was executed.</p>
          <p>If someone with a fear of flying takes a plane ride and the plane crashes, it is an (unfortunate) coincidence that the passenger’s fear and the actual event, are <strong>the same</strong>. Contrast if the plane ride was advised by the person’s psychologist for the purpose of curing the phobia through fear exposure. Then it’s ironic that the event was supposed to reinforce that air travel is relatively safe, but <strong>the opposite</strong> happened; there was a plane crash. </p>

          <p><i><strong>When to use coincidence:</strong></i></p>
          <p>As stated above, story creates meaning out of a series of events. Coincidence is the opposite; events or circumstances thrown together by pure chance. If your story is pure coincidence, there is no meaning to be derived. However, like irony, coincidence happens in real, so the artform must incorporate it sometimes for a degree of realism.</p>
          <p>If you are going to rely on coincidence to set up events, use it early, and build meaning out of it later. Don’t use coincidences past the halfway mark of your story, and above all, don’t end on a coincidence (this is called a ‘Deus Ex Machina’).  The meaning in a story should expand and develop throughout the story, until you reach the end, where the meaning of everything becomes clear. If there is a big coincidence at the end, it detracts from the meaningfulness.</p>
          <p>As the story progresses, events should rely less and less on chance, and increasingly on character’s actions and intentions.</p>

          <h4>20.6.3 Purposes of Irony</h4>
          <p>Irony may serve to:</p>
          <ol>
            <li>Provide humour;</li>
            <li>Teach a character a lesson;</li>
            <li>Provide the story universe some sense of moral or karmic equilibrium;</li>
            <li>Challenge the protagonist's sense of agency and autonomy;</li>
            <li>Create a sense of mysterious serendipity;</li>
            <li>Romanticise a meeting;</li>
            <li>Add poignant sense of mindlessness to accident or tragedy;</li>
            <li>Suggest the intention or interference of a greater will (a God, supernatural being, or even a mortal character more powerful than the protagonist);</li>
            <li>Suggest the protagonist is unalike or out of sync with another (character, or group)</li>
            <li>Suggest the protagonist is curiously alike or in sync with another (character or group)</li>
            <li>To suggest that something is more complicated than it outwardly looks;</li>
          </ol>

          <h4>20.6.4 	Kinds of Irony</h4>
          <p>There are multiple kinds of irony, namely:</p>
          <p><i><strong>(1) Verbal Irony:</strong></i></p>
          <p>This is irony that comes out in dialogue; a speaker’s intention is the opposite of what they are saying. For example, when it’s raining and someone says “Nice weather.” </p>
          <p>Arguably, it’s also ‘verbal’ irony when a waiter drops and breaks a plate, and the chef claps in applause (sarcastically).</p>
          <p>Here is a written example of verbal irony:</p>
          <p className='indent-8 mb-2'>[…] whoever could find out a fair, cheap, and easy method of making [destitute] children sound, useful members of the commonwealth, would deserve so well of the public as to have his statue set up for a preserver of the nation.</p>
          <p className='indent-8 mb-2'>I have been assured by a very knowing American of my acquaintance in London, that a young healthy child well nursed is at a year old a most delicious, nourishing, and wholesome food, whether stewed, roasted, baked, or boiled; and I make no doubt that it will equally serve in a fricassee or a ragout.<FootnoteRef text="A Modest Proposal, Jonathan Swift." /></p>

          <p><i><strong> (2) Situational Irony</strong></i></p>
          <p>This is where the result of a situation is the opposite of what you’d expect. For example, in O. Henry’s <i>The Gift of the Magi</i>, a husband sells his watch to buy his wife a hair comb, while his wife sells her hair to buy her husband a watch chain.</p>
          <p>In the film <i>Ruthless People</i>, a woman is kidnapped but gives her basement prison a makeover; installing a spa, and while confined there, exercises and eats healthy, and loses weight. As a result, she is grateful to her kidnappers; so grateful in fact that when they tell her they’re going to let her go because her husband won’t pay the ransom, she promises to get it for them.</p>

          <p><i><strong> (3) Dramatic Irony</strong></i></p>
          <p>This is where the audience or reader knows a critical piece of information – unknown by a character – which dramatically alters their perception of a situation. This is basically situational irony, except the reader has knowledge which allows them to perceive the irony of the situation before it actually happens.</p>
          <p>For example, in Romeo and Juliet, we know Juliet’s intention to fake her death, where Romeo – failing to get the message – does not. This creates tragic irony when Romeo mistakes her for actually being dead, and kills himself.</p>
          <p>As Robert McKee
            <FootnoteRef text="Robert McKee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            says, like with symbolism, “to point at irony destroys it.” It cannot be obvious.  </p>

          <h3 id="post-what-is-writers-block">20.9: What is Writer's Block?</h3>

          <p>DEFINE WRITER'S BLOCK, SPECULATE ON ORIGIN</p>

          <h3 id="post-imagine-saying-it">20.10: Imagine Saying It</h3>
          <p>Thought experiment: If struggling for the simplest way to voice ideas, imagine conveying the information to a lay person orally. This can help to pull you out of the pressure you often subconsciously place on yourself to sound ‘writerly’ or ‘literary’, and will help you decide what the most crucial information is from out of a bunch of different ideas;</p>
          <p>Experiment with variations of this, e.g. pretend you are trying to sum up the idea and are short for time, compared to conveying the information with all the time in the world;</p>

          <h3 id="post-the-right-idea-will-come">21.3: The Right Idea Will Come</h3>
          <p>Don’t freak out because you feel your story lacks substance or doesn’t sound original or just doesn’t sound right. If the idea is meant to be, it’ll write itself in own time. Ideas come from everywhere, and come eventually;</p>
          <ul>
            <li>Try reading other books dealing with the same subject matter – including non-fiction (and as many different kinds of books, to reduce the risk of plagiarism, intentional or otherwise);</li>
            <li>There’s no harm in taking a break from your writing, because a good idea will play on your mind whether you like it or not, and eventually something (something you read, or hear in the news, or watch on TV) will jar an idea again. The more you get away from the story the more you will appreciate it with a fresh mind, making the creative process more productive;  </li>
          </ul>

          <h3 id="post-constrain-your-writing">21.4: Constrain your Writing</h3>
          <p>A writing constraint is where you set rules delimiting what and how you write. Robert Frost said that writing free (unconstrained) verse is like playing tennis with no net. Sounds contradictory, but constraints are necessary to inspire creativity.  </p>
          <p>The whole point of poetry is to generate creative connections through restricted verse. When you see awful poetry it’s likely because the poet didn’t apply constraints to their writing, they just wrote whatever came to mind.</p>
          <p>Some examples of constraints include:</p>
          <ol>
            <li><u>Mandated vocabulary:</u> avoid using a particular word/s or otherwise limits the word use in some way;</li>
            <li><u>Lipogram:</u> avoid using a particular letter of the alphabet, particularly more common letters;</li>
            <li><u>Rhopalism:</u> a sentence in which in successive word is one letter longer;</li>
            <li><u>Abecedarius:</u> a kind of acrostic poem where successive lines begin with successive letters of the alphabet;</li>
            <li><u>Palindrome</u> using words and even full sentences which read the same backwards as forwards;</li>
            <li><u>Tautogram:</u> all the words in a sentence or phrase begin with the same letter;</li>
            <li><u>Pangram:</u> a sentence that contains every letter of the alphabet (e.g. “the quick brown fox jumps over the lazy dog”);</li>
            <li><u>Pilish:</u> the number of letters in each successive word is equal to the successive decimal places of pi, 3.14159265359...</li>
            <li><u>Repetition:</u> Finding ways to work the same word or phrase into a story, multiple times</li>
            <li><u>Aliteration:</u> relying on a certain letter to start words;</li>
            <li><u>First letter acronyms:</u> the first letter of each sentence in a paragraph/s must spell out a sentence;</li>
            <li><u>Concrete instead of abstract descriptions:</u> (e.g. ‘smile’, but not ‘happy’);</li>
            <li><u>Double entendres:</u> phrases that hold two simultaneous meanings, commonly with sexual undertones;</li>
            <li><u>Straining metaphors:</u> making the description of one thing sound like and evoke something entirely different.</li>
          </ol>

          <p>Placing constraints on your writing makes writing easier, because it gives you bright, clear lines about what and how to write. It’s like being given a writing prompt as opposed to being asked to write whatever you want. The freedom conferred in the latter can be its own prison.</p>
          <p>You can and should invent your own. A writing constraint can be any rule you want, and you can employ them anywhere in your writing, as long as you avoid employing them so often that your writing ends up sounding artificial and strange.</p>
          <p>You don’t have to be consistent. You can break your own constraints. You might, for example, impose a rule in one chapter against using the letter ‘e’, but break that rule once – and that one exception may be used to communicate something very important.</p>

          <h3 id="post-from-another-authors-pov">21.5: From Another Author’s POV</h3>
          <p>If you’re struggling with an idea, try to imagine how it might be done if your favourite author wrote it (particularly if your favourite author writes in that genre).</p>

          <h3 id="post-as-a-movie">21.6: As A Movie</h3>
          <p>Same as above, but imagine if the idea played out as a movie. This will help write scenes which have more immediacy, because you can’t film a scene with abstract content.</p>

          <h2 id="post-21-7" className="blog-post-title">21.7: The Lover’s Quarrel</h2>
          <p>This is a writing exercise from Sol Stein
            <FootnoteRef text="Sol Stein, Stein On Writing." />
            for application in romance scene/s. You aim to fill in the dialogue below which both conveys that the characters are in love, but are having a quarrel (without outright stating it). The more creatively you can suggest these pieces of information, the better. Try to work the dialogue into an imagined scene, setting or event. Here’s a hint: the characters don’t have to be talking directly at each other (could be making an observation or statement).</p>
          <p><strong>Lovers’ Quarrel in Ten Brief Exchanges:</strong></p>
          <p className='indent-8 mb-2'>He:</p>
          <p className='indent-8 mb-2'>She:</p>
          <p className='indent-8 mb-2'>He:</p>
          <p className='indent-8 mb-2'>She:</p>
          <p className='indent-8 mb-2'>He:</p>
          <p className='indent-8 mb-2'>She:</p>
          <p className='indent-8 mb-2'>He:</p>
          <p className='indent-8 mb-2'>She:</p>
          <p className='indent-8 mb-2'>He:</p>
          <p className='indent-8 mb-2'>She:</p>

          <p>Example:</p>
          <p className='indent-8 mb-2'>"I need to get off."</p>
          <p className='indent-8 mb-2'>"You chose this ride."</p>
          <p className='indent-8 mb-2'>"I went on your rollercoaster with you. Wasn't that enough?"</p>
          <p className='indent-8 mb-2'>"That wasn't even a rollercoaster, it was a ghost train. I don't even like Ferris Wheels, I only got on this with you because I thought you wanted to go on it."</p>
          <p className='indent-8 mb-2'>"I didn't actually want to."</p>
          <p className='indent-8 mb-2'>"Well, then why did you get on?"</p>
          <p className='indent-8 mb-2'>"Why did you get on?"</p>
          <p className='indent-8 mb-2'>She: *says nothing*</p>
          <p className='indent-8 mb-2'>"You didn't have to."</p>
          <p className='indent-8 mb-2'>"Isn't it obvious?"</p>

          <h3 className="blog-write-what-you-love">21.8: Write What You Love</h3>
          <p>This is a tip from Stephen King; ask yourself, “Am I Having Fun?”
            <FootnoteRef text="Stephen King, Chapter 1: Everything You Need To Know About Writing Successfully — in Ten Minutes, The Writer's Handbook 1988." />
            The answer needn’t always be ‘yes.’ But if it’s never ‘yes,’ then you have a problem. Go back to writing what you really enjoy.</p>

          {/* ============================================================= */}

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
            <p className="font-source-code-pro text-xs mt-1">This chapter covers various narrative concepts and devices which can enhance your writing and help combat writer's block.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-general-info" className="hover:underline hover:text-white">20.1: General info</a></li>
              <li className="mb-px"><a href="#post-offer/promise" className="hover:underline hover:text-white">20.2: Offer/Promise</a></li>
              <li className="mb-px"><a href="#post-blocking" className="hover:underline hover:text-white">20.3: Blocking</a></li>
              <li className="mb-px"><a href="#post-reincorporation" className="hover:underline hover:text-white">20.4: Reincorporation</a></li>
              <li className="mb-px"><a href="#post-raising-the-stakes" className="hover:underline hover:text-white">20.5: Raising the Stakes</a></li>
              <li className="mb-px"><a href="#post-setting-the-story" className="hover:underline hover:text-white">20.6: Setting the Story</a></li>
              <li className="mb-px"><a href="#post-self-awareness" className="hover:underline hover:text-white">20.7: Self-Awareness</a></li>
              <li className="mb-px"><a href="#post-irony" className="hover:underline hover:text-white">20.8: Irony</a></li>
              <li className="mb-px"><a href="#post-imagine-saying-it" className="hover:underline hover:text-white">20.9: Imagine Saying It</a></li>
              <li className="mb-px"><a href="#post-the-right-idea-will-come" className="hover:underline hover:text-white">20.10: The Right Idea Will Come</a></li>
              <li className="mb-px"><a href="#post-constrain-your-writing" className="hover:underline hover:text-white">20.11: Constrain Your Writing</a></li>
              <li className="mb-px"><a href="#post-from-another-author" className="hover:underline hover:text-white">20.12: From Another Author's POV</a></li>
              <li className="mb-px"><a href="#post-as-a-movie" className="hover:underline hover:text-white">20.13: As a Movie</a></li>
              <li className="mb-px"><a href="#post-the-lovers-quarrel" className="hover:underline hover:text-white">20.14: The Lover's Quarrel</a></li>
              <li className="mb-px"><a href="#post-write-what-you-love" className="hover:underline hover:text-white">21.15: Write What You Love</a></li>
              <li className="mb-px"><a href="#post-writers-devices-comments" className="hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/conflict" className="hover:underline hover:text-white">Conflict</a></li>
              <li className="mb-px"><a href="/description" className="hover:underline hover:text-white">Description</a></li>
              <li className="mb-px"><a href="/story" className="hover:underline hover:text-white">Story</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default WritersDevices;