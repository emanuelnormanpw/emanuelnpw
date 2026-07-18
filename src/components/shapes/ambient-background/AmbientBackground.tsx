import { ambientBackgroundCx } from "./styles";

const AmbientBackground = () => {
  return (
    <div css={ambientBackgroundCx} aria-hidden="true">
      <iframe
        src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq"
        title=""
        tabIndex={-1}
        loading="lazy"
      />
    </div>
  );
};

export default AmbientBackground;
