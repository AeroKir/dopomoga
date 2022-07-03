<template>
  <v-container fluid>
        <v-row class="justify-center mt-1">
            <v-col cols="12" sm="10" lg="8" class="d-flex">
                <nuxt-link :to="localePath('/')" style="text-decoration: none">
                    <v-icon large color="#0461ab">mdi-arrow-left</v-icon>
                </nuxt-link>
                <v-icon color="#fed82f" x-large class="mx-auto" style="transform: translateX(-20px);">mdi-card-account-details</v-icon>
            </v-col>

            <v-col cols="12" class="text-center">
                <h1>{{ $t('pages.migrantReference.title') }}</h1>
            </v-col>
            <v-col cols="12" sm="10" lg="8" class="mx-auto">
                <section class="mb-7">
                    <p>{{ $t('pages.migrantReference.infoParagraph.infoBlock1') }}</p>
                    <ul class="mb-4">
                        <li>{{ $t('pages.migrantReference.infoParagraph.listItem1') }}</li>
                        <li>{{ $t('pages.migrantReference.infoParagraph.listItem2') }}</li>
                        <li>{{ $t('pages.migrantReference.infoParagraph.listItem3') }}</li>
                        <li>{{ $t('pages.migrantReference.infoParagraph.listItem4') }}</li>
                    </ul>

                    <p>{{ $t('pages.migrantReference.infoParagraph.infoBlock2') }}</p>

                    <p>{{ $t('pages.migrantReference.infoParagraph.infoBlock3') }}</p>
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
        name: 'MigrantReferencePage',
        components: {
            SocialLinks,
        },
    }
</script>
