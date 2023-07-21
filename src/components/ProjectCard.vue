<script >
import axios from "axios";

export default {
    name: "ProjectCard",

    data() {
        return {
            apiUrl: "http://localhost:8000/api/",
            apiProjects: "projects",
            loading: false,
            loadingError: false,
            posts: [],
            postsCurrentPage: 0,
            postTotalPages: 0,
        }
    },
    methods: {
        getProjects() {

            this.loading = true;
            axios.get(this.apiUrl + this.apiProjects).then(response => {
                console.log(response.data);
                this.posts = response.data.results.data;
                this.postsCurrentPage = response.data.results.current_page;
                this.postTotalPages = response.data.results.last_page;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
                this.$router.push({ name: 'error', params: { code: 404 } })
            });

        },
        getNextPage() {
            // console.log("prossima page");
            if (this.postsCurrentPage < this.postTotalPages) {


                let config = {
                    params: {
                        page: (this.postsCurrentPage + 1)
                    }
                };

                this.loading = true;
                axios.get(this.apiUrl + this.apiProjects, config).then(response => {
                    console.log(response.data);
                    this.posts = response.data.results.data;
                    this.postsCurrentPage = response.data.results.current_page;
                    this.postTotalPages = response.data.results.last_page;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    this.loadingError = err.message;
                });
            }
        },
        getPostPage(pageNumber) {
            // console.log("prossima page");
            if (pageNumber <= this.postTotalPages) {


                let config = {
                    params: {
                        page: pageNumber
                    }
                };

                this.loading = true;
                axios.get(this.apiUrl + this.apiProjects, config).then(response => {
                    console.log(response.data);
                    this.posts = response.data.results.data;
                    this.postsCurrentPage = response.data.results.current_page;
                    this.postTotalPages = response.data.results.last_page;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    this.loadingError = err.message;
                });
            }
        },



    },

    mounted() {
        this.getProjects();
    }
}



</script>

<template>
    <nav class="navbar bg-body-tertiary mb-4  ">
        <div class="container-fluid">
            <a class="navbar-brand">Main Posts</a>
            <a class="btn btn-primary m-1" href="/">home</a>
            <router-link :to="{ name: 'about' }" class="btn btn-primary m-1">about</router-link>
            <span class="navbar-text"> Posts (Page: {{ postsCurrentPage }} di {{ postTotalPages }})</span>
            <span class="navbar-text">
                <h3 v-if="loading">Caricamento in corso</h3>
                <h3 v-if="loadingError">{{ loadingError }}</h3>
            </span>

            <a @click="getPostPage(pageNumber)" class="btn btn-primary m-1" v-for="pageNumber in  postTotalPages">Pages:
                {{ pageNumber }}</a>

            <form class="d-flex" role="search">
                <a @click="getBackPage" class="btn btn-primary m-1">Back Page</a>
                <a @click="getNextPage" class="btn btn-primary m-1">Next Page</a>
            </form>
        </div>
    </nav>

    <div class="row justify-content-around  flex-wrap gap-5">

        <div v-for="post in posts" class="card" style="width: 18rem;">
            <img src="..//assets/placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <h3 class="card-title">Tipo: {{ post.type_id ? post.type_id : "Nessun tipo" }}</h3>
                <ul class="list-group">
                    <strong>Tags:</strong>
                    <li class="list-group-item" v-if="post.tags.length" v-for="tag in post.tags">{{ tag.name }}</li>
                    <li class="list-group-item" v-else>Nesun tag</li>
                </ul>
                <p class="card-text">{{ post.content }}</p>
                <a href="" class="btn btn-primary">Vista</a>
            </div>
        </div>

    </div>
</template>

<style scoped></style>

