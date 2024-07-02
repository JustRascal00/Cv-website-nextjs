import { useEffect, useState } from "react";

const useGoogleTranslate = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isInitialized, setIsInitialized] = useState(false);

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
        hideGoogleTranslateElements(); // Initial hide
      } else {
        setTimeout(initializeGoogleTranslate, 500); // Retry initialization after 500ms
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

    // Continuous checking and hiding of unwanted elements
    const intervalId = setInterval(() => {
      hideGoogleTranslateElements();
    }, 1000);

    // Clean up the script and added elements when the component unmounts
    return () => {
      if (document.getElementById(scriptId)) {
        document.body.removeChild(document.getElementById(scriptId));
      }
      // Stop the interval
      clearInterval(intervalId);
    };
  }, []);

  const translatePage = () => {
    const translateElement = document.querySelector(".goog-te-combo");

    if (translateElement) {
      const event = new Event("change");
      if (currentLanguage === "en") {
        translateElement.value = "ka"; // Change to Georgian
        setCurrentLanguage("ka");
      } else {
        translateElement.value = "en"; // Change to English
        setCurrentLanguage("en");
      }
      translateElement.dispatchEvent(event);
    } else {
      console.warn("Translate element not found. Retrying...");
      setTimeout(translatePage, 500); // Retry after 500ms if the element is not found
    }
  };

  const hideGoogleTranslateElements = () => {
    // Hide any visible Google Translate elements without removing them
    document
      .querySelectorAll(
        "iframe, .goog-te-banner-frame, .goog-te-spinner-pos, .goog-te-ft-feedback, .goog-te-ft-feedback div, .goog-te-ft-feedback a, .goog-tooltip, #goog-gt-tt"
      )
      .forEach((el) => {
        el.style.display = "none";
        el.style.visibility = "hidden";
      });

    // Reset the body top margin
    document.body.style.top = "0px";
  };

  return { translatePage, currentLanguage, hideGoogleTranslateElements };
};

export default useGoogleTranslate;
