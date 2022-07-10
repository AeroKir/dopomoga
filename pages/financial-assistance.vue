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
                <section class="mb-7">
                    <p>{{ $t('pages.financialAssistance.infoParagraph.infoBlock1') }}</p>
                
                    <v-expansion-panels>
                        <v-expansion-panel
                            v-for="(assistanceItem,i) in financialAssistanceSources"
                            :key="i"
                        >
                            <v-expansion-panel-header class="subtitle-1 font-weight-bold">
                                {{ assistanceItem.assistanceSource }}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                            <v-list-item
                                v-for="(link, i) in assistanceItem.assistanceLinks"
                                :key="i"
                            >
                                <a
                                    :href="link.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style="color: #0461ab;"
                                    class="mb-5"
                                >
                                    {{ link.title }}
                                    <v-icon small color="#0461ab">mdi-open-in-new</v-icon>
                                </a>    
                            </v-list-item>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
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
        name: 'FinancialAssistancePage',
        components: {
            SocialLinks,
        },
        data() {
        return {
            financialAssistanceSources: [
            {
                assistanceSource: 'Допомога від міжнародних організацій',
                assistanceLinks: [
                    {
                        title: 'Платформа єДопомога',
                        url: 'https://aid.edopomoga.gov.ua/',
                    },
                ],
            },
            {
                assistanceSource: 'Допомога від партнерів',
                assistanceLinks: [
                    {
                        title: 'Програма грошової допомоги від ЮНІСЕФ Спільно',
                        url: 'https://register.unicef.org/',
                    },
                    {
                        title: 'Допомога від агентства ООН у справах біженців',
                        url: 'https://www.unhcr.org/ua/43231-unhcr-is-launching-a-cash-assistance-programme-for-idps-ua.html',
                    },
                    {
                        title: 'Фінансова допомога внутрішньо переміщеним особам від Норвезької ради',
                        url: 'https://visitukraine.today/uk/blog/440/finansova-dopomoga-vnutrisnyo-peremishhenim-osobam-vid-norvezkoi-radi-yak-otrimati-2200-griven',
                    },
                    {
                        title: 'Допомога від Червоного Хреста',
                        url: 'https://blogs.icrc.org/ua/2022/04/22/finansova-dopomoga-2022/',
                    },
                    {
                        title: 'Допомога від Міжнародної організації з міграції (МОМ)',
                        url: 'https://www.iom.int/news/iom-launches-cash-assistance-programme-ukraine',
                    },
                ],
            },
            ],
        };
        },
    }
</script>
