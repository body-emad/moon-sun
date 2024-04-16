export default function useSpecialOffer() {
  const isSpecialId = (id: number) => {
    const isNewProduct = [3, 5, 9];
    return isNewProduct.includes(id);
  };

  return { isSpecialId };
}
