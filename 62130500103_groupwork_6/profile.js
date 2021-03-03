const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    }
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            errors: null,
        }
    },

    methods: {
        checkForm(e) {
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname
                },
                constraints)
            if (this.errors) {
                e.preventDefault();
            }else{
                alert("yayyy")
            }
        }
    }
})

app.mount('#app')