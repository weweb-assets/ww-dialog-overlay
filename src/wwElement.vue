<template>
    <div @click="closeDialog()" />
</template>

<script>
import { inject } from 'vue';

export default {
    emits: ['trigger-event'],
    setup() {
        const { closeDialog } = inject('weweb-assets/ww-dialog-root');
        return {
            closeDialog,
        };
    },
};
</script>

<style lang="scss" scoped></style>
