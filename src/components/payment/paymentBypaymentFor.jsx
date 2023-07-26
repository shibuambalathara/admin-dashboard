import React, { useState } from "react";
import PaymentInputForm from "./paymentInputForm";
import { usePaymentsSearchQuery } from "../../utils/graphql";
import PaymentTable from "./paymentTable";

const PaymentBypaymentFor = ({ onDataCheck }) => {
  const [type, setType] = useState("");
  const { data, loading } = usePaymentsSearchQuery({
    variables: { where: { paymentFor: { equals: type } } },
  });
  if (data?.payments?.length>0) {
    console.log(data, "payment by for");
    onDataCheck(true);
  }

  const onTypeChange = (dateOnSubmit) => {
    setType(dateOnSubmit);
  };
  if (loading) return <div>Loading.......</div>;
  return (
    <div className="bg-gray-100">
        <div className="flex justify-between">
      <PaymentInputForm inputType={"select"} onSubmit={onTypeChange} />
      {data?.payments.length>0 && (
        <p className="font-bold">
          Payment Count:{" "}
          <span className="text-red-500">{data?.payments?.length}</span>
        </p>
      )}
</div>
      {data?.payments.length>0 && <PaymentTable data={data} />}
    </div>
  );
};

export default PaymentBypaymentFor;
