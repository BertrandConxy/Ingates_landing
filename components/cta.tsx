import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { logEvent } from "@/app/(default)/analytics";




export default function Cta() {
  const handleClick = (category="CTA", action="Click", label:string) => {
    logEvent(category, action, label); // Customize category, action, and label as desired
  };
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div id="Cta-section" className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Reach Out To Us To Upgrade Your Gate Today
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center md:pb-10">
                <ul className="inline-flex gap-6">
                <li>
                  <a
                  className="flex items-center justify-center text-green-500 transition hover:text-green-400"
                  href="tel:+250780682640"
                  aria-label="Phone"
                  onClick={() => handleClick("CTA", "Click", "Phone")}
                  >
                  <svg className="h-16 w-16 fill-current" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#22C55E" stroke="#22C55E"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>phone_call_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Contact" transform="translate(-576.000000, -48.000000)" fill-rule="nonzero"> <g id="phone_call_fill" transform="translate(576.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M6.85728,2.44489 C7.99928,3.27790429 8.88915755,4.41552061 9.65001761,5.50316536 L10.0920364,6.14691904 L10.0920364,6.14691904 L10.509,6.76166 L10.509,6.76166 C10.9374,7.38835 10.8351,8.244 10.2531,8.74772 L8.30198,10.1967 C8.10859,10.3404 8.04429,10.6014 8.16028,10.8125 C8.60173,11.6161 9.38819,12.8119 10.2882,13.7119 C11.1891,14.6128 12.4414,15.45 13.3002,15.9412 C13.5229,16.0685 13.803,15.9948 13.9438,15.7803 L15.2131,13.8468 C15.6999,13.1991 16.6088,13.0576 17.2695,13.5149 L17.9332982,13.9735916 C19.1717645,14.8335207 20.5037538,15.8105615 21.521,17.1133 C21.8626,17.5507 21.9133,18.1227 21.7096,18.5981 C20.8728,20.5507 18.7552,22.2136 16.5524,22.1325 L16.2518759,22.1158001 L16.2518759,22.1158001 L16.0189256,22.0957065 L16.0189256,22.0957065 L15.7611336,22.0668244 L15.7611336,22.0668244 L15.4795621,22.0277651 L15.4795621,22.0277651 L15.1752731,21.97714 C15.1227241,21.9676615 15.0692729,21.9576432 15.0149414,21.9470562 L14.6785676,21.8764784 C14.6208039,21.8635009 14.5622043,21.8498968 14.5027909,21.8356372 L14.136722,21.7419821 L14.136722,21.7419821 L13.7521839,21.6312063 L13.7521839,21.6312063 L13.3502388,21.501921 C11.5039131,20.8764078 9.16110938,19.6464875 6.75735,17.2427 C4.35356813,14.8389125 3.12365344,12.4961028 2.49813876,10.6497861 L2.36885301,10.2478433 L2.36885301,10.2478433 L2.25807648,9.86330795 L2.25807648,9.86330795 L2.16442042,9.4972422 L2.16442042,9.4972422 L2.08649611,9.15070812 C2.06298899,9.03857004 2.04187237,8.92986425 2.02291481,8.82476776 L1.97228778,8.52048321 L1.97228778,8.52048321 L1.93322631,8.23891652 L1.93322631,8.23891652 L1.90434165,7.98112978 L1.90434165,7.98112978 L1.88424507,7.74818505 L1.88424507,7.74818505 L1.86754,7.44767 L1.86754,7.44767 C1.78675,5.25221 3.46855,3.11902 5.41215,2.28605 C5.86822,2.09059 6.4206,2.12636 6.85728,2.44489 Z M14.9917005,6.03952315 L15.1077,6.05315 C15.8356,6.18149 16.5042,6.53699 17.0177,7.06867 C17.5311,7.60035 17.863,8.28093 17.9659,9.01287 C18.0428,9.55978 17.6617,10.0654 17.1148,10.1423 C16.6069643,10.2137071 16.1346531,9.89022337 16.0082806,9.40576032 L15.9854,9.29121 C15.9413,8.97753 15.799,8.68585 15.579,8.45799 C15.3955833,8.26809833 15.1660556,8.13065111 14.9140856,8.05827565 L14.7604,8.02276 C14.2166,7.92686 13.8534,7.4082 13.9493,6.86431 C14.03835,6.35926 14.4919571,6.01004352 14.9917005,6.03952315 L14.9917005,6.03952315 Z M15,2.99999 C15.7879,2.99999 16.5682,3.15518 17.2961,3.45671 C18.0241,3.75824 18.6855,4.2002 19.2427,4.75735 C19.7998,5.3145 20.2418,5.97594 20.5433,6.70389 C20.8448,7.43184 21,8.21206 21,8.99999 C21,9.55227 20.5523,9.99999 20,9.99999 C19.48715,9.99999 19.0644908,9.61394571 19.0067275,9.11661025 L19,8.99999 C19,8.4747 18.8966,7.95456 18.6955,7.46926 C18.4945,6.98395 18.1999,6.543 17.8284,6.17156 C17.457,5.80013 17.0161,5.50549 16.5307,5.30447 C16.1262833,5.13695333 15.6977,5.03718667 15.2620796,5.00858435 L15,4.99999 C14.4477,4.99999 14,4.55227 14,3.99999 C14,3.44771 14.4477,2.99999 15,2.99999 Z" id="形状" fill="#22C55E"> </path> </g> </g> </g> </g></svg>
                  </a>
                </li>
                <li>
                  <a
                  className="flex items-center justify-center text-green-500 transition hover:text-green-400"
                  href="https://wa.me/0780682640"
                  aria-label="Whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick("CTA", "Click", "Whatsapp")}
                  >
<svg className="h-16 w-14 fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#22C55E" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Icons"> <g> <path d="M38.9,8.1A20.9,20.9,0,0,0,3.2,22.8,19.8,19.8,0,0,0,6,33.2L3,44l11.1-2.9a20.3,20.3,0,0,0,10,2.5A20.8,20.8,0,0,0,38.9,8.1Zm-14.8,32a17.1,17.1,0,0,1-9.5-2.8L8,39.1l1.8-6.4a17.9,17.9,0,0,1-3.1-9.9A17.4,17.4,0,1,1,24.1,40.1Z"></path> <path d="M33.6,27.2A29.2,29.2,0,0,0,30,25.5c-.4-.2-.8-.3-1.1.2s-1.4,1.7-1.7,2.1a.8.8,0,0,1-1.1.1,15.2,15.2,0,0,1-4.2-2.6A15,15,0,0,1,19,21.7a.7.7,0,0,1,.2-1l.8-1a3.5,3.5,0,0,0,.5-.8.9.9,0,0,0,0-.9c-.2-.3-1.2-2.8-1.6-3.9s-.9-.9-1.2-.9h-1a1.7,1.7,0,0,0-1.4.7,5.5,5.5,0,0,0-1.8,4.3,10.4,10.4,0,0,0,2.1,5.4c.3.3,3.7,5.6,8.9,7.8a16.4,16.4,0,0,0,3,1.1,6.4,6.4,0,0,0,3.3.2c1-.1,3.1-1.2,3.5-2.4s.5-2.3.3-2.5A2.1,2.1,0,0,0,33.6,27.2Z"></path> </g> </g> </g> </g></svg>
                  </a>
                </li>
                <li>
                  <a
                  className="flex items-center justify-center text-green-500 transition hover:text-green-400"
                  href="https://www.instagram.com/ingates_ltd/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick("CTA", "Click", "Instagram")}
                  >
                  <svg className="h-14 w-16 pt-2 md:pt-2 lg:pt-2 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#22C55E" stroke="#22C55E"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>instagram [#167]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#22C55E"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]"> </path> </g> </g> </g> </g></svg>
                  </a>
                </li>
                <li>
                  <a
                  className="flex items-center justify-center text-green-500 transition hover:text-green-400"
                  href="https://maps.app.goo.gl/TKF7wBVVU4VCHZ6x5"
                  aria-label="Location"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick("CTA", "Click", "Location")}
                  >
                  <svg
                    className="h-16 w-16 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 3C10.5 3 6 7.5 6 13c0 7.5 10 16 10 16s10-8.5 10-16c0-5.5-4.5-10-10-10zm0 13c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                  </svg>
                  </a>
                </li>
                </ul>
            </div>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div className="pb-4 pt-6 md:p-0" data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-gradient-to-b from-blue-800 to-blue-800/60 bg-[length:100%_100%] bg-[bottom] bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="https://drive.google.com/uc?export=download&id=1-94EZSfAGMzIUeYP_-9VkWZh1jBOgob4" download="Ingates_manual.pdf"
                  onClick={() => handleClick("CTA", "Click", "Manual")}
                >
                  Get User Manual
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-gradient-to-b from-blue-800 to-blue-800/60 bg-[length:100%_100%] bg-[bottom] bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="https://drive.google.com/uc?export=download&id=1dQYsKKjreeLR09LaiNmgnSGA_QnPYSgC" download="Ingates_catalog.pdf"
                  onClick={() => handleClick("CTA", "Click", "Catalog")}
                >
                  Get Catalog
                </a>
              </div>
            </div>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center pt-16">
            <p className="mb-3 text-green-200/65">
                © 2023 Ingates_ltd. All rights reserved.
                <span className="text-gray-700"> · </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
