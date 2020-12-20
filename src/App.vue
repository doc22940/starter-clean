<template>
  <div id="app">

    <div class="c-preloader  js-preloader">
      <div class="c-preloader__spinner  t-preloader__spinner"></div>
    </div>

    <local-changer></local-changer>
    <pdf-download-button></pdf-download-button>

    <div class="c-main-container  js-main-container">

      <c-header></c-header>

      <intro></intro>

      <expertise></expertise>

      <skills></skills>

      <tools></tools>

      <experience></experience>

      <education></education>

      <languages></languages>

      <hobbies></hobbies>

      <c-footer></c-footer>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import scrollreveal from 'scrollreveal'
import main from './assets/libs/main.js'

import LocalChanger from './components/modules/LocalChanger.vue'
import PdfDownloadButton from './components/modules/PdfDownloadButton.vue'
import CHeader from './components/Header.vue'
import Intro from './components/Intro.vue'
import Expertise from './components/Expertise.vue'
import Skills from './components/Skills.vue'
import Tools from './components/Tools.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Languages from './components/Languages.vue'
import Hobbies from './components/Hobbies.vue'
import CFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    LocalChanger,
    PdfDownloadButton,
    CHeader,
    Intro,
    Expertise,
    Skills,
    Tools,
    Experience,
    Education,
    Languages,
    Hobbies,
    CFooter
  }
}
</script>

<style lang="scss">
@import './assets/css/main.scss';
</style>
