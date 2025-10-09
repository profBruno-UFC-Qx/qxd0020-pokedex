<script setup lang="ts">
import type { PokeType } from '@/types';
import { useColor } from '@/composables/useTypeColor';

const props = defineProps<{
    types: PokeType[]
}>()

</script>

<template>
    <span class="badge rounded-pill" v-for="type in props.types" :key="type" :style="{'background\-color': useColor(type)}">
        {{ type }}
    </span>
</template>