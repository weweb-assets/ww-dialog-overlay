<template>
    <div @click="handleClick()" />
</template>

<script>
import { inject, toRef } from 'vue';

export default {
    props: {
        content: { type: Object, required: true },
    },
    emits: ['trigger-event'],
    setup(props) {
        const clickCloses = toRef(() => props.content.clickCloses);
        const { closeDialog } = inject('weweb-assets/ww-dialog-root');

        function handleClick() {
            if (clickCloses.value) {
                closeDialog();
            }
        }

        return {
            handleClick,
        };
    },
};
</script>

<style lang="scss" scoped></style>
