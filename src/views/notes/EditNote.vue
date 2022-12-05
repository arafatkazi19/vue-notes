<template>
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <form @submit.prevent="editForm" method="post" class="p-2">
                    <div class="form-group">
                        <label>Title</label>
                        <input v-model="notes.title" type="text" class="form-control" name="title"
                               placeholder="Enter title">
                    </div>
                    <div class="form-group">
                        <label>Datetime</label>
                        <input v-model="notes.datetime" type="datetime" class="form-control" name="datetime"
                               placeholder="Enter Datetime">
                    </div>

                    <div class="row">
                        <div class="col-md-8 mx-auto">
                            <button type="submit" class="btn btn-primary mr-1">Submit</button>
                            <router-link class="btn btn-warning" to="/notes">Go Back</router-link>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: "EditNote",
        data() {
            return {
                notes: {
                    title: '',
                    datetime: '',
                },

                note: []
            }
        },

        async mounted() {
            // console.warn(this.$route.params.id);
            const result = await axios.get('http://localhost/NotesCake/notes/view/' + this.$route.params.id);
            // console.warn(result.data);
            this.notes = result.data.note
            console.warn(result.data.note);
            // console.log(this.$route.params.id);
        },

        methods: {
            editForm() {
                axios.put('http://localhost/NotesCake/notes/edit/' + this.$route.params.id, this.notes)
                    .then((res) => {
                        if (res.status === 200) {
                            // console.log(res);
                            this.$router.push("/notes");
                        }
                    })
            }
        }
    }

</script>
