<template>

  <c-section :title="$t('title')" :description="$t('description')">

    <div class="o-grid">

      <progress-bar
        title="HTML"
        pourcent="85">
      </progress-bar>

      <progress-bar
        title="CSS"
        pourcent="80">
      </progress-bar>

      <progress-bar
        title="Javascript"
        pourcent="70">
      </progress-bar>

      <progress-bar
        title="PHP"
        pourcent="75">
      </progress-bar>

      <progress-bar
        title="SQL"
        pourcent="70">
      </progress-bar>

      <progress-bar
        title="UI/UX"
        pourcent="65">
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
        title: 'Languages',
        description: 'My favorites languages.',
        aside: 'I also have some experience in the following languages: Ruby, Python, LaTeX.'
      },

      fr: {
        title: 'Languages',
        description: 'Mes languages de prédilection.',
        aside: 'J\'ai aussi de l\'expérience dans les languages suivants : Ruby, Python, LaTeX.'
      }

    }
  }

}
</script>