<template>
    <div class="App">
        <v-app>
            <v-content>
                <v-container fluid>
                    {{message}}
                    <exemple></exemple>
                </v-container>
            </v-content>
        </v-app>



    </div>
</template>

<script>
    export default {
        props: {
        },
        data(){
            return {
                message: "Aperçu des composants Vuetify"
            }
        }
    };
</script>
