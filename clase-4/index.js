const { DateTime } = require("luxon");

const currentDate = DateTime.now();

// YYYY-MM-DD es el formato que utilizamos para .fromISO
const birthday = DateTime.fromISO("2002-04-05");

// Utilizamos "luxon" para determinar cuantos días, meses y años han pasado desde la fecha de nacimiento ingresada en el programa
if (currentDate.isValid && birthday.isValid) {
  const roughDays = currentDate.diff(birthday, "years").as("days");
  const roughMonths = currentDate.diff(birthday, "years").as("months");
  const roughYears = currentDate.diff(birthday, "years").as("years");
  const days = Math.floor(roughDays);
  const months = Math.floor(roughMonths);
  const years = Math.floor(roughYears);
  console.log(`You are ${days} days old.`);
  console.log(`You are ${months} months old.`);
  console.log(`You are ${years} years old.`);
}
