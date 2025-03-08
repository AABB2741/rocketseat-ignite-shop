import type React from "react";

interface ProductProps extends React.PropsWithChildren {}

export function Product({ children }: ProductProps) {
  return (
    <div className="embla__slide min-w-[580px] flex-[0_0_33%] mr-12">
      <a className="bg-linear-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 cursor-pointer relative flex items-center justify-center group overflow-hidden">
        {children}

        <footer className="absolute bottom-1 left-1 right-1 rounded-md justify-between flex items-center bg-black/60 p-8 translate-y-[110%] opacity-0 transition-all ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Camiseta X</strong>
          <span className="text-xl font-bold text-green-300">R$ 79,90</span>
        </footer>
      </a>
    </div>
  );
}
