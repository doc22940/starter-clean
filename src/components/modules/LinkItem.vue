<template>
  <div class="o-grid__col-md-3  o-grid__col-sm-6">
    <div class="a-header  o-content">
      <div class="o-content__body">
        <a :href="link" target="_blank" class="t-link-container">
          <h4>{{ title }}</h4>
          <p>
            <span class="t-link-container__item--blended">
              {{ content }}
            </span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  props: ['title', 'link', 'content']

}
</script>

