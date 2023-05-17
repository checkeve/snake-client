let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



const handleUserInput = function(key) {
  if (key === "w") {
    return connection.write("Move: up");
  } else if (key === "a") {
    return connection.write("Move: left");
  } else if (key === "s") {
    return connection.write("Move: down");
  } else if (key === "d") {
    return connection.write("Move: right");
  } else if (key === '\u0003') {
    (process.exit());
  } else if (key === "k") {
    return connection.write("Say: I'm the SSSSNAKE");
  } else if (key === "l") {
    return connection.write("Say: Nice try bud");
  } else if (key === "j") {
    return connection.write("Say: Wanna play snake??");
  }
};

module.exports = {setupInput};