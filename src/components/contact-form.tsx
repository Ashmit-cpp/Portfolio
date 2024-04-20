import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/app/actions/sendMail";

function ContactForm() {
  return (
    <div>
      <section>
        <div className="py-8 lg:py-12 px-4 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-pretty ">
            Get in Touch
          </h2>
          <div className="mb-8 lg:mb-10 font-light text-pretty sm:text-xl">
            {" "}
            <p>
              Ready to start your next project? Have a question or just want to
              say hello? I'd love to hear from you! Fill out the form below to
              send me a message, and I'll get back to you as soon as possible.
            </p>
            <p> Let's collaborate and turn your ideas into reality.</p>
          </div>

          <form action={sendMail} method="POST" className="space-y-8">
            <div>
              <Label className="block mb-2 text-sm font-medium ">
                Your email
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div>
              <Label className="block mb-2 text-sm font-medium ">Subject</Label>
              <Input
                type="text"
                name="subject"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label className="block mb-2 text-sm font-medium ">
                Your Message
              </Label>
              <Textarea
                name="message"
                placeholder="Leave a comment..."
              ></Textarea>
            </div>
            <Button type="submit">Send message</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
