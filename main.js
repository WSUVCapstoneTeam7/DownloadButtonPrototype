
Vue.component('edit-form',{
    template: '#edit-form',
    data(){
        return {
            posX: 100,
            posY: 100,
            rows: 5,
            cols: 5,
            showEditSeatingForm: false
        }
    },
    methods:{},
    created(){
        // a bus listener for toggling visibility of the the edit seating form.
        bus.$on('sigEditSeatFormOn', ()=>{
            this.showEditSeatingForm = true;
        })
        bus.$on('sigEditSeatFormOff',()=>{
            this.showEditSeatingForm = false;
        })
    }
})


var vm = new Vue({
    el:'#vue-app',
    data:{
    },
    methods:{}
})