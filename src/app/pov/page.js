// src/app/pov.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import povBanner from '../assets/povbanner.jpg';
import Image from "next/image";

function POV() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Point Of View</h1>

        <blockquote className="text-sm italic mb-2">
          “If you want to know what water is, don’t ask the fish.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Mitch Stokes</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={povBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-what-is-point-of-view">14.1: What Is Point of View?</h3>

          <p>DEFINE POV</p>
          <p>At this point, you may have already decided which Point of View (POV) you are going to use. In many cases it’ll be an intuitive decision.</p>
          <p>The types of POVs are:</p>

          <h3 id="post-first-person">14.2: First Person</h3>
          <p>The narrator is your main character themselves, e.g.
            <FootnoteRef text="Sol Stein, On Writing." />
          </p>
          <p className="text-midBluey">I looked longingly at Mary, hoping she would notice me. She not only noticed me, she said: “I wish you would take me in your arms.” I noticed Mary’s mother watching from the window, and hoped she thought we were a perfect match.</p>
          <p>Your main choice is between this and Third Person, but your default should be Third Person. However, there are a number of reasons why you might opt for this POV:</p>

          <ol>
            <li>To create immediacy; the eyewitness account of someone actually at an event, whereas Third Person has a sense of being a recount by the narrator of an interesting event;</li>
            <li>To describe incredible, unbelievable things; readers tend to suspend more disbelief for 1st person POV because of the ‘I know, I was there’ vibe;</li>
            <li>To filter events through the subjective perception of an individual; this allows you to be more selective with what is shown and not shown to the particular character;</li>
            <li>To filter events through someone’s psychology; e.g. the perception of a drunk, paranoid, child, neurotic, autistic, infatuated, below average intelligent, or absent-minded character, etc;</li>
            <li>You want the narrator to have a particular or stylized voice;</li>
            <li>A character’s actions are in opposition with their thoughts (e.g. a character doing horrible things thinking it’s for good reasons)</li>
          </ol>

          <p>I tend to think that a Third Person POV story is a story more about events, whereas a First Person POV story is a story more about a person, i.e. the personality who experienced events.</p>

          <h4>14.1.1 	First Person Supporting Character</h4>
          <p>A secondary character describes the protagonist, e.g.</p>

          <p className="text-midBluey">I noticed Kevin look longingly at Mary, as if hoping she would notice him. She not only noticed him, she said: “I wish you would take me in your arms.” Then I noticed Mary’s mother watching from the window, and wondered if she thought they were a perfect match.</p>

          <p>Applicable where: </p>
          <ol>
            <li>the protagonist is a duplicitous, secretive or mysterious character; or </li>
            <li>the protagonist has too much important plot-relevant information that would spoil the story;</li>
            <li>the plot is implausible or unbelievable; </li>
          </ol>

          <p>The story is narrated by a supporting character, e.g. Stephen King’s ‘Rita Hayworth and the Shawshank Redemption,’ or F. Scott Fitzgerald’s ‘The Great Gatsby,’ or Harper Lee’s ‘To Kill a Mockingbird,’ or Jeffrey Eugenides’ ‘The Virgin Suicides.’ You want the supporting character to have a less exciting life, or is modest, naïve, average intelligence (or slightly above average, but less than the protagonist), and other traits that tend the reader to believe they would be a more credible reporter of the protagonist than the protagonist himself. </p>
          <p>Probably goes without saying, but the supporting character should be someone with a special relationship to the protagonist. They can’t be anyone. Like you need to justify why the protagonist is the main character, you need to justify why the supporting character is the narrator. Do they have special information about the protagonist, or special access to the protagonist’s thoughts, feelings or behaviour?</p>

          <h3 id="post-second-person">14.3: Second Person</h3>
          <p>The narrator is not a character and speaks to the reader as if the reader was the main character, e.g.</p>
          <p className="text-midBluey">You looked longingly at Mary, hoping she would notice you. She not only noticed you, she said: “I wish you would take me in your arms.” You noticed Mary’s mother, watching from the window, and hoped she thought you were a perfect match.</p>
          <p>You can probably avoid this one for most purposes. It doesn’t read naturally and readers will find incongruence between their real self and their fictional ‘self’ jarring – however, you can get around this with hypotheticals, e.g. ‘If you visit that street today, you will find that the house has been knocked down…’</p>

          <h3 id="post-third-person">14.4: Third Person</h3>
          <p>The main character is described by the narrator, who is not themselves a character. This is the main POV, and should be your default if you don’t know which POV to choose (you can always change it later, anyway). Use it unless you have a really good reason not to.</p>
          <p>There are three kinds of 3rd person POV:</p>

          <h4>14.3.1 	Third Person Limited</h4>
          <p>This is where the narrator’s knowledge is restricted to your main character. The narrator can read the mind of the main character (if that) but no one else.</p>
          <p className="midBluey">Kevin looked longingly at Mary, hoping she would notice him. She not only noticed him, she said: “I wish you would take me in your arms.” Kevin noticed Mary’s mother watching from the window, and hoped she thought they were a perfect match.</p>
          <p>This perspective can be used to show a protagonist how they really are, not how they see themselves.</p>

          <h4>14.3.2 	Third Person Omniscient </h4>
          <p>This perspective can be used to show a protagonist how they really are, not how they see themselves.</p>
          <p className="midBluey">Kevin looked longingly at Mary, hoping she would notice him. She not only noticed him, she wished he would take her in his arms. Mary’s mother, watched from the window, and thought they were a perfect match.  </p>
          <p>This perspective is quite common because, not only does it have access to every character’s mind, but it doesn’t require access to any character’s mind. A description such as, “It was raining that morning,” can be used before any character is identified.  </p>
          <p>Also notice the above example switches POVs in the same paragraph, from Kevin to the mother. Sometimes a POV will change chapter to chapter, so each chapter follows a different character. If you do this, you should aim to set the POV from the character who is most affected by the events in that scene, or has the most at stake. Interpret this rule loosely – it’s largely how you define ‘affected’ – in a scene where a character gets hit by a car, the character who is hit is most affected, but I think the scene would be more interesting from the POV of an observer, or the driver, because the victim’s perception will be so limited from the point of impact. </p>

          <h4>14.3.3 	Third Person Supporting Character </h4>
          <p>Theoretically, you could also have a supporting character written in third person, e.g. </p>
          <p className="text-midBluey">Sarah saw Kevin look longingly at Mary, as if hoping she would notice him. Mary not only noticed him, she said: “I wish you would take me in your arms.” Then Sarah noticed Mary’s mother watching from the window, and wondered if Mary’s mother thought Kevin and Mary were a perfect match.
            <FootnoteRef text="Sol Stein, On Writing." /></p>

          <h3 id="post-multiple-shifting-narrators">14.5: Multiple Shifting Narrators</h3>
          <p>You may have multiple, equally interesting characters who all have different knowledge about their situation, or you want to show two or more different sides to a situation, or otherwise want more freedom and scope to describe the story. For any of these reasons, you may have multiple narrators coming into the story at different points. They may give an account of entirely new events, or give their account events previously described by another narrator. </p>
          <p>A couple of rules:</p>

          <h4>14.4.1 	Separate POVs by Chapter</h4>
          <p>The introduction of a new narrator should mark the beginning of a chapter, for clarity. Once a narrator has been introduced, however, you can then shift back to them back in mid-chapter or mid-scene.</p>

          <h4>14.4.2 	POV consistency</h4>
          <p>You can change the narrator, but don’t change the type of POV mid-story. For instance, if your first narrator speaks in first person, and you want a second narrator, they must also speak in first person. Doing otherwise is annoying and confusing, but also raises unfortunate implications, like that your characters are less than equal, or one has more/less insight than the other, or one’s thoughts and feelings are more important than the others, etc. </p>

          <h3 id="post-which-pov-to-use">14.6: Which POV to Use</h3>
          <p>The practicalities of POV are that it determines:</p>
          <ol>
            <li>What observations you can make;</li>
            <li>How your writing voice will sound;</li>
            <li>How credible the account will be;</li>
            <li>Which characters the reader relates to or identifies with;</li>
            <li>How objective or subjective the account will be;</li>
            <li>Amount of intimacy with the events;</li>
            <li>What information the narrator has;</li>
            <li>Whether the story is more action-driven (concrete events) or character-driven (thoughts and feelings);</li>
            <li>Impact on the story based on changes in the narrator’s information (usually, either all-knowing, i.e. no change, or gradual increase in knowledge)</li>
            <li>How difficult writing will be (more POVs will be harder).</li>
          </ol>

          <p>A big factor is the ‘how would the narrator know that?’ test. If you want to write something your narrator shouldn’t/wouldn’t know, you need to change the POV to suit.</p>
          <p>Bob Mayer observes:</p>
          <p className='italic'>"Think of the Sherlock Holmes stories—who is narrating? Watson. Why? Because this allows Conan Doyle to withhold what Holmes is thinking from the audience."
            <FootnoteRef text="Bob Mayer, 70 Solutions to Common Writing Mistakes." />
          </p>

          <p>Jack Hart provides an anecdote illustrating the importance of selecting the correct point of view:
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
          </p>
          <p className='italic'>“Several years back a fuel tanker on the freeway east of downtown Portland hit a car and burst into furious fl ames. Smoke boiled into the sky, a dark column visible from my downtown perch in the Oregonian’s newsroom. The next morning’s newspaper described the smoke rising into the midsummer sky and “obscuring Mount Hood.”</p>
          <p className='italic'>The reporter who produced the truck- crash story simply assumed that everybody who saw the smoke viewed it from the same direction. Yes, the dark column obscured Mount Hood if you saw it from the expensive West Hills homes looming over downtown. But newspaper readers east of the crash site saw the smoke obscuring not Mount Hood, but the West Hills.”</p>

          <p>He concludes: "Bias aside, you ordinarily pick a stance to give readers the best angle on the unfolding story." </p>
          <p>"Each story can be told from many points of view," said Don Murray, the dean of American newspaper writing coaches. “It is the writer’s task to choose the point of view that will help the reader see the subject.”</p>

          <h3 id="post-implied-change-of-pov">14.7: Implied Change of POV</h3>
          <p>Ensure you don’t accidentally change perspective. You may do this by describing characters thoughts and feelings which only they would be aware of. </p>
          <p>If you do this deliberately, Mittelmark and Newman advise that, if your perspective change lasts less than one page, dump it.</p>
          <p>Also note certain terms can imply a change of perspective – i.e. a perspective shift can occur in a single word. For instance:</p>

          <p className='italic'>I smiled <span className="underline">conceitedly</span> at the glowing reviews for my latest performance.</p>
          <p className='italic'>He didn’t like feeling left out. “I’ve gone sky diving, too,”  <span className="underline">he boasted</span></p>
          <p className='italic'>“That’s not fair!”  <span className="underline">he sniveled</span></p>

          <p>In all these cases, the characters themselves are unlikely to have described themselves like this, which necessitates an implied narrator to make sense of the description. This confuses the reader as it implies we’ve jumped out of the character’s head and are viewing them from some other perspective.</p>

          {/* ------------------------------------------------- comment Form footnotes --------------------------------------------- */}

          <hr className="my-6 border-t border-gray-400" />
          <h1 className="text-2xl font-bold mb-4">Leave a Comment</h1>

          <CommentForm />
          <CommentList />

          {/* ------------------------------------------------- footnotes --------------------------------------------- */}

          {/* Back to Top Link */}
          <a href="#" className="mt-6 inline-block px-4 py-2 bg-white text-midBlue rounded border border-midBlue shadow hover:bg-gray-200 hover:text-midBluey hover:border-midBluey transition">Back to Top</a>
        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4">
          {/* About Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">About</div>
            <p className="font-source-code-pro text-xs mt-1">Point of View is created by the perspective and choice of narrator. Choice of POV is based on the information needed to tell the story, and which (or whether any) character possesses it.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-what-is-point-of-view" className="hover:underline hover:text-white">14.1: What is Point of View?</a></li>
              <li className="mb-px"><a href="#post-first-person" className="hover:underline hover:text-white">14.2: First Person</a></li>
              <li className="mb-px"><a href="#post-second-person" className="hover:underline hover:text-white">14.3: Second Person</a></li>
              <li className="mb-px"><a href="#post-third-person" className="hover:underline hover:text-white">14.4: Third Person</a></li>
              <li className="mb-px"><a href="#post-multiple-shifting-narrators" className="hover:underline hover:text-white">14.5: Multiple Shifting Narrators</a></li>
              <li className="mb-px"><a href="#post-which-pov-to-use" className="hover:underline hover:text-white">14.6: Which POV to Use</a></li>
              <li className="mb-px"><a href="#post-implied-change-of-pov" className="hover:underline hover:text-white">14.7: Implied Change of POV</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/setting" className="hover:underline hover:text-white">Setting</a></li>
              <li className="mb-px"><a href="/description" className="hover:underline hover:text-white">Description</a></li>
              <li className="mb-px"><a href="/voice" className="hover:underline hover:text-white">Voice</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default POV;