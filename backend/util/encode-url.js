const encode = (deci) => {
  const s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hash_str = "";
  while (deci > 0) {
    hash_str = s[deci % 62] + hash_str;
    deci = Math.floor(deci / 62);
  }
  return hash_str;
};

module.exports = encode;
