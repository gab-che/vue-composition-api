<script setup>
    import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
    import { getRandomColor } from '../store';
    import ModalNote from '../components/ModalNote.vue';
    import SingleNote from '../components/SingleNote.vue';

    const showModal = ref(false);
    const notes = ref([]);
    const errorMessage = ref('');

    const addNewNote = (text) =>{
        text = text.trim();
        if(text.length < 10){
            return errorMessage.value = 'Il testo deve contenere almeno 10 caratteri'
        }

        notes.value.push({
            id: Math.floor(Math.random() * 10000000),
            text: text,
            date: new Date().toLocaleString(),
            color: getRandomColor(),
        });
        showModal.value = false;
        errorMessage.value = '';
        } 

    const closeModal = () => {
        showModal.value = false;
        errorMessage.value = '';
    }

    watch(notes.value, () => {
        localStorage.setItem('notes', JSON.stringify(notes.value))
    })

    onMounted(() =>{
        if(localStorage || localStorage.getItem('notes').length > 0){
            notes.value = JSON.parse(localStorage.getItem('notes'));
        }
        console.log(localStorage)
    })
</script>

<template>
    <Teleport to="body">
        <ModalNote
            @close="closeModal" 
            @new-note="addNewNote"
            :error="errorMessage"
            :show="showModal"/>
    </Teleport>
    <div class="notes_container">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <h1>Notes</h1>
            <button @click="showModal = true">+</button>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3 col_aspect"
            v-for="note in notes" :key="note.id">
                <SingleNote :note="note"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "../style/general";
    button{
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 100%;
    }

    .col_aspect{
        aspect-ratio: 4/3;
        margin-bottom: 1rem;
    }
</style>