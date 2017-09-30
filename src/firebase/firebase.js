import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDHiWXzjI5IAH_5DiKHJyUCFDdnuz9j3zE",
  authDomain: "xmi-app.firebaseapp.com",
  databaseURL: "https://xmi-app.firebaseio.com",
};

firebase.initializeApp(config);

const db = firebase.database();
export const rootRef = db.ref();

const push = (refName, object) => {
  let ref = db.ref(refName);
  ref.push(object);
};

export const pushAssociation = (association) => {
  push("associations", {
    name: association.name,
    phone: association.phone,
    email: association.email,
    address: association.address,
    city: association.city,
    web: association.web,
    coordinate: {
      latitude: association.latitude,
      longitude: association.longitude
    }
  });
};

export const pushTestimony = (testimony) => {
  push("testimonies", testimony);
};