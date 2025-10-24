"use client";
import React, { useEffect, useState } from "react";
import Translate from "./translate";
import enMessages from "../../../../messages/en.json";
import frMessages from "../../../../messages/fr.json";
import ptMessages from "../../../../messages/pt.json";
import { NextIntlClientProvider } from "next-intl";

const TranslateWrapper = () => {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "fr";
    setLocale(saved);
  }, []);

  const allMessages = { en: enMessages, fr: frMessages, pt: ptMessages };
  const messages = allMessages[locale] || frMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Translate locale={locale} setLocale={setLocale} />
    </NextIntlClientProvider>
  );
};

export default TranslateWrapper;
