/**
 * Date formatting utility for Global Pulse News articles.
 * Always formats dates into clean journalistic format: e.g. "20 Sep 2026"
 */
export function getTodayFormatted(): string {
  const d = new Date();
  const day = d.getDate();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${day} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatNewsDate(dateStr?: string): string {
  if (!dateStr) return getTodayFormatted();
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return getTodayFormatted();
    const day = d.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  } catch {
    return getTodayFormatted();
  }
}

