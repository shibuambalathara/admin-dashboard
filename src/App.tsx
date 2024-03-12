import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Users from "./pages/Users";
import { LoginPage } from "./pages/login";
import { Home } from "./pages/home";
import ProtectedRoutes from "./utils/protectedRoute";
import AddEvents from "./pages/events";
import AddUser from "./components/user/addUser";

import UserDetails from "./pages/userDetails";
import Payments from "./pages/payments";
import Emd from "./pages/emd";

import Bids from "./pages/bidsTable";
import EventTypes from "./pages/eventTypes";

import States from "./pages/states";
import ExcelUploads from "./pages/excelUploads";
import Sellers from "./pages/sellers";
import AddEventForm from "./pages/addEventForm";
import AddVehicle from "./pages/addVehicle";
import EditBidForm from "./pages/addBidForm";
import AddPaymentDetails from "./pages/addPaymentDetails";
import PaymentUserDetails from "./pages/paymentUserDetails";
import AddStateForm from "./pages/addStateForm";
import AddExcel from "./pages/addExcel";
import AddEventType from "./pages/addEventType";
import ViewLocations from "./pages/viewLocations";
import EditEvent from "./pages/editEvent";

import EditVehicle from "./pages/editVehicle";
import VehicleBuyingLimit from "./pages/vehicleBuyingLimit";

import VehicleDetailsPerEvent from "./pages/vehicleDetailsPerEvent";
import BannedUsers from "./pages/bannedUsers";
import BidDetailsPerVehicle from "./pages/bidDetailsPerVehicle";
import AddEmd from "./pages/createEmd";
import EmdPerPayment from "./pages/emdPerPayment";
import BidsPerUser from "./pages/bidsPerUser";
import EventsPerSeller from "./pages/eventsPerSeller";
import SellerEdit from "./pages/sellerEdit";
import AddSeller from "./components/Sellers/add";
import Header from "./components/header";
import ImageUpload from "./pages/image_upload";
import OpenAuctionTable from "./pages/openAuctionTable";
import ViewOpenAuction from "./pages/viewOpenAuction";
import AddPaymentForUser from "./pages/addPayment";
import OpenAuctionManage from "./pages/openAuctionManage";
import ProjecterView from "./pages/projecterView";

import EmdDetailsPage from "./pages/emdDetailsPage";
import CoupenPerUser from "./pages/coupenPerUser";
import CoupensPerPayment from "./pages/coupensPerPayment";
import ViewParticipants from "./pages/viewParticipants";
import Enquiry from "./pages/enquiry";
import FindAuction from "./pages/findAuction";

import Institution from "./pages/institution";
import EditFindAuction from "./pages/editFindAuction";
import AddFindAuction from "./pages/addFindAuction";

import SellACar from "./pages/sellACar";
import EditSellACar from "./pages/editSellACar";
import ViewUsersByState from "./pages/viewUsersByState";






function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


function AppContent() {
  const location = useLocation();
  const isProjectorView = location.pathname.startsWith ('/projecter-view/');
  return (
<div>
      {isProjectorView ? null : <Header />}
      <div className="flex w-full ">
        {!isProjectorView && <Sidebar />}
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="users" element={<Users />} />
             
              <Route path="events" element={<AddEvents />} />
              <Route path="add-user" element={<AddUser />} />
              <Route path="view-user/:id" element={<UserDetails />} />
              <Route path="payment" element={<Payments />} />
              <Route path="emd" element={<Emd />} />
            
              <Route path="bids" element={<Bids />} />
              <Route path="event-types" element={<EventTypes />} />
              <Route path="states" element={<States />} />
              <Route path="excel-uploads" element={<ExcelUploads />} />
              <Route path="sellers" element={<Sellers />} />
              <Route path="addevent" element={<AddEventForm />} />
              <Route path="add-vehicle/:id" element={<AddVehicle />} />
              <Route path="edit-vehicle/:id" element={<EditVehicle />} />
              <Route path="editBid/:id" element={<EditBidForm />} />
              <Route path="create-payment/:id" element={<AddPaymentForUser />} />
              <Route path="update-payment/:id" element={<AddPaymentDetails />}/>
              <Route path="payment/:id" element={<PaymentUserDetails />} />
              <Route path="addstate" element={<AddStateForm />} />
              <Route path="addeventtype" element={<AddEventType />} />
              <Route path="edit-event/:id" element={<EditEvent />} />
              <Route path="viewlocation" element={<ViewLocations />} />
              <Route path="excel-upload/:id" element={<AddExcel />} />
              <Route path="buying-limit/:userId" element={<VehicleBuyingLimit />} />
              <Route path="add-emd/:id" element={<AddEmd />} />
              <Route path="emd-payment/:id" element={<EmdPerPayment />} /> 
              <Route path="view-vehicls/:id" element={<VehicleDetailsPerEvent />} />
              <Route path="banned-users/:id" element={<BannedUsers />} />
              <Route path="bid-details/:id" element={<BidDetailsPerVehicle />} />
              <Route path="bids-user/:id" element={<BidsPerUser />} />
              <Route path="events-seller/:id" element={<EventsPerSeller />} />
              <Route path="edit-seller/:id" element={<SellerEdit />} />
              <Route path="add-seller" element={<AddSeller />} />
              <Route path="image-upload" element={<ImageUpload />} />
            
              <Route path="openAuction" element={<OpenAuctionTable />} />
              <Route path="openAuctionLive/:id" element={<ViewOpenAuction />} />
              <Route path="openAuctionUpdatedByAdmin/:id" element={<OpenAuctionManage />} />
              <Route path="projecter-view/:id" element={<ProjecterView />} />
         
              <Route path="emdDetails/:id" element={<EmdDetailsPage/>} />
              <Route path="coupenPerUser/:id" element={<CoupenPerUser/>} />
              <Route path="coupenPerPayment/:id" element={<CoupensPerPayment/>} />
              <Route path="participants/:id" element={<ViewParticipants/>} />
              <Route path="enquiry" element={<Enquiry/>}/>
              <Route path="find-auction" element={<FindAuction/>}/>
              <Route path="add-find-auction" element={<AddFindAuction/>}/>
              <Route path="edit-find-auction/:id" element={<EditFindAuction/>}/>
                      <Route path="institution" element={<Institution/>}/>
                      <Route path="sell-a-car" element={<SellACar/>}/>
                      <Route path="edit-sell-a-car/:id" element={<EditSellACar/>}/>
                      <Route path="ViewUsersByState/:id" element={<ViewUsersByState/>}/>
            </Route>
          </Routes>
        </div>
     
    </div>
  );
}

export default App;
