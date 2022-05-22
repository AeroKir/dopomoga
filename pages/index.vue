<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
        <h1>{{ $t('pages.main.title') }}</h1>
        <p>{{ $t('pages.main.heroParagraph', {siteName: 'Dopomoga'}) }}</p>
        <v-row>
            <v-col cols="6">
                <v-card color="#E3F2FD">
                    <nuxt-link to="/migrant-reference">
                        <v-card-title class="d-flex flex-column">
                            <v-icon
                                x-large
                                left
                                color="#0D47A1"
                            >
                                mdi-card-account-details
                            </v-icon>
                            Отримати довідку переселенця
                        </v-card-title>
                    </nuxt-link>
                </v-card>
                <v-card color="#E3F2FD">
                    <nuxt-link to="/financial-assistance">
                        <v-card-title class="d-flex flex-column">
                            <v-icon
                                x-large
                                left
                                color="#0D47A1"
                            >
                                mdi-account-cash
                            </v-icon>
                            Отримати грошову допомогу
                        </v-card-title>
                    </nuxt-link>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card color="#E3F2FD">
                    <nuxt-link to="/medical-assistance">
                        <v-card-title class="d-flex flex-column">
                            <v-icon
                                x-large
                                left
                                color="#0D47A1"
                            >
                                mdi-medical-bag
                            </v-icon>
                            Отримати медичну допомогу
                        </v-card-title>
                    </nuxt-link>
                    
                </v-card>
                <v-card color="#E3F2FD">
                    <nuxt-link to="/legal-assistance">
                        <v-card-title class="d-flex flex-column">
                            <v-icon
                                x-large
                                left
                                color="#0D47A1"
                            >
                                mdi-scale-balance
                            </v-icon>
                            Безкоштовна правова допомога
                        </v-card-title>
                    </nuxt-link>
                </v-card>
            </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
