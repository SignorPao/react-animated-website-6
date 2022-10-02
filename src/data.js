// import images
import LogoImg from "../src/assets/header/logo.svg";
import HeroImg from "../src/assets/hero/image.svg";
import OverviewProductImg from "../src/assets/overview/product.svg";
import FacebookImg from "../src/assets/overview/facebook.svg";
import GoogleImg from "../src/assets/overview/google.svg";
import CocaColaImg from "../src/assets/overview/coca-cola.svg";
import LinkedInImg from "../src/assets/overview/linkedin.svg";
import SamsungImg from "../src/assets/overview/samsung.svg";
import Feature1Img from "../src/assets/features/feature1-img.svg";
import Feature2Img from "../src/assets/features/feature2-img.svg";
import Feature3Img from "../src/assets/features/feature3-img.svg";
import ArrowRightImg from "../src/assets/features/arrow-right.svg";
import CardIconImg1 from "../src/assets/product/icon1.svg";
import CardIconImg2 from "../src/assets/product/icon2.svg";
import CardIconImg3 from "../src/assets/product/icon3.svg";
import PricingIcon1 from "../src/assets/pricing/icon1.svg";
import PricingIcon2 from "../src/assets/pricing/icon2.svg";
import PricingIcon3 from "../src/assets/pricing/icon3.svg";
import AvatarImg1 from "../src/assets/testimonial/avatar1.png";
import AvatarImg2 from "../src/assets/testimonial/avatar2.png";
import AvatarImg3 from "../src/assets/testimonial/avatar3.png";
import AvatarImg4 from "../src/assets/testimonial/avatar4.png";
import AvatarImg5 from "../src/assets/testimonial/avatar5.png";
import AvatarImg6 from "../src/assets/testimonial/avatar6.png";
import AvatarImg7 from "../src/assets/testimonial/avatar7.png";
import AvatarImg8 from "../src/assets/testimonial/avatar8.png";
import AvatarImg9 from "../src/assets/testimonial/avatar9.png";
import AvatarImg10 from "../src/assets/testimonial/avatar10.png";
import CtaImg1 from "../src/assets/cta/image1.svg";
import CtaImg2 from "../src/assets/cta/image2.svg";
import FacebookIcon from "../src/assets/copyright/facebook.svg";
import TwitterIcon from "../src/assets/copyright/twitter.svg";
import LinkedinIcon from "../src/assets/copyright/linkedin.svg";

export const header = {
  logo: LogoImg,
  btnText: "Request a demo",
};

export const nav = [
  { name: "Home", href: "home" },
  { name: "Overview", href: "overview" },
  { name: "Features", href: "features" },
  { name: "Products", href: "products" },
  { name: "Plans", href: "plans" },
];

export const hero = {
  title: "Track your Expenses to Save Money",
  subtitle: "Helps you to organize your income and expenses",
  btnText: "Try free demo",
  compText: "— Web, iOS and Android",
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: "Alwalys online",
    title: "Real-time support with cloud",
    subtitle:
      "Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: "Free some cost",
    title: "Save cost for you and family",
    subtitle:
      "Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: "Use anytime",
    title: "Use anytime when you need",
    subtitle:
      "Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.",
    btnLink: "Learn more",
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: "The Product we work with.",
  subtitle:
    "Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.",
  cards: [
    {
      icon: CardIconImg1,
      title: "Cross platform",
      subtitle: "Elit esse cillum dolore eu fugiat nulla pariatur",
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: "Cloud server",
      subtitle: "Elit esse cillum dolore eu fugiat nulla pariatur",
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: "Pure Javascript",
      subtitle: "Elit esse cillum dolore eu fugiat nulla pariatur",
      delay: 600,
    },
  ],
};

export const pricing = {
  title: "Choose your flexible plan.",
  cards: [
    {
      icon: PricingIcon1,
      title: "Starter Plan",
      services: [
        { name: "Store unlimited data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$9.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: "Silver Plan",
      services: [
        { name: "Store unlimited data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$19.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: "Diamond Plan",
      services: [
        { name: "Store unlimited data" },
        { name: "Export to pdf, xls, csv" },
        { name: "Cloud server support" },
      ],
      price: "$29.99",
      userAmount: "up to 3 user + 1.99 per user",
      btnText: "Get this",
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: "We have millions of best wishers",
  clients: [
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg1,
      name: "Cameron Williamson",
      position: "CEO",
      borderColor: "#FF7235",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg2,
      name: "Shirley Hand",
      position: "CEO",
      borderColor: "#FFBE21",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg3,
      name: "Dr. Olivia Hansen",
      position: "CEO",
      borderColor: "#4756DF",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg4,
      name: "Aubrey Sanford",
      position: "CEO",
      borderColor: "#3EC1F3",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg5,
      name: "Terri Conroy",
      position: "CEO",
      borderColor: "#BB7259",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg6,
      name: "Peggy Sew",
      position: "CEO",
      borderColor: "#9CFF2E",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg7,
      name: "Suzie McDonald",
      position: "CEO",
      borderColor: "#FA7070",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg8,
      name: "Jessi Smith",
      position: "CEO",
      borderColor: "#8758FF",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg9,
      name: "Maggy Johnson",
      position: "CEO",
      borderColor: "#FFDE00",
    },
    {
      message:
        "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium",
      image: AvatarImg10,
      name: "Rebbeca Linares",
      position: "CEO",
      borderColor: "#1C6758",
    },
  ],
};

export const cta = {
  title: "20M+ downloaded from 32 different countries",
  subtitle: "Try demo for 7 days with full features.",
  btnText: "Try free demo",
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: "Home", href: "#!" },
    { name: "About us", href: "#!" },
    { name: "Careers", href: "#!" },
    { name: "Pricing", href: "#!" },
    { name: "Features", href: "#!" },
    { name: "Blog", href: "#!" },
  ],
  legal: [
    { name: "Terms of use", href: "#!" },
    { name: "Terms of conditions", href: "#!" },
    { name: "Privacy policy", href: "#!" },
    { name: "Cookie policy", href: "#!" },
  ],
  newsletter: {
    title: "Newsletter",
    subtitle: "Over 25000 people have subscribed",
  },
  form: {
    placeholder: "Enter your email",
    btnText: "Subscribe",
    smallText: "We don’t sell your email and spam",
  },
};

export const copyright = {
  link1: {
    name: "Privacy & Terms",
    href: "#!",
  },
  link2: {
    name: "Contact us",
    href: "#!",
  },
  copyText: "© All rights reserved.",
  social: [
    { icon: FacebookIcon, href: "#!" },
    { icon: TwitterIcon, href: "#!" },
    { icon: LinkedinIcon, href: "#!" },
  ],
};
