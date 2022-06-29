import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useBootStrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // add more functions here that are needed to bootstrap...
  }, [dispatch]);
};

export default useBootStrap;
