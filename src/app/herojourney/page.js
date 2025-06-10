// src/app/herojourney.js
"use client";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
//import FootnoteRef from '../../components/FootnoteRef';
import hjBanner from '../assets/hjbanner.jpg'; 
import Image from "next/image";
//import Link from "next/link";

function HeroJourney() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl font-semibold text-yellow mb-2 text-center">The Hero's Journey</h1>

        <blockquote className="text-sm italic mb-2">
          “You enter the forest at the darkest point, where there is no path. Where there is a way or path, it is someone else's path. You are not on your own path. If you follow someone else's way, you are not going to realize your potential.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— Joseph Campbell</span>
        </blockquote>
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={hjBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-act-i-departure" className="mb-2 font-semibold">Act I. Departure</h3>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">(1.1) The Call to Adventure</h4>
          <p className="text-sm mb-4 font-rubik">This event signals the beginning of the mythological journey. There are countless forms this might take. Generally, the protagonist is voluntarily or involuntarily lured away 'from the frequented paths of man.'' The occurrence may be by accident - e.g. blunder of the protagonist's doing, or the act of another. Another character (the 'herald') may give the protagonist the call to adventure. Usually, the 'herald' is 'dark, loathly, or terrifying, judged evil by the world' representing the 'rejected, unrecognised' unknown into which the protagonist must go. If there is no herald, the setting itself may possess these qualities, such as a dark forest.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">(1.2) Refusal of the Call</h4>
          <p className="text-sm mb-4 font-rubik">The protagonist does not immediately answer the call. He may actively or passively refuse it, outright reject it, or bide his time, or unintentionally avoid it.  But as long as the protagonist denies the call, his life will get worse or forces will conspire to compel him to answer the call. A series of 'signs of increasing force then will be made visible, until…the summons can no longer be denied.'</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">(1.3) Supernatural Aid</h4>
          <p className="text-sm mb-4 font-rubik">Once the protagonist has accepted the call (or around this time), he will encounter a 'protective figure,'' a guide or teacher, who gives the adventurer some kind of protective measure against the antagonistic forces he is to face against. This is usually a 'wise old mentor' type character. He is both 'protective and dangerous.'</p>
          <p className="text-sm mb-4 font-rubik">The protagonist must place trust in the protective figure, as it will infrequently tell the protagonist everything. The protective figure is normally male, but doesn't have to be. As 'the lurer of the innocent soul into the realm of trial', the figure is normally a force of good, but doesn't have to be (as Mephistopheles in Faust) - if the protagonist is called/tempted to do something bad, the figure may be bad.</p>
          <p className="text-sm mb-4 font-rubik">The Call to Adventure is typically the first announcement of the protective figure's imminent coming.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">(1.4) The Crossing of the First Threshold</h4>
          <p className="text-sm mb-4 font-rubik">The protagonist has a 'life horizon.'' This is the limits of his life's experience of the land/world. Beyond the life horizon are the places he's never gone, or doesn't know exist; 'the unknown.'' If the quest is emotional or psychological, the 'unknown' will be the unexplored parts of himself; 'the abyss,'' into which the 'consciousness descends in dream, and the individual dissolves.'' This is demarcated by 'the threshold,'' which is the entrance to 'the unknown.'' The protagonist must cross the 'threshold' to proceed in his adventure. The threshold may be magical.</p>
          <p className="text-sm mb-4 font-rubik">The 'threshold' is watched by a 'threshold guardian,'' who acts like a parental figure, ensuring the 'infant' protagonist does not wander beyond the 'tribe' out into danger. This guardian is “content, even proud, to remain within the indicated bounds, and popular belief gives him every reason to fear so much as the first step into the unexplored.” This belief may refer to danger or temptation into sin. The guardian may be dangerous and dealing with them may be risky, requiring competence and courage.</p>

          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">(1.5) The Belly of the Whale</h4>
          <p className="text-sm mb-4 font-rubik">The passage through the threshold symbolizes a metamorphosis; a rebirth into a new world, but also a symbolic death, as the protagonist is “swallowed into the unknown, and would appear to have died.”</p>
          <p className="text-sm mb-4 font-rubik">This doesn't necessarily entail the protagonist's bodily death (though it may), it may involve the death of the protagonist's ego, lifestyle, or other identifying feature. The crossing of the threshold signifies the protagonist will never be the same.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">Act II. Initiation</h3>
          <h4 className="text-base font-semibold text-midBluey mt-4 mb-2">(2.1) The Road of Trials</h4>
          <p className="text-sm mb-4 font-rubik">Once across the threshold, the protagonist may find himself in a dreamlike landscape where he must survive a succession of trials, tests or ordeals.</p>
          <p className="text-sm mb-4 font-rubik">In this, the protagonist is aided by the protective advice or gifts of the protective figure.</p>
          <p className="text-sm mb-4 font-rubik">Trials may include slaying monsters or dragons and passing through barriers, throughout which there will be momentary glimpses of wonder and victory.</p>
          <p className="text-sm mb-4 font-rubik">One of these trials may be the protagonist's discovery of his opposite. This is a self-confrontation as the opposite symbolizes his unsuspected self. The protagonist initially resists the opposite, but, one by one, the resistances are broken. He overcomes the opposite by putting aside his pride, virtue, beauty and/or life, and either swallow or be swallowed by the opposite (i.e assimilation), thereby finding he and it are not differing species, but the same flesh. This is a throwback to the symbolic 'death' earlier; one step of a larger quest of illumination through the ego putting itself to death.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(2.2) The Meeting with the Goddess</h3>
          <p className="text-sm mb-4 font-rubik">Once all the barriers have been passed and the dragons and ogres have been slain, the ultimate adventure is commonly represented as a 'mystical marriage' of the protagonist with the 'Queen Goddess of the World.'' This is the 'crisis at the nadir' or zenith, 'at the uttermost edge of the earth, the central point of the cosmos' or 'within the darkness of the deepest chamber of the heart.' This may mean the marriage presents a source of crisis or conflict for the protagonist, for example, gaining the Goddess in marriage necessitates the loss of something else of value to the protagonist.</p>
          <p className="text-sm mb-4 font-rubik">The 'Queen' herself (if a she) may be the paragon of beauty and “the reply to all desire, the bliss-bestowing goal of every hero's earthly and unearthly quest.' She may be a 'Lady of the House of Sleep,' i.e. in stasis or sleep until the hero awakens her (which may be symbolic). This figure can be ‘bad’ as well; absent, unattainable, forbidden, punishing, a lure to dangerous desire, and whose marriage would be the absolute ruin of the protagonist.</p>
          <p className="text-sm mb-4 font-rubik">The woman represents life, and by the marriage, the protagonist becomes the knower and master of life.</p>
          <p className="text-sm mb-4 font-rubik">When the protagonist is female, it is she instead who gains the qualities of the Goddess – beauty, yearning – becoming fit for consort with an immortal (hero).</p>
          <p className="text-sm mb-4 font-rubik">This character may also be embodied in ‘the Mother-Destroyer,’ who is a protecting and nourishing figure. She is ‘the world creatrix, ever mother…and is the life of everything that lives.’ She is also ‘the death of everything that dies…the womb and the tomb…’ Thus she has dual aspects; the terrible and the benign.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(2.3) Woman as the Temptress</h3>
          <p className="text-sm mb-4 font-rubik">If the Queen also embodies the Mother, the marriage puts the protagonist in his father’s place, as a kind of inevitable ascendancy. This can create an Oedipean conflict for the protagonist. As in that myth, the woman may become a symbol not of desire and victory, but of revulsion and defeat. She does not represent innocence, but is a ‘Queen of Sin.’</p>
          <p className="text-sm mb-4 font-rubik">The quest to annihilate his ego may necessitate abstaining from woman’s temptation.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(2.4) Atonement with the Father</h3>
          <p className="text-sm mb-4 font-rubik">Like the ‘Mother’ the ‘Father’ figure initially has dual aspects; a terrifying ‘ogre’ who punishes when the protagonist does wrong, and a ‘protector,’ who warns against danger.  The protagonist is kept steeped in ‘sin’ (i.e. his problems) as long as he fixates on his ego, which appears to protect him from the ‘ogre’ Father – this is reinforced by the protagonist’s unrealistic perception of the Father as an ‘ogre’. The protagonist endures the Father with support from the Mother. However, the Father eventually comes to shatter the protagonist’s ego, the protagonist must cast away his myth of the Father as ‘ogre’ whereon the protagonist actually finds that the Father and the Mother “reflect each other, and are in essence, the same.”</p>
          <p className="text-sm mb-4 font-rubik">The protagonist may rival the Father for ‘mastery of the universe,’ i.e. position as the Father. The Father entrusts his office only to a protagonist who has been purged of all “inappropriate infantile cathexes” and whose personal motives (of self-aggrandizement, personal preference or resentment) do not conflict with the exercise of the office powers. These ‘cathexes’ may be weaknesses or flaws, inexperience, ignorance, or naïve illusions about the way things work. The Father has an experience of the “majesty of cosmic law, purged of hope and fear, and [is] at peace in the understanding of the revelation of being.”</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(2.5) Apotheosis</h3>
          <p className="text-sm mb-4 font-rubik">This step is a bit strange, but the protagonist may not only take the place of the Father, but also the Mother, simultaneously. By doing this, he becomes ‘godlike,’ representing both the two halves: Masculine and Feminine of the whole – this is a hermaphroditic, bisexual god. What is meant by this is that the Father and Mother being distinct is merely an illusion, they are one and the same in their role (the Mother ‘birthed’ the protagonist’; the Father gave the protagonist his ‘rebirth’, the Father protected the protagonist from danger, while the Mother protected the protagonist from the Father). They are both creators and destroyers: the Mother creates the protagonist, which leads to his breakdown by the Father, who builds him back up. This also overlaps with the previous step, if the ‘Father’ also symbolizes God or a god, then by assuming the Father’s place, the protagonist also becomes a god.</p>
          <p className="text-sm mb-4 font-rubik">In the Freudian sense, there is extra circularity in that the protagonist was once the Father previously (helped to be birthed by the Father) and so was always the Father. Your symbolic Father could likewise have some originating influence in the protagonist’s quest (e.g. setting off initial events), such that the protagonist could be said to have come from the Father.</p>
          <p className="text-sm mb-4 font-rubik">Realising the Mother and Father are the same results in enlightenment. Having experienced both life and death (creation and destruction) the protagonist now understands both and neither desires nor fears either, and at the end is apotheosis; the protagonist’s ascension into perfection, the total freedom from the self-torturing, delusional, tangled state of man, from consciousness, ego, and self, and human desires. The protagonist now neither desires nor fears, he is what was desired and feared.</p>
          <p className="text-sm mb-4 font-rubik">Apotheosis may mean the protagonist’s realization of his full potential.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(2.6) The Ultimate Boon</h3>
          <p className="text-sm mb-4 font-rubik">This traditionally refers to a treasure or trophy of some sort, a ‘cornucopian banquet of the gods.’ This is basically a reward or ultimate prize acquired by the protagonist upon completing the quest. It may be wealth, status, health, knowledge, valuable resource, skill, etc. The  protagonist has won this through apotheosis, as this trophy symbolizes the treasure of the gods – only a god may possess it, so it’s value will be exaggerated or emphasized – in rarity, quantity, pricelessness, utility, desirability, etc. It will tend to be something only one person can possess, and possession indicates that the possessor is a god.</p>

          <h3 id="post-act-iii-return" className="mb-2 font-semibold">Act III. Return</h3>
          <p className="text-sm mb-4 font-rubik">Most of the Act III Steps have Act I counterparts, because they are ‘upside down’ versions of those in Act I. It’s as if the protagonist is moving backwards (through each stage) to the starting position again.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(3.1) Refusal of the Return</h3>
          <p className="text-sm mb-4 font-rubik">Once the quest has been accomplished, the protagonist must begin the labour of returning with his ‘boon.’ The boon may be some elixir for the restoration of society, or otherwise have life-renewing abilities to be applied to the original community, or – if the ‘sleeping princess’ is the boon – taken away from danger to the safety of the original homeplace.</p>
          <p className="text-sm mb-4 font-rubik">Just as the protagonist first refused the call, here, the protagonist will first refuse the responsibility to return. It may be the protagonist doubts the viability of his return, or its purpose, or he may want to take up permanent residence in the quest land.</p>
          <p className="text-sm mb-4 font-rubik">As forces pushed the protagonist to begin his journey, forces will commission him to return. They may be external, or internal.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(3.2) The Magic Flight</h3>
          <p className="text-sm mb-4 font-rubik">Once the protagonist has been commissioned to return, he will do so supported by the power of his ‘supernatural patron.’ This is the ‘god’ whose blessing he has (symbolically) won in the ‘apotheosis’ stage.</p>
          <p className="text-sm mb-4 font-rubik">Alternatively, if the protagonist attained the boon against the opposition of its guardian/god/demon then (like Prometheus and the stolen fire) the protagonist’s return may be resented by the gods or demons, and there may be a pursuit. The flight may be “complicated by marvels of magical obstruction and evasion.”</p>
          <p className="text-sm mb-4 font-rubik">In other words, the flight is magical either because the assenting god supports it (the magic providing for it), or opposes it (the magic creating obstacles).</p>
          <p className="text-sm mb-4 font-rubik">The Act I equivalent is 'Supernatural Aid,’ in which the protagonist ‘flight’ from his community is supported by the magical protective figure. It may be the same force.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(3.3) Rescue from Without</h3>
          <p className="text-sm mb-4 font-rubik">The protagonist may have to be rescued from his supernatural adventure by ‘without’ – i.e. the natural world he originally left. This is like the child who is called back inside after dark – the world the protagonist left behind calls to him again.</p>
          <p className="text-sm mb-4 font-rubik">If the protagonist is consciously unwilling to return, he will suffer a nasty shock, driving him (from within) to return. If, on the other hand, the protagonist is unconsciously unwilling to return; in a higher, beatific state of perfect being (resembling death), so cut off from his forgotten original starting place, a ‘rescue from without’ is necessary to get him back.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(3.4) The Crossing of the Return Threshold</h3>
          <p className="text-sm mb-4 font-rubik">The protagonist must pass back from the ‘mystic world’ to re-enter, with his boon, the ‘world of common day…where men who are fractions imagine themselves to be complete.’ The last part suggests the common society would not relate to the protagonist’s quest (reinforcing the hero’s ‘death’; that he is no longer like them).</p>
          <p className="text-sm mb-4 font-rubik">As the Mother and Father are actually one, the two worlds are actually one – the mystic world is merely “a forgotten dimension of the world we know.” From different perspectives, “the hags [are] goddesses and the dragons [are] the watchdogs of the gods.” However, a certain baffling incongruence between the worlds, perpetuating the need for another hero to redeem the world.</p>
          <p className="text-sm mb-4 font-rubik">Now a god, the protagonist must return to the earthly world of men. The protagonist may struggle to accept the “passing joys and sorrows, banalities and noisy obscenities” of his previous world. However, his apotheosis may fade as a dream which was momentous by night, seeming silly in the light of day.</p>
          <p className="text-sm mb-4 font-rubik">As compromise, the protagonist may occupy an ‘in-between’ position on an ‘insulating horse.’ The protagonist may walk amongst the common society, but not on the same ground; he has knowledge, skill or ability they don’t, and they may recognise it, even if they treat him the same. The ‘insulating horse’ sets him apart from them. It may act as a precaution for his sake, or theirs, since he may be dangerous to them now. The protagonist may have some sign or mark or indicator of his distinction from them.</p>
          <p className="text-sm mb-4 font-rubik">The returning hero must survive the impact of the world. This may entail a confrontation with the common society with his “ego-shattering, life-redeeming elixir, [he must] take the return blow of reasonable enquiries, hard resentment, and good people at a loss to comprehend.” The protagonist may be celebrated, or disbelieved, ridiculed or rejected.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(3.5) Master of the Two Worlds</h3>
          <p className="text-sm mb-4 font-rubik">The protagonist has gained and proved his talent to pass back and forth between the world division, gaining the insight of both.</p>

          <h3 id="post-act-ii-initiation" className="mb-2 font-semibold">(3.6)  Freedom to Live</h3>
          <p className="text-sm mb-4 font-rubik">Before the quest, the protagonist may have doubted his worth, but having proved his worth by the completion of the quest, gives the protagonist a will or purpose to live and feel justified in his own life. He has surrendered himself to a higher purpose or action, losing his ego in the process, freeing him from selfishness and suffering.</p>

          <h3 id="post-summary" className="mb-2 font-semibold">Summary</h3>
          <p className="text-sm mb-4 font-rubik">To summarise the Hero's Journey:</p>
          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <ol className="list-decimal list-inside">
              <li>The mythological hero, setting forth from his common-day hut or castle, is lured, carried away, or else voluntarily proceeds to the threshold of adventure. There he encounters a shadow presence that guards the passage. The hero may defeat or conciliate this power and go alive into the kingdom of the dark (brother battle; dragon battle; offering; charm), or be slain by the opponent and descend in death (dismemberment, crucifixion).</li>
              <li>Beyond the threshold, then, the hero journeys through a world of unfamiliar yet strangely intimate forces, some of which severely threaten him (tests), some of which give magical aid (helpers).</li>
              <li>When he arrives at the nadir of the mythological round, he undergoes a supreme ordeal and gains his reward. The triumph may be represented as the hero&apos;s sexual union with the goddess-mother of the world (sacred marriage), his recognition by the father-creator (father atonement), his own divinization (apotheosis), or again—if the powers have remained unfriendly to him—his theft of the boon he came to gain (bride-theft, fire-theft); intrinsically it is an expansion of consciousness and therewith of being (illumination, transfiguration, freedom).</li>
              <li>The final work is that of the return. If the powers have blessed the hero, he now sets forth under their protection (emissary); if not, he flees and is pursued (transformation flight, obstacle flight). At the return threshold the transcendental powers must remain behind; the hero re-emerges from the kingdom of dread (return, resurrection). The boon that he brings restores the world (elixir).</li>
            </ol>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- */}

          <hr className="my-6 border-t border-gray-400" />
          <h1 id="post-hero-comments" className="text-2xl font-bold mb-4">Leave a Comment</h1>

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
            <p className="font-source-code-pro text-xs mt-1">The Hero's Journey is a narrative archetype which describes the most common story structure.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#post-act-i-departure" className="hover:underline hover:text-white">Act I. Departure</a>
              </li>
              <li className="mb-px">
                <a href="#post-act-ii-initiation" className="hover:underline hover:text-white">Act II. Initiation</a>
              </li>
              <li className="mb-px">
                <a href="#post-act-iii-return" className="hover:underline hover:text-white">Act III. Return</a>
              </li>
              <li className="mb-px">
                <a href="#post-summary" className="hover:underline hover:text-white">Summary</a>
              </li>
              <li className="mb-px">
                <a href="#post-hero-comments" className="hover:underline hover:text-white">Comments</a>
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

export default HeroJourney;