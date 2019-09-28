<template>
  <div class="timer-list-item">
    <div class="timer-content d-flex">
      <div class="timer-content-left w-100">
        <div class="d-flex">
          <!--NOMBRE TAREA Y TIEMPO-->
          <p
            class="w-100"
            :contenteditable="contentEditable"
            @keyup="setTaskName"
            @blur="updateTaskName"
          >{{ taskName }}</p>
          <div class="date button-timer flex-shrink-1">{{ taskTime }}</div>
        </div>
      </div>
      <div class="timer-content-right timer-content-buttons flex-shrink-1">
        <div class="d-flex">
          <!--BOTÓN PLAY-->
          <div class="timer-button-play" @click="pauseTask">
            <svg
              width="30px"
              height="48px"
              viewBox="0 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="button-action-play" fill="#000000" fill-rule="nonzero" fill-opacity="0.25">
                  <path
                    d="M45.9130435,0 L2.08695652,0 C0.933913043,0 0,0.933913043 0,2.08695652 L0,45.9130435 C0,47.066087 0.933913043,48 2.08695652,48 L45.9130435,48 C47.066087,48 48,47.066087 48,45.9130435 L48,2.08695652 C48,0.933913043 47.066087,0 45.9130435,0 Z M31.8834783,24.8681739 L19.3617391,33.216 C19.1864348,33.3318261 18.9850435,33.3913043 18.7826087,33.3913043 C18.6135652,33.3913043 18.4445217,33.3506087 18.290087,33.2681739 C17.9509565,33.0866087 17.7391304,32.7328696 17.7391304,32.3478261 L17.7391304,15.6521739 C17.7391304,15.2671304 17.9509565,14.9133913 18.290087,14.7318261 C18.6271304,14.5492174 19.0403478,14.5690435 19.3606957,14.784 L31.8824348,23.1318261 C32.1735652,23.325913 32.3478261,23.6514783 32.3478261,24 C32.3478261,24.3485217 32.1735652,24.674087 31.8834783,24.8681739 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
          </div>
          <!--TRES PUNTITOS PARA BORRAR TAREA-->
          <div class="timer-button-moreInfo" @click="deployTaskActions">
            <svg
              width="6px"
              height="22px"
              viewBox="0 0 6 22"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="timer" transform="translate(-996.000000, -27.000000)" fill="#D8D8D8">
                  <g id="header-timer">
                    <g id="header-content" transform="translate(24.000000, 14.000000)">
                      <g id="header-left" transform="translate(876.000000, 0.000000)">
                        <g id="button-more" transform="translate(96.000000, 13.000000)">
                          <g id="Group-2">
                            <g id="Group">
                              <circle id="Oval" cx="3" cy="3" r="3" />
                            </g>
                            <g id="Group-Copy" transform="translate(0.000000, 8.000000)">
                              <circle id="Oval" cx="3" cy="3" r="3" />
                            </g>
                            <g id="Group-Copy-2" transform="translate(0.000000, 16.000000)">
                              <circle id="Oval" cx="3" cy="3" r="3" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import put from "../../utils/restClient";
import { log } from "util";

export default {
  name: "ListItem",
  data: () => ({
    contentEditable: true,
    updatedTaskName: ""
  }),
  props: {
    taskName: {
      type: String,
      default: "Task name"
    },

    taskTime: {
      type: String,
      default: "00:00:00"
    }
  },
  methods: {
    setTaskName: /*async*/ function() {
      console.log("This changes the updated task name");
      //const newTaskName = await put('https://docemonos-hackaton-node.herokuapp.com/',)
    },
    updateTaskName: function() {
        console.log("This updates the task name in the API");
    },
    pauseTask: function() {
      console.log("This pauses the task");
    },
    deployTaskActions: function() {
      console.log("This deploys the delete button");
    }
  }
};
</script>