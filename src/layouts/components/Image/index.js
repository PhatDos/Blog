import { useState } from "react";
import images from "~/assets/images";

const Image = ({
  src,
  fallback: customFallback = images.noImage,
  ...props
}) => {
  const [fallback, setFallback] = useState("");

  return (
    <img
      src={fallback || src}
      {...props}
      alt="NoImg"
      onError={() => setFallback(customFallback)}
    />
  );
};

export default Image;
