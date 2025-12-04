import ContactLessOrdering from "../../components/ContactLessOrdering";
import Footer from "../../components/FooterAccordion";
import Header from "../../components/Header";
import QuickerTimes from "../../components/QuickerTimes";
import ResturentCard from "../../components/ResturentCardSection";
import TouchFree from "../../components/TouchFree";

export const Home = () => {
  return (
    <>
      <Header />
      <ContactLessOrdering />
      <QuickerTimes />
      <TouchFree />
      <ResturentCard />
      <Footer />
    </>
  );
};
