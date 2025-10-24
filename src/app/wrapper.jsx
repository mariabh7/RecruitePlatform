"use client";

import React, { useState, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import Translate from "./(components)/translator/translate";
import { language } from "./(components)/ui/Language";

const Wrapper = ({ children }) => {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(null);

  // Load messages dynamically when locale changes
  useEffect(() => {
    import(`../../messages/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() => console.error(`Missing messages for locale: ${locale}`));
  }, [locale]);

  // Wait for messages to load
  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="bg-white relative min-h-screen">
        <header className="flex fixed z-50 top-0 w-full bg-zinc-50 border-b border-gray-200 justify-between items-center py-4 md:py-6 px-6 md:px-20">
          <div>
            <p className="font-bold capitalize text-xl md:text-2xl">
              recruitingPlatform
            </p>
          </div>
          <div className="flex justify-start gap-3">
            {language()}
            <Translate locale={locale} setLocale={setLocale} />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </NextIntlClientProvider>
  );
};

export default Wrapper;
