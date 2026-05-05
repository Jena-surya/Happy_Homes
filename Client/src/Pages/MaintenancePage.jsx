import React from "react";
import { ServiceDetails } from "../Components/Servicedetails/ServiceDetails";

export const MaintenancePage = () => {
  return (
    <ServiceDetails
      title="Maintenance"
      heroImg="/images/maintenance1.jpg"
      detailImg="/images/maintenance2.jpg"
      description="Happy Homes Maintenance is a comprehensive property care and facility management service dedicated to ensuring that homes, offices, and commercial spaces remain in excellent condition at all times. With a strong foundation in construction and interior services, Happy Homes extends its expertise into maintenance, offering reliable, efficient, and high-quality solutions that preserve the value, functionality, and appearance of every property.

      Maintenance is an essential part of any property’s lifecycle. While construction and design create the foundation and beauty of a space, proper maintenance ensures its longevity and performance. At Happy Homes Maintenance, we understand that even the best-built structures require regular care, timely repairs, and professional attention to remain safe, comfortable, and visually appealing.

      Our maintenance services are designed to provide complete peace of mind to property owners. Whether it is routine upkeep, emergency repairs, or long-term facility management, Happy Homes ensures that every aspect of a property is well taken care of with precision and professionalism."
    />
  );
};
