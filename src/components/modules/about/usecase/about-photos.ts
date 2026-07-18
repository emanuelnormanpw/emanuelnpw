import btsOne320 from "@assets/optimized-img/about-carousel/bts-01-320.webp";
import btsOne640 from "@assets/optimized-img/about-carousel/bts-01-640.webp";
import btsThree320 from "@assets/optimized-img/about-carousel/bts-03-320.webp";
import btsThree640 from "@assets/optimized-img/about-carousel/bts-03-640.webp";
import btsTwo320 from "@assets/optimized-img/about-carousel/bts-02-320.webp";
import btsTwo640 from "@assets/optimized-img/about-carousel/bts-02-640.webp";
import ytOne from "@assets/optimized-img/about-carousel/th-01-320.webp";
import ytThree from "@assets/optimized-img/about-carousel/th-03-320.webp";
import ytTwo from "@assets/optimized-img/about-carousel/th-02-320.webp";

import type { AboutPhoto } from "../types";

export const ABOUT_PHOTOS: AboutPhoto[] = [
  {
    src: btsOne320,
    srcSet: `${btsOne320} 320w, ${btsOne640} 640w`,
    alt: "The Mountain Awakens",
    title: "The Mountain Awakens",
  },
  {
    src: btsTwo320,
    srcSet: `${btsTwo320} 320w, ${btsTwo640} 640w`,
    alt: "A Night Above the Clouds",
    title: "A Night Above the Clouds",
  },
  {
    src: btsThree320,
    srcSet: `${btsThree320} 320w, ${btsThree640} 640w`,
    alt: "Where Time Slows Down",
    title: "Where Time Slows Down",
  },
  {
    src: ytOne,
    alt: "Thailand Day 1",
    href: "https://youtu.be/TtLX67S4EJY?si=HBkfj8SBXiSZipAk",
    title: "YT: Thailand Day 1",
  },
  {
    src: ytTwo,
    alt: "Thailand Day 2",
    href: "https://youtu.be/PqiRYUDBH8o?si=zmdvN3m_LjzC9cXV",
    title: "YT: Thailand Day 2",
  },
  {
    src: ytThree,
    alt: "Thailand Day 3",
    href: "https://youtu.be/EFc3HLfISTg?si=Z-XzbZmRrk1IEtRi",
    title: "YT: Thailand Day 3",
  },
];
