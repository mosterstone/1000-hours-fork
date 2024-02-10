<template>
  <div class="speak-word">
    <div class="word" >
      {{ props.word }}
    </div>
    <span class="pos">
      {{ props.pos }}
    </span>
    <div class="spacer"></div>
    <button class="play-button" @click="playAudio">
      <PlayCircleOutline color="#d87676"/>
    </button>
    <audio class="audio" :src="props.audio" controls="false" ref="audioEl"></audio>
  </div>
</template>


<script setup lang="ts">
import { defineProps, ref } from "vue";
import { PlayCircleOutline } from "./icons";
const props = defineProps({
  word: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  pos: {
    type: String,
  },
});
const audioEl = ref(null);
function playAudio() {
  const audio = audioEl.value
  audio.play();
}
</script>


<style lang="css" scoped>
.speak-word {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px solid #d87676;
  padding: 8px 0;
  &:last-child {
    border-bottom: 1px solid #d87676;
  }
}
.word {
  font-size: 18px;
  font-weight: bold;
  color: #af4c4c;
}
audio {
  display: none;
}
.spacer {
  flex-grow: 1;
}
.pos {
  opacity: 0.7;
}
.play-button {
  border: none;
  border-radius: 4rem;
  padding: 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  cursor: pointer;
  height: 32px;
  width: 32px;
}
</style>
