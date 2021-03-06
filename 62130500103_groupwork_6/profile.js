const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    email:{
        presence: true,
    },
    phone: {
        presence: true,
    },
    address: {
        presence: true,
    },
    country: {
        presence: true,
    }
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            country: null,
            address: null,
            phone: null,
            email: null,
            errors: null,
        }
    },

    methods: {
        checkForm(e) {
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    phone: this.phone,
                    country: this.country,
                    address: this.address,
                },
                constraints)
            if (this.errors) {
                e.preventDefault();
            }else{
                alert("Pls")
            }
        }
    }
})

app.mount('#app')