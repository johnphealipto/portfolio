"use client";

import CustomButton from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  const handleChangeInput = (input: keyof typeof inputs, value: string) => {
    setInputs((prev) => ({ ...prev, [input]: value }));
  };

  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({
        from: `${inputs.name} <${inputs.email}>`,
        message: inputs.message,
      }),
    })
      .then((res) => console.log("email-res", res))
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
    </form>
  );
};

export default ContactForm;
