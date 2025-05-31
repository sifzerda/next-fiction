// src/app/premise.js
"use client"; 
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import FootnoteRef from '../../components/FootnoteRef';
import premiseBanner from '../assets/premisebanner.jpg'; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";

function Premise() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">Premise</h1>

        <blockquote className="text-sm italic mb-2">
          “Whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Herman Hesse</span>
        </blockquote>
        <blockquote className="text-sm italic mb-2">
          “When the storytelling goes bad in society, the result is decadence.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Aristotle</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={premiseBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-storytelling" className="mb-2 font-semibold">1.1 Storytelling</h3>

          <p className="text-sm mb-4 font-rubik">
            The most important skill you need to write fiction is storytelling. Robert McKee defines storytelling as: <i>“the creative conversion of life itself to a more powerful, clearer, more meaningful experience.” </i>
            <FootnoteRef text="Robert McKee, Story, Substance, Structure, Style and the Principles of Screenwriting." />
          </p>

          <p className="text-sm mb-4 font-rubik">
            He says the essence of storytelling is the ability to evoke a story with a single, silent image. That is the basis of what a storyteller is trying to do.
          </p>

          <h3 id="post-whatisastory" className="mb-2 font-semibold">1.2 What is a Story?</h3>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.2.2 The Opposite of Expectation</h4>

          <p className="text-sm mb-4 font-rubik">A story is an event where the opposite of expectation happens, and the more dramatic the contrast,
            the more interesting the story. This rule applies, not only to stories as a whole, but parts of stories: Acts, chapters, paragraphs, even
            single sentences. A single unexpected sentence can kick off a story.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.2.3 	More than a Series of Events</h4>

          <p className="text-sm mb-4 font-rubik">A story is not simply a random series of events. A series of events becomes a &#39;story&#39; when there is some
            extra element —an overarching unifying factor— which transforms the events into a new thing in itself, with a whole greater than the sum of its
            parts, such that if you took away any piece, it would revert back to being a random series of events.</p>

          <p className="text-sm mb-4 font-rubik">This unifying factor is what the story is &#39;really&#39; about, and should itself be simple; expressible in little
            more than a single sentence.</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="font-bold py-1">A Series of Events:</p>
            <p className="text-sm">
              He got up early and went to the gym. Then he went into town and got a haircut. Then he bought a bottle of wine at the liquor store. Later, he
              washed his car, and picked up his clothes from the dry cleaners. That night he drove to the restaurant and went in. He greeted all the people,
              said happy birthday to the girl and gave her the wine. Everyone ate and drank, and talked. But he did not talk to the girl at all. Then people
              began to leave. The girl refused to open his wine, but took it home with her instead.</p>

            <hr className="my-6 border-t border-gray-400" />

            <p className="font-bold py-1">A Story:</p>
            <p className="text-sm">He got up early and went to the gym. Then he went into town and got a haircut. Then he bought a bottle of
              wine at the liquor store. Later, he washed his car, and picked up his clothes from the dry cleaners. That night he drove to the restaurant and
              went in. He greeted all the people, said happy birthday to the girl and gave her the wine. Everyone ate and drank, and talked. But he did not
              talk to the girl at all. Then people began to leave. The girl refused to open his wine. They had it at her place, instead. But they didn&#39;t talk
              much there, either.</p>
          </div>

          <p className="text-sm mb-4 font-rubik">
            In the first example, the series of events is vague and unconnected. But in the story, all the events build up and make sense at the conclusion –
            every detail had a reason to be there; nothing was random or trivial. The series of events has an overall meaning.
          </p>

          <p className="text-sm mb-4 font-rubik">
            In other words, if someone asked you what (1) was about, you could say, a guy goes to a party. But if someone asks you what it meant, you don&#39;t know.
            If someone asks you what (2) was about, you can say, a guy goes to a party. If someone asks you what it meant, you can say, the guy likes the girl, and we
            find out she likes him back. All of the details are used to communicate this. More than pure chronological content, self-contained meaningfulness is the indicator of a story.
          </p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.2.4 	An Explosion</h4>
          <p className="text-sm mb-4 font-rubik">Burnett and Burnett<FootnoteRef text="Hallie & Whit Burnett, Fiction Writer's Handbook." /> say that all stories have an explosion, “...in which all parts of the whole are expelled...”
            piece by piece, “...from an existing pattern — the lives of the characters are jolted from their rhythm, and chaos is produced in their universe.” In some stories the explosion is fast and shattering,
            in others, muted and delayed. It may occur at the beginning, middle or end, or the fuse may be lit early and the explosion happen later, but by the end there must be some kind of resolution or meaning
            created, a sense of something new created from the previous, subverted status quo.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.2.5 	Difference Between &#39;Story&#39; and &#39;Idea&#39;</h4>

          <p className="text-sm mb-4 font-rubik">Bob Mayer<FootnoteRef text="Bob Mayer, Fiction Writer's Toolkit." /> makes a good point that “[an] idea is not [a] story.”  How you tell the idea is the story.
            Different writers can come up with the same idea, but tell different stories. Some good ideas cannot be made into good stories. Conversely, some bad ideas can be made into good stories (you may have
            heard a critic/reviewer say something like, &#39;in the hands of another writer, this idea would not have worked…’)</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.2.6 	Difference between &#39;Story&#39; and &#39;Plot&#39;</h4>

          <p className="text-sm mb-4 font-rubik">You start with an idea, figure out a story, and then work on the plot.</p>
          <p className="text-sm mb-4 font-rubik">The terms &#39;story&#39; and &#39;plot&#39; are often used interchangeably, but don&#39;t mean the same things. The same stories tend to get told and retold, but they always have different plots.</p>
          <p className="text-sm mb-4 font-rubik">A &#39;story&#39; refers to the sequence of events, arranged chronologically, which generate particular meaningfulness. The emphasis is on the events and the order they are arranged in, which creates
            meaning. If visiting an old, decrepit house at night is a main event, we know this refers to the category &#39;ghost story.&#39;</p>
          <p className="text-sm mb-4 font-rubik">Conversely, “[a] plot is what you do with that story,”<FootnoteRef text="Hallie & Whit Burnett, Fiction Writer's Handbook." />  — how you selectively arrange the events chronologically or artistically
            to create particular meaning, emotions or emphasis. Ten stories may all be ghost stories with the same events (haunted house, dead former tenants, cemetery, ghost, etc), but they will have different plots. One may happen within a single day,
            or a single hour (like in Stephen King&#39;s 1408), and by direct first-person events, another may be spaced over hundreds of years and be uncovered through after-the-fact research done by the protagonist.</p>

          <p className="text-sm mb-4 font-rubik">If asked, “what is your story?” you might say, “A ghost story.” If asked, “What&#39;s the plot?” you might then detail the sequence of events which distinguishes your ghost story from other ghost stories. Thus, &#39;story&#39;
            emphasises the commonalities of your work with the broader category of similar &#39;stories&#39;. &#39;Plot&#39; distinguishes your work from the broader category of similar &#39;plots&#39;.</p>

          <p className="text-sm mb-4 font-rubik">If your story is like other good stories, that&#39;s good. If your plot is like other good plots, that&#39;s bad.</p>

          <h3 id="post-mainelementsofstory" className="mb-2 font-semibold">1.3 The Main Elements of a Story</h3>

          <p className="text-sm mb-4 font-rubik">These are the main elements of story structure, in order of priority:</p>
          <FootnoteRef text="Mark Twain." />
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li className="mb-2">PLOT;</li>
            <li className="mb-2">CHARACTERS;</li>
            <li className="mb-2">SETTING;</li>
            <li className="mb-2">THEME.</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">There are roughly two types of stories: (1) stories about people who &#39;rise&#39;
            and end up better off at the end; (2) stories about people who &#39;fall&#39; and end up worse off at the end (even if a
            person ends up where they started, they still may be in a worse position; having lost time or opportunities, or
            not learned anything from their experiences).</p>

          <p className="text-sm mb-4 font-rubik">Throughout your entire planning process you need to bear in mind whether your story is about gain
            or loss. The tone and structure of your whole story will follow. Regardless which applies, there generally needs to be change and conflict.</p>
          <p className="text-sm mb-4 font-rubik">You may have heard of the 'hero's journey' or the typical story structure where the protagonist faces a challenge,
            and must overcome it. Don't feel restricted by these formulas. A group of scientists at the University of California researched thousands of books and
            movie scripts and found that the vast majority of stories actually fall into 6 different categories:
            <FootnoteRef text="Seth Stephens-Davidowitz, Everybody Lies." /></p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li className="mb-2">Rags to Riches (rise);</li>
            <li className="mb-2">Riches to Rags (fall);</li>
            <li className="mb-2">Man in a Hole (fall, then rise);</li>
            <li className="mb-2">Icarus (rise, then fall);</li>
            <li className="mb-2">Cinderella (rise, then fall, then rise);</li>
            <li className="mb-2">Oedipus (fall, then rise, then fall).</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Incidentally they found Harry Potter and the Deathly Hallows (among others) was an exception: in which the hero falls, rises,
            falls, rises, falls, rises, falls, rises, falls, rises, falls, rises, falls, rises, falls, and then finally rises.</p>

          <p className="text-sm mb-4 font-rubik">Roy Clark
            <FootnoteRef text="Roy Peter Clark, Writing Tools: 50 Essential Strategies for Every Writer." />
            lists a number of traditional story structures, many of them ancient archetypes:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li className="mb-2">Winning the Prize;</li>
            <li className="mb-2">Winning or losing a loved one;</li>
            <li className="mb-2">The blessing becomes the curse;</li>
            <li className="mb-2">Overcoming obstacles;</li>
            <li className="mb-2">The wasteland restored;</li>
            <li className="mb-2">Rising from the ashes;</li>
            <li className="mb-2">The ugly duckling;</li>
            <li className="mb-2">The emperor has no clothes;</li>
            <li className="mb-2">Descent into the underworld (The Orphic Myth);</li>
          </ol>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.4.1 Rise or Fall?</h4>

          <p className="text-sm mb-4 font-rubik">This raises the question; should your story (more importantly, your protagonist)
            rise or fall?</p>

          <p className="text-sm mb-4 font-rubik">First, a tangential notion; appreciate your story is not the place for a jeremiad.
            Fiction is a forum for the exploration of viewpoints, not one-sided debate of controversial convictions. Your aim is not
            to preach to your readers and &#39;convert&#39; them.</p>
          <p className="text-sm mb-4 font-rubik">You can only support and develop arguments for non-controversial viewpoints which your
            reader likely held anyway; truisms or even trite-isms are acceptable, such as &#39;love saves,&#39; &#39;misdeeds don&#39;t pay in the long term,&#39;
            &#39;revenge is wrong,&#39; &#39;loyalty and honesty is rewarded in the long term,&#39; &#39;defying wrongful authority is a
            virtue,&#39; &#39;integrity is better than duplicity,&#39; and &#39;stand up for your beliefs,&#39; etc. Your goal is not to present a novel, original,
            controversial argument, but to portray a timeless argument in an original, novel way.</p>

          <p className="text-sm mb-4 font-rubik">More relevantly, if your protagonist stands for timeless values, your story is justified in being a &#39;rise&#39; story,
            because the protagonist&#39;s ultimate triumph validates those undisputed values. Conversely, if your protagonist stands for controversial or just plain wrong values,
            it justifies a &#39;fall&#39; story.</p>

          <p className="text-sm mb-4 font-rubik">This creates an exception to my earlier point against jeremiads; your protagonist can be a &#39;preacher&#39; if they don&#39;t
            ultimately triumph; in this way, you don&#39;t side with your protagonist, rather, you are proving the contrary by deduction (&#39;if the protagonist had not done that,
            he would have succeeded...&#39;). Also, don&#39;t define &#39;triumph&#39; as black/white; think of it as a spectrum — the protagonist who ultimately obtains a large sum of
            money paid with the life of their (innocent) love interest would not count as a &#39;triumph.&#39; Don&#39;t confuse the characters&#39; feelings with the readers&#39;.</p>

          <p className="text-sm mb-4 font-rubik">Also, make the protagonist&#39;s rise/loss proportionate to the radicalism of their beliefs; a protagonist who is spectacularly polarised should
            fail spectacularly; a protagonist whose beliefs are more nuanced or equivocal may fail partly and win partly.</p>

          <h3 id="post-josephcampbellmyths" className="mb-2 font-semibold">1.5 Joseph Campbell’s Myths</h3>

          <p className="text-sm mb-4 font-rubik">No discussion of storytelling would be complete without mentioning Joseph Campbell's universal 'myths,'  his most known being &#39;The Adventure of the Hero,&#39;
            more commonly known as <i>&#39;The Hero&#39;s Journey.&#39;</i>
            <FootnoteRef text="Joseph Campbell, The Hero With A Thousand Faces." /></p>

          <p className="text-sm mb-4 font-rubik">Campbell argues that virtually every story (including folk tales, mythologies and fairy tales) is a variation on his formula.</p>
          <p className="text-sm mb-4 font-rubik">The way the myths manifest in stories is manifold: the myths may occur in stories literally or symbolically, overtly or impliedly, and be present in physical or
            intangible forms. The roles may be occupied by characters — alternatively male or female — multiple characters performing collective roles, singular characters performing multiple roles, animals,
            objects, settings, or other. This gives the journey enormous scope for application.</p>

          <p className="text-sm mb-4 font-rubik">For a detailed summary of the Hero's Journey, see
            <Link href="/herojourney" className="text-midBlue hover:underline">this page</Link></p>

          <h3 id="post-mythsandmisconceptions" className="mb-2 font-semibold">1.6 Myths and Misconceptions</h3>
          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.6.1 Write What You Know</h4>
          <p className="text-sm mb-4 font-rubik">Writers are commonly instructed to &#39;Write what [they] know.&#39; But, as Alice LaPlante says, this can be limiting.
            <FootnoteRef text="Alice LaPlante, The Making of a Story: A Norton Guide to Creative Writing." />
            <i>"Write about what you don't know about what you know," </i> Eudora Welty suggests. Take what you know and create a mystery from it; you might see your accountant
            neighbour leave at one in the morning every Saturday, but where is he/she going?</p>

          <p className="text-sm mb-4 font-rubik">You can write anything you want. Stephen Crane wrote about the American Civil War in The Red Badge of Courage, even though he&#39;d never been to war.
            Your writing will be better if you research your chosen topic/s first, or while writing. Don&#39;t let anyone discourage you from writing about something you have not personally experienced,
            otherwise you risk writing nothing more ambitious than what Robert McKee
            <FootnoteRef text="Robert McKee, Story: Substance, Structure, Style and the Principles of Screenwriting." /> calls &#39;the personal story,&#39; — basically a fictionalized diary entry.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.6.2 	Don&#39;t Take Ideas from Other Writers</h4>
          <p className="text-sm mb-4 font-rubik">Anyone who gives a blanket proscription against &#39;stealing&#39; ideas (it&#39;s not really &#39;borrowing&#39; if you never give them back) is out of touch with writing practice.
            99% of fiction writers are readers of other fiction writers, or &#39;fans&#39;, and hence get their ideas from someone else. However, some forms of &#39;copying&#39; (or more politically correct: &#39;drawing inspiration&#39;)
            are more permissible than others:</p>

          <h5 className="text-sm font-semibold text-midBluey mt-3 mb-1">(1) Steal More</h5>

          <p className="text-sm mb-4 font-rubik">If your &#39;stealing&#39; is easily found out, ironically you&#39;re probably not stealing enough. There&#39;s a saying: <i>“If you steal from one person it&#39;s plagiarism, steal from many, it&#39;s research.”</i>
            Just by reading many different authors on the same idea, or better, across many different kinds of ideas or themes, is going to enrichen your &#39;idea base&#39;, and when it comes to writing your own, the &#39;cross-fertilisation&#39; of ideas
            will mask your tracks, burying the echoes of one author under the echoes of all the others, and making it less clear where one &#39;stolen&#39; idea begins and another ends;</p>
          <p className="text-sm mb-4 font-rubik">Note: Avoid slavishly copy-pasting ideas, even in mass volume. A ton of shit is no less shit than an ounce of shit. Borrow ideas lots of ideas, yes, but borrow selectively. If you think purely having read thousands of stories makes
            you a better writer, note what Robert McKee
            <FootnoteRef text="Robert McKee, Story: Substance, Structure, Style and the Principles of Screenwriting." />
            says about writing &#39;instinct&#39;:</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="text-sm">“...[W]hat the novice mistakes for craft is simply his unconscious absorption of story elements from every novel, film, or play he's ever encountered. As he writes, he matches his work by trial and error against a model built up from accumulated
              reading and watching. The unschooled writer calls this "instinct," but it's merely habit and it's rigidly limiting…But the haphazard groping toward or revolt against the sum of unconsciously ingrained repetitions is not, in any sense, technique, and leads to screenplays
              clogged with clichés of either the commercial or the art house variety.”</p>
          </div>

          <h5 className="text-sm font-semibold text-midBluey mt-3 mb-1">(2) Steal Further Back</h5>
          <p className="text-sm mb-4 font-rubik">There&#39;s a variation on the above: <i>"If we steal thoughts from the moderns, it will be cried down as plagiarism; if from the ancients, it will cried up as erudition"</i>
            <FootnoteRef text="Reverend Charles Caleb Colton." />
            So if you want to take from &#39;Dracula&#39;, don&#39;t stop with Dracula itself, but read the origin myths and real life historical background which gave rise to the story.</p>

          <h5 className="text-sm font-semibold text-midBluey mt-3 mb-1">(3) Aim Lower</h5>
          <p className="text-sm mb-4 font-rubik">Writers are most tempted to steal from the most widely-known, or idolized, &#39;untouchable&#39; works. For instance, in fantasy, Lord of the Rings. Hypocritically, the writer believes the work cannot be improved. If you cannot improve the original work,
            then why are you trying to get published? What will the public get from your work that Lord of the Rings did not already give them?</p>
          <p className="text-sm mb-4 font-rubik">In contrast, do you remember a time you&#39;ve read a book and thought &#39;How did that turn out so bad? That could&#39;ve been really good.&#39; Those are the books you want to steal from. You want to rewrite the book the way you think it should&#39;ve gone. Even if the story is well
            known, this form of copying is more permissible because you are making active changes to the story.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.6.2 Slavishly adhere to good spelling and grammar</h4>
          <p className="text-sm mb-4 font-rubik">I refer to this misconception later on, but for now I&#39;ll just say this is untrue. You should adhere to conventional grammar and spelling unless your story starts to not make sense if you don&#39;t. &#39;Flowers for Algernon&#39; by Daniel Keyes is a clear example, so much that the story would have been nonsensical
            if perfect grammar had been used from the start.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.6.3 Show don&#39;t Tell</h4>
          <p className="text-sm mb-4 font-rubik">As a basic rule, description which &#39;shows&#39; should be prioritized before description which &#39;tells&#39;. But there are exceptions, such as:</p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>To designate a passage of time separating critical &#39;showing&#39; scenes;</li>
            <li>To provide a break from the intensity of a scene;</li>
            <li>To provide a transition between scenes;</li>
            <li>To describe the character acting on autopilot (e.g. driving for a long period of time without much cognizance of surroundings);</li>
          </ol>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.6.5 	Characters are collections of assorted personality traits</h4>
          <p className="text-sm mb-4 font-rubik">There is writing advice which instructs that characters are basically a bunch of personality traits, as close to real people you know as possible. This is not a helpful way of thinking about character construction.</p>
          <p className="text-sm mb-4 font-rubik">Characters are not meant to be &#39;real people on paper&#39;;  nor are they meant to be a collection of personality traits you think up one rainy day. Characters are motivation. You create characters out of necessity — because you need
            a character to do some particular thing in the story. They are not there, like so much human wallpaper at a high flying party, to stand around looking attractive and telling jokes and blending into the environment. Characters are instruments.</p>

          <h4 className="text-base font-semibold italic text-black mt-4 mb-2">1.6.6 	Verisimilitude, not Truth</h4>
          <p className="text-sm mb-4 font-rubik">It&#39;s no defence to a charge that your story is unbelievable or boring or poorly structured or nonsensical to say &#39;but it was like that in real life.&#39; Lots of things, all kinds of things, happen in real life, and most of them aren&#39;t story-worthy.
            Stories aren&#39;t real life like characters aren&#39;t real people.</p>

          <h3 id="post-philosophyofstory" className="mb-2 font-semibold">1.7 The Philosophy of Storytelling</h3>
          <p className="text-sm mb-4 font-rubik">Misery, Conflict and Struggle are the lifeblood of captivating story. If you don&#39;t want to write about those things, or you can&#39;t, your story won&#39;t be worth telling.</p>

          <p className="text-sm mb-4 font-rubik">Robert McKee
            <FootnoteRef text="Robert McKee, Story: Substance, Structure, Style and the Principles of Screenwriting." />
            puts it better:</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p className="text-sm">“As Jean-Paul Sartre expressed it, the essence of reality is scarcity, a universal and eternal lacking. There isn't enough of anything in this world to go around. Not enough food, not enough love, not enough justice, and never enough time [...] Writers who cannot grasp the truth of our transitory
              existence, who have been mislead by the counterfeit comforts of the modern world, who believe that life is easy once you know how to play the game, give conflict a false inflection. Their scripts fail for one of two reasons: either a glut of meaningless and absurdly violent conflict, or a vacancy of meaningful and honestly expressed conflict.</p>
            <p className="text-sm">The former are exercises in turbo special effects, written by those who follow textbook imperatives to create conflict, but, because they're disinterested in or insensitive to the honest struggles of life, devise phony, overwrought excuses for mayhem.</p>
            <p className="text-sm">The latter are tedious portraits written in reaction against conflict itself. These writers take the Pollyanna view that life would really be nice ... if it weren't for conflict. Therefore, their films avoid it in favor of low-key depictions to suggest that if we learned to communicate a little better, be a little more charitable,
              respect the environment, humanity could return to paradise. But if history has taught us anything, it's that when toxic nightmare is finally cleaned up, the homeless provided shelter, and the world converted to solar energy, each of us will still be up to our eyebrows in mulch.”</p>
          </div>
          <p className="text-sm mb-4 font-rubik">Yikes.</p>

          <h3 id="post-medium" className="mb-2 font-semibold">1.8 Medium</h3>
          <p className="text-sm mb-4 font-rubik">It&#39;s worth considering whether your story makes the most of your chosen medium (writing/literature). Your story might make a great film, or video game, but a poor novel. Right now, audiences love superhero comics, superhero films and superhero video games, but no one reads superhero novels. The superhero genre seems to need images to work.</p>
          <p className="text-sm mb-4 font-rubik">Compare with horror. Most horror is uniquely suited to written media because it&#39;s largely &#39;visual-avoidant&#39; by undermining visual and direct information in favour of other forms (inference, sound, anecdote, etc). For instance, in horror, the last thing you want to do is give away the 'visual' or the 'sighting' prematurely (if at all). Not to say visual horror
            is ineffective — it has the intensity of fireworks, but unfortunately, also has the lifespan of fireworks. The visual horror creator has to keep contriving to put the source of horror out of sight &#39;until later.&#39;</p>
          <p className="text-sm mb-4 font-rubik">The novel 'Bird Box'
            <FootnoteRef text="Bird Box, Josh Malerman." />
            is a perfect example of visual-avoidant horror&#39;s efficacy: the plot involves monsters invading earth which, if you look at, you go crazy. A film requires a lot of narrative and camera gymnastics to get around this glaringly visual-avoidant plot point. Whereas, the same concept has no problem in literature: if it's not seen,
            it's not described. End of story.</p>
          <p className="text-sm mb-4 font-rubik">Same with crime fiction; it&#39;s purpose is to keep certain visual information (the criminal, the crime itself) hidden from you for as long as possible. This makes it literature-friendly.</p>
          <p className="text-sm mb-4 font-rubik">Romance also has distinct literary appeal over visual media. You could argue it's a downside that you don't see the romantic interests, but on the positive side, you get to fill in their appearances with your own preferences — or yourself. Visual media cannot &#39;self-insert&#39;; and (as Hollywood&#39;s star system testifies) the actor&#39;s likeability is a huge barrier to engagement.</p>
          <p className="text-sm mb-4 font-rubik">On the other hand, notice how the Verne-style 'adventure' novel has all but died in literature, but survives in film and video game? The &#39;Western&#39; has gone one step further, dying in literature and film, but surviving in video game.</p>
          <p className="text-sm mb-4 font-rubik">Genres that work in writing:</p>

          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Horror;</li>
            <li>Romance/Erotica;</li>
            <li>Art/Indie;</li>
            <li>Crime;</li>
            <li>Weird Fiction;</li>
            <li>Thriller;</li>
            <li>Political;</li>
            <li>Post/Modern/Subversive;</li>
            <li>Hard Sci-Fi;</li>
            <li>Complex or High Fantasy;</li>
            <li>Historical;</li>
            <li>Philosophical;</li>
            <li>Experimental;</li>
            <li>Psychological;</li>
            <li>Postmodern;</li>
            <li>Metafiction;</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Genres that work in visual media (film video games):</p>
          <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
            <li>Adventure;</li>
            <li>Horror</li>
            <li>Romance;</li>
            <li>Western;</li>
            <li>Action;</li>
            <li>Space Opera;</li>
            <li>High Fantasy;</li>
            <li>Simple Historical;</li>
            <li>Superhero;</li>
          </ol>

          <p className="text-sm mb-4 font-rubik">Some genres are equally effective across both mediums, but operate
            distinctly different. An example being comedy: in written medium, humour is reliant on how you tell the joke,
            i.e. the language itself. Poor language can ruin a funny situation. In film, humour is derived from situation, acting and reaction.</p>

          <p className="text-sm mb-4 font-rubik">There are no firm rules about these distinctions, but if you want to work out whether your story is
            better suited for literature or film (or other media), consider:</p>

          <ol className="list-decimal list-inside mb-6 mt-6 space-y-2 font-rubik">
            <li>
              Is the plot complicated or straightforward?
              <ol className="list-decimal list-inside ml-6 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  Intricately complex plots suit literature because books give people pause to think and rationalise.
                </li>
              </ol>
            </li>
            <li>Is the story reliant on visual information?
              <ol className="list-decimal list-inside ml-6 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  Less visual stories work better as literature, whereas stories which rely on visualization work better as a film;
                </li>
              </ol>
            </li>
            <li>Is critical information metered out gradually until a big reveal at the end?
              <ol className="list-decimal list-inside ml-6 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  This can work well as literature;
                </li>
              </ol>
            </li>
            <li>Did critical events happen in the past?
              <ol className="list-decimal list-inside ml-6 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  This suits literature which is less focused on showing the ‘here and now’ than film
                </li>
              </ol>
            </li>
            <li>
              Is there a long history spanning hundreds of years, a large cast of near hundred/s, or other risk of
              'information overload'?
              <ol className="list-decimal list-inside ml-6 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  This suits literature, which has more time and endurance to deal with detail density, which would fatigue a film (and blow its budget)
                </li>
              </ol>
            </li>
          </ol>

          <h3 id="post-pixarstorytelling" className="mb-2 font-semibold">1.9 Pixar Storytelling</h3>
          <p className="text-sm mb-4 font-rubik">Animation company Pixar has a list of tips which it has used in its films:</p>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside mb-4 mt-4 font-rubik">
              <li>You admire a character for trying more than for their successes.</li>
              <li>You gotta keep in mind what&#39;s interesting to you as an audience, not what&#39;s fun to do as a writer. They can be v. different.</li>
              <li>Trying for theme is important, but you won&#39;t see what the story is actually about til you&#39;re at the end of it. Now rewrite.</li>
              <li>Once upon a time there was ___. Every day, ___. One day ___. Because of that, ___. Because of that, ___. Until finally ___.</li>
              <li>Simplify. Focus. Combine characters. Hop over detours. You&#39;ll feel like you&#39;re losing valuable stuff but it sets you free.</li>
              <li>What is your character good at, comfortable with? Throw the polar opposite at them. Challenge them. How do they deal?</li>
              <li>Come up with your ending before you figure out your middle. Seriously. Endings are hard, get yours working up front.</li>
              <li>Finish your story, let go even if it&#39;s not perfect. In an ideal world you have both, but move on. Do better next time.</li>
              <li>When you&#39;re stuck, make a list of what WOULDN&#39;T happen next. Lots of times the material to get you unstuck will show up.</li>
              <li>Pull apart the stories you like. What you like in them is a part of you; you&#39;ve got to recognize it before you can use it.</li>
              <li>Putting it on paper lets you start fixing it. If it stays in your head, a perfect idea, you&#39;ll never share it with anyone.</li>
              <li>Discount the 1st thing that comes to mind. And the 2nd, 3rd, 4th, 5th — get the obvious out of the way. Surprise yourself.</li>
              <li>Give your characters opinions. Passive/malleable might seem likable to you as you write, but it&#39;s poison to the audience.</li>
              <li>Why must you tell THIS story? What&#39;s the belief burning within you that your story feeds off of? That&#39;s the heart of it.</li>
              <li>If you were your character, in this situation, how would you feel? Honesty lends credibility to unbelievable situations.</li>
              <li>What are the stakes? Give us reason to root for the character. What happens if they don&#39;t succeed? Stack the odds against.</li>
              <li>No work is ever wasted. If it&#39;s not working, let go and move on - it&#39;ll come back around to be useful later.</li>
              <li>You have to know yourself: the difference between doing your best & fussing. Story is testing, not refining.</li>
              <li>Coincidences to get characters into trouble are great; coincidences to get them out of it are cheating.</li>
              <li>Exercise: take the building blocks of a movie you dislike. How do you rearrange them into what you DO like?</li>
              <li>You gotta identify with your situation/characters, can&#39;t just write &#39;cool&#39;. What would make YOU act that way?</li>
              <li>What&#39;s the essence of your story? Most economical telling of it? If you know that, you can build out from there.</li>
            </ol>
          </div>

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
            <p className="font-source-code-pro text-xs mt-1">A story is a collection of events which altogether create a meaningful whole that is greater than the sum of its parts.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-storytelling" className="hover:underline hover:text-white">1.1 Storytelling</a>
              </li>
              <li className="mb-px">
                <a href="#post-whatisastory" className="hover:underline hover:text-white">1.2 What Is A Story?</a>
              </li>
              <li className="mb-px">
                <a href="#post-mainelementsofstory" className="hover:underline hover:text-white">1.3 The Main Elements of a Story</a>
              </li>
              <li className="mb-px">
                <a href="#post-josephcampbellmyths" className="hover:underline hover:text-white">1.5 Joseph Campbell’s Myths</a>
              </li>
              <li className="mb-px">
                <a href="#post-mythsandmisconceptions" className="hover:underline hover:text-white">1.6 Myths and Misconceptions</a>
              </li>
              <li className="mb-px">
                <a href="#post-philosophyofstory" className="hover:underline hover:text-white">1.7 The Philosophy of Storytelling</a>
              </li>
              <li className="mb-px">
                <a href="#post-medium" className="hover:underline hover:text-white">1.8 Medium</a>
              </li>
              <li className="mb-px">
                <a href="#post-pixarstorytelling" className="hover:underline hover:text-white">1.9 Pixar Storytelling</a>
              </li>


            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/premise" className="hover:underline hover:text-white">Premise</a>
              </li>
              <li className="mb-px">
                <a href="/plot" className="hover:underline hover:text-white">Plot</a>
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