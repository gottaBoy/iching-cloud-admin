module.exports = {
  title: 'iching-cloud-admin',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',

  // Spring Boot Admin控制台地址
  springBootAdminUrl: 'http://localhost:8201',
  // Swagger UI 地址
  swaggerUrl: 'http://localhost:8201/system/swagger-ui.html',
  // zipkin 控制台地址
  zipkinUrl: 'http://localhost:8302',
  // kibana 控制台地址
  kibanaUrl: 'http://192.168.33.10:5601',
  // 获取令牌时，请求头信息(Basic Base64.encode(client_id:client_secret))
  authorizationValue: 'Basic aWNoaW5nOjEyMzQ1Ng==',
  // 社交登录后台地址
  socialLoginUrl: 'http://localhost:8101/auth/social/login'
}
