<script >
import axios from 'axios';

export default {
    name: "SinglePost",
    data() {
        return {
            loading: false,
            apiUrl: "http://localhost:8000/api/",
            apiProjects: "projects/",
            loadingError: false,
            post: null
        }



    },
    components: {

    },
    methods: {
        getPost(id) {

            this.loading = true;
            axios.get(this.apiUrl + this.apiProjects + id).then(response => {
                console.log(response.data);
                this.post = response.data.results;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
                this.$router.push({ name: 'error', params: { code: 404 } })
            });

        },
    },
    mounted() {
        this.getPost(this.$route.params.id)
    }
}



</script>


<template>
    <section v-if="post">
        <h1>Benvenuto su SinglePost "Wilmer" </h1>
        <div class="d-flex justify-content-center">

            <div class="card" style="width: 18rem;">
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
                    <a href="posts/:id" class="btn btn-primary">Torna ai Posts</a>

                </div>
            </div>

        </div>

    </section>
</template>
