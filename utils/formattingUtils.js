export function formatCurrency(value, locale = "ru-Ru") {
  return value.toLocaleString(locale);
}
