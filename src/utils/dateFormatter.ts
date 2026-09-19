/**
 * Date formatting utility for Global Pulse News articles.
 * Formats dates into clean journalistic format: e.g. "19 Sep 2026"
 */
export function formatNewsDate(dateStr?: string): string {
  if (!dateStr) return '19 Sep 2026';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '19 Sep 2026';
    const day = d.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  } catch {
    return '19 Sep 2026';
  }
}
