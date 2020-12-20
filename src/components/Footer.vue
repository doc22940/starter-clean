<template>
  <section class="o-section t-section o-section--footer">

    <div class="o-section__header-bg t-section__header"></div>
    <div class="o-section__content-bg t-section__content"></div>

    <div class="o-container">
      <div class="o-section__container">

        <header class="o-section__header t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('title') }}
            </h2>
            <div class="o-content__body o-section__description">
              {{ $t('description') }}
            </div>
          </div>
        </header>

        <div class="o-section__content t-section__content  ">

          <div class="c-footer__contact">
            <div class="o-grid">

              <contact-links></contact-links>

            </div>
          </div>

          <hr class="c-footer__contact-divider" />

          <div class="o-content">
            <div class="c-footer__bottom">
              <div class="c-footer__brand">

                <div class="c-brand">
                  <div class="o-content__body">
                    <h1 class="c-brand__title t-title">
                      <span class="c-brand__sizer c-brand__sizer--sm">
                        <span class="a-footer c-brand__first-word t-title__first-word">
                          Julien
                        </span>
                        <span class="a-footer c-brand__second-word t-title__second-word">
                          Monty
                        </span>
                      </span>
                    </h1>
                  </div>
                </div>

              </div>

              <social-buttons for="footer"></social-buttons>

            </div>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>
import ContactLinks from './modules/ContactLinks.vue'
import SocialButtons from './modules/SocialButtons.vue'

export default {

  components: {
    ContactLinks,
    SocialButtons
  },

  i18n: {
    messages: {
      en: {
        title: 'Contact',
        description: 'How to reach me.'
      },
      fr: {
        title: 'Contact',
        description: 'Comment me joindre.'
      }
    }
  }

}
</script>