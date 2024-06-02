<template>
  <div>
    <ProjectTitle title="Adventurer's Guild Manager"
                subtitle="Master's Final Project, Gameplay Programming & User Interfaces"
                image="/agm/LogoPart1.png">
      <ProjectTitleLink link="" linktext="GitHub" />
      <ProjectTitleLink link="" linktext="Itch.io" />
    </ProjectTitle>

    <ProjectParagraph title="Geometry Scripting">
      <ProjectInlineImage image="/agm/LogoPart1.png" />
      Some body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text hereSome body text here

    </ProjectParagraph>
  </div>
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