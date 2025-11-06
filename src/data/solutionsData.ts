import { link } from "fs";
import ContactLessOrderingImage from "../assets/images/header-contactless-ordering.png";
import IntegrationsImage from "../assets/images/header-integrations.png";
import LoyaltyImage from "../assets/images/header-loyalty.png";
import NumberCallingSystemImage from "../assets/images/header-number-calling-system.png";
import ReportingImage from "../assets/images/header-reporting.png";
import CloudPosImage from "../assets/images/header-vector.png";

export const solutionsData = [
  { id: 1, name: "Cloud POS", image: CloudPosImage },
  { id: 2, name: "Number Calling System", image: NumberCallingSystemImage },
  {
    id: 3,
    name: "Contactless Ordering",
    image: ContactLessOrderingImage,
    link: "/",
  },
  { id: 4, name: "Loyalty", image: LoyaltyImage },
  { id: 5, name: "Integrations", image: IntegrationsImage },
  { id: 6, name: "Reporting", image: ReportingImage },
];
