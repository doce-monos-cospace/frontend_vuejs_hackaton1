<template>
  <div class="timer-content-left w-100">
    <div class="d-flex">
      <p id="task-name" @keyup="changeTaskNameInput()" class="w-100" contenteditable="true">
        Nombre de la tarea
      </p>
      <div class="date button-timer flex-shrink-1">0:00:00</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskNameInput',
};
</script>

<style></style>
