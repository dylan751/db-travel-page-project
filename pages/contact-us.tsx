import ContactForm from '../components/Contact/ContactForm';
import ContactHeader from '../components/Contact/ContactHeader';
import ContactInformation from '../components/Contact/ContactInformation';

function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <ContactInformation />
      <ContactForm />
    </div>
  );
}

export default ContactPage;
