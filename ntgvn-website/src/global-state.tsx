import GLOBAL_SETTINGS from './global-settings';

const GLOBAL_STATE = {
  production: GLOBAL_SETTINGS.production,
  version: GLOBAL_SETTINGS.version,
  domain: GLOBAL_SETTINGS.domain,
  restUrl: GLOBAL_SETTINGS.restUrl,
  restVersion: GLOBAL_SETTINGS.restVersion,
  startupURL: GLOBAL_SETTINGS.startupURL,
  ready: false,
} as const;

export default GLOBAL_STATE;
