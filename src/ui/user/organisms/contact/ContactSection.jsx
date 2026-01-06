import ContactForm from "./ContactForm";
import MapContact from "./MapContact";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <ContactForm />
        <MapContact />
      </div>
    </section>
  );
};

export default ContactSection;
