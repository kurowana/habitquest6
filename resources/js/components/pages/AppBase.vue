<template>
    <div>
        app
        <b-container-fluid>
            <b-row>
                <b-col><router-view name="gameUnit"></router-view></b-col>
                <b-col><router-view name="habitUnit"></router-view></b-col>
            </b-row>
        </b-container-fluid>
    </div>
</template>

<script>
export default {};
</script>
