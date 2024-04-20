import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { sendMail } from "../actions/sendMail";

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="py-8 lg:py-16 px-4 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action={sendMail} method="POST" className="space-y-8">
            <div>
              <Label className="block mb-2 text-sm font-medium ">
                Your email
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <Label className="block mb-2 text-sm font-medium ">Subject</Label>
              <Input
                type="text"
                name="subject"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label>Your message</Label>
              <Textarea
                name="message"
                placeholder="Leave a comment..."
              ></Textarea>
            </div>
            <Button type="submit">Send message</Button>
          </form>
        </div>
      </section>
    </>
  );
}
