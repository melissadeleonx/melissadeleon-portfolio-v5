// components/CookieConsent.tsx
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentComponent: React.FC = () => (
    <CookieConsent
        location="bottom"
        buttonText="I accept"
        cookieName="myWebsiteCookieConsent"
        style={{ background: "#000" }}
        buttonStyle={{ color: "#000", fontSize: "13px" }}
        expires={365}
    >
        This website uses cookies to enhance the user experience. By continuing to use this site, you consent to the use of cookies.
    </CookieConsent>
);

export default CookieConsentComponent;
