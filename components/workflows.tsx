export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-10">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-green-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-green-200/50">
              <span className="inline-flex bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                Stand To Deliver
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
             Locally Assembled, Globally Inspired
            </h2>
            <p className="text-lg text-green-200/65">
            At Ingates, our R&D team has meticulously studied the best gate automation systems worldwide,
            bringing only essential materials to Rwanda for local assembly.
            This unique approach allows us to offer high-quality, affordable gate solutions,
            with seamless installation and dedicated support to ensure your experience exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
