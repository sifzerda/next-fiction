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
      </div>

      {/* 2nd Banner Box with Image */}
      <div className="bg-transparent border border-black rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
        <Image src={settingBanner} alt="story background banner" width={1600} height={400} className="w-full h-auto object-cover" priority />
      </div>

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-0 px-4 text-black flex gap-4">
        {/* Text Column */}
        <div className="flex-1">

          <h3 id="post-what-is-a-setting">9.1: What is a Setting?</h3>

          <p>DEFINE SETTING.</p>

          <h3 id="post-enhance-interest-and-conflict">9.2: Enhance Interest and Conflict</h3>
          <p>It's a mistake to see setting as a passive element of a story, like the 'virtual wallpaper' that papers the background of the action. Approaching setting as an afterthought, by uncritical intuition, or coin-flipping between alternatives, or wanting to vicariously 'visit' the scene for personal reasons, are all great ways to <i>not</i> select your setting.</p>

          <p>Some basic rules:</p>

          <ol>
            <li>Like characters and dialogue, story settings are not real places. They are patchworks of details and virtual ‘set pieces’ and ‘props’ calculated to enhance conflict and interest in the story;</li>
          </ol>
          <ol>
            <li>Another way of thinking of it is like lego; you can break up and add to any part of your scene how you need to for the story. Readers will forgive a strange setting for particularisation setting it apart from other scenes in other stories; e.g.</li>
          </ol>
          <ol>
            <li>A haunted mansion that is half bulldozed (meaning you can walk into a room leading directly to outside);</li>
          </ol>
          <ol>
            <li>An amusement park in the middle of the forest;</li>
          </ol>
          <ol>
            <li>Another way to particularise or add new life to settings is to make the characters behave unexpectedly or unconventionally in them. The movie ‘The Terminal’ (starring Tom Hanks) is a great example of this, with a man living in an airport;</li>
          </ol>
          <ol>
            <li>Think of a setting less like a location in a movie, and more like a set on a theatre stage: props and scenery flats economically selected to suggest a broader place; a door suggesting a room, a child’s toy suggesting a play pen, a beach ball and floatie suggesting a pool, etc. Your setting isn’t a pretty backdrop (after all, unlike in a movie, your reader won’t be able to see it) it’s a playground of ‘toys’ for your characters to interact with; with ‘let mot juste’ rule in mind, you only detail your setting with the relevant toys and details to make the story move. Your reader will always assume anything obvious which wasn’t described;</li>
          </ol>
          <ol>
            <li>Scenes should provide obstacle to the protagonist, not provide obstacle to the story.</li>
          </ol>

          <h3 id="post-describing-setting">9.3: Describing Setting</h3>

          <p>Physical objects should be given physical descriptions. </p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p>When we introduce a thing in a novel, the reader must be given a clear picture of it [...] When a place is introduced in a [story], the reader must see it with sufficient clarity to be able to form a mental image of it." <FootnoteRef text="Robert Meredith and John Fitzgerald, Structuring Your Novel: From Basic Idea to Finished Manuscript (Everyday Handbook)." /></p>
          </div>

          <p>Descriptions of settings should be concrete, not emotional (i.e. how the place makes the character feel). Objective observations based on the senses are fine, however (e.g. 'hot' or 'silent'). In other words, characters should be able to agree on the observation.</p>

          <div className="p-3 mb-3 rounded bg-gray-100 border border-gray-300 font-rubik">
            <p>"[T]he amount of wordage a novelist devotes to describing a character, a setting, a place, or a thing depends on their importance to the plot or story line."
              <FootnoteRef text="Robert Meredith and John Fitzgerald, Structuring Your Novel: From Basic Idea to Finished Manuscript (Everyday Handbook)." />
            </p>
          </div>

          <h3 id="post-setting-as-character">9.4: Setting as Character</h3>

          <p>Your setting isn’t just a landscape or backdrop; it can also be a character. Use your environment to suggest things which cannot be said in dialogue or description. Examples: </p>
          <ol>
            <li>A character having to ‘climb stairs’ to get somewhere suggests the activity at the forthcoming place will be difficult or tiresome, and is not something looked forward to by the character;</li>
            <li>A thunderstorm during a party or get-together suggests underlying tensions between guests which might ignite;</li>
            <li>A house with furniture that is incredibly heavy or unmovable suggests the occupants are settled in for the long term, or maybe feel trapped there against their own preferences;</li>
            <li>Transport can be a setting, too – e.g. the inside of a car, train, houseboat, elevator, etc. Settings in motion can add an extra dimension of action and uncertainty because characters are only together for a finite period of time – the duration of the trip;</li>
          </ol>

          <p>Example from Pet Sematary:</p>

          <p className="italic text-midBluey">Then there was a sound, and he remembered this from the last time as well: a high, gobbling laugh that became a sob. There was silence for a moment and then the laugh came again, this time rising to a maniacal shriek that froze Louis’s blood. The mist drifted dreamily around him.</p>

          <p>Jumping from Louis's reaction (his blood froze) to the setting (the mist) creates an unspoken dialogue between protagonist and setting. The protagonist asks a question "what made that sound?" and the setting answers "I'll tell you nothing". See this example, rewritten to explicitly provide the same information:</p>

          <p className="italic text-midBluey">[...S]ilence for a moment and then the laugh came again, this time rising to a maniacal shriek that froze Louis’s blood. <u>Unable to move, Louis could only stare about into the forest for what had made that surreal sound. But he saw nothing.</u> The mist drifted dreamily around him.</p>

          <p>The underlined text shows what is already contained in the source by the immediate cut to the setting (the mist), and keeps us in the scene in real time, without removing us from the scene and putting us inside the protagonist's head.</p>

          <h3 id="post-sub-setting">9.5: Sub-Setting </h3>

          <p>You don't have to change the location to get a different setting. Just change some details. Change the time of day (or night) or weather, or move in time to action a setting change.</p>
          <p>Note that changing a setting can have a different effect than switching to a new setting. A setting that performs the exact same function despite looking different, can be reassuring and provide a sense of stability and routine, or a return to order. Conversely, a formerly familiar setting that now appears different  or foreign can represent uncertainty and be unsettling. </p>
          <p>Otherwise, if the setting hasn't changed, it may provide a foil to emphasise how much the character has changed by contrast.</p>

          <h3 id="post-setting-is-relative">9.6: Setting is Relative </h3>

          <p>Setting can be transformed as the character is. If a character is very small (e.g. Stuart Little
            <FootnoteRef text="Stuart Little, E. B. White." />
            ) a single setting might be a creek or part of a room. If a character is very large, (e.g. Gulliver's Travels
            <FootnoteRef text="Gulliver's Travels, Jonathan Swift." />
            ) a setting might be an entire city. Setting can also be an entire time period, e.g. the Late Cretaceous period Age in A Sound of Thunder by Ray Bradbury.
            <FootnoteRef text="Ray Bradbury, The Golden Apples of the Sun." />
          </p>

          {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

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
            <p className="font-source-code-pro text-xs mt-1">A setting is a construction of place or the relevant details of place which accentuates the story or gives characters' props to play out story drama.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-bootstrapDark border border-black text-llBlue flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-yellow">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px"><a href="#post-what-is-a-setting" className="hover:underline hover:text-white">9.1: What is a Setting?</a></li>
              <li className="mb-px"><a href="#post-enhance-interest-and-conflict" className="hover:underline hover:text-white">9.2: Enhance Interest and Conflict</a></li>
              <li className="mb-px"><a href="#post-describing-setting" className="hover:underline hover:text-white">9.3: Describing Setting</a></li>
              <li className="mb-px"><a href="#post-setting-as-character" className="hover:underline hover:text-white">9.4: Setting as Character</a></li>
              <li className="mb-px"><a href="#post-sub-setting" className="hover:underline hover:text-white">9.5: Sub-Setting</a></li>
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