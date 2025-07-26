import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { sendMail } from "@/app/actions/sendMail";

function ContactForm() {
  const handleClick = () => {
    window.open(
      "https://www.linkedin.com/in/ashmit-sharma-4287ab197/",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                {"Ready to start your next project? Have a question or just want to say hello? I'd love to hear from you!"}
              </p>
              <p>
                {"Fill out the form below to send me a message, and I'll get back to you as soon as possible."}
              </p>
            </div>

            {/* Contact Info or additional content can go here */}
            <div className="lg:pl-8">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">
                    Quick Response
                  </p>
                  <p>I typically respond within 24 hours</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">
                    Collaboration
                  </p>
                  <p>Open to freelance projects and full-time opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center text-foreground">
            <span>
              {"Let's collaborate and turn your ideas into reality. You can also connect with me on LinkedIn"}
            </span>
            <Button
              type="button"
              variant="link"
              size="icon"
              onClick={handleClick}
              className="-ml-1"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Form Section */}
        <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <form action={sendMail} method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Your email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Let me know how I can help you"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="px-8">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ContactForm;
