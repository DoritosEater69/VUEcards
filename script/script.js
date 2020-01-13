new Vue({

    el: '#app',
    data: {
        vidID: null,
        thumbUrlSlice: null,
        test: null,
        import: [],
        limit: 5,
        hexValObject: {
            backgroundColor: this.hex,
        },
        videoUrl: 'https://www.youtube.com/embed/nKHMD2rLSQw',
    },

    mounted() {
        console.log("mounted");
        this.hexSlice();
    },

    methods: {

        hexSlice: function () {
            console.log("in hexSlice");

            const test2 = this.test.map(testFunc);

            function testFunc(test) {
                console.log(test)
                for (const [keyInner, valueInner] of Object.entries(test)) {
                    console.log("Key2: ", keyInner, "Value2: ", valueInner);
                    if (keyInner == "thumbnailUrl") {
                        var thumbUrl = valueInner;
                        console.log("Final URL: ", thumbUrl)
                        var hex = thumbUrl.slice(-6);
                        this.thumbUrlSlice = "#" + hex;
                        console.log("Final HEX: ", "#" + hex);
                    }
                    //                    Vue.set(this.limited[1], "hex", this.thumbUrlSlice)
                }
            }

        },
        
        changeVid: function(id){
            console.log(id);
            this.vidID = this.$refs.firstVid
        }
    },


    created() {
        console.log("in created");
        axios
            .get('https://jsonplaceholder.typicode.com/photos/')
            .then(response => (this.import = response.data))
    },

    computed: {
        limited() {
            console.log("in limited");
            if (this.limit) {
                this.test = this.import.slice(0, this.limit);
                return this.import.slice(0, this.limit);
            }
            return this.import;
        }
    }
});