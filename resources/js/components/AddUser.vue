<template>
    <div class="container">
        <div class="modal is-active" v-show="showModal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close" @click="showModal = false"></button>
                </header>
                <section class="modal-card-body">
                    Ime:
                    <input type="text" class="input is-info" name="ime" id="ime" v-model="ime">
                    <label style="color: red" v-if="this.ime == ''">Molimo popunite ovo polje</label>
                    <br>

                    Prezime:
                    <input type="text" class="input is-info" name="prezime" id="prezime" v-model="prezime">
                    <label style="color: red" v-if="this.prezime == ''">Molimo popunite ovo polje</label>
                    <br>

                    Email:
                    <input type="text" class="input is-info" name="email" id="email" v-model="email"
                           placeholder="example@example.com">
                   <label style="color: red" v-if="this.email == ''">Molimo popunite ovo polje</label>
                    <br>

                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" @click="save" :disabled="!canSend">Save
                    </button>
                    <button class="button" @click="showModal = false">Cancel</button>
                </footer>
            </div>
        </div>

        <button @click="showModal = true">Add user</button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                showModal: false,
                ime: '',
                prezime: '',
                email: '',
                message: 'Please enter valid email address. Example: example@example.com'
            };
        },
        methods: {
            async save() {
                try {
                    const response = await axios.post('/api/prijava/', {
                        'first_name': this.ime,
                        'last_name': this.prezime,
                        'email': this.email
                    });

                    Swal.fire({icon: 'success', text: "Added user"});
                } catch (e) {
                    Swal.fire(e.message);
                } finally {
                    this.ime = '';
                    this.prezime = '';
                    this.email = '';
                    this.showModal = false;
                }

            }
        },
        computed: {

            canSend(){
                return this.ime && this.prezime && this.email;
            }
        }
    }
</script>
