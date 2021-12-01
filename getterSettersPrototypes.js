function Class({ title, videoURL, description, comments = [] }) {
  this._title = title;
  this._videoURL = videoURL;
  this._description = description;
  this._comments = comments;
}

Class.prototype.__defineGetter__('title', function () {
  return this._title;
});

Class.prototype.__defineSetter__('title', function (newTitle) {
  this._title = newTitle;
});
