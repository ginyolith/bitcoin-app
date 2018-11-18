const url ="https://api.coindesk.com/v1/bpi/currentprice.json"

const app = new Vue({
    el : '#app',
    data : {
        bpi : null,
        hasError : false,
        loading : true
    },

    mounted : function(){
        axios.get(url)
        .then(function(response) {
            console.log(response.data.bpi)
            console.log(response.data.bpi.USD)
            this.bpi = response.data.bpi
        }.bind(this))
        .catch(function(error) {
            this.hasError = true
            console.log(error)
        }.bind(this))
        .finally(function() {
            this.loading = false
        }.bind(this))
    },

    filters: {
            currencyDecimal(value) {
                return value.toFixed(2)
            }
    },

    methods : {

    }
})