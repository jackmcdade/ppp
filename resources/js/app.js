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
            return parseFloat(this.value * this.burgerValuation).toLocaleString('en', { style: 'currency', currency: 'USD' });
        },
        perceivedPrice() {
            return parseFloat(this.value / this.burgerValuation).toLocaleString('en', { style: 'currency', currency: 'USD' });
        },
        foreignCountryName() {
            return this.countryCodes.find(country => country.value === this.foreignCountry).text;
        },
        // gdpPrice() {
        //     if (this.gdpValuation < 0) {
        //         return Math.abs(this.value * this.gdpValuation).toLocaleString('en', { style: 'currency', currency: 'EUR' });
        //     }
        //     return this.value;
        // },
        burgerValuation() {
            var tmp = this.rates[this.foreignCountry].dollar_valuation/100
            return 1-Math.abs(tmp);
        },
        gdpValuation() {
            return (this.rates[this.foreignCountry].dollar_adj_valuation)/100;
        }
    },
});
