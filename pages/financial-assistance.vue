<template>
    <v-container fluid>
        <v-row class="justify-center mt-1">
            <v-col cols="12" sm="10" lg="8" class="d-flex">
                <nuxt-link :to="localePath('/')" style="text-decoration: none">
                    <v-icon large color="#0461ab">mdi-arrow-left</v-icon>
                </nuxt-link>
                <v-icon color="#fed82f" x-large class="mx-auto" style="transform: translateX(-20px);">mdi-account-cash</v-icon>
            </v-col>

            <v-col cols="12" class="text-center">
                <h1>{{ $t('pages.financialAssistance.title') }}</h1>
            </v-col>
            <v-col cols="12" sm="10" lg="8" class="mx-auto">
                <p>
                Наразі, внаслідок агресивного і повномасштабного вторгнення Росії в Україну, склалася вкрай складна ситуація у нашій державі і майже 10 млн. наших співвітчизників є внутрішньо переміщеними особами і знаходяться в скрутному становищі.
                На порталі ДОПОМОГА, Ви маєте змогу знайти необхідну інформацію про янаявні програми підтримки від держави Україна а також від міжнародних партнерів.
                З наявною грошовою допомогою для ВПО можно ознаймитись за цими посиланнями:
                </p>
                <v-expansion-panels>
                <v-expansion-panel
                    v-for="(assistanceItem,i) in financialAssistanceSources"
                    :key="i"
                >
                    <v-expansion-panel-header>
                    {{ assistanceItem.assistanceSource }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    <v-list-item
                        v-for="(link, i) in assistanceItem.assistanceLinks"
                        :key="i"
                    >
                        <a :href="link" target="_blank" rel="noopener noreferrer">{{ link }}</a>    
                    </v-list-item>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>

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
        name: 'FinancialAssistancePage',
        components: {
            SocialLinks,
        },
        data() {
        return {
            financialAssistanceSources: [
            {
                assistanceSource: 'Допомога від держави',
                assistanceLinks: [
                'https://minre.gov.ua/news/vpo-mozhut-otrymaty-mizhnarodnu-groshovu-dopomogu-yaki-programy-dostupni'
                ],
            },
            {
                assistanceSource: 'Допомога від партнерів',
                assistanceLinks: [
                'https://www.unhcr.org/ua/43231-unhcr-is-launching-a-cash-assistance-programme-for-idps-ua.html',
                'https://visitukraine.today/uk/blog/440/finansova-dopomoga-vnutrisnyo-peremishhenim-osobam-vid-norvezkoi-radi-yak-otrimati-2200-griven',
                'https://fakty.com.ua/ua/ukraine/suspilstvo/20220601-finansova-dopomoga-vpo-vid-nrc-hto-ta-yak-zmozhe-otrymaty/',
                'https://www.prostir.ua/?news=vpo-mozhut-otrymaty-mizhnarodnu-hroshovu-dopomohu-yaki-prohramy-dostupni'
                ],
            },
            ],
        };
        },
    }
</script>
