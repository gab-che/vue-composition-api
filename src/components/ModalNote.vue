<script setup>
    import { ref } from 'vue';
    const noteText = ref('');

    const props = defineProps({
        error: {
            type: String,
            required: true,
        },
        show: {
            type: Boolean,
            required: true,
        }
    })
</script>

<template>
    <Transition name="modal">
        <div class="overlay px-4" v-if="props.show">
            <div class="modal_container d-flex flex-column gap-2">
                <textarea name="note" cols="30" rows="5" v-model="noteText"></textarea>
                <p v-if="props.error">{{ props.error }}</p>
                <button @click="$emit('new-note', noteText)">Add</button>
                <button @click="$emit('close')">Close</button>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
    @use '../style/general';
    @use '../style/partials/utilities' as *;

    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0, 0.7);
        transition: opacity 0.3s ease;
        @include flex_center;

        .modal_container{
            width: 750px;
            min-width: 200px;
            padding: 32px;
            background-color: white;
            border-radius: 10px;
            transition: all 0.3s ease;

            button{
                border-radius: 5px;
            }

            p{
                color: red;
            }
        }
    }
    .modal-enter-from {
        opacity: 0;
    }

    .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-from .modal_container,
    .modal-leave-to .modal_container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>