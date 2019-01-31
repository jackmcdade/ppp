window.Vue = require('vue');


var app = new Vue({
    el: '#app',
    data: {
        rates: rates,
        countryCodes: currencies,
        currentCountry: 'USD',
        foreignCountry: 'PHP',
        value: 100
    },
    computed: {
        burgerPrice() {
            if (this.burgerValuation < 0) {
                return parseFloat(Math.abs(this.value * this.burgerValuation)).toLocaleString('en', { style: 'currency', currency: 'USD' });
            }
            return this.value;
        },
        percievedPrice() {
            if (this.burgerValuation < 0) {
                return parseFloat(Math.abs(this.value / this.burgerValuation)).toLocaleString('en', { style: 'currency', currency: 'USD' });
            }
            return this.value;
        },
        gdpPrice() {
            if (this.gdpValuation < 0) {
                return Math.abs(this.value * this.gdpValuation).toLocaleString('en', { style: 'currency', currency: 'USD' });
            }
            return this.value;
        },
        burgerValuation() {
            return (this.rates[this.foreignCountry].dollar_valuation)/100;
        },
        gdpValuation() {
            return (this.rates[this.foreignCountry].dollar_adj_valuation)/100;
        }
    },
});
