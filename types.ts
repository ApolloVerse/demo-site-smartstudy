
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isPremium: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}