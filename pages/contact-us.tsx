import ContactForm from '../components/contact/contact-form';
import ContactHeader from '../components/contact/contact-header';
import ContactInformation from '../components/contact/contact-information';

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
