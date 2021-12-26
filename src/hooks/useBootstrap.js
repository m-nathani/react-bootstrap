import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { configureToast } from 'utils';

const useBootStrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // add more functions here that are needed to bootstrap...
    configureToast();
  }, [dispatch]);
};

export default useBootStrap;
