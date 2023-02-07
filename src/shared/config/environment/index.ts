export const Environment = {
  /**
   * Define a quantidade de linhas a ser carregada por padrão nas listagens
   */
  ROW_LIMIT: 8,
  /**
   * Url base de consulta dos dados dessa aplicação
   */
  URL_BASE: URL_BASE()
}

function URL_BASE() {
  return 'api'
}
