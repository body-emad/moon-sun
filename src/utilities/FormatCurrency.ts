export default function formatCurrency(__price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
}
