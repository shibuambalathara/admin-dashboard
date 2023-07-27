import React, { useState } from "react";
import { useCountQuery } from "../../utils/graphql";
import { useNavigate } from "react-router-dom";

const HomeComonent = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  const { data, loading, error } = useCountQuery();

  let pulseClasses = `flex flex-col text-black  border-2 w-60 shadow-xl rounded bg-white p-5  ml-5     `;


  return (
    <div className="flex flex-wrap m-5 space-x-12 h-96 space-y-20 justify-center items-center bg">
      <div  style={{ marginTop: "80px" }}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={pulseClasses}
          onClick={() => navigate("users")}
        >
          <div className="text-center font-extrabold">Users Count</div>
          <div className="text-center m-2 lowercase ">
            {data?.usersCount} <span className="uppercase">I</span>tems
          </div>
        </div>
      </div>

      <div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={pulseClasses}
          onClick={() => navigate("payment")}
        >
          <div className="text-center font-extrabold">Payments Count</div>
          <div className="text-center mt-2 lowercase ">
            {data?.paymentsCount} <span className="uppercase">I</span>tems
          </div>
        </div>
      </div>
 
      <div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={pulseClasses}
          onClick={() => navigate("events")}
        >
          <div className="text-center font-extrabold">Events Count</div>
          <div className="text-center mt-2 lowercase ">
            {data?.eventsCount} <span className="uppercase">I</span>tems
          </div>
        </div>
      </div>

      <div >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={pulseClasses}
          onClick={() => navigate("event-types")}
        >
          <div className="text-center font-extrabold">Events Types</div>
          <div className="text-center mt-2 lowercase ">
            {data?.eventTypesCount} <span className="uppercase">I</span>tems
          </div>
        </div>
      </div>
      <div >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={pulseClasses}
          onClick={() => navigate("viewlocation")}
        >
          <div className="text-center font-extrabold">Locations Count</div>
          <div className="text-center mt-2 lowercase ">
            {data?.locationsCount} <span className="uppercase">I</span>tems
          </div>
        </div>
      </div>
      <div >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={pulseClasses}
          onClick={() => navigate("states")}
        >
          <div className="text-center font-extrabold">States Count</div>
          <div className="text-center mt-2 lowercase ">
            {data?.statesCount} <span className="uppercase">I</span>tems
          </div>
        </div>
      </div>
 
      <div >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={pulseClasses}
          onClick={() => navigate("sellers")}
        >
          <div className="text-center font-extrabold">Sellers Count</div>
          <div className="text-center mt-2 lowercase ">
            {data?.sellersCount} <span className="uppercase">I</span>tems
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComonent;
