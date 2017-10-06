import * as firebase from 'firebase'
import config from './config'

firebase.initializeApp(config);

const db = firebase.database();
export const rootRef = db.ref();

const push = (refName, object, onSuccess, onError) => {
  let ref = db.ref(refName);
  ref.push(object)
    .then((snap) => onSuccess(snap))
    .catch((error) => onError(onError))
};

export const pushAssociation = (association, onSuccess, onError) => {
  push('associations',
    {
      name: association.name,
      phone: association.phone,
      email: association.email,
      address: association.address,
      city: association.city,
      web: association.web,
      coordinate: {
        latitude: parseFloat(association.latitude),
        longitude: parseFloat(association.longitude)
      }
    }, onSuccess, onError)
};

export const pushVideo = (video, onSuccess, onError) => {
  push('resources/videos', video, onSuccess, onError);
};

export const pushStudy = (study, onSuccess, onError) => {
  push('resources/studies', study, onSuccess, onError);
};

export const pushInfo = (info, onSuccess, onError) => {
  push('resources/info', info, onSuccess, onError);
};