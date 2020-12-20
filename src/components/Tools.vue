<template>

    <c-section :title="$t('title')" :description="$t('description')">

        <div class="o-grid">

            <progress-bar
                title="Laravel"
                pourcent="85">
            </progress-bar>

            <progress-bar
                title="Vue.js"
                pourcent="80">
            </progress-bar>

            <progress-bar
                title="Wordpress"
                pourcent="70">
            </progress-bar>

            <progress-bar
                title="Git"
                pourcent="80">
            </progress-bar>

            <progress-bar
                title="Webpack"
                pourcent="65">
            </progress-bar>

            <progress-bar
                title="OS (Windows, OSX, Linux)"
                pourcent="75">
            </progress-bar>

            <progress-bar
                title="Photoshop"
                pourcent="80">
            </progress-bar>

            <progress-bar
                title="Illustrator"
                pourcent="70">
            </progress-bar>

            <div class="o-grid__col-sm-12">
                <div class="o-content">
                <p>
                    <em>{{ $t('aside') }}</em>
                </p>
                </div>
            </div>

        </div>

    </c-section>
</template>

<script>
import CSection from './modules/Section.vue'
import ProgressBar from './modules/ProgressBar.vue'

export default {

    components: {
        CSection,
        ProgressBar
    },

    i18n: {
        messages: {

            en: {
                title: 'Tools',
                description: 'My favorites tools.',
                aside: 'I also have some experience with the following tools: JQuery, Prestashop, AngularJS, Ruby On Rails, Virtualisation (Vagrant, Docker, VMWare), Amazon AWS, Visual Studio Code, Atom, Premiere Pro, After Effects.'
            },

            fr: {
                title: 'Outils',
                description: 'Mes Outils de prédilection.',
                aside: 'J\'ai aussi de l\'expérience avec les outils suivants : JQuery, Prestashop, AngularJS, Ruby On Rails, Virtualisation (Vagrant, Docker, VMWare), Amazon AWS, Visual Studio Code, Atom, Premiere Pro, After Effects.'
            }

        }
    }

}
</script>
