<template>
  <ul class="languagepicker" onclick="">
    <a>
      <li>
        {{ $i18n.locale }}
      </li>
    </a>
    <a @click="switchLocale">
      <li>
        {{ otherLocale }}
      </li>
    </a>
  </ul>
</template>

<script>
export default {

  name: 'locale-changer',

  methods: {
    switchLocale () {
      this.$i18n.locale = (this.$i18n.locale === 'en') ? 'fr' : 'en'
    }
  },

  computed: {
    otherLocale: function () {
      let locale = (this.$i18n.locale === 'en') ? 'fr' : 'en'

      return locale
    }
  }

}
</script>

<style lang="scss" scoped>
.languagepicker {
  position: fixed;
  top: 10px;
  right: 10px;
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

  &:hover {
    height: 81px;
  }

  a {
    color: #c6c6c6;
    text-decoration: none;

    &:first-child li {
      border: none;
      background: #ededed !important;
    }
  }

  li {
    display: block;
    padding: 0px 15px;
    line-height: 40px;
    border-top: 1px solid #EEE;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      background-color: darken(#ededed, 3%);
    }
  }
}
</style>
