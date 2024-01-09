export const Figure = ({ src, alt, caption }) => (
  <figure>
    <img className="w-full object-cover rounded-xl" src={src} alt={alt} />
    {
      caption ? (
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          {caption}
        </figcaption>
      ) : null
    }
  </figure>
);