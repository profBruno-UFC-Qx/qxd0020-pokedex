<script setup lang="ts">

    const props = defineProps<{
        label: string,
        valor: number
    }>();
</script>

<template>
    <div class="row">
        <div class="col">
            {{label}}: {{valor}}
        </div>
        <div class="col">
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="{ width: valor + '%'}"></div>
            </div>
        </div>
    </div>
</template>