const addToDb = (id) => {
  let appliedJobsAdd = {};
  const storedData = localStorage.getItem("appliedJobsAdd");
  if (storedData) {
    appliedJobsAdd = JSON.parse(storedData);
  }

  const quantity = appliedJobsAdd[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    appliedJobsAdd[id] = newQuantity;
  } else {
    appliedJobsAdd[id] = 1;
  }

  localStorage.setItem("appliedJobsAdd", JSON.stringify(appliedJobsAdd));
};

const getAppliedJobs = () => {
  const storedData = localStorage.getItem("appliedJobsAdd");
  return storedData ? JSON.parse(storedData) : {};
};

// const getStoredCart = () => {
//   const storedCart = localStorage.getItem("appliedJobsAdd");
//   return storedCart ? JSON.parse(storedCart) : {};
// };
export { addToDb, getAppliedJobs };
