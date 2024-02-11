<script setup>
import { onMounted } from "vue";

import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

function buildPlayButton(parent, accent, url) {
  const labelEl = document.createElement('span');
  labelEl.classList.add('accent-label');
  labelEl.innerText = accent.toUpperCase();
  const audioEl = document.createElement('audio');
  audioEl.classList.add('audio')
  audioEl.setAttribute('src', url)
  audioEl.setAttribute('controls', 'false')
  const iconEl = document.createElement('img');
  iconEl.classList.add('icon');
  let svg = '/images/speaker-blue.svg';
  if (accent === 'uk') {
    svg = '/images/speaker-brown.svg';
  }
  iconEl.setAttribute('src', svg)
  iconEl.innerText = accent.toUpperCase();

  const btnEl = document.createElement('button')
  btnEl.classList.add('play-button')
  btnEl.classList.add(accent);
  btnEl.addEventListener('click', () => {
    audioEl.play();
  })
  // btnEl.append(labelEl)
  btnEl.append(iconEl)
  btnEl.append(audioEl)
  parent.append(btnEl)
}

function convertToInlineComponent(el) {
  const word = el.innerText;
  const dataPos = el.getAttribute('data-pos')
  const dataAudioUs = el.getAttribute('data-audio-us')
  const dataAudioUk = el.getAttribute('data-audio-uk')
  console.log(word, dataPos, dataAudioUs, dataAudioUk)

  const wrapperEl = document.createElement('div')
  wrapperEl.classList.add('speak-word-wrapper')
  const canEl = document.createElement('div')
  canEl.classList.add('speak-word')
  canEl.classList.add('inline')

  if (dataAudioUk || dataAudioUs) {
    const ctrlEl = document.createElement('div')
    ctrlEl.classList.add('ctrl')
    const ctrlPartEl = document.createElement('div')
    ctrlPartEl.classList.add('ctrl-part')
    if (dataAudioUs) {
      buildPlayButton(ctrlPartEl, 'us', dataAudioUs)
    }
    ctrlEl.append(ctrlPartEl);
    const ctrlPartEl2 = document.createElement('div')
    ctrlPartEl2.classList.add('ctrl-part')
    if (dataAudioUk) {
      buildPlayButton(ctrlPartEl2, 'uk', dataAudioUk)
    }
    ctrlEl.append(ctrlPartEl2);
    canEl.append(ctrlEl)
  }
  wrapperEl.append(canEl)
  // insert at el's side
  el.insertAdjacentElement('afterend', wrapperEl)
  el.style.display = 'none'
}

onMounted(() => {
  setTimeout(() => {
    const inlinePlayerEls = document.querySelectorAll('.speak-word-inline')
    for (let i = 0; i < inlinePlayerEls.length; i += 1) {
      convertToInlineComponent(inlinePlayerEls[i]);
    }
  }, 200)
})
</script>

<template>
  <Layout>
    <template #doc-after>
    </template>
  </Layout>
</template>

<style lang="scss">
@import url(../components/SpeakWord.scss);
.speak-word-wrapper {
  display: inline-block;
  margin: 0px;
  vertical-align: middle;
}
.speak-word.inline {
  border: none;
  display: flex;
  padding: 0;
  .word {
    display: inline-block;
  }
  .ctrl-part {
    .play-button {
      display: flex;
      width: 24px;
      height: 24px;
      align-items: center;
      justify-content: center;
      .icon {
        width: 16px;
        height: 16px;
      }
    }
    .accent-label {
      font-size: 14px;
      display: inline-block;
      color: white;
    }
  }
}
</style>