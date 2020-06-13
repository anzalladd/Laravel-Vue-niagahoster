<template>
    <div class="home">
        <MainHeader />
        <div class="support container">
            <div class="row justify-content-center">
                <div class="col col-lg-3 d-flex flex-column align-items-center">
                    <div class="image-wrapper">
                        <img
                            src="../../../assets/images/zendguard.png"
                            alt="zendguard"
                        />
                    </div>
                    <p class="support-text text-center">
                        PHP Zend Guard Loader
                    </p>
                </div>
                <div class="col col-lg-3 d-flex flex-column align-items-center">
                    <div class="image-wrapper">
                        <img
                            src="../../../assets/images/composer.png"
                            alt="composer"
                        />
                    </div>
                    <p class="support-text text-center">
                        PHP Composer
                    </p>
                </div>
                <div class="col col-lg-3 d-flex flex-column align-items-center">
                    <div class="image-wrapper">
                        <img
                            src="../../../assets/images/ioncube.png"
                            alt="ioncube"
                        />
                    </div>
                    <p class="support-text text-center">
                        PHP ionCube Loader
                    </p>
                </div>
            </div>
        </div>
        <div class="price container py-5">
            <h2 class="text-center font-weight-bold">
                Paket Hosting Singapura yang tepat
            </h2>
            <h4 class="text-center">
                Diskon 40% + Domain dan SSL Gratis untuk Anda
            </h4>
        </div>
    </div>
</template>

<script>
import MainHeader from "../components/MainHeader";
export default {
    components: { MainHeader }
};
</script>
