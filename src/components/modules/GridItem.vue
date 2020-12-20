<template>
  <div class="o-grid__col-sm-6">
    <div class="o-content">
      <div class="o-media o-media--block in-view">
        <div class="o-media__figure">
          <div class="c-profile__icon">
            <i :class="iconClass"></i>
          </div>
        </div>
        <div class="o-media__body o-content__body">
          <h3 class="t-link-container__item">
            {{ title }}
          </h3>
          <p>
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  props: ['icon', 'title', 'description'],

  computed: {
    iconClass: function () {
      return 'fa fa-lg fa-' + this.icon + ' in-view'
    }
  }

}
</script>
