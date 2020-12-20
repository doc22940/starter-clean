<template>

  <ul :class="ulClass">
    <li class="a-header">
      <a href="https://www.linkedin.com/in/julienmonty/?locale=fr_FR" target="_blank" class="c-social-button t-social-button">
        <i class="fa fa-lg fa-linkedin"></i>
      </a>
    </li>
    <li class="a-header">
      <a href="https://dribbble.com/unpixel" target="_blank" class="c-social-button t-social-button">
        <i class="fa fa-lg fa-dribbble"></i>
      </a>
    </li>
    <li class="a-header">
      <a href="https://github.com/konpa" target="_blank" class="c-social-button t-social-button">
        <i class="fa fa-lg fa-github"></i>
      </a>
    </li>
    <li class="a-header">
      <a href="https://www.behance.net/1pxl" target="_blank" class="c-social-button t-social-button">
        <i class="fa fa-lg fa-behance"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {

  props: ['for'],

  computed: {

    ulClass: function ()
    {
      let ulClass = this.for == 'header' ? 'c-header__social-buttons c-social-buttons' : 'c-footer__social-buttons c-social-buttons o-content__body'

      return ulClass
    }

  }

}
</script>

