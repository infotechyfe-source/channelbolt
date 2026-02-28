import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // General
        marketplace: "Marketplace",
        sellAccount: "Sell Account",
        testimonials: "Testimonials",
        contact: "Contact",
        buyNow: "Buy Now",

        // Marketplace Page
        exploreAccounts: "Explore verified social media accounts ready for growth.",
        searchPlaceholder: "Search by niche or platform...",
        sortBy: "Sort by",
        sortPrice: "Price (Low to High)",
        sortFollowers: "Followers (Low to High)",
        sortEngagement: "Engagement",
        noAccountsFound: "No accounts found for this search.",
      },
    },
    hi: {
      translation: {
        // General
        marketplace: "मार्केटप्लेस",
        sellAccount: "अकाउंट बेचें",
        testimonials: "प्रशंसापत्र",
        contact: "संपर्क करें",
        buyNow: "अभी खरीदें",

        // Marketplace Page
        exploreAccounts: "प्रमाणित सोशल मीडिया अकाउंट्स देखें।",
        searchPlaceholder: "श्रेणी या प्लेटफ़ॉर्म से खोजें...",
        sortBy: "सॉर्ट करें",
        sortPrice: "कीमत (कम से अधिक)",
        sortFollowers: "फॉलोअर्स (कम से अधिक)",
        sortEngagement: "एंगेजमेंट",
        noAccountsFound: "इस खोज के लिए कोई अकाउंट नहीं मिला।",
      },
    },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;