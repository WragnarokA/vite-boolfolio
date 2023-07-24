<script >

export default {
    name: "AppHome",
    data() {
        return {
            navLinks: [
                { name: "home", lavel: "Home" },
                { name: "about", lavel: "Abaut us" },
                { name: "posts", lavel: "Posts" },
                // { name: "single-post", lavel: "Post", params: { id: 3 } },
                // { name: "error", lavel: "Error Page TEST", params: { code: "404" } }


            ]

        }

    },
}

</script>


<template>
    <section>
        <h1>Home</h1>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Home bar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav " v-for="i in navLinks">
                        <router-link :to="{ name: i.name, params: i.params }" class="nav-link active mx-3"
                            aria-current="page">{{ i.lavel
                            }}</router-link>
                    </div>
                </div>

            </div>
        </nav>
    </section>
</template>
