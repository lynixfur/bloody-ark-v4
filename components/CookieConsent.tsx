"use client"

import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props: any) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-bgray-bg bg-opacity-70 z-50">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-bgray-bg border-t border-gray-600">
        <span className="text-dark text-base mr-16">
          This website uses cookies to improve user experience . By using our website you consent to all cookies in accordance with our Cookie Policy.
        </span>
        <button className="bg-red-600 font-bold py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;