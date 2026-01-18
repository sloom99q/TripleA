import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { useEffect } from 'react';
import PageContainer from './PageContainer';

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
        <Footer />
    </>
  );
}

export default MainLayout;