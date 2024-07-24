export const formatTime = () => {
  const date = new Date();

  const formatterTime = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return formatterTime.format(date);
};
