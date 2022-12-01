export const instrumentoConvocatorio = [
  { label: 'Edital', value: '1' },
  { label: 'Aviso de contratação direta', value: 2 },
  { label: ' Ato que autoriza a Contratação Direta', value: 3 },
];
export const modalidadeCompra = [
  { label: 'Diálogo Competitivo', value: 2 },
  { label: 'Concurso', value: 3 },
  { label: 'Concorrência - Eletrônica', value: 4 },
  { label: 'Concorrência - Presencial', value: 5 },
  { label: 'Pregão - Eletrônico', value: 6 },
  { label: 'Pregão - Presencial', value: 7 },
  { label: 'Dispensa de Licitação', value: 8 },
  { label: 'Inexigibilidade', value: 9 },
  { label: 'Manifestação de Interesse', value: 10 },
  { label: 'Pré-qualificação', value: 11 },
  { label: 'Credenciamento', value: 12 },
];
export const modoDeDisputa = [
  { label: 'Aberto', value: 1 },
  { label: 'Fechado', value: 2 },
  { label: 'Aberto-Fechado', value: 3 },
  { label: 'Dispensa Com Disputa', value: 4 },
  { label: 'Não se aplica', value: 5 },
];
export const criterioJulgamento = [
  { label: 'Menor preço', value: 1 },
  { label: 'Maior desconto', value: 2 },
  { label: 'Melhor técnica ou conteúdo artístico', value: 3 },
  { label: 'Técnica e preço', value: 4 },
  { label: 'Maior lance', value: 5 },
  { label: 'Maior retorno econômico', value: 6 },
  { label: 'Não se aplica', value: 7 },
];
export const situacaoCompra = [
  { label: 'Divulgada no PNCP:', value: 1 },
  { label: 'Revogada', value: 2 },
  { label: 'Anulada', value: 3 },
  { label: 'Suspensa', value: 4 },
];
export const situacaoItemCompra = [
  { label: 'Em Andamento', value: 1 },
  { label: 'Homologado', value: 2 },
  { label: 'Anulado/Revogado/Cancelado', value: 3 },
  { label: 'Deserto', value: 4 },
  { label: 'Fracassado', value: 5 },
];
export const tipoBeneficio = [
  { label: 'Participação exclusiva para ME/EPP', value: 1 },
  { label: 'Subcontratação para ME/EPP', value: 2 },
  { label: 'Cota reservada para ME/EPP', value: 3 },
  { label: 'Sem benefício', value: 4 },
  { label: 'Não se aplica', value: 5 },
];
export const situacaoResultadoItem = [
  { label: 'Informado', value: 1 },
  { label: 'Cancelado', value: 2 },
];
export const tipoContrato = [
  { label: 'Contrato (termo inicial)', value: 1 },
  { label: 'Comodato', value: 2 },
  { label: 'Arrendamento', value: 3 },
  { label: 'Concessão', value: 4 },
  { label: 'Termo de Adesão', value: 5 },
  { label: 'Convênio', value: 6 },
  { label: 'Empenho', value: 7 },
  { label: 'Outros', value: 8 },
  { label: 'Termo de Execução Descentralizada (TED)', value: 9 },
  { label: 'Acordo de Cooperação Técnica (ACT):', value: 10 },
  { label: 'Termo de Compromisso', value: 11 },
  { label: 'Carta Contrato', value: 12 },
];
export const termoContrato = [
  { label: 'Termo de Rescisão', value: 1 },
  { label: 'Termo Aditivo', value: 2 },
  { label: 'Termo de Apostilamento:', value: 3 },
];
export const categoriaProcesso = [
  { label: 'Cessão', value: 1 },
  { label: 'Compras', value: 2 },
  { label: 'Informática (TIC)', value: 3 },
  { label: 'Internacional', value: 4 },
  { label: 'Locação Imóveis', value: 5 },
  { label: 'Mão de Obra', value: 6 },
  { label: 'Obras', value: 7 },
  { label: 'Serviços', value: 8 },
  { label: 'Serviços de Engenharia', value: 9 },
  { label: 'Serviços de Saúde', value: 10 },
];
export const tipoDocumento = [
  { label: 'Aviso de Contratação Direta', value: 1 },
  { label: 'Edital', value: 2 },
  { label: 'Minuta do Contrato', value: 3 },
  { label: 'Termo de Referência', value: 4 },
  { label: 'Anteprojeto', value: 5 },
  { label: 'Projeto Básico', value: 6 },
  { label: 'Estudo Técnico Preliminar', value: 7 },
  { label: 'Projeto Executivo', value: 8 },
  { label: 'Mapa de Riscos', value: 9 },
  { label: 'DOD', value: 10 },
  { label: 'Ata de Registro de Preço', value: 11 },
  { label: 'Contrato', value: 12 },
  { label: 'Termo de Rescisão', value: 13 },
  { label: 'Termo Aditivo', value: 14 },
  { label: 'Termo de Apostilamento', value: 15 },
  { label: 'Nota de Empenho', value: 17 },
  { label: 'Outros', value: 16 },
];
export const naturezaJuridica = [
  { value: '0000', label: 'Natureza Jurídica não informada' },
  { value: '1015', label: 'Órgão Público do Poder Executivo Federal' },
  {
    value: '1023',
    label: 'Órgão Público do Poder Executivo Estadual ou do Distrito Federal',
  },
  { value: '1031', label: 'Órgão Público do Poder Executivo Municipal' },
  { value: '1040', label: 'Órgão Público do Poder Legislativo Federal' },
  {
    value: '1058',
    label: 'Órgão Público do Poder Legislativo Estadual ou do Distrito Federal',
  },
  { value: '1066', label: 'Órgão Público do Poder Legislativo Municipal' },
  { value: '1074', label: 'Órgão Público do Poder Judiciário Federal' },
  { value: '1082', label: 'Órgão Público do Poder Judiciário Estadual' },
  { value: '1104', label: 'Autarquia Federal' },
  { value: '1112', label: 'Autarquia Estadual ou do Distrito Federal' },
  { value: '1120', label: 'Autarquia Municipal' },
  { value: '1139', label: 'Fundação Pública de Direito Público Federal' },
  {
    value: '1147',
    label:
      'Fundação Pública de Direito Público Estadual ou do Distrito Federal',
  },
  { value: '1155', label: 'Fundação Pública de Direito Público Municipal' },
  { value: '1163', label: 'Órgão Público Autônomo Federal' },
  {
    value: '1171',
    label: 'Órgão Público Autônomo Estadual ou do Distrito Federal',
  },
  { value: '1180', label: 'Órgão Público Autônomo Municipal' },
  { value: '1198', label: 'Comissão Polinacional' },
  {
    value: '1210',
    label: 'Consórcio Público de Direito Público (Associação Pública)',
  },
  { value: '1228', label: 'Consórcio Público de Direito Privado' },
  { value: '1236', label: 'Estado ou Distrito Federal' },
  { value: '1244', label: 'Município' },
  { value: '1252', label: 'Fundação Pública de Direito Privado Federal' },
  {
    value: '1260',
    label:
      'Fundação Pública de Direito Privado Estadual ou do Distrito Federal',
  },
  { value: '1279', label: 'Fundação Pública de Direito Privado Municipal' },
  { value: '1287', label: 'Fundo Público da Administração Indireta Federal' },
  {
    value: '1295',
    label:
      'Fundo Público da Administração Indireta Estadual ou do Distrito Federal',
  },
  { value: '1309', label: 'Fundo Público da Administração Indireta Municipal' },
  { value: '1317', label: 'Fundo Público da Administração Direta Federal' },
  {
    value: '1325',
    label:
      'Fundo Público da Administração Direta Estadual ou do Distrito Federal',
  },
  { value: '1333', label: 'Fundo Público da Administração Direta Municipal' },
  { value: '1341', label: 'União' },
  { value: '2011', label: 'Empresa Pública' },
  { value: '2038', label: 'Sociedade de Economia Mista' },
  { value: '2046', label: 'Sociedade Anônima Aberta' },
  { value: '2054', label: 'Sociedade Anônima Fechada' },
  { value: '2062', label: 'Sociedade Empresária Limitada' },
  { value: '2070', label: 'Sociedade Empresária em Nome Coletivo' },
  { value: '2089', label: 'Sociedade Empresária em Comandita Simples' },
  { value: '2097', label: 'Sociedade Empresária em Comandita por Ações' },
  { value: '2100', label: 'Sociedade Mercantil de Capital e Indústria' },
  { value: '2127', label: 'Sociedade em Conta de Participação' },
  { value: '2135', label: 'Empresário (Individual)' },
  { value: '2143', label: 'Cooperativa' },
  { value: '2151', label: 'Consórcio de Sociedades' },
  { value: '2160', label: 'Grupo de Sociedades' },
  {
    value: '2178',
    label: 'Estabelecimento, no Brasil, de Sociedade Estrangeira',
  },
  {
    value: '2194',
    label:
      'Estabelecimento, no Brasil, de Empresa Binacional Argentino-Brasileira',
  },
  { value: '2216', label: 'Empresa Domiciliada no Exterior' },
  { value: '2224', label: 'Clube/Fundo de Investimento' },
  { value: '2232', label: 'Sociedade Simples Pura' },
  { value: '2240', label: 'Sociedade Simples Limitada' },
  { value: '2259', label: 'Sociedade Simples em Nome Coletivo' },
  { value: '2267', label: 'Sociedade Simples em Comandita Simples' },
  { value: '2275', label: 'Empresa Binacional' },
  { value: '2283', label: 'Consórcio de Empregadores' },
  { value: '2291', label: 'Consórcio Simples' },
  {
    value: '2305',
    label:
      'Empresa Individual de Responsabilidade Limitada (de Natureza Empresária)',
  },
  {
    value: '2313',
    label:
      'Empresa Individual de Responsabilidade Limitada (de Natureza Simples)',
  },
  { value: '2321', label: 'Sociedade Unipessoal de Advocacia' },
  { value: '2330', label: 'Cooperativas de Consumo' },
  { value: '2348', label: 'Empresa Simples de Inovação - Inova Simples' },
  { value: '2356', label: 'Investidor Não Residente' },
  { value: '3034', label: 'Serviço Notarial e Registral (Cartório)' },
  { value: '3069', label: 'Fundação Privada' },
  { value: '3077', label: 'Serviço Social Autônomo' },
  { value: '3085', label: 'Condomínio Edilício' },
  { value: '3107', label: 'Comissão de Conciliação Prévia' },
  { value: '3115', label: 'Entidade de Mediação e Arbitragem' },
  { value: '3131', label: 'Entidade Sindical' },
  {
    value: '3204',
    label: 'Estabelecimento, no Brasil, de Fundação ou Associação Estrangeiras',
  },
  { value: '3212', label: 'Fundação ou Associação Domiciliada no Exterior' },
  { value: '3220', label: 'Organização Religiosa' },
  { value: '3239', label: 'Comunidade Indígena' },
  { value: '3247', label: 'Fundo Privado' },
  { value: '3255', label: 'Órgão de Direção Nacional de Partido Político' },
  { value: '3263', label: 'Órgão de Direção Regional de Partido Político' },
  { value: '3271', label: 'Órgão de Direção Local de Partido Político' },
  { value: '3280', label: 'Comitê Financeiro de Partido Político' },
  { value: '3298', label: 'Frente Plebiscitária ou Referendária' },
  { value: '3301', label: 'Organização Social (OS)' },
  {
    value: '3328',
    label: 'Plano de Benefícios de Previdência Complementar Fechada',
  },
  { value: '3999', label: 'Associação Privada' },
  { value: '4014', label: 'Empresa Individual Imobiliária' },
  { value: '4090', label: 'Candidato a Cargo Político Eletivo' },
  { value: '4120', label: 'Produtor Rural (Pessoa Física)' },
  { value: '5010', label: 'Organização Internacional' },
  { value: '5029', label: 'Representação Diplomática Estrangeira' },
  { value: '5037', label: 'Outras Instituições Extraterritoriais' },
  { value: '8885', label: 'Natureza Jurídica não informada' },
];
export const porteEmpresa = [
  { label: 'ME', value: 1 },
  { label: 'EPP', value: 2 },
  { label: 'Demais', value: 3 },
];
export const amparoLegal = [
  { value: 1, label: 'Lei 14.133/2021, Art. 28, I' },
  { value: 2, label: 'Lei 14.133/2021, Art. 28, II' },
  { value: 3, label: 'Lei 14.133/2021, Art. 28, III' },
  { value: 4, label: 'Lei 14.133/2021, Art. 28, IV' },
  { value: 5, label: 'Lei 14.133/2021, Art. 28, V' },
  { value: 6, label: 'Lei 14.133/2021, Art. 74, I' },
  { value: 7, label: 'Lei 14.133/2021, Art. 74, II' },
  { value: 8, label: 'Lei 14.133/2021, Art. 74, III, a' },
  { value: 9, label: 'Lei 14.133/2021, Art. 74, III, b' },
  { value: 10, label: 'Lei 14.133/2021, Art. 74, III, c' },
  { value: 11, label: 'Lei 14.133/2021, Art. 74, III, d' },
  { value: 12, label: 'Lei 14.133/2021, Art. 74, III, e' },
  { value: 13, label: 'Lei 14.133/2021, Art. 74, III, f' },
  { value: 14, label: 'Lei 14.133/2021, Art. 74, III, g' },
  { value: 15, label: 'Lei 14.133/2021, Art. 74, III, h' },
  { value: 16, label: 'Lei 14.133/2021, Art. 74, IV' },
  { value: 17, label: 'Lei 14.133/2021, Art. 74, V' },
  { value: 18, label: 'Lei 14.133/2021, Art. 75, I' },
  { value: 19, label: 'Lei 14.133/2021, Art. 75, II' },
  { value: 20, label: 'Lei 14.133/2021, Art. 75, III, a' },
  { value: 21, label: 'Lei 14.133/2021, Art. 75, III, b' },
  { value: 22, label: 'Lei 14.133/2021, Art. 75, IV, a' },
  { value: 23, label: 'Lei 14.133/2021, Art. 75, IV, b' },
  { value: 24, label: 'Lei 14.133/2021, Art. 75, IV, c' },
  { value: 25, label: 'Lei 14.133/2021, Art. 75, IV, d' },
  { value: 26, label: 'Lei 14.133/2021, Art. 75, IV, e' },
  { value: 27, label: 'Lei 14.133/2021, Art. 75, IV, f' },
  { value: 28, label: 'Lei 14.133/2021, Art. 75, IV, g' },
  { value: 29, label: 'Lei 14.133/2021, Art. 75, IV, h' },
  { value: 30, label: 'Lei 14.133/2021, Art. 75, IV, i' },
  { value: 31, label: 'Lei 14.133/2021, Art. 75, IV, j' },
  { value: 32, label: 'Lei 14.133/2021, Art. 75, IV, k' },
  { value: 33, label: 'Lei 14.133/2021, Art. 75, IV, l' },
  { value: 34, label: 'Lei 14.133/2021, Art. 75, IV, m' },
  { value: 35, label: 'Lei 14.133/2021, Art. 75, V' },
  { value: 36, label: 'Lei 14.133/2021, Art. 75, VI' },
  { value: 37, label: 'Lei 14.133/2021, Art. 75, VII' },
  { value: 38, label: 'Lei 14.133/2021, Art. 75, VIII' },
  { value: 39, label: 'Lei 14.133/2021, Art. 75, IX' },
  { value: 40, label: 'Lei 14.133/2021, Art. 75, X' },
  { value: 41, label: 'Lei 14.133/2021, Art. 75, XI' },
  { value: 42, label: 'Lei 14.133/2021, Art. 75, XII' },
  { value: 43, label: 'Lei 14.133/2021, Art. 75, XIII' },
  { value: 44, label: 'Lei 14.133/2021, Art. 75, XIV' },
  { value: 45, label: 'Lei 14.133/2021, Art. 75, XV' },
  { value: 46, label: 'Lei 14.133/2021, Art. 75, XVI' },
  { value: 47, label: 'Lei 14.133/2021, Art. 78, I' },
  { value: 48, label: 'Lei 14.133/2021, Art. 78, II' },
  { value: 49, label: 'Lei 14.133/2021, Art. 78, III' },
  { value: 50, label: 'Lei 14.133/2021, Art. 74, caput' },
  { value: 51, label: 'Lei 14.284/2021, Art. 29, caput' },
  { value: 52, label: 'Lei 14.284/2021, Art. 24 § 1º' },
  { value: 53, label: 'Lei 14.284/2021, Art. 25 § 1º' },
  { value: 54, label: 'Lei 14.284/2021, Art. 34' },
  { value: 55, label: 'Lei 9.636/1998, Art. 11-C, I' },
  { value: 56, label: 'Lei 9.636/1998, Art. 11-C, II' },
  { value: 57, label: 'Lei 9.636/1998, Art. 24-C, I' },
  { value: 58, label: 'Lei 9.636/1998, Art. 24-C, II' },
  { value: 59, label: 'Lei 9.636/1998, Art. 24-C, III' },
];
export const planoContratacao = [
  { label: 'Material', value: 1 },
  { label: 'Serviço', value: 2 },
  { label: 'Obras', value: 3 },
  { label: 'Serviços de Engenharia', value: 4 },
  { label: 'Soluções de TIC', value: 5 },
  { label: 'Locação de Imóveis', value: 6 },
  { label: 'Alienação/Concessão/Permissão', value: 7 },
  { label: 'Obras e Serviços de Engenharia', value: 8 },
];

export const convocatorioDisputa = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: 5,
    value: 5,
  },
];

export const convocatorioAmparo = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 5,
    value: 5,
  },
  {
    label: 6,
    value: 6,
  },
  {
    label: 7,
    value: 7,
  },
  {
    label: 8,
    value: 8,
  },
  {
    label: 9,
    value: 9,
  },
  {
    label: 10,
    value: 10,
  },
  {
    label: 11,
    value: 11,
  },
  {
    label: 12,
    value: 12,
  },
  {
    label: 13,
    value: 13,
  },
  {
    label: 14,
    value: 14,
  },
  {
    label: 15,
    value: 15,
  },
  {
    label: 16,
    value: 16,
  },
  {
    label: 17,
    value: 17,
  },
  {
    label: 18,
    value: 18,
  },
  {
    label: 19,
    value: 19,
  },
  {
    label: 20,
    value: 20,
  },
  {
    label: 21,
    value: 21,
  },
  {
    label: 22,
    value: 22,
  },
  {
    label: 23,
    value: 23,
  },
  {
    label: 24,
    value: 24,
  },
  {
    label: 25,
    value: 25,
  },
  {
    label: 26,
    value: 26,
  },
  {
    label: 27,
    value: 27,
  },
  {
    label: 28,
    value: 28,
  },
  {
    label: 29,
    value: 29,
  },
  {
    label: 30,
    value: 30,
  },
  {
    label: 31,
    value: 31,
  },
  {
    label: 32,
    value: 32,
  },
  {
    label: 33,
    value: 33,
  },
  {
    label: 34,
    value: 34,
  },
  {
    label: 35,
    value: 35,
  },
  {
    label: 36,
    value: 36,
  },
  {
    label: 37,
    value: 37,
  },
  {
    label: 38,
    value: 38,
  },
  {
    label: 39,
    value: 39,
  },
  {
    label: 40,
    value: 40,
  },
  {
    label: 41,
    value: 41,
  },
  {
    label: 42,
    value: 42,
  },
  {
    label: 43,
    value: 43,
  },
  {
    label: 44,
    value: 44,
  },
  {
    label: 45,
    value: 45,
  },
  {
    label: 46,
    value: 46,
  },
  {
    label: 47,
    value: 47,
  },
  {
    label: 48,
    value: 48,
  },
  {
    label: 49,
    value: 49,
  },
  {
    label: 50,
    value: 50,
  },
  {
    label: 51,
    value: 51,
  },
  {
    label: 52,
    value: 52,
  },
  {
    label: 53,
    value: 53,
  },
  {
    label: 54,
    value: 54,
  },
  {
    label: 55,
    value: 55,
  },
  {
    label: 56,
    value: 56,
  },
  {
    label: 57,
    value: 57,
  },
  {
    label: 58,
    value: 58,
  },
  {
    label: 59,
    value: 59,
  },
];

export const materialServico = [
  {
    label: 'Material',
    value: 'M',
  },
  {
    label: 'Serviço',
    value: 'S',
  },
];
