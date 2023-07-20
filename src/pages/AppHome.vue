<script >

export default {
    name: "AppHome",
    data() {
        return {
            navLinks: [
                { name: "home", lavel: "Home" },
                { name: "about", lavel: "Abaut us" },
                { name: "posts", lavel: "Posts" },
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
                <a class="navbar-brand" href="#">NavLinks</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item" v-for="i in navLinks">
                            <router-link :to="{ name: i.name }" class="nav-link active" aria-current="page">{{ i.lavel
                            }}</router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    </section>
</template>
