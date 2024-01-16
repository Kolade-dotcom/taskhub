import axios from "axios";
import { useCallback, useState } from "react";

function useRequestResource({ endpoint }) {
  const [resourceList, setResourceList] = useState({
    results: [],
  });

  const getResourceList = useCallback(() => {
    axios
      .get(`/api/${endpoint}`)
      .then((res) => {
        setResourceList({
          results: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [endpoint]);

  return [resourceList, getResourceList];
}

export default useRequestResource;
