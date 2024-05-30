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
    <PortfolioCard title="Adventurer's Guild Manager" desc="Master's Final Project, Gameplay Programming & User Interfaces" image="/agm/LogoPart1.png" link="/agm"/>
  </div>
  <div class="mt-8 text-2xl text-center text-secondary">My other projects:</div>
  <div class="w-full mt-2 grid grid-cols-4 gap-8 px-8 justify-items-center">
    <PortfolioCard title="MOSVR" desc="Game Feel and Polish - Project 2" link="/mosvr"/>
    <PortfolioCard title="Village Builder" desc="Game Feel and Polish - Project 1" link="/vb"/>
    <PortfolioCard title="Versus Tower Defence" desc="Online Multiplayer Prototype" link="/vstd"/>
    <PortfolioCard title="Siege and Shield" desc="Senior Collaborative Project" link="/sas"/>
    <PortfolioCard title="Ramiris' Heresy" desc="Arma 3 Modding Experience" link="/rh"/>
    <PortfolioCard title="FLAGS Mod" desc="Satisfactory Modding" link="/flags"/>
    <PortfolioCard title="DMCA Friday" desc="Discord & Twitch Bots plus Web Panel" link="/dmca"/>
  </div>
</template>

<script>
import PortfolioCard from "@/components/PortfolioCard.vue";
export default {
  components: {PortfolioCard}
}
</script>