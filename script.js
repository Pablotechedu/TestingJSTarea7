function calculateHumanAge() {
  let turtleAge = document.getElementById("turtle-age").value;
  let humanAge;

  if (turtleAge === "" || turtleAge < 0) {
    document.getElementById("result").textContent =
      "Por favor, ingresa una edad válida.";
    return;
  }

  turtleAge = Number(turtleAge);

  if (turtleAge <= 5) {
    humanAge = turtleAge * 10;
  } else {
    humanAge = 5 * 10 + (turtleAge - 5) * 5;
  }

  document.getElementById(
    "result"
  ).textContent = `La edad en años humanos es aproximadamente: ${humanAge} años.`;
}
