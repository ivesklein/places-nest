import * as dynamoose from 'dynamoose';

export const PlaceSchema = new dynamoose.Schema(
  {
    id: String,
    name:String,
    description:String,
    lat:Number,
    lon:Number
  },
  {
    timestamps: true,
  },
);