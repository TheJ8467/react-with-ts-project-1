import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import { setWindowHeight, setWindowWidth } from '../store/slices/windowSlice';

export const useWindow = () => {
  const dispatch = useDispatch();
  const { windowWidth, windowHeight } = useSelector(
    (state: RootState) => state.window,
  );

  useEffect(() => {
    const handleWidthResize = () => dispatch(setWindowWidth(window.innerWidth));
    window.addEventListener('resize', handleWidthResize);
    return () => window.removeEventListener('resize', handleWidthResize);
  }, [dispatch]);

  useEffect(() => {
    const handleHeightResize = () =>
      dispatch(setWindowHeight(window.innerHeight));
    window.addEventListener('resize', handleHeightResize);
    return () => window.removeEventListener('resize', handleHeightResize);
  }, [dispatch]);

  return {
    windowWidth,
    windowHeight,
  };
};
