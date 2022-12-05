<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <h4>Notes</h4>
                        <router-link class="btn btn-success" to="/notes/add">Add Note</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Title</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(note, index) in notes" :key="index">
                                <td>{{ note.datetime }}</td>
                                <td>{{ note.title }}</td>
                                <td>
                                    <router-link class="btn btn-primary" :to="'/notes/view/'+note.id">View</router-link>
                                </td>

                                <td>
                                    <router-link class="btn btn-warning" :to="'/notes/edit/'+note.id">Edit</router-link>
                                </td>

                                <td>
                                    <button class="btn btn-danger" v-on:click="deleteNote(note.id)">Delete</button>
                                    <!--                                    <button class="btn btn-warning" v-on:click="editNote(note.id)">Edit</button>-->
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {

        data() {
            return {
                // newscontents: []
                notes: []
            }
        },

        created: function () {
            this.fetchItems();
        },

        methods: {
            fetchItems() {
                axios.get('http://localhost/NotesCake/notes', {}).then(res => {
                    //console.log(res.data);
                    this.notes = res.data.notes;
                    //  console.log(res.data.notes);
                    //  console.log(res.data);
                }).catch(err => {
                    console.log(err.response);
                });
            },

            deleteNote(id) {
                axios.delete("http://localhost/NotesCake/notes/delete/" + id).then(() => {
                    this.fetchItems();
                })
            }
        },
        mounted() {
            this.fetchItems();
        }

    }
</script>
