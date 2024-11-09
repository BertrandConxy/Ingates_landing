// src/analytics.ts
import ReactGA from "react-ga4";

export const initGA = (): void => {
  ReactGA.initialize("G-YF7SPN83RD"); // Replace with your Measurement ID
};

export const logPageView = (): void => {
  ReactGA.send("pageview");
};

export const logEvent = (category: string, action: string, label?: string): void => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
