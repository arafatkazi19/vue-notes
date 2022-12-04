<template>
    <form  @submit.prevent="addForm" method="post">
        <div class="form-group">
            <label>Title</label>
            <input v-model="notes.title" type="text" class="form-control" name="title"   placeholder="Enter title">
        </div>
        <div class="form-group">
            <label>Datetime</label>
            <input v-model="notes.datetime" type="datetime" class="form-control" name="datetime" placeholder="Enter Datetime">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "CreateNote",
        data() {
            return{
                notes :{
                    title : "asdsadas",
                    datetime : "2221",
                }
            }
        },

        methods :{
            addForm(){
                axios.post(  'http://localhost/NotesCake/notes/add', this.notes)
                    .then((res) => {
                        if (res.status === 200){
                            console.log(res);
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

        // created() {
        //
        //     axios.post("http://localhost/NotesCake/notes/add")
        //         .then(response => {
        //
        //             if (response.status === 200 && response.data.code === 200) {
        //                 this.successMessage = response.data.message;
        //                 this.$router.push("/notes");
        //             } else {
        //                 this.errorMessage = response.data.message;}
        //             });
        // }
    }

</script>
