import express from 'express';
import cors from 'cors';

let alreadyStarted = false;

const app = express();
app.use(cors()); // enable CORS

app.get('/api/test', (req, res) => {
  res.send('Hello World!');
});

export const startServer = () => {
  // Prevent multiple server instances
  if (alreadyStarted) {
    console.log('Server already started');
    return;
  }

  const server = app.listen(5750, 'localhost', () => {
    console.log(`Server started on http://localhost:${5750}`);
    alreadyStarted = true;
  });

  const gracefulShutdown = () => {
    console.log('Received kill signal, shutting down gracefully');
    server.close(() => {
      console.log('Closed out remaining connections');
      process.exit();
    });

    // if after
    setTimeout(() => {
      console.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10 * 1000);
  };

  const events = [
    'exit',
    // 'beforeExit',
    // 'uncaughtException',
    // 'unhandledRejection',
    // 'rejectionHandled',
    // 'warning',
    // 'message',
    'SIGINT',
    'SIGTERM',
  ];

  const logAndHandleEvent = (event: string) => {
    return (error?: Error) => {
      console.log(`Process event received: ${event}`);
      if (error) {
        console.error('Error details:', error);
      }
      gracefulShutdown();
    };
  };

  events.forEach((event) => {
    process.on(event as any, logAndHandleEvent(event));
  });

  return server;
};
