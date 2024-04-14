import { Categories, Header, Pizza, Sort } from './components';
import pizzas from './constants/pizzas.json';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => {
              return (
                <Pizza
                  key={pizza.id}
                  {...pizza}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
