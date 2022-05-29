<template>
    <div>
        <v-menu v-model="languageMenu" offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="text-capitalize" v-bind="attrs" v-on="on" text>
                    <v-icon left>mdi-translate</v-icon>
                        {{ activeLang }}
                    <v-icon small right>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            <v-list dense>
                <v-list-item v-for="(locale, index) in locales" :key="index" @click="linkHandler(locale)">
                    {{ locale.name }}
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: 'LangSwitcher',
        props: {
            locales: {
                type: Array,
                required: true,
            },
            defaultLocale: {
                type: String,
                required: false,
                default: null,
            },
        },
        data() {
            return {
                languageMenu: false,
                activeLang: this.defaultLocale
                    ? this.defaultLocale
                    : this.locales.length > 0
                        ? this.locales[0]
                        : null,
                open: false,
            }
        },
        methods: {
            linkHandler(option) {
                this.activeLang = option.code.charAt(0).toUpperCase() + option.code.slice(1);
                this.open = false;
                this.$router.push(this.switchLocalePath(option.code));
            },
        },
    }
</script>
