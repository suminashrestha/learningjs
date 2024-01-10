let user = prompt("enter your choice: ");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["s", "w", "g"][cpuI];
let match = (cpu, user) => {
  if (cpu == user) {
    return "match tied";
  } else if (
    (cpu == "s" && user == "w") ||
    (cpu == "w" && user == "g") ||
    (cpu == "g" && user == "s")
  ) {
    return "cpu wins";
  } else {
    return "user wins";
  }
};
let result = match(cpu, user);
document.write(`CPU: ${cpu} <br> USER: ${user}<br> RESULT: ${result}`);
