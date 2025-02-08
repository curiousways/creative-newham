import Image, { StaticImageData } from "next/image";

type HeroImageProps = {
  src: string | StaticImageData;
}

export const HeroImage = ({ src }: HeroImageProps) => (
  <div className="aspect-[3/2] relative mb-8">
    <Image
      fill
      className="cn-image cn-image--stylised rounded-3xl"
      src={src}
      alt=""
    />
  </div>
)
