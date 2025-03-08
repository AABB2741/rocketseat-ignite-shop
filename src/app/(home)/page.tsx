import { ProductCarousel } from "./_components/product-carousel";

export default function Home() {
  return (
    <div className="flex gap-12 max-w-[calc(100vw-(100vw-1180px)/2)] w-full ml-auto min-h-[656px]">
      <ProductCarousel />
    </div>
  );
}
