import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Register from "./Components/Register/Register";
import AllAnimalspage from "./Pages/AllAnimalPage/AllAnimalspage";
import AboutUs from "./Pages/AboutUsPage/AboutUs";
import Catspage from "./Pages/Catspage/Catspage";
import Dogspage from "./Pages/DogsPage/Dogspage";
import Login from "./Components/Login/Login";
import BirdsPage from "./Pages/BirdsPage/BirdsPage";
import OtherAnimalsPage from "./Pages/OthersAnimalPage/OtherAnimalsPage";
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./Pages/TermsAndCondition/TermsAndCondition";
import AboutDeveloper from "./Pages/AboutDeveloper/AboutDeveloper";
import AdoptNowFormPage from "./Pages/AdoptNowFormPage/AdoptNowFormPage";
import { Provider } from "react-redux";
import store from "./Store/store";
import SingleAnimalDetailsPage from "./Pages/SingleAnimalDetailsPage/SingleAnimalDetailsPage";
import CreateAnimal from "./Pages/CreateAnimalForm/CreateAnimal";
import UpdateAnimal from "./Pages/UpdateAnimal/UpdateAnimal";
import DonatePage from "./Pages/DonatePage/DonatePage";
import PaymentSuccess from "./Pages/paymentSuccesspage/paymentsuccess";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to close the modal
  const closeRegisterModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<Homepage />} />

          {/* Register Route */}
          <Route
            path="/register"
            element={<Register onClose={closeRegisterModal} />}
          />
          <Route
            path="/login"
            element={<Login onClose={closeRegisterModal} />}
          />

          <Route path="/animals" element={<AllAnimalspage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/category/cats" element={<Catspage />} />
          <Route path="/category/dogs" element={<Dogspage />} />
          <Route path="/category/birds" element={<BirdsPage />} />
          <Route path="/category/others" element={<OtherAnimalsPage />} />

          {/* Footer pages */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/tac" element={<TermsAndCondition />} />
          <Route path="/aboutDeveloper" element={<AboutDeveloper />} />

          <Route path="/adopt/:id" element={<AdoptNowFormPage />} />
          <Route path="/singleanimal/:id" element={<SingleAnimalDetailsPage />}
          />

          <Route path="/add" element={<CreateAnimal />} />
          <Route path="/update/animal/:id" element={<UpdateAnimal />} />

          <Route path="/donate" element={<DonatePage/>}/>

          <Route path="api/payment/success" element={<PaymentSuccess />} />

        </Routes>

        {/* model pahile nai open xa vani register maa close model pass gareko ani onclose jaha xa tyo open model lai close garna use vayo*/}
        {/* {isModalOpen && <Register onClose={closeRegisterModal} />} */}
      </Router>
    </Provider>
  );
};

export default App;
