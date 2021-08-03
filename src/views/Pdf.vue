<template>
<!--    <VuePdfEmbed source="http://192.168.0.128:10110/hfpp-service/file/visit/hfpp/addressablefile/5dbd2575891947a5ad427b7823a8dfa1.pdf"/>
    -->
    <button v-focus style="width: 100px;height:50px;">asd</button>
    <a href="http://192.168.0.128:10110/hfpp-service/file/visit/hfpp/addressablefile/5dbd2575891947a5ad427b7823a8dfa1.pdf/文件名"
     target="_blank">pdfaaas</a>
    <embed ref="embed"
        src='http://192.168.0.128:10110/hfpp-service/file/visit/hfpp/addressablefile/5dbd2575891947a5ad427b7823a8dfa1.pdf#aa.pdf'
        type="application/pdf"
        width="100%"
        height="700px"
           name="asd"
           palette="red|black"/>



</template>

<script >
import VuePdfEmbed from 'vue-pdf-embed'
//import pdfvuer from 'pdfvuer'  //view=FitH,top  #toolbar=0&navpanes=0&scrollbar=0
export default {
    name: "Pdf",
    components: {VuePdfEmbed},
    data() {
        return {}
    },
    computed: {},
    created() {

    },
    mounted(){

        this.$refs.embed.title='sadddd';
        console.log(this.$refs)

    },
    methods: {}
}
</script>

<style scoped>

</style>