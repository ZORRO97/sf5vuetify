<template>
    <div>
        <v-btn color="#A8C2F1" small rounded>un bouton</v-btn>

        <v-alert type="success">V-alert type success</v-alert>

        <v-row justify="space-around">

            <v-avatar color="indigo" size="36">
                <span class="white--text headline">36</span>
            </v-avatar>

            <v-avatar color="teal" size="48">
                <span class="white--text headline">48</span>
            </v-avatar>

            <v-avatar color="orange" size="62">
                <span class="white--text headline">62</span>
            </v-avatar>

        </v-row>

        <v-toolbar>
            <v-tabs
                    dark
                    background-color="primary"
                    grow
            >
                <v-tab>
                    <v-badge
                            color="pink"
                            dot
                    >
                        Item One
                    </v-badge>
                </v-tab>

                <v-tab>
                    <v-badge
                            color="green"
                            content="6"
                    >
                        Item Two
                    </v-badge>
                </v-tab>

                <v-tab>
                    <v-badge
                            color="deep-purple accent-4"
                            icon="mdi-vuetify"
                    >
                        Item Three
                    </v-badge>
                </v-tab>
            </v-tabs>
        </v-toolbar>


            <div>
                <v-app-bar
                        color="deep-purple accent-4"
                        dense
                        dark
                >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Page title</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>

                    <v-menu
                            left
                            bottom
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item
                                    v-for="n in 5"
                                    :key="n"
                                    @click="() => {}"
                            >
                                <v-list-item-title>Option {{ n }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-app-bar>
            </div>

        <v-card
                class="mx-auto"
                max-width="344"
        >
            <v-card-text>
                <div>Word of the Day</div>
                <p class="display-1 text--primary">
                    be•nev•o•lent
                </p>
                <p>adjective</p>
                <div class="text--primary">
                    well meaning and kindly.<br>
                    "a benevolent smile"
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                        text
                        color="deep-purple accent-4"
                >
                    Learn More
                </v-btn>
            </v-card-actions>
        </v-card>

        <div class="text-center">
            <v-chip
                    class="ma-2"
                    color="indigo"
                    text-color="white"
            >
                <v-avatar left>
                    <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
                Ranee
            </v-chip>

            <v-chip
                    class="ma-2"
                    color="orange"
                    text-color="white"
            >
                Premium
                <v-icon right>mdi-star</v-icon>
            </v-chip>

            <v-chip
                    class="ma-2"
                    color="primary"
                    text-color="white"
            >
                1 Year
                <v-icon right>mdi-cake-variant</v-icon>
            </v-chip>

            <v-chip
                    class="ma-2"
                    color="green"
                    text-color="white"
            >
                <v-avatar
                        left
                        class="green darken-4"
                >
                    1
                </v-avatar>
                Years
            </v-chip>

            <v-chip
                    class="ma-2"
                    close
                    color="teal"
                    text-color="white"
                    @click:close="close"
            >
                <v-avatar left>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Confirmed
            </v-chip>

            <v-chip
                    class="ma-2"
                    close
                    color="teal"
                    text-color="white"
                    close-icon="mdi-delete"
                    @click:close="close"
            >
                <v-avatar left>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Confirmed
            </v-chip>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Exemple",
        methods: {
            close(){
                alert('Chip close clicked');
            }
        }
    }
</script>

<style scoped>

</style>