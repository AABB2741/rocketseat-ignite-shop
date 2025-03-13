import Image from "next/image";

interface ProductProps {
  name: string;
  imageUrl: string;
  formattedPrice: string;
}

export function Product({ name, imageUrl, formattedPrice }: ProductProps) {
  return (
    <div className="embla__slide min-w-[580px] flex-[0_0_33%] mr-12">
      <a className="bg-linear-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer relative flex items-center justify-center group overflow-hidden">
        <Image
          className="object-cover"
          src={imageUrl}
          alt="Camiseta"
          width={520}
          height={480}
        />

        <footer className="absolute bottom-1 left-1 right-1 rounded-md justify-between flex items-center bg-black/60 p-8 translate-y-[110%] opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">{name}</strong>
          <span className="text-xl font-bold text-green-300">
            {formattedPrice}
          </span>
        </footer>
      </a>
    </div>
  );
}
