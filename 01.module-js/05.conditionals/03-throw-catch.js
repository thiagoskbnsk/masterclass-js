const request = () => {
  return {
    error: true,
  }
}

try {
  const response = request();

  if (response.error) {
    throw new Error('Error aqui');
  }
} catch (error) {
  console.log({ error });
}
