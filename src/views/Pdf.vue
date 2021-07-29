<template>
    <VuePdfEmbed source="http://192.168.0.128:10110/hfpp-service/file/visit/hfpp/addressablefile/5dbd2575891947a5ad427b7823a8dfa1.pdf"/>
    <embed
        src='http://192.168.0.128:10110/hfpp-service/file/visit/hfpp/addressablefile/5dbd2575891947a5ad427b7823a8dfa1.pdf'
        type="application/pdf"
        width="100%"
        height="700px;"
    />
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'
export default {
    name: "Pdf",
    components: {VuePdfEmbed},
    data() {
        return {}
    },
    computed: {},
    created() {

    },
    methods: {}
}
</script>

<style scoped>

</style>