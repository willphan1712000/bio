/**
 * @param src - source of image
 * @param objectFit - object-fit css
 * @return - this will return an HTML Image Element
 * @note - this component must use Typescript compiler to interpret to javascript.
 * @note - this component must use Tailwind CSS as a CSS library to show image style
 */
const Image = ({src, objectFit}: {
  src: string,
  objectFit?: | 'contain' | 'fill' | 'cover',
}) => {
  return (
    <img className={`image size-full ${!objectFit ? 'object-contain' : 'object-' + objectFit}`} src={src} draggable={false} alt='React Image Component'/>
  )
}

export default Image
