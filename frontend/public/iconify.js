import Vue from 'vue';
import { Icon } from '@iconify/vue';
import chevronLeft from '@iconify/icons-heroicons/arrow-left-20-solid';
import chevronRight from '@iconify/icons-heroicons/arrow-right-20-solid';

export default {
  components: {
    Icon
  },
  data() {
    return {
      chevronLeftIcon: chevronLeft,
      chevronRightIcon: chevronRight
    };
  }
};

