"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="name"
            className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase"
          >
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="h-12 rounded-none border-border/60 bg-transparent px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase"
          >
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-12 rounded-none border-border/60 bg-transparent px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="project-type"
            className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase"
          >
            Project Type
          </Label>
          <Input
            id="project-type"
            name="project-type"
            placeholder="Residential, Commercial, Hospitality..."
            className="h-12 rounded-none border-border/60 bg-transparent px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="message"
            className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase"
          >
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us about your project, timeline, and location..."
            className="min-h-40 rounded-none border-border/60 bg-transparent px-4 py-3"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="h-12 rounded-none text-[0.65rem] tracking-[0.2em] uppercase"
      >
        Send Inquiry
      </Button>
    </form>
  );
}
