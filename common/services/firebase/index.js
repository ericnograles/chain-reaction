import Firebase from 'firebase';

export function login(email, password) {
  return new Promise((resolve, reject) => {
    var ref = new Firebase('https://gainsville.firebaseio.com');
    ref.authWithPassword({
      email: email,
      password: password
    }, function(err, userData) {
      if (err) {
        if (err.code === 'INVALID_USER') {
          ref.createUser({
            email: self.state.email,
            password: self.state.password
          }, function(error, userData) {
            if (error) {
              return reject(error.message);
            } else {
              return resolve(userData);
            }
          });
        } else {
          return reject(err);
        }
      } else {
        return resolve(userData);
      }
    });
  });
}