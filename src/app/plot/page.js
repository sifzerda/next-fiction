// src/app/plot.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import plotBanner from '../assets/plotbanner.jpg';
import Image from "next/image";
import threeRt from '../assets/3rt.jpg';
import crossArrow from '../assets/crossarrow.jpg';
import chiasticStructure from '../assets/chiasticStructure1.png';

function Plot() {
  return (
    <Layout>

      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1>Plot</h1>

        <blockquote>
          “For the purposes of [a story] a convincing impossibility is preferable to an unconvincing possibility.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Aristotle</span>
        </blockquote>
        <blockquote>
          “The King died and then the Queen died is a story. The King died, and then the Queen died of grief, is a plot.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— E. M Forster</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={plotBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto -mt-5 px-4 text-black flex flex-col-reverse md:flex-row gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-plotting-in-a-vacuum">3.1: Plotting in a Vacuum</h2>
          <p>You might have more stories than the Burj Khalifa. But stories aren&#39;t enough; you&#39;ve got to know what to do with them.</p>
          <p>At the front-end of story creation, writers tend to think: 'What do I already know, and how can I make a plot based on what I already know?'</p>
          <p>What you should be asking is, 'What is an ideal plot, and what do I need to know to write it?'</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-how-to-create-suspense">13.2 How to Create Suspense</h2>
          <p>One way of providing suspense is, obviously, to stubbornly refuse to provide a resolution until the very end of the story.</p>
          <p>The problem is your conflict risks going ‘cold&#39; for the reader; they might assume the conflict is of no importance and probably won&#39;t be resolved by the end, and subsequently stop reading.</p>
          <p>Alternatively, you want to provide build ups of suspense on the way to the resolution; making small promises which add up to your resolution being really worthwhile, whilst reminding the reader that the conflict hasn&#39;t been forgotten, and teasing that the end will provide the answer.</p>
          <p>I like Sol Stein&#39;s
            <FootnoteRef text={`SOL STEIN,\nOn Writing.`} />
            workmanlike definition of suspense as where the reader wants something to happen and it isn&#39;t happening yet, or the reader wants something to stop, and it doesn&#39;t. However, it doesn&#39;t capture the variety of ways you can invite suspense into your story. The reader might: </p>
          <ol>
            <li>want something to happen, or </li>
            <li>want something to <i>not</i> happen, or  </li>
            <li>not know, of multiple, terrible outcomes, which is worse, or  </li>
            <li>of a ‘too good to be true&#39; outcome, how it could go wrong, or  </li>
            <li>of a guaranteed confrontation, when the confrontation will actually occur, and under what circumstances, etc. </li>
          </ol>

          <p>The layman definition of suspense tends to associate suspense building with raising the stakes. That is one form of suspense building but it&#39;s not the only one. In order to build suspense, all you need to do is supply information, or create events which lend the final outcome more weight.</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-types-of-plots">3.2: Types of Plots</h2>
          <p>Robert McKee
            <FootnoteRef text={`ROBERT MCKEE,\nStory: Substance, Structure, Style and the Principles of Screenwriting.`} />
            makes the distinction between three different kinds of plots:
          </p>

          <ol>
            <li>Archplot (the &#39;Hero&#39; story)</li>
            <li>Miniplot (the &#39;journey&#39; story)</li>
            <li>Antiplot (the &#39;not a logical story&#39; story)</li>
            <li>Nonplot (the &#39;not a story&#39; story)</li>
          </ol>

          <p>McKee strongly advises writers not to start writing plots (2) — (4) until they&#39;ve mastered the Archplot. This is because the other plots are subversions of the Archplot; they take its elements and alter or challenge or remove them. You can&#39;t do that effectively unless you&#39;re highly familiar and confident with use of those elements in the first place. In other words, you must pass the foundation course (the Archplot) before you can move on to the advanced course (Miniplot, Antiplot and Nonplot).</p>

          <h3>3.2.1 	Archplot</h3>
          <p>Your standard kind of story.</p>
          <p>Typified by:</p>

          <ol>
            <li>Plots structured by physical events;</li>
            <li>Active protagonist</li>
            <li>A closed ending (story threads wrap up and resolve);</li>
            <li>An identifiable protagonist (may be an everyman or larger than life &#39;hero,&#39; but in traits distinguished from the other characters);</li>
            <li>External Conflict (caused by other people, social institutions, or natural forces);</li>
            <li>No intellectual work required by the audience; </li>
            <li>Linear timeframe;</li>
          </ol>

          <p>Example: Star Wars.
            <FootnoteRef text={<><em>Star Wars</em>, Lucasfilm Ltd., (1977).</>} />
          </p>

          <h3>3.2.2 	Miniplot</h3>
          <p>Typified by:</p>
          <ol>
            <li>Minimalism;</li>
            <li>Plots structured by emotional events;</li>
            <li>An open ending (story threads unresolved, some remaining questions);</li>
            <li>Internal Conflict (inner struggles and battles with one&#39;s self);</li>
            <li>Passive protagonist;</li>
            <li>Multiple protagonists; </li>
            <li>Intellectual work required by the audience</li>
            <li>Nonlinear timeframe;</li>
          </ol>

          <p>Example: Lost in Translation.
            <FootnoteRef text={<><em>Lost in Translation</em>, Focus Features, (2003).</>} />
          </p>

          <h3>3.2.3 	Antiplot</h3>

          <p>Typified by:</p>

          <ol>
            <li>Plot structured by coincidence over causation;</li>
            <li>Ridicule, parody, irony and satire;</li>
            <li>Intellectual work required by the audience;</li>
          </ol>

          <p>Example: Seinfeld.
            <FootnoteRef text={<><em>Seinfeld</em>, Castle Rock Entertainment, (1989–1998).</>} />
          </p>

          <h3>3.2.4 	Nonplot</h3>
          <p>The Nonplot is basically is where there isn&#39;t a clear, satisfying conclusion to the events.</p>
          <p>Typified by:</p>

          <ol>
            <li>Plotless;</li>
            <li>Character-driven;</li>
            <li>Intellectual work required by the audience;</li>
          </ol>

          <p>Example: The Big Lebowski.
            <FootnoteRef text={<><em>The Big Lebowski</em>, PolyGram Filmed Entertainment, (1998).</>} />
          </p>

          <p>The difference between the Antiplot and the Nonplot is that the former is generally made in jest or for satirical effect, done in a super-real style. Whereas, the latter is more realistic and may be sobering and insightful.</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-inciting-incident">3.3: The Inciting Incident</h2>
          <p>This is the event which kicks off the plot. It&#39;s the first &#39;unusual&#39; thing which occurs to your protagonist, jarring them out of their normal routine and necessitating their pursuit of the plot-worthy goal in order to return to normal.</p>
          <p>A story where the protagonist one day wakes up and changes their mind about the direction of their life, is weak, vague and lazy. We don&#39;t assume people just do this spontaneously in real life, we assume something happened to cause their change of mind. In real life, we don&#39;t take people&#39;s word for it when they tell us they&#39;ve suddenly decided to change their life; we tend to ask, &#39;why? What caused you to decide this?&#39; or, meaningfully, &#39;Did something happen?&#39;</p>
          <p>The Inciting Incident also suggests your protagonist is not in control; control of their life has been wrestled away from them, and the story is about them reclaiming control. This is more interesting than a character who remains in the driver&#39;s seat of their life the whole time, whatever sudden decisions they make.</p>
          <p>It goes without saying, the inciting incident should be zany, unusual, riveting. It should make the reader wonder what they would do if they found themselves in the same circumstances. It shouldn&#39;t be some throwaway event excused by the fact that more interesting things happen later. If anything, there&#39;s a good argument the inciting incident needs to be one of the most exciting parts of the entire story, because, like a stone hitting the surface of a pond, everything that happens from that point radiates out from the inciting incident.</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-three-act-structure">3.4: Three Act Structure</h2>
          <p>The Three Act Plot is a story formula involving three major changes or reversals of positions for the protagonist. For instance, things are good, then they&#39;re bad, then they&#39;re good again. The Acts are: Good, Bad, Good (if the climax is in the Third Act, you might find the third &#39;Good&#39; only spans the last half/quarter of the Act).</p>
          <p>The first Act might be about 25% of the story. The Second Act will be longer, and then the Third Act will be the shortest, to create a sense of accelerating pace to the climax. Maybe max 25% of the story. The potential problem is that the Second Act drags. Rectifying that may involve adding a subplot/s or another Act (e.g. extending to Good, Bad, Worse, Good).</p>
          <p>McKee
            <FootnoteRef text={`ROBERT MCKEE,\nStory: Substance, Structure, Style and the Principles of Screenwriting.`} />
            suggests a three Act plot needs four memorable scenes (the inciting incident, and each Act&#39;s climax). I would argue for more. The Harry Potter books had scores of memorable scenes which didn&#39;t fit into the above categories: the Quidditch games, the spell classes, sorting hat — there was no end to them. I would also argue that you risk transparency if your memorable scenes are the important ones — you give the reader that many more clues as to how you&#39;ve structured your story &#39;behind the curtain.&#39; The reader will think &#39;oh, this scene&#39;s fairly unmemorable, it mustn&#39;t be integral to the plot.&#39; Memorable &#39;in-between&#39; scenes throw the reader off your trail, because the reader is tempted to include them in a structured analysis of your plot, whereas you know those scenes are decoys for the integral stuff. Never let your reader become more of an expert on your story than you are. Besides, why stop at four? Why not try to make as many scenes memorable as possible?
          </p>
          <p>Blake Snyder
            <FootnoteRef text={`BLAKE SNYDER,\nSave The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of.`} />
            says the 3 acts in a story represent 3 different worlds: Thesis, Antithesis, and Synthesis. Thesis is the world as is. It&#39;s the world and its rules set up for us. Antithesis is the reverse or &#39;upside-down&#39; version or &#39;funhouse mirror reflection&#39; of the world. Characters from &#39;Thesis&#39; may reappear in &#39;Antithesis&#39; in different forms. The Synthesis is a combination of the first two worlds. What the hero had in worlds 1 and 2, becomes the &#39;Third way&#39; in world 3. By this time, the hero has &#39;died&#39; and been &#39;reborn&#39;, so he can&#39;t go back to world 1 as the same person. He returns having learned and retained things from world 2, therefore combining the two in world 3. The change doesn&#39;t have happen instantaneously, it should happen bit by bit — every scene in the structure changes the hero a little.</p>

          <p>There&#39;s another dimension to this structure, two intertwining forces: the hero&#39;s tangible goal (what he wants), and his spiritual goal (what he needs). For instance, the hero may be chased by a monster (tangible goal = to survive), realising that this means his mentor has failed to protect him from it (spiritual goal = security, trust). As the monster closes in, the hero&#39;s awful realisation crystallizes. The hero must ditch the defective belief (that mentor will protect him) to attain the spiritual goal, effecting his transformation (from dependent to self-sufficient), allowing him to ditch the monster, and gain the tangible goal.</p>

          <h3>3.4.1 	Sub-Plots</h3>
          <p>Sub-plots are not only conceptually plots in miniature, they also resemble them in form. They have their own Act structure, Inciting Incidents, and climaxes. However, a sub plot may comprise of a single Act, or more. You can have multiple subplots, and they can overlap. You can also retire subplots for periods at a time, only to resolve them much later. Climaxes for sub-plots and the main plot can also happen in the same scene, e.g. the protagonist defeats the villain (climax of main plot) and by doing so, wins object of affection&#39;s love (climax of subplot).</p>
          <p>McKee
            <FootnoteRef text={`ROBERT MCKEE,\nStory: Substance, Structure, Style and the Principles of Screenwriting.`} />
            also says that main plots and subplots can have different protagonists . My caveat is, if you do this, ensure:</p>

          <div className="custom-box">
            <ol>
              <li>The subplot/s tie back into the main plot&#39;s theme, i.e. the sub-plots are variations on a theme;</li>
              <li>The subplot protagonist lives in the same world, or a connected world to the main protagonist. For example, Atreyu and Bastien in The Neverending Story lived in different worlds, but their worlds were interconnected enough for Bastien to be able to visit Atreyu&#39;s world, and for both characters to affect each other. </li>
              <li>The subplot protagonist&#39;s character reflects the main protagonist&#39;s character, whether alike, a foil, an invert, a branching off parallelism, etc. I.e. the protagonists aren&#39;t completely unrelated people who could just be any random strangers in the street.</li>
            </ol>
          </div>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-three-right-angled-turns">3.5: Three Right-Angled Turns</h2>
          <p>Aristotle
            <FootnoteRef text={`ARISTOTLE,\nPoetics.`} />
            wrote of the “peripeteia,” or “reversal of the situation.”</p>
          <p>At the end of the first act, your protagonist makes a &#39;turn&#39; which sets them off from where they were. Ideally this will be a &#39;diametric&#39; turn (see 6.5 Diametrics). Normally they will end up in a worse position, but might not. Being set off in a different but equal position may be bad, as it requires time and energy for the protagonist to readjust.</p>
          <p>At the end of the second act, your protagonist makes another turn, which sets them off both from their previous position and the starting position. So you can&#39;t just turn them back where they were in starting position (otherwise there is no point to the first act). Take care your narrative doesn't just flip back and forth like this.</p>
          <p>The third turn is a special turn, because it designates the ending. Your protagonist can&#39;t just make a right turn into anywhere; they have to end up somewhere that completes the narrative. For the purpose of your third turn, note that, if you make three right-angled turns, you end up heading in the same direction you began:</p>

          <Image
            src={threeRt}
            alt="Three Right-Angled Turns"
            width={200}
            height={200}
            className="my-4" />

          <p>To ensure the turn is diametric, each time your protagonist makes a turn, work out where your protagonist is (their current position) and where they appear to be heading (their direction, motivation, goals, objectives), and either flip it, or contrast it in some major way.</p>

          <h3>3.5.1 	Doubling: &#39;Doppelgängers and &#39;Flips&#39;</h3>
          <p>For instance, a protagonist police officer may be framed for a crime, prosecuted by the police force, and get sentenced to prison, where he befriends some of the prison inmates. Previously he saw the police as good, and the prison inmates as bad, but after the right angle turn (he gets convicted for a crime) he begins to see the police as bad and prison inmates as good.</p>
          <p>A &#39;doppleganger&#39; is where that character, setting, or story element remains the same, but is duplicated, and the double is contrastingly different, if not entirely the opposite (like the &#39;good twin, evil twin&#39; cliché).</p>
          <p>For instance, a character finds a portal to a fantasy world, which contain vague doubles of their real world counterparts (the Wizard of Oz
            <FootnoteRef text={<><em>The Wizard of Oz</em>, Metro-Goldwyn-Mayer, (1939).</>} />
            “…and you were there…and you were there…” idea). Often there is some kind of threshold dividing the doppelgängers, but there doesn&#39;t have to be. The more obvious the double, the more of a border exists between them — virtual twins are almost guaranteed to never meet. The more subtle a double, the more ability they can interact with their double. The point of this rule is, characters should not be aware they are doubles.</p>
          <p>The double is a concept related specifically to right-angle turn plots (right angles bestow double status), compared to a foil who is not necessarily a double, nor do they require a right-angle to exist. A double&#39;s existence is predicated on their &#39;twin&#39; — apart from which, they don&#39;t really have a reason to exist. Whereas, a foil isn&#39;t dependent on its partner, rather, its traits have been adjusted to maximize contrast with another character.</p>
          <p>In both cases, the effect is to give the protagonist a new perspective.</p>

          <h3>3.5.2 	Examples of Three Right Angle Turns</h3>
          <p>To illustrate the concept in its entirety I&#39;ll use the examples of two very different stories: Beauty and the Beast,
            <FootnoteRef text={<><em>Beauty and the Beast</em>, Walt Disney Pictures, (1991).</>} />
            and The Shawshank Redemption.
            <FootnoteRef text={<><em>The Shawshank Redemption</em>, Columbia Pictures, (1994). Based on the novella <em>Rita Hayworth and Shawshank Redemption</em> by <span className="uppercase font-bold text-yellow-400">STEPHEN KING</span>, from the collection <em>Different Seasons</em>, (1982).</>} />
          </p>

          <p className="text-sm mb-4 font-rubik font-bold">#1 Beauty and the Beast:</p>

          <div className="custom-box">
            <ol className="numbered">
              <li>Act 1:
                <ol>
                  <li><span className="bg-yellow">[Protagonist's starting position]</span> Country village</li>
                  <li>[Protagonist's direction] dreams of fairytale romance in some distant location with prince.</li>
                  <li>Act 1 right angle: [New position] Scary castle with monster.</li>
                </ol>
              </li>
              <li>Act 2:
                <ol>
                  <li><span className="bg-yellow">[Position]</span> Captive of monster in scary castle</li>
                  <li><span className="bg-llllBlue">[Protagonist's direction]</span> dreams of fairytale romance in some distant location with prince.</li>
                  <li>Act 2 right angle: <span className="bg-volt">[New position]</span> Falling in love with monster.</li>
                </ol>
              </li>
              <li>Act 3:
                <ol>
                  <li><span className="bg-yellow">[Position]</span> Falling in love with monster.</li>
                  <li>Act 3 right angle: <span className="bg-volt">[New position]</span> Monster is not a monster but prince.</li>
                  <li>Conclusion: Protagonist ends up where they dreamed of in the first place.</li>
                </ol>
              </li>
            </ol>
          </div>

          <p className="text-sm mb-4 font-rubik font-bold">#2 The Shawshank Redemption:</p>
          <div className="custom-box">
            <p className="text-sm mb-4 font-rubik underline">Act 1: </p>
            <ol>
              <li>[Protagonist&#39;s starting position] Protagonist&#39;s wife cheating on him </li>
              <li>[Protagonist&#39;s direction] possibly leave her, try to get her back, or get revenge.</li>
              <ol>
                <li><span className="underline">Act 1 right angle:</span> [New position] Scary castle with monster.</li>
              </ol>
            </ol>

            <p className="text-sm mb-4 font-rubik underline">Act 2: </p>
            <ol>
              <li>[Position] protagonist in prison, lowest standing on the prison&#39;s social hierarchy, not coping  </li>
              <ol>
                <li><span className="underline">Act 2 right angle:</span> [New position] protagonist makes friends and gets a better standing </li>
              </ol>
            </ol>

            <p className="text-sm mb-4 font-rubik underline">Act 3: </p>
            <ol>
              <li>[Position] Protagonist coping in prison  </li>
              <ol>
                <li><span className="underline">Act 3 right angle:</span>  [New position] Protagonist escapes prison </li>
              </ol>
            </ol>

            <p>Conclusion: Protagonist ends up where they should have been in the first place.</p>

          </div>

          <h3>3.5.3 	Sub- Three Right Angle Turns</h3>
          <p>Beauty and the Beast is the poster child for the right-angle turn structure, and provides yet more examples. One example is in song themes. The songs &#39;Belle&#39;, &#39;Be Our Guest&#39; and &#39;Kill the Beast&#39; are all about belonging and exclusion (the remaining song) :</p>

          <ol>
            <li>Belle: the inhabitants of the setting (village) are telling an excluded/different character (Belle) she doesn&#39;t belong; </li>
            <li>Be Our Guest: the inhabitants of the setting (castle) are telling the excluded/different character she does belong;</li>
            <li>Kill the Beast: the inhabitants of the setting (village again) are once again reinforcing that an excluded/different character does not belong (now, the Beast);</li>
            <li>Bonus; &#39;Beauty and the Beast&#39;: the inhabitants (castle staff) reinforce the belonging of the two excluded/different characters (Belle, Beast) with each other. Symbolically, since they are the victors of the battle, their song is taken as the &#39;victory song&#39;; i.e. whatever they say is the &#39;truth&#39; or the winning argument.</li>
          </ol>

          <p>Notice the structure of these songs as an argument: team 1 makes a claim; team 2 rejoinders; team 1 reinforces its claim; team 2 reinforces its rejoinder, and ultimately wins the argument.</p>
          <p>Also notice the strategic spacing of the songs: if the film was divided into four acts, each of these songs would roughly correspond to each of these acts: beginning, end of second act halfway point, climax, denouement.</p>
          <p>Beauty and the Beast is a love story; you might ask where does the theme of love fit into this structure? Importantly, each of these songs is separated by an inciting incident which acts as the &#39;turn&#39;:</p>

          <ol>
            <li>Belle getting imprisoned in the castle (motivated by her love for her father) turns to &#39;Be Our Guest&#39;;</li>
            <li>Belle staying at the castle after the wolf attack (motivated by her love for the Beast) turns to Kill the Beast;</li>
            <li>Beast returning to human form (because of Belle&#39;s love for him) turns to&#39;Beauty and the Beast&#39;;</li>
          </ol>

          <p>Each of the inciting acts symbolizes love, and results in a reply song symbolizing belonging. Love is the act, and belonging is the effect (or, countered by the antagonists; love is the threat and exclusion is the effect).</p>

          <hr /> {/* ---------------------------------------------------------*/}

          <h2 id="post-chiastic-structure">3.6: Chiastic Structure</h2>
          <p>A chiastic structure exists where the narrative creates a symmetrical pattern, e.g. if scenes include A,B, and C, then a chiastic structure might go: A, B, C, C, B, A. If you&#39;re musically inclined, this resembles counterpoint.</p>
          <p>&#39;Chiastic&#39; originates from the Greek word &#39;Chiasmus&#39; meaning &#39;crosswise arrangement,&#39; i.e. —</p>

          <Image
            src={crossArrow}
            alt="Chiastic Structure Arrows"
            width={100}
            height={100}
            className="my-4" />

          <p>Chiastic structure can effect a sense of &#39;circularity,&#39; or going full circle, returning the reader back where they started. Elements are introduced, and then, as if a mirror reflection, are re-addressed and resolved in corresponding (backwards) order.</p>
          <p>Here is an example of the Chiastic structure of the Genesis Flood Narrative:
            <FootnoteRef text={`The Bible,\nGen 1:1-50.`} />
          </p>

          <Image
            src={chiasticStructure}
            alt="Chiastic Structure"
            className="w-full max-w-sm h-auto my-6 mx-auto"
          />

          <h3>3.6.1 	Sub-Chiastic Structure</h3>
          <p>As plots may contain sub-plots, chiastic structures may contain sub-chiastic structures. To do this, take one of the items on your list of elements, e.g. from above: 'G: Flood announced.' Then insert a minor chiastic structure after, before progressing to the next item, e.g.</p>

          <div className="p-3 mb-3 rounded custom-light-box bg-white text-sm font-rubik">
            <div className="space-y-2">
              <div className="ml-0 border-l-2 pl-3 border-gray-300">A: Noah and his sons</div>
              <div className="ml-0 border-l-2 pl-3 border-gray-300">B: All life on earth</div>
              <div className="ml-0 border-l-2 pl-3 border-gray-300">C: Curse on earth</div>
              <div className="ml-0 border-l-2 pl-3 border-gray-300">D: Flood announced</div>
              <div className="ml-4 border-l-2 pl-3 border-blue-400 font-medium text-blue-700">
                G: Flood announced
                <div className="ml-4 border-l-2 pl-3 border-blue-300">
                  G1: 7 days until flood
                  <div className="ml-4 border-l-2 pl-3 border-blue-200">
                    G2: Noah is skeptical
                    <div className="ml-4 border-l-2 pl-3 border-blue-100 text-blue-600 italic">
                      G3: Noah becomes convinced
                    </div>
                  </div>
                  <div className="ml-4 border-l-2 pl-3 border-blue-200">
                    G2: The townspeople are skeptical
                  </div>
                </div>
                <div className="ml-4 border-l-2 pl-3 border-blue-300">
                  G1: 7 days to build the ark
                </div>
              </div>
            </div>
          </div>

          <hr /> {/* -------------------------------------------------  --------------------------------------------- */}

          <h2 id="post-plots-with-problems">3.7: Plots with Problems</h2>

          <h3>3.7.1 	P.R.O.B.L.E.M</h3>
          <p>Bork
            <FootnoteRef text={`ERIK BORK,\nThe Idea: The Seven Elements of a Viable Story for Screen, Stage or Fiction.`} />
            says at the heart of any story is a problem, which need to have seven characteristics, (a little too conveniently) creating the acronym PROBLEM:</p>

          <div className="custom-box">
            <p className="text-sm mb-4 font-rubik text-boldPurple font-bold">Punishing</p>
            <p>It's long (lasts the whole story), every scene is spent trying to solve the problem. It may be complicated or get more complicated as the story goes on.</p>

            <p className="text-sm mb-4 font-rubik text-boldPurple font-bold">Relatable</p>
            <p>Easy to identify with the problem on a human level. We care about the character's struggle, we stay invested.</p>

            <p className="text-sm mb-4 font-rubik text-boldPurple font-bold">Original</p>
            <p>Something about the story is fresh and new, even if fits in conventional storytelling or genre. There is a spark of uniqueness to the idea or the way it's told.</p>

            <p className="text-sm mb-4 font-rubik text-boldPurple font-bold">Believable</p>
            <p>It easy to accept or understand the problem, and feels real, seems driven by identifiable wants, needs and behaviour.</p>

            <p className="text-sm mb-4 font-rubik text-boldPurple font-bold">Life-Altering</p>
            <p>The mission to resolve the problem is of huge importance to the charaters. If the problem isn't solved, life will be unthinkably worse for them. Something critical or primal is at stake. If the problem is solved, things will be much better.</p>

            <p className="text-sm mb-4 font-rubik text-boldPurple font-bold">Entertaining</p>
            <p>The problem-solving process is fun to read and creates the desired emotional responses in the reader.</p>

            <p className="text-sm mb-4 font-rubik text-boldPurple font-bold">Meaningful</p>
            <p>The reader comes away feeling that value has been added to their life, the story was worthwhile and resonates with them beyond the time spent reading it.</p>
            <p>It's get more complicated as the story goes on.</p>
          </div>

          <p>Knowing the story's central problem gives you a head-start to writing the logline.</p>

          <h3>3.7.2 	Bork's Story Problems</h3>
          <p>Bork lists eight main types of story problems:</p>

          <div className="custom-box">
            <ol>
              <li>Someone or something is trying to kill me (or us). </li>
              <li>Someone or something is trying to destroy my life as I know it. </li>
              <li>I have a once-in-a-lifetime but incredibly difficult opportunity to rise up and be somebody, in a big way, that could forever change my sense of self. </li>
              <li>I have to rescue someone from a potentially terrible fate. </li>
              <li>I have to reach a distant and life-changing “prize,” which seems nearly impossible to do. </li>
              <li>I have to defeat powerful “bad guys” who have hurt and/or are threatening innocents. </li>
              <li>I have to escape a terrible situation, which prevents me from living freely and happily. </li>
              <li>I have to win over and/or hang on to a desired life partner, with whom I have a chance at my best life. But something is hugely in the way of that.</li>
            </ol>
          </div>

          <h3>3.7.3 	Snyder's Story Problems</h3>
          <p>BLAKE SNYDER
            <FootnoteRef text={`BLAKE SNYDER,\nSave The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of.`} />
            says all stories centre around one of these 10 problems:</p>

          <div className="custom-box">
            <ol>
              <li><span className="text-boldPurple font-bold">Monster in the House</span> Characters are trapped in a confined space with a 'monster' or dangerous entity out to get them.</li>
              <li><span className="text-boldPurple font-bold">Golden Fleece</span> The 'quest' myth: a hero goes on a journey in search of something, encountering interesting things or people along the way. Normally, by the end, the hero has undergone a personal transformation. </li>
              <li><span className="text-boldPurple font-bold">Out of the Bottle</span> A wish comes true for the protagonist or they get something akin to magic — for better or worse. Doesn't have to be supernatural (e.g. someone accidentally comes into a fortune). The flipside is the wish ends up being a curse.</li>
              <li><span className="text-boldPurple font-bold">Dude with a Problem</span> An ordinary guy (or girl) finds himself in extraordinary circumstances. </li>
              <li><span className="text-boldPurple font-bold">Rites of Passage</span> Involve characters going through traditional milestone events (school, first relationship, wedding, mid-life crisis, etc)</li>
              <li><span className="text-boldPurple font-bold">Buddy Love</span> Two characters navigating plot problems together. Usually the buddies are opposites or in conflict, but learn to cooperate and appreciate each other.</li>
              <li><span className="text-boldPurple font-bold">Whydunnit</span> Normally detective stories, an exploration of human nature and the dark side of humanity.</li>
              <li><span className="text-boldPurple font-bold">The Fool Triumphant</span> Involve an underdog, a 'little, silly, and overlooked man' as protagonist, set against a 'big establishment,'' who in the end is the one made the fool of.</li>
              <li><span className="text-boldPurple font-bold">Institutionalized</span> Involves a group as the protagonist (or the protagonist's being indivisibly part of a larger group). The group may be a family, or have no relation other than all being in the same circumstances, e.g. colleagues, or soldiers, or mental patients. The group dynamic is often crazy and self-destructive, the themes relate to identity and the danger of herd mentality.</li>
              <li><span className="text-boldPurple font-bold">Superhero</span> The opposite of 'Dude With A Problem' — here, an extraordinary guy in an ordinary world. The person might be good or bad or just different. They don't have to be supernatural.</li>
            </ol>
          </div>

          <h3>3.7.4 	Problems with Plots</h3>
          <p>Howard Mittelmark and Sandra Newman list common problems with plots:
            <FootnoteRef text={`HOWARD MITTELMARK AND SANDRA NEWMAN,\nHow NOT to Write a Novel.`} />
          </p>

          <div className="custom-box">

            <p className="text-boldPurple font-bold">I. The Lost Sock</p>
            <p>The plot is too slight or trivial.</p>
            <p>The plot of a story “should be important enough to change someone's life forever.”
              <FootnoteRef text={`HOWARD MITTELMARK AND SANDRA NEWMAN,\nHow NOT to Write a Novel.`} />
              It should also have broad interest — just because you find something fascinating, doesn't mean the broader public does.</p>
            <p className="text-sm mb-4 font-rubik underline">Solutions:</p>

            <ol>
              <li>Ensure your plot revolves around a dilemma involving a 'sex word' (see 6.2 Sex Words);</li>
              <li>Ensure your story is not a thinly veiled excuse for venting or proselytizing;</li>
              <li>Make sure character or plot trivia is brief and in the background, not the foreground.</li>
            </ol>

            <p className="text-boldPurple font-bold">II. The Waiting Room</p>
            <p>The substance of the plot is too long delayed.</p>
            <p>Readers don't want to 'settle into' a story; they want to start from the first sentence.</p>
            <p className="text-sm mb-4 font-rubik underline">Solutions:</p>

            <ol>
              <li>Start the story as late as possible — i.e. as close as possible to the first important scene;</li>
              <li>Smuggle description into active scenes;</li>
              <li>Remove introspection; suggest thoughts and feelings through behaviour and dialogue;</li>
            </ol>

            <p className="text-boldPurple font-bold">III. The Long Runway</p>
            <p>A protagonist's childhood is recounted for no purpose.</p>
            <p>Readers don't need to know everything about your protagonist; only as much necessary for the plot to make sense.</p>
            <p className="text-sm mb-4 font-rubik underline">Solutions:</p>

            <ol>
              <li>Get rid of childhood memories if the plot makes sense without them;</li>
              <li>Smuggle description into active scenes;</li>
              <li>Explicate your protagonist's character through present action and conflict</li>
            </ol>

            <p className="text-boldPurple font-bold">IV. The Vacation Slide Show</p>
            <p>Author substitutes location for story.</p>
            <p className="text-sm mb-4 font-rubik underline">Solutions:</p>

            <ol>
              <li>Settings should be described only to enrichen or add dimension to the plot;</li>
              <li>Settings should be described in a way which says something about the characters who find themselves there (rather than your favourite bits, or the bits remembered best by you)</li>
              <li>Alter or make up parts of settings which serve your plot better.</li>
              <li>Ensure description of the setting is not being 'contaminated' by your personal opinion; e.g. words like 'unbelievable' and 'amazing' are suspect.</li>
            </ol>

            <p className="text-boldPurple font-bold">V. The Smoking Gun</p>
            <p>The reader is unintentionally mislead by details irrelevant to the plot.</p>
            <p>Readers will assume that significant or interesting elements introduced throughout a story will have a payoff later, otherwise the reader may feel cheated.</p>
            <p className="text-sm mb-4 font-rubik underline">Solutions:</p>

            <ol>
              <li>Ensure everything in your story furthers the plot.</li>
            </ol>

            <p className="text-boldPurple font-bold">VI. Don't Mind Him</p>
            <p>A character's problems remain unexplored.</p>
            <p>If characters have their own issues, these need to be resolved.</p>
            <p className="text-sm mb-4 font-rubik underline">Solutions:</p>

            <ol>
              <li>Address problems with their own plot arcs </li>
              <li>Make sure subplots don't overshadow the main plot; otherwise minimize or remove them. </li>
            </ol>

            <p className="text-boldPurple font-bold">VII. The Deafening Hug</p>
            <p>The unintended love interest.</p>
            <p>If a protagonist gives the slightest suggestion of flattering another character, the reader will run with it, inferring the protagonist is in love with the character (no matter how absurd or taboo).</p>
            <p className="text-sm mb-4 font-rubik underline">Solutions:</p>

            <ol>
              <li>Tone down flattering descriptions of characters (particularly physical attributes);</li>
              <li>Draw more focus to characters' flaws (or give them flaws in the first place);</li>
            </ol>

          </div>

          <hr /> {/* -------------------------------------------------  --------------------------------------------- */}

          <h2 id="post-story-planning">3.8: Story Planning</h2>

          <h3>3.8.1 	Bottom-Up and Top-Down</h3>
          <p>Bottom-up (BU) writing means creating the tiny details first, and organising structure and story later. Top-down (TD) writing the opposite.</p>
          <p>Think of it like building a house: BU means laying the bricks first, working out how big each room will be later. TD means sketching your measurements first, so you know how many bricks you'll need, and exactly where they'll go, before you start laying them.</p>
          <p>A writer who says 'I make it up as I go along' is a BU writer.</p>
          <p>BU writing has its advantages. The problem is the writing community is almost exclusively reliant on it, and for the wrong reasons.</p>
          <p>Word count Olympics such as 'NaNoWriMo' and Stephen King's method of setting word count quotas fosters bottom up writing, causing top-down writing skill to atrophy. Pretty soon BU and writing are interchangeable and TD is entirely disregarded.</p>

          <div className="custom-box">
            <p className="text-boldPurple font-bold">Example of BU planning:</p>
            <p>There'll be a character called Dave Driver. He has a moustache. He wears a suit. He's a detective. He is cynical, but always first into office. A lawyer he used to hate became a barrister and then a judge. The judge slips implied insults in at the detective during court hearings. There are two prisons, one called 'The Small Wolf,' and one called 'The Big Wolf,' — ironically, the former is even worse than the latter. Someone smuggles a pet into the prison but it gets killed in a feud which kicks off a revenge sub-plot. Inmates write secret messages on playing cards and pass them to each other. An accused killer hates the sight of blood, but the prosecutor thinks this is faked. When he was a kid, the prosecutor saw someone drown, but didn't alert anyone to help...etc.</p>
          </div>

          <div className="custom-box">
            <p className="text-boldPurple font-bold">Example of TD Planning:</p>
            <p>It'll be a supernatural crime story. In the first Act there'll be a really strange murder. In the second Act the perpetrator is suspected innocent by the unpopular detective, but the body goes missing. In the third Act the detective has to fight the system to prevent the innocent getting executed, and get him out of prison. At the conclusion the victim turns out to be a shapeshifter (or intelligent zombie). The detective fails to prevent execution of the innocent, but he was infected by the zombie anyway, so it's a bittersweet ending as the innocent accepts the execution, but the detective doesn't. In the epilogue, it's implied the execution failed, because the innocent is now a zombie/shapeshifter as well — maybe his body has gone missing from the morgue.</p>
          </div>

          <p>BU planning it takes a long time — if at all — to get an entire plot? But in TD planning you end up with a plot outline really quickly.</p>

          <h3>3.8.2 	Word Generation is not Storytelling</h3>
          <p>Don't get word generation confused with story writing. When you write, making it up as you go along (or start off with BU writing), you're experimenting with idea generation, but you have no story. Remember, from '1.2.3 More than a Series of Events,'' a story is not merely a series of events or details. It has gestalt meaningfulness. The example of BU planning above, is not a story. It's a series of events or details — any one of them can be added or removed without substantive loss or gain. The example of TD planning, above, is a story. You cannot remove any single element without changing the overall meaning.</p>

          <h3>3.8.3 	Plot Pressures</h3>
          <p>In a game of chess you can never play a completely free game where you can make any move you want. You're always under pressure to some extent by your opponent's moves (as your opponent is constrained by your moves).</p>
          <p>In a story, every character's actions are under narrative pressures, being setting, other characters' actions, general events, etc.</p>
          <p>You want the reader to be convinced your protagonist acted naturally the way they did. In a game of chess, if the opponent's queen is available to you, you take it, unless there is a good reason you don't want to win. This is the same in a story; if certain actions are open to the protagonist, and they don't take them -- and there is no previously established reason why -- your character will not be convincing. They will be seen as a puppet.</p>

          <p><span className="font-bold">External pressures</span> tend to be more persuasive than <span className="font-bold">internal pressures</span>. For instance, saying 'the protagonist didn't do X because he's dumb' is an internal pressure; it's easy but bad writing. Bad weather is an external pressure, but it's also easy and unpersuasive. Good pressures tend to be a mix of internal and external pressure foreshadowed in earlier scenes; i.e. protagonist is X type of person, therefore, in a type Y scenario, they're likely to fail. Finding a way to get this info across tacitly within the plot (as opposed to merely being expository) is part of good writing technique. Really good writers get this info across inobtrusively inside exciting plot-moving scenes, without you even realising it; it's only later when the 'Y scenario' eventuates, you flip back and realise it was always heading that way.</p>
          <p>A good story will early on introduce the protagonist as a X type of person (internal pressure) and that a Y type of scenario (external pressure) looms on the horizon. But, also show protagonist averting this — and failing. Then attempting to avert again — and failing. The situation grows more desperate as type Y scenario looms. Finally protagonist must confront type Y scenario.</p>

          <hr /> {/* -------------------------------------------------  --------------------------------------------- */}

          <h2 id="post-romance-three-kinds">3.9: Romance: Three Kinds</h2>
          <p>This tip relates not only to romance genre stories but any plot with two love interests (LI) who get together by the end of the story. There are generally three kinds of romances: Pursuit; Revelation, and Conspiracy.</p>

          <p className="text-boldPurple font-bold">(1) Pursuit</p>
          <p>The protagonist is in love and spends the story actively pursuing their LI. Usually, the LI either doesn't know the protagonist exists, or doesn't know the 'true' protagonist.</p>
          <p>Plot points should work to keep the LIs as apart as possible, motivating the protagonist to re-double his/her efforts to pursuit. This means putting up obstacles in protagonist's way, and making him/her overcome them.</p>
          <p>The LIs need not be kept physically apart. The protagonist may already be very close to the LI, but have some secret true self they have not revealed to the LI (e.g. a superhero alter ego, or something more subtle). For instance, in tragicomic romance Cyrano de Bergerac, love interests Cyrano and Roxane are frequently together and interacting, but never in a relationship, because both characters hide their true desires from each other.</p>

          <h6 className="text-xs text-gray-700 uppercase tracking-wide mt-2 mb-1 font-bold underline">Types of Pursuit</h6>
          <p className="text-sm mb-4 font-rubik font-bold text-midBluey">(A) Direct Pursuit</p>
          <p>If the plot trajectory is a strict pursuit of the LI, the pursuit is 'direct'. The 'rescue' is the most classic form: the LI (e.g. a princess) is kidnapped, and the protagonist (e.g. a knight) goes to save her. The obstacle may be the physical distance separating the LIs, or a dangerous situation or threat. Once the obstacle has been overcome, mutual union is virtually guaranteed.</p>

          <p className="text-sm mb-4 font-rubik font-bold text-midBluey">(B) Pursuit by Proxy</p>
          <p>The protagonist engages in a pursuit whose reward is not the LI themselves, but a resource which will help the protagonist win the LI. This means there are actually two pursuits: the plot obstacle, and winning the LI. Failing the first does not eliminate the second, but conversely, winning the first does not guarantee the second.</p>
          <p>You have latitude to go for a 'Pixar' ending here; regardless of the obstacle outcome (won or lost) it does not represent the story's ultimate resolution. Instead, the protagonist successfully utilizes the lessons learned in the process to win the love interest in an oblique way. It may be creative, but should seem to be simpler or make more intuitive sense; avoid an oblique victory which completely invents a never before referenced method for winning the LI. The victory should not introduce new story material; it's got to conclude everything that's come before.</p>

          <h6 className="text-xs text-gray-700 uppercase tracking-wide mt-2 mb-1 font-bold underline">Potential Pitfalls of Pursuit</h6>
          <p className="text-sm mb-4 font-rubik font-bold text-midBluey">(A) The Love Interest is the obstacle</p>
          <p>The obstacle should not be the protagonist's refusal to accept 'no'. Thus, the obstacle should not be the LI his/herself (i.e. his/her dismissal of the protagonist). The LI should never say 'no.'' If a protagonist pursues a LI who has dismissed them, they have become deluded. The obstacles should hinder protagonist's attempts to so much as get close to the LI, or enable him to ask her out or charm her. This is probably why the cliché 'rescue' is so popular; it's a useful obstacle to keep the LIs apart without any unfortunate intimation the 'damsel' is deliberately separating herself from the protagonist.</p>
          <p>LIs may have disagreements with the protagonist (it's more interesting than a 'yes man' character), but it should be mutual rather than a 'I'm right, you're wrong' scenario. In a good resolution, both characters learn, grow and change, and admit they were wrong before reconciling.</p>

          <p className="text-sm mb-4 font-rubik font-bold text-midBluey">(B) The Love Interest's will is overcome</p>
          <p>Avoid the unfortunate implication that the LI has been overcome by sheer brute force. This is particular problem with the rescue pursuit, where the protagonist has done something so massively favourable to the LI (such as saving their life), the LI is put in an uncomfortable situation where they practically must accept the protagonist as an eligible suitor, compatibility be damned!</p>
          <p>A story may be susceptible to this where the pursuit involves intense or lengthy effort. It militates away from the LI's agency/latitude to select what they want, and characters who lack separate goals from the protagonist are generally weak and un-engaging characters.</p>
          <p>It is more meaningful if the LI has the latitude to choose, but ultimately does select the protagonist freely. You may even emphasize their free choice by putting the LI in a position where selecting the protagonist would entail risks or stakes, and the LI chooses them anyway. This may create a 'reverse pursuit' where the LI bears hardship to pursue the protagonist — much more satisfying than if it was one-sided.</p>

          <p className="text-boldPurple font-bold">(2) Revelation</p>
          <p>The protagonist isn't in love initially, but later in the story, comes to a revelation that they have fallen in love with someone who was there all along.</p>
          <p>In contrast to 'pursuit' the plot should work to keep the LIs as together as possible, even against their personal preferences. There may be some exterior device to justify this: the LIs are members of a team tasked with some objective, and fall in love incidentally, or even at the risk of the objective (to create conflict and suspense). Such a device is especially necessary if LIs despise or deride each other initially.</p>
          <p>An example of the Revelation is Silver Linings Playbook.
            <FootnoteRef text={<><em>Silver Linings Playbook</em>, The Weinstein Company, (2012).</>} />
            The romance type is different depending which LI is the protagonist. From the male's point of view, it's a revelation, but if the female was the protagonist, it would be a pursuit.</p>

          <h6 className="text-xs text-gray-700 uppercase tracking-wide mt-2 mb-1 font-bold underline">Potential Pitfalls of Revelation</h6>
          <p className="text-sm mb-4 font-rubik font-bold text-midBluey">(A) Unlikeable Love Interests</p>
          <p>Conflict in a revelation romance can be heightened the more LIs oppose each other. But oppositional LIs does not mean annoying, confrontational, disagreeing LIs. Sexual tension does not mean characters have to snap at each other over minor disagreements.</p>
          <p>Bad revelations read like stories where LIs sit around all day stewing on how annoying it would be to have sex with the other — incredibly uncompelling. The protagonist should want to have sex with the LI, but it's not open to them in the circumstances — this is what creates the sexual tension; the characters want, but cannot have each other, yet must stick together anyway to complete some plot task. Do not try to hide this fact from the audience, they know better.</p>
          <p>Protagonists who hide behind a resentful fantasy that the LI is annoying and obnoxious shoot themselves in the foot. Either the LI is truly obnoxious, or the protagonist is the obnoxious one for falsely claiming the LI is. Either way, one or both of your characters is obnoxious and risks audience disengagement and sympathy.</p>
          <p>The same rule for obstacles under pursuit romances apply to the obstacles for revelation: characters should be blindsided by the developing romance due to external pressures, not internal pressures. Internal pressures occur inside the characters themselves, e.g. lack of insight that one has a crush, refusal to admit they could ever fall for that type of person, not wanting to be in a relationship, etc. External pressures are forced upon the character from outside: e.g. having to choose between LI and an important assignment/task, spending time with LI ingratiates protagonist into LIs 'world' which has bad points, spending time with LI is necessary but costly, etc.</p>

          <p className="text-boldPurple font-bold">(3) Conspiracy</p>
          <p>It's evident the LIs love each other deeply, but the externalized obstacle is broad and sweeping, possibly global, cultural — the story's entire milieu is the antagonist. It's usually some outside force (e.g. their small-minded community) set upon keeping them apart. There is an understanding the union breaks the accepted rules and customs or infringes some social code, or risks some great harm to society. Alternatively, it may bring about a bad event. Or, maybe nothing bad would happen, rather a good thing would be foreclosed. It doesn't matter if the risk would not happen, only that the antagonist is convinced it would happen — often the conclusion involves realizing the antagonist's dire projections were proven categorically wrong.</p>
          <p>Examples of the conspiracy romance include Romeo and Juliet,
            <FootnoteRef text={`WILLIAM SHAKESPEARE,\nRomeo and Juliet.`} />
            1984,
            <FootnoteRef text={`GEORGE ORWELL,\n1984.`} />
            and Twilight.
            <FootnoteRef text={`STEPHANIE MEYER,\nTwilight.`} />
          </p>
          <p>It may also be an internal obstacle: the LIs own consciences dissuading them from union. It may be mundane: one LI has a medical or mental condition which makes union more challenging. If a protagonist is gradually being destroyed by the relationship's toll or even dies, it almost definitely is a Conspiracy.</p>

          <h3>3.9.1 Main Differences Between the Three Types</h3>
          <p>These romances may overlap, the main distinction where the LIs begin the story, in terms of how they feel towards each other.</p>
          <ol>
            <li>In a <span className="font-bold">Pursuit</span>, the affection is initially unilateral, which is what drives the pursuit. The end goal is the pursuit becoming mutual (the LI reciprocating the affection);</li>
            <li>In a <span className="font-bold">Revelation</span>, the affection is non-existent initially, although not necessarily mutually so — the LI may like the protagonist, but cannot be the converse. The main plot goal drives the story, and the inevitable emergence  of affection creates a kind of obstacle (more accurately, the plot goal is the obstacle of the affection);</li>
            <li>In a <span className="font-bold">Conspiracy</span>, the affection is present initially. The goal is not for the relationship to begin or develop, but to endure. If anything, the relationship may slowly risk eroding or destructing as the story progresses. </li>
          </ol>

          <p>Different types of romance work for different genres: pursuits work well for almost anything, particularly adventure and action, but not horror. Revelation works better in horror. Conspiracy works well for time-period altered stories (set in the future or past) or anything with background lore, but not so well for action or adventure. </p>

          <h3>3.9.2 Other Types</h3>
          <p>There might conceivably be other types of romances, such as romantic tragedies such as 'unrequited romances' or the traditional 'comic' romance where several characters are wrongly paired due to misunderstanding and switch to the correct partners at the conclusion. However, Chris Booker
            <FootnoteRef text={`CHRIS BOOKER,\nThe Seven Basic Plots.`} />
            would probably argue these are merely 'dark' versions of the established types, e.g: </p>
          <p>The unrequited romance is merely a 'dark' pursuit; the protagonist never actually gets the LI.</p>

          <h3>3.9.3 Final Note: Mixing It Up:</h3>
          <p>Making these delineations is not to say a romance must follow them on rails. You might have a romance which fuses different elements of all three.</p>
          <p>For instance, a protagonist starts with a pursuit in the first act. By the end of the first act protagonist has successfully 'won' the LI, but now realizes he/she is different than first appeared (e.g. by deceit or misunderstanding). In the second act, the protagonist is stuck with the LI to the completion of a task, and in the meantime, gives them a second chance, getting to know them better (and accurately). In the third act, the protagonist has a revelation he/she has fallen in love with the accurate LI, but some larger force now conspires to keep them apart (bonus points if it was something the protagonist earlier set off after being insulted by the LIs deceit).</p>
          <p>Beauty and the Beast
            <FootnoteRef text={<><em>Beauty and the Beast</em>, Walt Disney Pictures, (1991).</>} />
            is an example: the first act is a pursuit (Belle seeks a handsome prince via adventure); the second act is a revelation (Belle falls in love with the Beast); the third is a conspiracy (the villagers attempt to keep Belle and the Beast apart).</p>

          {/* ------------------------------------------------- comments Form footnotes --------------------------------------------- */}

          <hr /> {/* ---------------------------------------------------------*/}
          <h1 id="post-plot-comments" className="text-base text-llBlue bg-bootstrapDark p-4">Leave a Comment</h1>

          <CommentForm />
          <CommentList />

          {/* Back to Top Link */}
          <div className="mt-6 text-right">
            <a href="#" className="inline-block px-4 py-2 bg-bootstrapDark text-llBlue rounded border border-llBlue shadow hover:text-yellow hover:border-yellow transition">Back to Top</a>
          </div>

        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4 items-center md:items-start mt-6">
          {/* About Box */}
          <div className="w-full md:w-60 bg-bootstrapDark border border-black text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">About</div>
            <p className="font-source-code-pro text-xs mt-1">A plot maps out the whole core structure of a story, through each scene, from beginning to end.</p>
          </div>

          {/* Index Box */}
          <div id="index-box" className="w-full md:w-60 bg-bootstrapDark  border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-none text-xs leading-tight m-0 p-0 -ml-0">
              <li className="mb-px"><a href="#post-storytelling" className="hover:underline hover:text-white">3.1: Plotting in a Vacuum</a></li>
              <li className="mb-px"><a href="#post-types-of-plots" className="hover:underline hover:text-white">3.2: Types of Plots</a></li>
              <li className="mb-px"><a href="#post-inciting-incident" className="hover:underline hover:text-white">3.3: The Inciting Incident</a></li>
              <li className="mb-px"><a href="#post-three-act-structure" className="hover:underline hover:text-white">3.4: Three Act Structure</a></li>
              <li className="mb-px"><a href="#post-three-right-angled-turns" className="hover:underline hover:text-white">3.5: Three Right-Angled Turns</a></li>
              <li className="mb-px"><a href="#post-chiastic-structure" className="hover:underline hover:text-white">3.6: Chiastic Structure</a></li>
              <li className="mb-px"><a href="#post-plots-with-problems" className="hover:underline hover:text-white">3.7: Plots with Problems</a></li>
              <li className="mb-px"><a href="#post-story-planning" className="hover:underline hover:text-white">3.8: Story Planning</a></li>
              <li className="mb-px"><a href="#post-romance-three-kinds" className="hover:underline hover:text-white">3.9: Romance: Three Kinds</a></li>
              <li className="mb-px"><a href="#post-plot-comments" className="hover:underline hover:text-white">Comments</a></li>
            </ol>
          </div>

          {/* Also See Box */}
          <div id="also-see-box" className="w-full md:w-60 bg-bootstrapDark  border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight m-0 p-0 -ml-0">
              <li className="mb-px"><a href="/story" className="hover:underline hover:text-white">Story</a></li>
              <li className="mb-px"><a href="/premise" className="hover:underline hover:text-white">Premise</a></li>
              <li className="mb-px"><a href="/title" className="hover:underline hover:text-white">Title</a></li>
            </ol>
          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Plot;






/*

<div className="p-3 mb-3 rounded custom-light-box">
                  <div className="chiastic">
                    <div className="a">A: Noah and his sons (Gen 6:10)
                      <div className="b">B: All life on earth (6:13:a)
                        <div className="c">C: Curse on earth (6:13:b)
                          <div className="d">D: Flood announced (6:7)
                            <div className="e">E: Ark (6:14-16)
                              <div className="f">F: All living creatures (6:17–20 )
                                <div className="g">G: Food (6:21)
                                  <div className="h">H: Animals in man’s hands (7:2–3)
                                    <div className="i">I: Entering the Ark (7:13–16)
                                      <div className="j">J: Waters increase (7:17–20)
                                        <div className="x">X: God remembers Noah (8:1)</div>
                                      </div>
                                      <div className="j">J: Waters decrease (8:13–14)</div>
                                    </div>
                                    <div className="i">I': Exiting the Ark (8:15–19)</div>
                                  </div>
                                  <div className="h">H': Animals (9:2,3)</div>
                                </div>
                                <div className="g">G': Food (9:3,4)</div>
                              </div>
                              <div className="f">F': All living creatures (9:10a)</div>
                            </div>
                            <div className="e">E': Ark (9:10b)</div>
                          </div>
                          <div className="d">D’: No flood in future (9:11)</div>
                        </div>
                        <div className="c">C': Blessing on earth (9:12–17)</div>
                      </div>
                      <div className="b">B': All life on earth (9:16)</div>
                    </div>
                    <div className="a">A: Noah and his sons (9:18,19a)</div>
                  </div>
                </div>





*/ 