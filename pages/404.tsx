import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const Page404: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null;
};

export default Page404;
