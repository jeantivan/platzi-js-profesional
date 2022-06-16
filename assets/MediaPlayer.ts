class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config: { el: HTMLMediaElement; plugins: never[] }) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer();
    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  private initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode?.insertBefore(this.container, this.media);

    this.container.appendChild(this.media);
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  toggleMute() {
    this.media.muted = !this.media.muted;
  }
}

export default MediaPlayer;
