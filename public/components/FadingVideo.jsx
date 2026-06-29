const { useEffect, useRef } = React;

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

function readOpacity(video) {
  const parsed = Number.parseFloat(video.style.opacity || "0");
  return Number.isFinite(parsed) ? parsed : 0;
}

function FadingVideo({ src, className, style, ariaLabel }) {
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const restartTimeoutRef = useRef(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    function cancelFade() {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    }

    function fadeTo(target, duration = FADE_MS) {
      cancelFade();

      const start = readOpacity(video);
      const delta = target - start;

      if (Math.abs(delta) < 0.001) {
        video.style.opacity = String(target);
        return;
      }

      const startedAt = window.performance.now();

      function step(timestamp) {
        const progress = Math.min((timestamp - startedAt) / duration, 1);
        video.style.opacity = String(start + delta * progress);

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(step);
          return;
        }

        frameRef.current = null;
      }

      frameRef.current = window.requestAnimationFrame(step);
    }

    function handleLoadedData() {
      video.style.opacity = "0";
      void video.play().catch(() => undefined);
      fadeTo(1);
    }

    function handleTimeUpdate() {
      if (
        fadingOutRef.current ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0
      ) {
        return;
      }

      if (video.duration - video.currentTime <= FADE_OUT_LEAD) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    }

    function handleEnded() {
      video.style.opacity = "0";

      if (restartTimeoutRef.current !== null) {
        window.clearTimeout(restartTimeoutRef.current);
      }

      restartTimeoutRef.current = window.setTimeout(() => {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    }

    video.style.opacity = "0";
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      handleLoadedData();
    }

    return () => {
      cancelFade();
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);

      if (restartTimeoutRef.current !== null) {
        window.clearTimeout(restartTimeoutRef.current);
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={{ opacity: 0, ...style }}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-label={ariaLabel}
    />
  );
}

window.FadingVideo = FadingVideo;
