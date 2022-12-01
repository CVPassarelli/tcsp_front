export function dateToInput(date: string) {
  return date.substring(0, 10);
}

export function inputToIsoDate(date: string) {
  const dateContent = new Date(date);
  return dateContent.toISOString();
}
