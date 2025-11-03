"use server";

import type { z } from "zod";
import { contactFormSchema } from "./schemas";

// This function is no longer used, but preserved in case it's needed later.
export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: "Invalid data provided." };
  }

  try {
    // In a real application, you would integrate with an email service or a CRM.
    // For this example, we'll just log the data to the console.
    console.log("New contact form submission:", parsedData.data);
    
    // Simulate a successful submission.
    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
