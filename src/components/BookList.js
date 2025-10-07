"use client";

import BookCard from "./BookCard";

export default function BookList() {
  const books = [

    {
      title: "1984",
      author: "George Orwell",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "About a dystopic future set in an unspecific year where a concentrated form of extreme fascist-communist-totalitarian government reigns. Important work and probably the only dystopia fiction about the annihilation of objective truth as a means to maintain dominance.",
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      image: "https://covers.openlibrary.org/b/id/12707887-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "A satire of the illusory promises of Communism, using a farm as metaphor. A good amusement on a serious topic.",
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "A dystopia where the corporate enterprise is unrestricted and essentially medicates people with consumables from the cradle to the grave. Unfortunately, there is some analogous subtext in BNW indicating that we need to get back in touch with our spiritual side to make these problems go away (unless the religion of the traditional world is intentionally ironically contrasted with the ‘religion’ of consumerism?).",
    },
    {
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "I read this a long time ago, but am sticking it here because it's great and noteworthy. Throughout the story Alice jumps down a long rabbit hole, observes time slowing, grows and shrinks, and debates truth, rationality and the prevailing order with the head of the local authority. This is actually about mathematics; author was a mathematician and disputed some of the new ‘crazy’ mathematics being developed in his day (multiple infinities, imaginary numbers, quaternions) – making fun of this is probably the book’s intent. It also has lots of wordplay – author evidently has a penchant for puzzles, riddles and paradoxes which intersects maths and English. The book is fantastically strange.",
    },
    {
      title: "To Kill A Mockingbird",
      author: "Harper Lee",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status: "Finished.",
      review: [
        <>
          Novel about racism in a small US town, the attempts of a local defense attorney to represent an innocent black man, and told from the point of view of his young daughter. Frequently championed for its anti-racist themes, and character Atticus Finch (although that was shot down like a duck in the belated sequel, <span className="italic">‘Go Set a Watchman’</span> which demasks Finch as a pro-segregationist – ouch for those people who named their kids ‘Atticus’; anyone?). Otherwise the most you could say is it captures childhood and how children apprehend the world.
        </>
      ]
    },
    {
      title: "Catcher In The Rye",
      author: "J.D. Salinger",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Unfinished.",
      review:
        "Novel about the teenage angst of a 17 year old boy going through the growing pains associated with the age-group. Acclaimed or remembered with nostalgia if you relate to this character. Not much good if you don’t. My indifference could be relative; when I was this age kids said ‘fuck’ and ‘faggot’ not ‘crumbum’ and ‘flit’ (if you said ‘crumbum’ you would’ve been laughed out of town).",
    },
    {
      title: "The Virgin Suicides",
      author: "Jeffrey Eugenides",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "A novel about a group of sisters who commit suicide for mysterious reasons (or none), to the bemusement of a group of boys narrating the story, trying to put together what happened, but opportunities for critical inquiry are passed up, slyly making it more of a ‘mock’ mystery; the sense they just don’t ‘get it,’ or don’t want to. An indictment on middle-class suburban 'don't ask don't tell' and 'look the other way' attitudes to mental disturbance and the Christian taboo of suicide being a sin. Another writer might have been satisfied with one suicide to focus the book around, but you've got to admire the fierce conviction in having so many suicides to really drive the point home -- without becoming unintentionally funny -- and the critical examination is better for it; uncanny, sad, needless and avoidable. It’s difficult to write suicide into a story without it going horribly wrong, which makes this book – which goes above and beyond – even more impressive.",
    },
    {
      title: "Dracula",
      author: "Bram Stoker",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review: [
        <>
          Horror novel where several characters recount their disturbing experiences whilst visiting a Transylvanian castle as guest of ‘Count Dracula.’ Commonly framed as the quintessential ‘vampire’ novel and conception of vampire clichés like stakes through the heart, sleeping in coffins, turning into bats, and Eastern European accents, this is more a Faustian story seen from the wrong angle; impliedly Dracula has sold his soul to the Devil in exchange for wealth, power and immortality, at the price of a curse requiring him to suffer an unquenchable thirst for human blood (‘Dracul’ is Romanian for ‘Devil,’ and the character was apparently inspired by real life ‘Vlad the Impaler,’ aptly a ‘bloodthirsty’ monarch of Romania). The deeper horror in the story (at least for a more Victorian-era reading public of the time) was the concept of a Devil worshipper acquiring such unopposable power and charm, as close as possible to the incarnation of the Devil himself, and elusively invading the village and doing his evil (including conversions of local villagewomen into his unholy brides) while everyone is asleep.
        </>,

        <>
          As horror, most of it doesn’t hold up anymore. Dracula climbing up the castle wall evokes Spider-man. However, the grim dead-of-the-night disinterment subplot with Van Helsing is still some of the creepiest horror I’ve ever read – and surely must have inspired the similarly frightening burial scene in Stephen King’s <span className="italic">Salem’s Lot</span>, and the disinterment in <span className="italic">Pet Sematary</span>.
        </>
      ]
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "Horror novel about a maverick scientist who creates a living being from cadaver parts (from different bodies). Despite being considered a horror classic, it’s kinda not good writing…kinda really not good writing. It’s the kind of writing someone who can’t write well thinks really good writing sounds like; all self-important and painfully serious. The plot trajectory is also botched by empathy with the monster. This eliminates the source of horror very early in the novel. There’s no part that’s memorably scary. It’s a good idea, it just doesn’t work in execution.",
    },
    {
      title: "The Haunting of Hill House",
      author: "Shirley Jackson",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status: "Finished.",
      review: [
        <>
          Classic haunted house novel about an emotionally fragile, psychologically disturbed woman who takes part in a parapsychology study with a couple of other participants, requiring them to stay at an allegedly haunted house – ‘Hill House’ – possibly haunted by its deceased former occupant: Mr Crane, Mrs Crane, someone, something, or maybe no one. Styled in the vein of <span className="italic">‘Rebecca’</span> by Daphne Du Maurier, cryptic, withholds a lot of detail; facilitated by trapping the narrative in the perception of the protagonist, who is (like in <span className="italic">Rebecca</span>) the least knowledgeable character. Like in <span className="italic">Rebecca</span>, the house is itself a character, or represents an implied character who is both physically absent and omnipresent, causing the protagonist constant paranoia, which here, inevitably drives the protagonist insane.
        </>
      ]
    },
    {
      title: "The Midwich Cuckoos",
      author: "John Wyndham",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status: "Finished.",
      review: [
        <>
          Horror novel by the author of <span className="italic">‘The Day of the Triffids’</span> (which, if I’ve read, I have no memory of, so that’s not good). A force field surrounds a small English village which causes people to become unconscious, and then a bunch of women mysteriously become impregnated by (implied) parasitic aliens. The children grow up fast and all have white hair and golden eyes, and act strange. They also have telepathic powers, allowing them to share knowledge collectively, read the villagers' minds, and — like the kid in Bixby's <span className="italic">‘It’s a Good Life’</span> which conspicuously preceded this story by 5 years — can compel anyone who threatens them to commit suicide. It's basically <span className="italic">‘It’s a Good Life’</span> with a group of children (literally, I think the author borrowed the idea), instead of one. The story inspired the film <span className="italic">‘Village of the Damned’</span>. Borrowed idea or not, it's a great concept for a horror story, if only because of novelty, and the antagonist/s are so damn powerful it’s fascinating to see how the protagonist can defeat them (this could have so easily been an ‘everyone dies’ ending, but amazingly, protagonist is successful in defeating the kids – you’ve got to respect a storyteller who purposely makes the job harder for himself).
        </>
      ]
    },
    {
      title: "Gulliver’s Travels ",
      author: "Jonathan Swift",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "Novel about a man who travels to different islands, each inhabited by weird civilisations: giants, tiny people, horse people, and others. Really enjoyed this, although I’ve forgotten what it was satirizing – probably the aristocracy and monarchy of the day. ",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoyevsky",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status: "Finished.",
      review: [
        <>
          I must have picked up a bad translation because this book became increasingly incoherent as I went along. Nevertheless, what I did understand didn’t really appeal to me; while the premise was really promising, the redeeming capacity of religion at the end was a disappointing Deus Ex Machina and I didn’t buy it. Unfortunately this tends to be a central theme of Dostoyevsky’s works (although it’s turned on its head in <span className="italic">The Idiot</span>).
        </>
      ]
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "Follows aristocratic Russians during the Bolshevik Revolution. The best aspect of this book is the characterisation (which is captivating and intricate right from the start).",
    },
    {
      title: "Lolita",
      author: "Vladimir Nabokov",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "A controversial story of a man who is infatuated with his ostensible lover’s teenage daughter. The prose is very expressive and synesthetic to convey that the protagonist’s feelings are romantic as much as sexual. The story’s writerly prose greatly elevates this subject matter.    ",
    },
    {
      title: "Johnny Got His Gun",
      author: "Dalton Trumbo",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "Anti-war novel about a young man who fought in World War I, and lost his arms, legs and facial features (leaving him blind and deaf) – tragically based on a real-life circumstance.",
    },
    {
      title: "Catch-22",
      author: "Joseph Heller",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "Novel set during WWII about a bombardier (aims the aircraft bombs) trying to fulfil his service requirements and get out of the war. The service requirements are structured around the paradox: only crazy people get discharged, but only a sane person would apply for discharge. This effectively indentures the soldiers as long as possible, or until the constantly looming spectre of death eventuates. Simple book, simple writing, although deliberately structured out of chronological order, maybe effecting the days blending together, the ‘eternity’ or ‘timelessness’ of service, and (as Vonnegut did in Slaughterhouse Five) PTSD. Added significance if you’ve ever had to deal with one of these ourouborically-organized ‘is-everybody-just-stupid’ systems that eats its own arse more than an Oozlum bird (military, law enforcement, and security being major ones, priding the chain-of-command and blackletter rule-compliance beyond all reason).",
    },
    {
      title: "Life of Pi",
      author: "Yann Martel",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "Novel about a kid who finds himself adrift on a lifeboat in the ocean with a tiger. Taken as pure fiction, it’s good as a horror and religious tragicomedy with a Twilight-Zone twist. Problem is, you’re supposed to get a spiritual message out of it – a great shame as the spiritual message is the most spiritually bankrupt, self-defeating thing ever put to paper. It’s a mystery to me why anyone would receive this book as spiritually gratifying. This book does not embolden any religious sentiment; it’s the ‘Satanic Verses’ of Theism; a parody of apologism, the weakest imaginable argument for Theism, a poor man’s Pascal’s wager.",
    },
    {
      title: "House of Leaves",
      author: "Mark Z. Danielewski",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status: "Unfinished.",
      review: [
        <>
          Normally I don’t list horror fiction I’ve read here (because most horror fiction I read is so unexceptional its existence is not even worth acknowledging). This had a great reception – albeit from the horror community; not known for its bright bulbs or great works, a museum of the lowest common denominator. This one, however, is exceptional…Exceptionally bad. Actual reviews for this book (found in the book itself, therefore, part of the content for review):
        </>,

        <p className="ml-4 italic">
          "Any hope...that the experimental novel was an aberration of the twentieth century is dashed by the appearance of Mark Z. Danielewski's House of Leaves...[a]nd it's a monster..."<br />
          — (The Washington Post Book World)
        </p>,

        <p className="ml-4 italic">
          "[I]t renders most other fiction meaningless."<br />
          — (Bret Easton Ellis)
        </p>,

        <p className="ml-4 italic">
          "What could have been a perfectly entertaining bit of literary horror is instead an assault on the nature of story."<br />
          — (Spin)
        </p>,

        <p className="ml-4 italic">
          "[W]hen you purchase your copy you may reach a certain page and find me there...still trapped in the web of its malicious...pages."<br />
          — (Jonathan Lethem)
        </p>,

        <p className="ml-4 italic">
          "Anticipate it with dread..."<br />
          — (Gregory Maguire)
        </p>,

        <>
          It’s about a house whose architecture keeps changing (<span className="italic">Alice in Wonderland</span>-style). Sounds like modern Borges, but a lot less Borges and more Joyce. And not <span className="italic">Dubliners</span>’ Joyce. But it’s not even <span className="italic">Ulysses</span>. This is kindergarten <span className="italic">Ulysses</span>: aggressively, smugly style-driven with text itself puerilely coloured and formatted into different shapes; spirals and labyrinths, forcing you to twist the book like you’re trying to steer a fishtailing car.

          <br /><br />

          Structurally, it’s like a crime scene: you could do a forensic analysis on what a structural mess this is. The words do a variety of things throughout the book, none of which tell a story. This is, however, unlike <span className="italic">Ulysses</span>, not modernist but postmodernist literature. Which is even worse because you can’t prove which events in the story did or did not happen, or who actually said what; your methodology to do so is defective. But in fiction this is especially senseless and beside the point as the reader treats all fiction as…well, fictional to begin with! The point is to make the reader feel like it actually happened – this does the opposite. It’s only relevant as an in-story device in that none of the characters could verify what happened. But what’s the point of that? — for all we know, none of it did happen; merely a lie, confabulation or fever dream. It’s not as effective or interesting as a story where real things happen and have real effects in the story. Besides, <span className="italic">Eco</span> has already been here, and — 20 years later — he’s still done it better. The point of contradictory citations in <span className="italic">The Name of the Rose</span> was to undermine the ‘inerrancy’ of a bible with a legacy of copy error. What truths do the run-around citations undermine here? Haunted house rumours? – which have never been treated as gospel truth anyway? And we’re not helped by distractingly oh-my-God-that’s-so-fake sounding names like ‘Navidson,’ ‘Johnny Truant,’ and ‘Zampano,’ (all sounding like amateur magicians and those made-up anagrams from the <span className="italic">Number 23</span> film).
        </>
      ]
    },

    {
      title: "The Three Musketeers",
      author: "Alexandre Dumas",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review: [
        <>
          Read once, little remembered. Tried to read a second time, couldn’t tolerate it through to the end. Didn’t enjoy this as much as Monte Cristo. Doesn’t have the philosophical and moral examination and pathos of TCMC. Also lacks the driven protagonist; protagonist wants to become a Musketeer, but we don’t understand why – the musketeers don’t have the larger than life presence that would benefit this narrative goal, and protagonist joins forces with them far too early, so we never doubt his ability to eventually be accepted as one. The musketeers get along too well. Odd flaw, but characters who get along too well risk being redundant. Apart from a handful of bullet-point personality traits, the titular three musketeers aren’t particularly memorable. They’re each putatively different, but not effective foils. They’re cheerleaders for the protagonist. If there’s conflict between them it’s superficial. Their iconic ‘travel everywhere together’ motif is actually a character flaw; it suggests they have no separate drives and goals.
        </>,
        <>
          Author’s writing style is very detail-fixated, many words could have been cut to create a greater sense of motion and goal-seeking action. This is also a problem in TCMC, but the strong narrative drive in that novel overcomes this. There’s a broader political, thematic idea here that England and France are stronger as allies than divided, which resounds through the imagery of the musketeers sticking together and ‘one for all, all for one’ thing. But it’s not powerfully demonstrated in the plot. Doesn’t have the intrigue of TCMC; we know who the villains are immediately – they’re in positions of power and abusing their power to divide the nation – but there isn’t anything deeper than that. Why are the villains bad, what do they really want? They’re villains first, characters second.
        </>
      ]
    },

    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status:
        "Finished.",
      review:
        "Gripping premise, enigmatic and intriguing plot development, moving climaxes for each plot thread. There are no true villains – at times there is sympathy for the antagonists, and alienation from the protagonists. Morality is on a spectrum; by the end of the book, the main character could be said to be little better than the people who wronged him. It’s rare when a novel challenges and makes you change your beliefs, as this one did for me, regarding vigilantism – the biggest lesson illustrated in this book is that people are inexorably connected, such that hurting one person inevitably harms and affects others.",
    },

    {
      title: "Cyrano De Bergerac",
      author: "Edmond Rostand",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction, Play.",
      status:
        "Finished.",
      review:
        "A play about a French soldier called Cyrano, who is exceptionally talented at almost everything, but explosively insecure about his conspicuously big nose, causing him to hesitate pursuing the object of his affection, the desirous Roxane, in doing so, she ends up with another soldier, Christian, who is physically attractive but lacks Cyrano’s wit. Cyrano helps Christian by penning Roxane brilliant letters and poetry in Christian’s name (the origin of that narrative device). Really enjoyable.",
    },
    {
      title: "The Elements: A Visual Exploration of Every Known Atom in the Universe ",
      author: "Theodore Gray",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Chemistry, Photographic Book.",
      status:
        "Finished.",
      review:
        "Identifies each element in the periodic table, providing examples of where the element can be found and what it’s used for, with corresponding photographs. Good chemistry guide for a lay chemistry audience..",
    },
    {
      title: "The Man Who Mistook His Wife For A Hat and Other Clinical Tales",
      author: "Oliver Sacks",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction.",
      status:
        "Finished.",
      review:
        "British Neurologist author recounts several anecdotes from his career treating patients with an array of bizarre and idiosyncratic neurological disorders and symptoms, and is careful to capture the humanity in these encounters..",
    },
    {
      title: "Stone Butch Blues",
      author: "Leslie Feinberg",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-fiction.",
      status:
        "Finished.",
      review:
        "In the ‘70s, author – born female – started transitioning into a man, but was discontent and pulled back and now settles somewhere in between. The title says ‘Stone Butch’ but I think the author is more transgender than lesbian – let’s put it this way, if author was lesbian, they’d identify as lesbian. At the time, lesbian culture was more rigidly divided into butch/femme, rather than the modern androgynous variation, and author’s identity may have been structured unevenly around that distinction. Decent read on this subject, otherwise, I have little memory of this book.",
    },
    {
      title: "Complications: A Surgeon's Notes on an Imperfect Science",
      author: "Atul Gawande",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction.",
      status:
        "Finished.",
      review:
        "A collection of essays, using examples from history, discussing mistakes and limitations in medical science. Reminiscent of the style of Oliver Sacks’ books.",
    },
    {
      title: "Better: A Surgeon's Notes on Performance",
      author: "Atul Gawande",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction.",
      status:
        "Finished.",
      review:
        "Like the above ‘Complications’ except the theme here is the drive in medicine for professionals to challenge, change and improve, with focus on pioneers and standard-setters of medical methods and techniques.",
    },
    {
      title: "The Cinema of Isolation: A History of Physical Disability in the Movies",
      author: "Martin F. Norden",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Film Studies, Photographic Book,",
      status:
        "Finished.",
      review:
        "This is an amazing book. It offers a comprehensive history – from the 1890s until around the late 1990s – of film depicting characters with disabilities and physical differences – and of course notes the Victorian era’s forerunner of ‘disability’ film; the circus freak show. Until around the mid 90s with the influence of modern civil rights movements, subsequent film performed virtually the same role as a freak show – probably moreso, because there is now an element of distance between thespian subject and observer. It was designed to arouse shock and elicit laughter at the strange, awkward and pathetic portrayals of disabled and deformed individuals (I’m tempted to say props or set pieces, rather than actors) at which I think (I hope) a modern audience would cringe. It’s eye-opening how sensibilities of comedy evolve. I still have in mind the portrayal of a blind person getting hit by a car (an anachronism, I should say ‘automobile’ probably not able to exceed 30kmp/h) which was a crude attempt at comedy.",
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction.",
      status:
        "Finished.",
      review:
        "A summary of history from the big bang all the way to speculations about human extinction. Despite the title, this book predominantly focuses on scientific history.",
    },
    {
      title: "On Writing: A Memoir of the Craft",
      author: "Stephen King",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Writing Guide.",
      status:
        "Finished.",
      review:
        "Rather than providing the nuts and bolts of how to write, it’s more of a motivator for writing, and somewhat manifesto of author’s personal concept of what writing is and sets out to achieve. Messy and unstructured for an instruction manual. A reference to Strunk’s ‘Elements of Style’, but at one point he even says if you haven’t learnt how to write by now, it’s already too late. If that chills your authorly ambition, my advice is not to despair, but turn to the technically superior Sol Stein variation on this title. Be cautious about a writing teacher who has been quoted as saying, “Even if I did know where I get my ideas, I wouldn’t tell you!”.",
    },
    {
      title: "Danse Macabre",
      author: "Stephen King",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Writing Guide.",
      status:
        "Finished.",
      review:
        "Discusses horror literature. I have almost no memory of this book except that it tossed out some good recommendations for horror, like ‘August Heat’ (amongst very average recommendations, like ‘The Horla’). It’s not going to make you a masterful horror writer, though. If you hadn’t heard of Lovecraft before you read this, you probably weren’t destined to terrify anyone anyway. I’m a big fan of horror and I have no memory of reading a book about horror writing written by Stephen King – something is terribly wrong with that.",
    },
    {
      title: "Danse Macabre",
      author: "Stephen King",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Writing Guide.",
      status:
        "Finished.",
      review:
        "Discusses horror literature. I have almost no memory of this book except that it tossed out some good recommendations for horror, like ‘August Heat’ (amongst very average recommendations, like ‘The Horla’). It’s not going to make you a masterful horror writer, though. If you hadn’t heard of Lovecraft before you read this, you probably weren’t destined to terrify anyone anyway. I’m a big fan of horror and I have no memory of reading a book about horror writing written by Stephen King – something is terribly wrong with that.",
    },
    {
      title: "Stiff",
      author: "Mary Roach",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Spook",
      author: "Mary Roach",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Bonk",
      author: "Mary Roach",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Packing for Mars",
      author: "Mary Roach",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Extraordinary Popular Delusions and the Madness of Crowds",
      author: "Charles Mackay",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, History.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "An Illustrated History of Britain",
      author: "Various",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, History.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "An Illustrated History of the USA",
      author: "Various",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, History.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The Bible (International Version)",
      author: "Various",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Religious Text.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Year of the Intern",
      author: "Nina Godiwalla",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Memoir.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Believing Bullshit",
      author: "Stephen Law",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Philosophy.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Science.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The Extended Phenotype",
      author: "Richard Dawkins",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Science.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The God Delusion",
      author: "Richard Dawkins",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Religion/Science.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The Good War",
      author: "Studs Terkel",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, History.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Conversations on Consciousness",
      author: "Susan Blackmore",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Science.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Just Give Money to the Poor",
      author: "Alfie Kohn",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Economics.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Intellectual Impostures",
      author: "Alan Sokal & Jean Bricmont",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Science/Critique.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The Psychic Mafia",
      author: "Bertrand Méheust",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Paranormal.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Flim-Flam! Pseudoscience and the Paranormal",
      author: "James Randi",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Skepticism.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Scientific Paranormal Investigation: How to Solve Unexplained Phenomena",
      author: "Ray Hyman",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Skepticism.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The Religion Virus",
      author: "Richard Dawkins",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Religion/Science.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "What to Do With a Chocolate Jesus",
      author: "Phil Zuckerman",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Religion/Culture.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The Idiot",
      author: "Fyodor Dostoyevsky",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Fiction.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Guns, Germs, and Steel",
      author: "Jared Diamond",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, History/Science.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Misquoting Jesus",
      author: "Bart D. Ehrman",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Religion/History.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "Godless",
      author: "Dan Barker",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Religion.",
      status: "Finished.",
      review: ".",
    },
    {
      title: "The Age of Reason",
      author: "Thomas Paine",
      image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
      type: "Non-Fiction, Philosophy/Religion.",
      status: "Finished.",
      review: ".",
    },
    {
  title: "The Qu'ran (Translated by Abdullah Yusuf Ali)",
  author: "Abdullah Yusuf Ali",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Religious Text.",
  status: "Finished.",
  review: ".",
},
{
  title: "Infidel",
  author: "Ayaan Hirsi Ali",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Memoir.",
  status: "Finished.",
  review: ".",
},
{
  title: "Breaking the Spell",
  author: "Daniel C. Dennett",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Science/Religion.",
  status: "Finished.",
  review: ".",
},
{
  title: "A Military History of South Africa",
  author: "John Keegan",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, History.",
  status: "Finished.",
  review: ".",
},
{
  title: "From the Dutch-Khoi Wars…",
  author: "Unknown",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, History.",
  status: "Finished.",
  review: ".",
},
{
  title: "Mathematics and Humor",
  author: "John Allen Paulos",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Science/Math.",
  status: "Finished.",
  review: ".",
},
{
  title: "Innumeracy: Mathematical Illiteracy and Its Consequences",
  author: "John Allen Paulos",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Math.",
  status: "Finished.",
  review: ".",
},
{
  title: "Irreligion",
  author: "Richard Dawkins",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Religion/Science.",
  status: "Finished.",
  review: ".",
},
{
  title: "A Brief History of Korea",
  author: "Michael J. Seth",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, History.",
  status: "Finished.",
  review: ".",
},
{
  title: "A Short History of Russia",
  author: "Mary Platt Parmele",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, History.",
  status: "Finished.",
  review: ".",
},
{
  title: "France: An Outline of History",
  author: "G.P. Gooch",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, History.",
  status: "Finished.",
  review: ".",
},
{
  title: "A Concise History of the Middle East",
  author: "Arthur Goldschmidt",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, History.",
  status: "Finished.",
  review: ".",
},
{
  title: "A History of the Middle East",
  author: "Peter Mansfield",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, History.",
  status: "Finished.",
  review: ".",
},
{
  title: "The Devil in History",
  author: "Richard H. Popkin",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, History/Religion.",
  status: "Finished.",
  review: ".",
},
{
  title: "Trans People in Love",
  author: "Jody Nathan",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Sociology.",
  status: "Finished.",
  review: ".",
},
{
  title: "Killing Us Softly",
  author: "Jean Kilbourne",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Media/Culture.",
  status: "Finished.",
  review: ".",
},
{
  title: "Trick or Treatment",
  author: "Simon Singh & Edzard Ernst",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Science/Health.",
  status: "Finished.",
  review: ".",
},
{
  title: "The Beginning Runner’s Handbook",
  author: "Patrick Milroy",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Sports/Health.",
  status: "Finished.",
  review: ".",
},
{
  title: "Why We Get Fat",
  author: "Gary Taubes",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Health/Nutrition.",
  status: "Finished.",
  review: ".",
},
{
  title: "The Men’s Fitness Exercise Bible",
  author: "Sean Hyson",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Health/Fitness.",
  status: "Finished.",
  review: ".",
},
{
  title: "The End of Faith",
  author: "Sam Harris",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Religion/Philosophy.",
  status: "Finished.",
  review: ".",
},
{
  title: "QED: The Strange Theory of Light and Matter",
  author: "Richard Feynman",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Science.",
  status: "Finished.",
  review: ".",
},
{
  title: "The Depths: The Evolutionary Origins of Depression Epidemic",
  author: "Jonathan Rottenberg",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Science/Psychology.",
  status: "Finished.",
  review: ".",
},
{
  title: "Atheist Universe",
  author: "David Mills",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Religion/Philosophy.",
  status: "Finished.",
  review: ".",
},
{
  title: "The Unthinkable: Who Survives When Disaster Strikes… What’s Luck Got to Do With It?",
  author: "Amanda Ripley",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Psychology/Sociology.",
  status: "Finished.",
  review: ".",
},
{
  title: "Mathematics",
  author: "John Allen Paulos",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Math.",
  status: "Finished.",
  review: ".",
},
{
  title: "Addiction by Design: Machine Gambling in Las Vegas",
  author: "Natasha Dow Schüll",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Sociology/Psychology.",
  status: "Finished.",
  review: ".",
},
{
  title: "The Demon-Haunted World",
  author: "Carl Sagan",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Science/Skepticism.",
  status: "Finished.",
  review: ".",
},
{
  title: "Musicophilia",
  author: "Oliver Sacks",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Neuroscience.",
  status: "Finished.",
  review: ".",
},
{
  title: "The Logic of Lying",
  author: "Robert Trivers",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction.",
  status: "Finished.",
  review: ".",
},
{
  title: "How We Know What Isn’t So",
  author: "Thomas Gilovich",
  image: "https://covers.openlibrary.org/b/id/12919048-L.jpg",
  type: "Non-Fiction, Psychology.",
  status: "Finished.",
  review: ".",
},


  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto mt-6 space-y-8">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
}
