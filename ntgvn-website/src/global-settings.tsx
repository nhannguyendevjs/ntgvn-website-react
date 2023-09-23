const GLOBAL_SETTINGS = {
    production: import.meta.env.VITE_APP_PRODUCTION,
    domain: import.meta.env.VITE_APP_DOMAIN,
    version: import.meta.env.VITE_APP_VERSION,
    restUrl: import.meta.env.VITE_APP_REST_URL,
    restVersion: import.meta.env.VITE_APP_REST_VERSION,
    startupURL: import.meta.env.VITE_APP_STARTUP_URL,
} as const;

export default GLOBAL_SETTINGS;
