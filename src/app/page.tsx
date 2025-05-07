import Hero from '@/components/hero/Hero';

const heroContent = {
  title: "Websites That Win You Business",
  description: "We design fast, modern websites that help you stand out, attract more customers, and turn visitors into loyal clients — all without the tech headaches.",
  primaryCTA: {
    text: "Get Started",
    href: "/contact"
  },
  secondaryCTA: {
    text: "Our Services",
    href: "/services"
  },
  backgroundImage: "/ggss_hero.webp"
};

export default function Home() {
  return (
    <main>
      <Hero {...heroContent} />
    </main>
  );
}
