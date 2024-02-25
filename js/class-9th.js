

let ch = document.getElementsByClassName("ch");
ch = Array.from(ch);
// adding hidden class
let classAdder = () => {
  ch.forEach((element) => {
    element.classList.add("ch-part-hidden");
  });
};

let videoListFunction = (clickingButton, sublistClass, hiddenClassToggle) => {
  document.querySelector(clickingButton).addEventListener("click", () => {
    classAdder();
    document.querySelector(sublistClass).classList.toggle(hiddenClassToggle);
  });
};

videoListFunction(".video-add10", ".ch1", "ch-part-hidden");
videoListFunction(".video-add20", ".ch2", "ch-part-hidden");
videoListFunction(".video-add30", ".ch3", "ch-part-hidden");
videoListFunction(".video-add40", ".ch4", "ch-part-hidden");
videoListFunction(".video-add50", ".ch5", "ch-part-hidden");
videoListFunction(".video-add60", ".ch6", "ch-part-hidden");
videoListFunction(".video-add70", ".ch7", "ch-part-hidden");
videoListFunction(".video-add80", ".ch8", "ch-part-hidden");
videoListFunction(".video-add90", ".ch9", "ch-part-hidden");
videoListFunction(".video-add100", ".ch10", "ch-part-hidden");
videoListFunction(".video-add110", ".ch11", "ch-part-hidden");
videoListFunction(".video-add120", ".ch12", "ch-part-hidden");
videoListFunction(".video-add130", ".ch13", "ch-part-hidden");
videoListFunction(".video-add140", ".ch14", "ch-part-hidden");
videoListFunction(".video-add150", ".ch15", "ch-part-hidden");
videoListFunction(".video-add160", ".ch16", "ch-part-hidden");

// function to add video
fullVideoFunction = (
  buttonToPlayVideo,
  videoClassInwhichVideoWillBeAdded,
  FullVideolink
) => {
  document.querySelector(buttonToPlayVideo).addEventListener("click", () => {
    document.querySelector(videoClassInwhichVideoWillBeAdded).innerHTML =
      FullVideolink;
  });
};
let a = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/gqCGWCvWcDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

// adding video in chapter-1 list
fullVideoFunction(".video-add11", ".video-content-yt", a);
fullVideoFunction(".video-add12", ".video-content-yt", a);
fullVideoFunction(".video-add13", ".video-content-yt", a);
fullVideoFunction(".video-add14", ".video-content-yt", a);
