import type Stripe from "stripe";

import { stripe } from "@/lib/stripe";

import { ProductCarousel } from "./_components/product-carousel";

// https://github.com/vercel/next.js/issues/72365
export let revalidate = 60 * 60 * 2; // 2 hours

export default async function Home() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      formattedPrice: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return (
    <div className="flex gap-12 max-w-[calc(100vw-(100vw-1180px)/2)] w-full ml-auto min-h-[656px]">
      <ProductCarousel products={products} />
    </div>
  );
}
