export const controlParams = (params) => {
  let completed = true;
  if (params) {
    const keys = Object.keys(params);
    keys.some((key) => {
      if (!params[key]) {
        completed = false;
      }
      return !params[key];
    });
  }
  return completed;
}
