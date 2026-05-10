export const GA_MEASUREMENT_ID = "G-22V1N9LWWZ";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (process.env.NODE_ENV === "development") {
    console.log("GA Event Tracking:", { action, category, label, value });
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string,
      config?: ControlObject | EventParams | CustomParams
    ) => void;
    dataLayer: unknown[];
  }
}

interface ControlObject {
  groups?: string | string[];
  send_to?: string | string[];
  event_callback?: () => void;
  event_timeout?: number;
}

interface EventParams {
  checkout_option?: string;
  checkout_step?: number;
  content_id?: string;
  content_type?: string;
  coupon?: string;
  currency?: string;
  description?: string;
  event_category?: string;
  event_label?: string;
  items?: Record<string, unknown>[];
  item_list_id?: string;
  item_list_name?: string;
  list_name?: string;
  method?: string;
  page_location?: string;
  page_path?: string;
  page_title?: string;
  payment_type?: string;
  promotion_id?: string;
  promotion_name?: string;
  promotion_slot?: string;
  search_term?: string;
  shipping?: number;
  shipping_tier?: string;
  tax?: number;
  transaction_id?: string;
  value?: number;
  [key: string]: unknown;
}

interface CustomParams {
  [key: string]: unknown;
}
