<template>

  <c-section :title="$t('title')" :description="$t('description')">

    <div class="o-grid">

      <grid-item
        icon="dribbble"
        :title="$t('tennis.title')"
        :description="$t('tennis.description')">
      </grid-item>

      <grid-item
        icon="tree"
        :title="$t('trail.title')"
        :description="$t('trail.description')">
      </grid-item>

      <grid-item
        icon="camera"
        :title="$t('photo.title')"
        :description="$t('photo.description')">
      </grid-item>

      <grid-item
        icon="gamepad"
        :title="$t('game.title')"
        :description="$t('game.description')">
      </grid-item>

    </div>

  </c-section>

</template>

<script>
import CSection from './modules/Section.vue'
import GridItem from './modules/GridItem.vue'

export default {

  components: {
    CSection,
    GridItem
  },

  i18n: {
    messages: {
      en: {
        title: 'Hobbies',
        description: 'How I spend my free time.',
        tennis: {
          title: 'Tennis',
          description: 'I\'ve been playing tennis in competition for 15 years and I taught tennis for 5 years to child from 5 to 17 years old.'
        },
        trail: {
          title: 'Trail - Hiking',
          description: 'I practice trail in competition and I like to hike in nature.'
        },
        photo: {
          title: 'Photography',
          description: 'I\'ve been practicing photography for a few years. I like animal, landscape and macro photography.'
        },
        game: {
          title: 'Video games',
          description: 'I\'ve been playing video games since I was a child and still today when I have some free time left.'
        }
      },
      fr: {
        title: 'Loisirs',
        description: 'Comment j\'occupe mon temps libre.',
        tennis: {
          title: 'Tennis',
          description: 'Je pratique le tennis en compétition depuis 15 ans et j\'ai donné des cours pendant 5 ans en temps qu\'initiateur à des jeunes de 5 à 17 ans.'
        },
        trail: {
          title: 'Trail - Randonnée',
          description: 'Je pratique le trail en compétition et j\'aime beaucoup randonner en pleine nature.'
        },
        photo: {
          title: 'Photographie',
          description: 'Je pratique la photographie depuis quelques années. J\'aime la photographie animalière, de paysage et la macro-photographie.'
        },
        game: {
          title: 'Jeux Vidéos',
          description: 'Je joue aux jeux vidéos depuis que je suis tout petit et encore aujourd\'hui quand il me reste un peu de temps libre.'
        }
      }
    }
  }
  
}
</script>
