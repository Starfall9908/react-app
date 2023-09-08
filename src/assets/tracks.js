import imgSrc from './images/pexels-levent-simsek-4365100.jpg';
import imgSrc2 from './images/pexels-richard-segal-1618606.jpg';
import imgSrc3 from './images/pexels-vincent-ma-janssen-1310847.jpg';
import sample from './sound samples/sample1.mp3';
import sample2 from './sound samples/sample2.mp3';
import sample3 from './sound samples/sample3.mp3';

export default [
  {
    title: "Sample 1",
    artist: "Artist 1",
    audioSrc: sample,
    image: imgSrc,
    color: "#00aeb0"
  },
  {
    title: "Sample 2",
    artist: "Artist 2",
    audioSrc: sample2,
    image: imgSrc2,
    color: "#ffb77a"
  },
  {
    title: "Sample 3",
    artist: "Sample 3",
    audioSrc: sample3,
    image: imgSrc3,
    color: "#5f9fff"
  }
];