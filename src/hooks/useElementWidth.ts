import { useState, useEffect, RefObject } from "react";

function useElementWidth(
  ref: RefObject<HTMLElement | null>,
): number | undefined {
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export default useElementWidth;
