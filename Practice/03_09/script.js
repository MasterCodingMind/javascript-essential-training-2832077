/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  changeName: function (bagName) {
    this.name = bagName
  },
  changeVolume: function (volumeChange) {
    this.volume = volumeChange
  },
  updateColor: function (newColor) {
    this.color = newColor
  },
  updatePocketNum: function (pockets) {
    this.pocketNum = pockets
  },
  updateStrapLength: function (rightLength) {
    this.strapLength.right = rightLength
  }
};
