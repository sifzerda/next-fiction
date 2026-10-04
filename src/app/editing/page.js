// src/app/editing.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import editingBanner from '../assets/editingBanner.jpg'; // Adjust the path as necessary
import Image from "next/image";

function Editing() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1>Editing</h1>

        <blockquote>
          “The first draft of anything is shit.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Ernest Hemingway</span>
        </blockquote>
        <blockquote>
          “In writing, you must kill all your darlings.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— William Faulkner</span>
        </blockquote>
        <blockquote>
          “If you catch an adjective, kill it!”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Mark Twain</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={editingBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto -mt-5 px-0 text-black flex flex-col-reverse md:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-general-deadweights" className="mb-2 font-semibold">22.1: General Deadweights</h2>

          <h5>22.1.1. Adverbs</h5>
          <p>Adverbs are words which add to a verb, e.g. ‘Thoroughly', ‘Laughingly', ‘Harshly', etc;</p>
          <p>Try to replace adverbs with word/s which imply your adverb, e.g.</p>

          <ul className="bullets">
            <li>Replace ‘He dried the towel out thoroughly' with ‘He wrung out the towel'</li>
            <li>Replace ‘That's not my dog– it's a duck' she said laughingly, with ‘That's a duck,' she said. "A duck!"</li>
            <li>Replace ‘I'm not playing tennis with Casey – she's horrible' she said harshly, with ‘Casey? Tennis? Useless!'  </li>
          </ul>

          <h5>22.1.2. Adjectives:</h5>
          <p>Adjectives are words which add to a noun, e.g. ‘tall', ‘sinewy', rhythmic';</p>

          <ul className="bullets">
            <li>Select nouns which already imply your adjectives, e.g.
              <ul>
                <li>Instead of saying ‘Grey, towering, gothic building' say ‘Castle.'</li></ul> </li>
            <li>If using more than one to describe a thing, get rid of all except the strongest. </li>
          </ul>

          <p>This is a tip from Sol Stein. The ‘strongest' adjective is the one which most immediately gets across the gist of what you want to show. Which adjective, alone, puts the most striking image in your reader's mind? Anything implied needs to go; i.e. trees are assumed to be ‘big,' ‘graceful,' etc. ‘Tiny tree,' rotting tree,' ‘red tree,' and ‘ugly tree', however, are evocative in their own right.</p>

          <h5>22.1.3. 'Had' as past tense:</h5>
          <p>Sol Stein suggests removing all past tense ‘hads'.
            <FootnoteRef text={`SOL STEIN,\nOn Writing.`} />
            Note there are three uses of ‘had': </p>

          <ul className="bullets">
            <li><i>past tense</i>; means ‘did' (He had turned on the oven) </li>
            <li><i>mandatory</i>; interchangeable with ‘needed' (I had to go to the dentist) and </li>
            <li><i>possessive;</i> interchangeable with ‘owned' (I had a basketball) </li>
          </ul>

          <p>It's the first kind (past tense) you need to remove and make present tense, for instance ‘He had turned on the oven' would become ‘He turned on the oven.'</p>

          <h5>22.1.4. Verb-laden sentences which start with present tense verbs:</h5>
          <p>These sound awkward and ungrammatical and cluttered with too many verbs. Try to split each verb into a separate sentence. E.g.</p>
          <ul className="bullets">
            <li>Change ‘Running to the house, he began screaming,' to ‘He ran until the house came into view. Then he screamed.'</li>
            <li>Change ‘Reaching for the phone, her hands shaking,' to ‘She reached for the phone. Her hands were shaking.'</li>
          </ul>

          <h5>22.1.5. Speech Breaks:</h5>
          <p>These are sounds people make during speech which give them pause – without actually pausing, e.g. ‘Uh,' ‘Um,' ‘Er,' ‘Ah',</p>
          <ul className="bullets">
            <li>Remove all of these. Even if you want them to make your character sound nervous or uncertain, instead describe their behaviour which achieves this effect.</li>
          </ul>

          <h5>22.1.6. Filler Words:</h5>
          <p>Like speech breaks, but are actual words. They are gratuitously inserted to join together sentences. E.g. ‘So', ‘Yeah', ‘Like', ‘Okay, ‘Right,' ‘You know.'</p>
          <ul className="bullets">
            <li>Remove all of these. They communicate nothing. Read page 12 'Dodgem dialogue' for tips on how to correct this.</li>
          </ul>

          <h5>22.1.7. Qualifying Terms:</h5>
          <p>These are words which describe the extent of something, e.g. ‘Very', ‘Actually,' ‘Really', ‘Somewhat', ‘Mostly.' Replace with a single, more appropriate word. Go for exaggeration rather than moderation:</p>
          <ul className="bullets">
            <li>Rather than saying ‘very tall' say ‘towering' or ‘titanic' or ‘giant' </li>
            <li>Rather than saying ‘really very beautiful' (two qualifiers – doubly bad) say ‘stunning' or ‘ravishing' </li>
          </ul>

          <h5>22.1.8. Echoing:</h5>
          <p>When information is repeated, mostly in dialogue, but sometimes seen in narration as well, e.g.</p>
          <h4>Dialogue:</h4>
          <li> A: "Where does Joe go at night?"</li>
          <li> B: "I don't know where Joe goes at night." </li>
          <h4>Narration:</h4>
          <li><i>He wondered where Joe might be, and realized he didn't actually know where Joe might be.</i></li>
          <p>It goes without saying, remove all redundancy.</p>

          <h5>22.1.9. Formal Language:</h5>
          <p>Words and phrases that are overly formal or complex. E.g.</p>
          <ul className="bullets">
            <li>‘Notwithstanding,' ‘thereof,' ‘Nonetheless,' ‘wherewithal', ‘therein'.</li>
          </ul>

          <p>Replace with simpler language, e.g:</p>
          <ul className="bullets">
            <li>‘Notwithstanding' and 'Nonetheless' becomes ‘But',</li>
            <li>‘Thereof' becomes ‘Of it',</li>
            <li>‘Wherewithal' becomes ‘Resources',</li>
            <li>‘Therein' becomes ‘In it.'</li>
          </ul>

          <h5>22.1.10. Poetic Language:</h5> 
          <p>Words and phrases used to ‘poeticise' banal things, and which no one actually uses in real life. Swap with simpler, more standard language, e.g.</p>
          <ul className="bullets">
            <li>Instead of ‘All was silent,' say ‘It was silent.'</li>
            <li>Instead of ‘None was to be found,' say ‘It never came.'</li>
            <li>Instead of ‘As powerful as a thousand winds' say ‘A powerful wind.'</li>
          </ul>

          <h5>22.1.11. Bridges:</h5> 
          <p>Includes compound prepositions and conjunctions – these are sentences which transition from one idea to the next, e.g. ‘…and, for that matter,' ‘More to the point…' ‘In the nature of' ‘For the most part.' Either split into separate sentences, or replace:</p>
          <p>Robert Flesch lists these along with their replacements:
            <FootnoteRef text={`ROBERT FLESCH,\nThe Art of Plain Talk.`} /></p>
          
          <ul className="bullets">
            <li>Along the lines of = like;</li>
            <li>As to = about;</li>
            <li>For the purpose of = for;</li>
            <li>For the reason that = since;</li>
            <li>From the point of view of = for;</li>
            <li>Inasmuch as = since;</li>
            <li>In favour of = for;</li>
            <li>In order to = to;</li>
            <li>In accordance with = by;</li>
            <li>In the case of = if;</li>
            <li>In the event that = if;</li>
            <li>In the nature of = like;</li>
            <li>In terms of = in;</li>
            <li>On the basis of = by;</li>
            <li>Prior to = before;</li>
            <li>With a view to = to;</li>
            <li>With a reference to = about;</li>
            <li>With regard to = about;</li>
            <li>With the result that = so that;</li>
          </ul>

          <h5>22.1.12. Connectives:</h5> 
          <p>Connectives are words that tie clauses and sentences together. Robert Flesch also lists these and their replacements:</p>
          <ul className="bullets">
            <li>Likewise = and;</li>
            <li>In addition = besides, also;</li>
            <li>Moreover = now, next;</li>
            <li>Furthermore = then;</li>
            <li>Nevertheless = but;</li>
            <li>Rather = however;</li>
            <li>That is to say = in other words;</li>
            <li>More specifically = for example;</li>
            <li>Indeed = in fact;</li>
            <li>To be sure = of course;</li>
            <li>For this reason = so;</li>
            <li>Accordingly, consequently = and so;</li>
            <li>Hence, thus = therefore;</li>
          </ul>

          <h2 id="post-exceptions-to-deadweights">22.2: Exceptions to Deadweights</h2>
          <p>The general rule is these words should go if possible; if they don't take away something essential from the writing – the strict definition of essential: without, the text wouldn't make sense, not your personal definition of essential: makes the writing sound nicer. </p>
          <p>This includes dialogue. You might argue ‘that's how the character would speak in real life!' but dialogue is not real life speech. It's made up and abridged to maintain the reader's interest. It's a representation of speech, not a transcription of it. </p>
          <p>The exception: Sometimes you want to convey meaning not merely by the words, but their form and structure (for instance, see: ‘13.3.4 Deliberately awkward sentences,' and ‘10.1.1 When to not abridge'). </p>
          <p>For example, you've got this echoing dialogue:</p>

          <div className="custom-box">
            <p className="italic">A: “Where does Joe go at night?”</p>
            <p className="italic">B: “I don't know where Joe goes at night.”</p>
          </div>
          <p>If in this scene you want B's echoing to show that the character is stressed out and evasive, maybe lying, then removing the echo would negate this effect, e.g.</p>
          <div className="custom-box">
            <p className="italic">A: “Where does Joe go at night?”</p>
            <p className="italic">B: “I don't know.”</p>
          </div>

          <p>Therefore, the echo would not be a ‘deadweight', because it's carrying some essential meaning; it's doing ‘work.' So it's necessary to keep it. Keep in mind using ungrammatical or ‘odd' dialogue is an effective way to infer meaning.</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-pronouns">22.3: Pronouns</h2>
          <p>Amateur writers often start sentences with pronouns (e.g. the main character), and the description that follows orbit around the pronouns, i.e. character-focused writing. So it sounds like every sentence starts ‘I.' This is partly due to the interiority of modern writing (see 13.1.6 Starve the Ego, Feed the Soul). It gets grating fast, and you risk your character boring the reader (really bad, because they're stuck with the character the entire story). By removing pronouns you push yourself to describe more interesting things; your setting, events, other characters, etc. Your story stops sounding like a page from your main character's diary and starts being about the actual experiences and events happening. This facilitates your reader to pretend they are the main character, and wonder ‘what if this was me; what would I do in this situation?' Your reader will thank you for that experience. Taking the focus off your protagonist also makes them more mysterious and interesting, too.</p>
          <p>See these examples and consider which you prefer:</p>
          <h4>(1) Personal Pronouns: </h4>
          <div className="custom-box">
            <p className="italic"><span className="bg-hGreen">I </span> opened the front door and walked straight into a fog of black. <span className='bg-hGreen'> I </span> felt up one wall for a light switch, then the other wall, but there was none. <span className="bg-hGreen">I </span> froze. <span className="bg-hGreen">I </span> could hear a dragging sound coming from another room, but as soon as <span className="bg-hGreen">I </span> caught it, it stopped. <span className="bg-hGreen">I </span> remembered the funny thing my friend, Damien, had said about this house. <span className="bg-hGreen">I </span> could hear the scraping sound again, but now it sounded like it was coming from a different room. <span className="bg-hGreen">I </span> didn't want to take another step in the dark, but the front door had no inside knob. <span className="bg-hGreen">I </span> couldn't open it.</p>
          </div>

          <h4>(1) Removal of Pronouns: </h4>
          <div className="custom-box">
            <p className="italic">The front door had a hole instead of a knob., but opened with a nudge. Dim inside. Then the iron weight door slammed shut, and it was a fog of black. One step forward scuffed carpet, the next scraped concrete. Further steps were muffled again by carpet. The light switch wasn't on the left wall, or the right. There was a dragging sound between footsteps. Then silence. It was funny, what Damien said about this house. The dragging sound came again, but from a different room. It took a moment to find the door again. There was no knob on the inside, either. The door felt like a rock wall. It only opened from the outside.</p>
          </div>
          <p>In (2) because I removed pronouns, description moved off the protagonist, forcing me to add description to the setting, to fill up the paragraph. This reads better as reader is more interested in the place, in this scene, than the character.</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-right-branching-sentences">22.4: Right-Branching Sentences</h2>
          <p>Roy Peter Clark
            <FootnoteRef text={`ROY PETER CLARK,\nWriting Tools: 50 Essential Strategies for Every Writer.`} />
            says <i>“The next time you struggle with a sentence, see if you can rewrite it by placing subject and verb at the beginning,”</i> and letting subordinate elements ‘branch to the right.' </p>

          <p>You normally see this kind of writing in journalism, e.g.</p>
          <div className="quote-box">
            <p className="italic">A reporter writes a lead sentence with subject and verb at the beginning, followed by other subordinate elements, creating what scholars call a "right-branching sentence."</p>
            <p className="italic">Rebels seized control of Cap Haitien, Haiti's second largest city, on Sunday, meeting little resistance as hundreds of residents cheered, burned the police station, plundered food from port warehouses and looted the airport, which was quickly closed.</p>
            <p className="italic">Police officers and armed supporters of President Jean-Bertrand Aristide fled.</p>
          </div>

          <p>An advantage of this sentence structure is that it keeps you anchored on the subject, so you don't go off topic midway, e.g. in the first sentence, the subject is the ‘reporter,' the second, the ‘rebels [seizing] control,' the third, the ‘police officers and armed supporters.' Everything in the paragraph that follows should elaborate the subject.</p>
          <p>Don't separate subject and verb, or you risk confusing the reader, e.g.</p>
          <div className="quote-box">
            <p className="italic"><span className="bg-hYellow">A bill </span> that would exclude tax income from the assessed value of new homes from the state education funding formula <span className="bg-hYellow">could mean </span> a loss of revenue for Chesapeake County schools.</p>
          </div>
          <p>Here, the subject ‘bill' is too separate from the verb ‘could mean.'</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-start-and-end-strong">22.5: Start and End Strong</h2>

          <p>This comprises two bits of advice;</p>
          <ol>
            <li>Use the strongest combinations of verbs/adverbs. For instance replace ‘he went quickly' with ‘he dashed.'</li>
            <li>Place strong ‘headline' words at the start of sentences, and at the end. This makes sentences sound full and complete.  For this reason, you hear the advice not to end on a preposition, e.g. ‘I like school, well, kind of.'</li>
          </ol>
          <p>Ask yourself, what information is the most important in this sentence?</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-guarding-word-territory">22.6: Guarding Word Territory</h2>
          <p>Roy Clark coined the useful concept ‘word territory'. It basically means giving important words their own space. Don't repeat key words unless the emphasis is necessary. For instance, </p>
          <div className="quote-box">
            <p><i>“Long sentences create a flow that carries the reader down a stream of understanding, creating an effect that Don Fry calls "steady advance."</i>
              <FootnoteRef text={`ROY PETER CLARK,\nWriting Tools: 50 Essential Strategies for Every Writer.`} /></p>
          </div>
          {/* ------------------------------------------------- Comment Form footnotes --------------------------------------------- */}

          <hr id="post-editing-comments" className="my-6 border-t border-gray-400" />
          <h1 className="text-base text-llBlue bg-bootstrapDark p-4">Leave a Comment</h1>

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
            <p className="font-source-code-pro text-xs mt-1">Editing is the practice of selectively changing or removing parts of your story to maximize effect.</p>
          </div>

          {/* Index Box */}
          <div
            id="index-box"
            className="w-full md:w-60 bg-bootstrapDark  border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-none text-xs leading-tight m-0 p-0 -ml-0">
              <li className="mb-px"><a href="#post-general-deadweights" className="text-xs hover:underline hover:text-white">21.1: General Deadweights</a></li>
              <li className="mb-px"><a href="#post-exceptions-to-deadweights" className="text-xs hover:underline hover:text-white">21.2: Exceptions to Deadweights</a></li>
              <li className="mb-px"><a href="#post-pronouns" className="text-xs hover:underline hover:text-white">21.3: Pronouns</a></li>
              <li className="mb-px"><a href="#post-right-branching-sentences" className="text-xs hover:underline hover:text-white">21.4: Right-Branching Sentences</a></li>
              <li className="mb-px"><a href="#post-start-and-end-strong" className="text-xs hover:underline hover:text-white">21.5: Start and End Strong</a></li>
              <li className="mb-px"><a href="#post-guarding-word-territory" className="text-xs hover:underline hover:text-white">21.6: Guarding Word Territory</a></li>
              <li className="mb-px"><a href="#post-editing-comments" className="text-xs hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div
            id="also-see-box"
            className="w-full md:w-60 bg-bootstrapDark  border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">

            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight m-0 p-0 -ml-0">
              <li className="mb-px"><a href="/themes" className="text-xs hover:underline hover:text-white">Themes</a></li>
              <li className="mb-px"><a href="/description" className="text-xs hover:underline hover:text-white">Description</a></li>
              <li className="mb-px"><a href="/marketing" className="text-xs hover:underline hover:text-white">Marketing</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Editing;