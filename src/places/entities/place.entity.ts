import { Item } from "dynamoose/dist/Item";
import { PlaceSchema } from "./place.schema";
import * as dynamoose from 'dynamoose';

export class Place extends Item {
    id: String
    name:String
    description:String
    lat:Number
    lon:Number
}

export const PlaceModel = dynamoose.model<Place>("Place", PlaceSchema);

