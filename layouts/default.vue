<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
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
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#fed82f">
      <v-app-bar-nav-icon @click.stop="switchDrawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <img src="../assets/img/dopomoga-logo.jpg" alt="Site logo" height="auto" width="60">
      <LangSwitcher
        :locales="availableLocales"
        :defaultLocale="defaultLang"
      />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app color="#fed82f">
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Migrant reference',
          to: '/migrant-reference',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Financial assistance',
          to: '/financial-assistance',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Medical assistance',
          to: '/medical-assistance',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Legal assistance',
          to: '/legal-assistance',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'News',
          to: '/news',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Stop fake',
          to: '/stop-fake',
        },
      ],
      miniVariant: false,
      right: true,
      title: 'Dopomoga',
    }
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
