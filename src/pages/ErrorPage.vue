<script >

export default {
    name: "ErrorPage",
    data() {
        return {


        }

    },
}

</script>


<template>
    <section>
        <div class="containerError">
            <h1>404 - Not Found {{ $route.params.code }}</h1>
            <img src="https://media.gettyimages.com/id/1359544016/it/vettoriale/404-errore-errore-del-programma-pagina-web-non-pu%C3%B2-essere-aperta.jpg?s=612x612&w=0&k=20&c=xCU8I3CRZtBYNOoL7czT4ziAUrfmFxrg1mIU94km_DU="
                alt="">
        </div>

    </section>
</template>

<style scoped>
.containerError {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    color: brown;
}
</style>
