import ContactLessOrderingSectionUnderHeader from "../../components/ContactLessOrderingSectionUnderHeader";
import Footer from "../../components/FooterAccordion";
import Header from "../../components/Header";
import QuickerTimes from "../../components/QuickerTimes";
import ResturentCard from "../../components/ResturentCardSection";
import TouchFree from "../../components/TouchFree";

export const ContactlessOrdering = () => {
  return (
    <>
      <Header />
      <ContactLessOrderingSectionUnderHeader />
      <QuickerTimes />
      <TouchFree />
      <ResturentCard />
      <Footer />
    </>
  );
};
