<template>
    <v-app light>
        <v-navigation-drawer
            v-model="drawer"
            right
            temporary
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
            color="#fed82f"
        >
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="localePath(`${item.to}`)"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="$t(item.title)" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :clipped-left="clipped" fixed app color="#fed82f" class="justify-space-between">
            <v-container fluid>
                <v-row align="center">
                    <v-col cols="12" sm="10" lg="6" class="mx-auto">
                        <v-row align="center">
                            <v-col cols="6" sm="8" lg="7" class="pl-0">
                                <nuxt-link :to="localePath('/')" class="d-flex align-center main-title">
                                    <img
                                        src="../assets/img/dopomoga-logo-mini.png"
                                        alt="Dopomoga site logo"
                                        height="auto"
                                        width="60"
                                        class="mr-2"
                                    >
                                    <h1 class="text-subtitle-1 font-weight-bold">ДОПОМОГА</h1>
                                </nuxt-link>
                            </v-col>
                            <v-col cols="4" sm="3" lg="4">
                                <LangSwitcher
                                    :locales="availableLocales"
                                    :defaultLocale="defaultLang"
                                />
                            </v-col>
                            <v-col cols="1" class="pr-0">
                                <v-app-bar-nav-icon @click.stop="switchDrawer" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer :absolute="!fixed" app color="#fed82f">
            <v-container fluid>
                <v-row align="center">
                    <v-col cols="12" sm="10" lg="6" class="mx-auto">
                        <v-row align="center">
                            <v-col cols="12" sm="6" lg="7" class="pl-0">
                                <small>&copy; {{ new Date().getFullYear() }} <span class="ml-2">ГО СОБОРНІСТЬ</span></small>
                            </v-col>
                            <v-col cols="12" sm="3" lg="4" class="pl-0">
                                <a
                                    href="mailto:sobornist.sobornist@gmail.com"
                                    class="d-flex"
                                    style="text-decoration: none; color: #0461ab;"
                                >
                                    <v-icon color="#0461ab" class="mr-1">mdi-email</v-icon>
                                    sobornist.sobornist@gmail.com
                                </a>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
import LangSwitcher from '../components/LangSwitcher';

export default {
    name: 'DefaultLayout',
    components: {
        LangSwitcher,
    },
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-home',
                    title: 'asideMenu.homepage',
                    to: '/',
                },
                {
                    icon: 'mdi-card-account-details',
                    title: 'asideMenu.migrantReference',
                    to: '/migrant-reference',
                },
                {
                    icon: 'mdi-account-cash',
                    title: 'asideMenu.financialAssistance',
                    to: '/financial-assistance',
                },
                {
                    icon: 'mdi-medical-bag',
                    title: 'asideMenu.medicalAssistance',
                    to: '/medical-assistance',
                },
                {
                    icon: 'mdi-scale-balance',
                    title: 'asideMenu.legalAssistance',
                    to: '/legal-assistance',
                },
                {
                    icon: 'mdi-newspaper-variant',
                    title: 'asideMenu.news',
                    to: '/news',
                },
                {
                    icon: 'mdi-close-octagon',
                    title: 'asideMenu.stopFake',
                    to: '/stop-fake',
                },
            ],
            miniVariant: false,
            right: true,
        };
    },
    computed: {
        defaultLang() {
            return this.$i18n.locale;
        },
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
        }
    },
    methods: {
        switchDrawer() {
            this.drawer = !this.drawer;
        },
    },
}
</script>

<style lang="scss" scoped>
    .main-title {
        color: #0461ab;
        font-weight: 700;
        text-decoration: none;
    }
</style>
