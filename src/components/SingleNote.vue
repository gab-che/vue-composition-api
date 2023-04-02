<script setup>
    const props = defineProps({
        note: {
            type: Object,
            required: true,
        }
    })
</script>

<template>
    <div class="card note h-100 justify-content-between" :style="{'backgroundColor': props.note.color}">
        <div class="note_text">{{ props.note.text }}</div>
        <div class="note_date">{{ props.note.date }}</div>
    </div>
</template>

<style scoped lang="scss">
    
    .note{
        padding: .7rem;

        .note_date{
            font-size: 10px;
        }
    }
</style>