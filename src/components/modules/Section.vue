<template>
  <section class="o-section t-section">

    <div class="o-section__header-bg t-section__header"></div>
    <div class="o-section__content-bg t-section__content"></div>

    <div class="o-container">
      <div class="o-section__container">

        <header class="o-section__header t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ title }}
            </h2>
            <div class="o-content__body o-section__description">
              {{ description }}
            </div>
          </div>
        </header>

        <div :class="sectionContentClass">

          <slot></slot>

        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {

  props: {
    title: String,
    description: String, 
    nopt: { type: Boolean, default: false },
    nopb: { type: Boolean, default: false }
  },

  computed: {

    sectionContentClass: function ()
    {
      let returnClass = 'o-section__content t-section__content'

      if (this.nopt)
        returnClass += ' u-pt-0'
      else if (this.nopb)
        returnClass += ' u-pb-0'
      
      return returnClass
    }

  }
  
}
</script>
