import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
    title: string
    items: Product[]
    
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
    function shuffle(array: Product[]): Product[]{
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

    return (  
    <div className="space-y-4"> 
    <h3 className="font-bold text-3xl">{title}</h3>
    {items.length === 0 && <NoResults/> }
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffle(items).map((item) => (
            <ProductCard 
            key={item.id}
            data={item}
            />
        ))}

    </div>
    </div>);
}
 
export default ProductList;
