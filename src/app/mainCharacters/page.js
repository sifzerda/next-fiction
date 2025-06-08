// src/app/mainCharacters.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import mainCharBanner from '../assets/maincharbanner.png';
import Image from "next/image";

function MainCharacters() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Premise</h1>

        <blockquote className="text-sm italic mb-2">
          “What you do speaks so loudly that I can’t hear what you’re saying.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Ralph Waldo Emerson</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “Be sure not to discuss your hero's state of mind. Make it clear from his actions.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Anton Chekov</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={mainCharBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-the-people-with-the-most-at-stake">7.1: The People with the Most at Stake</h3>

          <p>It’s been said a story should focus on the characters who stand to lose the most, or have the most at stake. We like to hear stories about people who have something to lose—family, careers, ideals, opportunities, reputations, realistic hopes and dreams.</p>
          <p>It should be noted that generally humans value ideas over physical realities, and a story will be more interesting if those ideas are the things at stake. The potential loss of reputation hits harder than the potential loss of a house or car.</p>
          <p>A character who has nothing to lose is limiting, static and ineffective. For instance, a homeless alcoholic who shambles aimlessly from one day to the next, recklessly inviting death, makes a poor character. Similarly, you rarely see suicidal protagonists, because there are no stakes and no conflict. In real life, such people may have very interesting and moving stories, but for the purpose of fiction writing, they make weak characters. There is nothing of value in these characters for the reader to latch onto, because by the next chapter they could very well be dead.</p>

          <h4>7.1.1 	Rosencrantz and Guildenstern are Undead</h4>
          <p>Good story ideas are squandered because of a weak choice of protagonist.</p>
          <p>This is a big problem today because cultural relativism has increased sentiment that stories should be democratic, that 'everyone deserves to have their story told' and 'every story is equally important as every other story.' It’s no longer politically correct to only be interested in the King and the Queen; we must be equally in demand of the peasant’s tale now, too. You also see this in media where the same story is being told but from a different character’s perspective. This is bad form; characters are not interchangeable as protagonists, any more than the protagonist and antagonist are interchangeable. There’s a reason why a certain character is the protagonist, and not another character.</p>
          <p>Whether real life is or should be democratic, it's not so in good storytelling.</p>
          <p>In Tom Stoppard’s absurdist play ‘Rosencrantz and Guildenstern are Dead,’ the titular bit parts from Shakespeare’s Hamlet are the main characters; the play makes fun of the fact that their entire existence and designation is to be side characters in Hamlet – outside of which, they don’t properly ‘exist.’ The play recognizes that it’s absurd to pretend that by ‘shifting the camera’ those characters become the protagonists in their own story. It’s as absurd as saying you would have won a race if only the winner had switched places with you.</p>

          <h3 id="post-ditch-the-wimp">7.2: Ditch the Wimp</h3>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">“...[I]nteresting characters are almost always characters who are active—risk-takers—highly motivated toward a goal.”</div>
          <p>— Jack Bickham
            <FootnoteRef text="Jack Bickham, The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)." />
          </p>

          <p>Don’t make your main character unconfident, timid, indecisive, passive, despondent, indolent, etc. It comes down to this: characters who act (or react) are interesting; characters who fail to act/react are not. And your plot needs to be driven, so you need a driven character.</p>
          <p>There is a minor caveat; your protagonist may be deceptively weak (but deep down is actually hiding strength), or start weak but develop into a strong character. Think Tolkien’s Frodo,
            <FootnoteRef text="The Lord of The Rings Trilogy, J. R. R. Tolkien." />
            or Stephen King’s Carrie,
            <FootnoteRef text="Carrie, Stephen King." />
            Shirley Jackson’s Eleanor.
            <FootnoteRef text="The Haunting of Hill House, Shirley Jackson." />
            It’s not that these characters are wimps or weaklings, but that they are mistaken as such, or become strong by the end of the story, which creates suspense and interest when their latent potential reveals itself.</p>
          <p>I also address this under ‘Cowardly or Courageous’ under the Horror Section.</p>

          <h3 id="post-two-sources">7.3: Two Sources</h3>
          <p>I generally build characters from two different sources:</p>
          <p><span className="font-bold">(1) Template: </span></p>
          <p>The character is based on someone in real life. If you have a good candidate, you are in a really good position to create a realistic character. The downside to this is that your template may not do or say the things your character really needs to do or say to advance the story or be part of the story.</p>

          <p><span className="font-bold">(2) Symbol: </span></p>
          <p>The character embodies some message or thematic concern you want the story to communicate. If it’s a compelling, conflicting thematic concern, you have the opportunity to make a ‘deep’ character, and one who is extremely intertwined with the story. This is the kind of character readers want to keep checking in on, to see how they are progressing. The disadvantage to this is that if your character is too theme-based, they may come off a caricature, or a mere mouthpiece for a particular view.</p>

          <h3 id="post-ingredients-of-a-character">7.4: Ingredients of a Character</h3>
          <p>Characters aren’t just a laundry list of static traits. The same character might act a certain way in one context, and then different in another. They may use a different style of communication and adopt different mannerisms in the presence of their relatives, than their friends, than their enemies, than members of the royal family.</p>

          <h4>7.4.1 	Parts of a Character:</h4>
          <p>Professional writer, Sol Stein
            <FootnoteRef text="Sol Stein, On Writing." />
            breaks characterization into a number of concepts:</p>

          <p><span className="font-bold">(1)	Personality </span></p>
          <p>This is an inclusive term which Stein says “...refers to the distinctive traits of an individual, a set of behaviors, attitudes, manners, and mannerisms that identify a person. Personality speaks of an individual’s makeup, nature, and combined traits, his essence. It means the specialness of a person, which in some may involve likability, power, charm, magnetism, and charisma. The constituent parts of personality are disposition, temperament, individuality, and eccentricity.”</p>

          <p className="text-sm mb-4 font-rubik"><span className="font-bold">(2)	Disposition </span></p>
          <p>This is a character’s “...attitude toward the people and places of the world, her customary response, particularly her emotional response. Disposition can involve a person’s qualities, outlook, mood, frame of mind, inclination, bent, bias, tendency, and direction, her proclivity, predilection, penchant, and propensity. Today, disposition is sometimes thought of as a predisposition, a mind-set.”</p>

          <p><span className="font-bold">(3)	Temperament </span></p>
          <p>This is a “...person’s manner of behaving, thinking, and particularly reacting to people and circumstances, his characteristic way of confronting a new day or a new development. Temperament can also be seen as a person’s mettle, spirit, leaning, or inclination. Temperament often connotes a negative tendency toward anger or irritability, though the term “even temperament,” of course, means the opposite.”</p>

          <p><span className="font-bold">(4)	Individuality </span></p>
          <p>This is “...the aggregate of qualities that distinguish one individual from others. It connotes that person’s distinctiveness, difference, and, most important, her originality and uniqueness. A writer describes a character’s singularity with the particulars of concrete detail. These are the characteristics by which an individual is recognized by others. Her differentness is her identity. It can be said that the individuality of a person marks her off, singles her out, sets her apart, and ultimately defines her.”</p>

          <p><span className="font-bold">(5)	Eccentricity </span></p>
          <p>This is “...an offbeat manner of behavior, dress, or speech that is peculiar to a person and greatly dissimilar to the same characteristics of most other people. We think of the eccentric person as odd, a card, perhaps somewhat kinky, a queer fish, a quirky individual different from the other people we know.”</p>

          <h4>7.4.2 	Four Sides of a Character</h4>
          <p>In a short story, it’s usually sufficient to show ‘one side’ of a character, e.g. his selfishness. In a novel, editors refer to the necessary ‘four sides’ of a character: these are four groups of traits: (1) general; (2) physical; (3) personal; and (4) emotional.</p>
          <p className="font-bold text-boldPurple">I.	General Traits</p>
          <p>These are traits formed by heredity and environment.</p>
          <p>You can further categorise general traits into:
            <FootnoteRef text="Storycraft: Complete Guide to Writing Narrative Nonfiction, Jack Hart." />
          </p>

          <p><span className="font-bold">(a)	Universal Traits: </span></p>
          <p>These are traits common to all humans. For instance, sex, age, anatomy, physiology, motor ability. You don’t necessarily have to list all these (such as anatomy) as they will be assumed normal. It’s only when a character does not have such a trait that you mention it, e.g. the character has one leg.</p>
          <p><span className="font-bold">(b)	Nationalistic traits </span></p>
          <p>Citizens of each nation may possess certain nationalistic and regional traits, as a result of geography, culture, language, history and psychology. However, if overused, these are at risk of creating an ethnic stereotype.</p>
          <p><span className="font-bold">(c)	Group traits </span></p>
          <p>These are traits arising from groupings such as profession, job, occupation, trade, skillset, club, membership, interest, hobby, etc. We associate religious ministers with a different set of traits than members of a criminal organization, or a big-business tycoons, for instance. These traits are also at risk of creating a stereotype.</p>

          <p className="font-bold text-boldPurple">II.	Physical Traits</p>
          <p>We associate certain physical characteristics with certain personality traits. A lean man with a crooked stance may seem untrustworthy. An attractive, charming woman may have many male lovers. A physically big man may be dominant and confident. These traits can too create a stereotype. Using physical contrasts can be more interesting and create conflict by creating misimpressions. For instance, in ‘Of Mice and Men,’<FootnoteRef text="Of Mice and Men, John Steinbeck." /> Lenny is a physically big man, but he is easily frightened, and defers to George about everything. The fact that he doesn’t appear to need a carer or minder is a source of conflict in the story.</p>

          <p className="font-bold text-boldPurple">III.	Personal Traits</p>
          <p>These are traits that allow us to distinguish characters from one another, and comprise certain social and ethical qualities. When you describe what ‘type’ of person a character is, these are the traits you list. For example, courage or timidity, selfishness or altruism, confidence or shyness, loyalty or duplicity, argumentativeness or passiveness, ambition or laziness, faithfulness or impulsivity.</p>
          <p>Don’t fall into the trap of placing personal traits on a binary, i.e. either a character is loyal, or they are duplicitous. People can act a variety of ways based on differing circumstances. Three characters may fall across a spectrum of ‘loyalty.’ Also, a loyal character may become disloyal, or vice versa.</p>
          <p>The key word here is ‘distinguish.’ Saying a character is ‘loyal’ doesn’t mean they will respond with loyalty in most or every situation/s. It means that, in the particular plot circumstance, the character happened to respond with loyalty, so that’s what we’re using to identify them. In differing circumstances with different incentives, they may behave differently.</p>

          <p className="font-bold text-boldPurple">IV.	Emotional Traits</p>
          <p>These are the feelings characters have in response to the world. Pain when they get hurt, anger when they are done injustice, fear when afraid, etc. You shouldn’t rely on describing your characters’ minds to convey emotional traits. Good dialogue and descriptions of characters’ behaviour should imply what they are feeling.</p>

          <h4>7.4.3 	Set Off traits (AKA Interior Foils)</h4>
          <p>Stein
            <FootnoteRef text="Sol Stein, On Writing." />
            provides the tip to contrast traits against each other, in order to emphasise one of those traits. To me, this sounds similar to creating foils (see below) except instead of the foils being separate characters, they are separate traits or details existing in one character.</p>
          <p>Stein’s example is a character who wields power over another (e.g. a moneylender) introduced with attention to vulnerable traits. For instance, the moneylender is in a wheelchair, or is going blind. This emphasizes the subsequent position of power they are in by advancing money to the protagonist.</p>
          <p>Stein says: “...when introducing a character who will be in a position of power in a scene, suggest that character’s vulnerability before the character exercises power. Conversely, when introducing a character who will be hurt emotionally or physically in the scene to come, show the character’s strength at the outset.”</p>
          <p>This is a matter of personal judgment. In some cases, showing a vulnerable character get emotionally hurt may be more suspenseful than a strong character, because it threatens the welfare of the vulnerable character more than a strong character; a character who is totally destroyed may be more interesting than a character who is hurt but later recovers.</p>
          <p>For instance, in Lord of the Flies,
            <FootnoteRef text="Lord of the Flies, William Golding." />
            the boys’ victimising the weaker ‘Piggy’ is more suspenseful than if they’d targeted the more cunning Ralph – who has a greater capacity to run, hide, or stand up for himself – because it raises a greater threat.</p>

          <h4>7.4.1.1	Direct and Indirect Characterisation</h4>
          <p>Hart distinguishes between direct and indirect characterization:
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            </p>
          <p className="font-bold text-boldPurple">I.	Direct characterisation</p>
          <p>This is where you simply describe character traits.</p>
          <p>Hart says: "the best modern fiction and nonfiction writers let a character’s visible persona speak for itself, the method [Janet] Burroway calls 'direct characterization.' They may occasionally comment on character. But mostly they choose to include details that lead readers to certain inevitable conclusions about the character they are describing."</p>

          <p className="font-bold text-boldPurple">I.	Indirect characterisation</p>
          <p>Direct characterization includes:</p>

          <p className="font-bold text-midBluey">(1).	Physical traits</p>
          <p>On physical appearance, "[t]oo many specifics," says Hart, "in fact, will disrupt the process. “Detailed descriptions tend to defeat their own purpose,” Wolfe said, “because they break up the face rather than create an image. Writers are much more likely to provide no more than a cartoon outline.”</p>

          <p className="font-bold text-midBluey">(2) Movements, Expressions and Mannerisms </p>
          <p>These should be brief, simple, non-instrusive and salient. The gesture should not override whatever else the character is saying/doing. "[S]ome gestures and mannerisms can reveal dimensions of character hidden by words," says Hart, but "[b]eginning writers often go wrong, as Macauley and Lanning<a href="#f5"><sup>5</sup></a>  point out, when they include insignificant actions just to break up background or dialogue. “Many cigarettes have been lighted,” they write, “many noses rubbed, many throats cleared in that endeavor.”</p>

          <p className="font-bold text-midBluey">(3) Status Indicators </p>
          <p>Characters reveal themselves by what they consume: food, cars, clothes, houses, furniture and accessories. Note also the state of goods: wealthy cars that are maintained compared to trashed; fine clothes that are clean or rumpled, expensive goods that are used or forever stored away.</p>
          <p>Far from being self-centred, materialism is a social activity, as Hart suggests: "We’re social animals, and we evolved—or not—depending on how well we could read our place in the pecking order of our isolated, constantly threatened band of hunter-gatherers." We use goods to identify others' status and group - "Do they outrank us, or we outrank them? What can we tell about what they think and behave based on what they wear, drive, or paint on their faces?"</p>

          <p>Hart provides an example by Tom Wolfe which captures "a bachelor farmer's empty life": "“He hadn’t dated in two years. His nightly dinner consisted of a hamburger patty, instant mashed potatoes, and green beans. His best friend was his black Labrador, Cole.”</p>

          <p className="font-bold text-midBluey">(4) Anecdotes </p>
          <p>When an anecdote is told about a character, it's like they briefly author their own story; the character's choice of recollection, the details they focus on, and the descriptions they use tell us about them (sometimes even more than the subject matter of the anecdote).</p>

          <h3 id="post-how-to-write-character">7.5: How to Write Character</h3>
          <p>You should aim to reveal your character through inference. This means simply describing the character (showing, rather than telling) should be the last resort. Here’s a list of techniques used to reveal character through inference:</p>

          <h4>7.5.1 	Conflict</h4>
          <p>Putting a character into conflict reveals character. In real life, people keep up veneers, but when they are under stress, they show their true nature. You can generate conflict by putting characters into uncomfortable situations or forcing difficult decisions upon them, or throwing obstacles in front of them, or raising the stakes, or in general taking as long as possible to give them what they want. Conflict should increase through the course of the story, revealing more and more of the true character.</p>

          <h4>7.5.2 	In Response to Action</h4>
          <p>Don’t describe characters’ in a vacuum. Any time you say something about a character, it should be in response to an event that has happened. Something plot-related happens, and the character reacts in a way that tells you something about them.</p>
          <p>If someone asked you, “What would you do if your house was burning down?” you want to say, “I would run out.” But what you actually do in that circumstance might be different from what you say you would do. This is no less true of the narrator – why should be believe their claim that the protagonist would be the first out of a burning building? We need to see the action and judge for ourselves.</p>
          <p>But see below.</p>

          <h4>7.5.3 	Self-realisation </h4>
          <p>There is a caveat to the above. You can describe a character’s trait in absence of action if the trait is a belief held about the character, which is subsequently shown to be mistaken. You can’t prove this trait with prior action because it’s not true. Instead, the action comes subsequent, and disproves the trait (thereby revealing true character). </p>
          <p>For instance, a character who believes they are courageous is proved to be cowardly, or a character who doesn’t believe in themselves is proved to be capable.</p>

          <h4>7.5.4 	Motivation  </h4>
          <p>A character’s plot motivation, and motivated action reveals character. It reveals what the character values, and how much they value it. It also reveals intelligence, resourcefulness, endurance of suffering, determination, morals, cooperativeness, status, etc. </p>

          <h4>7.5.5 	Choice </h4>
          <p>Giving a character a choice reveals character, namely what the character values. There are different kinds of choices: </p>
          <ol>
            <li>A choice of the lesser evil, between bad outcomes; </li>
            <li>A choice of the greater good, between good outcomes; </li>
            <li>Between neutral things, a choice of the character’s personal preference; </li>
            <li>Between neutral things, a choice of the character’s rational preference; </li>
            <li>Having the good now, and the bad later, or vice versa; </li>
            <li>A choice of quantity or quality; </li>
            <li>A moral choice; </li>
            <li>A choice between an outcome that affects the protagonist or someone else; </li>
            <li>A choice between outcomes that affect other people;</li>
            <li>A choice between outcomes the character doesn’t fully understand;  </li>
            <li>A choice with an unknown outcome.    </li>
          </ol>

          <p className="font-bold text-boldPurple">I. Weighted Choices</p>
          <p>To be more effective, choices should be difficult, and cost the character something. Choices should be ‘weighted,’ meaning there is some tangible consequence for choosing; one window opens but another closes. Don’t cheat the reader out of this consequence; once closed, the window or opportunity should remain closed for good.  </p>

          <p className="font-bold text-boldPurple">II. Nested Choices</p>
          <p>To create a sense of progression, some ‘sub-choices’ may open once initial choices have been made. Choices are live issues so you want to keep them running. For instance, upon choosing between two opposing teams, protagonist must then choose a role to play within the team.  </p>
          <p>Once a bad choice has been made, don’t try to cycle a regretful protagonist back in an attempt to remake the original choice for the better. Your story has got to keep moving forward and your protagonist must be presented with new circumstances and new choices in their goal of improving their situation.  </p>

          <p className="font-bold text-boldPurple">III. Symbolic Choices</p>
          <p>Although choice consequences must be ‘tangible,’ not all choices should be ‘life or death.’ Some choices may be relatively superficial. One example is the choice of School House (or preference influence) in Harry Potter.
            <FootnoteRef text="The Harry Potter series, J. K. Rowling." />
            This choice is more symbolic for the protagonist; telling us something about him rather than opening or closing doors down the track.  </p>

          <p className="font-bold text-boldPurple">IV. Genuine Choice</p>
          <p>In a technical sense, stories don’t offer choices – you decide what happens in advance – and readers understand this. But it’s critical that you convince the reader there is a genuine choice and give them the illusion of a choice. Don’t have the protagonist make their choice before the reader even understands there is one to be made. You must offer the protagonist alternatives, suggest or demonstrate the consequences of each option, tempt the protagonist with each one, and show the protagonist agonising over the choice. Further, don’t cheat the protagonist out of making the choice; don’t have a third party or outside circumstance intervene to make the choice for the protagonist. Once the protagonist has made their choice, don’t cheat them out of the consequence. For instance, if they make a choice which results in a death, don’t bring the deceased back to life at the end of the story.  </p>

          <h4>7.5.6 	Reaction </h4>
          <p>Characters should have an immediate physical reaction for everything that happens to them. Show your character’s reaction through behaviour (not thought or feeling). The reader can infer your character’s thought or feeling by their behaviour.</p>
          <p>This rule also goes the other way: if your character has a reaction, there must be a prior, physical cause for it. A character can’t just suddenly get up and decide to confront their boss; something must set it off – and not a thought or feeling or memory; but a physical action.</p>

          <h3 id="post-incentivizing">7.6: Incentivizing</h3>
          <p>You may give your character a personality or set of traits which seems inconsistent with the way your plot needs them to act. This is not a problem or an obstacle. You hear a lot of criticism about characters acting ‘out of character’, when they do something strange. It’s not a question of acting ‘out of character’; in real life when someone acts ‘out of character’ it creates a mystery and makes that person more interesting. This doesn’t mean you can make your characters act however you want without justification. It’s an issue of incentivizing, i.e. using the carrot or the whip.  A character who ‘acts out of character’ is merely a character who has not been appropriately incentivised to act. If you want your character to do something odd, you have to use a bigger whip or carrot – this requires being in tune with your character’s hopes and fears. If a person is under an incredible amount of pressure, it’s not ‘out of character’ for them to react bizarrely. </p>

          <h3 id="post-maximum-capacity">7.7: Maximum Capacity</h3>
          <p>As a basic rule, Frey
            <FootnoteRef text="James Frey, How to Write a Damn Good Novel Part 1." />
            says characters must always be acting at ‘maximum capacity.’ This means your protagonist’s action must always be moving toward their plot relevant goals. Your character doesn’t get a ‘day off’ from the plot. If you want to slow down your protagonist’s progression, you need to create obstacles. These can be external or internal. By ‘internal’ I don’t mean ‘change of mind’ or ‘indecision’, I mean personal demons or flaws.</p>
          <p>This also doesn’t mean your character must be one-track, and can’t be overwhelmed with multiple different possible options. The distinction is; your character cannot be torn between two options, one they want with 25% certainty, and another they want with 28% certainty. They can’t be ambivalent, in other words. If your character is overwhelmed with options, they must want, with certainty, all of those options with 100% certainty (but only may select one).</p>
          <p>As Frey says, “If the character agonizes, so much the better.”</p>

          <h3 id="post-the-foil">7.8: The Foil</h3>
          <p>A ‘foil’ is a character who diametrically opposes another character – whether in traits, ideas, actions, background, etc. The opposition is designed to highlight certain traits in a character (usually the protagonist). Foils may generate conflict. It should be emphasized that foils are not necessarily enemies – they could be family, friends, lovers, colleagues, mentor/protégé, etc. They may not even agree on what kind of relationship they are in (e.g. see Hill House example below) . The more unusual the foil pairing, the more conflict. Foil relations are far more flexible, varied and creative than the protagonist/antagonist or hero/villain dynamic, and they are morally neutral. Merely that the characters disagree over an issue does not create a foil relationship. </p>
          <h4>7.8.1 	Types of Foils</h4>
          <p>Don’t be restricted to a foil who is the opposite of your protagonist (or other character). The less obvious or simple the dynamic between foils, the more interesting they will be. Here are some examples I’ve made up:</p>

          <p className="font-bold text-boldPurple">(I)	Canon</p>
          <p>This is where you have identical character arcs but each is delayed. For instance character 1 goes off on an adventure. At the start of Act II, character 2 finds out that character 1 has gone, and goes off to follow them.</p>
          <p>You don’t have to show both characters equally (e.g. you might only write from one character’s perspective), whilst knowing, in the background, what the other character is doing.</p>

          <p className="font-bold text-boldPurple">(II)	Fugue/Variations on a Theme</p>
          <p>This is where you have a Canon foil, but aspects of the second or other character/s’ arcs are slightly different.</p>
          <p>You can see this in Tolkien’s Two Towers (of the Lord of the Rings series), when the members of the Fellowship of the Ring get separated, and different members go off in search of each other (and reach places other characters have already been). By the time characters reach these places, events have changed and moved on since.</p>
          <p>To prevent duplicating plot points, you may want to, either make:</p>

          <ol>
            <li>Consequences of character 1’s actions drastically change events for when character 2 arrives; or</li>
            <li>Passage of a lengthy period of time naturally alter situation between character 1 and 2’s arrival; or</li>
            <li>Omit character 1’s journey, suggesting character 1’s passage by character 2’s observations and enquiries; </li>
            <li>Omit character 2’s journey, suggesting either:</li>
            <ol>
              <li>Character 2 is doomed to repeat character 1’s actions; or</li>
              <li>There is a hope character 2 will not make the same mistake character 1 made </li>
            </ol>
          </ol>

          <p className="font-bold text-boldPurple">(III)	Crab Canon Foil</p>
          <p>This is where you have character arcs which are reversed or inverted. The inciting incident for one character looks like the climax for another and vice versa. Obviously the climax is the climax for both characters (otherwise you're suggesting that time is running backwards for one of them) but how it appears to one character resembles the inciting incident for the other. You can make this simple (2 inverted events) or as complicated as you want (several, chainlinked, inverted events).</p>
          <p>For instance, character 1 loses a loved one in an accident, which character 2 witnesses and becomes traumatised by it. At the climax, character 2 loses a loved one in an accident which character 1 witnesses and becomes traumatised by it.</p>
          <p>Another example: at the start, character 1 falls in love with character 2. By the end of the story, character 1 has fallen out of love with character 2 (from lack of reciprocity) but now character 2 has finally fallen in love with character 1.</p>

          <h3 id="post-the-rpa-method">7.9: The RPA Method</h3>
          <p>When people create characters, they often start with a real life person, whose personality they attempt to insert wholesale into their novel. The problem with this is the risk the character's personality not being appropriate for the plot.</p>
          <p>A better way of creating characters is my 'RPA' method. This creates characters the opposite way; figuring out personality before considering a real life person. This method emphasizes identifying ‘role’ at an early stage so that characters are only created out of necessity:</p>
          <p><span className="font-bold">(1) Role:</span>Consider what function your character has; they may be: - an obstacle; - an ally; - a foil; - in support of the theme; - in opposition of the theme; etc. You may have worked out all the possible roles in your story just by knowing the genre - e.g. in a fantasy, you might have a hero, a villain, a love interest, a mentor, a loyal friend, a rival, etc.</p>
          <p><span className="font-bold">(1) Personality: </span>Now that you have a role, you should consider the kind of the personality that would be a good fit. The personality may make the role-player unusual (e.g. a cowardly hero), or commonplace, but should raise interest somehow. There ideally should be a sense of conflict in relation to another character (or the same character) raised by the chosen personality. As an example, think of Harry and Hermione in the HP series. Harry's role is the hero, while Hermione's is the sidekick, however Hermione's personality includes being generally an intelligent and proficient spellcaster than Harry, which raises an unusual dynamic and potential for conflict.</p>
          <p><span className="font-bold">(1) Avatar:</span>Now your character has a role and a personality, you need to write them as if they were a real person. You can try your hand at that, but it'll be easier if you use a real person you actually know as a template, on which your character is overlaid. In particular, this will make your character's dialogue sound more unique and natural and befitting, and it will minimise the temptation of writing yourself into the character, in default of one.</p>

          <h3 id="post-the-trivia-model">7.10: The Trivia Model</h3>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p>Ultimately, the purpose of character is to drive story. Any detail of appearance, any anecdote or personal possession, no matter how intrinsically interesting, is a distraction if it fails to move the story forward.</p>
            <p>— Jack Hart
              <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
            </p>
          </div>

          <p>The advice on character creation is: know your characters intimately. The problem is where writers misinterpret this advice to mean: know your characters extensively. 100 trivial facts all across your character’s life is no substitute for knowing only your character’s darkest secret.</p>
          <p>Yet, I’ve come upon writing advice instructing to answer a list of about 50 trivial questions for your proposed character, e.g. what is their favourite food? What is their favourite memory? Etc. </p>
          <p>This is terrible advice. Are you writing a character or a game of trivial pursuit? Just a number of problems with this model:</p>

          <p>(1)	That amount of detail is a waste of time and too abstract to generate much you will actually use; </p>
          <p>(2)	Characters are written instruments to create conflict, providing help or hindrance to the protagonist’s goals, or creating obstacles. They are not self-contained, individual encyclopedic hubs of mindless data; </p>
          <p>(3)	Overly idealistic, not practical – disregards the actual practice of writing characters: write actions first, justify actions with incentives later, fill in depth and detail even later than that. Details and trivia should come last, not first. </p>
          <p>(4)	Disregards actual real life experience meeting people; people are memorable by their involvement/actions/influence in your life, not by the volume of trivia they tell you about themselves; </p>
          <p>(5)	Worry about the actual reactions your character will or could have in the actual events in your story – justify their actions later; </p>
          <p>(6)	You will attempt to justify time spent creating all those BS details by cramming them here, there, and everywhere in your book; </p>
          <p>(7)	The trivia model is unrealistically completionistic, which hampers your ability to write your character now, and on bare essential details; </p>
          <p>(8)	You (very likely) may alter your character somewhere down the track in the writing or editing process. This may necessitate rewriting the ‘trivia’ – or worse, not realising it contradicts your character. Save yourself the time and effort and ditch the model in the first instance; </p>
          <p>(9)	People change, thus the ‘trivia’ about them changes too. Their memories change. Their likes and dislikes change. Their views and beliefs develop and change. The man may be the stranger of the child, and all that. Yes, characters are not real people, but the art should reasonably try to imitate life. The trivia model paints a static, impotent design for character. </p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p>There is a novelist called Thomas Williams,  who's passed on now, and he said that the idea for a novel is like a little tiny fire in a dark night. And, one by one, the characters come and stand around it and warm their hands […] They stand around the fire. And little by little, the fire grows. And you see them more clearly. And that's the novel.</p>
            <p>— Stephen King
              <FootnoteRef text="PBS News Hour (2016, Oct 6), Stephen King wants to reach out and grab you — with his writing. Retrieved from 'https://www.pbs.org/newshour/show/stephen-king-wants-reach-grab-writing'." />
            </p>
          </div>

          <p>I tend to think that each character carries a log, which they put on the fire, which gradually grows bigger, making the light stronger. You get glimpses of people; faces, mannerisms, actions, etc. It’s not until the last person has put in their log that you get enough light to see everyone fully, and how they interact with everyone else. </p>

          <h4>7.10.1 	Sock Puppet</h4>
          <p>The reason why the trivia model is a waste of time is because your character only needs depth where it matters to the plot.</p>
          <p>Mittelmark and Newman
            <FootnoteRef text="Howard Mittelmark and Sandra Newman, How NOT to Write a Novel." />
            say that, if the plot does not concern the workplace, the character doesn't have to go to work. If it doesn't centre on a love affair, the character is celibate. The character's age, class and ethnicity are a matter of guesswork.</p>
          <p>In those areas the plot isn’t interested in, your character is a ‘sock puppet.’</p>

          <h4>7.10.2 	Scenario Brainstorming</h4>
          <p>There is one kind of trivia that is useful for character creation; even if you don’t use the information you generate. That is the hypothetical. This is not ‘your character is late for work, what do they do?’ – Your scenarios should promote conflict, exposure to danger, temptation, etc. In short, putting your character in a ‘pressure cooker’.</p>
          <p>For example:</p>
          <ol>
            <li>Your character comes upon an abandoned bag containing $100,000 – what do they do?</li>
            <li>Your character learns their partner is cheating on them – what do they do?</li>
            <li>A masked man jumps in the passenger seat of your character’s car, holds a gun to their head, and demands they drive somewhere deserted – what does your character do?</li>
            <li>Your character’s house is on fire and they can only save one thing – what is it?</li>
            <li>Your character’s dream guy/girl walks into their life – describe this dream person;</li>
          </ol>

          <p>If people are not under pressure, they put up appearances. If you want to reveal a secret truthful nature to your character – their ‘Character,’ so to speak – you must put them under pressure. When people are under pressure, you find out who they really are.</p>

          <p>You may also try using this method at the front end of character creation, i.e. to create the character, rather than ‘test’ or develop them. This may be artificial; you decide what answer you want for each scenario, and design your character around those answers. It’s not necessarily fatal to character if your answers are inconsistent, this may actually give birth to an interesting conflict resolving the issue. </p>
          <p>For instance, let’s say your answers to hypothetical (5) is a person with a tendency to cheat (e.g. someone very difficult to satisfy or tie down in a relationship), but your answer to (2) is that your character is furious and feels categorically betrayed. This makes your character seem a little gullible or too trusting.</p>
          <p>You can try to weave a story around this to resolve it: your character is too trusting at the beginning, but toughens up after heartbreak. Or, the dream person gives your character some personal reassurance that they’ve changed, only to revert back to cheating. Etc. </p>

          <h3 id="post-character-vs-characterization">7.11: Character vs Characterization</h3>
          <p>Robert McKee
            <FootnoteRef text="Robert McKee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            distinguishes ‘Characterisation’ and ‘Character.’ The former is the sum of your character, while the latter is the heart/truth of your character.</p>
          <p>Characterisation comprises all the observable qualities of a person: age and IQ; sex and sexuality; style of speech and gesture; choices of home, car, and dress; education and occupation; personality and neuroticism; values and attitudes…etc. This concept is akin to the ‘trivia model.’</p>
          <p>The singular assemblage of this combination of facts makes up your individual character. However, it doesn’t provide ‘character.’</p>
          <p>‘Character’ (adjective) “is revealed in the choices a human being makes under pressure—the greater the pressure, the deeper the revelation, the truer the choice to the character's essential nature.” This concept is related to the idea of ‘incentives’ – but where incentives go into what causes your character to make one choice as opposed to another, ‘Character’ is the label you give someone based on their choices, e.g. loving or cruel? Generous or selfish? Strong or weak? Truthful or a liar? Courageous or cowardly? Thus, a character is as a character does.</p>

          <h4>7.11.1 	How to reveal the truth about characters</h4>
          <p>If people are not under pressure, they put up appearances. If you want to reveal a secret truthful nature to your character – their ‘Character,’ so to speak – you must put them under pressure. When people are under pressure, you find out who they really are.</p>

          <h4>7.11.2 	Character Inverts Action</h4>
          <p>McKee states that Character and Action should have an inverse relationship in your story. In other words, the more action in your story, the less complex character should be, and vice versa. This is because character complexity distracts the reader from the acts of daring heroism – apparently?</p>
          <p><span className="underline">Caveat:</span> I would take this tip with a grain of salt: Firstly, because this tip applied to screenwriting he was talking about movies, specifically, not literature. In a film, character is usually developed through exchanges of dialogue (words), so it necessitates slowing down the pace. But in literature, everything is words, so it’s less of a problem. Secondly, it’s broad; the action genre doesn’t need extra mandate to be dumb. Alexandre Dumas seemed to do pretty well juggling gripping action set pieces with complex characters. </p>

          <h3 id="post-the-animal-vegetable-or-object-method">7.12: The 'Animal, Vegetable, or Object' Method</h3>
          <p>A cheat way to create a character -- physical appearance, personality and arc/role -- is to make them embody an object, force of nature or animal. The stranger or more innocuous, the better. </p>
          <p>For example, a very skinny, red-haired character dressed in all black, calling to mind a matchstick. This is a highly evocative image, suggesting the character was emotionally/figuratively 'on fire' previously, or has a tendency to catch 'on fire' in the right circumstances. Alternatively, it could evoke a person who has lived a frequently charged and excited life, but are now ‘burnt out’. To create more intrigue the character may initially act in contradiction of the metaphor (e.g. matchstick person is passive, composed, cool and acquiescent) and only later as plot events unfold does their 'true nature' begin to reveal itself.</p>
          <p>Ideally, you will fill in gaps about the character as you go, allowing you to make departures from the metaphor and making your character feel more like a living person than a walking metaphor.</p>


          <h3 id="post-murrays-psychological-needs">7.13: Murray's Psychological Needs</h3>
          <p>Henry Murray formulated categories of psychological needs which people spend their lifetimes pursuing.  These may be useful in character creation, worth considering in giving characters motivation and values.</p>
          <p>Note each need has various expressions. This allows multiple characters to have the same need, without redundancy. One character may strive for dominance over others, another character may strive for dominance over themselves. </p>
          <p><span className="font-bold">Abasement</span></p>
          <ol>
            <li>The need to submit passively to external force; </li>
            <li>to accept injury, blame, criticism, punishment; </li>
            <li>to surrender, to become resigned to fate; </li>
            <li>to admit inferiority, error, wrongdoing, or defeat; </li>
            <li>to confess and atone; </li>
            <li>to blame, belittle, or mutilate the self; </li>
            <li>to seek and enjoy pain, punishment, illness, and misfortune</li>
          </ol>

          <p><span className="font-bold">Achievement</span></p>
          <ol>
            <li>The need to accomplish something difficult </li>
            <li>To master, manipulate, or organize physical objects, human beings, or ideas </li>
            <li>To do this as rapidly and independently as possible </li>
            <li>To overcome obstacles and attain a high standard </li>
            <li>To excel oneself </li>
            <li>To rival and surpass others </li>
            <li>To increase self-regard by the successful exercise of talent</li>
          </ol>

          <p><span className="font-bold">Affiliation</span></p>
          <ol>
            <li>The need to draw near and enjoyably cooperate or reciprocate with an allied person (who likes the person); </li>
            <li>To please and win affection of the admired person; </li>
            <li>To adhere and remain loyal to a friend</li>
          </ol>

          <p><span className="font-bold">Aggression</span></p>
          <ol>
            <li>The need to overcome opposition </li>
            <li>To fight, attack, or injure </li>
            <li>To oppose forcefully or injure another </li>
            <li>To belittle, censure, ridicule, slander </li>
            <li>To be angry and rageful, combative, belligerent </li>
          </ol>

          <p><span className="font-bold">Autonomy</span></p>
          <ol>
            <li>The need to get free, shake off restraint, break out of social confinement </li>
            <li>To resist coercion and constriction </li>
            <li>To avoid or quit activities prescribed by domineering authorities </li>
            <li>To be independent and free and act according to desire </li>
            <li>To defy convention </li>
          </ol>

          <p><span className="font-bold">Counteraction</span></p>
          <ol>
            <li>The need to master or make up for failure by restriving </li>
            <li>To obliterate a past humiliation by resumed action </li>
            <li>To repress fear </li>
            <li>To effect a dishonor by action </li>
            <li>To seek obstacles and difficulties to overcome </li>
            <li>To maintain self-respect and pride on a high level </li>
          </ol>

          <p><span className="font-bold">Defendance</span></p>
          <ol>
            <li>The need to defend the self against assault, criticism, blame </li>
            <li>To conceal or justify a misdeed, failure or humiliation </li>
            <li>To vindicate the ego </li>
          </ol>

          <p><span className="font-bold">Deference</span></p>
          <ol>
            <li>The need to admire and support a superior </li>
            <li>To praise, honor, or eulogize another </li>
            <li>To yield eagerly to the influence of an allied other </li>
            <li>To emulate an exemplar </li>
            <li>To conform to custom </li>
          </ol>

          <p><span className="font-bold">Dominance</span></p>
          <ol>
            <li>The need to control one’s human environment </li>
            <li>To influence or direct the behaviour of others by suggestion, seduction, persuasion, or command </li>
            <li>To dissuade, restrain, or prohibit </li>
          </ol>

          <p><span className="font-bold">Exhibition</span></p>
          <ol>
            <li>The need to make an impression </li>
            <li>To be seen and heard </li>
            <li>To excite, amaze, fascinate, entertain, shock, intrigue, amuse, or entice others </li>
          </ol>

          <p><span className="font-bold">Harm-avoidance</span></p>
          <ol>
            <li>The need to avoid pain, physical injury, illness, and death </li>
            <li>To escape from a dangerous situation </li>
            <li>To take reasonable precautionary measures </li>
          </ol>

          <p><span className="font-bold">Inviolacy</span></p>
          <ol>
            <li>The need to protect the self </li>
            <li>To remain separate </li>
            <li>To resist attempts by others to intrude on or invade one’s own psychological space </li>
            <li>To maintain a distance or separateness </li>
            <li>To be isolated, immune from criticism</li>
          </ol>

          <p><span className="font-bold">Nurturance</span></p>
          <ol>
            <li>The need to give sympathy and gratify the needs of another person, especially someone who is weak, disabled, tired, inexperienced, infirm, defeated, lonely, humiliated, rejected, sick, mentally confused, </li>
            <li>To feed, help, support, console, protect, comfort, nurse, or heal </li>
            <li>To nurture </li>
          </ol>

          <p><span className="font-bold">Order</span></p>
          <ol>
            <li>The need to put things or ideas in order </li>
            <li>To arrange, organize, balance, tidy and work for precision among things in the outer world or ideas in the inner world </li>
          </ol>

          <p><span className="font-bold">Play</span></p>
          <ol>
            <li>The need to act for ‘fun’ without further purpose</li>
            <li>To laugh and make jokes</li>
            <li>To have relaxation of stress</li>
            <li>To participate in pleasurable activities for their own sake</li>
          </ol>

          <p><span className="font-bold">Rejection</span></p>
          <ol>
            <li>The need to separate oneself from negatively viewed persons</li>
            <li>To exclude, abandon, expel, or remain indifferent to an inferior person</li>
            <li>To snub or jilt another</li>
          </ol>

          <p><span className="font-bold">Sentience</span></p>
          <ol>
            <li>The need to seek sensuous experience</li>
            <li>To give an important place to the creature comforts of taste and touch and other senses</li>
            <li>To enjoy good food, drink, material goods and luxuries</li>
          </ol>

          <p><span className="font-bold">Shame-Avoidance</span></p>
          <ol>
            <li>The need to avoid humiliation and embarrassment</li>
            <li>To avoid conditions that lead to scorn, derision, or indifference of others</li>
            <li>To refrain from action because of fear of failure</li>
          </ol>

          <p><span className="font-bold">Succorance</span></p>
          <ol>
            <li>The need to receive support, help, and love</li>
            <li>To have one’s needs gratified by the sympathetic aid of another person</li>
            <li>To be nursed, supported, sustained, protected, loved, guided, indulged, forgiven, consoled, taken care of</li>
          </ol>

          <p><span className="font-bold">Understanding</span></p>
          <ol>
            <li>The need to ask and answer questions</li>
            <li>To speculate, formulate, analyze, generalize, theorize, and philosophize</li>
            <li>To want to know the answers to questions</li>
            <li>To be curious</li>
          </ol>

          <h4>7.13.1 	Character ‘Death’</h4>
          <p>In his study on suicide, Edwin Shneidman says:
            <FootnoteRef text="Edwin Shneidman, The Suicidal Mind." />
            "For practical purposes, most suicides tend to fall into one of five clusters of psychological needs. They reflect different kinds of psychological pain.”</p>
          <p>These are:</p>
          <ol>
            <li>Thwarted love, acceptance, and belonging--related to frustrated needs for succorance and affiliation</li>
            <li>Fractured control, predictability, and arrangement--related to frustrated needs for achievement, autonomy, order, and understanding</li>
            <li>Assaulted self-image and the avoidance of shame, defeat, humiliation, and disgrace--related to frustrated needs for affiliation, defendance, and shame-avoidance</li>
            <li>Ruptured key relationships and the attendant grief and bereftness—related to frustrated needs for affiliation and nurturance</li>
            <li>Excessive anger, rage, and hostility--related to frustrated needs for dominance, aggression, and counteraction</li>
          </ol>

          <p>As an unwritten rule, suicides make bad – ineffective – protagonists.  However, you can adapt these categories for a protagonist (or antagonist) who suffers a metaphorical ‘death’ – e.g. a social death, a psychological death, a financial death, a relational death – or loss of other thing which gives the protagonist’s life meaning (remember Blake Snyder’s ‘Stasis = Death’ concept). The above categories are great anchors for motivating protagonist or antagonist, creating a turning point or ‘rock bottom’ pushing your character into action, or change.</p>

          <h3 id="post-poignant-character-building">7.14: Poignant Character-Building</h3>

          <h3 id="post-introducing-your-character">7.15: Introducing Your Character</h3>
          <p>The first time one of your main characters is introduced is important not accidental. </p>
          <p>Once you have created your characters, you may be tempted to introduce them by having them sit around talking about themselves, their interests and aspirations, the way people get to know each other in real life. Avoid this; the way you introduce characters is to basically throw them into the story based on their reason for existence, possibly through a ‘Microcosmic’ scene.</p>

          <h3 id="post-the-law-of-conservatism">7.16: The Law of Conservatism</h3>
          <p>In real life, McKee
            <FootnoteRef text="Robert McKee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            states people are conservative (I use my own term ‘economic’) – that is, they go for the easiest option unless incentivized to do something more difficult.   </p>
          <p>The problem is, characters who behave like this in a story are boring. You need to keep throwing up incentives to push your characters to behave more progressively, unexpectedly, or desperately. Your characters shouldn’t just be surprising the reader, they should be surprising themselves.</p>

          <h3 id="post-return-to-the-status-quo">7.17: Return to the Status Quo</h3>
          <p>Where the law of conservatism relates to characters, the law of status quo relates to events and consequences. The general idea with both is that unless something weird happens, people and events should carry on normally, i.e. you should avoid situations and characters which are weird by default. Weirdness by design alienates most people.</p>
          <p>But because stories need to be interesting, you need to write in weirdness. The point of these laws (conservatism and status quo) is to require you to depart from normalcy only when weirdness has a good reason or excuse to exist.</p>
          <p>In a practical sense, if characters and events are weird, it can generate unintended reader responses. If a character dies unexpectedly and the other characters don’t appear to grieve, the reader will wonder why – are the other characters psychopaths? Did they really care? If the police do not investigate the death, the reader may wonder, are the police in on a conspiracy?</p>
          <p>The status quo is the normal state of affairs. It’s the state of affairs the reader expects by default. Any shift from it should be justified, otherwise you risk alienating your reader’s expectations. </p>
          <p>If your world has built in status quo ‘pressures’ acting on your character’s actions, your character’s plight is going to be more relatable and realistic. Any time a major event happens, those pressures need to work to counteract that change, even if those pressures are ultimately unsuccessful. The pressures might even be absent or totally ineffectual – but you need to have a really good reason why that is so. You can think of a proportional relationship between the change and the strength of the pressures, as well as between the change and the persuasiveness of the reason your pressures have failed. So, as a general rule, the bigger your change, the better your reason needs to be for the pressures failing.</p>
          <p>Here are some examples:</p>
          <p>Character has done something wrong, or hurt someone:</p>

          <ol>
            <li>The pressure should be on them to apologise or otherwise make amends;</li>
          </ol>

          <p>Protagonist has a secret: </p>

          <ol>
            <li>the pressure is for it to be revealed or discovered;</li>
            <ol>
              <li>Character/s are hinted to know the secret;</li>
              <li>Scenes tease characters finding out;</li>
              <li>Unknown character anonymously communicates to protag he/she knows the secret and consequences will arise in future</li>
            </ol>
          </ol>

          <p>Character has killed someone (a form of ‘protag has a secret’):</p>

          <ol>
            <li>Pressure should be on the police to discover who it is;</li>
          </ol>
          <p>Character has a crush on someone (a form of ‘protag has a secret’):</p>
          <ol>
            <li>Pressure should be on the subject of the crush to find this out;</li>
          </ol>

          <h4>7.14.1 	How to Deviate from Status Quo</h4>
          <p>Problem: What my character would realistically do in a situation (the ‘status quo’), versus what the plot needs them to do, are two very different things...how can I reconcile this?</p>
          <p>Answer: The status quo, or law of conservativism, is a baseline and at some point in your story (usually, at least, at the inciting incident) you need to deviate from it to make interesting and surprising things happen. So every writer is going to need to know how to shift from status quo at some point, and ideally, continue to do this throughout the plot.</p>
          <p>You have to create a motivation that incentivizes against or is greater than the impulse to conform to the status quo.</p>

          <h3 id="post-its-happened-before-itll-happen-again">7.18: It's Happened Before, It'll Happen Again</h3>
          <p>Let’s say you want to show that a character is anticipating a particular outcome, which motivates their present day behaviour. You could just ‘tell’ the reader what it is. But it’s better if you ‘show’. It also comes off as more realistic; in real life a lot of people don’t really have ‘contingency plans’ in order for the future. </p>
          <p>One thing you can do is to show the future outcome has happened in the past, and played out a certain way. </p>
          <p>This happens several times in Pet Sematary. For instance, the protagonist, Louis, is concerned his daughter, Ellie, is going to take death badly (e.g. death of the cat, or her brother). A lot of his subsequent movements are motivated by preventing her from confronting death. The story never explicitly says exactly what outcome he fears – that it’ll psychologically harm her for a while, or psychological disable her permanently? Etc. Instead, we get told the mother’s childhood trauma of the death of her sibling. This suggests Louis is afraid that the same thing will happen all over again; that if Ellie’s brother dies, she will suffer the same trauma and psychological disablement.</p>
          <p>Another example is when Jud Crandall takes the family to visit the Pet Sematary;<FootnoteRef text="Pet Sematary, Stephen King." /> Louis carrying baby Gage in a Gerry pack baby carrier. This eerily reflects his carrying deceased Gage to the Micmac burial ground later, but also, this understatedly functions to make that second trip psychologically easier on Louis and the reader, as if he’s done the trip with Gage once, he can do it again. </p>
          <p>This technique is also a good way of avoiding contravening the ‘People avoid Jinxing’ rule.</p>

          <h3 id="post-better-never-than-late">7.19: Better Never Than Late</h3>
          <p>As a rough rule, main characters should not be introduced past the first third of a novel. There are exceptions -- one is where you've acknowledged a character early on, even if you don't show them.</p>
          <p>Example: In 'Sphere',
            <FootnoteRef text="Sphere, Michael Crichton." />
            the main character explores an alien spacecraft with his team members. All of these characters are main characters, because of their direct contact/engagement with the subject matter of the story, therefore they need to be introduced early on. However, Crichton instead introduces (i.e. gives them a couple of lines of dialogue about themselves) all but one of the team members -- the last one is seen by the main character and his name acknowledged. This creates a sense we look forward to being reintroduced to this character later, and this allows Crichton to delay the introduction.  </p>

          <h3 id="post-depth">7.20: Depth</h3>
          <p>Bad characterization lacks depth. However, don’t confuse shallow characterization with paucity of detail (as empty vessels can make a racket). The question is: are you divulging the right detail? You should not reveal anything but the right detail, and leave everything else a mystery.</p>
          <p>Depth of character is not defined by the volume of information you know (look how detailed this character’s history is, they have so much depth!), it’s defined by the volume of information you don’t know.</p>
          <p>Just because you spend a lot of time with the main character/s doesn’t mean you have to know everything about them (one of the reasons I denounce the ‘Trivia Model’ of characterization, above).</p>
          <p>Deep characters have unwritten elements. They are more than they seem. The shallow character is an open book.</p>
          <p>Examples of how you can create Depth:</p>

          <p><span className="underline">Duality:</span></p>
          <ol>
            <li>A character acts one way in certain circumstances (or in the presence of certain people) and very different elsewhere (or amongst other people);</li>
            <li>A character is balancing two/multiple different contradictory aspects of their life;</li>
          </ol>
          <p><u>Secrets: </u></p>
          <ol>
            <li>A character is hiding things, even from the reader;</li>
          </ol>

          <h3 id="post-multi-dimensionality">7.21: Multi-Dimensionality</h3>
          <p>A lot of lip service is paid to ‘multi-dimensional’ characters, compared to ‘one or two dimensional’ characters. But what does this mean?</p>
          <p>As with depth (above) you do not make a character more dimensional by supplying more and more information about them.</p>
          <p>McKee
            <FootnoteRef text="Robert McKee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            says that the dimensionality of characters refers to contradiction. No one is wholly consistent. We experience cognitive dissonance. We pursue goals which, at the same time, make us feel guilty. We engage in relationships with people knowing they hurt us. We defy people’s expectations of us. We act one way in one situation, and another way in another.   </p>

          <h3 id="post-raising-the-stakes">7.22: Raising the Stakes</h3>
          <p>Characters must risk something in order to gain. You must ask what your character stands to lose if they don’t triumph at the end – what is the worst thing that will happen if your protagonist doesn’t get what they want at the end? If the answer is ‘nothing’, (i.e. life would go back to normal) your story needs work. </p>
          <p>It doesn’t matter if your answer of ‘nothing’ is qualified by the fact the character’s situation was bad from the start, it doesn’t excuse a lack of risk. You still have a character who has nothing to lose. The prospect of a lack of change to an existing situation is not riveting or motivational, because it implies the worst has already happened.  </p>
          <p>High risk makes a more compelling story, but – based on economic principles – it also informs the reader that the protagonist’s goal is valuable. We tend to assume if something is highly valuable, there is a proportionately high amount of risk involved in obtaining it (otherwise anyone could have it).</p>
          <p>Ideally, the protagonist should be making a risk-taking action multiple times throughout your story, with increasing amounts of risk each time. Generally, each time the protagonist makes a move for the goal, the antagonistic forces oppose him/her, which creates the risk. As the protagonist gets closer and closer, the antagonistic forces increase their opposition, heightening the risk. This involves multiple changes in behavior as protagonist and antagonist adjust their strategies each time the other stymie him/her. Your protagonist should not blithely bulldoze through each opposition, doing the exact same thing, with no change in behavior, regardless of the mounting risk. </p>

          <h4>7.21.1 	Set off Course, not Setback</h4>
          <p>Related to above, when your protagonist makes a move in pursuit of the goal, and the antagonistic force opposes them (creating risk for the protagonist), and necessitating your protagonist to alter their strategy, you should envision this process like a train switching tracks, not moving backwards. </p>
          <p>It’s frustrating, contrived and lazy when a protagonist gains something, only to lose it, and finally gain it again. It invalidates the reader’s sense of satisfaction of the protagonist overcoming the obstacle the first time. It also cheapens the acquisition in general; even once the protagonist reclaims the thing, what’s preventing it from being taken again, and again?</p>
          <p>The protagonist should not perform the same action twice. Each time your protagonist overcomes an obstacle it should feel unique. </p>

          <h3 id="post-number-of-characters">7.23: Number of Characters</h3>
          <p>McKee
            <FootnoteRef text="Robert McKee, Story: Style, Structure, Substance, and the Principles of Screenwriting." />
            makes a helpful point: For every event in your story, each character will have a different reaction. And – </p>
          <p className="italic">“If two characters in your cast share the same attitude and react in kind to whatever occurs, you must either collapse the two into one, or expel one from the story. When characters react the same, you minimize opportunities for conflict. Instead, the writer's strategy must be to maximize these opportunities.”</p>
          <p>One way you can increase conflict using characters is for different characters to have something at stake in the main characters decisions. For example, protagonist must make decision X, which involves mutually exclusive choice 1 and 2. Character A wants Protagonist to make choice 1 because of personal impact it would have on them. Character B wants choice 2 because of same. </p>

          <h3 id="post-the-strange-sandwich">7.24 The 'Strange Sandwich'</h3>
          <p>Remember this rule under Part 2? It also applies to characters (actually, it applies to everything). </p>
          <p>Burnett and Burnett
            <FootnoteRef text="Hallie Burnett and Whit Burnett, Fiction Writer's Handbook." />
            states that, “...dull characters become more interesting against exotic backgrounds …[and] complicated and alien individuals stand out best against simplicity.”</p>
          <p>In other words, don’t place an oddball in an odd land, and don’t place an unremarkable wallflower in a wallpaper town.</p>

          <h3 id="post-earn-what-you-learn">7.25. Earn What You Learn</h3>
          <p>A character can't mature if they don't start young. They can't learn if they already know. They can't preach if they haven't practiced. Your character can't learn to be good if they were good in the first place. They can't learn the value of friendship if they've always had friends -- and never not had friends. Basically, characters can't be said to grow or change if there's no growth, and no change. </p>
          <p>In all these cases, they haven't earned the moral message.  </p>
          <p>This happens when writers are too fond of their character; they want their cake and to eat it, too. They want their character to learn to do the right thing, but never have them do the wrong thing. But if you want to show your character learning to be good, you have to show them doing a correspondingly bad thing and suffering for it.</p>
          <p>You also have to be careful that the suffering properly incentivises your character: if your character does a trivially bad thing and gets an inordinately severe punishment, it doesn’t teach your character to be good; it just teaches them that justice is unfair and they must try harder not to get caught – if anything, it gives them a motivation for revenge against the good guys.</p>

          <h3 id="post-naming-your-character">7.26 Naming Your Character</h3>
          <p>Like the book’s title, character names are important. You can get names ‘wrong’, for example:</p>

          <ol>
            <li>Detective Fingerling and Topsy Kretts;
              <FootnoteRef text="The Number 23, (2007)." />
            </li>
            <li>Cypher Raige;
              <FootnoteRef text="After Earth, (2013)." />
            </li>
            <li>Harry Hole;
              <FootnoteRef text="The Snowman, (2017)." />
            </li>
            <li>Shadow Moon;
              <FootnoteRef text="American Gods, Neil Gaiman." />
            </li>
            <li>Moredeth;
              <FootnoteRef text="The Wheel of Time, Robert Jordan." />
            </li>
            <li>Tookie De La Crème;
              <FootnoteRef text="Moddelland, Tyra Banks." />
            </li>
            <li>Wicks Cherrycoke;
              <FootnoteRef text="Mason & Dixon, Thomas Pynchion." />
            </li>
            <li>Del Capslock;
              <FootnoteRef text="Lucas Davenport, John Sandford." />
            </li>
            <li>Bucky Wunderlick</li>
            <li>Darken Rahl;
              <FootnoteRef text="Sword of Truth, Terry Goodkind." />
            </li>
            <li>Zaspahr Clyntahn;
              <FootnoteRef text="Safehold, David Weber." />
            </li>
            <li>Any hyphenated name in a fantasy or sci-fi;</li>
          </ol>

          <p>Etc.</p>

          <p>There’s no guide for what to name a character, but there are general proscriptive rules (evidenced from above list):</p>
          <ol>
            <li>Don’t name your character after a symbolically relevant object;</li>
            <li>Avoid cheap puns;</li>
            <li>Ensure the name is a legitimate name;</li>
          </ol>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="italic">“It's [...] a good idea to avoid giving two important characters names that start with the same letter. The reader speeding ahead will have to slow down to register the right character. It's best to avoid any confusion or distraction that will divert the reader from his experience.”</p>
            <p>— Sol Stein
              <FootnoteRef text="Sol Stein, How To Grow A Novel." />
            </p>
          </div>
          <p>There is a broader principle to be derived from Stein’s advice. That is words that are ‘smooth’ or reading obstacles. I.e. how reflexively read is the name as a word? Does the eye have to slow and the mind concentrate to process and parse the name/word? Some extreme examples in the works of Lovecraft: Cthulhu; Nyarlathotep; these are unthinkably horrible names to have to parse multiple times in a story, but the entities they describe are supposed to be unthinkably horrible, so it works. </p>
        

        <h3 id="post-transference">7.27 Transference</h3>
        <p>Sometimes your character won't admit or accept what they feel. How do you say that your character is in love, or terrified, or irritated, if they don't recognise it or refuse to acknowledge it?</p>
        <p>One way is to displace the feeling onto someone or something else (preferably a concrete thing, e.g. an outward behaviour). Suggestively, the character is quick to interpret another's behaviour as due to the relevant feeling, because it's the one that's on his/her mind. This is a psychological phenomenon called ‘transference.’</p>
        <p>Example:
          <FootnoteRef text="The Exorcist, William Peter Blatty." />
        </p>
        <p className="italic">The air was thin and still in the darkness. Some cats at a garbage can scurried in fright as he crossed toward the house. </p>
        <p>At this point in the story the protagonist here is feeling "haunted." He also wants to believe he has no rational reason to feel afraid. Therefore, there would be a conflict if he was himself described as frightened (e.g, if the cats startled him). It wouldn't ring true with his self-denial.</p>
        <p>This is a great, simple example because it ‘transfers’ two sensations: (1) the character is frightened; and (2) the character feels short of breath due to fright. We get inside the character’s head and feelings without being told what he is feeling.</p>

        <h3 id="post-active-protagonist">7.28: Active Protagonist</h3>
        <p>According to John Yorke,  a character who is passive is "effectively dead."</p>
        <p>A character is passive if they don't want anything.</p>
        <p>The protagonist must want something tangible. 'Love,' 'success,' 'power,' 'money' and 'happiness' are too vague. The goal must be tangible so that it's clear to the reader when the protagonist has achieved it. The prize must be more than 'something nice if I had it.' It's absence must weigh on the protagonist in some palpable way, and emphasised by events in the story.</p>
        <p>What makes a protagonist:</p>
        <p><span className="underline">Want:</span> According to John Yorke,
          <FootnoteRef text="John Yorke, How Stories Work and Why We Tell Them." />
          a character who is passive is "effectively dead." A character is passive if they don't want anything. If they don't want anything, they have no reason to act.</p>
        <p><span className="underline">Tangible Want:</span> the want must be defined enough (by object, event, person, date, time, quantity, etc) so that it's clear to the reader when the protagonist has achieved it. A clearly defined want such as 'save my best friend,' is effective, whereas 'save the world,' is too general.</p>
        <p><span className="underline">Effect:</span> 'want' comes from Old English 'vant' meaning 'absence' or 'lacking.' The absence of the thing must weigh on the protagonist in some palpable way, e.g. cause them suffering, disadvantage, hardship, etc. When the protagonist obtains their prize, it changes them or their life in some corresponding way. The object itself doesn't need to be big or dramatic as long as its effect or consequences would be significant.</p>
 




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
          <p className="font-source-code-pro text-xs mt-1">The main characters are those most critically affected by the plot, with the most at stake.</p>
        </div>

        {/* Index Box */}
        <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
          <div className="font-semibold mb-1 text-yellow">Index</div>
          <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
            <li className="mb-px">
              <a href="#post-the-people-with-the-most-at-stake" className="hover:underline hover:text-white">7.1: The People with the Most at Stake</a>
            </li>
            <li className="mb-px">
              <a href="#post-ditch-the-wimp" className="hover:underline hover:text-white">7.2: Ditch the Wimp</a>
            </li>
            <li className="mb-px">
              <a href="#post-two-sources" className="hover:underline hover:text-white">7.3: Two Sources</a>
            </li>
            <li className="mb-px">
              <a href="#post-ingredients-of-a-character" className="hover:underline hover:text-white">7.4: Ingredients of a Character</a>
            </li>
            <li className="mb-px">
              <a href="#post-how-to-write-character" className="hover:underline hover:text-white">7.5: How to Write Character</a>
            </li>

            <li className="mb-px">
              <a href="#post-maximum-capacity" className="hover:underline hover:text-white">7.7: Maximum Capacity</a>
            </li>

            <li className="mb-px">
              <a href="#post-the-foil" className="hover:underline hover:text-white">7.8: The Foil</a>
            </li>
            <li className="mb-px">
              <a href="#post-the-rpa-method" className="hover:underline hover:text-white">7.9: The RPA Method</a>
            </li>
            <li className="mb-px">
              <a href="#post-character-vs-characterization" className="hover:underline hover:text-white">7.11: Character vs Characterization</a>
            </li>
                        <li className="mb-px">
              <a href="#post-the-animal-vegetable-or-object-method" className="hover:underline hover:text-white">7.12: The 'Animal, Vegetable, or Object' Method</a>
            </li>
                        <li className="mb-px">
              <a href="#post-murrays-psychological-needs" className="hover:underline hover:text-white">7.13: Murray's Psychological Needs</a>
            </li>
                        <li className="mb-px">
              <a href="#post-poignant-character-building" className="hover:underline hover:text-white">7.14: Poignant Character-Building</a>
            </li>
                        <li className="mb-px">
              <a href="#post-introducing-your-character" className="hover:underline hover:text-white">7.15: Introducing Your Character</a>
            </li>
                        <li className="mb-px">
              <a href="#post-the-law-of-conservatism" className="hover:underline hover:text-white">7.16: The Law of Conservatism</a>
            </li>
                        <li className="mb-px">
              <a href="#post-return-to-the-status-quo" className="hover:underline hover:text-white">7.17: Return to the Status Quo</a>
            </li>
                        <li className="mb-px">
              <a href="#post-its-happened-before-itll-happen-again" className="hover:underline hover:text-white">7.18: It's Happened Before, It'll Happen Again</a>
            </li>
                        <li className="mb-px">
              <a href="#post-better-never-than-late" className="hover:underline hover:text-white">7.19: Better Never Than Late</a>
            </li>
                        <li className="mb-px">
              <a href="#post-depth" className="hover:underline hover:text-white">7.20: Depth</a>
            </li>
                        <li className="mb-px">
              <a href="#post-multi-dimensionality" className="hover:underline hover:text-white">7.21: Multi-Dimensionality</a>
            </li>
                        <li className="mb-px">
              <a href="#post-raising-the-stakes" className="hover:underline hover:text-white">7.22: Raising the Stakes</a>
            </li>
                        <li className="mb-px">
              <a href="#post-number-of-characters" className="hover:underline hover:text-white">7.23: Number of Characters</a>
            </li>
                        <li className="mb-px">
              <a href="#post-the-strange-sandwich" className="hover:underline hover:text-white">7.24: The 'Strange Sandwich'</a>
            </li>
                        <li className="mb-px">
              <a href="#post-earn-what-you-learn" className="hover:underline hover:text-white">7.25: Earn What You Learn</a>
            </li>
                        <li className="mb-px">
              <a href="#post-naming-your-character" className="hover:underline hover:text-white">7.26: Naming Your Character</a>
            </li>
                        <li className="mb-px">
              <a href="#post-transference" className="hover:underline hover:text-white">7.27: Transference</a>
            </li>
                        <li className="mb-px">
              <a href="#post-active-protagonist" className="hover:underline hover:text-white">7.28: Active Protagonist</a>
            </li>
          </ol>
        </div>

        {/* Also See Box */}
        <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
          <div className="font-semibold mb-1 text-yellow">Also See</div>
          <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
            <li className="mb-px">
              <a href="/secondaryCharacters" className="hover:underline hover:text-white">Secondary Characters</a>
            </li>
            <li className="mb-px">
              <a href="/dialogue" className="hover:underline hover:text-white">Dialogue</a>
            </li>
            <li className="mb-px">
              <a href="antagonists" className="hover:underline hover:text-white">Antagonists</a>
            </li>
          </ol>
        </div>

      </div>

    </section>

    </Layout >
  );
}

export default MainCharacters;