const addToDb = (id) => {
    // localStorage.setItem('apply-job', id);

     let existingData = localStorage.getItem("apply-job");
     let newData = id;

     if (existingData) {
       existingData = JSON.parse(existingData);
       existingData.push(newData);
       localStorage.setItem("apply-job", JSON.stringify(existingData));
     } else {
       localStorage.setItem("apply-job", JSON.stringify([newData]));
     }
  
}
export{addToDb}