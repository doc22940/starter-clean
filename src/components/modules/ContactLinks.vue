<template>
  <div class="o-grid">

    <link-item
      :title="$t('localisation')"
      link="https://goo.gl/maps/LSnCVwknKyiL4P6U8"
      content="Rieux-Volvestre, France">
    </link-item>

    <link-item
      :title="$t('phone')"
      link="tel:0033652720355"
      content="+33 6 52 72 03 55">
    </link-item>

    <link-item
      :title="$t('web')"
      link="https://konpa.github.io"
      content="konpa.github.io">
    </link-item>

    <link-item
      :title="$t('email')"
      link="mailto:julien.monty@gmail.com"
      content="julien.monty@gmail.com">
    </link-item>

  </div>
</template>

<script>
import LinkItem from './LinkItem.vue'

export default {

  components: {
    LinkItem
  },

  i18n: {
    messages: {
      en: {
        localisation: 'Location',
        phone: 'Phone',
        web: 'Web',
        email: 'Email'
      },
      fr: {
        localisation: 'Localisation',
        phone: 'Téléphone',
        web: 'Web',
        email: 'Email'
      }
    }
  }
  
}
</script>
