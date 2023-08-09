import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import { setWindowWidth } from '../store/slices/windowSlice';

export const useWindow = () => {
  const dispatch = useDispatch();
  const { windowWidth, windowHeight } = useSelector(
    (state: RootState) => state.window,
  );

  useEffect(() => {
    const handleResize = () => dispatch(setWindowWidth(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return {
    windowWidth,
    windowHeight,
  };
};
