const phoneMask = (phone) => {
  const regex = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
  const subst = "+$1 ($2) $3-$4-$5";
  return phone.replace(regex, subst);
};
export default phoneMask;
