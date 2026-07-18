import adaro from "@assets/projects/adaro/adaro.webp";
import can from "@assets/projects/can/can.webp";
import julo from "@assets/projects/julo/julo.webp";
import mitra10 from "@assets/projects/mitra10/mitra10.webp";
import rps from "@assets/projects/rps/rps-2.webp";
import polpmaImage from "@assets/projects/polpma/polpma.webp";

import type { PortfolioItem } from "../types";

export const DEFAULT_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    image: adaro,
    category: "Adaro",
    date: "2020",
    title: "PT Transisi Teknologi Mandiri",
    href: "https://adaroindonesia.com/",
    description:
      "I designed and developed responsive user interfaces using Vue.js, CSS media queries and Bootstrap that work seamlessly across desktop, tablet and mobile devices. I also created dynamic data tables and optimised table layouts to provide a smooth, user-friendly experience on smaller screens.",
    featured: true,
  },
  {
    id: "2",
    category: "Mitra10",
    image: mitra10,
    date: "2021",
    title: "ICUBE by SIRCLO",
    href: "https://www.mitra10.com/",
    description:
      "I developed e-commerce platforms using Next.js, React, TypeScript, and Magento, building core features including product listings, product detail pages, shopping carts, checkout flows, and order management. I improved site performance and SEO with Server-Side Rendering (SSR), implemented GraphQL integrations for faster and more efficient data delivery, and partnered with marketing teams to evaluate Facebook Ads performance and support conversion growth.",
  },
  {
    id: "3",
    category: "JULO Webapp",
    image: julo,
    date: "2022",
    title: "PT. JULO Teknologi Finansial",
    href: "https://partner.julo.co.id/myim3",
    description:
      "I improved website performance by 23% through code splitting, lazy loading, and React Server-Side Rendering (SSR). I also enhanced user tracking to improve analytics accuracy and support product decisions. Alongside this, I built reusable frontend components, worked with TypeScript and Jest, and contributed to CI/CD automation and code reviews to maintain code quality and reliability.",
  },
  {
    id: "4",
    category: "ERP",
    image: rps,
    date: "2026",
    title: "PT. Repro Putra Sukses",
    description:
      "I developed and maintained an ERP web application for RPS, building features for user management, customer data, and operational workflows. I also created reporting dashboards that helped teams monitor sales, performance, and customer metrics more effectively.",
  },
  {
    id: "5",
    category: "ERP",
    image: can,
    date: "2026",
    title: "PT. Caesar Artawan Nusantara",
    description:
      "I developed and maintained an ERP web application for CAN, covering excise tax tracking, sales orders, supplier management, production, delivery, and reporting. I also built dashboards and operational tools that improved visibility into business performance and daily operations.",
  },
  {
    id: "6",
    category: "Digital Product",
    image: polpmaImage,
    date: "2026",
    title: "Polpma Digital Invitation",
    href: "https://polpma.com",
    description:
      "I built POLPMA, a digital invitation website that helps customers explore templates, choose a design, and order invitations through a simple process. I also developed supporting pages and features to make the experience clear, responsive, and easy to use across devices.",
  },
];
