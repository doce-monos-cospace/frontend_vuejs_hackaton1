<template>
  <div class="home">
    <Dummy />
  </div>
</template>

<script>
// @ is an alias to /src
import Dummy from '@/components/Dummy.vue';

export default {
  name: 'home',
  components: {
    Dummy,
  },
};
</script>
