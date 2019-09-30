<template>
  <div class="timer">
    <div class="timer-content d-flex">
      <TaskNameInput />
      <div class="timer-content-right timer-content-buttons flex-shrink-1">
        <div class="d-flex">
          <TimerPlayButton />
          <TimerStopButton />
          <TimerButtonTypes />
          <TimerButtonMoreInfo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskNameInput from './components/TaskNameInput.vue';
import TimerPlayButton from './components/TimerPlayButton.vue';
import TimerStopButton from './components/TimerStopButton.vue';
import TimerButtonTypes from './components/TimerButtonTypes.vue';
import TimerButtonMoreInfo from './components/TimerButtonMoreInfo.vue';

export default {
  name: 'Header',
  components: {
    TaskNameInput,
    TimerPlayButton,
    TimerStopButton,
    TimerButtonTypes,
    TimerButtonMoreInfo,
  },
  data: () => ({
    taskNameInput: '',
  }),
  methods: {
    changeTaskNameInput() {
      const taskNameValue = document.getElementById('task-name');
      this.taskNameInput = taskNameValue.textContent;
    },
  },
};
</script>

<style></style>
