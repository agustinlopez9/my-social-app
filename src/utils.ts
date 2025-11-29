const getRelativeTimeFromDate = (dateString: string): string => {
  const date = new Date(dateString);
  const currentTime = new Date();
  const diffInSeconds = Math.floor((currentTime.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const interval in intervals) {
    const intervalSeconds = intervals[interval];
    const count = Math.floor(diffInSeconds / intervalSeconds);
    if (count >= 1) {
      return `${count} ${interval}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "Just now";
};

export { getRelativeTimeFromDate };