const { useEffect: useBlurEffect, useRef: useBlurRef, useState: useBlurState } = React;
const { motion: blurMotion } = window.Motion;

function BlurText({ text, className = "" }) {
  const ref = useBlurRef(null);
  const [visible, setVisible] = useBlurState(false);

  useBlurEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`${className} hero-headline`}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "0.1em",
      }}
    >
      {text.split(" ").map((word, index) => (
        <blurMotion.span
          key={`${word}-${index}`}
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={
            visible
              ? {
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : undefined
          }
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: "easeOut",
            delay: (index * 100) / 1000,
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </blurMotion.span>
      ))}
    </p>
  );
}

window.BlurText = BlurText;
