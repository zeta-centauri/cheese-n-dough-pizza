import { observer } from "mobx-react-lite";
import productStore from "../../../../stores/product-store";
import IngridientCard from "./IngridientCard/IngridientCard";
import { IngridientsTable, Wrapper } from "./IngridientsPanel.styled";

const IngridientsPanel = observer(() => {
  const { availableIngridients } = productStore.currentProduct!;
  const currentIngridients = productStore.currentIngridients;

  if (!availableIngridients) return null;

  return (
    <Wrapper>
      <IngridientsTable>
        {availableIngridients &&
          availableIngridients.map((ingridient) => (
            <IngridientCard
              key={ingridient.name}
              isPicked={currentIngridients?.indexOf(ingridient.name) != -1}
              ingridient={ingridient}
            />
          ))}
      </IngridientsTable>
    </Wrapper>
  );
});

export default IngridientsPanel;
