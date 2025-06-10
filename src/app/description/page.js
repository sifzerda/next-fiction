// src/app/description.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
//import Link from "next/link";

function Description() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Description</h1>

        <blockquote className="text-sm italic mb-2">
          “When I use a word,” Humpty Dumpty said, in rather a scornful tone, “it means just what I choose it to mean—neither more nor less.”
          “The question is,” said Alice, “whether you can make words mean so many different things.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Alice in Wonderland, Lewis Carroll</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “Prose is architecture, not interior decoration.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Ernest Hemingway</span>
        </blockquote>
      </div>

      {/* 
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={descBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>
*/}

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={premiseBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex flex-col-reverse sm:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-show-dont-tell" className="mb-2 font-semibold">11.1: Show Don't Tell</h3>

          <p>This rule deals mainly with conveying exposition. Exposition comprises all the non-plot related ‘facts’ or neutral information about your story, e.g. dates, times, histories, biography, setting information, etc. The ‘background information.’</p>
          <p>Jack Hart provides this example:
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
          </p>
          <p><strong>Telling:</strong></p>
          <p>But Michelle’s elation evaporated when she saw him in the intensive care unit. She came out moments later, distraught. Frank was suffering a seizure.</p>
          <p><strong>Showing:</strong></p>
          <p>Michelle’s elation evaporated in the intensive care unit when Frank suffered a seizure. She left moments later, tears streaming down her face.</p>

          <p>The main point of description is to promote and further conflict. Its ability to provide background is secondary. Never force exposition out of the character’s mouth (e.g: “As you know, we’ve known each other for twenty years”) or slap it into the description self-consciously (e.g: a photograph on the mantelpiece showed the both of them twenty years younger).  </p>
          <p>To make sure that you’re showing as well as telling, Sol Stein advises to “[ensure] there is something visual [described] on each page.”<FootnoteRef text="Sol Stein, How To Grow A Novel." /></p>

          <h4>11.1.1 	Pace Exposition</h4>
          <p>Like the rest of the story, exposition must have a sense of meaningful progression. You can’t drop big facts at random.</p>
          <p>Generally, throughout the story, the least important facts should come first, followed by more important, and the most important revealed last. The most important facts are those which are secrets and hidden and painful truths characters’ don’t want known.</p>

          <h4>11.1.2 	The ‘California Scene’</h4>
          <p>Do not write a ‘California Scene.’ This is a scene where two characters who only just met start revealing deep painful truths about each other.
            It may also be that the characters know each other very well, but one character announces truths too readily and in a public setting.
          </p>
          <p>So named, apparently because ‘only in California’ do people unguardedly reveal such things at parties and so on. Apparently there is such a fear that West Coasters are disconnected from reality they must arm themselves with heartfelt anecdotes to prove they are ‘in touch’ with themselves.</p>
          <p>In all other parts of the world, characters only reveal these things with much painful coercion because they are placed in a difficult situation and revealing the truth is the lesser of two evils.</p>

          <h4>11.1.3 	Support Statements with Facts</h4>
          <p>A formulation of the ‘show don’t tell rule.’ If you want to make a statement about something, provide ‘evidence’ to support it.  A really good writer will even remove the statement itself, leaving just the evidence for the reader to make up their own mind.</p>
          <p>Another example: you want to suggest something to the reader, or the reader to respond in a particular way. For instance, your character is told the same unbelievable thing twice. The first time, they don’t believe it. The second time, they aren’t sure and decide to investigate it. A lazy writer will just say ‘This was the second time he/she’d heard this now, so he decided to go investigate…’ etc. It’s better to use evidence to insinuate the change of mind: the information teller is a trustworthy, reasonable person. So now you have a prior scene to set up showing this second person is trustworthy and reasonable. Even better if you can make that scene itself interesting and unusual (you don’t want the reader to see right through the scene and think ‘oh, this is setting up XYZ’). You want them to mistake it for a natural part of the plot, an interesting feature in its own right.</p>
          <p>Always ask yourself: how does the reader know [statement]? Don’t expect the reader to just believe everything you say – they wouldn’t do this in person. </p>
          <p>Put yourself in the reader’s position. What would make you believe the statement, if someone told you? With character traits, you tend to need an example of that trait in action (if someone is ‘funny’, you need to hear a joke. If a place is dangerous, you need to see the danger or hear a statistic, etc).</p>
          <p>You will find if you ask yourself regularly with all statements in your story, you will naturally build up lots of ‘prior scenes’ to set things up, and your story scenes will write themselves.</p>

          <h4>11.1.4 	Don’t Describe Sunsets</h4>
          <p>Jack Bickham says: “Don’t describe sunsets.”<FootnoteRef text="Jack Bickham, The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)." /> Meaning, don’t provide an aesthetic description for its own sake, as if aesthetic prose is an end in itself.</p>
          <p>Every time you describe something (object, character, place, character’s thoughts or feelings, etc) the story stops. You want to minimize this by weaving description in as infrequently as possible, making it clear and concise, and basically smuggling it in, loading description with plot-relevant association.</p>
          <p>Description’s purpose is highly artificial. You’re not merely giving the described thing to the reader just as it is. Rather, you’re highlighting those aspects which relate to the progression of the plot in some way, or suggest plot-relevant information. Description should suggest something to the reader, allowing them to make their own assessment and judgement. </p>
          <p>Readers don’t need to know how things look like precisely; they already know what things look like generally. You protagonist’s house isn’t necessarily more special than anyone else’s house. It probably doesn’t really matter if the reader gets the hair colour of your character wrong. You would describe those things to suggest information about you characters or the plot. Different kinds of houses suggest different kinds of traits about their occupants. However, a description of a house which doesn’t say anything about its occupant, fails to do any work.</p>

          <h3 id="post-a-common-pitfall">11.2: A Common Pitfall</h3>
          <p>Some writers ‘make it up’ as they go along. Sometimes a scene flashes into your head and you just want to drop everything and write it before it disappears. However, writing description before planning out any of the critical story-building elements – the above – is like going to the store and buying a bunch of ingredients without first knowing what kind of food you’re going to cook – i.e. it’s a disaster waiting to happen, and you risk having to chuck out the ingredients you decide you don’t really want, and wasting time jettisoning back and forth to pick up the ones you actually do want. </p>
          <ol>
            <li>Description shouldn’t be discordant and ‘jar’ a person out of the story or theme; </li>
            <li>Description shouldn’t be unpleasant or silly or mind-boggling – if you’re twisting a metaphor into something more complicated than simply describing the actual thing, you’re doing something wrong; </li>
            <li>It should aim to take a complex phenomenon and render it simple and instantaneously imaginable. It should not take a complex phenomenon and render it even more complex, or bizarre; </li>
            <li>It should sound as if it’s coming out of the mouth of someone whose worldview is framed by the thematic concerns. Metaphors and analogies should be the lyrics of the thematic song, as well as a guide for which details are focused on; </li>
            <ol>
              <li>For instance, if your theme refers to death, things described and focused on could include the way things warp or become discolored in time, things that are broken or decrepit, that a person has more wrinkles than the last time they were seen, the stillness or quietness of a location, or the opposite of any of these things if you want to be ironic. </li>
            </ol>
            <li>Description should also take into consideration the voice of the person so describing. For instance a 40 year old gun toting alcoholic park ranger is unlikely to know or care what sub-sub-genre of music is playing out of the radio, however description of what kind of plant is growing out of the pot hanging from the ceiling might be more appropriate. </li>
          </ol>

          <h3 id="post-11-3">11.3: Information Economy</h3>
          <p>You want your writing to create and preserve an economy of information, but instead of trading money, your reader trades you their time. This occurs even before they make the purchase of your book.</p>
          <p>For the trade to be feasible, your words must have value. Your words attain value according to the laws of supply and demand: when you limit supply, you raise demand. The more information you provide, the less value it will have. Writers who spill their guts immediately convey that their words have such little value they can be spilled without consequence (as the saying goes, ‘empty vessels make the most noise’). So ensure you don’t ramble or meander or flood the story with detail. This makes it seem you have the time to do so, implying your time is of little value. </p>
          <p>This requirement creates a paradox: your story must be packed with content, but withhold critical information, however, all the information you disclose must be important, whilst you can’t give away all the important information.</p>
          <p>The rule of Information Economy, simply is: </p>
          <p className='indent-text-1'>Withhold all the information your reader wants.</p>
          <p>You raise and sustain an informational economy by:</p>
          <ol>
            <li>Early narrative should raise unrestricted promise;</li>
            <li>Create a chain of live issues;</li>
            <li>Foreclose less important issues first, and more critical issues later;</li>
            <li>Don’t be overdescriptive;</li>
            <li>Description should be sharp, frugal, and pregnant with suggestion</li>
            <li>Say a lot using only a little.</li>
          </ol>
          <p>Some of these points are elaborated below:</p>

          <h4>Some of these points are elaborated below:</h4>
          <p>Above all, you should only describe things which are unusual, unexpected or striking. It goes without saying that if it’s expected, the reader has already made the assumption and saved you the necessity of describing the thing. For instance, don’t say ‘the blue pond’ as blue is the default imagined colour of a pond, however you should say ‘the green pond’ if that’s the case. If a character enters a house, only describe those things which immediately draw the attention or are unexpected. People already expect that a living room will contain generic furniture, so only describe the odd or unusual aspects of furniture. </p>
          <p>Writing classes churn out a raft of amateur writers who write description based on exercises where they have had to look around the place they’re in and describe the details, and with no guidance, they do so either personally (describe in detail only the things which mean something to the writer) or indiscriminately (describe everything). Neither of these will result in compelling, insightful writing.</p>

          <h4>11.3.2 	Le Mot Juste</h4>
          <p>Good description makes use of word poverty; getting the most mileage out of the least words. Here’s an exercise to help you develop a sense of economic word selectivity, as well as prioritization of information. What is the smallest amount of description you can provide, such that if someone actually looked about where you are, they wouldn’t get a surprise? Good description makes use of word poverty; getting the most mileage out of the least words. Here’s an exercise to help you develop a sense of economic word selectivity, as well as prioritization of information. What is the smallest amount of description you can provide, such that if someone actually looked about where you are, they wouldn’t get a surprise? </p>
          <p>Here’s an example:  </p>
          <p className='indent-text-1'><i>The Television Centre...is a vision of the future with huge, glassed-in newsrooms, and reception areas that look like they've been hit with [a] pastel bomb...</i>
            <FootnoteRef text="Danny Wallace, Yes Man, (non-fiction)." />
          </p>

          <p>This description gives you an immediate, top-down sense of what the whole building looks like, particularly visually stimulating phrases like ‘vision of the future’ and ‘pastel bomb.’</p>
          <p>Another example:</p>
          <p className='indent-text-1'><i>"The door opened finally on a forbiddingly dark and chilly vestibule."</i>
            <FootnoteRef text="Claudia Osborne, Over My Head, (non-fiction)." />
          </p>

          <p>'Dark' and 'chilly' both do separate work, and the unusual word choice in 'vestibule' is more effective than 'room' 'corridor' or 'hallway' by carrying a sense of medieval oldness, like a chamber.</p>
          <p>There are two adverbs: finally and forbiddingly. Without them, the sentence is:</p>

          <p className='indent-text-1'><i>"The door opened on a dark and chilly vestibule."</i></p>
          <p>Forbiddingly could have been dropped (as a dark, chilly place is forbidding by implication), but there's an argument for the necessity of 'finally', it suggests the protagonist has come a long way thus far, and this is the last stop, whether they like it or not. This is the resting place. Without 'finally' you lose that connotation, and it would cause the reader to wonder what the protagonist is doing here. 'Finally' suggests the answer: the protagonist has come a long way. They need to rest; this place had better do.</p>
          <p>Out of curiousity, the word's place in the sentence is critical as well. We can't rearrange the word:</p>
          <p className='indent-text-1'><i>"Finally, the door opened on a dark and chilly vestibule."</i></p>

          <p>The problem with this structure is it suggests the protagonist is relieved to reach this place, which is the opposite of the desired effect. Plus, it&apos;s not the protagonist who is thinking &apos;finally&apos; but the act the of the door opening which suggests an ominous &apos;final&apos; destination.</p>
          <p>Changing the location of a single word can make a huge difference. Example:</p>
          <p className='indent-text-1'><i>The tommy gun fit weirdly into a violin case, making a gangster look like he was going to a music recital.</i>
            <FootnoteRef text="William Elliott Hazelgrove, Shots Fired in Terminal 2: A Witness to the Fort Lauderdale Shooting Reflects on America's Mass Shooting Epidemic, (non-fiction)" />
          </p>
          <p>The problem word here is 'weirdly'; its location makes it sound like the positioning of the gun in the violin case is awkward, though we know from context what is in fact weird is the gun being in the case at all.   </p>
          <p>A better sentence might be:</p>

          <p className='indent-text-1'><i>The tommy gun, weirdly, fit into a violin case, making a gangster look like he was going to a music recital.</i></p>
          <p>Or:</p>
          <p className='indent-text-1'><i>Weirdly, the tommy gun fit into a violin case, making a gangster look like he was going to a music recital.</i></p>
          <p>Note, there’s an argument that the word ‘weirdly’ didn’t need to be in the sentence at all; after all, it’s implied that a gun in a violin case is weird.</p>
          <h5>11.3.3 	Implication by Imagery</h5>
          <p>Here’s an example of the above rule:</p>
          <p className='indent-text-1'>The main street of Starbuck is deserted, save four men in hunting camo outside Archie's Meats and Groceries, loading paper bundles of bloody meat into the back of a pickup truck. Only the store and hotel restaurant appear to be open.
            <FootnoteRef text="Tom Jolkinen, Curtains, (note: this is non-fiction)." />
          </p>
          <p>Hopefully you have a picture of the scene in your mind. Consider this image for a moment. If you’re like me, you would have pictured a regional street (as opposed to a CBD) maybe even rural or remote, sparsely built up. Yet nothing in the paragraph explicitly says that. </p>
          <p>It’s coming from inference: the detail about the place being deserted, only the store and restaurant are open (even though, alternatively, it could be night time) which inclines against a heavily commercial area, and the ‘men in hunting camo’ and ‘pickup truck’ suggests a more countrified region. All of these details ‘show’ not ‘tell’; this is someone literally looking around and just telling you what they see, what stands out, and yet it also communicates a whole lot of information that another author might simply ‘tell’ you.</p>

          <h4>11.3.3 	Outside Before Inside</h4>
          <p>Don't detail the protagonists personal life (inside scene) until its been 'earned'; by a surrounding 'action' or 'conflict' scene, (outside scene). More specifically, don’t start deep inside a character’s head until their environment/context has been established.</p>

          <h3 id="post-most-unusual-to-least-unusual">11.4: Most Unusual to Least Unusual</h3>
          <p>This follows on from the ‘unusual’ rule. You’re aiming to work realism and naturalism into description. One way you effect this is to describe things in the order they’d be noticed in real life.</p>
          <p>For instance, if a POV character walks into a big room where lots is going on all at the same time, what you describe first should be what your character notices first. This may require balancing up various sensory inputs; sight, smell, taste, sound, touch. If the room contains a big party the order of description might be:</p>
          <ol>
            <li>Music (may be heard even before character enters the room);</li>
            <li>Lighting (only if unusual, e.g. very dark);</li>
            <li>An estimate of the crowd size (big, small, spread out, densely packed, etc);</li>
            <ol>
              <li>May also be implied by the freedom of movement, i.e. can the character move quickly or must they weave and brush past people?</li>
            </ol>
            <li>The type of crowd (work colleagues, teenagers, adults, strangers);</li>
            <li>What the crowd is doing (dancing, talking, eating) and all doing the same activity or many different activities?</li>
            <li>What the room in general looks like (architecture, clean, disordered, etc);</li>
            <li>Particular people (if recognized);</li>
            <ol>
              <li>What those particular people are doing and wearing.</li>
            </ol>
            <li>The location of character’s person of interest, e.g. love interest/crush;</li>
            <ol>
              <li>What the person of interest is doing/wearing, etc;</li>
            </ol>
            <li>POV character’s action, e.g. approaches person of interest. </li>
          </ol>

          <p>You get the sense above that the POV character’s attention is gradually narrowing, zooming in; taking in everything generally and then chucking out what they’re not interested in. This is only a rough guide. </p>
          <p>By contrast, you wouldn’t describe the building’s architecture and then say, ‘oh, by the way, there was a bunch of people in the room.’</p>

          <h3 id="post-metaphors-and-similies">11.5: Metaphors and Similies</h3>
          <p>Metaphors and similes are figures of speech, but are not interchangeable literary devices:</p>
          <ol>
            <li><u>A simile</u> is a description which compares one thing to another thing;</li>
            <ol>
              <li>What passing-bells for these who die as cattle?</li>
              <li>Leaf-strewing gales utter low wails like violins.</li>
            </ol>
            <li><u>A metaphor</u> is a description which substitutes one thing for another thing;</li>
            <ol>
              <li>The detective listened with a wooden face;</li>
              <li>I was lost in a sea of nameless faces.</li>
            </ol>
          </ol>

          <p>You might wonder when – if ever – you should use a figure of speech. It should be borne in mind that these are descriptive devices. </p>
          <p>Burnett and Burnett says metaphors and similies must be unselfconscious and instinctive.<FootnoteRef text="Hallie and Whit Burnett, Fiction Writer's Handbook." /> If there's no reason to describe the thing – i.e. the reader already knows exactly what you’re talking about – then don't. Secondly, both of these devices are used in lieu of actually describing the thing itself, and generally you should prefer to describe what something is, not what it’s like.</p>
          <p>Sol Stein suggests using a metaphor or similie when you encounter 'bare bones' patches of your writing; writing that might come across as bland or needing extra description or character.<FootnoteRef text="Sol Stein, How To Grow A Novel." /></p>
          <p>My personal rule is to avoid using figures of speech unless there is some exceptional circumstance, including:</p>
          <ol>
            <li>The thing is so odd and particular, it can’t be described using brevity or normal description; </li>
            <li>The figure of speech has subconscious appeal (e.g. visceral, immediate, subtextual) lacking in normal description which adds to the intended evocation;</li>
            <li>The figure of speech conveys something reflective of the story’s theme;</li>
            <li>The figure of speech conveys irony or some other particular literary technique.</li>
          </ol>

          <p>Here’s a clear example of a similie doing work direct description can not:</p>
          <p className='indent-text-1'><i>Sunlight pushed in past the barred windows and lay down heavily on the green floor like an algae-infested lake.</i><FootnoteRef text="Autobiography of a Face, Lucy Grealy." /></p>
          <p>This provides a vivid picture of the room and the lighting and is more dynamic than saying the room is a dim, intrusive, murky, heavy, oppressive, yellowy-green.</p>
          <p>If you do decide to use figures of speech, here are some general rules for using them properly and effectively. </p>

          <h4>11.5.1 	Metaphors alter, Similies add to</h4>
          <p>Generally, a metaphor does not need to be ‘like’ the thing you describe (it could even be starkly different), as long as it puts the right picture in your reader’s mind. A metaphor can significantly change the way your reader might have otherwise imagined something. Similes, however, generally do need to be like the thing you describe, aiming to clarify it and add greater detail – </p>
          <p className='indent-text-1'><i>Isobel. It was the name of someone you wouldn't want to mess with. It even sounded ominous, like the tolling of a bell. </i><FootnoteRef text="Ghost House, Alexandra Adornetto." /></p>
          <p>Here, the thing (the name ‘Isobel’) is not like the simile (the tolling of a bell). Even if you argue that the phoneme ‘bel’ onomatopoeically sounds like the clang of a bell, you have to selectively ignore the other two syllables ‘Is’ and ‘o’. </p>

          <h4>11.5.2 	High-fidelity</h4>
          <p>The similarity has to be crystal clear to the reader, not strained or contorted. By using a figure of speech instead of a plain description, you are implying that it is a higher fidelity description of the thing even than describing the thing itself directly. ‘Good enough’ is not good enough – </p>
          <p className='indent-text-1'><i>Rory’s teeth were clattering so loudly it sounded like coins falling onto a wooden floor.  </i><FootnoteRef text="Ghost House, Alexandra Adornetto." /></p>
          <p>The sound of teeth clattering does not have enough fidelity to coins falling on a wooden floor to justify this simile. Coins falling on a wooden floor is a racket; teeth chattering is not. It’s a simile that has to be contorted in the mind to work.</p>

          <h4>11.5.3 	Tone consistency</h4>
          <p>A figure of speech should keep in tone with the thing being described:</p>
          <p className='indent-text-1'><i>"And like the fingering of some Beethoven piece long left unrehearsed, my body remembered it for me..." </i> <FootnoteRef text="Down Around Midnight, Robert Sabbag." /> </p>

          <p>Here, this overly-romantic similie is actually talking about being triggered by PTSD, inappropriately conveying that PTSD is pleasurable.</p>
          <p>A tonally dissonant figure of speech may convey satirical/ironic/humourous purpose – this is called ‘Bathos’. Here’s an intentional example: </p>
          <p className='indent-text-1'>The ballerina rose gracefully en pointe and extended one slender leg behind her, like a dog at a fire hydrant.  </p>

          <h4>11.5.4 	Relatable</h4>
          <p>A figure of speech will fail if the reader doesn’t know what you’re talking about. Figures of speech should not contain exclusive, unusual things that only few people have experienced (least of all the writer): </p>
          <p className='indent-text-1'><i>I felt like I was wading into uncharted waters without a life raft.</i> <FootnoteRef text="Ghost House, Alexandra Adornetto." /> </p>
          <p>I’ve never waded into ‘uncharted waters’ without a life raft (and I suspect the author never has, either), so this simile is already bad. It’s also a cliché.</p>

          <h3 id="post-the-hierarchy-of-best-description">11.6: The Hierarchy of Best Description</h3>
          <p>In what form should your description take? Obviously, the most effective – but what’s that? If you have some piece of information you’d like to communicate in your story, you should aim for getting it across via the highest form in the hierarchy. </p>
          <p>In order of best to less favourable – </p>

          <h4>11.6.1 	Behaviour:</h4>
          <p className="code-left"><code><i>He lifted the book and cradled it in one hand like it was an infant. His other hand he raised to the crowd seated before him, and cupped his fingers. He did this in silence for a full two minutes. His eyes penetrated the throng of people, and then gazed beyond them, at something no one else could see. He remained still as they went silent, then opened his mouth.   </i></code></p>
          <p>This is description of characters doing things. Action without explanation is very compelling and effective; it drops you right into a scene, amidst the action. It doesn’t presume your audience is dumb, because they are forced to work out the character’s mental state based on what is happening – rather than simply being told. It’s more realistic because in real life this is all the info you get: you aren’t told what people are thinking, you have to make judgments.</p>
          <p>Look at the above example – you know what it’s about without being explicitly told. This is what behavioural description should aim to do, but you don’t have to be so obvious, either. Really good behavioural description can be fun and cerebral to read, like a puzzle or a mystery; you are trying to work out what is happening and what people are thinking, and stay on the same page, even as the scene is constantly changing and developing.</p>

          <h4>11.6.2. 	Stuff: </h4>
          <p className="code-left"><code><i>He towered over the pulpit. A fresh coat of paint mostly almost covered up the chipping pine underneath. Panes of golden dusty light fell onto the floor, broken up by the cracks in the windows. The carpet was scuffed, but not kinked. Never kinked. So many elderly parishioners that it would invite a lawsuit.    </i></code></p>
          <p>This is description of things: a setting, a person’s appearance, etc.</p>

          <h4>11.6.3. 	Dialogue: </h4>
          <p className="code-left"><code><i>Looking at them all, he said: “If you live according to the Word as set out in Scripture, you have done better than to win the lottery, because your prize is eternal life in Heaven. And Heaven is a beautiful place decorated with gold and silver and forever the resting place of beautiful people. A life of luxury on Earth is only a small taste of what Heaven has to offer the devout.”    </i></code></p>

          <h4>11.6.4. 	Introspection: </h4>
          <p className="code-left"><code><i>Father X knew just by looking, who was saying their prayers, and who wasn’t. If they prayed, they would glow. That’s how he knew faith worked, because it made the members congregation look better each time they attended. How many times now had he suppressed a cringe, when he’d seen yet another new congregation member shuffle through the double doors, looking like the dregs of the Earth? How many times now had he felt the thrill of pride, seeing them, a few weeks later, unrecognisably radiant with the inner peace that only true faith could bring?    </i></code></p>

          <h4>11.6.5.	Narration: </h4>
          <p className="code-left"><code><i>........    </i></code></p>
          <p>All of these forms of description are about the Father, his religion, and his church, however, the subtext in all of these paragraphs points to a preoccupation with exteriority and the appearance of things: beauty, gold and silver, ‘glow’, etc. This suggests this church is superficial. Each form of description attempts to convey that implication in a different way. </p>
          <p>Sol Stein says to convert narrative summary into dialogue where possible. This turns the retelling of an offstage event into a visible scene – dialogue is always an immediate scene.<FootnoteRef text="Sol Stein, How To Grow A Novel." /></p>

          <h3 id="post-break-up-adjectives">11.7: Break Up Adjectives</h3>
          <p>Let's say you want to describe something in particular detail and you need to use numerous adjectives to get the description sufficiently specific. Instead of saying: 'A forest of huge, gnarled, grey, straight, balding oak trees.' </p>
          <p>Let's say there's no adjective you can delete in that sentence without removing some essential meaning. You should break adjectives up into separate sentences, like this: </p>
          <p className='indent-text-1'><i>A forest of gnarled grey pine. Their branches reached up straight some twenty metres into the sky. Although mostly balding, a number of them still bore flowers.</i></p>
          <p>Make sure each sentence refers to a separate sub-topic; for instance, above, the first sentence gives a general overview of what the collective looks like: an oak forest. The next sentence focuses on the height of the oaks. The third sentence focuses on the seasonal stage of the oaks; the fact they don't have many leaves is not due to being winter, but from age, because they still flower.</p>

          <h3 id="post-how-frequent-should-description-be">11.8: How Frequent Should Description Be?</h3>
          <p>As a reliable, general rule, Sol Stein  gives the advice to break up every three sentences of dialogue with a description (of character, or setting, etc). He says:</p>
          <p className='indent-text-1'>“Most exchanges in dialogue should be brief. A speech should be not more than three sentences. If a speech has to run longer, break it up with interruptions from other speakers or by an action or a thought.”<FootnoteRef text="Sol Stein, How To Grow A Novel." /></p>

          <h3 id="post-make-the-abstract-concrete">11.9: Make the Abstract Concrete</h3>
          <p>If you're a stickler for the 'show don't tell' rule (ideally, all writers should be), you may hate writing scenes with one character feeling emotions and feel resigned to writing those emotions.</p>
          <p>Consider the emotion you want the character to be feeling and try to evoke it by a separate incident.</p>
          <p>Example: A character is going somewhere and feels anxious/nervous about getting to the destination (e.g. an exam). Rather than say 'Protagonist felt anxious...' maybe it has been raining and the soil path has turned mushy (providing a tiny physical obstacle). If by car, their preferred road is blocked or slowed by construction works, and they opt for a road that has potholes. This will make the reader groan with empathy.</p>
          <p>Make it a bit unusual so the reader doesn't immediately catch on. Making it rain because the protagonist is sad, or thunder when angry, is too obvious.</p>
          <p>Here is an example:</p>
          <p className='indent-text-1'><i>The sight of water, limpid, pale, was a soothing contrast to the fierce sun above their heads.</i><FootnoteRef text="Don't Look Now, Daphne Du Maurier." /></p>
          <p>At this point in the story, the main character feels a mixture of sadness and anger. Rather than merely state that -- which would not evoke the feelings -- the description of colourless, tepid water evokes the sadness, while the blazing, glaring sun evokes the anger.</p>

          <h3 id="post-describe-things-as-other-things">11.10: Describe Things as Other Things</h3>
          <p>To make your writing memorable, you want your description to sound ‘fresh’ and ‘new.’ </p>
          <p>One way of doing this is to describe relatively boring things as if they were suggestive and interesting things. Imagine the motorhead describing his car to evoke the sexualised body of a women – a gimmicky cliché, but the essence of what I’m talking about.</p>
          <p>Another example: Let’s say you’re writing a horror story in which a protagonist journeys into a forest and eventually reaches the monster's lair. If the forest isn't itself unusual, a surface level description may be boring and pure 'sightseeing' before something actually happens. </p>
          <p>Alternatively, you can describe the forest as if it were something else, e.g. here the forest is literally described as if it were a home, suggesting something lives there long before you actually see anything (thereby raising tension and the sense of the protagonist's unwelcome, uninvited 'intrusion').</p>
          <p>Example: following a path by a 'fence' of trees to an 'open gate' of tree stumps, under the 'roof' of a jungle canopy, bordered by ferns that draped down like 'curtains', where a chink of light suggests an open door.</p>
          <p>The more strange the connections, the better; a frightening looking, baying possum may suggest a guard dog; an arcane etching scratched into the ground may suggest an ominous welcome mat; a dead animal carcass may suggest a living room rug, etc.</p>
          <p>This can be used to evoke 2 different effects:</p>
          <ol>
            <li>You can create foreshadowing (e.g. the forest is later discovered to actually be something’s home);</li>
            <li>You can evoke the protagonist’s mental state (the protagonist expects the forest to be the home of a monster, even if it’s not) </li>
          </ol>
          <p>The main thing is that you don’t actually describe the dead animal skin as a rug – that would be absurd – but describe it as if you were describing a rug. The point is not to consciously ‘alert’ the reader to the comparison. The added benefit here is by allowing you to write unfamiliar things as if they were familiar – to ‘write what you know’ (or ‘as if’ you know).</p>

          <h3 id="post-emphasize-by-contrast">11.11: Emphasize by Contrast</h3>
          <p>You want to show your main character is lonely. Obviously you would stick them in a tiny, cramped basement, doing some solitary activity.</p>
          <p>Wrong: stick your character in a big, open space, on their own, possibly doing something which typically involves numerous people. This highlights the lack of people in their life better than the basement scene. </p>
          <p>That one person shows up to a big birthday party is a more poignant indicator of loneliness than that the person refuses to hold a birthday party at all.</p>
          <p>A person isn't lonely because they don't make friends (this suggests they like being alone), but because they can't make friends. </p>

          <h3 id="post-11-12" className="blog-chain-link-paragraphs">11.12: Chain Link Paragraphs</h3>
          <p>Note 13.2.3 Paragraphs says every paragraph should cover a single idea or thought. However, in some circumstances you may find multiple sentences borrow the same ideas, or carry ideas over throughout a scene. In such a case, you can link sentences together using key words or motifs, i.e. a ‘nexus’. This creates flow. Here is an example:<FootnoteRef text="Black Like Me, John Howard Griffen." /></p>
          <p><u>Paragraph 1:</u></p>
          <p className="code-left"><code><i>I flicked the negatives, as he must have done, toward the comer, heard them scratch dryly against the wall and flap to the floor. One struck the dead globe, causing it to sing its strange filamental music of the spheres, fragile and high-pitched above the outside noises.   </i></code></p>

          <p><u>Paragraph 2:</u></p>
          <p className="code-left"><code><i>Music from the juke box, a grinding rhythm, ricocheted down the street.   </i></code></p>

          <p>Here, the nexus is ‘sound.’ Notice the ‘filamental’ music of the light bulb in the first paragraph segues into the ‘music from the juke box’ in the second paragraph. Sound is transformed into music.</p>
          <p>Throughout this chapter, there are several references to noise and music: ‘Another car <strong>roared </strong>down the street…’ and ‘Canned <strong>jazz blared </strong>blared through the street with a monstrous high-strutting <strong>rhythm </strong>that pulled at the viscera.’ The racket complements the dissonance and torment going on in the narrator’s mind during this scene; this is why the references to noise are framed by negative and discordant terms – ‘scratch dryly’, ‘strange filamental music’, ‘high-pitched’, ‘grinding rhythm’, ‘roared’, ‘blared’, ‘monstrous high-strutting rhythm’. The chapter, therefore isn’t really about music or noise –</p>
          <p>– it’s about the cacophonic conflict going on inside the protagonist/narrator. </p>

          <p>Here are some more examples of linking paragraphs from Ramsey Campbell’s short story ‘The Companion.’<FootnoteRef text="Dark Companions, Ramsey Campbell." /> The examples are numbered; the red sentence is the end of one paragraph, the blue sentence is the start of the next. See if you can identify the ‘nexus’ between paragraphs – or see my footnotes for elaboration:</p>
          <hr />
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p><strong><u>1:</u></strong></p>
            <p>...scraps of paper whirled.</p>
            <p>
              <span className='blue-text-span tooltip-container'>Stone almost walked away.
                <span className='tooltip-box'>
                  Here, the nexus is motion; the ‘whirling’ paper shifts to the protagonist’s walking.
                </span>
              </span>
            </p>

            <p><strong><u>2:</u></strong></p>
            <p>...he might have the fairground almost to himself.</p>
            <p>
              <span className='blue-text-span tooltip-container'>As he reached an entrance...
                <span className='tooltip-box'>The nexus is vague but appears to be the fairground itself; at large/collectively in the first paragraph, narrowed to the entrance in the second. This suggests the fairground is being viewed by the protagonist, first as a whole, and then from the start.
                </span>
              </span>
            </p>

            <p><strong><u>3:</u></strong></p>
            <p><span className='red-text-span'>...and hurried through the entrance, into colour and noise.</span></p>
            <p>the high roof with its bare iron girders reminded him at once of a railway station, but the place was noisier...</p>

            <p><strong><u>4:</u></strong></p>
            <p>...he had to remind himself he could see, even if he couldn’t hear.</p>
            <p>
              <span className='blue-text-span tooltip-container'>But there wasn’t much to see.
                <span className='tooltip-box'>What the protagonist can see provides a direct nexus. Here, the second paragraph follows up with an almost direct response.
                </span>
              </span>
            </p>

            <p><strong><u>5:</u></strong></p>
            <p>Stone had the impression of being shut in a dusty room where the toys, as in childhood tales, had come to life.</p>
            <p>
              <span className='blue-text-span tooltip-container'>He shrugged vaguely and turned to leave.
                <span className='tooltip-box'>In the first paragraph, the protagonist has a mental impression. The second paragraph suggests his reaction to this impression; dismissal.
                </span>
              </span>
            </p>

            <p><strong><u>6:</u></strong></p>
            <p>He wondered how they were managing at the tax office in his absence. Slower than usual, no doubt.</p>
            <p>
              <span className='blue-text-span tooltip-container'>Then he saw the merry-go-round.
                <span className='tooltip-box'>A humourous nexus here, because the second paragraph’s ‘merry-go-round’ provides the visual metaphor that the tax office from the first paragraph is not only managing more slowly than usual, but is going around in circles.
                </span>
              </span>
            </p>

            <p><strong><u>7:</u></strong></p>
            <p>“I’ll get on,” he said.</p>
            <p>
              <span className='blue-text-span tooltip-container'>He patted the unyielding shoulders of the horse...
                <span className='tooltip-box'>The Protagonist’s dialogue in the first paragraph (“I’ll get on,”) crystallises into action in the second (touching the horse).
                </span>
              </span>
            </p>

            <p><strong><u>8:</u></strong></p>
            <p>Because I haven’t been on a merry-go-round for years, I suppose.</p>
            <p>
              <span className='blue-text-span tooltip-container'>The merry-go-round stirred
                <span className='tooltip-box'>A straightforward nexus here, from the past (the last time protagonist rode a merry-go-round) to the present (actually riding one again).
                </span>
              </span>
            </p>

            <p><strong><u>9:</u></strong></p>
            <p>...a crowd surging through one of the entrances and spreading through the funfair. He grimaced: it had been his fairground for a little while, they needn’t have arrived just as he was enjoying his merry-go-round.</p>
            <p>
              <span className='blue-text-span tooltip-container'>The crowd swung away.
                <span className='tooltip-box'>The nexus is the crowd, specifically its activity; surging in, and then swinging away. This also gives us the sense of the protagonist’s motion on the merry-go-round, by implication.
                </span>
              </span>
            </p>

            <p><strong><u>10:</u></strong></p>
            <p>He shook his head to try to control his pouring thoughts.</p>
            <p>
              <span className='blue-text-span tooltip-container'>But the fair was spinning faster.
                <span className='tooltip-box'>The nexus here is motion; the motion of the protagonist’s rushing thoughts is reinforced by the fair ‘spinning’ around him.
                </span>
              </span>
            </p>

          </div>

          <h4>11.12.1 	When should you interlink paragraphs?</h4>
          <p>Some notes on the Companion (above): not every paragraph in this short story was interlinked. Some were entirely separate. Don’t strive to link every paragraph in your story. Like anything in your story, interlinking creates a specific effect, and you don’t want to overdo it. Reasons why you might interlink paragraphs:</p>
          <ol>
            <li><strong><u>To effect causation: </u></strong>interlinking paragraphs flow, creating a sense of one thing causally, logically or temporally (or otherwise) happening after another. By contrast, you might prevent any interlinkage to effect dissonance, illogic, conflict, irregularity, or isolation;</li>
            <li><strong><u>To effect perception: </u></strong>interlinkage can put the reader inside the protagonist’s head by showing what the protagonist is focusing on, or looking at, in sequence; by contrast, you can also use separate paragraph breaks to jump back and forth between perspectives;</li>
            <li><strong><u>To create a dialogue: </u></strong>one paragraph may raise a question and the subsequent paragraph may provide an answer;</li>
          </ol>

          <h3 id="post-drama-by-omission">11.13: Drama by Omission</h3>
          <p>Picture two love stories. In one, the characters express their love for each other and get married. In the second, one character expresses their love, while the other does not, and starts to ignore them. In the second, the character’s omission to reciprocate creates conflict which drives the plot forward and makes it more interesting.</p>

          <h3 id="post-11-14">11.14: Wide and Narrow Description</h3>
          <p>Jack Hart
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            explains that storytelling at different distances requires two different kinds of narrative, each of them essentially a different language. When the distance is great, when you step way back from the action, you write in summary narrative, collapsing time and space into a dispassionate account, viewed from above. When you shrink the distance, you shift into scenic narrative, going inside the scene as it unfolds, as if it was happening to you. </p>

          <p>He provides examples of each:</p>
          <p><u>Summary narrative:</u></p>
          <p><i>After navigating the first ten miles and splashing through thirty-four rapids, McDougal’s group pulled over at Klondike Creek to set up camp.</i></p>

          <p><u>Scenic narrative: </u></p>
          <p><i>McDougal and Byars pushed off. They negotiated the fifteen-foot behemoth but were swinging sideways when they hit the next set of waves. The raft capsized, catapulting Byars into the water. McDougal stayed in his seat, virtually upside down. As the raft rose with the next wave, McDougal yanked hard on an oar and righted his boat, a miraculous maneuver.</i></p>
          <p>Hart provides a list contrasting the two narratives:</p>

          <table className="custom-table">
            <thead>
              <tr>
                <th className="summary-narrative">Summary Narrative</th>
                <th className="scenic-narrative">Scenic Narrative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="summary-abstract">Abstract</td>
                <td className="scenic-concrete">Concrete</td>
              </tr>
              <tr>
                <td className="summary-space">Reaches across Space</td>
                <td className="scenic-place">Unfolds in One Place</td>
              </tr>
              <tr>
                <td className="summary-time">Collapses Time</td>
                <td className="scenic-real-time">Seems to Happen in Real Time</td>
              </tr>
              <tr>
                <td className="summary-quotations">Employs Direct Quotations</td>
                <td className="scenic-dialogue">Employs Dialogue</td>
              </tr>
              <tr>
                <td className="summary-topical">Organized Topically</td>
                <td className="scenic-scenically">Organized Scenically</td>
              </tr>
              <tr>
                <td className="summary-omniscient">Omniscient Point of View</td>
                <td className="scenic-specific-pov">Specific Point of View</td>
              </tr>
              <tr>
                <td className="summary-outcomes">Deals with Outcomes</td>
                <td className="scenic-process">Deals with Process</td>
              </tr>
              <tr>
                <td className="summary-information">Conveys Information</td>
                <td className="scenic-experience">Reproduces Experience</td>
              </tr>
            </tbody>
          </table>

          <p>The ladder of abstraction is a good tool for visualising point of view; at the bottom is scenic narrative, and as you rise each rung, get closer to summary narrative.</p>

          <h3 id="post-the-ladder-of-abstraction">11.15: The Ladder of Abstraction</h3>
          <p>At 11.9 I said ‘Make the Abstract Concrete.’</p>
          <p>Here is a device for moving between concrete and abstract description. Where you bring in abstraction, let it come after establishing the concrete. Think of the concrete as a lamp, and the abstract as the genie. The genie is bound by the lamp. In order to summon the genie, you have to have the lamp.</p>
          <p>The abstract should spring from the concrete: <strong>Abstract</strong> observations should spring from descriptions of <strong>concrete</strong> things.</p>
          <p>Here is an example of the Ladder of Abstraction for the above ‘McDougal kayaking summary:</p>

          <table className="custom-table-center">
            <thead>
              <tr>
                <th>Ladder of Abstraction</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Everything</td></tr>
              <tr><td>All Living Things</td></tr>
              <tr><td>All Human Beings</td></tr>
              <tr><td>Outdoor Adventurers</td></tr>
              <tr><td>River Runners</td></tr>
              <tr><td>Illinois River Runners</td></tr>
              <tr><td>Illinois River Rafters</td></tr>
              <tr><td>McDougal’s Party</td></tr>
              <tr><td>McDougal</td></tr>
            </tbody>
          </table>

          <p>Jack Hart says that good writers <i>“ignore the writing gurus who harp at them to “show, don’t tell,” knowing that good writing constantly ascends and descends the ladder of abstraction. They show and tell.”</i></p>
          <h3 id="post-description foils">11.16: Description Foils</h3>
          <p>I noted under (XXXXX section) that not only characters – but basically anything – can have ‘foils’ including description; describing one thing contrasted by another lends both things emphasis. For instance, Hart  describes a homeless bum sleeping outside a Tiffany’s jewellery shop.</p>

          <h3 id="post-time-markers">11.17: Time Markers</h3>
          <p>These are descriptions which mark what time it is and/or how much time has passed between events. A lack of time markers will cause confusion as to chronology, but they should be subtle; noted subconsciously by the reader. The specificity and frequency of time markers depends on the story's subject matter and degree of action.</p>
          <p>Examples:</p>
          <ol>
            <li>A story about a natural disaster may mark time by the encroachment of the disaster (area burned in a fire, height of water in a flood, degree of devastation in a hurricane, etc)</li>
            <li>Time implied by transport;</li>
            <li>The passage of time may be implied by a narrator’s introspective moment between action scenes;</li>
            <ol>
              <li>E.g. <i>‘He got into the carriage. His thoughts turned to her: the last thing she’d said, her tone; the words, the pauses. The carriage pulled up outside the house.’</i></li>
            </ol>
          </ol>

          <h3 id="post-gravity">11.18: Gravity</h3>
          <p>Adding 'gravity,' -- emotional weight, solemnity, pathos, etc -- to your story can make it sound more interesting and important. But it's not a case that you can just keep heaping it on. Like a celestial body, your story can shudder and collapse under the weight of its own gravity. It's similar to the 'strange sandwich' rule -- don't pile on double servings.</p>
          <p>Consider of these two examples, which is the most moving:</p>
          <p>Bad Example: </p>
          <p className="code-left">
            <code><i>"I will forever regret that day and would gladly give up my life if it meant all those little children could be alive again, but it is folly to believe that life could ever be fair." </i></code></p>
          <p>The gravity in the <strong>content</strong> (dead children) is enough to support the sentence; it doesn't need the added formality of <strong>style.</strong></p>

          <p>Corrected Example: </p>
          <p className="code-left">
            <code><i>"I still regret that day. I would give up my life for the children to still be alive. But life isn't fair." </i></code></p>

          <h3 id="post-description-in-action">11.19: Description in Action</h3>
          <p>Description should strive to effect ‘action’ as much as possible, occurring <strong>presently</strong> rather than in the past. Even a simple, trivial, innocuous gesture (see below example) will sound more dynamic and interesting if presented as if happening, rather than having happened. A sense of change, movement, and activity is preferred than a static, unchanging, unmoving scene. </p>
          <p>Example (paraphrased from an actual novel):<FootnoteRef text="Disclosure, Michael Crichton." /></p>
          <p className="indent-text-1">Her legs were crossed, one expensive leather heel aloft.</p>
          <p>Fixed example:</p>
          <p className="indent-text-1">She crossed her legs, raising one expensive leather heel into the air.</p>
          <p>Rather than use the above description to punctuate a still, lifeless scene, a skilful writer will use such a description to further punctuate an already moving, changing scene, or charged dialogue, emphasizing a sense of direction change or momentum and motion.</p>

          {/* ------------------------------------------------- Comment Form footnotes --------------------------------------------- */}

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
            <p className="font-source-code-pro text-xs mt-1">Description should advance the plot or promote conflict or provide character development.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-show-dont-tell" className="hover:underline hover:text-white">11.1: Show Don't Tell</a></li>
              <li className="mb-px"><a href="#post-a-common-pitfall" className="hover:underline hover:text-white">11.2: A Common Pitfall</a></li>
              <li className="mb-px"><a href="#post-information-economy" className="hover:underline hover:text-white">11.3: Information Economy</a></li>
              <li className="mb-px"><a href="#post-most-unusual-to-least-unusual" className="hover:underline hover:text-white">11.4: Most Unusual to Least Unusual</a></li>
              <li className="mb-px"><a href="#post-metaphors-and-similies" className="hover:underline hover:text-white">11.5: Metaphors and Similies</a></li>
              <li className="mb-px"><a href="#post-the-hierarchy-of-best-description" className="hover:underline hover:text-white">11.6: The Hierarchy of Best Description</a></li>
              <li className="mb-px"><a href="#post-break-up-adjectives" className="hover:underline hover:text-white">11.7: Break Up Adjectives</a></li>
              <li className="mb-px"><a href="#post-how-frequent-should-description-be" className="hover:underline hover:text-white">11.8: How Frequent Should Description Be?</a></li>
              <li className="mb-px"><a href="#post-make-the-abstract-concrete" className="hover:underline hover:text-white">11.9: Make the Abstract Concrete</a></li>
              <li className="mb-px"><a href="#post-describe-things-as-other-things" className="hover:underline hover:text-white">11.10: Describe Things as Other Things</a></li>
              <li className="mb-px"><a href="#post-emphasize-by-contrast" className="hover:underline hover:text-white">11.11: Emphasize by Contrast</a></li>
              <li className="mb-px"><a href="#post-chain-link-paragraphs" className="hover:underline hover:text-white">11.12: Chain Link Paragraphs</a></li>
              <li className="mb-px"><a href="#post-drama-by-omission" className="hover:underline hover:text-white">11.13: Drama by Omission</a></li>
              <li className="mb-px"><a href="#post-wide-and-narrow-description" className="hover:underline hover:text-white">11.14: Wide and Narrow Description</a></li>
              <li className="mb-px"><a href="#post-the-ladder-of-abstraction" className="hover:underline hover:text-white">11.15: The Ladder of Abstraction</a></li>
              <li className="mb-px"><a href="#post-description-foils" className="hover:underline hover:text-white">11.16: Description Foils</a></li>
              <li className="mb-px"><a href="#post-time-markers" className="hover:underline hover:text-white">11.17: Time Markers</a></li>
              <li className="mb-px"><a href="#post-gravity" className="hover:underline hover:text-white">11.18: Gravity</a></li>
              <li className="mb-px"><a href="#post-description-in-action" className="hover:underline hover:text-white">11.19: Description in Action</a></li>
              <li className="mb-px"><a href="#post-description-comments" className="hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/premise" className="hover:underline hover:text-white">Voice</a></li>
              <li className="mb-px"><a href="/plot" className="hover:underline hover:text-white">Writing Devices</a></li>
              <li className="mb-px"><a href="/synopsis" className="hover:underline hover:text-white">Editing</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Description;