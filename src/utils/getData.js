export const getData = async (url) => {
  try {
    const data = await fetch(`http://api.ubdgroup.uz/api/v2/${url}`);
    const res = await data.json();
    return res;
  } catch (error) {
    throw error;
  }
};
