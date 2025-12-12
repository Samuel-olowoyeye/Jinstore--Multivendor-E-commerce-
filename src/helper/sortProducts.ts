
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortProducts = (products: any[], option: string) => {
  const sorted = [...products];

  switch (option) {
    case "Price - High To Low":
      return sorted.sort((a, b) => b.price - a.price);

    case "Price - Low To High":
      return sorted.sort((a, b) => a.price - b.price);

    default:
      return sorted; // Relevance
  }
}