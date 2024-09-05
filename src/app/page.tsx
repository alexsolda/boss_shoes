import InfosTemplate from "@/templates/InfosTemplate";
import ProductQualityTemplate from "@/templates/ProductQualityTemplate";
import ProductsTemplate from "@/templates/ProductsTemplate";

export default function Home() {
  return (
    <main className="relative z-50">
      <InfosTemplate />
      <ProductsTemplate />
      <ProductQualityTemplate />
    </main>
  );
}
