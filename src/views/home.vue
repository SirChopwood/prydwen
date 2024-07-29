<template>
  <div id="background" class="fixed w-full h-full top-0 left-0"></div>
  <div class="flex my-40 md:my-80 w-full h-1/6 justify-center">
    <div class="relative text-left text-7xl top-10 left-2 md:left-6 lg:left-16">
      <div class="absolute text-left text-3xl -top-10 -left-2 md:-left-12 lg:-left-32">
        Hello there...
      </div>
      I'm <span class="text-primary">Louis</span>
    </div>
  </div>
  <div class="w-full mt-8 text-3xl text-secondary text-left border-b-2 border-secondary font-black">My Portfolio</div>
  <div class="w-full mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 justify-items-center">
    <ProjectThumbnail title="Adventurer's Guild Manager" subtitle="Master's Final Project, Gameplay Programming & User Interfaces" image="/images/agm/LogoPart1.png" link="/#/projects/agm">
      <div class="absolute bottom-0 w-full px-2 py-0.5 text-xl font-black bg-cyan-800 border-2 border-cyan-400 rounded-b-md text-cyan-400">NEW</div>
    </ProjectThumbnail>
    <ProjectThumbnail title="Munitions Officer Simulator" subtitle="Game Feel and Polish" image="/images/mos/SplashScreen.png" link="/#/projects/mos"/>
    <ProjectThumbnail title="DMCA Friday" subtitle="Discord & Twitch Bots with Web Panel" link="/#/projects/dmca">
      <div class="absolute bottom-0 w-full px-2 py-0.5 text-xl font-black bg-amber-800 border-2 border-amber-400 rounded-b-md text-amber-400 opacity-50 group-hover:opacity-100 font-black">Work-In-Progress</div>
    </ProjectThumbnail>
    <ProjectThumbnail title="Versus Tower Defence" subtitle="Online Multiplayer Prototype" link="/#/projects/vstd">
      <div class="absolute bottom-0 w-full px-2 py-0.5 text-xl font-black bg-amber-800 border-2 border-amber-400 rounded-b-md text-amber-400 opacity-50 group-hover:opacity-100 font-black">Work-In-Progress</div>
    </ProjectThumbnail>
    <ProjectThumbnail title="Siege and Shield" subtitle="Senior Collaborative Project" image="/images/sas/SiegeAndShieldHeader.png" link="/#/projects/sas"/>
    <ProjectThumbnail title="Ramiris' Heresy" subtitle="Arma 3 Modding Experience" image="/images/rh/Voidmen.png" link="https://steamcommunity.com/sharedfiles/filedetails/?id=2167631151"/>
    <ProjectThumbnail title="FLAGS Mod" subtitle="Satisfactory Modding" image="/images/flags/FLAGS.png" link="https://ficsit.app/mod/XLuK6Ci158x4G"/>
    </div>
</template>

<script>
import ProjectThumbnail from "@/components/ProjectThumbnail.vue";
export default {
  components: {ProjectThumbnail}
}
</script>