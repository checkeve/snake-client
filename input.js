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
  if (key === "t") {
    return connection.write("Move: up");
  } else if (key === "f") {
    return connection.write("Move: left");
  } else if (key === "g") {
    return connection.write("Move: down");
  } else if (key === "h") {
    return connection.write("Move: right");
  } else if (key === '\u0003') {
    (process.exit());
  }
};

module.exports = {setupInput};