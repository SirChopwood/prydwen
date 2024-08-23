<template>
  <div class="fixed top-0 left-0 bg-center bg-repeat w-full h-full object-center -z-100" style="background-image: url('/images/dvz/dvzprototype.png')" />
  <ProjectTitle title="Dwarves VS Zombies Standalone"
              subtitle="Multiplayer asymmetric PvP survival personal project and daily Devlogs.">
    <ProjectTitleLink link="https://github.com/SirChopwood/DwarvesVSZombies" linktext="GitHub" />
  </ProjectTitle>

  <project-paragraph title="Overview">
    <a class="text-primary hover:underline" href="https://dwarves-vs-zombies.fandom.com/wiki/Dwarves_vs._Zombies_Wiki">Dwarves VS Zombies</a> is an old game built within Minecraft's engine by Robert Moran (Rawb). I have very fond memories of sinking countless hours into playing this game. Its systems were very fun and interesting and it was a great shame the servers had to go down. Since then I have always desired to relive those experiences hence why i'm looking to make my own take on the project.
  </project-paragraph>

  <div class="flex flex-col-reverse">
    <ProjectParagraph title="Day 1 - New Beginnings" date="07/08/2024">
      <a class="text-primary hover:underline" href="https://dwarves-vs-zombies.fandom.com/wiki/Dwarves_vs._Zombies_Wiki">Dwarves VS Zombies</a> is an old game built within Minecraft's engine by Robert Moran (Rawb). I have very fond memories of sinking countless hours into playing this game. Its systems were very fun and interesting and it was a great shame the servers had to go down. Since then I have always desired to relive those experiences hence why i'm looking to make my own take on the project.
      <br><br>
      To start off the project I made a simple little camera system. Just to get back into the groove of things, this predicts where you're moving and leads the camera on that way to keep things smooth. Also has some zooming.
    </ProjectParagraph>
    <ProjectParagraph title="Day 2 - Dwarf Menu" date="08/08/2024">
      <template #BodyColumn>
        Today i worked on the design of the main "inventory" menu for the dwarves. This is roughly based off Minecraft's inventory screen, though adjusted to make better use of space and fit my needs a bit better.
        <br><br>It looks lovely with the assets from <a class="text-primary hover:underline" href="https://www.kenney.nl/">Kenney</a>.
        <br><br>
        For now im thinking that 6 hotbar slots and 6 backpack slots will be fine for the inventory? Presuming the player holds:
        <ul class="list-disc pl-8 marker:text-primary">
          <li>Melee Weapon</li>
          <li>Ranged Weapon</li>
          <li>Ammo</li>
          <li>Healing Item</li>
          <li>Building Block</li>
          <li>Light Block</li>
        </ul>
        (and then room for 6 other items, be it more blocks or crafting items or even spare gear)
        <br>
        (armour is worn in dedicated slots)
      </template>
      <template #ImageColumn>
        <ProjectInlineImage image="/images/dvz/day2.png" />
      </template>
    </ProjectParagraph>
    <ProjectParagraph title="Day 3 - I hate Networking (Part 1 of Many)" date="09/08/2024">
      Got inventory stuff roughly working. Spent multiple hours slamming my head against a brick wall just to realise it was working fine... you just have to WAIT FOR THINGS TO SPAWN!
      <br>
      Anyway you can now add items and it syncs properly. :)
    </ProjectParagraph>
    <ProjectParagraph title="Day 4 - Inventory Fixing" date="10/08/2024">
      <template #BodyColumn>
        Hey would you look at that, the Inventory actually works now! Mostly thanks to my friend Val for being a Rubber Ducky for a bit.
        <br><br>
        But now I have a generic inventory component I can reuse across the project for anything that has one.
        <br><br>
        I also added some Tooltips.
      </template>
      <template #ImageColumn>
        <ProjectInlineImage image="/images/dvz/day4.png" />
        <ProjectInlineImage image="/images/dvz/day4-1.png" />
      </template>
    </ProjectParagraph>
    <ProjectParagraph title="Day 5 - The Draggoning" date="13/08/2024">
      <template #BodyColumn>
        No... I didnt add any dragons... Yet...
        <br><br>
        I did however get item moving between inventories working. Meaning you can now equip, rearrange and even put items in/out of external inventories.
        <br><br>
        This was one of the biggest hurdles I had going with the interface work. Sadly the tooltips took a hit as a result, but they needed to be hooked up properly anyway so that'll be next i guess.
      </template>
      <template #ImageColumn>
        <ProjectInlineImage image="/images/dvz/day5.png" />
        <ProjectInlineImage image="/images/dvz/day5-1.png" />
      </template>
    </ProjectParagraph>
    <ProjectParagraph title="Day 6 - The inventory to rule them all" date="14/08/2024">
      <template #BodyColumn>
        Today I want to be done with the inventory systems so that I can move on to other features.
        <br>
        Some small bugfixes have been done as well as some code cleanup.
        <br>
        Also added back Tooltips with a much better system so that they can be raised where/whenever I like.
        <br><br>
        Item stack splitting and merging is now here. Crafters rejoice!
        <br><br>
        The new tooltips... yeah... they look a LOT nicer. Totally no inspiration from a certain blocky game.
      </template>
      <template #ImageColumn>
        <ProjectInlineImage image="/images/dvz/day6.png" />
        <ProjectInlineImage image="/images/dvz/day6-1.png" />
        <ProjectInlineImage image="/images/dvz/day6-2.png" />
      </template>
    </ProjectParagraph>
    <ProjectParagraph title="Day 7 - Welcome to the Internet" date="16/08/2024">
      <template #BodyColumn>
        Got some backend stuff sorted out, including cleaning up some awful networking code.
        <br>
        Benefit is a nicer framework for things going forward... right!?
        <br><br>
        I've started adding the Hotbar to the HUD and with that the Health and Mana systems.
      </template>
      <template #ImageColumn>
        <ProjectInlineImage image="/images/dvz/day7.png" />
      </template>
    </ProjectParagraph>
    <ProjectParagraph title="Day 8 - Thanks Kenney!" date="17/08/2024">
        Updated a bunch of the asset packs to newer assets. (Thanks Kenney)
        <br>
        I also setup a base stat component that Mana, HP, Armour etc can all inherit from for the basic functionality.
        <br><br>
        On top of this I worked on the reliability of the character component so i can easily setup Server or Client functionality.
    </ProjectParagraph>
    <ProjectParagraph title="Day 9 - Why didnt I use Excel!?" date="18/08/2024">
      <template #BodyColumn>
        Fun stuff today! Started off with some number crunching in the planning doc. (No spoilers!)
        <br><br>
        With these numbers i've added in Armour values, which contribute to both your max health and your mana regen.
        <br>
        All this updates live as you equip/unequip.
        <br><br>
        Also redid the equipment widget a little to make it cleaner and show the useful stuff, such as displaying enchantments on a given item or its durability.
      </template>
      <template #ImageColumn>
        <ProjectInlineImage image="/images/dvz/day9.png" />
      </template>
    </ProjectParagraph>
    <ProjectParagraph title="Day 10 - Problems and Plans" date="19/08/2024">
      Today's progress has been slow. I've quickly come to realise that some of the previous work is already going to need redoing if its to be integrated together.
      <br><br>
      For one, the camera system needs overhauling to work alongside the combat system. This was especially a headache as for some reason the rotators just randomly flip to using opposing directions?
      <br><br>
      The inventory system has already been marked for conversion over to C++ by Val (thank you :3) So that'll be good.
      <br><br>
      What's less good is that i want to change items from UActors to UObjects which will require redoing most things.
      <br>
      Though this is a good chance to decouple some of the UI and functions.
    </ProjectParagraph>
    <ProjectParagraph title="Day 10 - Problems and Plans" date="19/08/2024">
      Today's progress has been slow.
      <br>
      I've quickly come to realise that some  of the previous work is already going to need redoing if its to be integrated together.
      <br>
      For one, the camera system needs overhauling to work alongside the combat system.
      <br><br>
      The inventory system has already been marked for conversion over to C++ by Val so that'll be good.
      <br>
      What's less good is needing to change items from UActors to UObjects, requiring redoing most things.
      <br>
      Though this is a good chance to decouple some of the UI and functions.
    </ProjectParagraph>
    <ProjectParagraph title="Day 11 - We're SO back!
" date="22/08/2024">
      <template #BodyColumn>
        Took a couple days off to just unwind and refresh my mind, plus I ported this devlog onto my <a class="text-primary hover:underline" href="https://x.com/LouisMayes2001" >personal twitter</a> and website.
        <br><br>
        <span class="text-secondary font-bold">(Hello if you're reading from here!)</span>
        <br><br>
        Back at it again now with the new camera angle set and rotation keybinds added.
        <br>
        I also added a few little things to the test world to aide testing.
        <br><br>
        Expect news on Val's C++ branch very soon, already got Rider and VS setup so we can go once that's ready.
      </template>
      <template #ImageColumn>
        <ProjectInlineImage image="/images/dvz/day11.png" />
      </template>
    </ProjectParagraph>
  </div>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectTitleLink from "@/components/ProjectTitleLink.vue";
import ProjectParagraph from "@/components/ProjectParagraph.vue";
import ProjectInlineImage from "@/components/ProjectInlineImage.vue";
import ProjectBackground from "@/components/ProjectBackground.vue";
export default {
  name: "agm",
  components: {ProjectBackground, ProjectInlineImage, ProjectParagraph, ProjectTitleLink, ProjectTitle}
}
</script>