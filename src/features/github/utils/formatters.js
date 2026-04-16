export function formatCompactNumber(value) {
  if (typeof value !== 'number') {
    return '0';
  }

  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatRelativeDate(value) {
  if (!value) {
    return 'Unknown';
  }

  const date = new Date(value);
  const diff = date.getTime() - Date.now();
  const absMinutes = Math.round(Math.abs(diff) / 60000);
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (absMinutes < 60) {
    return formatter.format(Math.round(diff / 60000), 'minute');
  }

  const absHours = Math.round(absMinutes / 60);
  if (absHours < 24) {
    return formatter.format(Math.round(diff / 3600000), 'hour');
  }

  const absDays = Math.round(absHours / 24);
  return formatter.format(Math.round(diff / 86400000), 'day');
}
