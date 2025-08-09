import video1 from "./videos/video-1.mp4";
import { forwardRef } from "react";

function Video(props, ref) {
  return <video width={500} src={video1} ref={ref}></video>;
}

export default forwardRef(Video);
