MaterialPlayer.Player = class MaterialPlayer {
  constructor(el, intf, profile) {
    this.element = el;
    this.interface = intf;
    this.profile = profile;

    this.profiles = { main: profile };

    this.playing = null;
    this.currentList = null;
    this.selected = null;
    this.dataInitialized = false;

    this.vue = null;
  }

  initialize() {
    this.vue = new Vue({
      el: this.element,
      data: {
        player: this,
      },
    });

    this.initializeData();

    console.log('Material player initialized');
  }
};
