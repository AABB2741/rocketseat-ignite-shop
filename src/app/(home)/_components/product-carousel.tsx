"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import shirt1 from "@/assets/_tshirts/1.png";
import shirt2 from "@/assets/_tshirts/2.png";
import shirt3 from "@/assets/_tshirts/3.png";

import { Product } from "./product";

export function ProductCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <Product>
          <Image
            className="object-cover"
            src={shirt1}
            alt="Camiseta"
            width={520}
            height={480}
          />
        </Product>
        <Product>
          <Image
            className="object-cover"
            src={shirt2}
            alt="Camiseta"
            width={520}
            height={480}
          />
        </Product>
        <Product>
          <Image
            className="object-cover"
            src={shirt3}
            alt="Camiseta"
            width={520}
            height={480}
          />
        </Product>
      </div>
    </div>
  );
}
