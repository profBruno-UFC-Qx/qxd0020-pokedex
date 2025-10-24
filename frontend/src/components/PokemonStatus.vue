<script setup lang="ts">

const props = defineProps<{
    label: string,
    valor: number,
    color?: string
}>();

</script>

<template>
    <div class="row">
        <div class="col">
            {{label}}
        </div>
        <div class="col-9">
            <div class="progress">
                <div class="progress-bar text-start ps-1" role="progressbar" :style="[color ? {'background\-color': color} : '', { width: valor + '%'}]">
                    {{valor}}
                </div>
            </div>
        </div>
    </div>
</template>