<template>
  <div class="timer-button-type">
    <TimerButtonNormal />
    <TimerButtonCountdown />
  </div>
</template>

<script>
import TimerButtonNormal from './TimerButtonNormal.vue';
import TimerButtonCountdown from './TimerButtonCountdown.vue';

export default {
  name: 'TimerButtonTypes',
  components: {
    TimerButtonNormal,
    TimerButtonCountdown,
  },
};
</script>

<style></style>
