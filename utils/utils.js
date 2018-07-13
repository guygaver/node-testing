module.exports.add = (a,b) => {
  return a + b;  
};

module.exports.addAsync = (a,b,callback) => {
  setTimeout(() => {
     return callback(a + b); 
  }, 1000);
};

module.exports.square = (x) => {
    return x * x;
};

module.exports.squareAsync= (a,callback) => {
    setTimeout(() => {
        return callback(a * a);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');
    
    user.first = names[0];
    user.last = names[1];
    
    return user;
};