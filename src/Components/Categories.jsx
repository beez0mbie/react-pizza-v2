import React, { useState } from 'react';

export const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [category, setCategory] = useState(0);
  const onClickCategory = (id) => {
    setCategory(id);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li
            key={crypto.randomUUID()}
            onClick={() => onClickCategory(index)}
            className={category === index ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
