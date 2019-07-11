export const wrapGet = client => key =>
  new Promise((resolve, reject) => {
    client.get(key, (err, reply) => {
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });

export const wrapSet = client => (key, value) =>
  new Promise((resolve, reject) => {
    client.set(key, value, (err, ok) => {
      if (err) {
        reject(err);
      }
      resolve(ok);
    });
  });

export const wrapDel = client => key =>
  new Promise((resolve, reject) => {
    client.del(key, (err, reply) => {
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
