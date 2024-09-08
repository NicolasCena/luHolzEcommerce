import { Navbar } from "../Navbar/Navbar";
import { BannerInformative } from '@components/Banner/bannerInformative';

const Header = () => {
  return (
    <header>
      <Navbar />
      <BannerInformative/>
    </header>
  );
};

export default Header;
