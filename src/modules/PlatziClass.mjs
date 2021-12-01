function videoPlay(videoID) {
  const urlSecret = 'https://platzisecreto/' + videoID;
  console.log('Reproduciendo:', urlSecret);
}

function videoStop(videoID) {
  const urlSecret = 'https://platzisecreto/' + videoID;
  console.log('Pausando:', urlSecret);
}

export class PlatziClass {
  constructor({ name, videoID, description, comments = [] }) {
    this._name = name;
    this._videoID = videoID;
    this._description = description;
    this._comments = comments;
  }

  play() {
    videoPlay(this._videoID);
  }

  pause() {
    videoStop(this._videoID);
  }
}
