<template>
    <div>
        <button>
            <a href="">
                <span>登 录</span>
            </a>
        </button>
    </div>
</template>


<script>
export default {
    components: {},
    props: {},
    setup() {
        return {
        };
    },
};
</script>


<style scoped>
* {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

button {
    background-color: var(--white);
    border: var(--BlueBorder) 1px solid;
    border-radius: 2px;
    height: 30px;
    padding: 0px;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
}

a {
    text-decoration: none;
    color: var(--BlueBac);
    display: block;
}

span {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
}
</style>