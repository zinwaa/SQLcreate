<script>

export default {
    props: {
        menu: {
            type: String,
            required: true
        }
    },
    setup(props,context) {

        function isActive() {
            context.emit("isActive",props.menu)
        }
        return {
            isActive,
        }
    },

}
</script>

<template>
    <div class="item"  @click="isActive">
        <span class="ItemContext">
            {{ menu }}
        </span>
    </div>
</template>


<style scoped>
.item {
    box-sizing: border-box;
    border-radius: 4px;
    transition: 0.2s;
    line-height: 40px;
    text-align: center;
}

.item:hover {
    background-color: var(--BacColor)
}
.ItemContext {
    font-size: 14px;
    color: var(--fontColor);
}

</style>