<template>
  <div id="background" class="fixed w-full h-full top-0 left-0"></div>
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
    <ProjectThumbnail title="Adventurer's Guild Manager" subtitle="Master's Final Project, Gameplay Programming & User Interfaces" image="/prydwen/images/agm/LogoPart1.png" link="/prydwen/projects/agm"/>
  </div>
  <div class="mt-8 text-2xl text-center text-secondary">My other projects:</div>
  <div class="w-full mt-2 grid grid-cols-4 gap-8 px-4 justify-items-center">
    <ProjectThumbnail title="Munitions Officer Simulator" subtitle="Game Feel and Polish" image="/prydwen/images/mos/SplashScreen.png" link="/prydwen/projects/mos"/>
    <ProjectThumbnail title="Versus Tower Defence" subtitle="Online Multiplayer Prototype" link="/prydwen/projects/vstd">
      <div class="absolute bottom-0 w-full px-2 py-1 bg-amber-800 border-2 border-amber-400 rounded-b-md text-amber-400 opacity-50 group-hover:opacity-100">Work-In-Progress</div>
    </ProjectThumbnail>
    <ProjectThumbnail title="Siege and Shield" subtitle="Senior Collaborative Project" image="/prydwen/images/sas/SiegeAndShieldHeader.png" link="/prydwen/projects/sas"/>
    <ProjectThumbnail title="Ramiris' Heresy" subtitle="Arma 3 Modding Experience" image="/prydwen/images/rh/Voidmen.png" link="https://steamcommunity.com/sharedfiles/filedetails/?id=2167631151"/>
    <ProjectThumbnail title="FLAGS Mod" subtitle="Satisfactory Modding" image="/prydwen/images/flags/FLAGS.png" link="https://ficsit.app/mod/XLuK6Ci158x4G"/>
      <ProjectThumbnail title="DMCA Friday" subtitle="Discord & Twitch Bots with Web Panel" link="/prydwen/projects/dmca">
        <div class="absolute bottom-0 w-full px-2 py-1 bg-amber-800 border-2 border-amber-400 rounded-b-md text-amber-400 opacity-50 group-hover:opacity-100">Work-In-Progress</div>
      </ProjectThumbnail>
    </div>
</template>

<script>
import ProjectThumbnail from "@/components/ProjectThumbnail.vue";
export default {
  components: {ProjectThumbnail}
}
</script>