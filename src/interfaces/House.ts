import User from "./User";
interface House {
  id: number;
  name: string;
  carpetArea: number;
  configuration: number;
  furnishingStatus: string;
  description: string;
  floorPlan: string;
  brochure: string;
  image: string;
  image360?: string;
  location: string;
  price: string;
  addressLine1: string;
  addressLine2: string;
  seller: User;
  city: string;
  state: string;
  comments: any;
}

export default House;
