export const calculateRisk = (windowData) => {
  if (!windowData || windowData.length === 0) return 0;

  const rainfallSum = windowData.reduce((sum, item) => sum + item.rainfall, 0);
  const avgRainfall = rainfallSum / windowData.length;

  const maxWindSpeed = Math.max(...windowData.map(item => item.windSpeed));

  const firstTemp = windowData[0].temperature;
  const lastTemp = windowData[windowData.length - 1].temperature;
  const tempChange = Math.abs(lastTemp - firstTemp);

  const riskScore = (0.5 * avgRainfall) + (0.3 * maxWindSpeed) + (0.2 * tempChange);
  return parseFloat(riskScore.toFixed(2));
};

export const getRiskLevel = (score) => {
  if (score < 30) return { level: 'Low', color: 'var(--color-low)', className: 'risk-low' };
  if (score < 60) return { level: 'Medium', color: 'var(--color-medium)', className: 'risk-medium' };
  return { level: 'High', color: 'var(--color-high)', className: 'risk-high' };
};
