// src/app/scenes.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import scenesBanner from '../assets/scenesbanner.jpg';
import Image from "next/image";

function Scenes() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Scenes</h1>

        <blockquote className="text-sm italic mb-2">
          “INSERT SCENES QUOTE HERE.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Attribution</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={scenesBanner} alt="premise background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex flex-col-reverse sm:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-anatomy-of-a-scene" className="mb-2 font-semibold">6.1: Anatomy of a Scene</h3>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.1.1 What Is A Scene?</h4>
          <p className="text-sm mb-4 font-rubik">Robert McKee
            <FootnoteRef text="Robert McKee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            says that a scene is an 'event,'' and an 'event' is change. A story event creates meaningful change in your main character's life, expressed in terms of a value/s and achieved through conflict.</p>
          <p className="text-sm mb-4 font-rubik">The 'value' is something meaningful to your character, which is at stake: love, life, liberty, truth, justice, etc. The conflict is the obstacle threatening the value. The state of the character's relation to the value should change by the end of a scene (this is the 'change' referred to above), otherwise the scene is pointless. The change needs to be contrasting or oppositional - you can't go from 'good' to 'better,'' but you can go from 'bad' to 'worse,' (bad changes are, by their nature, always oppositional; i.e. they oppose the protagonist. Also, there is some relativity when a situation becomes 'worse,' it makes the previous 'bad' situation look 'good' by comparison).</p>
          <p className="text-sm mb-4 font-rubik">Mckee says a novel may have over 60 scenes/events, as a rough estimate. That figure sounds a little big to me; my analysis of Pet Sematary
            <FootnoteRef text="Pet Sematary, Stephen King." />
            (144K words) identified about 45 scenes, and that was a long novel. A standard 80K word novel (little more than half that size) will have even less.</p>
          <p className="text-sm mb-4 font-rubik">Every scene must move towards the conclusion. If a scene's only purpose is to provide exposition, delete it and work the information into the story.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.1.3 	Sequences</h4>
          <p className="text-sm mb-4 font-rubik">A sequence is a series of scenes - two to five - which culminates with greater impact than those previous scenes. Think of the plot's end as the ultimate goal. In order to achieve that goal, the main character must face a number of challenges/obstacles; the culmination of each of these occurs at the end of a sequence. In order to overcome the challenges, the main character must overcome some wins and losses - these wins and losses occur at the end of each scene.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.1.4 	Acts</h4>
          <p className="text-sm mb-4 font-rubik">A series of sequences comprises an Act. The Act culminates with a major reversal of the value in respect of the character - i.e. a major change. The end of an Act will have a greater impact on the main character than the end of a sequence. A series of Acts comprises the story at large. McKee provides the helpful tip that the climax of every scene may be reversible (e.g. life could be spared, people reunite, relationships could be mended, etc) until the climax of the last scene, which must be irreversible.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.1.5 	Example of structure:</h4>
          <p className="text-sm mb-4 font-rubik">Take Pet Sematary as an example.</p>

          <p className="text-sm mb-4 font-rubik"><span className="underline">The Plot:</span> The main character's son dies, so he uses a cursed burial ground to reanimate his body.</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">The Conflict:</span> Death.</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">The Value:</span> The main character's relation to life and death changes on a scene-to-scene basis throughout the story.</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">Example of a Beat:</span> Jud offers to take the protagonist and his family to see the local Pet Cemetery.</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">Example of a Scene:</span> Jud shows the family the local Pet Cemetery.</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">Example of a Sequence:</span> Jud takes the protagonist and his family to see the Pet Cemetery. This exposes the daughter to the concept of death. The discussion upsets the mother, who is traumatized by a childhood incident. Protagonist resolves not to further expose his wife to the trauma of death.</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">Example of an Act:</span> After protagonist and his family move into a new house, neighbour Jud takes them to see the Pet Cemetery. This exposes the daughter to the concept of death. The discussion upsets the mother, who is traumatized by a childhood incident. Protagonist resolves not to further expose his wife to the trauma of death. When his daughter’s cat dies, Jud takes him to a special burial ground to bury it, and it comes back to life, but wrong.</p>

          <h3 id="post-sex-words" className="mb-2 font-semibold">6.2: 'Sex Words'</h3>
          <p className="text-sm mb-4 font-rubik">Concept which 'sex up' your story. Not so much words, but categories which certain 'magic words' enliven, e.g. strategic use of the word 'beautiful' enlivens the 'sex' category.</p>
          <p className="text-sm mb-4 font-rubik">Screenwriter Blake Snyder
            <FootnoteRef text="Blake Snyder, Save the Cat! The Last Book on Screenwriting You'll Ever Need." />
            calls these 'primal urge' concepts, i.e. survival, hunger, sex, protection of loved ones, fear of death, etc. He says that the lead characters must have these basic needs, wants and desires as the stakes.</p>
          <p className="text-sm mb-4 font-rubik">Sex words/categories include:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Sex</li>
            <li>Secrets</li>
            <li>Revenge</li>
            <li>Loss</li>
            <li>Irony and Coincidence</li>
            <li>Enormous Risk</li>
            <li>Money</li>
            <li>Mystery (including abnormality, inexplicability, freakishness)</li>
            <li>Sacrifice</li>
            <li>Death</li>
            <li>Tragedy</li>
            <li>Fortune</li>
            <li>Profanity and Cruelty</li>
            <li>Spirituality (meaning of life, the cosmos, grand causation, etc) </li>
            <li>Criminality and Taboo</li>
            <li>Justice and Injustice</li>
            <li>Security</li>
            <li>Power</li>
            <li>Identity</li>
            <li>Wisdom and Rare Knowledge</li>
          </ol>

          <h3 id="post-forums-for-raising-and-resolving-conflict" className="mb-2 font-semibold">6.3: Forums for Raising and Resolving Conflict</h3>
          <p className="text-sm mb-4 font-rubik">Scenes shouldn't be inserted just because they sound 'cool' or interesting (however, if they are, that's a bonus). They should be forums for your characters to introduce and resolve conflicts, and debate questions which are invoked by the theme (obviously you don't have them literally debate – rather you will use subtext through their dialogue and actions). The scenes should also move toward your conclusion. It's as if your novel is in its entirety an essay, and your scenes are the paragraphs - e.g. - </p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li><span className="underline">Premise: </span>A guy and his brother get in a drunken fight with some members of the local town's football team; the brother is killed and the football players are shielded from punishment and the guy plans to get back at them;</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Theme: Revenge; is it worth it?</li>
              <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
                <li>Potential scene: guy sleeps with the girlfriend of the football team's best player and gets her pregnant;</li>
              </ol>
            </ol>
          </ol>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li><span className="underline">Premise: </span>Due to a misunderstanding, a guy is branded a child predator by his tight-knit community;</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Theme: Fear: is it stronger than logic?</li>
              <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
                <li>Potential scene:	Someone comes across his dead body in the forest - this suggests the strength of fear; it's either compelled someone to murder him, or the man to kill himself.</li>
              </ol>
            </ol>
          </ol>

          <h3 id="post-the-e-chain" className="mb-2 font-semibold">6.4: The 'E Chain'</h3>
          <p className="text-sm mb-4 font-rubik">Even when you've thought up a bunch of scenes, you might be wondering how to arrange them. My method is the E chain. This divides scenes into the 3 sequential types of information you want scenes to contain:</p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Encouragement</li>
            <li>Events</li>
            <li>Effects</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">This might sound familiar if you've read the synopsis chapter. What I meant by 'events' and 'effects' there means the same thing here. Also, the numerical sequence (1, 2, 3) is intentional; that is the actual order you want to formulate these elements. This doesn't, however, mean you have to start the story with Encouragement, leading through to Effects. You could start anywhere, as long as you don't subsequently break the chain.</p>
          <p className="text-sm mb-4 font-rubik">Here's an example of a simple E chain (consider which is the encouragement, event, and effect):</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">I came late to the meeting because my car broke down. When I arrived I heard my colleague say a terrible think about me because he didn't think I was coming. I didn't talk to him after that.</div>

<p className="text-sm mb-4 font-rubik"><span className="font-bold">(1) Encouragement: </span>This refers to the narrative pressures or forces acting on your characters, informing their decision-making and driving your characters’ behaviour. Encouragement could be:</p>

<p className="text-sm mb-4 font-rubik"><span className="font-bold"></span></p>

<p className="text-sm mb-4 font-rubik"><span className="bg-hYellow">External</span></p>
<p className="text-sm mb-4 font-rubik"><span className="bg-hGreen">Internal</span></p>
<p className="text-sm mb-4 font-rubik"><span className="bg-hRed">Complex</span></p>
<p className="text-sm mb-4 font-rubik"><span className="bg-cyan">Unidentified</span></p>






<p className="text-sm mb-4 font-rubik"><span className="font-bold"></span></p>







<p className="text-sm mb-4 font-rubik"><span className="font-bold"></span></p>




  
 
 

 

  
 
 
 
 
 
 

 
 
 
 
          {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

          <hr className="my-6 border-t border-gray-400" />
          <h1 id="post-premise-comments" className="text-2xl font-bold mb-4">Leave a Comment</h1>

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
              <li className="mb-px">
                <a href="#post-premise-comments" className="hover:underline hover:text-white">Comments</a>
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

export default Scenes;