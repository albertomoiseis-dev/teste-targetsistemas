const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamento).reduce(
  (acc, valor) => acc + valor,
  0
);

const percentuais = {};

for (let estado in faturamento) {
  percentuais[estado] = (faturamento[estado] / totalFaturamento) * 100;
}

for (let estado in percentuais) {
  console.log(
    `Estado: ${estado}, Percentual de Representação: ${percentuais[
      estado
    ].toFixed(2)}%`
  );
}
