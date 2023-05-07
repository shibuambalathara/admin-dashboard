import React, { useState } from "react";
import { useEventsReportQuery } from "../../utils/graphql";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
import { useForm } from "react-hook-form";
import format from 'date-fns/format'

const Report = () => {
  const [isoDateTimeFrom, setIsoDateTimeFrom] = useState(0);
  const [isoDateTimeTo, setIsoDateTimeTo] = useState(0);


  const { data, loading } = useEventsReportQuery({
    variables: {
      where: {
        startDate: {
          gt: isoDateTimeFrom,
          lt: isoDateTimeTo,
        },
      },
    },
  });


 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
 
    setIsoDateTimeFrom(new Date(formData.eventfromdate).toISOString());
    setIsoDateTimeTo(new Date(formData.eventTodate).toISOString());

    // Pass the data from the GraphQL query to the handleReport function
    

  };

  const handleReport = (report) => {
    console.log(report, "report");

    // Convert the startDate field in the report data to ISO string format
    const reportData = report.map((event) => ({
      ...event,
      startDate:format(new Date (event.startDate),`dd/MM/yy, HH:mm`),
      endDate:format(new Date (event.endDate),`dd/MM/yy, HH:mm`),
       location:(event?.location?.name),
       seller:(event?.seller?.name),
    
     
     
    }
    ));
console.log(reportData,"reportdata..")
    const convertToExcel = (reportData) => {
      const worksheet = XLSX.utils.json_to_sheet(reportData);
      const workbook = {
        Sheets: { data: worksheet },
        SheetNames: ["data"],
      };
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const excelData = new Blob([excelBuffer], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      });
      FileSaver.saveAs(excelData, "Event-Report.xlsx");
    };
     convertToExcel(reportData);
  };

  if (loading) return <p>Loading...</p>;
  return (
  <div className="flex flex-col mt-10 justify-center w-full ">
     <form onSubmit={handleSubmit(onSubmit)}>
   <div className="text-red-500 flex justify-center font-bold my-10"> Events Report In Excel Format</div>
    <div className="flex justify-evenly">
      
      <div className="flex flex-col">
        <label>Enter event from date</label>
        <input className="btn" type="datetime-local" {...register("eventfromdate", { required: true })} />
        {errors.eventfromdate && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="flex flex-col">
        <label>Enter event to date</label>
        <input className="btn" type="datetime-local" {...register("eventTodate", { required: true })}/>
        {errors.eventTodate && <span className="text-red-500">This field is required</span>}
      </div>
   {!data  && <input className="btn btn-primary" type="submit" />}
      {data && <button className="btn btn-success" onClick={(e) => handleReport(data?.events)}>Download</button> }
    </div>
    </form>
    </div>
  );
};

export default Report;
