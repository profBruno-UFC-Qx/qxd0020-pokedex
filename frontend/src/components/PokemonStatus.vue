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
                <div class="progress-bar" role="progressbar" style="width: {{valor}}%" aria-valuenow="{{valor}}" aria-valuemin="0" aria-valuemax="{{valorMax}}"></div>
            </div>
        </div>
    </div>
</template>