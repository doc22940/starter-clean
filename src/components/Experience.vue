<template>
  <c-section :title="$t('title')" :description="$t('description')" nopb>

    <div class="a-experience-timeline c-timeline t-border-color in-view">

      <timeline-item
        :time="$t('beproject.time')"
        :heading="$t('beproject.heading')"
        :title="$t('beproject.title')"
        :location="$t('beproject.location')"
        :description="$t('beproject.description')">
      </timeline-item>

      <timeline-item
        :time="$t('unpixel.time')"
        :heading="$t('unpixel.heading')"
        :title="$t('unpixel.title')"
        :location="$t('unpixel.location')"
        :description="$t('unpixel.description')">
      </timeline-item>

      <timeline-item
        :time="$t('devoteam.time')"
        :heading="$t('devoteam.heading')"
        :title="$t('devoteam.title')"
        :location="$t('devoteam.location')"
        :description="$t('devoteam.description')">
      </timeline-item>

      <timeline-item
        :time="$t('accenture.time')"
        :heading="$t('accenture.heading')"
        :title="$t('accenture.title')"
        :location="$t('accenture.location')"
        :description="$t('accenture.description')">
      </timeline-item>

      <timeline-item
        :time="$t('hp1.time')"
        :heading="$t('hp1.heading')"
        :title="$t('hp1.title')"
        :location="$t('hp1.location')"
        :description="$t('hp1.description')">
      </timeline-item>

      <timeline-item
        :time="$t('hp2.time')"
        :heading="$t('hp2.heading')"
        :title="$t('hp2.title')"
        :location="$t('hp2.location')"
        :description="$t('hp2.description')">
      </timeline-item>

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
        title: 'Experience',
        description: 'My professional career.',
        beproject: {
          time: "2016 - Present",
          heading: "BeProject",
          title: "Full Stack Web Developer & Graphist",
          location: "Mazamet, France",
          description: "Development, deployment and maintenance of business web applications for pharmaceutical and automotive big companies. Team leader of a 4-5 web developers team. Installation, configuration and maintenance of server infrastructures for the web."
        },
        unpixel: {
          time: "2015 - 2017",
          heading: "Freelance - UnPixel",
          title: "Full Stack Web Developer & Graphist",
          location: "Castres, France",
          description: "Development (functional and graphic mock-up, integration, deployment, maintenance) of custom-made website or CMS for small and medium companies. Graphic creations for logos, flyers, business cards, ..."
        },
        devoteam: {
          time: "2012 - 2014",
          heading: "Devoteam",
          title: "IT Technician",
          location: "Castres, France",
          description: "IT support for Pierre Fabre company."
        },
        accenture: {
          time: "2011 - 2012",
          heading: "Accenture",
          title: "IT Technician",
          location: "Dublin, Ireland",
          description: "IT support for Freeport company."
        },
        hp1: {
          time: "2010 - 2011",
          heading: "Hewlett-Packard",
          title: "IT Coach",
          location: "Rabat, Morocco",
          description: "3 months mission abroad to train IT technicians on their location."
        },
        hp2: {
          time: "2010 - 2011",
          heading: "Hewlett-Packard",
          title: "IT Technician",
          location: "Dublin, Ireland",
          description: "IT Support / Coaching for Total company."
        }
      },
      fr: {
        title: 'Expérience',
        description: 'Mon parcours professionel.',
        beproject: {
          time: "2016 - Présent",
          heading: "BeProject",
          title: "Développeur Web Full Stack & Graphiste",
          location: "Mazamet, France",
          description: "Développement, déploiement et maintenance d'applications web métier pour des grands comptes dans le domaine pharmaceutique et automobile notamment. Supervision d'une équipe de 4-5 développeurs web. Mise en place et maintenance d'infrastructures serveurs pour le web."
        },
        unpixel: {
          time: "2015 - 2017",
          heading: "Freelance - UnPixel",
          title: "Développeur Web Full Stack & Graphiste",
          location: "Castres, France",
          description: "Développement (maquettage fonctionnel et graphique, intégration, déploiement, maintenance) de sites web sur mesure ou de type CMS pour des TPE/PME. Créations graphiques de logos, flyers, cartes de visite, etc."
        },
        devoteam: {
          time: "2012 - 2014",
          heading: "Devoteam",
          title: "Technicien Informatique",
          location: "Castres, France",
          description: "Support informatique pour le compte de l’entreprise Pierre Fabre."
        },
        accenture: {
          time: "2011 - 2012",
          heading: "Accenture",
          title: "Technicien Informatique",
          location: "Dublin, Irlande",
          description: "Support informatique pour le compte de l’entreprise Freeport."
        },
        hp1: {
          time: "2010 - 2011",
          heading: "Hewlett-Packard",
          title: "Coach Informatique",
          location: "Rabat, Maroc",
          description: "Mission de 3 mois pour former les techniciens informatique sur place."
        },
        hp2: {
          time: "2010 - 2011",
          heading: "Hewlett-Packard",
          title: "Technicien Informatique",
          location: "Dublin, Irlande",
          description: "Support / Coaching informatique pour le compte de l’entreprise Total."
        }
      }
    }
  }

}
</script>
