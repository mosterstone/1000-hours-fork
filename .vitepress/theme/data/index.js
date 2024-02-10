const mapping = {
  "treasure": {
    "uk": ["ʒ-14-nova-treasure-01.mp3"],
    "us": ["ʒ-14-nova-treasure-00.mp3"]
  },
  "cheese": {
    "uk": ["9-nova-cheese-00.mp3"],
    "us": ["9-nova-cheese-01.mp3"]
  }
}

function getAudioPath(word, accent) {
  word = word.toLowerCase();
  accent = accent || 'us';
  const item = mapping[word];
  if (item && item[accent] && item[accent].length !== 0) {
    return `/vendor/audios/${item[accent][0]}`
  }
  return '';
}

export {
  mapping,
  getAudioPath
}