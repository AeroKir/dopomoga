<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>{{ $t('pages.main.title') }}</h1>
      <p>{{ $t('pages.main.heroParagraph', {siteName: 'Dopomoga'}) }}</p>
      <v-card>
        <v-card-title>
          Отримати довідку переселенця
        </v-card-title>
      </v-card>
      <v-card>
        <v-card-title>Отримати грошову допомогу</v-card-title>
      </v-card>
      <v-card>
        <v-card-title>Отримати медичну допомогу</v-card-title>
      </v-card>
      <v-card>
        <v-card-title>Безкоштовна правова допомога</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
