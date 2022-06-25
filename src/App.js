import React from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./Screens/footer/Footer";
import ApplyMutualFund from "./Screens/applymutualfund/ApplyMutualFund";
import Applymatualfundlink from "./Screens/applymutualfundlink/Applymatualfundlink";
import Trading from "./Screens/Trading/Trading";
import IPO from "./Screens/ipo/IPO";
import Applyipo from "./Screens/applyipo/Applyipo";
import SGB from "./Screens/SGB/SGB";
import GeneralInsurence from "./Screens/generalInsurence/GeneralInsurence";
import Depository from "./Screens/Depository/Depository";
import PanCard from "./Screens/panCard/PanCard";
import PrivacyPolicy from './Screens/PrivacyPolicy/PrivacyPolicy'
import Download from './Screens/Download/Download'
import NewsAndAnnouncements from './Screens/NewsAndAnnouncements/NewsAndAnnouncements'
import Login from './Screens/Login/Login'
import SignUp from './Screens/SignUp/SignUp'
import AboutUs from './Screens/AboutUs/AboutUs'
import PartnerWithUs from './Screens/PartnerWithUs/PartnerWithUs'
import Blog from './Screens/Blog/Blog'
import ContactPage from './Screens/ContactPage/ContactPage'
import Home from './Screens/Home/Home'
import InvestorCorner from './Screens/advisoryInvestor/InvestorCorner'
import MarginCalculator from './Screens/MarginCalculator/MarginCalculator'
import Payment from './Screens/Payment/Payment'
import Header from './Components/Header/Header'
import Services from "./Screens/Services/Services";
import InvestorCharter from "./Screens/InvestorCharter/InvestorCharter";
import BlogMain from "./Screens/blogsMain/BlogMain";
import FlotingButton from "./Screens/floatingButton/FlotingButton";

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/applumutualfund" element={<ApplyMutualFund />} />
          <Route path='/applymatualfundlink' element={<Applymatualfundlink/>} />
          <Route path='/trading' element={<Trading/>} />
          <Route path='/ipo' element={<IPO/>} />
          <Route path="/apply-ipo" element={<Applyipo/>} />
          <Route path="sgb" element={<SGB/>} />
          <Route path="/general-insurenece" element={<GeneralInsurence/>} />
          <Route path="/depository" element={<Depository/>} />
          <Route path="/pancard" element={<PanCard/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/download" element={<Download />} />
          <Route path="/newsandannouncements" element={<NewsAndAnnouncements />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/margin-calculator" element={<MarginCalculator />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/advisory-of-investors" element={<InvestorCorner />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/download" element={<Download />} />
          <Route path="/newsandannouncements" element={<NewsAndAnnouncements />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/PartnerwithUs" element={<PartnerWithUs />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/investor-charter' element={<InvestorCharter/>} />
          <Route path="/adviory-investor" element={<InvestorCorner/>} />
          <Route path='/blogs-main' element={<BlogMain/>} />
          <Route path='/floating-button' element={<FlotingButton/>} />
        </Routes>
    <Footer/>
      </Router>
    </div>
  );
}

export default App;
