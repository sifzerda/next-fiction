// src/app/scenes.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import Tooltip from '../../components/Tooltip';
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

          <p className="text-sm mb-4 font-rubik"><span className="bg-hYellow">External:</span> (I moved house <span className="italic">because my house burned down</span>); OR</p>
          <p className="text-sm mb-4 font-rubik"><span className="bg-hGreen">Internal:</span> (I moved house <span className="italic">because I wanted a change</span>); OR</p>
          <p className="text-sm mb-4 font-rubik"><span className="bg-hRed">Complex:</span> (I moved house even though I didn't want to, <span className="italic">because my wife wanted to and I didn't want to upset her</span>); OR</p>
          <p className="text-sm mb-4 font-rubik"><span className="bg-cyan">Unidentified:</span> (I woke up in a new house and <span className="italic">I don't remember how I got there</span>).</p>

          <p className="text-sm mb-4 font-rubik">Internal and unidentifiable encouragement is generally weaker and less effective; external and complex are recommended.</p>
          <p className="text-sm mb-4 font-rubik">Stories which lack encouragement tend to produce reader response such as ‘Why did he do that?’ or ‘Why did she say that?’</p>
          <p className="text-sm mb-4 font-rubik"><span className="font-bold">(2) Events: </span>This refers to the plot events comprising your story. Stories are event-obsessed, so normally these are the things referred to when one provides a quick plot summary thus: ‘A happened, and then B happened, and then C happened.’ Ideally should be preceded by encouragement, and result in an effect. Stories which lack events tend to read thinly and pad themselves out with mundane, irrelevant occurrences, thoughts and feelings, and actions.</p>

          <p className="text-sm mb-4 font-rubik">In the above example, the event would be moving to a new house.</p>

          <p className="text-sm mb-4 font-rubik"><span className="font-bold">(3) Effects: </span>This refers to the response by your character to events. They might come out of an event psychologically unscathed or have their whole world (and the plot development) completely derailed. </p>
          <p className="text-sm mb-4 font-rubik">Stories which lack effects tend to sound unrealistic, superficial, and ‘made-up’. Characters may read woodenly or like robots.</p>
          <p className="text-sm mb-4 font-rubik">Effects can manifest through behaviour, dialogue, implication, or symbolism (and probably other conveyances). They can be long term or immediate:</p>

          <p className="text-sm mb-4 font-rubik"><span className="font-bold">Immediate Behavioural:</span></p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Person 1: "That saw mill accident - your brother - Oh my God - "</li>
            <li>Person 2: *drops phone*</li>
          </ol>

          <p className="text-sm mb-4 font-rubik"><span className="font-bold">Immediate Verbal:</span></p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Person 1: "That saw mill accident - your brother - Oh my God - "</li>
            <li>Person 2: “Oh shit. You’re not serious.”</li>
          </ol>

          <p className="text-sm mb-4 font-rubik"><span className="font-bold">Immediate Implied:</span></p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Person 1: "That saw mill accident - your brother - Oh my God - "</li>
            <li>Person 2: “It’s going to be okay,” she said, as her hand started to shake.</li>
          </ol>

          <p className="text-sm mb-4 font-rubik"><span className="font-bold">Immediate Implied:</span></p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Person 1: "That saw mill accident - your brother - Oh my God - "</li>
            <li>Person 2: *phone dies*</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Effects can be long-term. These are harder to summarise as above because they refer to the cumulative behaviour or changes of your character across the rest of the book, following an event.</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">Long-term behavioural:</span></p>
          <p className="text-sm mb-4 font-rubik">A normally cheerful person, ‘Person 2’ (above) – who has no prior experience with trauma until now – succumbs to depression. This manifests by the character becoming withdrawn and pessimistic;</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">Long-term verbal:</span></p>
          <p className="text-sm mb-4 font-rubik">Person 2 starts having little outbursts over little things, when they formerly wouldn’t have;</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">Long-term implied:</span></p>
          <p className="text-sm mb-4 font-rubik">Person 1 (secretly struggling with suicidal ideation) buys life insurance;</p>
          <p className="text-sm mb-4 font-rubik"><span className="underline">Long-term symbolic:</span></p>
          <p className="text-sm mb-4 font-rubik">She was slicing the vegetables on autopilot, and didn’t stop until she’d decapitated the caterpillar at the end, then stood and, dumbly, watched its body spasm and die.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.4.1 The Fork Method</h4>
          <p className="text-sm mb-4 font-rubik">When creating an ‘E Chain’ don’t write yourself into a corner. Brainstorm multiple possible outcomes (try to aim for 3-5 – or more) for each plot point/resolution. Never ask yourself; what would normally happen at this point in the story? Instead, ask yourself, what are the possible kinds of interesting things that could happen now? What are some abnormal things that could happen at this point in the story? Don’t be afraid to take risks at every stage. Your goal is to maintain your reader’s interest, not meet their exact expectations. </p>

          <h3 id="post-diametrics" className="mb-2 font-semibold">6.5: Diametrics</h3>
          <p className="text-sm mb-4 font-rubik">What immediately comes to mind when you hear these phrases in fiction?</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="text-sm mb-4 font-rubik">“Nothing ever happens around here,” he sighed.</p>
            <p className="text-sm mb-4 font-rubik">Officer Colt had one day left until retirement. </p>
            <p className="text-sm mb-4 font-rubik">“I didn’t hear anything,” he shrugged. </p>
          </div>

          <p className="text-sm mb-4 font-rubik">Behind each of these phrases is a story. You already know where it’s going. The man will find adventure; the cop will die; the lovers will separated; some threat will materialise.</p>
          <p className="text-sm mb-4 font-rubik">Basically, the purpose of a story is to tell people what they don’t already know. As a simple rule, fiction is where the opposite of what’s expected happens. If what’s expected does happen, the audience doesn’t need to be told; they already know.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.5.1 	What is it?</h4>
          <p className="text-sm mb-4 font-rubik">It sounds like a New Age Movement but it's not. Memorable fiction presents and balances opposites.</p>
          <p className="text-sm mb-4 font-rubik">Two characters who are opposites have a diametric relationship. A protagonist thrown into a situation which is the furthest from expectation, is in a diametric relationship with that plot occurrence. A setting which contains features totally unexpected, has diametric aspects.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.5.3 	Why Is It Important?</h4>
          <p className="text-sm mb-4 font-rubik">It’s a simple concept, and simple to implement into a story. Yet, many stories fail to do it effectively, or at all. If you’ve forgotten a scene or characters or a story five seconds after reading it, it’s probably due to a lack of diametrics.</p>
          <p className="text-sm mb-4 font-rubik">When I consider what single most important feature interesting, memorable stories or scenes have, I keep coming back to the diametric relationships. I’m convinced they are a cornerstone of fiction, a key distinguishing factor between memorable and unmemorable fiction. Opposites surprise expectations, which fix them in memory.</p>
          <p className="text-sm mb-4 font-rubik">Diametrics don’t just refer to scenes. You can (and should) create diametric characters, plot events, settings, dialogue – in short; it’s applicable to everything. For instance, the Three-Right Angled Turn Plot Structure is premised on opposites (see 3.4); and Character Foils are premised on opposites (see 6.3.3 Set Off traits (AKA Interior Foils) and 6.6 The Foil).</p>
          <p className="text-sm mb-4 font-rubik">Diametrics is even applicable on a sentence-by-sentence level. Subtle Diametrics give prose a little kick. Good first lines often have it, making them memorable. Good endings have them, giving you what you want, but not the way you expected it.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.5.3 	The Method</h4>
          <p className="text-sm mb-4 font-rubik">Creating diametrics involves 2 steps: </p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Opposition</li>
              <li>Integration</li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik">Good writing may draw you into a situation before unveiling its diametrics; getting you to accept the story world part-by-part until you’re compelled to accept the diametric as well.</p>
          <p className="text-sm mb-4 font-rubik">Other good stories may throw the diametric right over you at the outset, subsequently entrenching it</p>
          <p className="text-sm mb-4 font-rubik">Here are ten examples of diametrics, using some of the most memorable scenes from various film and stories.</p>

          <p className="text-sm mb-4 font-rubik text-boldPurple">I. The Sound of Music
            <FootnoteRef text="The Sound of Music, (1965)." />
          </p>

          <p className="text-sm mb-4 font-rubik">The most memorable scene in this film is where the main character, a nun in training, runs up onto the mountains and sings. We don’t expect a nun to ditch the headdress and spin around giddily on mountaintops singing at the top of her voice.</p>

          <p className="text-sm mb-4 font-rubik text-boldPurple">II. I, Robot
            <FootnoteRef text="I, Robot, (2004)." />
          </p>

          <p className="text-sm mb-4 font-rubik">III. King Kong
            <FootnoteRef text="King Kong, (1933) - (2006)." />
          </p>

          <p className="text-sm mb-4 font-rubik">There are various memorable scenes in this film (whether the 1933 or 2006 version). But the stand out is at the end, when King Kong climbs up New York’s Empire State Building clutching Anne Darrow in one hand, before he gets shot down by fighter jets.</p>
          <p className="text-sm mb-4 font-rubik">There are multiple diametric elements here: (1) An impossibly gigantic, uncivil wild animal climbing up a skyscraper; the congress of wealthy, civil, businesspeople; (2) He’s holding a human woman who was designed to be his sacrifice; (3) The captive woman is concerned for the safety of the beast; (4) The humans regret having to kill him.</p>

          <p className="text-sm mb-4 font-rubik">IV. Singin' in the Rain
            <FootnoteRef text="Singin' In The Rain, (1952)." />
          </p>

          <p className="text-sm mb-4 font-rubik">Even people who have never seen this film are likely aware of the titular scene in which a couple of characters sing in the rain. We expect big song numbers in musicals to be set in lit, appealing aesthetic, with the characters lavishly dressed. This is the opposite: the setting is gloomy, dark, wet, the characters aren’t doing anything interesting (they’re walking down the street), and dressed in ordinary coats and hats. But they’re doing the last thing we’d expect; they’re singing a melodic, lively, happy tune.</p>

          <h3 id="post-the-first-scene" className="mb-2 font-semibold">6.6 The First Scene </h3>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.6.1 The First Scene is a 'Special' Scene</h4>

          <p className="text-sm mb-4 font-rubik">You don’t have to write the story chronically (i.e. write the first scene first, etc), but eventually you will have to determine where the story starts. That can be difficult because the first scene (like the last scene) is not a typical scene – special rules apply. The first scene has to perform work subsequent scenes (including the last scene) don’t have to do:</p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>It has to grab the reader’s interest;</li>
            <li>It has to clarify what the story is generally about (dispel any misinterpretations caused by a bad title, cover art, or blurb);</li>
            <li>It has to get the reader to ‘base line normal’ and comfortable with your story’s world;</li>
          </ol>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.6.2 	Some general rules</h4>
          <p className="text-sm mb-4 font-rubik">Jack Hart
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            quotes playwright Lajos Egri, who said a play should start:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Exactly at the point where a conflict will lead up to a crisis.</li>
            <li>At a point where at least one character has reached a turning point in his life.</li>
            <li>With a decision that will precipitate conflict.</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Some general rules about where to start the story:</p>
          <p className="text-sm mb-4 font-rubik text-boldPurple">(1) Start as late possible</p>

          <p className="text-sm mb-4 font-rubik">Identify the first plot relevant event and try to start from there. However, for certain reasons, you might need to start earlier. If the first plot relevant event requires context, provide that context. Sol Stein
            <FootnoteRef text="Sol Stein, How To Grow A Novel." />
            says: “To hook the reader, many writers put a death right smack in the opening before the reader can feel anything. The death feels told.”</p>
          <p className="text-sm mb-4 font-rubik">If your first plot relevant event is a character’s death, you should introduce the deceased (even briefly) while alive so that their death has more weight.  As Sol Stein says, "[T]he reader must know the people in the car before he sees the car crash.”</p>

          <p className="text-sm mb-4 font-rubik">William Sloane
            <FootnoteRef text="William Sloane, The Craft of Writing." />
            says access point is why you must start a story as late as possible; you've got to throw the reader into the story. You can't give the reader a choice to refuse to identify with what’s happening.</p>

          <p className="text-sm mb-4 font-rubik text-boldPurple">(2) Group main characters, settings and events together</p>
          <p className="text-sm mb-4 font-rubik">If there’s an event early in your story where a handful (or even all) of your main characters congregate – and even better, in a plot relevant setting (e.g. a birthday party at your main character’s house) – it would be wise to make this your first scene. That way you kill a lot of birds with the one stone. It’s also less obvious and ‘intrusive’ that you’re trying to introduce characters and settings when it’s all together, as opposed to one at a time.</p>

          <p className="text-sm mb-4 font-rubik text-boldPurple">(3) Ask a Question</p>
          <p className="text-sm mb-4 font-rubik">Ideally, your first scene should ask a thematically significant question which the rest of your story attempts to answer.</p>
          <p className="text-sm mb-4 font-rubik">A question might follow the structure: If X, then Y? </p>
          <p className="text-sm mb-4 font-rubik">For example:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Is infidelity ever really forgivable? (If your partner commits infidelity, then could you forgive them?);</li>
            <li>How damning is isolation? (If you were cut off from the world for a significant period of time, then could you still return to a normal social life?) </li>
            <li>Can advanced AI have morals? (If AI became really advanced, then could it be programmed with morality?);</li>
            <li>Can religion and ambition co-exist? (If you are fundamentally religious, and naturally ambitious, then what consequences would follow?) </li>
          </ol>

          <p className="text-sm mb-4 font-rubik">You may have already suggested this question in your title, your book design, your tagline, hook, and blurb, but the question should be raised by the first scene; that’s the last chance you get to ask it, otherwise your first chapter is going to be extraneous.</p>

          <p className="text-sm mb-4 font-rubik text-boldPurple">(4) Don’t Infodump</p>
          <p className="text-sm mb-4 font-rubik">The first scene has the responsibility of getting your reader ‘up to speed’ in your fictional world. But that doesn’t give you unfettered license to rain exposition down in buckets.</p>
          <p className="text-sm mb-4 font-rubik">Then readers got wise and so authors made the first chapter an ‘into the thick of the action’ chapter, and shifted the exposition down one chapter, to chapter two. Which is no better.</p>
          <p className="text-sm mb-4 font-rubik">The best way to inform the reader is to smuggle info in; link information with images/scenes. Place writing constraints on yourself to prevent dropping crucial words. Don’t let anyone tell you this will take longer. Think; how long would it take you to ‘show’: (1) your main character’s job; (2) their spouse’s name; (3) the name of their town and country; and (3) a hobby of theirs? Here’s an example, doing it in 4 sentences:</p>

          <p className="text-sm mb-4 font-rubik">Here’s an extended example from ‘Under the Volcano’</p>

          <div className="p-4 mb-6 rounded bg-gray-50 shadow space-y-4 text-gray-800">
            <p className="italic">
              Hugh Firmin less than sauntered, so slowly did he move, up the drive towards his brother’s house
              <Tooltip number={1} text="Hugh’s slow pace suggests he is reluctant to see his brother" />,
              his brother’s jacket balanced on his shoulder
              <Tooltip number={2} text="Contrasting with above, Hugh’s possession of his brother’s jacket as if it were his own suggests he retains affection for his brother – so we know it’s not that he dislikes his brother, but there’s something troubling between them." />,
              one arm thrust almost to the elbow through the twin handles of his brother’s small gladstone bag, his pistol in the checkered holster lazily slapping his thigh: eyes in my feet, I must have, as well as straw, he thought, stopping on the edge of the deep pothole, and then his heart and the world stopped too; the horse half over the hurdle, the diver, the guillotine, the hanged man falling, the murderer’s bullet, and the cannon’s breath, in Spain or China frozen in mid-air, the wheel, the piston, poised —
              <Tooltip number={3} text="Hugh is very distracted, maybe deeply troubled." />
            </p>

            <p className="italic">
              Yvonne, or something woven from the filaments of the past that looked like her
              <Tooltip number={4} text="This suggests Hugh has not seen Yvonne for a long time." />,
              was working in the garden, and at a little distance appeared clothed entirely in sunlight. Now she stood up straight — she was wearing yellow slacks
              <Tooltip number={5} text="Yvonne’s mood is better than Hugh’s; she’s working outside in the sun and wearing yellow;" />
              — and was squinting at him, one hand raised to shield her eyes from the sun.
            </p>

            <p className="italic">
              Hugh jumped over the pothole to the grass; disentangling himself from the bag he knew an instant’s paralysed confusion, and reluctance to meet the past.
              <Tooltip number={6} text="Hugh did not expect to find Yvonne at his brother’s, but is eager to see her;" />
              The bag, decanted on the faded rustic seat, disgorged into its lid a bald toothbrush, a rusty safety-razor, his brother’s shirt, and a second-hand copy of Jack London’s Valley of the Moon, bought yesterday for fifteen centavos at the German bookstore opposite Sandborns in Mexico City
              <Tooltip number={7} text="Hugh planned to stay at his brother’s house – more subtly, the fact that the bag’s overnight contents is detailed only after Yvonne is identified, suggests that Hugh may not have been set on staying with his brother, and only became certain of it after he saw Yvonne was there;" />
              Yvonne was waving.
            </p>

            <p className="italic">
              And he was advancing (just as on the Ebro they were retreating) the borrowed jacket still somehow balanced, half slung on his shoulder, his broad hat in one hand, the cable, folded, still somehow in the other.
            </p>

            <p className="italic">
              ‘Hullo, Hugh. Gosh, I thought for a moment you were Bill Hodson
              <Tooltip number={8} text="This suggests Yvonne has not seen Hugh in a long time, and perhaps did not expect to see him – even though she was forewarned – suggesting, she doesn’t have the same excitement to see him as he has seeing her;" />
              Geoffrey said you were here. How nice to see you again.’
            </p>

            <p className="italic">
              Yvonne brushed the dirt from her palms and held out her hand,
              <Tooltip number={9} text="The dirt on palms (and her lack of embarrassment thereof) further suggests she doesn’t receive him as a ‘special’ guest;" />
              which he did not grip, nor even feel at first, then dropped as if carelessly, becoming conscious of a pain in his heart and also of a faint giddiness.
              <Tooltip number={10} text="This hints that Yvonne is involved in whatever was troubling Hugh, above;" />
              ‘How absolutely something or other.’
              <Tooltip number={11} text="‘How absolutely something or other’ undoes the effect of her previous ‘How nice to see you again’ and cements her indifference at Hugh’s arrival." />
              When did you get here?’
            </p>
          </div>

          <p className="text-sm mb-4 font-rubik">In the story, Yvonne and Hugh only know each other through Hugh’s brother, Geoffrey – who Yvonne is in an on-again-off-again relationship with. Notice how this scene refers to this by interposing the ‘brother’ between them without even making him present.</p>

          <p className="text-sm mb-4 font-rubik text-boldPurple">(5) Active, Not Passive</p>
          <p className="text-sm mb-4 font-rubik">An active scene depicts a plot moment in real time. A passive scene is anything other than a big plot moment; it ‘catches’ the reader up on the story in between plot moments. It provides description, exposition, or gives characters a breather to react emotionally to events. It’s like the ‘previously on …’ segment at the start of a TV series episode.</p>
          <p className="text-sm mb-4 font-rubik">You need active scenes to keep the story moving, but your story can’t just be active scenes, otherwise you will fatigue and/or confuse the reader. An effective story structure has a natural pattern of hills (active scenes) and valleys (passive scenes). However, the first scene must be an ‘active’ scene, not a passive one. This means you have to be thrown into the thick of some plot action immediately.</p>
          <p className="text-sm mb-4 font-rubik">Whatever comes later, your first scene cannot start with exposition, or start by summarizing an active event that has previously happened, or merely suggest an active event will happen in the following chapters, or flashback to an active event in the middle of a passive scene (better to start the active event in present tense, and then ‘flashforward’).</p>
          <p className="text-sm mb-4 font-rubik">An example of a first scene that is passive is in the novel, The Chalk Man.
            <FootnoteRef text="The Chalk Man, C. J. Tudor." />
            In the first scene, a dead girl is described lying in the forest, which is then found by the killer, who removes and takes away the head. This is passive because we are being shown the aftermath of an active event (a murder). We are having the aftermath of an active event summarized to us. There are no characters, no plot and no action going on here, just description; just a dead body doing nothing.</p>
          <p className="text-sm mb-4 font-rubik">Instead, the first scene should have been about a girl (who we assume is the main character) who is introduced and briefly characterized to us, before shockingly being stalked, and chased down, and killed in the forest, and then finishing with her head being taken. Better, the chapter ends the moments she’s killed, and we get the first description of her body later, in another active scene when an investigating detective stumbles upon her gruesome and (to our surprise) now headless remains.</p>

          <p className="text-sm mb-4 font-rubik text-boldPurple">(6) Microcosm</p>
          <p className="text-sm mb-4 font-rubik">Just as you can have a ‘microcosm’ first line, you can have a ‘microcosm’ first scene – anything ‘first’ can be a microcosm, the point is it’s a miniaturized taste of the larger offering, like a synecdoche. A microcosm is like a rehearsal for the main story; characters are shown ‘in practice’ for the roles they will acquire later, later plot threads are teased, story elements are shown symbolically which later crystallize as literal.</p>
          <p className="text-sm mb-4 font-rubik">Example:</p>
          <p className="text-sm mb-4 font-rubik">In the novel Monkey Shines,
            <FootnoteRef text="Monkey Shines, Michael Stewart." />
            protagonist Allen’s dreams of becoming an Olympic runner are shattered after he becomes a quadriplegic, and then is partnered with a ‘helper monkey’ who succumbs to homicidal rages.</p>
          <p className="text-sm mb-4 font-rubik">The first scene acts as a microcosm of the relationships between the characters, where Allen is shown competing in a running race, with his girlfriend, Linda, and his friends, Melanie and Geoffrey, watching. Allen gets a leg injury in the final lap but manages to win, which he is cocky and complacent about. Linda confidently asserts Allen’s prospective Olympic eligibility, flippantly dismisses his alternative (legal career) and then hurries off in her convertible. Friends Melanie and Geoffrey are less complacent, but stick around to earnestly congratulate Allen. Despite expressing concern over Allen’s limp, Geoffrey leaves Allen in favor of his lab work.</p>
          <p className="text-sm mb-4 font-rubik">There are multiple elements of this scene which echo large later:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Allen’s minor racing injury (characterized as a limp), echoes later as paralysis and inability to move his legs at all;</li>
            <li>Of Allen’s friends, Linda leaves the race the earliest without worrying about Allen’s limp. Later, when Allen becomes paralyzed, she is quick to leave the relationship because of his injury;</li>
            <li>Linda dismisses Allen’s legal career option. Later, this is echoed as a dismissal of any of his options;</li>
            <li>Allen’s friends Melanie and Geoffrey stay with Allen a moment after Linda has left to genuinely congratulate him. Later, they stay loyal to him after he is paralyzed, and are more genuine in their reception of his paralysis;</li>
            <li>Geoffrey leaving Allen’s limp in favor of his own lab work is echoed by Geoffrey using the paralyzed Allen as a test subject for his own experimentation (i.e. prioritizing the science over Allen’s injury)</li>
          </ol>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.6.3 	Establishing Shot</h4>
          <p className="text-sm mb-4 font-rubik">The establishing shot is the reader’s first impression of the story, and will stay with the reader as the progress through the rest of the story. Hart  provides an illustration of this with the start of the non-fiction story ‘Small-Town Cop’:
            <FootnoteRef text="Small-Town Cop, Tracy Kidder." />
          </p>
          <p className="text-sm mb-4 font-rubik">“From the summit of Mount Holyoke, in western Massachusetts, you look out on the valley of the Connecticut River, a broad landscape of cultivated fields and of forest sweeping away across the horizon, and, at the center, the old town of Northampton. It nests within natural boundaries. To the east the wide river bends around fields, planted mostly in corn. To the north and west, the foothills of the Berkshires rise up in the distance, higher than Northampton’s many steeples. . . . From the summit it seems, like the corn fields beside it, a dream of perfect order, entirely coherent and self-contained, a place where a person might live a whole life and consider it complete, a tiny civilization all its own. Forget the messiness of years and days—every work of human artifice has a proper viewing distance. The town below fits in the palm of your hand. Shake it and it snows.”</p>
          <p className="text-sm mb-4 font-rubik">Here, a broad establishing shot emphasises the smallness of the town – relevant because the main character is a ‘small-town cop.’</p>

          <h3 id="post-the-last-scene" className="mb-2 font-semibold">6.7 The Last Scene</h3>
          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.7.1 	The Last Scene is a ‘special’ scene</h4>
          <p className="text-sm mb-4 font-rubik">The last scene is like the first; it’s a special scene and special rules apply, which I’ve listed here:</p>
          <p className="text-sm mb-4 font-rubik text-boldPurple">(1) Two tiered ending</p>
          <p className="text-sm mb-4 font-rubik">About the first scene, I said to start as late as possible. However, you don’t need to, inversely, end the last scene as early as possible. This is partly for practicality: you’ve already gained the reader’s interest, so you don’t have to worry so much about snappy set ups, you have more latitude to spend time developing and resolving.</p>
          <p className="text-sm mb-4 font-rubik">For this purpose, there are two ‘levels’ or ‘tiers’ of endings:</p>
          <p className="text-sm mb-4 font-rubik text-midBluey">(1) The Climax:</p>
          <p className="text-sm mb-4 font-rubik">The climax is the most exciting part of the story, where the action peaks. The climax isn’t a real ending – unless it’s literally at the end of the story – it could instead come a fair way before the literal last line/chapter. I’m not huge fan of making the climax the literal end, for a number of reasons:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Your story loses out on having a dénouement to tie up loose ends;</li>
            <li>The climax already has to perform a particular task of showing the most action, without burdening with another lot of special functions as the ending;</li>
          </ol>

          <p className="text-sm mb-4 font-rubik text-midBluey">(2) The Dénouement</p>
          <p className="text-sm mb-4 font-rubik">This follows the climax. This is the literal ending ‘on paper’ (even if readers consider the climax the ‘conceptual’ ending). If the climax is the ‘action’, the dénouement is the ‘consequence’. Some of its roles:</p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Explain what happened during the climax (particularly very ‘busy’, complicated climaxes, or ‘twist-ending’ climaxes);</li>
            <li>Illustrate whether the relationships between characters have changed or stay the same (or suggest whether a change is inevitable, e.g. characters will drift apart);</li>
            <li>Suggest what may be in store for the characters in the future (e.g. success, improvement or misery);</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Readers and writers put a lot of focus on the climax, at the risk of the dénouement getting sidelined as the ‘soft’ and ‘uninteresting’ follow-up: this kind of thinking is a grave mistake – here’s an example showing why:</p>
          <p className="text-sm mb-4 font-rubik">In a traditional fantasy, the knight slays the dragon and rescues the princess. The slaying of the dragon (the climax) might be the most exciting part, but I’m willing to bet a lot of people would think the rescue (dénouement) is the best/most satisfying part.</p>
          <p className="text-sm mb-4 font-rubik">Imagine 2 variants of this fantasy story:</p>

          <p className="text-sm mb-4 font-rubik"><span className="font-bold">[A strong climax and a weak dénouement]:</span></p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>The knight slays the dragon only to discover it has already killed the princess; </li>
          </ol>

          <p className="text-sm mb-4 font-rubik"><span className="font-bold">[A weak climax and a strong dénouement]:</span></p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>The knight can’t defeat the dragon, but finds a way to the princess and they both escape. </li>
          </ol>

          <p className="text-sm mb-4 font-rubik">I think general consensus would find number (1) more unsatisfying than number (2).</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">“Keep one thing in mind when you’re writing a dénouement: Falling action has drained all the dramatic tension from the story. Readers want to know the answers to a few questions, but the powerful engine of story has shut down, leaving little momentum to carry your audience farther forward. So don’t push your luck. Wrap things up as quickly as possible and leave the stage Once you’ve answered the necessary questions, you have one remaining task—bring the story to an end with what journalistic types call a “kicker.” A good one will sum up, surprise a little, perhaps bring things full circle, firmly planting your protagonists in their new status quo. It will leave absolutely no doubt that the story has ended.”
            <p className="text-sm mb-4 font-rubik">— Jack Hart
              <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            </p>
          </div>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.7.2 The Ending</h4>
          <p className="text-sm mb-4 font-rubik">Story resolutions “absolutely and without exception, must be products of the character’s own efforts.”
            <FootnoteRef text="Jon Franklin, Writing For Story: Craft Secrets of Dramatic Nonfiction." />
          </p>

          <p className="text-sm mb-4 font-rubik">There are two kinds of endings: happy endings (a rise) and unhappy endings (a fall).</p>
          <p className="text-sm mb-4 font-rubik text-boldPurple">(1)	Happy endings</p>
          <p className="text-sm mb-4 font-rubik">There are two kinds of happy ending</p>
          <h6 className="text-xs font-bold text-gray-700 uppercase tracking-wide mt-2 mb-1">I. The protagonist gets what he/she wants in the end: </h6>
          <p className="text-sm mb-4 font-rubik">Here, the protagonist successfully achieves what they set out for. This is the most common ending, which is odd because it’s the weaker of the two. There’s nothing inherently wrong with it; you are satisfying the ‘promise’ made at the start of the story. But you are punching in at 8:59 and leaving at 5:01pm. You aren’t going above and beyond the call of duty. That’s fine. But it’s only fine, and no better.</p>

          <h6 className="text-xs font-bold text-gray-700 uppercase tracking-wide mt-2 mb-1">II.	The protagonist doesn’t get what he/she wants, but gets what he/she needs. </h6>
          <p className="text-sm mb-4 font-rubik">You can call this the ‘Pixar ending,’ though they certainly did not invent it. Here, the protagonist fails their original aim, but, along the way, achieves something even better. It may not be immediately obvious that the alternative achievement is better, there is often a lesson learned throughout the story along the lines that, although having X is desirable, having Y is better. It sounds very feel-good and ‘Disney’ but you don’t have to moralise or make the ‘lesson’ obvious. You can make the ending subtle and bittersweet.</p>
          <p className="text-sm mb-4 font-rubik">Done authentically, this is a stronger, more complex ending because it’s poignant, bittersweet; it can contain both a loss and a win (i.e. you can have your cake (both unhappy and happy ending) and eat it).</p>
          <p className="text-sm mb-4 font-rubik">For instance, the hero wants to win a competition. Their opponent also wants to win – but not in itself, rather to get the attention of a desirable love interest. The hero trains but in the end loses because the opponent cheated. However, the love interest is turned off the opponent because they cheated, and instead admires the strong, honest performance put in by the hero. This ends up meaning more to the hero than winning.</p>
          <p className="text-sm mb-4 font-rubik">There are three kinds of unhappy ending:</p>
          <h6 className="text-xs font-bold text-gray-700 uppercase tracking-wide mt-2 mb-1">I.	The protagonist doesn’t get what they want (a fall) </h6>
          <p className="text-sm mb-4 font-rubik">This is what people think of when you say ‘unhappy ending’: the protagonist dies, the villain wins; the love interest dies; the competition is lost; the warning unheeded; civilization falls; order unrestored; the lesson not learned; the priceless artifact broken; the evil survives; the secret unrevealed; the treasure undiscovered; the sacred knowledge forgotten...etc.</p>

          <h6 className="text-xs font-bold text-gray-700 uppercase tracking-wide mt-2 mb-1">II.	The protagonist doesn’t get what they want, but are a better person for it (a righteous fall)</h6>
          <p className="text-sm mb-4 font-rubik">This occurs where the protagonist commits a bad action and, by the end, is punished for it. They may be an anti-hero or a villain in the process of reform (they don’t have to be, good people also do bad things). It may not be a morally ‘bad’ action, it may morally neutral, but be unadvised or unwise, or disadvantageous for some other reason. The point of the ending is not to give the protagonist what they want, but show them they didn’t really want what they formerly wanted. By the end, they don’t necessarily get something better, but do learn against wanting something not good for them, and thereby avoid a worse fate. If the protagonist disregards this warning, they get a fall ending (number I. above).</p>
          <h6 className="text-xs font-bold text-gray-700 uppercase tracking-wide mt-2 mb-1">III.	The protagonist doesn’t get what they want, but may, eventually (a fall...and maybe a rise?)</h6>
          <p className="text-sm mb-4 font-rubik">I also refer to this ending as the ‘rising inflection’ ending. It ostensibly plays out like a typical fall ending (number I. above), except the very end suggests a tiny ray of hope that things will turn out alright, somehow. It’s like one of those “THE END…or is it?” lines, except the ‘or is it?’ is signified ambiguously with dialogue, action or some other subtlety right at the end.</p>
          <p className="text-sm mb-4 font-rubik">For example, at the end of Stephen King’s ‘The Dark Tower,’ the protagonist finds himself back at the start of an eternal time loop. This is an unhappy ending, except for the hopeful implication that the forthcoming iteration of the loop will, for once, play out differently.</p>
          <p className="text-sm mb-4 font-rubik">Just be aware once you suggest a single alternate possibility, you’re all but confirming it, so don’t phone it in. In real life, contingencies are never real until they eventuate. But in fiction the author merely suggesting a contingency (to the exclusion of all other possibilities) virtually makes it real. Imagine you were at a Harry Potter convention and someone asked if Dumbledore is married and J. K. Rowling said ‘Maybe he’s gay.’ The word ‘maybe’ means nothing; this is virtually a confirmation, because it was raised in any case and no alternative is similarly provided.</p>
          <p className="text-sm mb-4 font-rubik">A fortiori, when you suggest a single alternate possibility, and then close the story. If that’s not a confirmation of the alternative, I don’t know what is. Consider, when someone says ‘maybe no’ and then closes the door on your face, they are actually saying ‘really, seriously, no.’</p>
          <p className="text-sm mb-4 font-rubik">Conversely, saying ‘maybe X, maybe Y, maybe Z,’ does not confirm anything, it just cautions not to get locked into the most obvious possibility. But you should never end a story like that, because then you subvert your own ending entirely and invalidate your whole story.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.7.3 	The True Value of Events</h4>

          <p className="text-sm mb-4 font-rubik">If you’ve ever been frustrated by the ending of a book or movie (the usual complaint is the ‘is-that-it? syndrome’) it’s probably the creator failed to properly sequence a climax and/or dénouement. For instance, a movie ended on a climax which should have had a dénouement, and you’re left wondering how things resolved.</p>
          <p className="text-sm mb-4 font-rubik">The takeaway from this links back to the distinction between climaxes and dénouements: end the story once the reader has learned the true value of the journey or ultimate fate of the character (the two might be interlinked). If your climax does that, end on the climax – as in Pet Sematary (see above), we know the true ‘value’ of the resurrections come the climax – the burial ground never makes things better. If your climax does not do that, end on a dénouement.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.7.4 	Bad Endings</h4>
          <p className="text-sm mb-4 font-rubik">Mittelmark and Newman provide examples of bad endings:
            <FootnoteRef text="Howard Mittelmark and Sandra Newman, How NOT to Write a Novel." />
          </p>
          <p className="text-sm mb-4 font-rubik text-boldPurple">(1) Deus Ex Machina</p>
          <p className="text-sm mb-4 font-rubik">Ensure the ultimate pay-off of your ending is properly set up in advance, otherwise you’ll have an unsatisfying ‘Deus Ex Machina’ ending. This is where a device comes out of nowhere to resolve the plot for your protagonist.</p>
          <p className="text-sm mb-4 font-rubik text-boldPurple">(2) Homo sit Deus</p>
          <p className="text-sm mb-4 font-rubik">In observing the above rule, ensure you don’t make things too easy for the protagonist, or telegraph your pay-off too obviously. This is the opposite of a Deus Ex Machina; where you explain your away your pay-off so early (or in so much detail), assuring your protagonist’s victory (and how that victory will eventuate), that your reader feels no anxiety by the climax. In other words, your protagonist never breaks a sweat. If your protagonist is not in suspense, then the reader won’t be either.</p>
          <p className="text-sm mb-4 font-rubik">For instance, as set-up, your protagonist may learn the necessary skill, but not the exact method they will rely on to defeat the antagonist, i.e. what they need to do, but not how they will need to do it.</p>
          <p className="text-sm mb-4 font-rubik text-boldPurple">(3) Step Aside </p>
          <p className="text-sm mb-4 font-rubik">Ensure its your protagonist who ultimately saves the day; don’t give the limelight to another character, otherwise the reader will wonder why you didn’t make that character the protagonist.</p>
          <p className="text-sm mb-4 font-rubik text-boldPurple">(4) Backstories should be kept back</p>
          <p className="text-sm mb-4 font-rubik"></p>
          <p className="text-sm mb-4 font-rubik text-boldPurple">(5) Epilogue Echo</p>
          <p className="text-sm mb-4 font-rubik"></p>

          <h3 id="post-all-the-other-scenes" className="mb-2 font-semibold">6.8 All The Other Scenes</h3>
          <p className="text-sm mb-4 font-rubik">Some general rules applying to all scenes (including the first and last).</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.8.1 	To Not Be Continued...</h4>
          <p className="text-sm mb-4 font-rubik">All of your scenes must do their own work. Never use two different scenes to do the same thing.
            <FootnoteRef text="Howard Mittelmark and Sandra Newman, How NOT to Write a Novel." />
          </p>
          <p className="text-sm mb-4 font-rubik">This is so even if you want to show your character stuck doing the same thing, i.e. you want to suggest circumstances haven’t changed.</p>
          <p className="text-sm mb-4 font-rubik">There are at least two kinds of breaches of this rule:</p>

          <p className="text-sm mb-4 font-rubik text-boldPurple">B.	Different Thing, Same Place: </p>
          <p className="text-sm mb-4 font-rubik">This may occur anytime your character must go to the same location multiple times. Normally you would describe the location the first time, and then dispense with description subsequent times – the reader doesn’t need to be told twice where it is and what it looks like.</p>
          <p className="text-sm mb-4 font-rubik">The problem is where the setting is difficult or time-consuming to reach or traverse through, because skipping description implies the setting is straightforward and unremarkable to get through.</p>
          <p className="text-sm mb-4 font-rubik">One method of handling this is ‘The French Scene’ (see 6.10); that is, the setting doesn’t change, but the character’s relationship to it (or to others) does. This means a setting which was warm and comforting may turn hostile and foreboding, or a setting which is mildly foreboding becomes outright terrifying. This enables you to describe the same setting multiple times, but each time the description will be different; you will create different metaphors, or draw attention to different things.</p>
          <p className="text-sm mb-4 font-rubik">Here are some other solutions:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Seeing the same setting from a different perspective (e.g. on the ground versus from a hilltop, from the sea, or inside a plane);</li>
            <li>Dividing the setting into parts and having different scenes occur in different parts (e.g. a school divided into class buildings; a house divided into different rooms);</li>
            <li>Dividing the setting into parts and having different scenes occur in different parts (e.g. a school divided into class buildings; a house divided into different rooms);</li>
            <li>The same setting when in use or not (e.g. a packed theatre compared to an empty theatre; a street in Christmastime versus ordinary time)</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Ensure you aren’t breaching this rule accidentally. No matter how it’s conveyed to the reader, if the scene is conveying the same information, then it’s the same scene, even if there’s a setting change. For instance, if characters are having a discussion about what they just did the previous scene, then it’s a duplicate.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.8.2 	Best and Worst Scenariose</h4>
          <p className="text-sm mb-4 font-rubik">A quick thought experiment is to think of the best possible thing that could happen to your protagonist. Also consider the worst possible thing that could happen to your protagonist. What these things are depends on your protagonist’s personality; neurotic personalities might fear getting sick or injured. Extroverts might fear being alone. Introverts might fear public humiliation, etc.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.8.3 	The Crucible</h4>
          <p className="text-sm mb-4 font-rubik">This is a concept suggested by Sol Stein
            <FootnoteRef text="Sol Stein, Stein on Writing." />
            for the purpose of plotting a story. He defines a crucible existing where “the motivation of the characters to continue opposing each other is greater than their motivation to run away.”</p>
          <p className="text-sm mb-4 font-rubik">A crucible can be emotional or physical. It could exist because they’re in a physical space which prevents them from escaping, e.g. a prison, or it could be because escape would be stigmatizing, e.g. a marriage, or it could be because both characters want something which only one can have, e.g. a hunter wants to kill a lion and the lion wants to kill the hunter.</p>


          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.8.4 	The Dilemma</h4>
          <p className="text-sm mb-4 font-rubik">A concept suggested by Robert McKee
            <FootnoteRef text="Robert McKee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            for structuring character action. Shallow characters tend to have the choice between good/evil or right/wrong. This is repetitive and predictable; if a character makes a good choice, they are rewarded for it, whereas if they make an ‘evil’ choice, they are punished for it.</p>
          <p className="text-sm mb-4 font-rubik">A more complex, nuanced way of addressing this issue is to create a ‘dilemma.’ There are two kinds: (1) A choice between multiple irreconcilable good choices. In this case, the choice is desirable, the problem is committing to it forecloses the equally desirable alternative. Usually the protagonist stands to gain something, whichever choice is made, it’s just bittersweet because of the non-severable loss of opportunity which accompanies it. (2) A choice between the lesser of two evils. Here, the choice is undesirable and the protagonist does not wish to have to make it. It may be that everything was fine before the choice reared its head, and the protagonist may not actually gain, only lose, the question is which loss is more tolerable?</p>
          <p className="text-sm mb-4 font-rubik">Consider what is fundamentally at stake when you create a dilemma – love, power, money, knowledge, life, security, etc – and ensure the choice is genuine and not ‘obvious.’ Whichever you decide, note McKee’s advice; a price must be paid. The protagonist must risk or lose the alternative choice to gain the other. Otherwise the reader won’t feel the dilemma was true.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.8.5 	Set the Scene</h4>

          <p className="text-sm mb-4 font-rubik">Scene-setting is essential; the selection of details must be meaningful.</p>
          <p className="text-sm mb-4 font-rubik">Hart
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            analyses this paragraph by Wayne Curtis, describing a riverboat trip up the Mississippi for the Atlantic:</p>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">“The night grew darker, and the captain fired up a massive spotlight, sending upriver a great silver cylinder that glittered with the confetti of confused insects. From the dark void ahead of us, rubies and emeralds came sparkling back off the reflectors of the navigational buoys. A full moon had risen over the east bank, and it moved slowly from one bracketed porch column to another, the ship serving as a sort of Victorian Stonehenge to mark the loopy curves of the river.”</div>
          <p className="text-sm mb-4 font-rubik">Hart says, “Notice how Curtis uses the searchlight to create a sense of space. Lots of perspective- rich images can do the same thing—a road winding into the snowy woods, a long stairway ascending in front of you, railroad tracks. Seize on such devices to help flesh out the stages you create. And phenomena such as parallax—in this case the moon appearing to move behind the porch columns— add both perspective and motion.”</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.8.6 	‘Quiet Scenes’ </h4>
          <p className="text-sm mb-4 font-rubik">Although simplistic, there are two kinds of scenes: action scenes and quiet scenes. Action in one, dialogue, description and introspection in the other. You've got to have a balance of both scenes; too much action is exhausting, too much thinking or talking is boring.</p>
          <p className="text-sm mb-4 font-rubik">All of your scenes need to be interesting or propulsive. The common wisdom is that after every action scene, the reader needs a quiet scene to 'wind down.' I disagree. You can 'wind down' any time if you stop reading. All your scenes need to be action scenes. But quiet scenes contain a different kind of action.</p>
          <p className="text-sm mb-4 font-rubik">To steal terms from physics, action scenes do 'work,' but quiet scenes have potential to do work. This potential crackles with anticipation of the work to come, and creates interest in quiet moments. This can be effected through use of setting, props, placement of various elements, or the characters themselves;</p>
          <p className="text-sm mb-4 font-rubik">Examples:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Putting characters in a dark space: why is it dark? What is in the space the characters cannot (yet) see?</li>
            <li>Putting lots of characters in a small space: self-explanatory; claustrophobic; will the characters need to leave in a hurry? Is one of these characters an antagonist in disguise? Etc</li>
            <li>Restricting characters to one entry, particularly if much effort to get through; will the character need to leave in a hurry? Will they get trapped by an entering antagonist?</li>
            <li>Characters waiting for another character to come; this can create a sense of (if admittedly cheap) anticipation;</li>
          </ol>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.8.7 	Make Action Present</h4>
          <p className="text-sm mb-4 font-rubik">This is the same rule as under 11.19 Description in Action, but refers to scenes, rather than detail.</p>
          <p className="text-sm mb-4 font-rubik">Always pull past action into the present as much as possible. For instance, if your story begins with a protagonist who has been a vampire for 2 years, change it so the story begins with a human turning into a vampire. If your protagonist was in a car crash in the past, begin your story with the car crash happening right now, and make the plot follow on from that. If anything interesting happened to your characters, change it so it’s happening right now. Don’t conceal the best scenes in backstory.</p>
          <p className="text-sm mb-4 font-rubik">Authors try to compromise this rule by showing the past action in a flashback. This is not an acceptable remedy unless the story would literally not work if the action was in the present. Do everything you can to move action into the present.</p>

          <h3 id="post-chronology" className="mb-2 font-semibold">6.9: Chronology</h3>
          <p className="text-sm mb-4 font-rubik">This is the order of your scenes. You can have:</p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Linear chronology (events told in temporal order; when they happened in time, from the earliest to the most recent); or</li>
            <li>Non-Linear chronology (events told out of temporal order)</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">You might flashback, flashforward or repeat a scene to reveal something new, or shuffle the scenes around as if by random.</p>
          <p className="text-sm mb-4 font-rubik">Some caveats about using ‘time jumps’:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>As Tom French said: “Stay as close to the action as possible.”
              <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            </li>
            <li>Do not write in a time jump before you have ensured the reader’s interest and hunger with live issue/s. A time jump is a fantastic opportunity for a reader to hedge their bets and close the book, because it requires regenerating the reader’s interest all over again – kind of like dying and regenerating in a video game; if the game hasn’t been promising so far, why not take the death as an opportunity to switch off?</li>
            <li>Only bring in flashbacks and flashforwards after generating curiosity in your reader as to what the flashback/flashforward is conveying. Don’t bring in a flashback/forward to answer a question your reader didn’t realise they wanted to know. Don’t make your reader ask ‘why are we flashing back?’</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">For instance, you might start ‘in media res’ and have main characters alluding to some critical past event. Only after generating enough interest about the alluded to event can you then flashback and show it, because your reader knows what it’s for and is interested in seeing it.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.9.1 	Reordering Chronology creates two timelines</h4>

          <p className="text-sm mb-4 font-rubik">When scenes are in order, they suggest chain-linked linear causation; that actions in the past affect and cause the present, and the present, future, etc. When you pull scenes out of order, you are putting it on yourself to actively explore possible causation apart from temporality, or perhaps subvert classical causation entirely. I.e. the time-based ordering of events did not cause the situation, something else did. This may entertain determinism or predestination, 'character as destiny,' 'genes/biology' as destiny, coincidence, supernatural intervention, etc.</p>
          <p className="text-sm mb-4 font-rubik">Caution: This shouldn't be done merely for style. It's not an excuse for 'listen to this funny character anecdote from ten years ago' or 'want to see if the main characters got married and had kids?' When you When the past or future manifests in a story, it literally becomes part of the present, like a reordered domino sequence. You create a causative sequence distinct from your temporal sequence, and now have to manage both.</p>
          <p className="text-sm mb-4 font-rubik">Examples:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>You keep flashing back to an incident in the character's childhood, suggesting it is immediately determinative of the character's present/future; </li>
            <li>You flashforward to a distant future, suggesting the present moment determines everything that comes later; </li>
            <li>Events are experienced in seemingly random order, suggesting the character's inability to identify causation in his/her life, or a lack of causation. </li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Don't get non-linear chronology confused with time-travel. You can have a linearly chronological story where the character jumps back and forward in their own timeline, as long as you stay inside the character's relative present, i.e. their head. If you jump out of their head, then it's non-linear.</p>

          <h3 id="post-the-french-scene" className="mb-2 font-semibold">6.10: The 'French Scene'</h3>
          <p className="text-sm mb-4 font-rubik">This is a screenwriting concept, but may be transferable to novel-writing. Normally you think of scenes being contained within separate settings; the end of one scene and the start of another is signaled by a change in setting. Sometimes the same scene may span multiple different settings, for instance if characters are travelling (e.g. in the The Great Railway Bazaar,
            <FootnoteRef text="Paul Theroux, The Great Railway Bazaar." />
            this is somewhat unavoidable).</p>
          <p className="text-sm mb-4 font-rubik">Conversely, you can also have multiple scenes take place in the same setting (unavoidable if your story takes place in one setting). This is called ‘the French Scene’, and is an artifice of French neoclassical theatre. Between scenes, what changes is not the setting, but the entrance/exit of characters or the introduction of knowledge/revelation which critically changes the scene to the extent it would be artificial to treat the post-revelation scene as a continuation of the previous scene. Relationships and characters may be so altered that that the former virtually extinguish and new ones come into creation. A character who was a lover in the previous scene, may become an enemy in the next.</p>
          <p className="text-sm mb-4 font-rubik">You may emphasise the scene change by creating ‘sub-locations’ within your setting. For instance, if characters are confined to a room, they may switch positions, or activities (characters sitting facing one another creates a different feel from one character sitting facing a computer and another hiding in the cupboard, or sleeping in the bed).</p>
          <p className="text-sm mb-4 font-rubik">Again, characters may be cleaning and restocking the panic room, joking around and playing. The next moment they hear intruders have broken in, and close and lock themselves in the panic room. There is no setting change, but there has been a clear scene change.</p>

          <h3 id="post-progression" className="mb-2 font-semibold">6.11: Progression</h3>
          <p className="text-sm mb-4 font-rubik">Jack Bickham says,
            <FootnoteRef text="Jack Bickham, The 38 Most Common Fiction Writing Mistakes." />
            “All good fiction moves forward.”</p>
          <p className="text-sm mb-4 font-rubik">A story must progress naturally; actions have reactions, risks have consequences, and changes have greater and greater effect throughout the characters’ lives.</p>
          <p className="text-sm mb-4 font-rubik">McKee
            <FootnoteRef text="Robert McKee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            lists 4 primary techniques for depicting progression:</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.11.1 	Social Progression (‘widening’)</h4>
          <p className="text-sm mb-4 font-rubik">You can widen the impact of character actions onto society. Throughout a story, the actions of a small number of characters may radiate out to affect more and more people. Ideally, this will happen gradually, not all at once.</p>
          <p className="text-sm mb-4 font-rubik">It may also be that the character’s actions have always affected many, however, they only gradually learn of the wider effects as the story goes on.</p>
          <p className="text-sm mb-4 font-rubik">If you go for this type of progression, make sure your character has a role or job which would potentially affect many in a critical way: this is why you tend to see certain professions in novels opposed to others (doctors, lawyers, politicians, police and detectives, scientists, as opposed to plumbers, wildlife rangers, dentists, garbage collectors, lab technicians, secretaries, and salespeople).</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">6.5.3 	Why Is It Important?</h4>
          <p className="text-sm mb-4 font-rubik">You might not consider this in the writing process, especially if you write scenes in isolation to each other, but a lack of natural transition will rear its head in the rereading process, necessitating its management in the editing and re/structuring process.</p>
          <p className="text-sm mb-4 font-rubik">Transition is another element of story progression; one thing leading to the next. Scenes should also have this feel, which is the utility of transitions.</p>
          <p className="text-sm mb-4 font-rubik">McKee suggests the vehicle for scene transition is a thing held in common by two scenes or counterpointed between them. This ‘thing’ may be:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li className="underline">A trait:</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Commonality: Scene 1 depicts the childish child, scene 2 depicts the childish adult; </li>
              <li>Counterpoint: scene 1 depicts the awkward child; scene 2 depicts the elegant adult</li>
            </ol>
            <li className="underline">An action:</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Commonality: Scene 1 shows the foreplay, scene 2 shows the sex; </li>
              <li>Counterpoint: scene 1 shows consensual sex, scene 2 becomes a rape;</li>
            </ol>
            <li className="underline">An object:</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Commonality: Scene 1 in an archeology museum, scene 2 in the excavation dig-site; </li>
              <li>Counterpoint: Scene 1 in a jungle, scene 1 in a city;</li>
            </ol>
            <li className="underline">A word:</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Commonality: Scene 1 starts with a thematic quote, scene 2 repeats this quote (or adds to it, or finishes it) </li>
              <li>Counterpoint: Scene 1 shows someone being complimented, scene 2 shows them being cursed;</li>
            </ol>
            <li className="underline">Lighting or visual atmosphere/mood:</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Commonality: Scene 1 describes shadows at dawn, scene 2 describes darkening twilight; </li>
              <li>Counterpoint: Scene 1 set under a blue sky, scene 2 a red sky.</li>
            </ol>
            <li className="underline">Sound:</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Commonality: Scene 1 describes drumming, scene 2 describes thunder; </li>
              <li>Counterpoint: Scene 1 describes the harmonious music created by an orchestra, scene 2 describes the mindless noise created by the workers at a big factory.</li>
            </ol>
            <li className="underline">An idea:</li>
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>Commonality: scene 1 shows a portrait being painted, scene 2 shows a baby being born; </li>
              <li>Counterpoint: scene 1 shows a baby being born and nursed, scene 2 shows an animal being slaughtered.</li>
            </ol>
          </ol>

          <p className="text-sm mb-4 font-rubik">You could apply this tip to almost anything in this entire document, but don’t go for the obvious. Try to create an imaginative link to transition scenes. Like symbolism and irony, it should have subconscious appeal, and not slap the reader in the face.</p>

          <h3 id="post-bait-and-switch-scene" className="mb-2 font-semibold">6.12: Bait-and-Switch Scene</h3>
          <p className="text-sm mb-4 font-rubik">If you set your scene one place, populate it with certain characters, and have certain events occur, don’t wistfully carry the reader to an imagined scene of another place, with other characters, and there events. Otherwise you might as well just write that scene.</p>
          <p className="text-sm mb-4 font-rubik">Mittelmark and Newman provide some examples:
            <FootnoteRef text="Howard Mittelmark and Sandra Newman, How NOT to Write a Novel." />
          </p>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="text-sm mb-4 font-rubik">She imagined the ballroom as it must once have been.</p>
            <p className="text-sm mb-4 font-rubik">I gazed out the window and remembered the purity of the Arctic snows.</p>
            <p className="text-sm mb-4 font-rubik">She imagined how it could have been if only Reynaldo were here.</p>
          </div>

          <p className="text-sm mb-4 font-rubik">This is even worse when the present scene gets disregarded for the imaginary scene, e.g.</p>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik"><p>She walked into the upper-class Manhattan party, a secret wonderland of plutocratic excess. But she couldn’t relate to any of these people; their old money and fortune 500 fathers. Right then, she wanted nothing more than to be back home on the farm, with her Irish Draught stallion, Icarus, riding over the broad, green hills. She wouldn’t even mind the frequent rain showers; the smell of wet hay was infinitely preferable to the smog of tobacco and perfume in here. Thirty minutes later, having talked to no one, she left the hotel lobby.</p>
          </div>

          {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

          <hr className="my-6 border-t border-gray-400" />
          <h1 id="post-scenes-comments" className="text-2xl font-bold mb-4">Leave a Comment</h1>

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
            <p className="font-source-code-pro text-xs mt-1">A scene is a unit of story which results in action or change to a character.</p>
          </div>

          {/* Index Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-anatomy-of-a-scene" className="hover:underline hover:text-white">6.1: Anatomy of a Scene</a>
              </li>
              <li className="mb-px">
                <a href="#post-sex-words" className="hover:underline hover:text-white">6.2: 'Sex Words'</a>
              </li>
              <li className="mb-px">
                <a href="#post-forums-for-raising-and-resolving-conflict" className="hover:underline hover:text-white">6.3: Forums for Raising and Resolving Conflict</a>
              </li>
              <li className="mb-px">
                <a href="#post-the-e-chain" className="hover:underline hover:text-white">6.4: The 'E Chain'</a>
              </li>
              <li className="mb-px">
                <a href="#post-diametrics" className="hover:underline hover:text-white">6.5: Diametrics</a>
              </li>
              <li className="mb-px">
                <a href="#post-the-first-scene" className="hover:underline hover:text-white">6.6: The First Scene</a>
              </li>
              <li className="mb-px">
                <a href="#post-the-last-scene" className="hover:underline hover:text-white">6.7: The Last Scene</a>
              </li>
              <li className="mb-px">
                <a href="#post-all-the-other-scenes" className="hover:underline hover:text-white">6.8: All the Other Scenes</a>
              </li>
              <li className="mb-px">
                <a href="#post-chronology" className="hover:underline hover:text-white">6.9: Chronology</a>
              </li>
              <li className="mb-px">
                <a href="#post-the-french-scene" className="hover:underline hover:text-white">6.10: The 'French Scene'</a>
              </li>
              <li className="mb-px">
                <a href="#post-progression" className="hover:underline hover:text-white">6.11: Progression</a>
              </li>
              <li className="mb-px">
                <a href="#post-bait-and-switch-scene" className="hover:underline hover:text-white">6.12: Bait-and-Switch Scene</a>
              </li>
              <li className="mb-px">
                <a href="#post-scenes-comments" className="hover:underline hover:text-white">Comments</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-full sm:w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/setting" className="hover:underline hover:text-white">Setting</a>
              </li>
              <li className="mb-px">
                <a href="/suspense" className="hover:underline hover:text-white">Suspense</a>
              </li>
              <li className="mb-px">
                <a href="/pov" className="hover:underline hover:text-white">POV</a>
              </li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Scenes;