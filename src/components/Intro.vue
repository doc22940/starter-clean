<template>

  <c-section :title="$t('title')" :description="$t('description')">

    <div class="o-content">
      <div class="c-intro">

        <div v-if="$i18n.locale == 'fr'" class="o-content__body">
          <p>
            J'ai {{ getAge('1987-06-28') }} ans et je suis développeur web full-stack basé sur la commune de Castres (Tarn, 81). Je suis spécialisé sur le framework PHP Laravel (côté back-end) et le framework Javascript Vue.js (côté front-end).
          </p>
          <p>
            Ma passion pour le développement web me pousse à donner le meilleur de moi-même pour chaque projet, ainsi qu'à perfectionner mes connaissances dans le domaine du web en me tenant régulièrement informé des dernières innovations.
          </p>
          <p>
            Je m'interesse à l'informatique, et plus généralement aux technologies, depuis mon plus jeune âge. C'est à 16 ans que j'ai commencé mon apprentissage du développement web, qui s'est très vite transformé en passion. C'est donc tout naturellement que j'en ai fait mon métier à plein temps après avoir travaillé quelques années dans le domaine de l'informatique.
          </p>
        </div>

        <div v-if="$i18n.locale == 'en'" class="o-content__body">
          <p>
            I'm {{ getAge('1987-06-28') }} and I'm a full-stack web developer based in France (Tarn, Castres). I'm specialized in Laravel PHP framework (for the back-end) and Vue.js Javascript framework (for the front-end).
          </p>
          <p>
            My passion for web development pushes me to give the best of myself for each project, and to improve my knowledge in the field of web technologies keeping me regularly informed of the latest innovations.
          </p>
          <p>
            Since I was young, I'm interested in computers, and more generally in technologies. At 16, I started to learn web development, which has quickly grown into a passion. That's why I decided to make it my full time job after working several years for IT companies.
          </p>
        </div>

      </div>
    </div>

  </c-section>

</template>

<script>
import CSection from './modules/Section.vue'

export default {

  components: {
    CSection
  },

  i18n: {
    messages: {
      en: { 
        title: 'Introduction',
        description: 'Who am I.'
      },
      fr: {
        title: 'Introduction',
        description: 'Comment je me définis.'
      }
    }
  },

  methods: {

    getAge(dateString)
    {
      var today = new Date()
      var birthDate = new Date(dateString)
      var age = today.getFullYear() - birthDate.getFullYear()
      var m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
      {
        age--
      }
      return age
    }

  }

}
</script>