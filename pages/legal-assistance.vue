<template>
    <v-container fluid>
        <v-row class="justify-center mt-1">
            <v-col cols="12" sm="10" lg="8" class="d-flex">
                <nuxt-link :to="localePath('/')" style="text-decoration: none">
                    <v-icon large color="#0461ab">mdi-arrow-left</v-icon>
                </nuxt-link>
                <v-icon color="#fed82f" x-large class="mx-auto" style="transform: translateX(-20px);">mdi-scale-balance</v-icon>
            </v-col>

            <v-col cols="12" class="text-center">
                <h1>{{ $t('pages.legalAssistance.title') }}</h1>
            </v-col>
            <v-col cols="12" sm="10" lg="8" class="mx-auto">
                <section class="mb-10">
                    <p>{{ $t('pages.legalAssistance.infoParagraph.infoBlock1') }}</p>
                    <h3 class="mb-5 mt-5 text-center">{{ $t('pages.legalAssistance.infoParagraph.subtitle1') }}</h3>
                    <h2 class="d-flex justify-center align-center font-weight-bold text-center">
                        <v-icon x-large color="#0461ab" class="mr-2">mdi-cellphone-information</v-icon>
                        <a href="tel:+380958986643" style="color: #0461ab;">+38 095 898 66 43</a>
                    </h2>

                    <v-divider class="mt-5 mb-10"></v-divider>

                    <h2 class="mb-5 mt-5 text-center">{{ $t('pages.legalAssistance.hotlines.subtitle1') }}</h2>
                    <h2 class="d-flex justify-center align-center font-weight-bold text-center mb-2">
                        <v-icon x-large color="#0461ab" class="mr-2">mdi-cellphone-information</v-icon>
                        <a href="tel:1545" style="color: #0461ab;">1545</a>
                    </h2>
                    <p class="text-center font-weight-bold mb-0">{{ $t('pages.legalAssistance.hotlines.infoBlock1') }}</p>
                    <p class="text-center">{{ $t('pages.legalAssistance.hotlines.infoBlock2') }}</p>

                    <h2 class="mb-5 mt-5 text-center">{{ $t('pages.legalAssistance.hotlines.subtitle2') }}</h2>
                    <h2 class="d-flex justify-center align-center font-weight-bold text-center mb-2">
                        <v-icon x-large color="#0461ab" class="mr-2">mdi-cellphone-information</v-icon>
                        <a href="tel:+38(044)2841915" style="color: #0461ab;">+38 (044) 284-19-15</a>
                    </h2>
                    <p class="text-center">{{ $t('pages.legalAssistance.hotlines.infoBlock3') }}</p>
                    <p class="font-weight-bold">{{ $t('pages.legalAssistance.hotlines.infoBlock4') }} <a href="https://ukc.gov.ua/portal/" target="_blank" rel="noopener noreferrer">www.ukc.gov.ua</a></p>
                </section>
                
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
        name: 'LegalAssistancePage',
        components: {
            SocialLinks,
        },
        head() {
            return {
                title: this.$t('pages.legalAssistance.title'),
            }
        },
    }
</script>
