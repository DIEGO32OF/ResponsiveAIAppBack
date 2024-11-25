module.exports = {
    apps: [
      {
        name: "Todo-app", 
        script: "./server.js",
        instances: "max", 
        exec_mode: "cluster", // Modo cluster para balanceo de carga
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  