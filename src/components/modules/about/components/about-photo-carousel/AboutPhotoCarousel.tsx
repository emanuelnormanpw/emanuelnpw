import type { AboutPhotoCarouselProps } from "../../types";
import { useAboutPhotoCarousel } from "../../usecase";

const AboutPhotoCarousel = (props: AboutPhotoCarouselProps) => {
  const { photos } = props;
  const {
    activePhoto,
    activePhotoIndex,
    activeTrackIndex,
    isTrackResetting,
    loopedPhotos,
    trackIndex,
    handleNextPhoto,
    handlePreviousPhoto,
    handleSelectPhoto,
    handleTrackTransitionEnd,
  } = useAboutPhotoCarousel(photos);

  if (!photos.length || !activePhoto) {
    return null;
  }

  return (
    <div
      className="about-photo-carousel"
      aria-roledescription="carousel"
      aria-label="Personal photo carousel"
    >
      <div className="about-photo-viewport">
        <div
          className={`about-photo-track about-photo-track--index-${trackIndex}${
            isTrackResetting ? " about-photo-track--resetting" : ""
          }`}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {loopedPhotos.map((photo, photoIndex) => (
            <div
              key={`${photoIndex}-${photo.title}`}
              className={`about-photo-frame${
                photoIndex === activeTrackIndex
                  ? " about-photo-frame--active"
                  : ""
              }`}
            >
              <img
                className="about-photo"
                src={photo.src}
                alt={photo.alt}
                decoding="async"
                draggable={false}
                loading={photoIndex > photos.length ? "lazy" : "eager"}
              />
              {photoIndex === activeTrackIndex && photo.href ? (
                <a
                  className="about-carousel-link"
                  href={photo.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  URL
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="about-carousel-controls">
        <button
          className="about-carousel-button"
          type="button"
          aria-label="Show previous photo"
          onClick={handlePreviousPhoto}
        >
          Prev
        </button>

        <div className="about-carousel-status" aria-live="polite">
          <span>{activePhoto.title}</span>
          <span>
            {activePhotoIndex + 1}/{photos.length}
          </span>
        </div>

        <button
          className="about-carousel-button"
          type="button"
          aria-label="Show next photo"
          onClick={handleNextPhoto}
        >
          Next
        </button>
      </div>

      <div className="about-carousel-dots" aria-label="Choose photo">
        {photos.map((photo, photoIndex) => (
          <button
            key={`${photoIndex}-${photo.title}`}
            className={`about-carousel-dot${
              photoIndex === activePhotoIndex
                ? " about-carousel-dot--active"
                : ""
            }`}
            type="button"
            aria-label={`Show ${photo.title}`}
            aria-current={photoIndex === activePhotoIndex}
            onClick={() => handleSelectPhoto(photoIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPhotoCarousel;
