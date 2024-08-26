import { Card } from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { AppRoutes } from '../Routes/AppRoutes';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <AppRoutes /> */}
      <Card/>
      <Footer/>
    </div>
  );
};

export { Home };
