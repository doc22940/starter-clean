<template>
  <section class="o-section o-section--header  t-section  t-section--header">
    <div class="c-header">

      <div class="o-section__header-bg  t-section__header"></div>
      <div class="o-section__content-bg  t-section__content"></div>

      <div class="o-container">
        <div class="o-section__container">

          <header class="o-section__header  c-header__header  t-section__header">
            <div class="c-header__inner-header">

              <div class="c-header__avatar">
                <div class="a-header  c-avatar">
                  <img class="c-avatar__img" src="/img/me_without_glasses.png" alt="">
                </div>
              </div>

            </div>
          </header>

          <div class="o-section__content  c-header__content  t-section__content">
            <div class="c-header__inner-content">

              <div class="c-header__top">

                <div class="c-header__brand">

                  <div class="c-brand">
                    <h1 class="c-brand__title  t-title">
                      <span class="c-brand__sizer">
                        <span class="a-header  c-brand__first-word  t-title__first-word">
                          Julien
                        </span>
                        <span class="a-header  c-brand__second-word  t-title__second-word">
                          Monty
                        </span>
                      </span>
                    </h1>
                    <h2 class="a-header  c-brand__sub-title  t-sub-title">
                      <span class="c-brand__sizer">
                        {{ $t('full_stack_developer') }}
                      </span>
                    </h2>
                  </div>

                </div>

                <social-buttons for="header"></social-buttons>

              </div>

              <div class="c-header__contact">

                <hr class="a-header  c-header__contact-divider" />

                <contact-links></contact-links>

              </div>

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
        full_stack_developer: 'Full Stack Web Developer'
      },
      fr: {
        full_stack_developer: 'Développeur Web Full Stack'
      }
    }
  }

}
</script>
