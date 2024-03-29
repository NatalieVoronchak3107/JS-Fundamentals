function greetUser(username) {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else if (currentHour >= 18 && currentHour < 23) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  return `${greeting}, ${username}!`;
}

module.exports = { greetUser };
