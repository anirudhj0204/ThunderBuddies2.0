import { Schema, model, models } from 'mongoose';

const LocationSchema = new Schema({
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  aisle_number: {
    type: Number
  }
});

const Location = models.Location || model('Location', LocationSchema);

export default Location;