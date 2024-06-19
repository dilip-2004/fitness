export const setItem=(data)=>{
  localStorage.setItem('currentUser',JSON.stringify(data));
}

export const getItem=()=>{
  const storedJsonString=localStorage.getItem('currentUser');
  const retrievedData = JSON.parse(storedJsonString);
  return retrievedData;
}

export const clearLocalStorage=()=>{
  localStorage.clear('currentUser');
}