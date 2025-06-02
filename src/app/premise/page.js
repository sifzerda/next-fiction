// src/app/premise.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";

function Premise() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Premise</h1>

        <blockquote className="text-sm italic mb-2">
          “Even the most complicated stories start with a very simple premise.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Chris Van Allburg</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={premiseBanner} alt="premise background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-yourstoryonesentence" className="mb-2 font-semibold">2.1: Your Story In One Sentence</h3>

          <p className="text-sm mb-4 font-rubik">
            The premise is the essence of your plot. You should be able to sum up your story in one sentence. If you can’t, you will be unable to pitch your story in an intention-grabbing way.
          </p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.1.1 	Difference between Premise and Plot</h4>
          <p className="text-sm mb-4 font-rubik">By contrast, your plot is a little more detailed; it suggests a beginning, middle and end. Unlike premises, plots contain <u>goals</u> (forces of progression) and <u>obstacles</u> (forces of regression).</p>
          <p className="text-sm mb-4 font-rubik">Consider which of the following premises constitute a plot:</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>A man uses a portal to travel back in time;</li>
              <li>A girl’s identical twin mysteriously vanishes;</li>
              <li>A bunch of kids wash up on a deserted island;</li>
              <li>A young boy discovers he is a wizard;</li>
              <li>A woman is terrorized by a rabid dog;</li>
              <li>Aliens invade Earth and start exterminating humanity;</li>
              <li>A group of strangers stay the night in a haunted house;</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">The answer is: none of the above. These are all premises. Why? None of these examples have plot direction. They constitute larger worlds but don’t provide the tighter narrative pathway which will explore the larger world. They don’t have both goals and obstacles. Without these, your main character is merely a tourist or sightseer in their own story; they have nothing to do other than observe the events randomly happening around them.</p>
          <p className="text-sm mb-4 font-rubik">By contrast, the following premises do constitute plots:</p>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>A man uses a portal to travel back in time to kill Hitler;</li>
              <li>A girl searches for answers after her identical twin mysteriously vanishes;</li>
              <li>After washing up on a deserted island, a bunch of kids slowly turn on each other in their desperation to survive;</li>
              <li>A young boy discovers he is a wizard and is destined to kill the dark lord wizard;</li>
              <li>A woman is terrorized by a rabid dog and must protect her son;</li>
              <li>After aliens invade Earth and start exterminating humanity, a man must leave his home and seek shelter;</li>
              <li>To win a million dollar prize, a group of strangers stay the night in a haunted house;</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">The above give the main characters a direction, a goal. You suggest, of the infinite possibilities which spring from the idea (time travel, wizardry, alien invasion, etc) which angle you are going for, which tells your reader what your story is actually about. </p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.1.2 X in Y</h4>
          <p className="text-sm mb-4 font-rubik">A quick formula for generating a basic plot is putting X character in Y situation – this has the bonus of creating a protagonist as well. The situation (or location) should act as a foil for the character, emphasizing the character’s traits and increasing conflict. This is a great starter for short stories.</p>
          <p className="text-sm mb-4 font-rubik">Examples:</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>What if a cynical ghost hunting skeptic was in a genuinely haunted house?<FootnoteRef text="1408, Stephen King." /></li>
              <li>What if an intellectually handicapped man was in an experiment that made him a genius?<FootnoteRef text="Flowers for Algernon, Daniel Keyes." /></li>
              <li>What if a typical, conservative 1950s breadwinning husband started physically shrinking? <FootnoteRef text="The Incredible Shrinking Man, Richard Matheson." /></li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">Note this method doesn’t work if your protagonist is an ‘everyman’ or ordinary person in an abnormal situation – in that case, the plot is the abnormal situation. But here, like Yin and Yang, the plot is a combination of the protagonist and the situation – you can’t subtract or replace either. For instance, you can’t switch Carrie in Carrie with any of the other kids, because her timid, agreeable, repressive nature builds the conflict, however you could switch Harry Potter with another kid in Harry Potter, because his personality doesn’t build the conflict (outside events do).</p>
          <p className="text-sm mb-4 font-rubik">Compare with a story which is not ‘X in Y’ – Jurassic Park by Michael Crichton. You can put any characters in a living Dinosaur Park and it’ll be interesting seeing them try to survive. Also goes for any story with a survival element (e.g. Lord of the Flies by William Golding, Arena by Matthew Reilly, The Hunger Games by Suzanne Collins).</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.1.3 A Bridge Too Far</h4>
          <p className="text-sm mb-4 font-rubik">An idea related to X in Y is to give your protagonist special capability, knowledge or experience, and put them in a situation which requires them to use that capability, knowledge or experience, but seems to be a little above their abilities.</p>

          <h3 id="post-yourstoryonesentence" className="mb-2 font-semibold">2.3: Building the Story from the Premise</h3>
          <p className="text-sm mb-4 font-rubik">‘How to Write’ advice tends to suggest starting with a character and an obstacle, or a challenge. When I kick start a story I normally start with a character and a question. A question should not be rhetorical or abstract. It should create the subject for the plot; above all. You pose the question not to the protagonist, but the reader – the question should be something the reader wants answered, and they will read the rest of the story to get the answer. A good question might begin: ‘What If…?’  For instance, here’s an idea I made up on the spot:</p>
          <p className="text-sm mb-4 font-rubik">Protagonist is up late one night at home and hears a strange sound pass over their house. They go outside and find a mysterious smoking object sitting in their backyard.</p>
          <p className="text-sm mb-4 font-rubik">This builds the question: ‘What if someone found some alien technology?’ Notice this does not create an obstacle or a challenge – that comes later.</p>
          <p className="text-sm mb-4 font-rubik">At this point you could start building an ‘E chain’. Start with the three major plot points (events) creating the plot arc (generally: (1) Challenge (2) Complication (3) Solution) for example:</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Protagonist finds mysterious object;</li>
              <li>Protagonist gets pursued by mysterious security personnel;</li>
              <li>Protagonist destroys the object.</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">Or:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Protagonist finds mysterious object;</li>
            <li>Protagonist uses object and is sent to the future;</li>
            <li>Protagonist returns to present time.</li>
          </ol>


          <p className="text-sm mb-4 font-rubik">Or:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Protagonist finds mysterious object;</li>
            <li>Protagonist is stalked by a terrifying alien presence;</li>
            <li>Protagonist’s alien infection starts turning him into an alien.</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Or:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Protagonist finds mysterious object;</li>
            <li>Protagonist is beamed to alien planet;</li>
            <li>Protagonist marries alien prince/princess.</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">I give different examples to show that your question should not lock you into a predetermined ‘answer.’ At this stage your story can still be about whatever you want, in whatever genre you want. To further expand the E chain, let’s take one of the above examples:</p>

<ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
  <li><span className="bg-hYellow">[event]</span> Protagonist finds mysterious object;</li>
  <li><span className="bg-hYellow">[event]</span> Protagonist is beamed to alien planet;</li>
  <li><span className="bg-hYellow">[event]</span> Protagonist is married to an alien prince/princess</li>
</ol>

<p className="text-sm mb-4 font-rubik">
  For each ‘Event,’ you’re brainstorming to resolve why the event happens, in the most interesting, dynamic ways you can think of. Refer to ‘Encouragement’ and ‘Effect’, to create a logical chain of activity. For example, starting with number one:
</p>

<ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
  <li><span className="bg-hYellow">[event]</span> Protagonist finds mysterious object;</li>
  <li><span className="bg-hYellow">[event]</span> Protagonist is beamed to alien planet;</li>
  <li><span className="bg-hYellow">[event]</span> Protagonist is married to an alien prince/princess</li>
</ol>

<ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
  <li>
    <span className="bg-hYellow">[event]</span> Protagonist finds mysterious object;
    <ol className="list-decimal list-inside mb-4 mt-4 font-rubik ml-6">
      <li><span className="bg-hRed">[encouragement]</span> why does the protag investigate the noise, rather than ignore it?</li>
      <li><span className="bg-hRed">[encouragement]</span> why does the protag take the object and keep it, rather than discard it?</li>
      <li><span className="bg-cyan">[effect]</span> why does the protag take the object and keep it, rather than discard it?</li>
      <li><span className="bg-cyan">[effect]</span> why does the protag take the object and keep it, rather than discard it?</li>
    </ol>
  </li>
</ol>








          <p className="text-sm mb-4 font-rubik">
            He says the essence of storytelling is the ability to evoke a story with a single, silent image. That is the basis of what a storyteller is trying to do.
          </p>

          <h3 id="post-whatisastory" className="mb-2 font-semibold">1.2 What is a Story?</h3>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.2.2 The Opposite of Expectation</h4>



          <FootnoteRef text="Robert McKee, Story, Substance, Structure, Style and the Principles of Screenwriting." />












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
            <p className="font-source-code-pro text-xs mt-1">A story is a collection of events which altogether create a meaningful whole that is greater than the sum of its parts.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-storytelling" className="hover:underline hover:text-white">1.1 Storytelling</a>
              </li>
              <li className="mb-px">
                <a href="#post-whatisastory" className="hover:underline hover:text-white">1.2 What Is A Story?</a>
              </li>
              <li className="mb-px">
                <a href="#post-mainelementsofstory" className="hover:underline hover:text-white">1.3 The Main Elements of a Story</a>
              </li>
              <li className="mb-px">
                <a href="#post-josephcampbellmyths" className="hover:underline hover:text-white">1.5 Joseph Campbell’s Myths</a>
              </li>
              <li className="mb-px">
                <a href="#post-mythsandmisconceptions" className="hover:underline hover:text-white">1.6 Myths and Misconceptions</a>
              </li>
              <li className="mb-px">
                <a href="#post-philosophyofstory" className="hover:underline hover:text-white">1.7 The Philosophy of Storytelling</a>
              </li>
              <li className="mb-px">
                <a href="#post-medium" className="hover:underline hover:text-white">1.8 Medium</a>
              </li>
              <li className="mb-px">
                <a href="#post-pixarstorytelling" className="hover:underline hover:text-white">1.9 Pixar Storytelling</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/premise" className="hover:underline hover:text-white">Premise</a>
              </li>
              <li className="mb-px">
                <a href="/plot" className="hover:underline hover:text-white">Plot</a>
              </li>
              <li className="mb-px">
                <a href="/synopsis" className="hover:underline hover:text-white">Synopsis</a>
              </li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Premise;