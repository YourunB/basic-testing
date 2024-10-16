export const timer = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
    jest.runAllTimers();
  });
}

export const data = 'test'

export const get = () => ({
  data: 'test',
})
