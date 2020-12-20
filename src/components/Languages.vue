<template>

  <c-section :title="$t('title')" :description="$t('description')">

    <div class="o-grid">

      <progress-bar
        :title="$t('french')"
        pourcent="99">
      </progress-bar>

      <progress-bar
        :title="$t('english')"
        pourcent="85">
      </progress-bar>

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
        description: 'The languages I speak.',
        french: 'French',
        english: 'English'
      },
      fr: {
        title: 'Langues',
        description: 'Les langues que je parle.',
        french: 'Français',
        english: 'Anglais'
      }
    }
  }

}
</script>
