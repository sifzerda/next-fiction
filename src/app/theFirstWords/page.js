// src/app/theFirstWords.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";

function TheFirstWords() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">The First Words</h1>

        <blockquote className="text-sm italic mb-2">
          “ADD QUOTE HERE.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Herman Hesse</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “ADD QUOTE HERE.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Aristotle</span>
        </blockquote>
      </div>

      {/* 
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={firstWBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
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

          <h3 id="post-why-the-first-words-matter">17.1: Why the First Words Matter</h3>

          <h3 id="post-the-4-ws">17.2: The 4 'W's</h3>

          <p>You should set up with an ‘establishing’ scene. This gives your reader a primer into the situation so they can hit the ground (or the page) running. You can take a pragmatic journalistic approach and sketch out the practical elements of the scene, and fill in those details:</p>
          <ol>
            <li>Who: is your character (could start with merely a ‘he’ or ‘she’);</li>
            <li>Where: is your character? (could be a place name, but even better, provide a ‘you-are-here’ description)</li>
            <li>What: are they doing?</li>
            <li>Why: least priority; doesn’t really need to be apparent why anything is happening just yet, as long as what is happening is interesting. If what is happening is not interesting, then you may need to state, early on, why the reader should care. </li>
          </ol>

          <h3 id="post-17-3">17.3: Wide or Narrow</h3>
          <p>Presuming you already have your general scene structure, the next question is: start wide or narrow? Think about the start of a film; does the camera pan over the broad setting (e.g. a city) before locating the main characters, or does it focus on the characters, or plot-relevant object, and then pan out to give you the setting? </p>
          <p><strong>Wide:</strong></p>
          <p className="italic">No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man's...
            <FootnoteRef text="War of the Worlds, H.G. Wells." />
          </p>

          <p><strong>Narrow:</strong></p>
          <p className="italic">Mother died today. Or maybe yesterday; I can't be sure.
            <FootnoteRef text="The Stranger, Albert Camus." />
          </p>

          <p><strong>Wide:</strong></p>
          <p className="italic">It was now lunch time and they were all sitting under the double green fly of the dining tent pretending that nothing had happened.
            <FootnoteRef text="The Short Happy Life of Francis Macomber, Ernest Hemingway." />
          </p>

          <p>If you start narrow, you begin with your main character and/or their thoughts, and then expand the scene to include the setting and other characters. </p>
          <p>If you start wide, you may provide the broader setting, and then narrow down to the main character/s. </p>
          <p>Pop lit tends start narrow to make likeable, interesting characters immediately accessible. The wide approach is more common in classic lit which is concerned with broader politico-historical backdrops. If you use the wide approach, people will interpret your work to be concerned with broader themes. In some ways the distinction may reflect whether your story is character-driven and/or introspective (narrow); or event-driven and critical or socio-political (wide).  </p>
          <p>Hart says:
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            You also can create a sense of narrative motion by describing the approach to a scene, moving from the long view to the scene itself, as here:</p>

          <p className="italic">In daylight, in an all but treeless, baked brown landscape, Sanmi Lasante makes a dramatic appearance, like a fortress on its mountainside, a large complex of concrete buildings, half covered with tropical greenery. Inside the walls, the world turns leafy. Tall trees stand beside courtyards and walkways and walls, artful constructions of concrete and stone, which mount the forested hillside.
            <FootnoteRef text="Mountains Beyond Mountains: The Quest of Dr. Paul Farmer, A Man Who Would Cure the World, Tracy Kidder." />
          </p>
          <p>The initial view is from a distance. The clinic sits isolated in the brown landscape. But then it zooms into the leafy green world of the clinic itself, duplicating the experience you would have if you visited Sanmi Lasante yourself.</p>

          <h3 id="post-close-or-distant">17.4: Close or Distant</h3>
          <p>This is related to the above ‘Wide or Narrow’ writing question, but where that referred to where you begin your story, this refers to how you continue, i.e. for the rest of the story, how close is your ‘camera’ vis-à-vis your protagonist? This is not a POV issue necessarily, but a general question of writing style, description, and substance – what details are you focusing on and what content fills up your description? Is your narrator having a personal discussion with the protagonist (close style), or are they hovering far overhead, neutrally and objectively noting the protagonist’s external actions and words (distant style).  </p>
          <p>This is not merely an aesthetic issue. As a general rule, personal characters should be distanced, and distanced characters should be personalised. </p>
          <p>As an example, I read a story about a royal wedding, arranged between English and Spanish royal families, i.e. royal characters. It wasn't effective because it used the journalistic Hemingway-esque style of short simple sentences, rather than more interior or personal anecdotes. </p>
          <p>In real life, what we hear about members of royal families is distanced because it's coming from third party sources who may themselves have received information second hand. Because they had no access to direct participants' thoughts or feelings or actions at the relevant time, they attempt to substantiate their accounts with hard facts (on this date, at this time, X was wearing Z and did Y action, and was seen to do ABC, and D said such-and-such..). We've already heard these stories in the media, so we don't gain anything more from them in fiction. </p>
          <p>In fiction, you should take advantage of making up personal details about your characters actual direct participation or experience. Create layers of intrigue by having royal characters do or say, or behave in one way at the relevant time, but are quoted as having done something slightly different later by third parties (to save face). Show a 'human' character underneath the more commonly reported regal facade.</p>
          <p>The same should go for any characters in highly-esteemed or distancing positions, or people whose employment or role requires them to wear an impassive professional face.</p>
          <p>By contrast, if your character is an everyman or everyday person, your writing stands to gain more credibility or self-importance by distancing the character, focusing on facts and action over interiority. Your reader is likely also an 'every person' and don't want/need access into another every-person's mind. They want to see an ordinary person have extraordinary things happen to them, making journalistic, distancing writing more effective.</p>

          <h3 id="post-a-big-scene-and-a-small-scene">17.5: A Big Scene and a Small Scene</h3>
          <p>R. Meredith and J. Fitzgerald
            <FootnoteRef text="Robert Meredith and John Fitzgerald, Structuring Your Novel: From Basic Idea to Finished Manuscript." />
            say that the first chapter should have a ‘big scene’ for conflict, and a ‘small scene’ for characterisation and providing preliminary information (to answer the initial ‘who, what, where, why’). </p>

          <h2 id="post-order-of-information">17.6: Order of Information</h2>
          <h4>17.5.1 	Characters</h4>
          <p>Introduce characters (roughly) in their order of importance. For instance, you can introduce the main characters in the first chapter, secondary characters in the second or third chapter, etc. A secondary character may require mentioning early on, but you don’t have to show them – this implies they aren’t that important.</p>
          <p>This may require engineering artifice to get all the main characters together or within vicinity. </p>

          <h4>17.5.2 	Setting</h4>
          <p>Don’t give into the temptation to set the first chapter in your ‘most interesting’ or ‘most exciting’ setting, or, alternatively, the setting the protagonist is most comfortable in, or most themselves.</p>
          <p>The first chapter is the reader’s first impression of the protagonist. How your protagonist acts will depend on the setting they are in. Therefore, setting selection is determined by your protagonist’s arc. Think about the person your protagonist will be by the end of the story. Will they change (have an arc) or stay the same? </p>
          <p>If they change, you need to put them in a setting that brings out the most contrast between who they are at the start, and by the end. So, how the protagonist acts in the setting in the first chapter, should contrast with how they act in the setting (same or different) at the conclusion.</p>
          <p>Setting changes are more effective at emphasising a character who stays the same, whereas keeping the setting the same is more effective at emphaissing a character who has changed (remember the ‘Strange Sandwich’ rule; if there’s too many discrepancies, they risk cancelling each other out).</p>
          <p>To illustrate, compare the films ‘The Lion King’ and ‘Beauty and the Beast.’ </p>

          <p className="boldPurple">The Lion King:</p>
          <p>The film starts and ends in the same setting; Pride Rock. However, the protagonist (Simba) has changed completely since then, i.e. by contrast, by the end, the last time we saw the protagonist in the setting, he was a very different character. Putting the character in the same setting emphasises the difference, because it proves it was not a setting change which changed the character (i.e. he doesn’t change back when he returns to the same setting), it was a natural personality shift.</p>

          <p className="boldPurple">Beauty and the Beast</p>
          <p>The film starts and ends at different settings; respectively, the village, and the castle. However, the protagonist (Belle) has not changed since then, emphasising that the protagonist’s personality is not a pretense which changes based on setting.</p>
          <p>Both examples convey that the personalities of the protagonists are authentic as they are not based on setting, or the company the protagonist keeps. </p>

                <h3 id="post-17-7">17.7: First Line</h3>
                <h5>17.6.1 	Why is it Important?</h5>
                <p>It’s often advised to make your story interesting from the first line. This is not an overstatement. You can tell a lot from the first line in a story. Publishers may only need to read one sentence of your writing to determine whether or not you are a good writer. Prospective readers may not even be that generous.</p>
                <p>You might feel this is cynical and unfair, but the fact is, good writers put a lot of thought, effort and deliberation into the first line, bad writers don’t, and it shows. If the writer didn’t put much effort into the first line, it stands to reason they haven’t much effort into the subsequent line?</p>
                <p>William Sloane
                  <FootnoteRef text="William Sloane, The Craft Of Writing." /> 
                  says: <i>“Those first sentences of a novel are a contract between the writer of fiction and the reader who commences to read him. The contract has to be clear almost at once.”</i></p>
                <p>He recounts an article that said:</p>

  <p className="italic">“Granted, you can't tell a book by its cover. But you can tell a book worth reading by its title and the first sentences. Gushing onto the market this winter and spring—like an artesian well of printed words—are a mob of new literate voices babbling to be heard behind the brilliantly illustrated covers of hundreds of books.</p>
                <p className="italic">For the most part, these new novels . . . are destined for bargain table piles unsold at 50 cents a copy. Even at that reduced price they are no bargain. The authors, while quite able to put one English word after another, have, in total, nothing to say, and the people they write about are as worthless  and uninteresting as gum wrappers in the gutter.”</p>

                <p>He goes on:</p>
                <p className="italic">"The author of this blast goes on to cite a number of novels and their opening sentences, comparing them with the first sentences of books by the masters of fiction, Faulkner, Hemingway, and Algren, to name three. Not one of the openings cited as atrocious was by a writer who has subsequently achieved his or her own readership."</p>

  <h4>17.6.2 	Features of a Strong First Line</h4>

                <p>Writing a good first line is an art. There’s no single method. However, effective first lines tend to share certain features, and refrain from others. As a general guide, effective first lines:</p>
                <ol>
                  <li>Are active; i.e. someone is in the middle of doing something, or something is happening;</li>
                  <li>Raise a question, i.e. ‘who, where, what, when, why?’</li>
                  <li>Focus on a specific thing (rather than a general or abstract thing); whether that’s a character, place, action, etc;</li>
                  <li>Contain something unusual or out of place;</li>
                  <li>Are interesting, exciting, or in some way attention-grabbing.</li>
                  <li>Short, sharp, punchy.</li>
                </ol>

                <p>Daphne Du Maurier had a knack for writing engaging openers. Here are some examples:</p>
                <p className="italic">Last night I dreamt of Manderley again...<FootnoteRef text="Rebecca." /></p>
                <p className="italic">"Don't look now," John said to his wife, "but there are a couple of old girls two tables away who are trying to hypnotise me."<FootnoteRef text="Don’t Look Now, Not After Midnight and Other Stories." /></p>
                <p className="italic">They told me afterwards they had found nothing.<FootnoteRef text="Monte Verità, The Birds and Other Stories." /></p>
                <p className="italic">On December the third the wind changed overnight and it was winter.<FootnoteRef text="The Birds, The Birds and Other Stories." /></p>
                <p className="italic">He had been asleep for about ten minutes.<FootnoteRef text="A Border-line Case, Not After Midnight And Other Stories." /></p>
                <p className="italic">It was three months after she died that he first noticed the apple tree.<FootnoteRef text="The Apple Tree, The Birds and Other Stories." /></p>

                <p>Another writer with a talent for first lines is the horror/weird fiction writer, Laird Barron. Some examples from his short stories:</p>

                <p className="italic">What is it Pilot John says right before we drop from the sky? Where is Molly’s body? <FootnoteRef text="Ardor, Swift to Chase." /></p>
                <p className="italic">I write this: The cops don’t know what really happened in Eagle Talon. Lies, all lies. Ask Jessica, if I ever see her again. <FootnoteRef text="(Little Miss) Queen of Darkness, Swift to Chase." /></p>
                <p className="italic">The Bentley nosed into the weeds along the shoulder of the road and died.<FootnoteRef text="Hallucigenia, The Imago Sequence." /></p>
                <p className="italic">I see Miranda in the endless chain of faces.<FootnoteRef text="Parallax, The Imago Sequence." /></p>
                <p className="italic">Like the Shroud of Turin, the disfigured shape in the photograph was a face waiting to be born.<FootnoteRef text="The Imago Sequence, The Imago Sequence." /></p>
                <p className="italic">...Over the course of the long afternoon of thunderclaps and rain squalls they had unpacked most of the living room of the ancestral home.<FootnoteRef text="Six Six Six, Occultation and Other Stories." /></p>
                <p className="italic">October 2004 Virgil acquired the cute little blue-and-white-pinstriped Cessna at an auction; this over Danni’s strenuous objections.<FootnoteRef text="The Lagerstätte, Occultation and Other Stories." /></p>
                <p className="italic">We bought supplies for our road trip at an obscure general goods store in Seattle—a multi-generational emporium where you could purchase anything from space-age tents to snowshoes once worn by Antarctic explorers. That’s where we came across the guidebook.<FootnoteRef text="Mysterium Tremendum, Occultation and Other Stories." /></p>
                <p className="italic">Kenshi Suzuki and Swayne Harris had a chance reunion at a bathhouse in an Indian tourist town.<FootnoteRef text="Strappado, Occultation and Other Stories." /></p>

                <p>A good starter might effect a ‘microcosm’: it will sound deceptively simple, but in retrospect, says a lot about the coming story. </p>
                <p>Other good lines may contain a question which it takes the rest of the story to answer:</p>

                <p className="italic">The Welcome Wagon lady, sixty if she was a day but working at youth and vivacity (ginger hair, red lips, a sunshine-yellow dress), twinkled her eyes and teeth at Joanna and said, ‘You’re really going to like it here! It’s a nice town with nice people! You couldn’t have made a better choice!’<FootnoteRef text="The Stepford Wives, Ira Levin." /></p>

                <p>The central question here is, 'who acts like this at 60?' Resolving this contradiction wraps up the entire plot.</p>

                <h4>17.6.3 	Examples</h4>
                <p>The best way to get an intuition about what makes a good first line is to read a collection of short stories – but only the first lines – and decide which stories you would continue reading. Consider what it is about the line that makes you interested – break the line down into what information is being communicated (subject/content) and how it’s being communicated (style). Consider, is there any way you could improve the line – by making it shorter or restructuring the information so the interesting thing is the subject of focus?</p>
                <p>Here are some examples of first lines from random stories, to give you a sense of the difference between good and bad first lines:</p>

                <p className="boldPurple">Bad Example #1</p>
                <p className="italic">The girl’s head rested on a small pile of orange-and-brown leaves.<FootnoteRef text="The Chalk Man, C. J. Tudor." /></p>
                <p>This line isn’t interesting and gives no reason to continue reading. The biggest offender is ‘a small pile of orange-and-brown leaves’ which dominates the sentence at 8/13 words; 60% of the sentence, but it’s a description of a mundane thing. Either her head should be resting on something strange, or there is something strange about her head. See this tiny alteration fixes the problem:</p>
                <p className="italic">A pile of dead leaves rested on the girl’s head.</p>
                <p>The kicker in this chapter is the girl turns out to be dead. Problem is, by the time you get that far, this line has already stunk up the place like a 10 day old body. Better to suggest the kick in the line, e.g. <i>The girl didn’t blink. Her head rested on a small pile of orange and brown leaves. </i> Or: <i>She didn’t look dead, at first. Her head rested on a small pile of orange and brown leaves.</i></p>

                <p>But there are other issues with this line that suggest a bigger problem with the writing. For example ‘orange-and-brown’ should just be ‘orange and brown’ – or more symbolically appropriate ‘dead leaves.’ ‘Small pile’ could’ve just been ‘pile.’ </p>

                <p className="boldPurple">Bad Example #2</p>
                <p className="italic">The little girl's hair is fine as cornsilk.<FootnoteRef text="Little Broken Things, Nicole Baart." /></p>
                <p>This line is not interesting enough to induce the reader to continue. It doesn’t raise a question. Description of physical appearance doesn’t tend to make a good first line because it’s superficial; it rarely tells you anything important. Of all the things you could say you start with the texture of a character’s hair? What’s unusual about this character? Why is she the first thing described in the story?</p>

                <p className="boldPurple">Bad Example #3</p>
                <p className="italic">We are a tearless, tiny crowd, we survivors of David Shaw.<FootnoteRef text="The Becoming of Noah Shaw, Michelle Hodkin." /></p>
                <p>This line’s concept is good, but executed poorly. The line evokes a group of people who all have in common surviving some event (attributed to ‘David Shaw’). That raises questions; who are these people? What was the event? How and why did they survive? Who or what is ‘David Shaw’; a place or a person?</p>
                <p>The line is written awkwardly and sentimentally (‘we survivors’). ‘Tearless’ also detracts from the impact of the event; it suggests the event wasn’t really that bad (not enough to induce tears). A better line might simply be ‘No one cried.’ It implies an event did in fact occur which would justify crying, although no one actually did, and we wonder why.</p>
                <p>Fixed example:</p>
                <p className="italic">The survivors of David Shaw were a tiny crowd, and no one cried.</p>

                <p className="boldPurple">Bad Example #4</p>
                <p className="italic">Scott Carey knocked on the door of the Ellis condo unit, and Bob Ellis (everyone in Highland Acres still called him Doctor Bob, although he was five years retired) let him in.<FootnoteRef text="Elevation, Stephen King." /></p>
                <p>A lot of words, but few with anything important to say. Obviously this is Stephen King’s signature conversational style, but the first line should be exempt even from that. The first line has serious work to do; the style can come later.</p>
                <p>The concept is a guy visiting the doctor. Doctor appointments are routine, so you need something extra to suggest this is an unusual or foreboding visit – the comfortable moniker ‘Doctor Bob’ also detracts from the seriousness of the visit. Also, walking into the office is uninteresting in itself; you should jump right into the crux of the visit. </p>
                <p>Fixed example:</p>
                <p className="italic">Doctor Bob stood in the doorway of his condo unit, and for a long time, stared at Scott Carey.</p>

                <p className="boldPurple">Bad Example #5</p>
                <p className="italic">First of all, it was October, a rare month for boys.<FootnoteRef text="Something Wicked This Way Comes, Ray Bradbury." /></p>
                <p>Never start a first line ‘first of all,’ it’s redundant. </p>
                <p>The concept is that October is too infrequent for boys and/or it’s over too fast. Why not girls, too? These are not questions generated by interest, but by misunderstanding; i.e. the wrong kind of questions. No one cares if what is said here is true. There is nothing you can do to fix this line, but a couple of paragraphs later, you have this line: <i>‘But one strange wild dark long year, Halloween came early.’</i> Get rid of the adjectives until you have ‘One strange year, Halloween came early,’ and you have a solid first line.</p>
                
                <p className="boldPurple">Bad Example #6</p>
                <p className="italic">Sarah Shepherd watched her husband come down the stairs.<FootnoteRef text="Spring Fever, Sarah Shepherd." /></p>
                <p>The concept is not interesting. We get the woman’s full name like she’s important, but she’s not doing anything important; it’s her husband who is described in action – uninteresting action. But if ‘Sarah Shepherd’ is so important, why is the focus on her husband’s activity?</p>
                <p>Either he should be described as doing something unusual, or her reaction to his mundane activity should be unusual (e.g. she flinched, or burst into laughter).</p>
                <p>Fixed example:</p>
                <p className="italic">Sarah watched her husband come down the stairs and burst into laughter.</p>
               
                <p className="boldPurple">Bad Example #7</p>
                <p className="italic">Hargreaves did not speak until he had turned on two lamps.<FootnoteRef text="New Murders for Old, Carter Dickson." /></p>
                <p>This is fairly obvious. This line isn’t interesting. The detail ‘two lamps’ is odd, but effective to imply the character may be in a very dark or big place. But that itself doesn’t save this line. Withholding from speaking (particularly for a long time) may be unusual in some circumstances, but not if you are trying to light a place first. The concept is not bad and only needs minor alteration.</p>
                <p>Fixed example:</p>
                <p className="italic">Only once Hargreaves had lit his lamp, and all eyes were on him, did he speak. </p>

 <p className="boldPurple">Bad Example #8</p>
                <p className="italic">The hands of the alarm clock on the table in front of Mr. Crangle stood at 3:47, on a summer afternoon.<FootnoteRef text="Four O' Clock, Price Day." /></p>
                <p>This is almost a parodying example of a bad opener. It’s not an unusual time, and the man isn’t doing anything unusual. Also, the line ‘afternoon’ and the time ‘3:47’ are redundant. The concept is so bad there is nothing you can do to fix it.</p>

                <p className="boldPurple">Bad Example #9</p>
                <p className="italic">The red-orange sun eased its way out of the Jamaican sky, then suspended itself halfway into the Caribbean horizon as though holding still for some divine time exposure.<FootnoteRef text="View From The Terrace, Mike Marmer." /></p>
                <p>Remember that rule ‘Never Describe Sunsets’? Literally. ‘Jamaican’ tries to sex it up but the sunsets in Jamaica aren’t any different from anywhere else.</p>
                <p>There are several other problems: either ‘red’ or ‘orange’ alone would have been more powerful than ‘red-orange.’ ‘Eased’ and ‘suspended’ and ‘holding still’ are uninteresting words suggesting lack of movement. If you’re going to describe the sun, it should be doing something unusual or interesting, and ‘some divine time exposure’ is just confusing and nonsensical.</p>
                <p>Fixed example:</p>
                <p className="italic">The red sun dropped below the sky and then it was night in Jamaica.</p>

                <p className="boldPurple">Mediocre Example #1</p>
                <p className="italic">I bounded over the gray, dusty terrain toward the huge dome of Conrad Bubble.<FootnoteRef text="Artemis, Andy Weir." /></p>
                <p>Okay, but not great. Normally we would want to know what the ‘huge dome’ is but if you know the book’s sci-fi this line pretty much explains itself. There should be something unusual here even for a sci-fi, for instance, the character’s oxygen is running out, or he is locked out of ‘Conrad Bubble.’</p>

                <p className="boldPurple">Mediocre Example #2</p>
                <p className="italic">Later, Tom Russell would wonder if the very boards of that place—splintered, unpainted, unlovely—had leaked some sort of lethal courage into his blood and made him see things that could not be true.<FootnoteRef text="A Tangled Mercy, Joy Jordan-Lake." /></p>
                <p>There’s a good first line here that’s weighed down by the language. The line establishes a place of interest, its reference purely as ‘that place’ flags its importance and makes us ask ‘where is it?’ and ‘why is it important?’ and ‘why is it having this effect on the man?’ We also want to know what are the things ‘that could not be true’ being referred to?</p>
                <p>Note, the man has an ordinary name; that’s good, because it’s not the man but the place you want to draw attention; you’re suggesting the ‘place’ would have this effect on anyone.</p>
                <p>‘Later’ is a clever way to flag this as important; the character will ruminate on this event.</p>
                <p>Unfortunately, the description undermines the strengths of this first line. The adjectives smuggled in by parentheses; ‘splintered, unpainted, unlovely’ are unnecessary. You could replace with ‘old’, or even nothing, it’s not essential. The phrase, ‘the very boards of that place...had leaked some sort of lethal courage into his blood’ makes no sense, and it’s cheap to write a nonsensical phrase as an opener to induce further reading for comprehension. The reader won’t fall for it; they will just assume the rest of your book is nonsense as well.</p>
                <p>You don’t have to do much to fix up this line:</p>
                <p>Fixed example:</p>
                <p className="italic">Later, Tom Russell would wonder if the splintered, unpainted boards of that place made him see things that could not be true.</p>

                <p className="boldPurple">Mediocre Example #3</p>
                <p className="italic">He was an easy mark.<FootnoteRef text="The City of Brass, S. A. Chakraborty." /></p>
                <p>There’s a good idea here; someone being scammed. It could be more active by changing the past tense ‘was’ to future tense. The past tense assures us the scam was completed successfully, whereas future tense would make us want to see if the prediction is correct – when characters predict something will be easy, it tends to end up going disastrously. The past tense unfortunately foreclosures that possibility.</p>
                <p>Fixed example:</p>
                <p className="italic">He would be an easy mark.</p>

                <p className="boldPurple">Mediocre Example #4</p>
                <p className="italic">The wind whistled through the valley, and the pyramidal tent that signified Outpost 1 quivered before the blast.<FootnoteRef text="The Crate at Outpost 1, Matthew Grant." /></p>
                <p>Good idea, phrased badly. Camping is interesting, particularly where the weather poses a challenge. The symbolism in the tent ‘quivering’ is effective to convey apprehension of those occupying the tent. A tent given the moniker ‘Outpost 1’ raises interest that this is not an ordinary tent, but might work better with a number not one, to suggest of multiple tents, this one has something interesting happen to it. Calling something ‘1’ is redundant. </p>
                <p>However, the description ‘signified’ and ‘pyramidal tent’ is awkward and unnecessary. We assume the tent is pyramidal, regardless it doesn’t add anything.</p>
                <p>Fixed example:</p>
                <p className="italic">The wind whistled through the valley and the tent called Outpost 7 quivered before the blast.</p>

                <p className="boldPurple">Mediocre Example #5</p>
                <p className="italic">When Janine stopped talking, sometimes as now she seemed to stop breathing also, as if to listen.<FootnoteRef text="The Duel, Joan Vatsek." /></p>
                <p>The idea is good; it’s interest-provoking if a character stops talking and even stops breathing for a moment; it keeps us in suspense. The problem is the god-awful wording. It reads as a general description of her behaviour, not as something she as actually doing presently. </p>
                <p>Fixed Example:</p>
                <p className="italic">Now Janine stopped talking, in fact, she stopped breathing.</p>

                <p className="boldPurple">Mediocre Example #6</p>
                <p className="italic">For the tenth time that day, in a voice that shook a little, Martha Halsey read aloud the item in the Dellville Weekly Call.<FootnoteRef text="Call for Help, Robert Arthur." /></p>
                <p>It’s interesting that a character’s voice is shaking when they read something, but its weakened by the qualifier ‘a little’ and fact they have read it ten times already mitigates some interest, detracting immediacy and spontaneity – if the character has done this ten times already, why should we be interested now? </p>
                <p>Fixed example:</p>
                <p className="italic">Voice shaking, Martha Halsey read aloud the item in the Dellville Weekly Call.</p>

                <p className="boldPurple">Mediocre Example #7</p>
                <p className="italic">Henry Tolman got away with murder—he loved that phrase and often turned it over in his mind, gloating.<FootnoteRef text="Scott Free, Miriam Lynch." /></p>
                <p>Funnily enough, you have a good opening line all on its own already here. But for some reason the author had to cram the rest in as well, which dilutes its impact. </p>
                <p>Fixed example:</p>
                <p className="italic">Henry Tolman got away with murder.</p>

                <p className="boldPurple">Mediocre Example #8</p>
                <p className="italic">I was waiting on the courthouse steps when Norma Krueger, my stepmother, and Russ Tyson, her lover, came out of the building into the harsh November sunlight of Los Angeles.<FootnoteRef text="The Last Witness, Robert Colby." /></p>
                <p>Relatives exiting the courthouse is interesting; the omission of whether they are the plaintiffs or defendants makes us want to find out. The description of ‘harsh…sunlight’ doesn’t work because it would only be harsh to the stepmother emerging into it from the dimmer room, not our narrator who has already been exposed to it. This line is also too verbose.  </p>
                <p>Fixed example:</p>
                <p className="italic">I was waiting on the courthouse steps when my stepmother came out.</p>

                <p className="boldPurple">Mediocre Example #9</p>
                <p className="italic">Fran came out of Lila's apartment, shoving the green-printed racing sheets into her apron pocket.<FootnoteRef text="Something Short of Murder, Henry Slesar." /></p>
                <p>A description of someone coming out of another’s apartment and shoving an object into their clothes raises the suggestion of burglary, and gets our interest. Even more interesting that it’s an innocuously named woman, i.e. the attention is correctly drawn to the object, not the person.</p>
                <p>The problem is the object is dull. The object should either be so odd you’d wonder why anyone would steal it (e.g. a particular painting, or a mantelpiece ornament) or highly valuable, dangerous, etc. Or the object could be vague, raising the question of what it is. </p>
                <p>Fixed example:</p>
                <p className="italic">Fran came out of Lila’s apartment shoving the tiny box into her apron pocket.</p>

                <p className="boldPurple">Good Example #1</p>
                <p className="italic">On the third morning I noticed that somebody had disabled the truck.<FootnoteRef text="Old Virginia, Laird Barron." /></p>
                <p>This catches interest; finding your vehicle disabled mysteriously raises suspense. ‘On the third morning’ suggests it was deliberate; someone is watching the protagonist, and struck strategically, probably planning the sabotage.</p>
                <p>The suddenness and unexpectedness of this event makes it a great opening line. Jumping right into the story at this point conveys the surprise the protagonist must feel, without stating it. </p>
                <p>It’s relatable, making us identify immediately with the protagonist. If this could happen so quickly and easily, we ask, if that was me, what would I do? Unlike the above example, this line starts generating ‘who/what/where/why/how’ questions. </p>

                <p className="boldPurple">Good Example #2</p>
                <p className="italic">'Let's face it, Doctor, if an inmate's suicidal there ain't a hell of a lot you can do.’<FootnoteRef text="Petey, T.E.D. Klein." /></p>
                <p>This is fine; but a little manipulative for using suicide for effect. It would be more effective if it were a statement, rather than dialogue, e.g. <i>‘If an inmate was suicidal, there wasn’t a hell of a lot you could do.’ </i></p>
                <p>Or, <i> ‘The worst, thought the Doctor, were the suicidal inmates, because there wasn’t a hell of a lot you could do.’</i> </p>
                <p>That’s even more effective because it has two points of interest: the suicide, and the idea of a doctor who feels helpless in being unable to treat some patients. </p>


                <p className="boldPurple">Good Example #3</p>
                <p className="italic">On December the third the wind changed overnight and it was winter.<FootnoteRef text="The Birds, Daphne Du Maurier." /></p>
                <p><i>Normally you should strive for active concrete openers. However, this is a good example of an effective symbolic opening. It’s saying: ‘Suddenly things got harder.’</i></p>
                <p>The symbolism is permissible because it directly relates to the story’s content; the temperature and direction of the wind directly relates to the path birds fly. The line gains foreboding knowing what the story is about, but even without the birds it is still effective to convey sudden change and harshness. </p>

                <p className="boldPurple">Good Example #4</p>
                <p className="italic">Rafferty was not the only one losing at the blackjack table, but he had been there the longest.<FootnoteRef text="The New Deal, Charles Einstein." /></p>
                <p>This works on several levels. Gambling is an exciting event in literature, and it’s unusual because multiple players here are losing, raising the question; why are they still playing? This implies they are determined, even stubborn, or reckless. That’s more interesting than watching conservative, rational players. Also our interest is focused on the most stubborn or reckless player; the one who has been there ‘the longest.’ We want to see whether he suffers a big loss, or whether he’ll overturn the odds and triumph.</p>

                <p className="boldPurple">Good Example #5</p>
                <p className="italic">The thin man on the witness stand fumbled with the edge of his necktie.<FootnoteRef text="Boomerang, Guy Fleming." /></p>
                <p>Court proceedings are a cliché way of getting immediate interest, but nonetheless effective. This one is pretty simple, the guy fumbling with his tie suggests he is anxious or lying and that’s interesting. A physical description such as ‘thin’ is essential here because it flags the guy (and not just the information he is about to say) as being important, i.e. you need to remember him.</p>

                <p className="boldPurple">Good Example #6</p>
                <p className="italic">I've thought about it a lot, man; like why Victor and I made that terrible scene out there at San Quentin, putting ourselves on that it was just for kicks.<FootnoteRef text="The Second Coming, Joe Gores." /></p>
                <p>The concept here is a character who did something they later regretted (hinted by word ‘terrible’), which is interesting.</p>
                <p>The past tense here is effective for the same reason ‘Later’ was effective above; a past event is going to have future rippling effects. There is intrigue in an event which has two potential interpretations: how it was erroneously interpreted the first time, and how it was appreciated later. It hints the event was more complex and nuanced than first appears. That’s also interesting. </p>
                <p>The conversational style works if the event was serious, otherwise you could tighten it up. The line correctly poses a question to generate interest: Why did narrator and Victor make ‘that terrible scene’. Notice the ‘like’ in <i>'I’ve thought about it a lot [...] <strong> like</strong> why [...]' </i>suggests 'it' refers to more than just the ‘scene’ made. This is a clever way to suggest the author has other (yet unasked) questions about the event. </p>
                <p>The concept here is a character who did something they later regretted (hinted by word ‘terrible’), which is interesting.</p>
                <p>The problem is this is a false question which it itself answers: ‘for kicks.’ The line ‘putting ourselves on’ suggests the true answer was not for kicks, but it would be more effective if no reason was supplied, e.g. <i>I’ve thought about it a lot; like why Victor and I made that terrible scene out there at San Quentin.’</i></p>

                <p className="boldPurple">Good Example #7</p>
                <p className="italic">It's midnight now.<FootnoteRef text="Prey, Michael Crichton." /></p>
                <p>This is very simple, but shows you don’t have to be a genius to write a good first line. Unusual time and makes us wonder why the character is still awake. Also, the present tense and short sentence creates immediacy, which is incongruent with the typically inactive, quiet late time.</p>

                <p className="boldPurple">Good Example #8</p>
                <p className="italic">With dull curiosity he watched the crowds gathering far below on the sidewalk.<FootnoteRef text="Man With A Problem, Donald Honig." /></p>
                <p>Crowds gathering is interesting; if people are looking at something, we want to look also. Also interesting is a lone person watching others gather, why isn’t he with them? The incongruence of the character’s reaction ‘dull’ curiosity also makes us want to know why he isn’t as interested in something that he should find interesting.</p>

                <p className="boldPurple">Good Example #9</p>
                <p className="italic">There was no path, only the almost vertical ascent.<FootnoteRef text="They Bite, Anthony Boucher." /></p>
                <p>A very simple, but effective line. This signifies a challenge; how will a character get up an almost vertical surface? It also asks, why is the character there in the first place? This is also an example of ‘showing’ description (rather than telling) because if a character is doing something difficult, it suggests their objective is really important, so we want to know what it is.</p>

                <p className="boldPurple">Good Example #10</p>
                <p className="italic">Don Cassidy first noticed her after he gave an open-ended assignment to the students enrolled in his English literature class at the Queens campus of St. John's University: Write a theme about something wonderful in your life that has happened to you.<FootnoteRef text="Facing The Wind, Julie Salamon." /></p>
                <p>This is an exception of my rule for short and concise first lines. It’s exceptional because the line delivers its hook at the start (“first noticed her”), which allows the added length to draw us further along. The length is also justified by providing two promises; (1) the girl is special, and (2) her answer to the writing prompt will be interesting, thereby further eliciting our interest.</p>

                <p className="boldPurple">Good Example #11</p>
                <p className="italic">Telephones and telephone bells have always made me uneasy.<FootnoteRef text="The Fly, George Langelaan." /></p>
                <p>Simple and effective. It generates a question or live issue immediately: people do not normally feel uneasy about telephones etc., but this narrator does. It requires explaining, creating a promise it will be explained, eventually.</p>
                <p>Secondly, this line establishes a link of trust with the narrator, by his disclosure of vulnerability. People generally don’t lie about things that make them seem more vulnerable, so we are inclined to believe him, as opposed to suspecting he is an unreliable narrator. This is important in a story where improbable or impossible things are reported to have happened (such as here).</p>

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
            <p className="font-source-code-pro text-xs mt-1">The start of a piece of writing should establish basic story facts, setting up the story's core elements.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-why-the-first-words-matter" className="hover:underline hover:text-white">17.1: Why the First Words Matter</a></li>
              <li className="mb-px"><a href="#post-the-4-ws" className="hover:underline hover:text-white">17.2: The 4 'W's</a></li>
              <li className="mb-px"><a href="#post-wide-or-narrow" className="hover:underline hover:text-white">17.3: Wide or Narrow</a></li>
              <li className="mb-px"><a href="#post-close-or-distant" className="hover:underline hover:text-white">17.4: Close or Distant</a></li>
              <li className="mb-px"><a href="#post-a-big-scene-and-a-small-scene" className="hover:underline hover:text-white">17.5: A Big Scene and a Small Scene</a></li>
              <li className="mb-px"><a href="#post-order-of-information" className="hover:underline hover:text-white">17.5: Order of Information</a></li>
              <li className="mb-px"><a href="#post-first-line" className="hover:underline hover:text-white">17.7: First Line</a></li>
              <li className="mb-px"><a href="#post-the-first-words-comments" className="hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/theNextWords" className="hover:underline hover:text-white">The Next Words</a></li>
              <li className="mb-px"><a href="/theLastWords" className="hover:underline hover:text-white">The Last Words</a></li>
              <li className="mb-px"><a href="/writersBlock" className="hover:underline hover:text-white">Writer's Block</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default TheFirstWords;