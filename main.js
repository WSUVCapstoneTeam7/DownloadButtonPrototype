
Vue.component('download-button',{
    template:   '<div>'+
                    '<button v-on:click = \'downloadCrap\'>'+
                        'Download'+
                    '</button>'+
                '</div>',
    data: function(){
        return {
            
        }
    },
    methods:{
        downloadStuff: function (fileName, mapData){
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(mapData));
            element.setAttribute('download', fileName);
        
            element.style.display = 'none';
            document.body.appendChild(element);
        
            element.click();
        
            document.body.removeChild(element);
            
            // Start file download.
        },
        downloadCrap: function(){
                        // Generate download of hello.txt file with some content
            var fileName = "seat-map.json";
            var jsonString = JSON.stringify(vm.mapData);
            var blob = new Blob([jsonString], {type: "application/json"});
            console.log(blob);
            this.downloadStuff(fileName, jsonString);
        }
    },
    created: function(){
    }
})


var vm = new Vue({
    el:'#vue-app',
    data:{
        mapData:{
            posX: 122,
            posY: 360,
            sold: false,
            price: 100,
            row: "A",
            col: "13"
        },
    },
    methods:{

    }
})

