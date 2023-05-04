<template>
    <div class="d-flex flex-column socialnet">
        <div class="facebook ">
            <a href=""><img src="../static/facebook.svg" alt="logo_facebook"></a>
        </div>
        <div class="instagram">
            <a href=""> <img src="../static/instagram.svg" alt="instagram"></a>

        </div>
        <div class="twitter">
            <a href=""> <img src="../static/twitter.svg" alt="twitter"></a>

        </div>
    </div>
</template>
   
<style  scoped lang="scss">
@media only screen and (max-width: 768px) {

    /* For mobile phones: */
    * {
        display: none;
    }

}

.twitter,
.instagram,
.facebook {

    a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: #FFFFFF;
        border-radius: 50px;
        margin-top: 10px;
    }
}

.socialnet {
    position: absolute;
    width: 50px;
    height: 172px;
    // left: 1363px;
    right: 15%;
    // top: 404px;
}
</style>
   