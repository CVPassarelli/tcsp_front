export type TRequest =
  {
  codigoUnidadeCompradora: string,
  tipoInstrumentoConvocatorioId: string,
  modalidadeId: string,
  modoDisputaId: string,
  numeroCompra: string,
  anoCompra: number,
  numeroProcesso: string,
  objetoCompra: string,
  informacaoComplementar: string,
  srp: boolean,
  orcamentoSigiloso: boolean,
  dataAberturaProposta: string,
  dataEncerramentoProposta: string,
  amparoLegalId: string,
  linkSistemaOrigem:string,
  itensCompra: TItems[]

}

export type TItems = {
  numeroItem: number,
  materialOuServico: string,
  tipoBeneficioId: string,
  incentivoProdutivoBasico: boolean,
  descricao: string,
  quantidade: number,
  unidadeMedida: string,
  valorUnitarioEstimado: number,
  valorTotal: number,
  criterioJulgamentoId: string
}
