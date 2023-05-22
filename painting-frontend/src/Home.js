import Banner from './_includes/Banner';
import Recommended from './_includes/Recommended';
import Footer from './_includes/Footer';
import Popular from './_includes/Popular';
import Category from './_includes/Category';
export default function Home({isLogin,user,banner,recommended,category,popular}) {
  return (
    <>
      <Banner data={banner} />
      <Recommended recommended={recommended} />
      <Popular popular={popular} />
      <Category category={category} />
      <Footer />
    </>
  );
}
