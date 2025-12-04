import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { ContactForm, ContactInfo } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact | Jesse Brookins',
  description: 'Get in touch with Jesse Brookins.',
};

export default function ContactPage() {
  return (
    <Container className="py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          I&apos;m currently looking for new opportunities. Feel free to reach out!
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-xl font-semibold">Send a Message</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="mb-6 text-xl font-semibold">Contact Information</h2>
          <ContactInfo />
        </div>
      </div>
    </Container>
  );
}
