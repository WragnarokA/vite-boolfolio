<script >
import axios from "axios"; 

export default {
    name : "AppMain",

    data() {
        return {
            apiUrl:"http://localhost:8000/api/",
            apiProjects:"projects",
            loading:false,
            loadingError:false,
            posts:[]
        }
    },
    methods:{
        getProjects(){
            this.loading=true;
            axios.get(this.apiUrl + this.apiProjects).then( response =>{
                console.log(response.data);
                this.posts = response.data.results.data;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message; 
            }); 
            
        }

    },

    mounted() {
        this.getProjects();
    }
}



</script>

<template>
    <h2>Main</h2>
    <h3 v-if="loading">Caricamento in corso</h3>
    <h3 v-if="loadingError">{{ loadingError }}</h3>

    <div v-for="post in posts">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>

    </div>
  
</template>

<style scoped>

</style>

