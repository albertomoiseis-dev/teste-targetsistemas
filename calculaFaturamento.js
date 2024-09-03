const fs = require('fs');
const dados = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

function calcularEstatisticas(faturamento) {
  const valores = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const somaValores = valores.reduce((acc, valor) => acc + valor, 0);
  const mediaMensal = somaValores / valores.length;
  const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;
  return { menorValor, maiorValor, diasAcimaDaMedia };
}
const { menorValor, maiorValor, diasAcimaDaMedia } = calcularEstatisticas(dados);

console.log(`Menor valor de faturamento ocorrido em um dia do mês: ${menorValor}`);
console.log(`Maior valor de faturamento ocorrido em um dia do mês: ${maiorValor}`);
console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);