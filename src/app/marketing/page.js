// src/app/secondaryCharacters.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import settingBanner from '../assets/settingbanner.jpg';
import Image from "next/image";

function Marketing() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Marketing</h1>

        <blockquote className="text-sm italic mb-2">
          “Every story would be another story, and unrecognizable if it took up its characters and plot and happened somewhere else...Fiction depends for its life on place. Place is the crossroads of circumstance, the proving ground of, What happened? Who's here? Who's coming?...”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Eudora Welty</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “One can find so many pains when the rain is falling.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— John Steinbeck</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “Let your mind be working on your title as you go along.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— F. Scott Fitzgerald</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={settingBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-purpose-of-a-synopsis">25.1 Purpose of a Synopsis</h3>

          <p>Now that you’ve written your story, you want to think about marketing and publishing. Most publishers require a synopsis to generate interest in your manuscript. This is critical because if the synopsis is no good, they won’t look at your manuscript. However, a synopsis must be written differently to your story.</p>

          <h3 id="post-what-is-a-synopsis">25.2 What Is A Synopsis?</h3>
          <p>A synopsis is a summary of your story. It is not a sample of your ability to write in general, or your ability to write:</p>

          <ol>
            <li>Characters;</li>
            <li>Dialogue;</li>
            <li>Subtext;</li>
            <li>Theme;</li>
            <li>Suspense</li>
            <li>Description</li>
            <li>Scenes</li>
            <li>Conflict</li>
            <li>Genre</li>
          </ol>

          <p>It is a demonstration of your ability to write plot – which is a demonstration of your structuring ability. Some writers can make interesting characters, snappy, witty dialogue, heart-pounding suspense, etc, but they can’t structure worth a turd. The synopsis is going to demolish that writer, which means their manuscript doesn’t get a look.</p>

          <h4>25.2.1 What Is Structure?</h4>
          <p>There is no separate section of ‘Structure’ above, so it’s worth defining here. It should have its own section because, in my opinion, it’s the most important aspect of storytelling. </p>
          <p>The importance of structure is reflected in this comment on Dante's Inferno by translator John Ciardi: it's <i>"power is structural: everything relates to everything else."</i>
            <FootnoteRef text="Dante's Inferno (translated by John Ciardi), Dante Alighieri." />
          </p>
          <p>Structure makes every part of a story fit into place like jigsaw pieces.</p>
          <p>Structure makes words into a story.</p>
          <p>Structure <i>makes</i> Story.</p>
          <p>Yet, a lot of people – including people who know how to write -- are ignorant of how important it is. </p>

          <p>Jack Hart says:
            <FootnoteRef text="Jack Hart, Storycraft: Complete Guide to Writing Narrative Nonfiction." />
          </p>
          <p className="indent-8 mb-2">“The display of current best sellers no doubt contains several titles by tin- eared pop novelists who wouldn’t recognize a graceful sentence if it asked them to dance. The likes of Jean Auel and Tom Clancy sell books by the millions because they understand story structure, a point that’s lost on the critics who savage their syntax.”</p>
          <p>Hart also says: Structure is more visual than logical, a pattern of parts with its own rules for fitting pieces together, and most experienced writers create some sort of visual guide to the assembly of a story. Like an architect, they express their structural ideas as a kind of blueprint. They must see their structure in graphic terms.</p>
          <p>If you’re familiar with my E Chain method you will already start to have an intuitive sense of good structure. Note, I originally invented the E Chain as a method for writing synopses; at the ‘back end’ of story-writing. I later realised it could be – and should be – pulled in for use at the ‘front end’ to create the plot itself, rather than recap it in summary later.  </p>
          <p>If you have written your story (without using E Chain) and plan to use E Chain to write a synopsis, be aware your E Chain synopsis will make a structureless story collapse like a house of cards, worse, avert you to the plot you should have written instead.</p>

          <h5>Structure Is Fractal</h5>
          <p>Structure is in arrangement. You have all the ideas, now how do you put them together? Alternatively, you have a single idea, now which ideas go together with that idea, and which don't? Also, structure is like fractals: infinite and goes both ways. You can start really small and each time you zoom out there's a new structural issue.</p>
          <p><u>Big Structure:</u> This is the general plot structure, i.e. 3 or 5 Acts or otherwise.</p>
          <p><u>Small Structure:</u> This is on the level of paragraphs and sentences. Every single sentence has an ideal structure. Pedantic, maybe, but you'll agree it's necessary if you've ever had to reread a sentence for clarity.</p>
          <p>These are part of a structural spectrum:</p>

          <ol>
            <li>Punctuation</li>
            <li>Word</li>
            <li>Sentence</li>
            <li>Paragraph</li>
            <li>Scene</li>
            <li>Chapter</li>
            <li>Act</li>
            <li>Part/Volume</li>
            <li>Story</li>
            <li>Series</li>
            <li>Multi-Series
              <FootnoteRef text="This is where you have a separate series which is the sequel of another separate series, e.g. David Eddings’ the Mallorean series is the sequel of his the Belgariad series." />
            </li>
            <li>Multi-verse
              <FootnoteRef text="This is where you have a canon of works (including series, prequels and spin-offs) set in the same story world, such as (in addition to the Mallorean and the Belgariad, Belgarath the Sorcerer, and <i>Polgara the Sorceress)." />
            </li>
            <li>Mythos
              <FootnoteRef text="This is where you have works set in the same story world, but including those not by the original author, e.g. the Lovecraft Mythos, created by or originating with H. P. Lovecraft but contributed to by authors such as Frank Belknap Long, August Derleth,  Robert Bloch, Robert E. Howard, and Clark Ashton Smith." />
            </li>
          </ol>

          <h3 id="post-the-value-of-a-synopsis">25.3 The Value of a Synopsis</h3>
          <p>Contrary to commonsense, a synopsis is not just valuable to create once you’ve finished writing your story, it’s valuable at all stages of the story-writing process. It’s also worthwhile creating chapter synopses, so that your chapter achieves only as much as needed to perform its purpose. If you do this, you’ll find you don’t need to write your synopsis at the end, because you’ll already have one.</p>
          <p>Still, I accept this is a boring, IKEA set-up, factory-production mode of story-writing. Many writers like to leave some elements of the story for later, make things up as they go, and that’s fine as long as it’s productive. The key thing is to know what’s essential to plan beforehand, and what you can leave up to later inspiration.</p>

          <h3 id="post-how-to-write-a-synopsis">25.4 How To Write A Synopsis</h3>
          <p>Even though your synopsis is not your story and will not show off your writing ability, you ideally want your synopsis to make your publisher think, ‘I want to read that’. Yes, the synopsis will inevitably water down and spoil your plot and remove all mystery, but realistically, if the publisher doesn’t feel interested by the end of your synopsis, what’s going to convince them to read the manuscript and subsequently want to publish your story?</p>
          <p>Remember, your publisher is a business person. They are not thinking primarily about picking up your manuscript for enjoyment. They are thinking about marketing – the ‘pitch’ or the ‘sell’ or the ‘hook’. </p>
          <p>Side note: Whether your synopsis is any good doesn’t just depend on the synopsis itself, but also, obviously, your actual product – the story. If you have the reputation you can convince the publisher to publish almost anything. The plot of your first novel needs to be like a flash-bang grenade (gets your attention instantly); subsequent novels can effect more like smoke grenades (subtler, more gradual, but just as powerful). There are some kinds of plots which are big smokers; about which a seasoned writer can get published (on the back of their reputation), and which a first time author cannot.</p>

          <p>Bob Mayer says:</p>
          <p className="indent-8 mb-2">“Some best-selling authors can crank out anything—which would not get published if a no-name author did it—and have it become a best seller,” and “[…] just because you can go to the bookstore and buy a best-selling book written by so-and-so, the famous writer, that does not mean you can write a similar book and get it published[…] there are many book number 5's from best-selling authors that if they were book number 1 from a new author, would not get published.”
            <FootnoteRef text="Bob Mayer, Fiction Writers’ Toolkit." />
          </p>

          <h4>21.4.1 Basic Rules</h4>
          <h5>(1) Obey Your Publisher's Style Guide</h5>
          <p>Read their submission requirements regarding font, margins, file format, and do what they say. It goes without saying.</p>

          <h5>(2) Fight the temptation to ‘sex’ up (i.e. dress up) your manuscript </h5>
          <p>I mean, crazy fonts, colours, designs, proposed book cover art, tying it up with a red bow, etc. To you, it may look like you love your story so much you want to put the extra effort in to make it look ‘pretty’. But to a publisher it says you’re desperate for some pretty veneer to apologise for typos, a boring plot, dull characters, weak writing, etc. Also, it will seriously backfire when the publisher comes across a typo or other error, because it’ll look like you’ve misapplied your time and effort to selecting a stylish font, when you could’ve been subjecting your work to another proofread. </p>

          <h5>(3) Write your synopsis in present tense</h5>
          <p>For example, '... Bill goes to investigate the noise and finds his girlfriend's maimed, lifeless body...' Present tense will make your story sound like it's happening and it's now, and you need all the help you can get in making your story sound punchy and action-packed. Past tense sounds like you're telling an informal anecdote (and waters down action by suggesting everyone lived to tell the tale in the future). Future tense sounds too gimmicky, e.g. '...Bill goes to investigate the noise, not realising that he is about to have his world destroyed...' Rather than say 'Bill is about to XYZ', why not just say what he actually sees?</p>

          <h5>(4) Avoid Redundancy</h5>
          <p>Considering how short your synopsis should be, that last thing you want to do is waste precious words repeating yourself. Here’s an example: </p>
          <p><code><i>When Sally's mother dies unexpectedly, Sally is left reeling and barely able to cope. At the funeral, Sally drops to the ground and screams until her relatives take her out. </i></code></p>
          <p>The bit about Sally ‘reeling’ and unable to cope is redundant because if she falls to pieces at the funeral, it goes without saying that she is reeling and barely able to cope. You could rewrite it as:</p>
          <p><code><i>Sally’s mother dies unexpectedly. At the funeral, Sally drops to the ground and screams until her relatives take her out. </i></code></p>

          <h4>21.4.2 The 3-Step Method</h4>
          <p>When writing a synopsis you might be tempted to set out your plot in detail and then cut it down to the size requirement (e.g. 2 pages). The difficulty there is you might struggle to grasp which plot points in your story are integral, compared to details which you can leave out. </p>
          <p>Another way of doing it, however, is to go the opposite route – start tiny and expand:</p>
          <p>Step 1: three sentences:</p>
          <ol>
            <li>The Set-Up</li>
            <li>The Switch</li>
            <li>The Settlement (Pay-Off)</li>
          </ol>

          <p>In their simplest form, all stories are about change and usually (ideally) the change involves conflict. If it helps you remember, think of the 3-steps as a magic trick: </p>
          <ol>
            <li>(1)	The Pledge: you show something normal, implying a promise that you will turn it into something else;</li>
            <li>(2)	The Turn: you change the thing into something else;</li>
            <li>(3)	The Prestige: you bring the thing back.</li>
          </ol>

          <p>In a story, the pledge is the set up: the normal state of affairs with the promise of a change (positioned to the switch). The Turn is the switch; demolition of the normal state of affairs. The Prestige (the settlement) is the return of normal in a new form, a new normal. You don’t bring back the ‘old’ state of affairs, even if you do literally, the characters have changed in the process.</p>
          <p>I’ll use Stephen King’s ‘Pet Sematary’ to illustrate the function of each step:  </p>

          <ol>
            <li>L moves near an ancient burial ground which has the power to resurrect the dead.</li>
            <li>When L's son dies, he buries him in the burial ground, resurrecting him.</li>
            <li>After L’s possessed son kills L’s wife, L goes insane and buries her body at the burial ground.</li>
          </ol>

          <p>Explanation of the steps:</p>

          <ol>
            <li><strong>(1) The Set-Up</strong> This does two things:
              <ol>
                <li>It establishes your baseline normal; it gives an incredibly succinct point of focus on the most important ‘items’ in your story; your main character and your main plot feature: ‘who’ are we looking at, and ‘what’ are we looking at?</li>
                <li>It creates a position in order for the ‘switch’ to occur. This means the set-up is not just ‘status quo,’ but one step removed. You must be able to get from set-up to switch – there is no set up in normality, rather, the set up rises up out of normality. The set up it’s not the very start of the novel,  i.e. it’s not, ‘L lives at Ludlow with his wife and 2 kids’, rather it’s the first plot-related event, the event which kicks off the central plot;</li>
              </ol>
            </li>
          </ol>

          <p>Another example, a set-up is not ‘Once upon a time a girl moved to a new house,’ it’s ‘Once upon a time, a girl moved to a new house where a closet led to another world.’ You can’t get from ‘New House’ to ‘Narnia’ in one step, but you can get from ‘New Closet’ to ‘Narnia.’ Just note this, as it’s very easy to mistake the ‘set-up’ for the ‘switch.’</p>
          <p>Notice how in my 3-step Pet Sematary example, the magic burial ground is in step 1. This sounds counterintuitive because a magic burial ground isn’t ‘normal’, but in the ‘Pet Sematary’ world, it is normal; it exists; it’s real, the characters better believe it. The burial ground doesn’t belong in step 2 because it hasn’t yet ‘changed’ anything; it’s always existed.</p>

          <ol>
            <li><strong>(2) The Switch</strong>You outline the most important thing that first changes from baseline ‘normal’. This is that switch that shifts the rails and re-routes the train. From the story’s outset, the plot train was forecast as heading from A to B, after the switch, it’s heading to C. Maybe there are a lot of switches, but you need to offer the first one, or sum them up generally.</li>
            <ol><li>In Pet Sematary, the switch isn’t the cat’s death or resurrection, or even the kid’s death, even though they change the characters, it doesn’t change the trajectory of the plot. From the set-up (moving house) the kid was fated to die. The switch is the resurrection of the kid, because that’s what re-routes the plot’s ‘train’ – protagonist didn’t have to resurrect him, but now he has, it changes everything.  </li>
            </ol>
          </ol>

          <ol>
            <li><strong>(3) The Settlement</strong>this is where you establish a new normal for your characters. You never take them back around to where they began in the ‘set-up’, because they should have changed (otherwise your step 2 is pointless) – unless in the exceptional case your novel is a Sisyphean tale about the ironic futility of your character’s actions; but even this involves a change from your protagonist’s belief that their action will take them from position A to B, to the new, disillusioned belief that their action will take them from A to A. </li>
            <p>Maybe you give the characters back what they had previously, but they’ve still changed because they now appreciate what they have even more. The new normal might be good, bad or comparable but it should be somehow different, or at least (particularly in the Sisyphean example), it looks the same but the reader views it differently.</p>
          </ol>

          <p>It looks easy to write up your 3 steps when you already know the plot, but it’s much harder when you have, say, 10 different plot elements. That’s why I’m trying to break this down as much as possible.</p>
          <p>Here’s a closer look at the 3-step example:</p>

          <ol>
            <li>L moves near an ancient burial ground which has the power to resurrect the dead (Set-up).</li>
            <li>When L's son dies (switch), he buries him in the burial ground, resurrecting him (Settlement).</li>
            <li>After L’s possessed son kills L’s wife (switch), L goes insane and resurrects her body at the burial ground (Settlement).</li>
          </ol>

          <p>The Set-up creates a 'promise' that someone will die die and be buried at the spot and be resurrected. This narrows and focuses your options for the remaining two steps;</p>
          <p>A switch flows from and fulfils the promise</p>
          <p>The first settlement repeats the set-up-to-switch progression until the story's finale </p>

          <p>You can see above that each step partway determines the succeeding step, that is, a good 3 step structure will follow a logical and natural course. You don’t need to throw a bizarre, left-field spanner in at every turn, or even at any turn. Let the story write itself as much as possible.</p>

          <p>Step 2: Expanding:</p>
          <p>Now you want to expand your summary to 5-6 sentences. Then you can expand to 8, 9 or 10 sentences, and you can keep expanding and refining until you hit your word requirement. </p>
          <p>See below for my method of expanding:</p>

          <p><u><strong>THE EVENT/EFFECT METHOD</strong></u></p>
          <p>You can use this method in addition to the 3 step method (above), alternatively, you can exclusively rely on this method to build a synopsis. </p>
          <p>Start thinking in terms of the language of ‘events’ and ‘effects’. An event is something that happens; an effect is the character’s response to the event, which tends to drive them towards the next event, which creates the next effect, and so on. If you do this properly you give your plot trajectory a natural, plausible momentum, and if you’re lucky, your plot writes itself.</p>
          <p>Events don’t have to be strictly sequential; e.g. you can introduce events without prior causes, but there has to be a subsisting thread throughout the entire plot. </p>
          <p>Structure a roadmap by starting with all the events, then pairing them with effects, or you could do the whole lot together. As rough estimate, aim for about 10 events (each paired with an effect), but adjust accordingly. I say ‘paired’ loosely, as events and effects don’t have to be paired to the exclusion of other events and effects – events could, for instance have cumulative and subsisting effects, so that events way back at the start are still having continuing effects later on.</p>
          <p>As an example, let’s divide Pet Sematary into events and effects – a key word here is ‘incentives’ or motivation; if you characters don’t have them, this is where it’s going to show, because the ‘events’ need to ‘effect’ your character to the next ‘event’. The coloured parts are (very loosely) the 3 steps (above), the set-up (red); the switch (blue), and the settlement (green):</p>

          <ol><li><strong>Event:<span className="text-hRed"> L moves to Ludlow;</span></strong>
            <ol><li><strong>Effect: </strong>Dangers are introduced into L and his family’s lives; the remoteness of the area, and dangerous road;</li>
            </ol>
          </li>

            <li><strong>Event:</strong> L saves his neighbour’s wife through his medical background;
              <ol><li><strong>Effect: </strong>The neighbour decides to pay back L by taking him to the nearby burial ground which can resurrect the dead;</li>
              </ol>
            </li>

            <li><strong>Event: </strong>L's cat is killed
              <ol><li><strong>Effect: </strong>L is compelled to bury the cat in the burial ground to prevent his daughter finding out that it died;</li>
              </ol>
            </li>

            <li><strong>Event: </strong>L uses the burial ground and the cat is resurrected;
              <ol><li><strong>Effect: </strong>The cat acts strange, disturbing L and his family;</li>
              </ol>
            </li>
            <li><strong>Event: </strong>Raising his concern to the neighbour, L is warned about those previously resurrected;
              <ol><li><strong>Effect: </strong>L is discouraged from further use of the burial ground</li>
              </ol>
            </li>

            <li><strong>Event: </strong>L’s son is hit by a truck and killed;
              <ol><li><strong>Effect: </strong>L is tempted to use the burial ground again;</li>
              </ol>
            </li>

            <li><strong>Event: <span className="text-cyan">L buries his son in the burial ground;</span></strong>
              <ol><li><strong>Effect: </strong>L’s son is resurrected, and is a demonic version of himself;</li>
              </ol>
            </li>

            <li><strong>Event: </strong>L’s resurrected son kills the neighbour and his mother, L’s wife;
              <ol><li><strong>Effect: </strong>L’s wife’s death gives L renewed motivation to use the burial ground</li>
              </ol>
            </li>

            <li><strong>Event: <span className='hGreen'>L buries his wife in the burial ground, and she returns to the house, in no better state than L’s son;</span></strong>
              <ol><li><strong>Effect: </strong>The magnitude and stress borne by L in managing his wife’s death, and undertaking the terrifying task of burying her in the burial ground, causes L to go insane.</li>
              </ol>
            </li>
          </ol>

          <p>Notice how this structure breaks the plot into two kinds of information: (1) a physical happening, action or behaviour, followed by; (2) what the character thinks of feels about the event, which suggest the action the character will take next. Reading only the events gives you the basic plot. Reading only the effects gives you the basic character arc. There is a problem if, at any stage, the character’s thoughts or feelings do not match the character’s subsequent actions. </p>
          <p>At this point you can keep adding detail as required. You’ll find compared to a top-down method, with one of these two bottom-up methods it is easier to keep the size of your synopsis/summary controlled.</p>

          <h3 id="post-what-is-a-logline">25.5 What Is A Logline?</h3>

          <p>In Dante’s Inferno, the punishment of writing a logline sits between the 5th-6th level of Hell. You do it over and over until you get it right (you never do). If it sounds scary, don’t worry, you have to murder about 10 people to be punished with it in the afterlife. </p>
          <p>A logline is your story in one sentence. In screenwriting they sometimes call this an ‘elevator pitch,’ the idea being that your pitch should not exceed the duration of a standard elevator ride. A publisher may not even be that generous.</p>
          <p>An obvious example: the logline for ‘Pride and Prejudice and Zombies’ would be ‘Pride and Prejudice, with Zombies.’</p>
          <p>A less obvious example: for ‘Harry Potter and the Philosopher’s Stone’ – ‘A young boy learns he is a wizard on his tenth birthday, and goes to a wizarding boarding school to learn magic.’</p>
          <p>There is no ‘perfect’ logline, and different authors will phrase loglines slightly differently, but all loglines (at least, for the same story) will converge on the same ideas.</p>

          <h3 id="post-the-purpose-of-a-logline">24.2 The Purpose of a Logline</h3>
          <p>Some publishers demand them. Even if the publisher doesn’t ask for it, it’s worth writing one anyway, because you can use it for marketing your story; even if you’re published your publisher may or may not require you to do marketing activities, like book signings, interviews, etc. Having a rehearsed line is better than making something up on the spot, or rambling, or accidentally spoiling your story to a potential reader. </p>
          <p>Even if no one ever sees your logline, it’s still useful for personal, story-planning purposes. It tells you what your story is supposed to do, and gives you a simple direction to follow. When you get lost or your story gets too complicated, you can look at your logline and remind yourself what you’re writing.</p>
          <p>A bad logline may be a warning bell that your story sucks. When all it takes is writing one single sentence, wouldn’t you rather save time doing that litmus test, than discovering it after committing 150,000 long words?</p>

          <h3 id="post-features-of-a-good-logline">24.3 Features of a Good Logline</h3>
          <p>Blake Snyder lists features of good loglines, including:
            <FootnoteRef text="Blake Snyder, Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of." />
          </p>

          <h4>24.3.1 	Irony</h4>
          <p>A good logline uses irony to grab the reader’s interest – irony, not merely coincidence. I defined irony above; remember the difference between irony (opposite) and coincidence (similarity).</p>
          <p>Using a logline for Harry Potter and the Philosopher’s Stone as an example:</p>

          <p className="indent-8 mb-2"><u>Coincidental Logline:</u> A young boy who lives with his magical relatives, discovers he is also a wizard. </p>
          <p className="indent-8 mb-2"><u>Ironic Logline:</u> A young boy who lives with his magical relatives, discovers he is also a wizard. </p>

          <p>It’s easy to see which logline is makes for a more interesting story.</p>

          <p>Here are some more examples of ironic loglines:</p>
          <p className="indent-8 mb-2">A cop comes to L.A. to visit his estranged wife and her office building is taken over by terrorists.<FootnoteRef text="Die Hard, (1988)." /> </p>
          <p className="indent-8 mb-2">A businessman falls in love with a hooker he hires to be his date for the weekend.<FootnoteRef text="Pretty Woman, (1990)." /> </p>

          <h4>24.3.2 	Entire Story</h4>
          <p>A good logline will comprise a compelling mental picture. It will ignite the promise of your whole story, i.e. you know where it’s going to go. You may not know down to precise detail, but you’ll get the gist of the overall structure; the protagonist, their goal, their obstacle, and the possible outcome/s.</p>

          <h4>24.3.2 	Killer Title</h4>
          <p>I dealt with this already, but a good logline is completed with a good title. If pressed for time, the two bits of information a person will want about your story is the logline, and the title. A publisher might not care so much about the title, but the general public do.</p>
          <p>A good title says what it is; like the logline, what you read is what you get. </p>

          <h4>24.3.3 	Logline Template</h4>
          <p>Blake Snyder  has a ready template to construct a logline around a straightforward ‘A Story’:</p>
          <p className="indent-8 mb-2">[On the verge] of a [Stasis = Death moment], a flawed protagonist [Breaks into Two]; but when the [Midpoint] happens, he/she must learn the [Theme Stated], before [All Is Lost]. </p>

          <p><u>"On the verge of" </u> = where the protagonist is when we start the story, before the plot veers them in a different direction</p>
          <p><u>"Stasis = Death"  </u> = the moment the hero realises their life is deficient, an emotional starting point implying needed change. This also explains why the protagonist needs to be 'flawed'</p>
          <p><u>"Breaks into Two"   </u> = what sets this story into motion</p>
          <p><u>"Midpoint"   </u> = the 'no-turning-back' point of the story</p>
          <p><u>"All is Lost"   </u> = the moment the protagonist is worse off than when the story started</p>
          <p><u>"Theme Stated"   </u> = what the story is about</p>

          <p>He provides some example loglines for famous films:</p>
          <p className="indent-8 mb-2">On the verge of another "suit and tie" assignment, a tomboy FBI agent goes undercover as a contestant in the American Miss Pageant; but when the pageant receives a new threat, she must learn to be a woman and tough before she's thrown off the case and out of the bureau. (Miss Congeniality) </p>
          <p className="indent-8 mb-2">On the verge of returning to Earth after another routine mission, a rules-obssessed warrant officer lets an unknown alien species onto the ship; but when the creature kills one member of the crew and begins to grow in power, she must do what is right rather than what she's been told or else all on board will meet the same deadly fate. (Alien) </p>

          <p>You can also add some more elements to this ‘B Story’ logline template: </p>
          <p className="indent-8 mb-2">i.e. [On the verge] of a [Stasis = Death] moment, a flawed protagonist has a [Catalyst] and [Breaks into Two] with the [B Story]; but when the [Midpoint] happens, he/she must learn the [Theme Stated], before [All Is Lost], to defeat (or stop) the [flawed antagonist] (from getting away with his/her plan). </p>

          <p><u>"the B Story"   </u> = the love interest, mentor, or group that helps the hero learn the lesson.</p>
          <p><u>"Catalyst"   </u> = the event that sets the story into motion.</p>
          <p><u>"the flawed Antagonist"   </u> = the hero's nemesis or obstacle, and subject to his own flaw.</p>

          <p className="indent-8 mb-2">On the verge of a divorce, a bullheaded street-smart cop is trapped in his wife's office building by terrorists and teams up with a 'desk cop' patrolman to thwart them; but when he taunts the terrorists, and risks exposing his hostage wife's identity, he must learn to adapt to change to outsmart the leader and stop what are really thieves from getting away with a billion-dollar heist.<FootnoteRef text="Die Hard, (1988)." /> </p>
          <p className="indent-8 mb-2">On the verge of losing the girl he loves, a super-powered young man's abilities start to wane as a demented criminal he helped create begins to rain havoc on the city; but when he gives up his crime-fighting ways, he must learn what it means to make a promise, before more innocents die, to save his city from the criminal's super weapon. <FootnoteRef text="Spider-Man 2, (2004)." /> </p>

          <p>If you start with a logline you might want to reverse-engineer your story by structuring a plot around it, along with or in lieu of an E Chain or 3-turn structure. This means designing a couple of scenes to illustrate each element:</p>

          <ol>
            <li>On the verge of...
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>

            <li>Stasis = Death..
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>

            <li>Catalyst...
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>

            <li>Breaks into Two...
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>

            <li>B Story...
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>

            <li>Midpoint...
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>

            <li>Theme Stated…
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>

            <li>All is Lost…
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>

            <li>Flawed Antagonist…
              <ol><li>Scene 1;</li>
                <li>Scene 2;</li>
              </ol>
            </li>
          </ol>

          <p>This is only an example. In reality, you may need to rearrange elements and alter how many scenes they generate. But it’s a starting point to experiment with. The advantage of starting with structure is you aim to have a full outlined story before you start writing it. You troubleshoot plot issues long before sinking time into writing. This is the opposite approach of most fiction dabblers, and in my opinion, only lets them down; wasting time labouring under the sunk cost fallacy trying to fix a broken plot only because they’ve come so far with it.</p>
          <p>Once you've got your scenes, you can start giving them beats. Snyder says you can structure scenes in the above way: giving each scene a ‘catalyst’ and ‘midpoint’ and ‘all is lost’ etc, in bitesize forms. Maybe that’s too pedantic at this stage, but it’s possible. Every scene starts with a hero, an expectation, an obstacle, a change, a possible reward or goal and a possible ‘death.’ And if your scenes don’t have these beats, then where’s the momentum and interest?</p>

          <h3 id="post-loglines-need-causation">24.4 Loglines Need Causation</h3>
          <p>In this age of loglines and elevator pitches we're pressured to think of our stories as single sentences which encapulate the entire plot. You can make your story idea so simple that it obliterates causation, which doesn't help in the planning stages, where you're trying to link necessary plot events together. </p>

          <p>Compare these summaries:
            <FootnoteRef text="The Virgin Suicides, Jeffrey Eugenides." />
          </p>

          <p><u>Logline #1</u></p>
          <p>Some girls inexplicably commit suicide</p>

          <p><u>Logline #2</u></p>
          <ol>
            <li>A girl inexplicably commits suicide; </li>
            <li>Her parents and the community fail to respond;</li>
            <li>The girl's sisters commit suicide.</li>
          </ol>

          <p>Both summaries work to simplify the plot -- neither is incorrect -- but if the story hadn't yet been written and you were at the front-end of story planning, which summary would help you more? Probably summary #2 because it implies causation.</p>

          <h3 id="post-what-is-an-effective-title">25.9: What is An Effective Title?</h3>

          <p>Some writers may defer this stage until they finish the story, but I recommend creating a list of possible titles for your story as you write it, continually adding or subtracting from the list as you think of a new one. </p>
          <p>Effective titles tend to have some things in common:</p>

          <ol>
            <li>They contain metaphors;</li>
            <li>They contrast unalike things;</li>
            <li>They are eye-catching or provoke interest;</li>
          </ol>

          <p>However, your title might be eye-catching for other reasons:</p>

          <ol>
            <li>It provokes debate and controversy, e.g. <i>Rape: A Love Story</i>
              <FootnoteRef text="Rape: A Love Story, Joyce Carol Oates." />
            </li>
            <li>It overturns commonly accepted moral positions, e.g. <i>Live and Let Die</i>
              <FootnoteRef text="Live and Let Die, Ian Fleming." />
            </li>
            <li>It makes an oddly specific designation, e.g. <i>Fahrenheit 451</i> by Ray Bradbury</li>
            <li>It creates an image you don’t normally see in real life, e.g. <i>Flow my tears, the policeman said</i>
              <FootnoteRef text="Flow My Tears, the Policeman Said, Philip K. Dick." />
            </li>
            <li>It suggests an answer to an age-old mystery, e.g. <i>The Da Vinci Code</i>
              <FootnoteRef text="The Da Vinci Code, Dan Brown." />
            </li>
            <li>It makes a witty or ironic observation, e.g. <i>When You Look Like Your Passport Photo, It's Time to Go Home</i>
              <FootnoteRef text="When You Look Like Your Passport Photo, It's Time to Go Home, Erma Bombeck." />
            </li>
            <li>An evocation of something exotic, e.g. <i>Water for Elephants</i>
              <FootnoteRef text="QWater for Elephants, Sara Gruen." />
            </li>
          </ol>

          <p>Other effective titles:</p>
          <ol>
            <li><i>Do Androids Dream of Electric Sheep? </i>
              <FootnoteRef text="Do Androids Dream of Electric Sheep?, Philip K. Dick." />
            </li>
            <li><i>I, Robot </i>
              <FootnoteRef text="I, Robot, Isaac Asimov." />
            </li>
            <li><i>I Have No Mouth and I Must Scream </i>
              <FootnoteRef text="I Have No Mouth and I Must Scream, Harlan Ellison." />
            </li>
            <li><i>Atlas Shrugged </i>
              <FootnoteRef text="Atlas Shrugged, Ayn Rand." />
            </li>
            <li><i>The Postman Always Rings Twice </i>
              <FootnoteRef text="The Postman Always Rings Twice, James M. Cain." />
            </li>
            <li><i>The Big Sleep </i>
              <FootnoteRef text="The Big Sleep, Raymond Chandler." />
            </li>
            <li><i>War of the Worlds </i>
              <FootnoteRef text="War of the Worlds, H. G. Wells." />
            </li>
          </ol>

          <h3 id="post-tips">25.10: Tips</h3>

          <p>Go for shorter, punchier titles.</p>
          <p>Should evoke interest, make the person want to pick up the book and start reading. If a horror story, should raise a suggestion of horror, i.e. 'that sounds scary'. Avoid genre-bending, i.e. a horror story with a 'soft' title misleadingly making it sound like a sentimental drama.</p>
          <p>Some horror stories already have great titles. Draw inspiration from them, but don't downright copy.</p>
          <p>Should link to a key theme of the story. For instance, if you wanted to write a story about 'X', title should be about X, or converging on it.</p>
          <p>Should be something not overused (if used at all) in the story. For instance, avoid in-story lines which create conspicuous 'title drops'. </p>
          <p>It doesn't have to lay the whole story out bare once you 'get' the title. It could merely raise questions or a line of inquiry. In other words, it doesn't contain an 'answer' to a thematic question, rather it is a thematic question itself. The title shouldn't contain an answer to a thematic question as to remove the point of reading the book itself, because the title gives the answer.</p>
          <p>Apply the 'person you know' or 'person on the street' test: Could you say that you've written a story under that name to a person you know or a person on the street without feeling silly?</p>

          {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

          <hr id="post-marketing-comments" className="my-6 border-t border-gray-400" />
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
            <p className="font-source-code-pro text-xs mt-1">The synopsis, logline, and title are marketing tools and summaries used to pitch a central story idea to publishers, readers, or the general public.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="fn">
              <li><a href="#post-purpose-of-a-synopsis" className="hover:underline hover:text-white">25.1&nbsp;&nbsp;&nbsp;&nbsp;Purpose of a Synopsis</a></li>
              <li><a href="#post-what-is-a-synopsis" className="hover:underline hover:text-white">25.2&nbsp;&nbsp;&nbsp;&nbsp;What Is A Synopsis?</a></li>
              <li><a href="#post-the-value-of-a-synopsis" className="hover:underline hover:text-white">25.3&nbsp;&nbsp;&nbsp;&nbsp;The Value of a Synopsis</a></li>
              <li><a href="#post-how-to-write-a-synopsis" className="hover:underline hover:text-white">25.4&nbsp;&nbsp;&nbsp;&nbsp;How To Write A Synopsis</a></li>
              <li><a href="#post-what-is-a-logline" className="hover:underline hover:text-white">25.5&nbsp;&nbsp;&nbsp;&nbsp;What Is A Logline?</a></li>
              <li><a href="#post-the-purpose-of-a-logline" className="hover:underline hover:text-white">25.6&nbsp;&nbsp;&nbsp;&nbsp;The Purpose of a Logline</a></li>
              <li><a href="#post-features-of-a-good-logline" className="hover:underline hover:text-white">25.7&nbsp;&nbsp;&nbsp;&nbsp;Features of a Good Logline</a></li>
              <li><a href="#post-loglines-need-causation" className="hover:underline hover:text-white">25.8&nbsp;&nbsp;&nbsp;&nbsp;Loglines Need Causation</a></li>
              <li><a href="#post-what-is-an-effective-title" className="hover:underline hover:text-white">25.9&nbsp;&nbsp;&nbsp;&nbsp;What is an Effective Title?</a></li>
              <li><a href="#post-tips" className="hover:underline hover:text-white">25.10&nbsp;&nbsp;&nbsp;&nbsp;Tips</a></li>
              <li><a href="#post-marketing-comments" className="hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="/themes" className="hover:underline hover:text-white">Themes</a></li>
              <li className="mb-px"><a href="/scenes" className="hover:underline hover:text-white">Scenes</a></li>
              <li className="mb-px"><a href="/description" className="hover:underline hover:text-white">Description</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Marketing;