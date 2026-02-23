const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("bookings");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};
const addToStoreDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("already exists");
  } else {
    storedBookData.push(id);
    // console.log(storedBookData);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("bookings", data);
  }
};

export { addToStoreDB, getStoredBook };
