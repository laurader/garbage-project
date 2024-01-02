const logLevels: any = {
  debug: 4,
  info: 3,
  warning: 2,
  error: 1,
};

const log: any = {};
const doNothingFunction = (...args: any) => undefined;
const configuredLogLevel = process.env.REACT_APP_LOG_LEVEL
  ? process.env.REACT_APP_LOG_LEVEL
  : 'debug';

const getLogMethod = (logLevel: string) => {
  if (process.env.NODE_ENV === 'production') {
    return doNothingFunction;
  }
  const canLog: boolean = logLevels[configuredLogLevel] >= logLevels[logLevel];
  return canLog ? console.log : doNothingFunction;
};

Object.keys(logLevels).map(
  logLevel => (log[logLevel] = getLogMethod(logLevel)),
);

export default log;
