<template>
    <div>
        <MainNavbar />
        <router-view></router-view>
    </div>
</template>
<script>
import MainNavbar from "../components/MainNavbar";
export default {
    components: {
        MainNavbar
    }
};
</script>
