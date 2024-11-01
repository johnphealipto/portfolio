"use client";

import CustomButton from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Textarea from "@/components/textarea";
import { FormEvent, useState } from "react";

const initialState = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  const handleChangeInput = (input: keyof typeof inputs, value: string) => {
    setInputs((prev) => ({ ...prev, [input]: value }));
  };

  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({
        ...inputs,
      }),
    })
      .then(() => {
        setModal(true);
        setInputs(initialState);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmitEmail} className="w-full max-w-md space-y-8">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Name"
          value={inputs.name}
          onChange={(e) => handleChangeInput("name", e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={inputs.email}
          onChange={(e) => handleChangeInput("email", e.target.value)}
          required
        />
        <Textarea
          placeholder="Message"
          value={inputs.message}
          onChange={(e) => handleChangeInput("message", e.target.value)}
          required
        />
      </div>
      <CustomButton
        type="submit"
        size="md"
        fullWidth
        isLoading={isLoading}
        text={isLoading ? "Sending..." : "Send"}
      />

      <Modal isOpen={modal}>
        <div className="space-y-8">
          <h2 className="text-2xl font-serif italic">Thank you</h2>
          <p className="bg-zinc-500/5 p-4 text-base">
            Your message has been received and I&apos;ll get back to you as soon
            as possible.
          </p>
          <CustomButton
            size="md"
            fullWidth
            text="Close"
            onClick={() => setModal(false)}
          />
        </div>
      </Modal>
    </form>
  );
};

export default ContactForm;
