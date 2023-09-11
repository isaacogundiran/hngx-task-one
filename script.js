// JavaScript code to fetch and display current day of the week
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = new Date().getDay();
  document.getElementById(
    "currentDay"
  ).textContent = `Today is: ${daysOfWeek[currentDay]}`;

  // JavaScript code to fetch and display current UTC time
  fetch("https://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      const utcTime = new Date(data.utc_datetime).toUTCString();
      document.getElementById(
        "currentUTCTime"
      ).textContent = `Current UTC Time: ${utcTime}`;
    })
    .catch((error) => {
      console.error("Error fetching UTC time:", error);
    });




