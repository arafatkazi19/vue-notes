
<template>
    <div>

<!--<router-link to="notes/add"></router-link>-->

        <div class="card">
            <div class="card-header">
                Notes
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
                            <button v-on:click="deleteNote(note.id)">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
    export default {

        data() {
            return{
               // newscontents: []
                notes: []
            }
        },

        created: function ()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                axios.get('http://localhost/NotesCake/notes', {
                }).then(res => {
                    console.log(res.data);
                    this.notes = res.data.notes;
                  //  console.log(res.data.notes);
                  //  console.log(res.data);
                }).catch(err => {
                    console.log(err.response);
                });
            },

            deleteNote(id)
            {
                    axios.delete("http://localhost/NotesCake/notes/delete/"+id).then(()=>{
                        this.getData();
                    })
            }
        }

    }
</script>
