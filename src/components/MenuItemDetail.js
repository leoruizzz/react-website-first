import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MenuList } from '../helpers/MenuList'; // Importamos MenuList

function MenuItemDetail() {
  let { itemName } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    // Buscamos el ítem en la lista usando el nombre
    const details = MenuList.find(item => item.name.toLowerCase().replace(/\s+/g, '-') === itemName);
    console.log(details);
    setItemDetails(details);
  }, [itemName]);

  if (!itemDetails) {
    return <div>Loading...</div>; // Mostrar algo mientras se cargan los datos
  }

  return (
    <div>
      <h2>{itemDetails.name}</h2>
      <img src={itemDetails.image} alt={itemDetails.name} />
      <p>Price: ${itemDetails.price}</p>
      
    </div>
  );
}

export default MenuItemDetail;
