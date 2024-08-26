import { useEffect, useState, useCallback } from "react";

const useGoogleTranslate = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isInitialized, setIsInitialized] = useState(false);

  const hideGoogleTranslateElements = useCallback(() => {
    document
      .querySelectorAll(
        "iframe, .goog-te-banner-frame, .goog-te-spinner-pos, .goog-te-ft-feedback, .goog-te-ft-feedback div, .goog-te-ft-feedback a, .goog-tooltip, #goog-gt-tt"
      )
      .forEach((el) => {
        el.style.display = "none";
        el.style.visibility = "hidden";
      });
    document.body.style.top = "0px";
  }, []);

  useEffect(() => {
    const scriptId = "google-translate-script";

    const initializeGoogleTranslate = () => {
      if (
        window.google &&
        window.google.translate &&
        typeof window.google.translate.TranslateElement === "function"
      ) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "en,ka" },
          "google_translate_element"
        );
        setIsInitialized(true);
        hideGoogleTranslateElements();
      } else {
        setTimeout(initializeGoogleTranslate, 500);
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = initializeGoogleTranslate;
      document.body.appendChild(script);
    } else {
      initializeGoogleTranslate();
    }

    const intervalId = setInterval(hideGoogleTranslateElements, 1000);

    return () => {
      if (document.getElementById(scriptId)) {
        document.body.removeChild(document.getElementById(scriptId));
      }
      clearInterval(intervalId);
    };
  }, [hideGoogleTranslateElements]);

  const toggleLanguage = useCallback(() => {
    const translateElement = document.querySelector(".goog-te-combo");
    if (translateElement) {
      const newLang = currentLanguage === "en" ? "ka" : "en";
      translateElement.value = newLang;
      translateElement.dispatchEvent(new Event("change"));
      setCurrentLanguage(newLang);

      if (newLang === "en") {
        // Force reset to English
        setTimeout(() => {
          translateElement.value = "en";
          translateElement.dispatchEvent(new Event("change"));
        }, 50);
      }
    } else {
      console.warn("Translate element not found. Retrying...");
      setTimeout(toggleLanguage, 500);
    }
  }, [currentLanguage]);

  return { toggleLanguage, currentLanguage, hideGoogleTranslateElements };
};

export default useGoogleTranslate;
