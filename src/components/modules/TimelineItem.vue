<template>
  <div class="c-timeline__item">
    <div class="c-timeline__point t-timeline__point t-primary-bg"></div>
    <div class="o-content">
      <div class="o-grid">
        <div class="o-grid__col-md-5">
          <div class="c-work__timeframe">
            {{ time }}
          </div>
          <h3 class="c-work__heading">
            {{ heading }}
          </h3>
          <h4 class="c-work__title">
            {{ title }}
          </h4>
          <div class="c-work__location">
            {{ location }}
          </div>
        </div>
        <div class="o-grid__col-md-7">
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

  props: ['time', 'heading', 'title', 'location', 'description']
  
}
</script>
