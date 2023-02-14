import * as React from "react";
import { FormField, Button } from "..";
import { useSettings } from "../molecules/settingsContext";

function ContactForm() {
  const settings = useSettings();

  const contactEmail = settings?.params?.email;

  return (
    <form
      action={`https://formspree.io/f/${contactEmail}`}
      method="POST"
      id="contact-form"
    >
      <FormField id="name" placeholder="name" label="Nombre" required />
      <FormField
        id="email"
        placeholder="email"
        label="Correo electrónico"
        type="email"
        required
      />
      <FormField
        id="content"
        type="textarea"
        placeholder=""
        label="Contenido"
        required
      />
      <div className="pb-2 flex justify-end">
        <Button label="Submit" />
      </div>
    </form>
  );
}

export default ContactForm;
