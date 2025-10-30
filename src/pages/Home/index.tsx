import ContactLessOrdering from "../../components/ContactLessOrdering";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import QuickerTimes from "../../components/QuickerTimes";
import ResturentCard from "../../components/ResturentCard";
import TableOrder from "../../components/TableOrder";
import TouchFree from "../../components/TouchFree";

export const Home = () => {
  return (
    <div>
      <Header />
      <ContactLessOrdering />
      <QuickerTimes />
      <TouchFree />
      <ResturentCard />
      <Footer />
    </div>
  );
};
