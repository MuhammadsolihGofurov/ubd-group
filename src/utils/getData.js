export const getData = async (url) => {
  const data = await fetch(
    `https://my-json-server.typicode.com/Isomukhammad/ubd-group/${url}`
  );
  const res = await data.json();
  return res;
};
