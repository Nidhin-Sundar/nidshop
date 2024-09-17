import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import HeaderSection from "./Header";
import MapSection from "./MapSection";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderSection />
      <MapSection />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
