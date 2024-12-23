"use client";
import VideoThumb from "@/public/images/open_gate_2.jpeg";
import ModalVideo from "@/components/modal-video";
import { logEvent } from "@/app/(default)/analytics";


const scrollToCTA = () => {
  const CtaSection = document.getElementById('Cta-section');
  if (CtaSection) {
    CtaSection.scrollIntoView({ behavior: 'smooth'});
  }
};

export default function HeroHome() {
  const handleClick = (category="CTA", action="Click", label:string) => {
    logEvent(category, action, label); // Customize category, action, and label as desired
  };
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Never Wait Behind Your Gate Again
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-green-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Unlock seamless access to your home with the SGD10 Smart on your gate. <br /> A smart
                gate solution designed to save you time and hassle. 
                <br/> Drive in without delay, rain or shine.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                     onClick={scrollToCTA}
                  >
                    <span className="relative inline-flex items-center">
                    Upgrade Your Gate Today
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-blue-800 to-blue-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://drive.google.com/uc?export=download&id=1dQYsKKjreeLR09LaiNmgnSGA_QnPYSgC" download="Ingates_catalog.pdf"
                    onClick={() => handleClick("CTA", "Download", "Catalog")}
                  >
                    Get Catalog
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1080}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//Ingates-web.mp4"
            videoWidth={10}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
