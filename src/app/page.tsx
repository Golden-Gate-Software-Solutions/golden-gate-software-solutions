import Hero from '@/components/hero/Hero';

const heroContent = {
  title: "Transforming Ideas into Digital Excellence",
  description: "We build innovative software solutions that drive business growth and deliver exceptional user experiences.",
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
