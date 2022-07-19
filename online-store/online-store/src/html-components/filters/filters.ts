class Filters {
  static filters = `
  <form action="#" class="filters-form">
    <div class="sort-container">
      <div class="sort">
        <button class="sort-btn">сортировать по цене<btn>
      </div>
    </div>
    <div class="filters-container">
      <div class="country-filter">
        <h4 class="country">Страна</h4>
        <div id="country">
          <div class="checkbox"><label><input type="checkbox" name="country" value="Австралия">Австралия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Австрия">Австрия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Германия">Германия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Испания">Испания</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Италия">Италия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Португалия">Португалия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Франция">Франция</label></div>
        </div>
      </div>
      <div class="color-filter">
        <h4 class="color">Цвет</h4>
        <div id="color">
          <div class="checkbox"><label><input type="checkbox" name="color" value="white">Белое</label></div>
          <div class="checkbox"><label><input type="checkbox" name="color" value="red">Красное</label></div>
        </div>
      </div>
      <button class="reset-filters">Сбрость фильтры</button>
    </div>
  </form>
`;
}

export default Filters;