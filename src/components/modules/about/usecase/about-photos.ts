import btsOne from "@assets/about-carousel/bts-01.webp";
import btsTwo from "@assets/about-carousel/bts-02.webp";
import btsThree from "@assets/about-carousel/bts-03.webp";

import ytOne from "@assets/about-carousel/th-01.webp";
import ytTwo from "@assets/about-carousel/th-02.webp";
import ytThree from "@assets/about-carousel/th-03.webp";

import type { AboutPhoto } from "../types";

export const ABOUT_PHOTOS: AboutPhoto[] = [
  {
    src: btsOne,
    alt: "Portrait of Kinthil",
    title: "Moon and Light",
  },
  {
    src: btsTwo,
    alt: "Kinthil outdoor photography moment",
    title: "Home",
  },
  {
    src: btsThree,
    alt: "Kinthil hero portrait",
    title: "On the move",
  },
  {
    src: ytOne,
    alt: "Thailand Day 1",
    href: "https://youtu.be/TtLX67S4EJY?si=HBkfj8SBXiSZipAk",
    title: "Thailand Day 1",
  },
  {
    src: ytTwo,
    alt: "Thailand Day 2",
    href: "https://youtu.be/PqiRYUDBH8o?si=zmdvN3m_LjzC9cXV",
    title: "Thailand Day 2",
  },
  {
    src: ytThree,
    alt: "Thailand Day 3",
    href: "https://youtu.be/EFc3HLfISTg?si=Z-XzbZmRrk1IEtRi",
    title: "Thailand Day 3",
  },
];
