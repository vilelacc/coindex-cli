const DateFormatter = (UnixTimestamp) => {
  const myDate = new Date(UnixTimestamp * 1000);
  return myDate.toUTCString();
};

export default DateFormatter;
