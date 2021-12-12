import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'app/store';

// Use throughout your app instead of plain `useDispatch`
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
