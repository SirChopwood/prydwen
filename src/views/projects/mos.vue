<template>
  <div class="fixed h-full w-full top-0 left-0 -z-50">
    <img src="/images/sas/Promotional_Poster_2.png" class="object-cover object-center overflow-hidden">
  </div>

  <ProjectTitle title="Munitions Officer Simulator"
              subtitle="Game Feel and Polish"
              image="/agm/LogoPart1.png">
    <ProjectTitleLink link="https://youtu.be/8z7NPgZNUYU" linktext="YouTube" />
  </ProjectTitle>

  <div class="w-full h-fit flex flex-row place-content-center mb-12">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/8z7NPgZNUYU?si=6T502YgYt7Khfw0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="border-2 border-secondary hover:border-primary rounded-md"></iframe>
  </div>
  <ProjectParagraph title="Interaction System">
    <template #BodyColumn>
      <div class="text-secondary text-lg font-bold">Design</div>
      <ul class="pl-5 list-disc list-outside [&_ul]:list-[revert]">
        <li>Loose objects in the world will be marked as Grabbable, likely through some sort of attachable component or interface.</li>
        <li>Attachment will be done via the Physics Handle functionality built into the Chaos Physics Engine in UE5.</li>
        <li>They can be picked up using a motion controller (or the cursor) by clicking and dragging.</li>
        <li>Larger / Heavier objects will lag behind more to simulate the effect of weight.</li>
        <li>Examples of such items in the world:
          <ul class="pl-10">
            <li>MAC Shells</li>
            <li>Multi-Tool</li>
            <li>Crates</li>
            <li>Tools</li>
          </ul>
        </li>
      </ul>
      <br>
      <div class="text-secondary text-lg font-bold">Justification</div>
      To create a Virtual Reality game, physics will always be a component a developer will need to account for. This is in part due to the inherent nature of using a head mounted display with hand-tracking controllers. Anything the player interacts with, at least relative to them, should respond predictably. This often involves objects succumbing to gravity or pressing up against solid walls.
      <br><br>
      To simulate this effect on the two dimensional prototype I am constructing, any interactable objects will be set to continuously simulate their position in world space. The player’s cursor will not directly influence the positions of these objects, but instead impart forces upon them that “push” or “pull” the object in the intended direction. Combined with a slight delay, this creates the feeling of weight or drag on the object.
    </template>
    <template #ImageColumn>
      <ProjectInlineImage image="/images/mos/interaction1.png" />
    </template>
  </ProjectParagraph>
  <ProjectParagraph title="User Interface">
    <template #BodyColumn>
      <div class="text-secondary text-lg font-bold">Design</div>
      <ul class="pl-5 list-disc list-outside [&_ul]:list-[revert]">
        <li>The interface design will be a combination of two pre-existing designs with some smaller tweaks and changes.</li>
      <li>The aesthetics will primarily be based off the Space Station 14 UI Figma that they have publicly presented.</li>
        <li>Elements of the UI will be constructed modularly so they can be reused easily elsewhere in the project. (i.e. Windows, Buttons etc)</li>
        <li>The core layout of some UIs will be influenced from their origins in FTL13 (MAC and Ammo Racks) though these will be split into their own windows for ease of use.</li>
        <li>User Interfaces will consist of windows that popup on the screen, able to be moved around and re-ordered on the screen.</li>
      </ul>
      <br>
      <div class="text-secondary text-lg font-bold">Justification</div>
      The primary reason for using the SS14 UI design is due to it being the most modern version of the existing interfaces from the SpaceStation games. Being only a couple of years old and still actively developed means it's more suited for use in modern game engines compared to the original. It also features a relatively high contrast and easily readable system of elements that can be reused for quick construction of interfaces, following distinct patterns for formatting that assist in player understanding.
      <br><br>
      FTL13’s UIs, for comparison, were created using basic HTML elements with simple CSS formatting due to the limitations of the BYOND engine at the time. This means that almost all elements are simple square box buttons and text. While functional, this does limit readability to the player as there are no visual clues to guide their actions or formatting to organise the content.
      <br><br>
      The goal of this system is to take the new design and apply it to the old systems, creating a far more visually appealing result. The new UI will also feature additional elements to aid in accessibility, such as the changing of colour for some elements when they are enabled/disabled or when a certain value is positive/negative in context. The use of a windowed design allows for multiple UI elements to be displayed and hidden within their relevant contexts while also maximising the player choice to organise their view as they see fit. While providing an initial increase in workload to setup, the longer term maintenance will be lower as there will not need to be as many considerations for fitting content on a static HUD.
    </template>
    <template #ImageColumn>
      <ProjectInlineImage image="/images/mos/interface1.png" />
      <ProjectInlineImage image="/images/mos/interface2.png" />
    </template>
  </ProjectParagraph>
  <ProjectParagraph title="MAC System">
    <template #BodyColumn>
      <div class="text-secondary text-lg font-bold">Design</div>
      <ul class="pl-5 list-disc list-outside [&_ul]:list-[revert]">
      <li>The MAC acts as the main static component of the gameplay loop, with the dynamic
        part being the Shells the player must load.</li>
      <li>The order of interactions on the MAC/Shells should go as follows:
        <ol class="pl-10">
          <li>1. Open Breach</li>
          <li>2. Order Shell</li>
          <li>3. Arm Shell</li>
          <li>4. Insert Shell</li>
          <li>5. Close Breach</li>
          <li>6. Load Shell</li>
          <li>7. Fire</li>
          <li>8. Repeat</li>
        </ol>
      </li>
      <li>The player’s performance will be rated on their ability to complete this loop.</li>
      <li>Penalties included for incorrect shells loaded.</li>
      <li>Ejecting an armed shell or firing an unarmed shell fails the game as it blows
      up the weapon.</li>
      <li>The MAC will have multiple secondary statistics that can influence operation,
      sometimes requiring small singular tasks to rectify before continuing.
        <ul class="pl-10">
          <li>Coil Alignment</li>
          <li>Actuator Replacement</li>
          <li>Oil Levels</li>
        </ul>
      </li>
      <li>Shells will contain some form of minigame retain engagement
        <ul class="pl-10">
          <li>2FA Style Captcha</li>
          <li>Wire Cutting</li>
          <li>Part Assembly</li>
        </ul>
      </li>
      <li>Shells are to be a finite resource, with stock management included.
        <ul class="pl-10">
          <li>On longer runs player can acquire more shells from a “store”</li>
          <li>Player must take care not to misuse their ammunition</li>
          <li>Player must load the correct type of ammo for their current situation</li>
        </ul>
      </li>
      </ul>
      <br>
      <div class="text-secondary text-lg font-bold">Justification</div>
      The design for this element of the project sources heavily from the original game, FTL13.
      The concept of having the MAC that is loaded by an individual using different shells is from
      the game. However some of these elements have been adjusted for the standalone game,
      including level changes to better fit with VR gameplay.
      <br><br>
      The level has been reduced to a side view approach. This is to match the VR viewpoint of
      being in the world, including being able to pan and zoom the camera. Getting in close with
      the focus of the gameplay will allow players to immerse themselves better. With this, every
      action and task the player takes will feel more personal to the player, encouraging them into
      a sense of “flow” and tunnel vision.
      <br><br>
      The inclusion of many menu elements on the screen and various mini-game tasks to
      complete are intentionally done to contribute to an overarching sense of pressure building in
      the game. The captain issuing orders, juggling the MAC itself as well as the Ammo Racks,
      Shells and Multi-Tool means that the player needs to consider their priorities and choose
      their tasks. The need to make these decisions will further inhibit their proficiency at the tasks,
      leading to a higher chance of failure. The stress induced fail conditions often leave players
      with a feeling of frustration that encourages them to try again and push on to improve on
      their own score or success.
    </template>
    <template #ImageColumn>
      <ProjectInlineImage image="/images/mos/mac1.png" />
    </template>
  </ProjectParagraph>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectTitleLink from "@/components/ProjectTitleLink.vue";
import ProjectParagraph from "@/components/ProjectParagraph.vue";
import ProjectInlineImage from "@/components/ProjectInlineImage.vue";
export default {
  name: "agm",
  components: {ProjectInlineImage, ProjectParagraph, ProjectTitleLink, ProjectTitle}
}
</script>