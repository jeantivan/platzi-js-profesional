import MediaPlayer from "../../MediaPlayer";
import Ads, { Ad } from "./ads";

class AdsPlugin {
  private player: MediaPlayer;
  private media: HTMLMediaElement;
  private ads: Ads;
  private currentAd: Ad | null;
  private adContainer: HTMLElement;

  constructor() {
    this.ads = Ads.getInstance();
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);

    this.adContainer = document.createElement("div");
    /* this.adContainer.style.position = "absolute";
    this.adContainer.style.bottom = "100%"
    this.adCo */
  }

  run(player: MediaPlayer) {
    this.player = player;
    this.player.container.appendChild(this.adContainer);
    this.media = this.player.media;

    this.media.addEventListener("timeupdate", this.handleTimeUpdate);
  }

  private handleTimeUpdate() {
    const currentTime = Math.floor(this.media.currentTime);

    if (currentTime % 30 === 0) {
      this.renderAd();
    }
  }

  private renderAd() {
    if (this.currentAd) return;

    const ad = this.ads.getAd();

    this.currentAd = ad;

    this.adContainer.innerHTML = `
      <div class="ads">
        <a class="ads__link" href="${this.currentAd.url}" target="_blank">
          <img class="ads__img" alt="${this.currentAd.title}" src="${this.currentAd.imageUrl}" />
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
        </a>
      </div>  
    `;

    setTimeout(() => {
      this.currentAd = null;
      this.adContainer.innerHTML = "";
    }, 10000);
  }
}

export default AdsPlugin;
