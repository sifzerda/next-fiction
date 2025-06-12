// src/app/dialogue.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
//import Link from "next/link";

function Dialogue() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Dialogue</h1>

        <blockquote className="text-sm italic mb-2">
          “Dialogue is used to reveal not what we want to say, but what we are trying to hide.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— William Monahan</span>
        </blockquote>
      </div>

      {/* 
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={dialogueBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
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

          <h3 id="post-what-is-dialogue">12.1: What is Dialogue?</h3>

          <p>First, what dialogue is <i>not: </i><strong>it is not real speech. </strong>Dialogue is the illusion, or semblance, of real speech.</p>
          <p>You do not get dialogue from a verbatim transcription of human speech. Real speech is disordered, fractured and meandering. A large percentage is junk, noise, filler. Dialogue can never be passive background noise; it must be active, tight, abridged and filled with meaning and subtext. It can also reveal more by what is not said, than by what is.</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p>[Every bit of] dialogue has the obligation to advance the story[.]</p>
            <p><i>— Hallie & Whit Burnett.</i></p>
          </div>

          <p>No word can be uttered in a vacuum; every word spoken must mean something to someone, i.e. create a reaction (even if silent). It must inform behaviour, now or later.</p>
          <p>For instance, if a character says the weather is hot, it must mean: </p>
          <ol>
            <li>he is speaking of a triviality to conceal what he really means; </li>
            <li>since it is hot, something planned cannot take place, or the weather will affect the event; or </li>
            <li>his complaint is somehow blaming someone else, or expressing his complaining nature.</li>
          </ol>

          <h3 id="post-brevity">12.2: Brevity</h3>
          <p>Dialogue should be written with brevity – less is more. Writing can be dialogue-driven, however, my personal rule is to get away with writing the least amount without compromising meaning. That may even mean cutting dialogue altogether in favour of describing that character’s behaviour (description – of action; not in general – should be given priority over dialogue, i.e. show don’t tell). </p>
          <p>Sol Stein explains, “For the reader, dialogue is meant to be experienced [absorbed immediately], not studied [laboured over and re-read]. Some of the dialogue I see in manuscript is involuted, complex, difficult to digest in a quick reading. Halting over a line of dialogue can interrupt the reader's experience.” Don’t put “thoughts within thoughts. That characteristic doesn’t work in dialogue because thoughts within thoughts put the reader into a deciphering rather than an experiencing mode. Dialogue that is short, snappy, punchy, engages other characters as well as the reader.”<FootnoteRef text="Sol Stein, How To Grow A Novel." /></p>
          <p>Here’s an example of word-cutting:</p>

          <u>A. Verbose Example:</u>
          <ol>
            <li>Character A: “But you said that Joe would visit on Thursday.”</li>
            <li>Character B: “No, I didn’t. I said that Joe would visit on Wednesday.”</li>
          </ol>

          <u>B. Abridged Example:</u>
          <ol>
            <li>Character A: “But you said that Joe would visit on Thursday.”</li>
            <li>Character B: “Wednesday.”</li>
          </ol>

          <p>Example A shows ‘echoing’, which is how people speak in real life, but makes bad dialogue. Every word repeated is wasted. Example B says everything A does, and in less words.</p>

          <h4>12.2.1 	When to not abridge</h4>

          <p>Rarely, echoing might serve a function that would be lost if words were cut – this may be where Character B’s dialogue is intended to be condescending and being explicit is effectively talking down to Character A. Cutting words is only a general rule and whichever style you go with will be a circumstance-based judgment. </p>
          <p>For instance, look at this example as an exception to the cutting words rule:</p>
          <ol>
            <li>Character A: She isn’t breathing she isn’t breathing – ”</li>
            <li>Character B: “She’s gone.”</li>
          </ol>

          <p>Character A’s repetition isn’t redundant here because it conveys that A is distressed and in denial, not thinking clearly and is caught in a loop – the dialogue is not short, sharp, focused and forward-looking because A’s mental state is none of those things. </p>

          <h3 id="post-make-dialogue-olbique">12.3: Make Dialogue Oblique</h3>
          <p>You want dialogue to create conflicts but also protract tension. To achieve the first, dialogue should be confrontational. To achieve the second, it should be indirect – Sol Stein uses the term ‘oblique’. This means dialogue doesn’t directly reveal what the speaker is actually thinking. Dialogue is like a game of tennis. The oblique return, says Sol Stein,
            <FootnoteRef text="Sol Stein, How To Grow A Novel." />
            is the return of the ball somewhere else than where it is expected. Oblique dialogue is more interesting and dynamic. It turns ‘words’ into a ‘character’, fleshes out characters, makes them sound as if their hiding things, and therefore makes the reader want to learn more about them. </p>

          <h4>12.3.1 	Dialectical Dialogue / ‘Dodgem’ Dialogue</h4>
          <p>Dodgem dialogue is my technique for making dialogue 'jump' out at the reader. Normally, (bad) dialogue is written like a casual car ride, when it should be written like a dodgem car ride. This is related to combining conflict with dialogue (see 10.4 below). Sol Stein refers to a similar concept called 'oblique dialogue'.</p>
          <p>Stein says good dialogue is “confrontational” and “thrives on surprise and indirection,” and “raises more questions than it answers.”</p>
          <p>Dialogue that jumps out isn’t necessarily ‘oblique’ – oblique dialogue suggests more than is actually said and elicits further interest. Dialogue that skirts around moves outside the bounds of expectation or social convention or expected phrasing. By eschewing polite expectations, you make the dialogue immediate and get out of the ‘wallflower’ stages of new social interaction as quickly as possible; polite, bland, forgettable and everything a character is not. Characters may sound as if they’re presuming certain information possessed by the other character, and to the reader, it may have a sense that you’re being sucked into a conversation midway through – this is what gives it dynamism.</p>

          <u>Bad Dialogue:</u>
          <ol>
            <li>Character A: "How are you today?"</li>
            <li>Character B: “Good, thank you. And you?”</li>
          </ol>

          <u>More Bad Dialogue:</u>
          <ol>
            <li>One evening Ethel asked, "Katie, would you like to come to the barnyard?"</li>
            <li>"Yes, I would," I answered.
              <FootnoteRef text="Beverly Hopwood, Katie and Ozzie." />
            </li>
          </ol>

          <u>Good Dialogue (Dodgem dialogue) example #1</u>
          <ol>
            <li>Character A: “How are you today?”</li>
            <li>Character B: “No, no, I’m good.”</li>
          </ol>

          <u>DD example #2</u>
          <ol>
            <li>Character A: “How are you today?”</li>
            <li>Character B: “Ever woken up and you think, it's not enough?”</li>
          </ol>

          <u>DD example #3</u>
          <ol>
            <li>Character A: “How are you today?”</li>
            <li>Character B: “The horse fell down the well. Terrible.”</li>
          </ol>

          <p>Here are some examples from Sol Stein:
            <FootnoteRef text="Sol Stein, How To Grow A Novel." />
          </p>

          <u>Example of bad dialogue:</u>
          <ol>
            <li>She: How are you?”</li>
            <li>He: I am fine.</li>
            <li>She: How’s the family?</li>
          </ol>

          <u>Example of oblique dialogue:</u>
          <ol>
            <li>She: Hello there! How are you?</li>
            <li>He: On my way to jail.</li>
            <li>She: Good God, what are you planning to do?</li>
            <li>He: It's done.</li>
          </ol>

          <u>Example of oblique dialogue:</u>
          <ol>
            <li>She: It's marvelous outside. The leaves are changing color.</li>
            <li>He: I'm reading the paper.</li>
            <li>She: Read the paper later, John, the leaves may not wait till tomorrow.</li>
            <li>I have a reservation.</li>
            <li>She: About going out?</li>
            <li>He: A reservation on a plane.</li>
            <li>She: What plane?</li>
            <li>He: Out of O'Hare. I've got to get away from here.</li>
            <li>She: I thought you loved this house.</li>
            <li>He: It's not the house, it's you.</li>
          </ol>

          <p>Characters don’t give pre-rehearsed, automated sounding responses. They say what they’re thinking (i.e. dialogue isn’t necessarily oblique) but what they’re thinking is not what you expect. This gives interaction a vibe of dodgem cars; the characters’ dialogue is heading into each other and veering or bumping off at the last second. Characters are never really interacting directly and equally at each other. </p>
          <p>Much of how I write dodgem dialogue comes from my own observations about interesting speech in real life, and examples of well-crafted dialogue in what I’ve read. It’s something you get a feel for writing and there are no solid rules, but I have a number of simple ways I create dodgem dialogue:</p>

          <ol>
            <li>Write the generic response and then modify or remove the conventional parts – the ‘yes’ ‘no’ ‘good’ ‘okay’ ‘oh’ ‘sure’ ‘please’ and ‘thankyou’ </li>
            <ol>
              <li>see example #1; the repetition of ‘no’ makes it unusual and more interesting</li>
            </ol>
            <li>Rearrange the order of dialogue </li>
            <ol>
              <li>e.g. in the example #2 above I put direct answer to the question ‘feel terrible last, instead of first, where you’d expect it;</li>
            </ol>
            <li>Replace abstract responses with concrete ones. </li>
            <ol>
              <li>e.g. in the above example #2, B replies with a question;</li>
            </ol>
            <li>Rather than giving a direct answer, phrase the response into a different form; </li>
            <ol>
              <li>E.g. in example #2 above – you could also do this in #3 by removing ‘terrible.</li>
            </ol>
            <li>Have the character suggest the answer, but not say it </li>
          </ol>

          <p>Stein says, “Non sequiturs, words that don't follow from what came before[…] add flavor in dialogue.” See the word ‘No’ in DD example #1.</p>
          <p>The main thing to remember is you’re not locked into making exchanges fit convention. Dodgem dialogue does not hit back at the speaker head on; it gives a sideway reply and careens off in some other direction.</p>

          <h3 id="post-action/reaction">12.4: Action/Reaction</h3>
          <p>No one goes into a conversation knowing exactly what they’re going to say beforehand. What you say in a conversation is partly reliant upon the responses you get from the other person. Thus, dialogue should not read as a one-sided pre-planned speech. Sequences of dialogue should be broken up into patterns of action/reaction that are continuously shaping the speaker's behavior. There is a constant updating of what the speaker says based on the real-time feedback they receive from the listener.</p>
          <p>Make each exchange short to give the conversation the rhythm of a tennis match. Back, forth, back, forth….etc. To keep it from getting to predictable, fragment the speech with silent reactions that cause the speaker to change the beat. A well-placed silence can be more compelling than words.</p>
          <p>People can also react to their own words and actions, for instance if they speak rashly or in high emotion, or with uncertainty, or under pressure. Characters may have dialogues with themselves while speaking to another.</p>

          <h3 id="post-12-5">12.5: Adding Activity to Dialogue</h3>
          <p>In real life, it’s rare that people will stop what they are doing, absorb you in their unbroken gaze and talk clearly at you for the duration of the conversation. People often talk to each other in and around menial tasks; making a snack or a drink, walking the dog, checking their phone or laptop, driving in the car. A really concise writer will use those menial tasks to convey information so no words are wasted. </p>
          <p>For instance, instead of simply telling the reader that a character is absent-minded, you could have the dialogue taking place while the character is searching for a lost item, or repeating the same activities as if they’ve forgotten they did them the first time. Instead of simply saying that a character is in an aggravated mental state, you could have the dialogue occurring while the character is trying and failing to start the car, with exchanges becoming increasingly laconic and curt as the character becomes increasingly stressed. </p>
          <p>Also note that stressed people are more likely to accidentally expose truths – this can be another reason for burdening a character with tasks during conversation, not to mention a convenient and novel way of introducing information. An alternative is where a person does not directly answer a question, but performs an action in/consistent with a certain state of affairs, e.g. shaking or nodding, smiling, laughing, or joking, acting quickly (suggests eagerness), acting slowly (suggests reluctance), requesting more information (could suggest interest or alternatively, suspicion), or turning away or changing the subject, or paraphrasing the information in a way more agreeable to them (suggests disagreement).</p>
          <p>Another trap of writing redundant information you can fall into is where characters agree. Silence can be more powerful than a response because if a person doesn’t say anything we generally take it as implied permission or affirmative. Example – </p>

          <ol>
            <li>Character A:”I’m heading off; you coming?”</li>
            <li>Character B: “Yeah. But I’ve lost my wallet.”</li>
          </ol>

          <p>Amended version:</p>

          <ol>
            <li>Character A: “I’m heading off; you coming?”</li>
            <li>* Character B stands up and slides his hand into his pocket*</li>
            <li>Character B: “Shit.”</li>
          </ol>

          <p>The action of B standing up and feeling for his wallet implies he was prepared to go.</p>
          <p>Be careful when deleting a character’s response as some people would not respond not because they agree but because they are shy or too afraid to argue. However, you may imply this through passive aggressive behavior, e.g. – </p>

          <ol>
            <li>Character A: “I’m heading off; you coming?”</li>
            <li>Character B nodded and took another sip of coffee.</li>
          </ol>

          <p>The above implies B is not coming or does not want to come; as the act of drinking a coffee is not something rushed, it implies B is passively defying A’s desire to go. This form of introducing conflict is more effective in allowing conflict to build without release, than if you had A and B explicitly butt heads.</p>

          <h3 id="post-12-6">12.6: Adding Conflict to Dialogue</h3>
          <p>Good dialogue happens when characters are under tension. </p>
          <p>Now you know how to write ‘Dodgem dialogue’ you want to combine it with conflict; your characters’ verbal quirks and phrasings are going to obliquely suggest their inner struggles and goals.</p>
          <p>Imagine two people performing a partnered dance. A leads and B follows. Every action is mirrored perfectly, each partner in tune with the music and almost psychically reading the other's intent. </p>
          <p>This is a metaphor for conventional dialogue – but bad dialogue: it's boring and reflects characters with no depth or theory of mind.</p>
          <p>The pattern tends to go like this - </p>

          <ol>
            <li>A starts on subject X;</li>
            <li>B responds to subject X;</li>
            <li>A concludes subject X,</li>
            <li>The other responds to subject Y, </li>
          </ol>

          <p>Etc.</p>

          <p>Dialogue is more interesting where neither party is on the same wavelength, and both are subconsciously battling for dominance with their own values and concerns in mind. A fitting image is of two people both trying to drive the car with one steering wheel. When the characters are conscious of it; it's an argument. Where the characters are subconscious; it's a conversation.</p>
          <p>The pattern could go -</p>

          <ol>
            <li>A starts on subject X;</li>
            <li>B vaguely or impliedly responds, and butts in with subject Y;</li>
            <li>A continues on subject X;</li>
            <li>B juggles attempt to close down X, while maintaining Y; </li>
            <li>A interrupts with subject Z;</li>
            <li>B closes subject X, maintaining Y;</li>
            <li>A resumes subject X.</li>
          </ol>

          <p>In acting they use Practical Aesthetics; knowing what the character's goal is and moving towards it against obstacles. You can use this in writing dialogue; your characters are always talking about their goals, and attempting to steer the conversation back to their goals, while attempts by other characters to derail are quickly shrugged off (obstacles). </p>
          <p>Sol Stein says provides several ways to create tension:</p>

          <ol>
            <li><u>Strong emotion: </u>“Character most reveals itself in dialogue under stress,” and “when angry,” as “[s]tressed characters will blurt things out that they never meant to say.”</li>
            <li><u>The use of impatience</u> characters have multiple important things they have to do, or have brief windows of time in which to get things done;</li>
            <li><u>Adding Misunderstandings: </u>information asymmetry, characters have reach different understandings, or arrive at different conclusions; </li>
            <li><u>Clashing Intentions: </u>characters find themselves in undesirable or unfamiliar positions, talking about things or to people they don’t feel comfortable with, people from a different social background, or who don’t respect or challenge them, etc.</li>
          </ol>

          <h3 id="post-12-7">12.7: Information Asymmetry</h3>

          <p>Introducing even more complexity: Information asymmetry.</p>
          <p>This is a term I’ve borrowed from economics, but the general concept is useful for writing purposes. In the context of fiction, information asymmetry is where different characters possess significant differences in information.</p>
          <u>Example #1</u>
          <p className='indent-8 mb-2'>Two friends, A and B, are talking on the phone about a third person, C. A knows B is infatuated with C, and tries to arrange a date between them by going out as a threesome, and then ducking out at the last minute (leaving B and C alone together). B knows he/she likes C (i.e. as a friend), but doesn’t know he/she loves C (or self-denial). B also doesn’t know that C is standing right next to A during the phone call, and the phone is on loudspeaker. C likes B but doesn’t know how B feels about them. </p>
          <p>Sol Stein calls this ‘The Actors Studio technique’, and refers to ‘information’ as ‘scripts’: </p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="mb-0">“That’s what happens in life. Each of us enters into conversation with another person with a script that is different from the other person’s script. The frequent result is disagreement and conflict—disagreeable in life and invaluable in writing, for conflict is the ingredient that makes action dramatic.”</p>
            <p></p><i>— Sol Stein </i>
          </div>

          <p>He also helpfully provides instructions for writing such a scene: </p>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="mb-0">“You are imagining a scene with two characters. Before you write the scene, make a note as to the “script” or tack (keep it simple) of the first character and then of the second character. Make sure the scripts are different and at odds. Only you will be privy to the scripts of both characters. Let them play out the scene in front of you as you write. And if you have a third character in the scene, give that character a script different from the other two.” </p>
            <p></p><i>— Sol Stein </i>
          </div>
          <p>The ‘script’ is information or knowledge or maybe a mere suspicion; it may be something your character was previously told, or a conclusion from direct experience. It doesn’t matter which character’s information is ‘true’ – if either – only that they’re not irrational for believing it. </p>

          <h3 id="post-dialogue-tags">12.8: Dialogue Tags</h3>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="mb-0">“Hello,” he lied. </p>
            <p></p><i>— Don Carpenter (quoting a Hollywood agent) </i>
            <FootnoteRef text="Mark Edward, Psychic Blues." />
          </div>

          <p>Dialogue tags attribute speech to someone. They generally convey two bits of information:</p>

          <ol>
            <li>Who has spoken (e.g. ‘Jim said’)</li>
            <li>Form of speech (e.g. ‘Jim said angrily’)</li>
          </ol>

          <p>The rule for conveying both of these bits of information is: economy.</p>

          <h4>12.8.1 	Who has spoken</h4>
          <p>Generally, once you’ve identified the speaker the first time, you don’t need to keep identifying them every time they speak. If your dialogue volleys back and forth and sounds natural, the reader will figure it out. You might experiment with this by taking all dialogue tags out of a paragraph of dialogue, and then reinserting as few as possible until your dialogue can be accurately attributed to the characters (slight guesswork or deduction by the reader is absolutely permissible). If you need to keep repeating which character is which, it suggests your banter is messy and you should aim to reorganise it.</p>
          <h4>12.8.2 	Form of speech</h4>
          <p>The same rule applies to describing the form of speech – multiplied by ten. Do it as little as possible without compromising coherence. Try the above exercise with dialogue, taking speech descriptions out, but rather than reinsert them, see if you can alter the dialogue itself to emphasise how something is being said.</p>

          <p><i><strong>What does ‘said’ mean and what does it do?</strong></i></p>
          <p>Now you know how often to describe speech (rarely). But if it’s imperative that you use a descriptive word, which word do you use? </p>
          <p>Poor writing has a habit of relying on words other than ‘said’. It’s as if the writer is too afraid to economise descriptive speech, and compromises by trying to make each instance sound distinct. And that’s even worse than just using a ‘said’ a lot.</p>
          <p>Let’s establish the basics: ‘Said’ (including tense-based variants: ‘says’, ‘saying’, ‘will say’ etc) means a character has uttered speech. That’s all. It doesn’t say how speech was conveyed. ‘Said’ is unique because it’s transparent – you don’t notice it, the eye’s not consciously drawn to it. Not so with other ‘non-said’ (NS) alternatives (exclaimed, yelled, gushed, etc).</p>
          <p>When you read dialogue it potentially contains two kinds of information: the content (what is uttered), and the description (how it’s uttered). </p>
          <p>e.g – </p>

          <p className='indent-8 mb-2'><strong>"What are you doing?!"</strong>[(1) content]<strong> she screamed.</strong> [(2) NS description]</p>
          <p>In this example, the eye is drawn to two sources to get information (1) and (2) – and the second doesn’t tell you anything you didn’t already know. This is less efficient than if it only had to look at one source, which you can do (and should try to do) if you use said.</p>
          <p>e.g – </p>
          <p className='indent-8 mb-2'>"What are you doing?!" she screamed.</p>
          <p>In the above example, ‘said’ doesn’t tell us anything so we’re restricted to examining the dialogue itself for information. It already tells us she screams because you can’t imagine someone saying the above without screaming or yelling or otherwise. So ‘she screamed’ – or similar – is redundant. </p>
          <p>You want to get into a mindset where NS are detrimental. For instance, imagine using ‘said’ is free, but NS cost money, $1.00 each, or $100.00, whatever makes you disinclined to use them. This will make you try to pack as many clues about the way speech is conveyed into the dialogue itself. This will make your dialogue more punchy and interesting. </p>
          <p>You should only use a NS when ‘said’ does not convey what you intend. This may be where a character is being ironic or humourous. But even that’s debatable, e.g. – </p>
          <p className='indent-8 mb-2'>“You should only use a NS when ‘said’ doesn’t convey what you intend,” I said. “Or your character is called ‘Said’.”</p>

          <p>Here is a scene just in dialogue. Notice how you can hear the tones of voice just by the wording alone, absent attribution:<FootnoteRef text="Prey, Michael Crichton." /></p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p><i>“I’m sorry. I handle this kind of thing all day, and I guess-”</i></p>
            <p><i>“This really is a problem, Jack.”</i></p>
            <p><i>“I said I’m sorry.”</i></p>
            <p><i>“I know that’s what you said, but I don’t think you are sorry, because I don’t see you doing anything to change your controlling behavior.”</i></p>
            <p><i>“Julia. You’re right. I’m sorry it happened.”</i></p>
            <p><i>“You’re just shutting me out and you are keeping me from my children-”</i></p>
            <p><i>“Julia, God damn it, you’re never here!”</i></p>
            <p><i>“I certainly am here. Don’t you dare say I am not.”</i></p>
            <p><i>“Wait a minute, wait a minute. When are you here? When was the last time you made it for dinner, Julia? Not last night, not the night before, not the night before that. Not all week, Julia. You are not here.”</i></p>
            <p><i>“I don’t know what you’re trying to do, Jack. I don’t know what kind of game you are playing.”</i></p>
            <p><i>“I’m not playing any game. I’m asking you a question.”</i></p>
            <p><i>“I’m a good mother, and I balance a very demanding job, a very demanding job, and the needs of my family. And I get absolutely no help from you.”</i></p>
            <p><i>“What are you talking about?”</i></p>
            <p><i>“You undercut me, you sabotage me, you turn the children against me. I see what you’re doing. Don’t think I don’t. You are not supportive of me at all. After all these years of marriage, I must say it’s a lousy thing to do to your wife.”</i></p>
          </div>

          <h2 id="post-people-avoid-jinxing">12.9: People Avoid 'Jinxing'</h2>
          <p>Here’s a mistake writers can tend to make: characters spelling out bad possibilities (mainly to escalate drama). </p>
          <p>Example:</p>
          <p className="code-left">
            <code><i>“Pirahnas! Get out of the water or they’ll eat your legs off!” </i></code></p>

          <p>There are 2 major problems with this: </p>
          <ol>
            <li>It attempts to escalate drama by spelling out the bad outcome, but by doing so, places a cap on the reader’s imagination by implicitly excluding scenarios the author didn’t consider (e.g. what if my personal fear is of drowning?); </li>
            <li>In reality, people tend not to mention things they don't like or don't want to happen, for fear of associating the thing with themselves, or jinxing the thing to happen just by saying it, or simply refusing to acknowledge that the thing can or is happening right in front of them. </li>
          </ol>

          <p>To illustrate, this is an example of bad dialogue from a film
            <FootnoteRef text="Alive, (1993)." />
          </p>

          <p>A man is vigorously trying to free a trapped woman, who screams in pain. Another man says:</p>
          <p className="code-left">
            <code><i>"Stop it! You'll kill her!" </i></code></p>

          <p>This dialogue would have been fine if you got rid of 'you'll kill her.' You could also have him say ‘Stop it’ twice, just to emphasise that whatever the man is doing, he really needs to cease doing it right now (and leave that bad thing to the viewer’s imagination – e.g. will the woman get hurt? Will she die? Will the man injure himself too? Etc).</p>
          <p>It goes against human psychology for people to voice that possibility in front of the victim, and with emphasis. Lay people err on the side of optimism (or denial) and don't tend to assume someone will die from an injury until the person actually dies in front of them. It would also panic the woman to say this out loud.</p>
          <p>In general where people make this mistake, there are two possible scenarios, and neither of them need a bad happening to be spelled out:</p>

          <p><u>The bad event is a mere future possibility</u>: people tend to avoid acknowledging the bad outcome, and hope for the good;</p>
          <ol>
            <li>E.g. a man doesn’t go out to the casino and tell his wife, “I’m going to play the slots and I might lose.” (he says, “I feel lucky.”) And you don’t tell your friend, “My uncle is recovering in hospital from a heart attack. But he could still die.” (you say “He seems to be doing okay at the moment.”)</li>
          </ol>

          <p><u>The bad event is actually happening: </u>then it’s redundant for people to say so;  </p>
          <ol>
            <li>they will react to the situation as it unfolds, and then afterwards may report on the bad outcome (when they have no choice but to accept that it’s happened). Even then, people are likely to still try to reinterpret the event as less bad than it was (e.g. “I lost at the slots. But not that much.” Or “My uncle passed away. He didn’t suffer.”)</li>
          </ol>

          <p>But a caveat: sometimes people do point out bad things and dramatise them. But usually they have some ulterior reason for doing so. For instance, consider why someone might say, “I lost my life savings on the slots,” as opposed to, “I didn’t lose that much,” Or “My uncle spent his last moments in agonizing pain,” as opposed to, “my uncle passed away”. If there is a genuine reason for your character to talk like this, it may add character depth and pathos.</p>

          <h3 id="post-concrete-abstract-statements">12.10: Concrete/Abstract Statements</h3>
          <p>If you want dialogue to foster closeness between characters, have them use concrete statements (“I got robbed yesterday,” “I don’t like hail,” “He lied.”). Avoid abstract statements (“I believe in justice,” “I hate awful weather,” “He’s just like all the others,”).</p>
          <p>This not only fosters closeness and a sense of knowing characters better, but also fosters closeness between character and reader, and makes characters more interesting.</p>
          <p>Imagine a group of characters are asked, "What is the most important thing in the world?" Characters answer the obvious: love, family, friends, goals, etc – abstract answers. </p>
          <p>Some give more individualistic – but still abstract – answers:</p>

          <ol>
            <li> Character 1: "Nature." </li>
            <li> Character 2: "Identity." </li>
            <li> Character 3: "Gainful employment." </li>
          </ol>

          <p>Contrast the same characters giving the same answers but in concrete form:</p>

          <ol>
            <li> Character 1: "The apple tree in my front yard. I planted it last year and I need it to stay alive." </li>
            <li> Character 2: "My sense of self. I feel like I was a completely different person last week." </li>
            <li> Character 3: "My friend's job. I hope she finally keeps this one." </li>
          </ol>

          <p>You now have more of a sense of these characters. It also creates closeness because people only much such personal or vulnerable admissions if they like or feel close to the person they are talking to.</p>
          <p>Generating this closeness is helpful where you have to suggest that some time has passed and relative strangers have gotten to know each other better. </p>
          <h3 id="post-dont-take-sides">12.11: Don't Take Sides</h3>
          <p>Sol Stein discourages taking sides with one party in dialogue exchange, and if <i>“you find yourself wedded to the beliefs of one of the characters, try your damndest to make the other character win the argument.”</i></p>

          <h3 id="post-when-to-avoid-dialogue">12.12: When To Avoid Dialogue</h3>
          <p>Sometimes you might notice a story eschews dialogue and just summarises what a character has said. A well-known example is in Stephen King’s ‘The Shining’, where the bartender’s dialogue is only summarized, not spoken. This implies the bartender does not literally speak; he is ghost, or an invention of the protagonist’s psychosis. That’s an extreme example.</p>
          <p>Here is another example:
            <FootnoteRef text="Tall Tales from the Mekong Delta, Kate Braverman." />
            </p>
          <p className="code-left">
            <code><i>“I’m Lenny,” he said, extending his hand. “What’s your name?”
              She told him. She was holding a bag with packages of cookies in it. After the meeting, she had an appointment with her psychiatrist, then a manicure. She kept walking.
            </i></code></p>

          <p>The dialogue is summarized to convey that her response is standard and expected (e.g. she doesn’t make up a name) and the author has wanted to get it out of the way without drawing attention to it. Also, you get ‘she’ is not interested in Lenny; her mind is elsewhere. By having the characters’ dialogue delivered differently than Lenny’s it places the characters’ exchanges on unequal terms. Lenny is attentive and speaking directly, as if to us – the reader – while ‘she’ is disinterested and her dialogue is not distinguished from her other concerns.</p>

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
            <p className="font-source-code-pro text-xs mt-1">Dialogue is a construction of actual speech which is intended to advance the plot, develop character, or create conflict.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-what-is-dialogue" className="hover:underline hover:text-white">12.1: What is Dialogue?</a></li>
              <li className="mb-px"><a href="#post-brevity" className="hover:underline hover:text-white">12.2: Brevity</a></li>
              <li className="mb-px"><a href="#post-make-dialogue-oblique" className="hover:underline hover:text-white">12.3: Make Dialogue Oblique</a></li>
              <li className="mb-px"><a href="#post-action-reaction" className="hover:underline hover:text-white">12.4: Action/Reaction</a></li>
              <li className="mb-px"><a href="#post-adding-activity-to-dialogue" className="hover:underline hover:text-white">12.5: Adding Activity to Dialogue</a></li>
              <li className="mb-px"><a href="#post-adding-conflict-to-dialogue" className="hover:underline hover:text-white">12.6: Adding Conflict to Dialogue</a></li>
              <li className="mb-px"><a href="#post-information-asymmetry" className="hover:underline hover:text-white">12.7: Information Asymmetry</a></li>
              <li className="mb-px"><a href="#post-dialogue-tags" className="hover:underline hover:text-white">12.8: Dialogue Tags</a></li>
              <li className="mb-px"><a href="#post-people-avoid-jinxing" className="hover:underline hover:text-white">12.9: People Avoid 'Jinxing'</a></li>
              <li className="mb-px"><a href="#post-concrete-abstract-statements" className="hover:underline hover:text-white">12.10: Concrete/Abstract Statements</a></li>
              <li className="mb-px"><a href="#post-dont-take-sides" className="hover:underline hover:text-white">12.11: Don't Take Sides</a></li>
              <li className="mb-px"><a href="#post-when-to-avoid-dialogue" className="hover:underline hover:text-white">12.12: When To Avoid Dialogue</a></li>
              <li className="mb-px"><a href="#post-dialogue-comments" className="hover:underline hover:text-white">Comments</a></li>




            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/premise" className="hover:underline hover:text-white">Conflict</a></li>
              <li className="mb-px"><a href="/plot" className="hover:underline hover:text-white">Main Characters</a></li>
              <li className="mb-px"><a href="/synopsis" className="hover:underline hover:text-white">Writing Devices</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Dialogue;