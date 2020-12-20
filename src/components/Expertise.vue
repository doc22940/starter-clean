<template>

  <c-section :title="$t('title')" :description="$t('description')">

    <div class="o-grid">

      <grid-item
        icon="desktop"
        :title="$t('frontEnd.title')"
        :description="$t('frontEnd.description')">
      </grid-item>

      <grid-item
        icon="cogs"
        :title="$t('backEnd.title')"
        :description="$t('backEnd.description')">
      </grid-item>

      <grid-item
        icon="paint-brush"
        :title="$t('graphicDesign.title')"
        :description="$t('graphicDesign.description')">
      </grid-item>

      <grid-item
        icon="server"
        :title="$t('server.title')"
        :description="$t('server.description')">
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
        title: 'Expertise',
        description: 'Domains of my expertise.',
        frontEnd: {
          title: 'Front-End',
          description: 'I develop clear, fast and easy-to-use interfaces. My favorite frameworks are Vue.js for Javascript and Bootstrap for CSS.',
        },
        backEnd: {
          title: 'Back-End',
          description: 'I develop PHP applications using the MVC architecture in order to optimize their performance and maintainability. My favorite PHP framework is Laravel.',
        },
        graphicDesign: {
          title: 'Graphic Design',
          description: 'I design for the web and for the print (flyer, logo, business card, ...). I mainly use Adobe softwares (Photoshop, Illustrator, XD).',
        },
        server: {
          title: 'Server',
          description: 'I install, configure and maintain Linux (Debian) web servers. I use virtualization for my development environments (Docker, Vagrant, VMWare).',
        }
      },

      fr: {
        title: 'Compétences',
        description: 'Mes domaines de compétence.',
        frontEnd: {
          title: 'Front-End',
          description: 'Je développe des interfaces claires, rapides et simple à utiliser. Mes frameworks favoris sont Vue.js pour le Javascript et Bootstrap pour le CSS.',
        },
        backEnd: {
          title: 'Back-End',
          description: 'Je développe des applications PHP utilisant l\'architecture MVC afin d\'optimiser les performances et la maintenabilité de celles-ci. Mon framework PHP favori est Laravel.',
        },
        graphicDesign: {
          title: 'Graphisme',
          description: 'Je design des interfaces pour le web ainsi que pour l\'impression (flyer, logo, carte de viste, etc.). Pour cela, j\'utilise principalement la suite Adobe (Photoshop, Illustrator, XD).',
        },
        server: {
          title: 'Serveur',
          description: 'J\'installe, je configure et je maintiens des serveurs web Linux (Debian). J\'utilise la virtualisation pour mes environnements de développement (Docker, Vagrant, VMWare).',
        }
      }

    }
  }
  
}
</script>
