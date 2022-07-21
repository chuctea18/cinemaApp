import giave from "../../assets/img/giave.png";
import Banner from "../../components/shared/Banner";
import BuyTicket from "../../components/Buyticket/BuyTicket";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
function GiaVe() {
  return (
    <div>
      <Header />
      <Menu />
      <br/>
      <Banner />
      <BuyTicket
      />
      <br />
      <br />
      <img
        src={giave}
        style={{
          height: "75%",
          width: "75%",
          marginLeft: "13%",
        }}
      />
      <br/>
      <br />
      <Footer />
    </div>
  );
}

export default GiaVe;
