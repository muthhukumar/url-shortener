export default function createDate(days: number) {
  const today = new Date().toISOString().slice(0, 10);
  return new Date(new Date(today).getTime() + days * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
}
