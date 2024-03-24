export default function formatDeadline(unformattedDate: string) {
  const splittedDate = unformattedDate.split(".");
  const date = new Date(
    `${splittedDate[1]}.${splittedDate[0]}.${splittedDate[2]}`
  );
  const now = new Date();

  if (
    now.getUTCDate() === date.getUTCDate() + 1 &&
    date.getUTCMonth() === date.getUTCMonth() &&
    now.getUTCFullYear() === date.getUTCFullYear()
  ) {
    return "Today";
  }

  if (
    date.getUTCDate() + 1 - now.getUTCDate() === 1 &&
    date.getUTCMonth() === date.getUTCMonth() &&
    now.getUTCFullYear() === date.getUTCFullYear()
  ) {
    return "Tomorrow";
  }

  if (
    date.getUTCDate() + 1 - now.getUTCDate() === -1 &&
    date.getUTCMonth() === date.getUTCMonth() &&
    now.getUTCFullYear() === date.getUTCFullYear()
  ) {
    return "Yesterday";
  }

  return `${
    (date.getUTCDate() + 1).toString().length === 1
      ? "0" + (date.getUTCDate() + 1)
      : date.getUTCDate() + 1
  }.${
    date.getUTCMonth().toString().length === 1
      ? "0" + date.getUTCMonth()
      : date.getUTCMonth()
  }.${date.getUTCFullYear()}`;
}
