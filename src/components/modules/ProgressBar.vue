<template>
  <div class="o-grid__col-sm-6">
    <div class="o-content">
      <div class="o-media  o-media--block">
        <div class="o-media__figure">
          <div class="c-number  t-primary-color">
            {{ pourcent }}
            <small>%</small>
          </div>
        </div>
        <div class="o-media__body">
          <h3>{{ title }}</h3>
        </div>
      </div>
      <div class="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
        <div class="a-progress-bar  c-progress-bar__filler  t-primary-bg" :data-percent="pourcent"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: ['title', 'pourcent']

}
</script>
