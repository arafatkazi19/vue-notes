<template>
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <form @submit.prevent="addForm" method="post" class="p-2">
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
        name: "CreateNote",
        data() {
            return {
                notes: {
                    title: null,
                    datetime: null,
                }
            }
        },

        methods: {
            addForm() {
                axios.post('http://localhost/NotesCake/notes/add', this.notes)
                    .then((res) => {
                        if (res.status === 200) {
                            //console.log(res);
                            this.$router.push("/notes");
                        }
                        // if (res.status === 200 && res.data.code === 200) {
                        //     this.successMessage = res.data.message;
                        //     this.$router.push("/notes");
                        // } else {
                        //     this.errorMessage = res.data.message;
                        // }
                    });

                //  console.log(this.notes)
                //   axios.post("http://localhost/NotesCake/notes/add",this.notes).then((result)=>{
                //       console.warn(result)
                //   })
                // e.preventDefault();
            }
        }

    }
</script>
