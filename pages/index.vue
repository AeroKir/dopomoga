<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="10" lg="8">
                <h1>{{ $t('pages.main.title') }}</h1>
                <p>{{ $t('pages.main.heroParagraph') }}</p>
                <v-row>
                    <v-col cols="12" sm="12" lg="6">
                        <v-card color="rgba(0, 139, 248, 0.2)" class="mb-5" style="border: 1px solid #0462ab">
                            <nuxt-link to="/migrant-reference" class="card-link">
                                <v-card-title class="d-flex flex-column">
                                    <v-icon
                                        x-large
                                        left
                                        color="#0461ab"
                                    >
                                        mdi-card-account-details
                                    </v-icon>
                                    {{ $t('pages.main.actionCards.getMigrantReference') }}
                                </v-card-title>
                            </nuxt-link>
                        </v-card>
                        <v-card color="rgba(0, 139, 248, 0.2)" style="border: 1px solid #0462ab">
                            <nuxt-link to="/financial-assistance" class="card-link">
                                <v-card-title class="d-flex flex-column">
                                    <v-icon
                                        x-large
                                        left
                                        color="#0461ab"
                                    >
                                        mdi-account-cash
                                    </v-icon>
                                    {{ $t('pages.main.actionCards.getFinancialAssistance') }}
                                </v-card-title>
                            </nuxt-link>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="12" lg="6">
                        <v-card color="rgba(0, 139, 248, 0.2)" class="mb-5" style="border: 1px solid #0462ab">
                            <nuxt-link to="/medical-assistance" class="card-link">
                                <v-card-title class="d-flex flex-column">
                                    <v-icon
                                        x-large
                                        left
                                        color="#0461ab"
                                    >
                                        mdi-medical-bag
                                    </v-icon>
                                    {{ $t('pages.main.actionCards.getMedicalAssistance') }}
                                </v-card-title>
                            </nuxt-link>
                            
                        </v-card>
                        <v-card color="rgba(0, 139, 248, 0.2)" style="border: 1px solid #0462ab">
                            <nuxt-link to="/legal-assistance" class="card-link">
                                <v-card-title class="d-flex flex-column">
                                    <v-icon
                                        x-large
                                        left
                                        color="#0461ab"
                                    >
                                        mdi-scale-balance
                                    </v-icon>
                                    {{ $t('pages.main.actionCards.getLegalAssistance') }}
                                </v-card-title>
                            </nuxt-link>
                        </v-card>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col cols="12" sm="12" lg="12">
                        <SocialLinks class="mt-3" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import SocialLinks from '../components/SocialLinks';
    export default {
        name: 'IndexPage',
        components: {
            SocialLinks,
        },
    }
</script>

<style lang="scss" scoped>
    .card-link {
        color:#0461ab;
        text-decoration: none;
    }
</style>
