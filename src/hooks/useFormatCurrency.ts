const useFormatCurrency = () => {
  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return { formatCurrency };
};

export default useFormatCurrency;
