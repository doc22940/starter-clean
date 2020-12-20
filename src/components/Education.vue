<template>
  <c-section :title="$t('title')" :description="$t('description')" nopt>

    <div class="o-content">

      <div class="a-education-timeline c-timeline t-border-color o-section__full-top-space">

        <div class="c-timeline__end t-border-color"></div>

        <timeline-item
          :time="$t('ict.time')"
          :heading="$t('ict.heading')"
          :title="$t('ict.title')"
          :location="$t('ict.location')"
          :description="$t('ict.description')">
        </timeline-item>

        <timeline-item
          :time="$t('aragon.time')"
          :heading="$t('aragon.heading')"
          :title="$t('aragon.title')"
          :location="$t('aragon.location')"
          :description="$t('aragon.description')">
        </timeline-item>

      </div>
      
    </div>

  </c-section>
</template>

<script>
import CSection from './modules/Section.vue'
import TimelineItem from './modules/TimelineItem.vue'

export default {

  components: {
    CSection,
    TimelineItem
  },

  i18n: {
    messages: {
      en: { 
        title: 'Education',
        description: 'My school cursus.',
        ict: {
          time: "2008",
          heading: "Catholic Institute",
          title: "Law degree (not validated)",
          location: "Toulouse, France",
          description: "First year of law degree validated at the Catholic Institute of Toulouse."
        },
        aragon: {
          time: "2006",
          heading: "High school Pierre d’Aragon",
          title: "Scientific Baccalaureate",
          location: "Muret, France",
          description: "Scientific BAC option Physics-Chemistry validated with honors."
        }
      },
      fr: {
        title: 'Etudes',
        description: 'Mon parcours scolaire.',
        ict: {
          time: "2008",
          heading: "Institut Catholique",
          title: "Licence de droit (non validée)",
          location: "Toulouse, France",
          description: "Première année de droit validée à l'Institut Catholique de Toulouse."
        },
        aragon: {
          time: "2006",
          heading: "Lycée Pierre d’Aragon",
          title: "Baccalauréat Scientifique",
          location: "Muret, France",
          description: "Obtention du BAC Scientique option Physique-Chimie avec mention Assez Bien."
        }
      }
    }
  }
  
}
</script>
