<template>
    <img :src="imgPath" class="img-card" :class="imgSize" />
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        }
    },
    computed: {
        imgSize: function() {
            switch (this.size) {
                case "L":
                    return "large-img";
                case "M":
                    return "middle-img";
                case "S":
                    return "small-img";
            }
        }
    }
};
</script>

<style scoped>
.img-card {
    margin: 10px;
}

.small-img {
    width: 75px;
    height: 75px;
}
.middle-img {
    width: 125px;
    height: 125px;
}
.large-img {
    width: 250px;
    height: 250px;
}
</style>
