import { httpService } from "../../core/http-service";

export const RsetCodeOrder = (codeOrder) => {
  return {
    type: "CODE_ORDER",
    codeOrder: codeOrder,
  };
};
export const RsetDelivery = (delivery) => {
  return {
    type: "DELIVERY",
    delivery: delivery,
  };
};
export const RsetStartDate = (startDate) => {
  return {
    type: "START_DATE",
    startDate: startDate,
  };
};
export const RsetEndDate = (endDate) => {
  return {
    type: "END_DATE",
    endDate: endDate,
  };
};

