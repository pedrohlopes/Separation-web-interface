var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: "cursor",
  colors: {
    waveOutlineColor: "#E0EFF1",
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200, //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000],
});


const selectElement = document.querySelector('.AudioSelector');
console.log(selectElement)

selectElement.addEventListener('change', (event) => {
  const path = "media/audio/" + event.target.value;
  console.log("Tentando")
  playlist.clear()
  playlist.load([
    {
      src: path + "_vocals_pred.wav",
      name: event.target.value + " Vocals"
    },
    {
      src: path + "_acc_pred.wav",
      name: event.target.value + " Acc"
    },
  ])
});
  
