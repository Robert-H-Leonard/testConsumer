import { DateTime } from "luxon";
import { BusinessHours, Restaurant } from "./restaurant";

export const MOCK_RESTAURANT: Restaurant = {
  name: "Harlem Tavern",
  description: "New York City’s Neighborhood Bar, Restaurant & Beer Garden",
  image: require('../../../assets/testImages/HarlemTavern.png'),
  businessHours: {
    openingTime:  DateTime.fromISO('2020-08-06T09:00:00').toFormat('t'),
    closingHourTime: DateTime.fromISO('2020-08-06T22:00:00').toFormat('t'),
  },
  location: {
    state: "NY",
    zip: "10026",
    street: "2153 Fredrick Douglass Blvd",
    city: "New York"
  },
  phoneNumber: '7702394828',
}

// Need to be smarter about timezones
export const isOpen = (businessHours: BusinessHours): boolean => {
  const now = DateTime.fromFormat(DateTime.now().toFormat('t'), 't')
  const isAfterOpening = DateTime.fromFormat(businessHours.openingTime, 't') < now;
  const isBeforeClosing = DateTime.fromFormat(businessHours.closingHourTime, 't') > now;
  return isAfterOpening && isBeforeClosing
}

export const MOCK_DISTANCE = (Math.random() * 3).toFixed(1)