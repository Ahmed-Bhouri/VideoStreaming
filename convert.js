const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");

const VideoDir = "video.mp4";
let VideoName = VideoDir.split("/")[VideoDir.split("/").length - 1].replace(
  ".mp4",
  ""
);

fs.mkdir("videos/" + VideoName);

function contohls360() {
  function callback() {
    // Do stuff At the end of convertion
    console.log("Video Converted to 360p Hls");
  }
  ffmpeg(VideoDir, { timeout: 432000 })
    .addOptions([
      "-profile:v baseline", // baseline profile (level 3.0) for H264 video codec
      "-level 3.0",
      "-s 640x360", // 640px width, 360px height output video dimensions
      "-start_number 0", // start the first .ts segment at index 0
      "-hls_time 10", // 10 second segment duration
      "-hls_list_size 0", // Maxmimum number of playlist entries (0 means all entries/infinite)
      "-f hls", // HLS format
    ])
    .output("videos/" + VideoName + "360p.m3u8")
    .on("end", callback)
    .run();
}

function contohls720() {
  function callback() {
    // Do stuff At the end of convertion
    console.log("Video Converted to 720p Hls");
  }
  ffmpeg(VideoDir, { timeout: 432000 })
    .addOptions([
      "-profile:v baseline",
      "-level 3.0",
      "-s 1280x720",
      "-start_number 0",
      "-hls_time 10",
      "-hls_list_size 0",
      "-f hls",
    ])
    .output("videos/720p.m3u8")
    .on("end", callback)
    .run();
}

function contohls1080() {
  function callback() {
    // Do stuff At the end of convertion
    console.log("Video Converted to 1080p Hls");
  }
  ffmpeg(VideoDir, { timeout: 432000 })
    .addOptions([
      "-profile:v baseline",
      "-level 3.0",
      "-s 1920x1080",
      "-start_number 0",
      "-hls_time 10",
      "-hls_list_size 0",
      "-f hls",
    ])
    .output("videos/1080p.m3u8")
    .on("end", callback)
    .run();
}

async function convertToAll() {
  await contohls360();
  await contohls720();
  await contohls1080();
  // we can add more resolutions
}

convertToAll();
