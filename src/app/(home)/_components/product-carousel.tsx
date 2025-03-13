"use client";

import useEmblaCarousel from "embla-carousel-react";

import { Product } from "./product";

interface ProductCarouselProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    formattedPrice: string;
  }[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
