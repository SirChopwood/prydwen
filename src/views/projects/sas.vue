<template>
  <ProjectBackground image="/images/sas/Promotional_Poster_2.png" />
  <ProjectTitle title="Siege & Shield" subtitle="Senior Collaborative Project" image="/agm/LogoPart1.png">
    <ProjectTitleLink link="https://sirchopwood.itch.io/siege-and-shield" linktext="Itch.io" />
  </ProjectTitle>

  <ProjectParagraph title="Introduction">
    Siege & Shield (Project Name: MageDefenders) is a game that myself and ~20 other students created during a university event.
    The aim was to simulate the experience of working in a studio with different disciplines working together to finish a project.
    <br><br>
    As a team we decided on making a Third Person Tower Defence game, incorporating the unique viewpoint seen in games such as Orcs Must Die and Sanctum.
    Our art style was majorly inspired by World of Warcraft and Dauntless, using a fantasy medieval theme.
    <br><br>
    My role within the team (dubbed "Team [REDACTED]") was as Team Leader and Tech-SubTeam Leader.
  </ProjectParagraph>
  <ProjectParagraph title="Project Management">
    As Team leader I spent a lot of time coordinating the other SubTeams of the project. Ensuring information was passed from one group to another or pointing people in the correct direction to find it themselves. Multiple times a week I'd gather together the Seniors/SubTeam Leaders and discuss the progress of the project with them. A core goal being to keep the whole team up to date with development and address any questions floating about.
    <br><br>
    During our in-person sessions I'd often hover about the room talking with people as they work or discussing the project with our supervising lecturers. Additionally, during this time I was helping troubleshoot and setup the team with our Git Source Control system. Multiple times this included sitting down and giving 1-to-1 tutorials or being called over to oversee potentially breaking merges.
    <br><br>
    By the end of the project we had over 850 commits, 4 active branches and 3.3GB of files in use without any major issues or conflicts. All of this took up the majority of my in-person time, with my remote sessions taken up working on technical aspects of the project.
  </ProjectParagraph>
  <ProjectParagraph title="Building and Towers">
    <template #BodyColumn>
      My primary focus as a member of the Tech Team was the Building and Tower system. This meant creating a framework that could be used by other tech and design members.
      <br><br>
      Building is handled through an Actor Component, this contained all the logic for handling the player's current state. Included with this would be a UI for the mode and an in-world decoy, previewing where and what would be built. This was set with easy to customise data in the editor via a struct on the tower blueprints.
      <br><br>
      The towers themselves work on an inheritance system from a master blueprints, with multiple helper components for reusable functionalities. This setup means designers can quickly test and implement new towers without needing to interact with the core functionalities.
      <br><br>
      All towers are then managed by a manager actor in the world, this acts as the main method of communication and interaction between the player and towers. This manager is how the player can Buy, Sell and Upgrade towers as well as holding the currency for the game. It contains systems in place for unlockable towers throughout the game and even branching upgrade paths, if designers wish to use them.
    </template>
    <template #ImageColumn>
      <ProjectInlineImage image="/images/sas/SiegeAndShieldBuilding.gif" />
    </template>
  </ProjectParagraph>
  <ProjectParagraph title="Materials and VFX">
    <template #BodyColumn>
      One of my other tasks was working with the Environment Team to create materials and vfx for multiple assets they were implementing into engine. Often this involved just helping them setup different adjustment parameters to their textures. I also took this opportunity to experiment with a couple new ideas and further my general knowledge of Unreal Engine's new(ish) Niagara systems.
      <br><br>
      A larger task was to setup the landscape materials. This included dynamic grass and rocks and automatic cliff edges, making level editing as seamless as possible for the level designer. Along with this was tree leaves and grass meshes with materials setup for subtle swaying in the wind, brining life to otherwise entirely static meshes.
      <br><br>
      Lastly, once towers were being implemented, I worked on some particle systems that they'd use. This included the spinning crystals of the Pylon and the bubbling embers of the Cauldron tower. However, due to limitations in other areas, the priority of these elements was low so only a few were finished.
    </template>
    <template #ImageColumn>
      <ProjectInlineImage image="/images/sas/SiegeAndShieldTechArt.gif" />
    </template>
  </ProjectParagraph>
</template>

<script>
import ProjectTitle from "@/components/ProjectTitle.vue";
import ProjectTitleLink from "@/components/ProjectTitleLink.vue";
import ProjectParagraph from "@/components/ProjectParagraph.vue";
import ProjectInlineImage from "@/components/ProjectInlineImage.vue";
import ProjectBackground from "@/components/ProjectBackground.vue";
export default {
  name: "sas",
  components: {ProjectBackground, ProjectInlineImage, ProjectParagraph, ProjectTitleLink, ProjectTitle}
}
</script>