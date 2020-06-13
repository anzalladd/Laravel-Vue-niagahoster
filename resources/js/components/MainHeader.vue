<template>
    <div class="mainHeader">
        <header class="container">
            <div class="row align-items-center">
                <div class="col col-lg-6 col-12">
                    <h1 class="font-weight-bold">PHP Hosting</h1>
                    <h4 class="header-description">
                        Cepat, handal, penuh dengan <br />
                        modul PHP yang Anda Butuhkan
                    </h4>
                    <div class="mt-3">
                        <div
                            class="list-wrapper d-flex align-items-center"
                            v-for="item in listsItem"
                            :key="item.id"
                        >
                            <div class="icon-wrapper">
                                <i class="fa fa-check"></i>
                            </div>
                            <p class="mb-0 ml-3">
                                {{ item.text }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-6 col-12">
                    <img src="../../../assets/images/header.svg" />
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listsItem: [
                {
                    id: 1,
                    text: "Solusi PHP untuk performa query yang lebih cepat"
                },
                {
                    id: 2,
                    text: "Konsumsi memori yang lebih rendah"
                },
                {
                    id: 3,
                    text: "Support PHP 5.3, PHP 5.4, PHP 5.6, PHP 7"
                },
                {
                    id: 4,
                    text: "Fitur enkripsi IonCube dan Zend Guard Loaders"
                }
            ]
        };
    }
};
</script>
