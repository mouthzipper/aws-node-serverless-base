const helloWorld = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World! Go Serverless',
    }),
  };
  return response;
};

export const handler = helloWorld;

