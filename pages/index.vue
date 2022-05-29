<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
        <h1>{{ $t('pages.main.title') }}</h1>
        <p>{{ $t('pages.main.heroParagraph', {siteName: 'Dopomoga'}) }}</p>
        <v-row>
            <v-col cols="6">
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
                            Отримати довідку переселенця
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
                            Отримати грошову допомогу
                        </v-card-title>
                    </nuxt-link>
                </v-card>
            </v-col>
            <v-col cols="6">
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
                            Отримати медичну допомогу
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

<style lang="scss" scoped>
    .card-link {
        color:#0461ab;
        text-decoration: none;
    }
</style>
