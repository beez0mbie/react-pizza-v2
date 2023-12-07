import './App.css';
import { Categories } from './Components/Categories';
import { Header } from './Components/Header';
import { Pizza } from './Components/Pizza';
import { Sort } from './Components/Sort';
import { pizzas } from './constants/data';

import './scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            {pizzas.map((pizza) => {
              return (
                <Pizza
                  title={pizza.title}
                  prize={pizza.prize}
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
