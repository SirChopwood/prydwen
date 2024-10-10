<script setup>
defineProps(['title', 'subtitle'])
</script>

<template>
  <div class="w-full h-fit p-2 border-2 border-neutral-700 rounded-lg text-left text-neutral-400">
    <label class="mb-2 border-b-2 border-neutral-600 text-left peer flex flex-row select-none cursor-pointer hover:text-primary fill-primary transition-all duration-75">
      <input type="checkbox" class="peer size-0 opacity-0">
      <div class="grow text-xl font-bold text-neutral-200 hover:text-primary ">{{ title }}</div>
      <div class="collapse peer-checked:visible italic pr-2 text-neutral-700">Hidden</div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 peer-checked:hidden">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 collapse peer-checked:visible">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    </label>
    <div class="peer-has-[:checked]:hidden">
      <div class="italic">{{ subtitle }}</div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelControlCategory"
}
</script>