import Analytics from "analytics";
import amplitudePlugin from "@analytics/amplitude";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || "";

const analytics = Analytics({
  app: "nathaliacampos",
  plugins: [
    amplitudePlugin({
      apiKey: AMPLITUDE_API_KEY,
      options: {
        includeReferrer: true,
        includeUtm: true,
        saveEvents: true,
      },
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  analytics.plugins.disable(["amplitude"]);
}

export default analytics;
