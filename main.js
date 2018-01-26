
Vue.component('download-button',{
    template: '#download-button',
    data(){
        return {
        }
    },
    methods:{
        downloadCrap(){
            console.log("DownloadingCrap!!!!");
        }
    },
    created(){}
})


var vm = new Vue({
    el:'#vue-app',
    data:{
    },
    methods:{}
})