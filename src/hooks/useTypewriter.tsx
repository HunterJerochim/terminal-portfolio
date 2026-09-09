import { useEffect, useState } from "react";

type TypewriterOptions = {
  speed?: number;
  delay?: number;
};

export const useTypewriter = (
  text: string,
  { speed = 95, delay = 500 }: TypewriterOptions = {},
) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let interval: number | undefined;

    const startDelay = window.setTimeout(() => {
      let index = 0;

      interval = window.setInterval(() => {
        index += 1;
        setTypedText(text.slice(0, index));

        if (index >= text.length) {
          window.clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startDelay);

      if (interval !== undefined) {
        window.clearInterval(interval);
      }
    };
  }, [text, speed, delay]);

  return typedText;
};
