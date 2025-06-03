// src/app/premise.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg';
import Image from "next/image";

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
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex flex-col-reverse sm:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-your-story-in-one-sentence" className="mb-2 font-semibold">2.1: Your Story In One Sentence</h3>

          <p className="text-sm mb-4 font-rubik">
            The premise is the essence of your plot. You should be able to sum up your story in one sentence. If you can&#39;t, you will be unable to pitch your story in an intention-grabbing way.
          </p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.1.1 	Difference between Premise and Plot</h4>
          <p className="text-sm mb-4 font-rubik">By contrast, your plot is a little more detailed; it suggests a beginning, middle and end. Unlike premises, plots contain <u>goals</u> (forces of progression) and <u>obstacles</u> (forces of regression).</p>
          <p className="text-sm mb-4 font-rubik">Consider which of the following premises constitute a plot:</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>A man uses a portal to travel back in time;</li>
              <li>A girl&#39;s identical twin mysteriously vanishes;</li>
              <li>A bunch of kids wash up on a deserted island;</li>
              <li>A young boy discovers he is a wizard;</li>
              <li>A woman is terrorized by a rabid dog;</li>
              <li>Aliens invade Earth and start exterminating humanity;</li>
              <li>A group of strangers stay the night in a haunted house;</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">The answer is: none of the above. These are all premises. Why? None of these examples have plot direction. They constitute larger worlds but don&#39;t provide the tighter narrative pathway which will explore the larger world. They don&#39;t have both goals and obstacles. Without these, your main character is merely a tourist or sightseer in their own story; they have nothing to do other than observe the events randomly happening around them.</p>
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
          <p className="text-sm mb-4 font-rubik">A quick formula for generating a basic plot is putting X character in Y situation — this has the bonus of creating a protagonist as well. The situation (or location) should act as a foil for the character, emphasizing the character&#39;s traits and increasing conflict. This is a great starter for short stories.</p>
          <p className="text-sm mb-4 font-rubik">Examples:</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>What if a cynical ghost hunting skeptic was in a genuinely haunted house?<FootnoteRef text="1408, Stephen King." />
              </li>
              <li>What if an intellectually handicapped man was in an experiment that made him a genius?<FootnoteRef text="Flowers for Algernon, Daniel Keyes." />
              </li>
              <li>What if a typical, conservative 1950s breadwinning husband started physically shrinking? <FootnoteRef text="The Incredible Shrinking Man, Richard Matheson." />
              </li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">Note this method doesn&#39;t work if your protagonist is an &#39;everyman&#39; or ordinary person in an abnormal situation — in that case, the plot is the abnormal situation. But here, like Yin and Yang, the plot is a combination of the protagonist and the situation — you can&#39;t subtract or replace either. For instance, you can&#39;t switch Carrie in Carrie with any of the other kids, because her timid, agreeable, repressive nature builds the conflict, however you could switch Harry Potter with another kid in Harry Potter, because his personality doesn&#39;t build the conflict (outside events do).</p>
          <p className="text-sm mb-4 font-rubik">Compare with a story which is not &#39;X in Y&#39; — Jurassic Park by Michael Crichton. You can put any characters in a living Dinosaur Park and it&#39;ll be interesting seeing them try to survive. Also goes for any story with a survival element (e.g. Lord of the Flies by William Golding, Arena by Matthew Reilly, The Hunger Games by Suzanne Collins).</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.1.3 A Bridge Too Far</h4>
          <p className="text-sm mb-4 font-rubik">An idea related to X in Y is to give your protagonist special capability, knowledge or experience, and put them in a situation which requires them to use that capability, knowledge or experience, but seems to be a little above their abilities.</p>

          <h3 id="post-building-your-story-from-the-premise" className="mb-2 font-semibold">2.3: Building the Story from the Premise</h3>
          <p className="text-sm mb-4 font-rubik">&#39;How to Write&#39; advice tends to suggest starting with a character and an obstacle, or a challenge. When I kick start a story I normally start with a character and a question. A question should not be rhetorical or abstract. It should create the subject for the plot; above all. You pose the question not to the protagonist, but the reader — the question should be something the reader wants answered, and they will read the rest of the story to get the answer. A good question might begin: &#39;What If...?&#39;  For instance, here&#39;s an idea I made up on the spot:</p>
          <p className="text-sm mb-4 font-rubik">Protagonist is up late one night at home and hears a strange sound pass over their house. They go outside and find a mysterious smoking object sitting in their backyard.</p>
          <p className="text-sm mb-4 font-rubik">This builds the question: &#39;What if someone found some alien technology?&#39; Notice this does not create an obstacle or a challenge — that comes later.</p>
          <p className="text-sm mb-4 font-rubik">At this point you could start building an &#39;E chain&#39;. Start with the three major plot points (events) creating the plot arc (generally: (1) Challenge (2) Complication (3) Solution) for example:</p>

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
            <li>Protagonist&#39;s alien infection starts turning him into an alien.</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Or:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Protagonist finds mysterious object;</li>
            <li>Protagonist is beamed to alien planet;</li>
            <li>Protagonist marries alien prince/princess.</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">I give different examples to show that your question should not lock you into a predetermined &#39;answer.&#39; At this stage your story can still be about whatever you want, in whatever genre you want. To further expand the E chain, let&#39;s take one of the above examples:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li><span className="bg-hYellow">[event]</span> Protagonist finds mysterious object;</li>
            <li><span className="bg-hYellow">[event]</span> Protagonist is beamed to alien planet;</li>
            <li><span className="bg-hYellow">[event]</span> Protagonist is married to an alien prince/princess</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">
            For each &#39;Event,&#39; you&#39;re brainstorming to resolve why the event happens, in the most interesting, dynamic ways you can think of. Refer to &#39;Encouragement&#39; and &#39;Effect&#39;, to create a logical chain of activity. For example, starting with number one:
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

          <p className="text-sm mb-4 font-rubik">You could just say your protag has a curious and investigative personality, but this is easy and uninteresting. Alternatively, you could set up that your protag&#39;s beloved GF/BF recently ended their relationship because they found protag boring. That is a more interesting incentive for your protag to investigate the object, particularly if they suspect it came from space. Surely a discovery of an alien artefact makes someone highly interesting. It also raises a great potential sub-plot about your protag trying to get back their ex — and notice how this raises interesting conflict with the &#39;married to alien&#39; event later.</p>
          <p className="text-sm mb-4 font-rubik">We can use this brainstorming to flesh out the E chain (remember that &#39;encouragement&#39; comes before &#39;event&#39; even though below I&#39;ve put it under event):</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik ml-6">
              <li><span className="bg-hYellow">[event] </span>Protagonist finds mysterious object;</li>
              <ol className="list-decimal list-inside mb-4 mt-4 font-rubik ml-6">
                <li><span className="bg-hRed">[enouragement] </span>Protag dumped by ex for being &#39;boring&#39;; wants to use object to disprove this to ex;</li>
                <li><span className="bg-cyan">[effect] </span>protagonist investigates and experiments with object;</li>
                <li><span className="bg-hRed">[enouragement] </span>Protagonist does not tell anyone about object, wanting to get the credit for discovering it to impress ex;</li>
              </ol>
              <li><span className="bg-hYellow">[event] </span>Protagonist is beamed to alien planet;</li>
              <ol className="list-decimal list-inside mb-4 mt-4 font-rubik ml-6">
                <li><span className="bg-hRed">[enouragement] </span>Protag wants to return home to be with ex and attempts to befriend and flatter alien prince/princess to get them to return him/her home to Earth;</li>
                <li><span className="bg-cyan">[effect] </span>The alien prince/princess falls in love with protag; </li>
              </ol>
              <li><span className="bg-cyan">[event] </span>Protagonist is married to an alien prince/princess;</li>
              <ol className="list-decimal list-inside mb-4 mt-4 font-rubik ml-6">
                <li><span className='blue-text-span'>[effect] </span>Earth learns of this and protag is made diplomat representing Earth to alien planet;</li>
                <li><span className="bg-cyan">[effect] </span>Ex realises protag — diplomat for Earth and discoverer of aliens — has become most interesting person on the planet and regrets dumping them;</li>
                <li><span className="bg-cyan">[effect] </span>Protag declines ex&#39;s plea to resume relationship OR protag divorces alien and gets back with repentant ex OR other </li>
              </ol>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">It&#39;s beginning to look like a &#39;chain&#39; now. You may find less instances of encouragement as you go along — that&#39;s fine. Encouragement winds the characters&#39; up into performing plot-relevant action. If you set it up substantially early on (as you should be) you&#39;ll find it will cover you for the rest of the story.</p>
          <p className="text-sm mb-4 font-rubik">Now you can take number two and three and repeat the process. You can then repeat the process on the encouragement and effects — for instance, if protag gets back with ex, why? Has ex changed? How and why? These questions need to be answered through their own scenes.</p>
          <p className="text-sm mb-4 font-rubik">This is where the challenges and obstacles (above) come in: You want to continually ask &#39;what if&#39; to generate the most interesting scenarios. For instance, what if the alien prince/princess realised the protag retained feelings for the ex, jealously abducted the ex to be put to death? What if the protag loved the alien planet and the alien prince/princess better than Earth and the ex, but every visit to its toxic atmosphere harmed the protag. What if the alien prince/princess impregnated protag? What if it looked like protag had a chance with ex again, but ex was killed? What if protag had to choose between ex and the alien planet/princess/prince? What if the alien prince/princess had protag turned into an alien? What if Earth waged war on the aliens, and protag had to choose a side?</p>
          <p className="text-sm mb-4 font-rubik">Notice the above questions centre on the relationships. In this plot, that&#39;s where the interest lies because it&#39;s the encouragement — the thing pushing the protagonist on. If you want to run a different kind of &#39;what if&#39; like &#39;what if the aliens threaten to blow up the planet&#39; you need to tie it into the protag&#39;s incentives, for instance, this makes protag comply with aliens&#39; demands because if planet blew up, ex would die. But if protag doesn&#39;t like ex anymore, it&#39;s not a good plot point because saving the world at large gives no direct connection for the reader to relate to, particularly if protag has a surrogate home — the alien planet — to remain on. So you can see how important former encouragement is for subsequent events.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.3.1 Start Big</h4>
          <p className="text-sm mb-4 font-rubik">When using an E Chain, once you have brainstormed multiple possible stories and you&#39;re figuring out which brainstormed scenes to pursue (and which to abandon), prioritize your biggest scenes, or most interesting scenes.</p>

          <h3 id="post-structuring-the-plot-with-live-issues" className="mb-2 font-semibold">2.4: Structuring the plot with live issues</h3>
          <p className="text-sm mb-4 font-rubik">In basic form, a novel is where you tell the reader &#39;stick around for the next 200 pages and something excellent will happen.&#39; Why not save the reader time and condense your story into a short story, 3000 words ending with something excellent? Or, why not just tell the reader the &#39;excellent&#39; thing immediately? Why go to the bother?</p>
          <p className="text-sm mb-4 font-rubik">The novel must be something more: generally every 3000 words something good is happening (a &#39;live issue&#39;), and by the end, something excellent has happened (the climax).</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.4.1 	What is a &#39;Live issue&#39;?</h4>
          <p className="text-sm mb-4 font-rubik">What is the aforementioned &#39;something good&#39; that litters the story? Answer: a &#39;live issue&#39;.</p>
          <p className="text-sm mb-4 font-rubik">A live issue is a plot element which raises an issue that demands resolution. It&#39;s a plot detail that causes the reader to ask questions and demand answers (who, what, when, where, why, how).</p>

          <div className="p-3 mb-3 rounded bg-hYellow border border-gray-300 font-rubik">
            <p className="mb-0">“Good stories need an engine, a question the story answers for the reader. Who done it? Guilty or not guilty? Who will win the race? Which man will she marry? Will the hero escape, or die trying? Good questions drive good stories.” </p>
            <p></p><i>— Roy Clark
              <FootnoteRef text="Roy Clark, Writing Tools: 50 Essential Strategies for Every Writer." />
            </i></div>

          <div className="p-3 mb-3 rounded bg-hYellow border border-gray-300 font-rubik">
            <p className="mb-0">"Plant little queries along the way, little hints and teasers. Then answer them one by one, substituting new queries as you do." </p>
            <p></p><i>— David Carroll
              <FootnoteRef text="David Carroll, A Manual of Writer's Tricks." />
            </i></div>

          <p className="text-sm mb-4 font-rubik">Live issues must accord with all of these criteria:</p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik ml-6">
            <li>They relate to the plot;</li>
            <li>They help or hinder the protagonist; and</li>
            <li>The issue puts something at stake;</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Insinuating that a side character is hiding a secret is not a live issue. But, insinuating that a side character is hiding a secret from the protagonist, which bears on the plot, is a live issue. Other times, the reader already knows the answer to the live issue&#39;s question, they just want to see it play out — that&#39;s also acceptable, as long as you ask the right question.</p>
          <p className="text-sm mb-4 font-rubik">It&#39;s critical to structure your plot with live issues. Without, your story will be a guaranteed flop. You literally fail to provide your reader any reason to read it.</p>
          <p className="text-sm mb-4 font-rubik">Sphere by Michael Crichton, is a good example of a plot structured with live issues. The main plot issue is: What is the Sphere? Wisely, the novel does not limit itself that question. Each chapter raises a new question/s to continue to feed the reader&#39;s interest and reward their continued reading. Examples of live issues raised throughout:</p>
          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.4.2 	Examples of live issues</h4>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Protag gets summoned to a secret military/navy base (why?);</li>
              <li>An alien spaceship was found in the deep sea (What? how? Why?);</li>
              <li>The spaceship has never before seen human technology (how?);</li>
              <li>The ship&#39;s original crew is missing (where?)</li>
              <li>The physicist starts talking ominously like something bad will happen to them (why? What?)</li>
              <li>A piece of alien technology — the sphere — is found on the ship (what?)</li>
              <li>A character is seen entering the sphere (how?)</li>
              <li>The previous character won&#39;t say what was in the sphere (why?)</li>
              <li>A single mummified crew mate is discovered in a secret room that wasn&#39;t there before (how? Who?)</li>
              <li>Marine life is found with impossible anatomy (how? What?)</li>
              <li>More marine life is found but now with the correct anatomy (why?)</li>
              <li>The ship&#39;s AI communicates to the crew (who? How?)</li>
              <li>Bad things happen because an antagonist entered the sphere, but once he is incapacitated, bad things still happen (why? How?)</li>
              <li>Different rooms in the spaceship change appearance inexplicably (how? Why?)</li>
              <li>Protag accuses female character of entering the sphere, female cross-accuses same about protag (who?)</li>
              <li>Multiple different characters acting out of character (why?)</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">With each new question raised, you get increasingly pumped for the conclusion, which you expect to answer all these questions, and it does. Also, although different questions are answered at different times, Crichton never answers all his questions; there is always at least one question open. Even better, some of the answers actually raise more questions. Lastly, the ending does not directly answer all of the questions, but throughout the story, enough information is provided for the reader to answer those questions themselves — this is a great way to encourage multiple reading, or just keeping the story in your reader&#39;s mind to encourage discussion with others, and possibly recommendation.</p>
          <p className="text-sm mb-4 font-rubik">Ira Levin is another author skilled at using live issues, see for instance in the Stepford Wives:</p>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>What happened to the women's association?</li>
              <li>What do the men do at the men's association?</li>
              <li>Why do the women act strangely?</li>
              <li>Was the talkative police officer in on the 'plot'?</li>
              <li>Is Dale a robot? </li>
              <li>What happened to Bobby?</li>
              <li>What did Bobby do with the knife?</li>
              <li>What happened to Joanne?</li>
              <li>Are the women altered with robotics, or entirely replaced with robots? and if they're replaced, do the original women get killed?</li>
              <li>Was Walter in on the 'plot'?</li>
              <li>Who is 'in' on it, and who isn't?</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">Levin is also great at resolving his issues; or <i>not</i> resolving them. His thriller The Stepford Wives is a lesson in the economy of suspense; he only gives you the threadbare information to get the gist of what's going on, without outright telling you, and like Crichton, leaves specific details unexplained at the end.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.4.3 	...And Foreclosure</h4>
          <p className="text-sm mb-4 font-rubik">If you raise issues, you must give them satisfying closure. Generally, this means, if you raised questions, you must provide answers, and if you make promises you must deliver.</p>
          <p className="text-sm mb-4 font-rubik">Exceptions: Note, in the &#39;Sphere&#39; example above, I mentioned some issues were raised and left unanswered. For instance, one of these issues was, at any one time, precisely who is acting under the influence of the Sphere — by the end of the story, as long as it&#39;s revealed how the Sphere works on the characters generally, we don&#39;t need to know who was specifically affected at all times — it would be interesting to know, but not necessary.</p>
          <p className="text-sm mb-4 font-rubik">This was acceptable, as certain exceptions applied, e.g.</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>The issue was relatively unimportant, compared to other issues;</li>
            <li>Nothing was at stake if the issue went unresolved;</li>
            <li>The issue was created by implication, rather than expressed outright;</li>
            <li>No answer would have been more effective than leaving the reader to wonder (i.e. the &#39;closed door&#39; rule)  </li>
          </ol>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">2.4.4 	Turning Dead Issues Into Live Issues</h4>
          <p className="text-sm mb-4 font-rubik">INSERT STUFF HERE</p>

          <h3 id="post-the-strange-sandwich" className="mb-2 font-semibold">2.5: The 'Strange Sandwich'</h3>
          <p className="text-sm mb-4 font-rubik">Never write strange on strange. Your plot can be strange, but your reader needs to be able to contrast the strangeness with commonplace real life. Therefore, you should never layer strange plot elements on strange elements — e.g. strange characters layered on a strange setting — otherwise the reader won&#39;t have anything solid to contrast the strange against. As with anything, strangeness is only apparent by contrast with its opposite, normality.</p>
          <p className="text-sm mb-4 font-rubik">As an example of &#39;strange on strange&#39; I saw a story idea posted on Reddit where characters are on an alien planet, trapped in a 4D labyrinth, and being hunted down by an alien monster. Cool idea, but utterly unrelatable. Any single one of those ideas is stronger on its own, against a backdrop of normality. But all combined, risks giving the reader &#39;strangeness&#39; fatigue.</p>
          <p className="text-sm mb-4 font-rubik">My E chain plot example further above has 3 strange elements — </p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li> A weird alien device;</li>
              <li> An alien planet/civilization;</li>
              <li> An alien prince/princess.</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">This is okay as long you separate each strange element and relate it to, or backdrop it against, something ordinary to &#39;normalize&#39; it. Once a strange element has been normalized, you can then introduce another strange element. Think of it like separating exotic sandwich ingredients each with another slice of bread: too much bread together tastes bland, but too many exotic ingredients together and flavours clash or cancel each other out.</p>
          <p className="text-sm mb-4 font-rubik">To normalize each strange element, try to pair it with something relatable in real life, for example:</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>  [A weird alien device] → A person digs up a strange object/artefact/antique in their backyard</li>
              <li>  [An alien planet/civilization] → A person is lost in the wilderness</li>
              <li>  [An alien prince/princess] → Meeting someone from a totally foreign culture</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">There are countless examples you could think up. For example, maybe the protag steals the alien device from a museum or bids for it at a junk sale; weird but relatable. Maybe protag watches a sci-fi video before realizing he is viewing footage of the actual alien planet (people can relate better to watching something strange on TV than seeing it in real life). Maybe protag communicates long distance with the alien prince/princess for a long time, before meeting him/her in person and realizing he/she&#39;s an alien — people can relate to long distance communication where the person in real life doesn&#39;t seem anything like their long distance self.</p>

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
            <p className="font-source-code-pro text-xs mt-1">The premise is a story's core idea, summed up in one or two sentences.</p>
          </div>

          {/* Index Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-your-story-in-one-sentence" className="hover:underline hover:text-white">2.1: Your Story In One Sentence</a>
              </li>
              <li className="mb-px">
                <a href="#post-ideas" className="hover:underline hover:text-white">2.2: Ideas</a>
              </li>
              <li className="mb-px">
                <a href="#post-building-the-story-from-the-premise" className="hover:underline hover:text-white">2.3: Building the Story from the Premise</a>
              </li>
              <li className="mb-px">
                <a href="#post-structuring-the-plot-with-live-issues" className="hover:underline hover:text-white">2.4: Structuring the plot with live issues</a>
              </li>
              <li className="mb-px">
                <a href="#post-the-strange-sandwich" className="hover:underline hover:text-white">2.5: The 'Strange Sandwich'</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/premise" className="hover:underline hover:text-white">Title</a>
              </li>
              <li className="mb-px">
                <a href="/plot" className="hover:underline hover:text-white">Logline</a>
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