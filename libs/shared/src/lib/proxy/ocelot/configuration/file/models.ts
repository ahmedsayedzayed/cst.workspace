
export interface AggregateRouteConfig {
  routeKey?: string;
  parameter?: string;
  jsonPath?: string;
}

export interface FileAggregateRoute {
  routeKeys: string[];
  routeKeysConfig: AggregateRouteConfig[];
  upstreamPathTemplate?: string;
  upstreamHost?: string;
  routeIsCaseSensitive: boolean;
  aggregator?: string;
  upstreamHttpMethod: string[];
  priority: number;
}

export interface FileAuthenticationOptions {
  authenticationProviderKey?: string;
  allowedScopes: string[];
}

export interface FileCacheOptions {
  ttlSeconds: number;
  region?: string;
}

export interface FileConfiguration {
  routes: FileRoute[];
  dynamicRoutes: FileDynamicRoute[];
  aggregates: FileAggregateRoute[];
  globalConfiguration: FileGlobalConfiguration;
}

export interface FileDynamicRoute {
  serviceName?: string;
  rateLimitRule: FileRateLimitRule;
  downstreamHttpVersion?: string;
}

export interface FileGlobalConfiguration {
  requestIdKey?: string;
  serviceDiscoveryProvider: FileServiceDiscoveryProvider;
  rateLimitOptions: FileRateLimitOptions;
  qoSOptions: FileQoSOptions;
  baseUrl?: string;
  loadBalancerOptions: FileLoadBalancerOptions;
  downstreamScheme?: string;
  httpHandlerOptions: FileHttpHandlerOptions;
  downstreamHttpVersion?: string;
}

export interface FileHostAndPort {
  host?: string;
  port: number;
}

export interface FileHttpHandlerOptions {
  allowAutoRedirect: boolean;
  useCookieContainer: boolean;
  useTracing: boolean;
  useProxy: boolean;
  maxConnectionsPerServer: number;
}

export interface FileLoadBalancerOptions {
  type?: string;
  key?: string;
  expiry: number;
}

export interface FileQoSOptions {
  exceptionsAllowedBeforeBreaking: number;
  durationOfBreak: number;
  timeoutValue: number;
}

export interface FileRateLimitOptions {
  clientIdHeader?: string;
  quotaExceededMessage?: string;
  rateLimitCounterPrefix?: string;
  disableRateLimitHeaders: boolean;
  httpStatusCode: number;
}

export interface FileRateLimitRule {
  clientWhitelist: string[];
  enableRateLimiting: boolean;
  period?: string;
  periodTimespan: number;
  limit: number;
}

export interface FileRoute {
  downstreamPathTemplate?: string;
  upstreamPathTemplate?: string;
  upstreamHttpMethod: string[];
  downstreamHttpMethod?: string;
  addHeadersToRequest: Record<string, string>;
  upstreamHeaderTransform: Record<string, string>;
  downstreamHeaderTransform: Record<string, string>;
  addClaimsToRequest: Record<string, string>;
  routeClaimsRequirement: Record<string, string>;
  addQueriesToRequest: Record<string, string>;
  changeDownstreamPathTemplate: Record<string, string>;
  requestIdKey?: string;
  fileCacheOptions: FileCacheOptions;
  routeIsCaseSensitive: boolean;
  serviceName?: string;
  serviceNamespace?: string;
  downstreamScheme?: string;
  qoSOptions: FileQoSOptions;
  loadBalancerOptions: FileLoadBalancerOptions;
  rateLimitOptions: FileRateLimitRule;
  authenticationOptions: FileAuthenticationOptions;
  httpHandlerOptions: FileHttpHandlerOptions;
  downstreamHostAndPorts: FileHostAndPort[];
  upstreamHost?: string;
  key?: string;
  delegatingHandlers: string[];
  priority: number;
  timeout: number;
  dangerousAcceptAnyServerCertificateValidator: boolean;
  securityOptions: FileSecurityOptions;
  downstreamHttpVersion?: string;
}

export interface FileSecurityOptions {
  ipAllowedList: string[];
  ipBlockedList: string[];
}

export interface FileServiceDiscoveryProvider {
  scheme?: string;
  host?: string;
  port: number;
  type?: string;
  token?: string;
  configurationKey?: string;
  pollingInterval: number;
  namespace?: string;
}
