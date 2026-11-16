'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface PickspotWidgetConfig {
  slug: string;
  baseUrl: string;
  floatingButton?: boolean;
  buttonText?: string;
  primaryColor?: string;
}

declare global {
  interface Window {
    PickspotWidget?: {
      init: (config: PickspotWidgetConfig) => void;
    };
  }
}

const PICKSPOT_BASE_URL = (
  process.env.NEXT_PUBLIC_PICKSPOT_URL || 'http://localhost:3001'
).replace(/\/+$/, '');

/** Loads and initializes the Pickspot booking widget across the application. */
export function PickspotWidget() {
  const initialized = useRef(false);

  const initWidget = () => {
    if (initialized.current || !window.PickspotWidget) return;
    initialized.current = true;
    window.PickspotWidget.init({
      slug: 'labelle-medspa',
      baseUrl: PICKSPOT_BASE_URL,
      floatingButton: true,
      buttonText: '📅 Book Appointment',
      primaryColor: '#55002D',
    });
  };

  useEffect(() => {
    initWidget();
  }, []);

  return (
    <Script
      src={`${PICKSPOT_BASE_URL}/pickspot-widget.js`}
      strategy="afterInteractive"
      onLoad={initWidget}
    />
  );
}
