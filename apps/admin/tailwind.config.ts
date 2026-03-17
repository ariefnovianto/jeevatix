import sharedConfig from "@jeevatix/ui/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "../../packages/ui/src/**/*.{html,js,svelte,ts}"
  ],
  presets: [sharedConfig as Config],
};

export default config;
