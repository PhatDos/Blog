import { useState, ImgHTMLAttributes } from "react";
import images from "~/assets/images";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  fallback: customFallback = images.noImage,
  ...props
}) => {
  const [ fallback, setFallback ] = useState<string>("");

  return (
    <img
      src={fallback || src}
      {...props}
      alt={props.alt || "NoImg"}
      onError={() => setFallback(customFallback)}
    />
  );
};

export default Image;
