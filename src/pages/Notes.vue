<script setup>
    import ModalNote from '../components/ModalNote.vue';	
</script>

<template>
    <ModalNote />
    <div class="notes_container">
        <div class="d-flex justify-content-around align-items-center mb-5">
            <h1>Notes</h1>
            <button>+</button>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 col_aspect">
                <div class="card note">
                    <div class="note_text">ciao ciao</div>
                    <div class="note_date">12/02/2021</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 col_aspect">
                <div class="card note">
                    <div class="note_text">ciao ciao</div>
                    <div class="note_date">12/02/2021</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 col_aspect">
                <div class="card note">
                    <div class="note_text">ciao ciao</div>
                    <div class="note_date">12/02/2021</div>
                </div>
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

    .note{
        height: 100%;
        padding: .7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>