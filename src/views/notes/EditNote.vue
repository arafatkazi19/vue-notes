<template>
    <div class="card">
        <form @submit.prevent="updateNote">
            <div class="card-header">
                Edit Note
            </div>
            <div class="card-body">
                <NoteForm :item="item_data" />
            </div>
            <div class="card-footer">
                <button type="submit"  class="btn btn-info mx-1 text-white">Update</button>   or
                <router-link class="btn btn-danger text-white"  to="/notes">Cancel</router-link>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    import NoteForm from '@/views/notes/NoteForm.vue';

    export default {
        name: 'App',
        data() {
            return{
                item_data: {},
                successMessage: "",
                errorMessage: "",
                name:"",
                datetime:""
            }
        },
       // inject: ['apiBasePath'],
        created: function ()
        {
            this.fetchItem();
        },

        methods: {
            fetchItem()
            {
                axios.get( 'http://localhost/NotesCake/notes/view/'+ this.$route.params.id, {
                }).then(res => {
                    // console.log(res);
                    this.item_data = res.data;
                }).catch(err => {
                    console.log(err.response);
                });
            },
            updateNote() {

                console.log(this.item_data);



                // var formData = new FormData();
                //
                // //   var localDate = new Date(this.item_data.title);
                //
                // formData.append('title','edit');
                // formData.append('datetime','2022-11-29 05:00:28');

                axios.post('http://localhost/NotesCake/notes/edit/' + this.$route.params.id)
                    .then((res) => {
                        if (res.status === 200 && res.data.code === 200) {
                            this.successMessage = res.data.message;
                            this.$router.push('/notes');
                        } else {
                            this.errorMessage = res.data.message;
                        }
                    });
            }
        },
        components: {
            NoteForm
        }
    }
</script>
