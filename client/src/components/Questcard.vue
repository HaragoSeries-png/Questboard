<template>
    <div class="cards">

        <div class="card">
            <v-img :src='image' alt="" class="card__img"></v-img>
            <div class="card__content">
                <h2>{{Name}}</h2>
                <p>{{Detail}}</p>
            </div>
            <div class="card__info">
                <div>
                    {{Reward}}
                </div>
            <div>
                <a href="./" class="more">View More</a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        Name: String,
        Detail: String,
        Reward: String,
        image:String
    }

}
</script>