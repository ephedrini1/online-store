class Filters {
  static filters = `
  <form action="#" class="filters-form">

    <div class="filters-container">
      <div class="country-filter">
        <h4 class="filter-name">Страна</h4>
        <div id="country">
          <div class="checkbox">
            <input type="checkbox" id="check1" name="country" value="Австралия">
            <label class="checkbox-country"for="check1">Австралия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check2" name="country" value="Австрия">
            <label class="checkbox-country"for="check2">Австрия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check3" name="country" value="Германия">
            <label class="checkbox-country"for="check3">Германия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check4" name="country" value="Испания">
            <label class="checkbox-country"for="check4">Испания</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check5" name="country" value="Италия">
            <label class="checkbox-country"for="check5">Италия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check6" name="country" value="Португалия">
            <label class="checkbox-country"for="check6">Португалия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check7" name="country" value="Франция">
            <label class="checkbox-country"for="check7">Франция</label>
          </div>
        </div>
      </div>
      <div class="color-filter">
        <h4 class="filter-name">Цвет</h4>
        <div id="color">
          <div class="checkbox">
            <input type="checkbox" id="check8" name="color" value="white">
            <label class="checkbox-color"for="check8">Белое</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check9" name="color" value="red">
            <label class="checkbox-color"for="check9">Красное</label>
          </div>
        </div>
      </div>
      <div class="sort-container">
      <div class="sort">
        <h4 class="filter-name">Сортировка</h4>
        <select class="select">
        <option value="ByPriceUp">По цене: по возрастанию</option>
        <option value="ByPriceDown">По цене: по убыванию</option>
        </select>
      </div>
    </div>
      
    <button class="reset-filters class="btn">Сбрость фильтры</button>
    <button class="reset-filters reset class="btn">Очистить историю</button>
    </div>
  </form>
`;
}

export default Filters;