import HeaderBanner from '../src/components/common/headerBanner';
import Layout from '../src/components/layout';
import AboutUs from '../src/components/about/index';
import GoogleMap from '../src/components/common/googleMap';
import aboutBanner from "../src/images/aboutBanner.jpg"
import Value from '../src/components/home/values';

function About() {
  return (
    <Layout homePage={false}>
      <main className="">
        <HeaderBanner
          title="About Us"
          pageBanner={aboutBanner}
          // content="Palazzio Nail Lounge is located at a beautiful place in Houston, TX 77024, Our nail salon
          // offers you the ultimate in pampering and boosting your natural beauty
          // with our whole-hearted, creative & professional staff."
        />
        <AboutUs />
        <GoogleMap />
      </main>
    </Layout>
  );
}

export default About;
