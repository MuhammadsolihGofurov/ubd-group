export const getData = async (url) => {
  const data = await fetch(`https://api.ubdgroup.uz/api/v2/${url}`);
  const res = await data.json();
  return res;
};
