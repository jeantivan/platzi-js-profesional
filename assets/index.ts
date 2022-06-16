import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/ads";

const video = document.querySelector("video");
const playButton: HTMLElement = document.querySelector("#play")!;
const muteButton: HTMLElement = document.querySelector("#mute")!;

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

/* if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.error(error);
  });
} */
