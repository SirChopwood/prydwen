<template>
  <div class="flex my-80 w-full h-1/6 justify-center">
    <div class="relative text-left text-7xl top-10 left-16">
      <div class="absolute text-left text-3xl -top-10 -left-32">
        Hello there...
      </div>
      I'm <span class="text-primary">Louis</span>
    </div>
  </div>
  <div class="mt-8 text-2xl text-center text-secondary">My latest work:</div>
  <div class="w-full mt-2 grid grid-cols-1 px-8 justify-items-center">
    <ProjectThumbnail title="Adventurer's Guild Manager" subtitle="Master's Final Project, Gameplay Programming & User Interfaces" image="/agm/LogoPart1.png" link="/projects/agm"/>
  </div>
  <div class="mt-8 text-2xl text-center text-secondary">My other projects:</div>
  <div class="w-full mt-2 grid grid-cols-4 gap-8 px-4 justify-items-center">
    <ProjectThumbnail title="MOSVR" subtitle="Game Feel and Polish - Project 2" link="/projects/mosvr"/>
    <ProjectThumbnail title="Village Builder" subtitle="Game Feel and Polish - Project 1" link="/projects/vb"/>
    <ProjectThumbnail title="Versus Tower Defence" subtitle="Online Multiplayer Prototype" link="/projects/vstd"/>
    <ProjectThumbnail title="Siege and Shield" subtitle="Senior Collaborative Project" link="/projects/sas"/>
    <ProjectThumbnail title="Ramiris' Heresy" subtitle="Arma 3 Modding Experience" link="/projects/rh"/>
    <ProjectThumbnail title="FLAGS Mod" subtitle="Satisfactory Modding" link="/projects/flags"/>
    <ProjectThumbnail title="DMCA Friday" subtitle="Discord & Twitch Bots with Web Panel" link="/projects/dmca"/>
  </div>
</template>

<script>
import ProjectThumbnail from "@/components/ProjectThumbnail.vue";
export default {
  components: {ProjectThumbnail}
}
</script>