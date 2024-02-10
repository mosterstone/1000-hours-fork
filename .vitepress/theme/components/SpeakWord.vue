<template>
  <div class="speak-word">
    <div class="word" >
      {{ props.word }}
    </div>
    <span class="pos">
      {{ props.pos }}
    </span>
    <div class="spacer"></div>
    <div class="ctrl">
      <span class="accent-label">US</span>
      <button class="play-button us" @click="playAudio('us')">
        <PlayCircleOutline color="#d87676"/>
      </button>
      <div class="divider"></div>
      <span class="accent-label">UK</span>
      <button class="play-button uk" @click="playAudio('uk')">
        <PlayCircleOutline color="#d87676"/>
      </button>
    </div>
    <audio class="audio" :src="audioPathUS" controls="false" ref="audioElUS"></audio>
    <audio class="audio" :src="audioPathUK" controls="false" ref="audioElUK"></audio>
  </div>
</template>


<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { PlayCircleOutline } from "./icons";
import { getAudioPath } from "../data";
const props = defineProps({
  word: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
  },
  pos: {
    type: String,
  },
});
const audioElUS = ref<any>(null);
const audioElUK = ref<any>(null);
const audioPathUS = computed(() => getAudioPath(props.word, "us"));
const audioPathUK = computed(() => getAudioPath(props.word, "uk"));
function playAudio(ver) {
  if (ver === "us") {
    audioElUS.value.play();
  } else {
    audioElUK.value.play();
  }
}
</script>


<style lang="css" scoped>
.speak-word {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px solid #d87676;
  padding: 8px 0;
}
.speak-word:last-child {
  border-bottom: 1px solid #d87676;
}
.ctrl {
  display: flex;
  align-items: center;
}
.ctrl .divider {
  width: 1px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 16px;
}
.accent-label {
  margin-right: 4px;
  opacity: 0.7;
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
