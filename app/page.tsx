import Header from './components/Header';
import CoffeeNav from './components/CoffeeNav';
import CoffeeMenu from './components/CoffeeMenu';
import RoastingSection from './components/RoastingSection';
import ReviewsSection from './components/ReviewsSection';
import PerfectCupSection from './components/PerfectCupSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CoffeeNav />
      <CoffeeMenu />
      <RoastingSection />
      <ReviewsSection />
      <CoffeeNav />
      <PerfectCupSection />
      <Footer />
    </div>
  );
}
