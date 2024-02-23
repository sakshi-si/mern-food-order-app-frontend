import { MenuItem as MenuItemType } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType; // Use a different name for the type
  addToCart: () => void;
};

const MenuItemComponent = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItemComponent; // Use a different name for the component

// import { MenuItem } from "../types";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// type Props = {
//   menuItem: MenuItem;
//   addToCart: () => void;
// };

// const MenuItem = ({ menuItem, addToCart }: Props) => {
//   return (
//     <Card className="cursor-pointer" onClick={addToCart}>
//       <CardHeader>
//         <CardTitle>{menuItem.name}</CardTitle>
//       </CardHeader>
//       <CardContent className="font-bold">
//         £{(menuItem.price / 100).toFixed(2)}
//       </CardContent>
//     </Card>
//   );
// };

// export default MenuItem;

