import { useEffect } from 'react';

const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | Harry Schlechter` : 'Harry Schlechter';
    return () => {
      document.title = 'Harry Schlechter';
    };
  }, [title]);
};

export default usePageTitle;
