import { useEffect, useState } from "react";

// custom hook is function name with use[any] - will not work if naming not like that
// code is reuseable
let useFetch =  (url) => {
  const [Data, setData] = useState(null);
  const [iswait, setiswait] = useState(true);

  
  useEffect(() => {
    console.log("one fire");
    fetch(url)
      .then((response) => {
        return  response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setiswait(false);
      })
      .catch((error) => {
        console.log(error);
        setiswait(false);
      });
  }, [url]);

  return { Data, iswait };
};

export default useFetch;
