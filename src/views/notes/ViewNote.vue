<template>
        <div class="container" >
           <div class="row">
               <div class="col-md-8">
                   <div  class="card" style="width: 18rem;">
                       <div class="card-body">
                           <h5 class="card-title">{{note.id}}</h5>
                           <p class="card-text">{{note.title}}</p>
                           <p class="card-text">{{note.datetime}}</p>


                           <router-link to="/notes" class="btn btn-primary mr-1">Back</router-link>
                           <router-link class="btn btn-warning" :to="'/notes/edit/'+note.id">Edit</router-link>

                       </div>
                   </div>
               </div>
           </div>
        </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ViewNote",
        data(){
           return{

               note : {
                   title : '',
                   datetime : ''
               },

             //  note : [],
            }
        },

        mounted() {
            //console.warn(this.$route.params.id);
            //console.log(this.notes);
            axios.get('http://localhost/NotesCake/notes/view/'+this.$route.params.id).then((res)=>{
                //console.warn(res.data);
               // console.warn(res.data.note)
                this.note = res.data.note;
            });
            //this.notes = result.data.notes;
            //console.log(this.data.notes)
        }
    }
</script>

<style scoped>

</style>
