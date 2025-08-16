import PageHero from '@/components/hero/PageHero';
import PortfolioCardContainer from '@/components/portfolio/PortfolioCardContainer';

export default function PortfolioPage() {
  return (
    <>
      <PageHero heading="Portfolio" />
      <main className="min-h-screen flex flex-col items-center pt-16">
        <h2 className="text-3xl  text-gray-900 text-center mb-8 max-w-4xl">
          Since 2022, we've been helping small businesses, startups, and corporate clients achieve their goals through innovative digital solutions.
        </h2>
        <div className='px-4'>
          <PortfolioCardContainer />
        </div>
      </main>
    </>
  );
}
