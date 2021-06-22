Array.prototype.shuffle = function () {
  // shuffle array using Fisher-Yates algorithm
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

export default Array.prototype.shuffle;
