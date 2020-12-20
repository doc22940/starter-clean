<template>
  <div class="pdf-download-button">
    <a :href="pdfLink" download><i class="fa fa-download"></i> {{ $t('button') }}</a>
  </div>
</template>

<script>
export default {

  name: 'pdf-download-button',

  computed: {
    pdfLink: function () {
      let link = (this.$i18n.locale === 'fr')
        ? '/pdf/cv_Julien_MONTY.pdf'
        : '/pdf/Julien_MONTY_resume.pdf'

      return link
    }
  },

  i18n: {
    messages: {

      en: {
        button: 'Download PDF format'
      },

      fr: {
        button: 'Télécharger au format PDF'
      }

    }
  }

}
</script>

<style lang="scss" scoped>
.pdf-download-button {
  position: fixed;
  top: 10px;
  right: 65px;
  z-index: 99;
  color: #c6c6c6;
  background-color: #ededed;
  display: inline-block;
  padding: 0;
  height: 40px;
  overflow: hidden;
  transition: all .3s ease;
  vertical-align: top;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darken(#ededed, 3%);
  }

  a {
    padding: 0 15px;
    line-height: 40px;
    color: #c6c6c6;
    text-decoration: none;
  }

  .fa {
    color: #c6c6c6;
  }
}
</style>
