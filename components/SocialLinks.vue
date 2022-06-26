<template>
    <section>
        <h2 class="mb-3">Доєднуйтесь до нас:</h2>
        <v-row>
            <v-col cols="12" sm="6">
                <a
                    href="https://t.me/dopomoga_idp"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="d-flex align-center"
                >
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        class="social-icon mr-2"
                    >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span style="color: #26a5e4;" class="social-text">Наш Телеграм канал</span>
                </a>
            </v-col>

            <v-col cols="12" sm="6">
                <a
                    href="https://www.facebook.com/login.php?next=https%3A%2F%2Fm.facebook.com%2FdopomogaVPO%2F&refsrc=deprecated"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="d-flex align-center"
                >
                    <v-icon color="#1877f2" size="50" class="mr-2">mdi-facebook</v-icon>
                    <span style="color: #1977f2;" class="social-text">Наша група у Фейсбук</span>
                </a>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        name: 'SocialLinks',
    }
</script>

<style lang="scss">
    a {
        text-decoration: none;
    }
    .social-icon {
        width: 48px;
        height: 48px;
        fill: #26a5e4;
    }
    .social-text:hover {
        opacity: 0.7;
    }
</style>
