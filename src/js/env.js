  "use strict";

  import pkg from '../../package.json';

  const isProd = PRODUCTION;
  const websiteRoot = isProd ? "https://mika-cn.github.io/maoxian-web-clipper" : "http://dev.pc:3000/maoxian-web-clipper";
  const projectRoot = "https://github.com/mika-cn/maoxian-web-clipper";
  const mxAssistantRoot = [websiteRoot, isProd ? 'assistant' : 'tmp/assistant'].join('/');

  const env = {
    logLevel: isProd ? "warn" : "debug",
    version: pkg.version,
    minNativeAppVersion: '0.2.2',
    websiteRoot: websiteRoot,
    projectRoot: projectRoot,
    mxAssistantRoot: mxAssistantRoot,
  };

  export default env;