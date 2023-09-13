import Image from 'next/image'

interface ImageProps {
  src: string
  alt: string
  height: number
  width: number
}
export default function TagImage({ src, alt, height, width }: ImageProps) {
  return <Image src={src} alt={alt} width={width} height={height} />
}
