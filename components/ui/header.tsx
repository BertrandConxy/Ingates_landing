"use client";

import Logo from "./logo";

export const metadata = {
  title: "Ingates_ltd - SGD10 smart",
  description: "Ingates ltd landing page showing the details about SGD10 smart",
};
export default function Header() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3  px-3 before:pointer-events-none  before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
        </div>
      </div>
      </header>
    </>
  );
}
