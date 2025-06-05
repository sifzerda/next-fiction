// src/app/conflict.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import conflictBanner from '../assets/conflictbanner.jpg';
import Image from "next/image";

function Conflict() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Conflict</h1>

        <blockquote className="text-sm italic mb-2">
          “Happiness is an allegory, unhappiness a story.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Leo Tolstoy</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={conflictBanner} alt="premise background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex flex-col-reverse sm:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-what-is-conflict" className="mb-2 font-semibold">5.1. What is Conflict?</h3>
          <p className="text-sm mb-4 font-rubik">Conflict is struggle between your protagonist and their goals. Conflict is hardship but it is not fate, adversity, bad Luck, misfortune, or coincidence.  These things happen by blind accident or by random chance. They are caused by forces which are indifferent to your protagonist, have no explanation, no resolution, and no purpose. They make the existence of your protagonist unnecessary because they would have happened anyway, to someone else, or no one at all.</p>
          <p className="text-sm mb-4 font-rubik">That's not to say you can't write a flash flood or lottery win into your story; but it's not the conflict. The conflict is the struggle this causes to your protagonist. Also, accidents can happen in your story, but they must communicate important information. For instance, if accidents repeatedly happen it's not the accidents themselves that are important, it's that your character is accident-prone, or reckless, or impulsive and this is important for later. In fact, an unexpected accident, or misfortune is a great way of showing an unexpected side to your character; how they react in a stressful situation, etc.</p>
          <p className="text-sm mb-4 font-rubik">By contrast with fate and chance, conflict happens in measures, proportionate to your protag's goal progress. You can't decide what happens in your story based on the flip of a coin.</p>
          <p className="text-sm mb-4 font-rubik">Conflict also gives your character an opportunity to respond; they have some power to try to change the course of events (even if they fail). Blind misfortune, on the other hand, doesn't care who your protagonist is, and gives him no opportunity, and no recourse.</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="text-sm mb-4 font-rubik">Your character can't sit home passively and accidentally get a telephone call from friend Max, who then volunteers a crucial clue in the murder mystery. Your character has to think things over and then decide that he will call people seeking information. After calling several other people, he comes to Max on his list. He calls Max. Max doesn't want to tell him, but you make your character persist. Finally your character convinces Max to talk, and Max gives him the next clue.
              <FootnoteRef text="Jack Bickham, The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)." />
            </p>
          </div>

          <p className="text-sm mb-4 font-rubik">Notice how the conflict, by making the information harder to get, makes it seem more valuable and after the effort, will make the reader more interested to know what it is. This reinforces an economy of information (see 11.3 Information Economy).</p>

          <h3 id="post-why-is-it-important" className="mb-2 font-semibold">5.2. Why Is It Important?</h3>
          <p className="text-sm mb-4 font-rubik">Conflict is the most crucial element of a story. It's a thread which should run through every aspect of your story. However, conflict is difficult to write because it often means making things harder for your characters - and yourself, as the writer.</p>
          <p className="text-sm mb-4 font-rubik">If there is a lack of conflict in your work, it might be due to use of blocking or providing counteroffers which fall short of the initial promise.</p>
          <p className="text-sm mb-4 font-rubik">Any scene with conflict must be shown as if it's happening, not told, (summarized).</p>

          <h3 id="post-types-of-conflict" className="mb-2 font-semibold">5.3. Types of Conflict</h3>
          <p className="text-sm mb-4 font-rubik">Robert McKee outlines 3 types of conflict.
            <FootnoteRef text="Robert Mckee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            You can distinguish these by whether it involves individuals or entities:</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.3.1 	Inner Conflicts</h4>
          <p className="text-sm mb-4 font-rubik">These involve the minds and selves of characters; struggles not articulated to or involving other characters. There is one individual involved: the character themselves, but there is no conflict between separate individuals.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.3.2 	Personal Conflicts</h4>
          <p className="text-sm mb-4 font-rubik">These are conflicts involving a second person, struggles involving friends, immediate family, lover, colleagues, etc. Involves at least two individuals: the character and another character. May involve more, but note every major participant must be a separate individual (i.e. stand for themselves and their own beliefs).</p>


          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.3.3 	Extra-Personal Conflicts</h4>
          <p className="text-sm mb-4 font-rubik">These are conflicts involving the character and a larger body, including families, organisations, societal groups, systems, governments, nations, races and species. There may be many people involved, however, they are not individuals but agents for an entity - they stand for/represent a larger belief or group.</p>

          <h3 id="post-conflict-does-not-equal-fight" className="mb-2 font-semibold">5.4. Conflict ≠ Fight</h3>
          <p className="text-sm mb-4 font-rubik">Many people hear 'conflict' and immediately think of a fight: verbal or physical. The problem with this notion is that you put an overt fight in your story every time you want to add conflict, it will emotionally exhaust your reader, and make your characters implausibly argumentative, and by extension unlikeable. A better way of conceiving of conflict is in the context of a conflict of interest; like the scenario you may face where your professional duty is in opposition with your personal interest.</p>
          <p className="text-sm mb-4 font-rubik">Another misconception is that you need a 'big' scene to convey 'big' conflict. Often it's more effective to convey big conflict through small scenes. Look at this example:
            <FootnoteRef text="To Kill A Mockingbird, Harper Lee." />
          </p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>&quot;Atticus,&quot; I said one evening, &quot;what exactly is a nigger-lover?&quot; Atticus's face was grave. &quot;Has somebody been calling you that?&quot;</li>
              <li>&quot;No sir, Mrs. Dubose calls you that. She warms up every afternoon calling you that. Francis called me that last Christmas, that's where I first heard it.&quot;</li>
              <li>&quot;Is that the reason you jumped on him?&quot; asked Atticus.</li>
              <li>&quot;Yes sir...&quot;</li>
              <li>&quot;Then why are you asking me what it means?&quot;</li>
              <li>I tried to explain to Atticus that it wasn't so much what Francis said that had infuriated me as the way he had said it.</li>
              <li>&quot;It was like he'd said snot-nose or somethin'.&quot;</li>
              <li>&quot;Scout,&quot; said Atticus, &quot;nigger-lover is just one of those terms that don't mean anything—like snot-nose. It's hard to explain—ignorant, trashy people use it when they think somebody's favoring Negroes over and above themselves. It's slipped into usage with some people like ourselves, when they want a common, ugly term to label somebody.&quot;</li>
              <li>&quot;You aren't really a nigger-lover, then, are you?&quot;</li>
              <li>&quot;I certainly am. I do my best to love everybody...&quot;</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">Ostensibly this scene is merely about a father telling his daughter what a term means. But it's got that everyone-at-the-table-goes-dead-silent quality because it goes to the critical conflict of the story; the exposure of the innocent children to the racial hatred of the town.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.4.1 	Conflict of Interest</h4>
          <p className="text-sm mb-4 font-rubik">You tend to see conflict defined generally as where the protagonist faces an obstacle in pursuance of the plot goal. The classical manifestation of conflict is where the protagonist is opposed by the antagonist, which is resolved by a fight. But alternatively, a character may find themselves in conflict by a scenario where two opportunities are open to them; one consistent with their personal desires (e.g. sticking by the love interest), and the other consistent with their moral values (e.g. sticking by the best friend). There is no antagonist in this situation (though there will be antagonistic forces influencing the protagonist's choice), although the love interest or friend may subsequently become the antagonist, if they are spurned by the protagonist.</p>
          <p className="text-sm mb-4 font-rubik">In this sense we should conceive of conflict more broadly, not as an obstacle or force of antagonism, or fight, but as a zero sum game situation where the protagonist has multiple interests but must make a decision which will foreclose at least one of them. Applied in the classic sense, the protagonist may (1) oppose the villain; or (b) do nothing. The conflict is not necessarily the obstacle posed by the antagonist (or anything to do with the antagonist); it's that the protagonist must give something up. All conflict comes down to being in a situation where, by making a decision, you stand to lose something, and that makes the decision difficult.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.4.2 	Promise a Difficult Decision</h4>
          <p className="text-sm mb-4 font-rubik">You don't need to write in a fight scene to make conflict. You may merely pose a zero-sum-game choice to the protagonist. The problem with doing that is you require the protagonist to choose; and once the choice is made, the conflict dissipates. The conflict is stronger before the protagonist makes the choice. So consider inserting conflict through subtext and promise, which may then eventually culminate and get resolved by a confrontation. And the purpose of this subtext and promise is to remind your reader that there will be a confrontation.</p>
          <p className="text-sm mb-4 font-rubik">The decision may play out in different ways. One, the protagonist may anguish over the inevitable decision long before it happens. An example of this is in The Jungle Book,
            <FootnoteRef text="The Jungle Book, Rudyard Kipling." />
            where, throughout the story, Mowgli's conflict is that he is torn between living amongst the animals rather than living amongst humans. He gradually shows more interest in returning to humankind, and, when the animals become alienated from him, ultimately returns to the human village. Two, the decision may come prematurely, and the protagonist makes an impulsive choice, and the conflict occurs for long after, whereon the protagonist realizes the full consequences of their choice. An example of this is in A Separate Peace,
            <FootnoteRef text="A Separate Peace, John Knowles." />
            where Gene's conflict is his feeling guilty throughout the story for Phinny's accident and injury at the beginning of the story (and ultimately death).</p>

          <h3 id="post-how-to-create-conflict" className="mb-2 font-semibold">5.5. How to Create Conflict</h3>
          <p className="text-sm mb-4 font-rubik">Robert Meredith and John Fitzgerald  provide a step by step method of creating conflict:
            <FootnoteRef text="Robert Meredith and John Fitzgerald, Structuring Your Novel: From Basic Idea to Finished Manuscript (Everyday Handbook)." />
          </p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.5.1 	Conflict with Environment</h4>
          <p className="text-sm mb-4 font-rubik">Step One: Place the protagonist in conflict with his own environment or the environment of others. There are different ways to do this:</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">I. Changing the View</h4>
          <p className="text-sm mb-4 font-rubik">A change within the environment that affects the protagonist can put the protagonist in conflict with the environment. This may be a physical (i.e. geographical) change, or it may be a psychological change (a character inherits the family home after his/her parents die). The environmental shift may be mundane or predictable, and something everyone goes through but the conflict comes from the new/different environment requiring a different set of behaviour or responsibilities or coping mechanisms from the character. For instance, a character who was dependent may need to learnt to be independent.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">II. Uprooting</h4>
          <p className="text-sm mb-4 font-rubik">Uprooting a protagonist from one environment and placing him in a strange environment can put him into conflict with the environment. A character finds themselves in a new environment inadvertently, unpredictably, or by accident, and with little to no preparation, and the new environment may be abnormal, for instance, shipwrecking on a deserted island. The conflict comes not only from the requirement for the character to drastically change their behaviour, as above, but also from the environment itself, which may pose novel and unusual obstacles, such as on a deserted island, the scarcity of drinking water, or shelter.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">III.	Environment vs Environment</h4>
          <p className="text-sm mb-4 font-rubik">Placing a protagonist in an environment that is in conflict with another environment puts the protagonist in conflict with the environment of others. An obvious example is a story set during wartime, but can apply anywhere groups of people are in organised conflict with each other. If the protagonist takes a side (even accidentally) it will default the other side to his antagonists.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">IV.	Things could be better</h4>
          <p className="text-sm mb-4 font-rubik">Placing a protagonist in an environment he wants to change can put the protagonist in conflict with the environment. This is where the character doesn't like things about the environment he finds himself in -- it doesn't necessarily require an environment change. An example might be where a peasant protagonist lives in a poverty-stricken land, or a character lives under a despotic totalitarian regime.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">V.	Greener Grass</h4>
          <p className="text-sm mb-4 font-rubik">Giving a protagonist an environment to conquer puts the protagonist in conflict with the environment. This is where a protagonist envies something about a different environment, and tries to obtain it for himself. For instance, a poor protagonist who moves to a wealthier place in an attempt to make life better for himself. This is distinct from 'Things could be better' as the battle is not focused on protagonist's former home, but on the envied environment.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">VI.	I want more</h4>
          <p className="text-sm mb-4 font-rubik">Placing a protagonist in an environment from which he wants to escape puts the protagonist in conflict with the environment. This is like 'Greener Grass' except the protagonist hasn't left home. There might not be anything wrong with an environment except incompatibility with the protagonist's character; it's boring, predictable, uninspiring, unenlightened, uncaring, etc.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">VII.	The outsider</h4>
          <p className="text-sm mb-4 font-rubik">Placing a protagonist in an environment in which he is not wanted puts the protagonist in conflict with the environment. The conflict here is not necessarily that the protagonit doesn't like his home, rather it's that he likes and wants to be liked and accepted as a part of it. The non-acceptance of the character may be due to his lack of having proved himself, or because of prejudices against him.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">VIII.	Fish out of water</h4>
          <p className="text-sm mb-4 font-rubik">Placing a protagonist in an environment for which he is unsuited by character puts the protagonist in conflict with the environment. The conflict comes from the environment being the kind of place where a certain type of person thrives or habituates, and the protagonist's contrast to that kind of person.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">IX.	Hired or Fired</h4>
          <p className="text-sm mb-4 font-rubik">A change in the status quo of the protagonist within the environment can put the protagonist in conflict with the environment. The character might gain or lose status or esteem, bringing that character into conflict with those around him.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">X.	Change of Office</h4>
          <p className="text-sm mb-4 font-rubik">A change in the status quo of an environment can put the protagonist in conflict with the environment. This is like 'Hired or Fired' but it's a group/s that changes status, not an individual. It may be that the government or ruling power changes hands, and it may be a group the protagonist himself is a member of, or not (as long as the group has an effect on the protagonist's life).</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.5.2 	Applying the Conflict to the Protagonist</h4>
          <p className="text-sm mb-4 font-rubik">Step Two: You must flesh out why it's the protagonist who acts in the face of the conflict and not another. To do this, give the protagonist a chief motivating force with a tangible objective.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">I.	Chief Motivating Force</h4>
          <p className="text-sm mb-4 font-rubik">When the conflict arises, the protagonist's reaction results in a determination to do something about it. Their planned action/s is the 'chief motivating force.'</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">II.	Tangible Objective</h4>
          <p className="text-sm mb-4 font-rubik">The objective is what the protagonist ultimately wants to get out of the chief motivating force. What is the force going to give them personally, selfishly? Here, 'tangible' means a condition or circumstance which can be realised in the mind. In other words, can the objective be converted into a mental picture, an actual concrete set of circumstances? If not, it is too abstract and needs to be specified.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">III.	Examples</h4>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Chief Motivating Force: Escape prison; Tangible Objective: Get revenge on corrupt head of police force.</li>
            <li>Chief Motivating Force: Determine identity of murderer; Tangible Objective: Salvage expiring detective reputation.</li>
            <li>Chief Motivating Force: Disprove existence of ghosts in a haunted house; Tangible Objective: Get over death of close relative. </li>
          </ol>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.5.3 	Exaggerating the Protagonist's Reaction</h4>
          <p className="text-sm mb-4 font-rubik">Step Three: The conflict cannot be developed or sustained unless you exaggerate the protagonist's reaction to the stimulus of the environment.</p>
          <p className="text-sm mb-4 font-rubik">In real life, people can fail to respond to conflicts. Your protagonist cannot, because this would be boring. It's better to make the conflict particularly urgent or critical, rather than make the protagonist someone particularly susceptible to overreaction (readers may find the latter unconvincing or annoying).</p>
          <p className="text-sm mb-4 font-rubik">It's possible to do both; see Jack Torrence in The Shining or Eleanor Vance in The Haunting of Hill House. However, it is harder, as you should justify why the character is the way they are, to make them more relatable. People don't want to identify with a nervous wreck or someone on the brink of collapse, but they will identify with circumstances that would cause them to hypothetically behave in such a way (the difference between a character who is abusive, and a character who is abusive because their father was even more abusive).</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">5.5.4 	Exaggerating the Conflict</h4>
          <p className="text-sm mb-4 font-rubik">Step Four: Like you exaggerate the protagonist's reaction, you sustain the conflict by exaggerating it, as well.</p>
          <p className="text-sm mb-4 font-rubik">You can do this by making the conflict bigger in vertical or horizontal scope. Making it bigger in vertical scope means increasing the impact of a single conflict. In saying this, the protagonist should stand to gain or lose something of value upon the resolution of the conflict (whichever way it goes).</p>
          <p className="text-sm mb-4 font-rubik">Increasing horizontal scope means creating additional complications to face the protagonist on the road to addressing the conflict. The complications should not be random; they should arise from the protagonist's actions in addressing the conflict. i.e. one thing leads to another, or there is an antagonistic pushback or reaction to the protagonist's push.</p>

          <h3 id="post-plans-must-be-complicated" className="mb-2 font-semibold">5.6 Plans Must Be Complicated</h3>
          <p className="text-sm mb-4 font-rubik">If your protagonist comes up with a plan, then come 'D day' it must be complicated somehow. Otherwise, as Mittelmark and Newman suggest, the reader will get déjà vu, first reading the description of the plan, and then reading the description of the plan in action. Not to mention you're spoiling your own plot.</p>

          {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

          <hr className="my-6 border-t border-gray-400" />
          <h1 id="post-conflict-comments" className="text-2xl font-bold mb-4">Leave a Comment</h1>

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
            <p className="font-source-code-pro text-xs mt-1">Conflict is made up in the obstacles which keep the protagonist struggling to attain their goals.</p>
          </div>

          {/* Index Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-what-is-conflict" className="hover:underline hover:text-white">5.1. What is Conflict?</a>
              </li>
              <li className="mb-px">
                <a href="#post-why-is-it-important" className="hover:underline hover:text-white">5.2. Why Is It Important?</a>
              </li>
              <li className="mb-px">
                <a href="#post-types-of-conflict" className="hover:underline hover:text-white">5.3. Types of Conflict</a>
              </li>
              <li className="mb-px">
                <a href="#post-conflict-does-not-equal-fight" className="hover:underline hover:text-white">5.4. Conflict ≠ Fight</a>
              </li>
              <li className="mb-px">
                <a href="#post-how-to-create-conflict" className="hover:underline hover:text-white">5.5. How to Create Conflict</a>
              </li>
              <li className="mb-px">
                <a href="#post-plans-must-be-complicated" className="hover:underline hover:text-white">5.6 Plans Must Be Complicated</a>
              </li>
              <li className="mb-px">
                <a href="#post-conflict-comments" className="hover:underline hover:text-white">Comments</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/dialogue" className="hover:underline hover:text-white">Dialogue</a>
              </li>
              <li className="mb-px">
                <a href="/suspense" className="hover:underline hover:text-white">Suspense</a>
              </li>
              <li className="mb-px">
                <a href="/antagonists" className="hover:underline hover:text-white">Antagonists</a>
              </li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Conflict;