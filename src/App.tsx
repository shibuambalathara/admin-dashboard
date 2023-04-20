import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Users from "./pages/Users";
import { LoginPage } from "./pages/login";
import { Home } from "./pages/home";
import ProtectedRoutes from "./utils/protectedRoute";
import AddEvents from "./pages/events";
import AddUser from "./components/user/addUser";
import Header from "./components/header";
import UserDetails from "./pages/userDetails";
import Payments from "./pages/payments";
import Emd from "./pages/emd";
import Vehicles from "./pages/vehicles";
import Bids from "./pages/bidsTable";
import EventTypes from "./pages/eventTypes";

import States from "./pages/states";
import ExcelUploads from "./pages/excelUploads";
import Sellers from "./pages/sellers";
import AddEventForm from "./pages/addEventForm";
import AddVehicle from "./pages/addVehicle";
import AddBidForm from "./pages/addBidForm";
import AddPaymentDetails from "./pages/addPaymentDetails";
import PaymentUserDetails from "./pages/paymentUserDetails";
import AddStateForm from "./pages/addStateForm";
import AddExcel from "./pages/addExcel";
import AddEventType from "./pages/addEventType";
import ViewLocations from "./pages/viewLocations";
import Table from "./components/Sellers/sellersTable";
import EditEvent from "./pages/editEvent";

import EditVehicle from "./pages/editVehicle";
import VehicleBuyingLimit from "./pages/vehicleBuyingLimit";

import VehicleDetailsPerEvent from "./pages/vehicleDetailsPerEvent";
import BannedUsers from "./pages/bannedUsers";
import BidDetailsPerVehicle from "./pages/bidDetailsPerVehicle";
import AddEmd from "./pages/createEmd";
import EmdUpdate from "./pages/emdUpdate";
import EmdPerPayment from "./pages/emdPerPayment";
import BidsPerUser from "./pages/bidsPerUser";
import EventsPerSeller from "./pages/eventsPerSeller";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="flex w-screen  ">
          <Sidebar />
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
              <Route path="vehicles" element={<Vehicles />} />
              <Route path="bids" element={<Bids />} />
              <Route path="event-types" element={<EventTypes />} />
              <Route path="states" element={<States />} />
              <Route path="excel-uploads" element={<ExcelUploads />} />
              <Route path="sellers" element={<Sellers />} />
              <Route path="addevent" element={<AddEventForm />} />
              <Route path="add-vehicle/:id" element={<AddVehicle />} />
              <Route path="edit-vehicle/:id" element={<EditVehicle />} />
              <Route path="addBid" element={<AddBidForm />} />
              <Route
                path="create-payment/:id"
                element={<AddPaymentDetails />}
              />
              <Route
                path="update-payment/:id"
                element={<AddPaymentDetails />}
              />
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

              
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
