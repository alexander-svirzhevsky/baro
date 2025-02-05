import { useState } from 'react';

export const useForceRerender = () => {
  const [, setState] = useState(true);

  return () => setState((state) => !state);
};
