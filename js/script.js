// ========== БАЗА ДАННЫХ ФИЛЬМОВ (40 ШТУК) ==========
const moviesDB = [
  { id: 1, title: "НАЧАЛО", titleEn: "Inception", genre: "фантастика", year: 2010, rating: 8.8, poster: "img/inception.jpg", description: "Кобб — талантливый вор, лучший в опасном искусстве извлечения ценных секретов из глубины подсознания.", duration: "148 мин", country: "США, Великобритания", categories: "Триллер, Драма, Фантастика" },
  { id: 2, title: "ТЁМНЫЙ РЫЦАРЬ", titleEn: "The Dark Knight", genre: "боевик", year: 2008, rating: 9.0, poster: "img/dark-knight.jpg", description: "Бэтмен поднимает ставки в войне с преступностью. Джокер сеет хаос в Готэме.", duration: "152 мин", country: "США", categories: "Боевик, Драма, Криминал" },
  { id: 3, title: "ЗЕЛЁНАЯ КНИГА", titleEn: "Green Book", genre: "драма", year: 2018, rating: 8.2, poster: "img/green-book.jpg", description: "Невероятная дружба между итальянским вышибалой и пианистом во время турне по югу США.", duration: "130 мин", country: "США", categories: "Драма, Комедия" },
  { id: 4, title: "МСТИТЕЛИ: ФИНАЛ", titleEn: "Avengers: Endgame", genre: "боевик", year: 2019, rating: 8.4, poster: "img/avengers.jpg", description: "Оставшиеся в живых Мстители должны найти способ вернуть уничтоженных Таносом.", duration: "181 мин", country: "США", categories: "Фантастика, Боевик" },
  { id: 5, title: "ДЖОКЕР", titleEn: "Joker", genre: "триллер", year: 2019, rating: 8.7, poster: "img/joker.jpg", description: "Комик Артур Флек теряет контроль над своей жизнью и становится легендой преступного мира.", duration: "122 мин", country: "США", categories: "Триллер, Драма" },
  { id: 6, title: "1+1", titleEn: "Intouchables", genre: "драма", year: 2011, rating: 8.5, poster: "img/intouchables.jpg", description: "Аристократ-паралитик и его сиделка из предместья — неожиданная дружба, меняющая жизни.", duration: "112 мин", country: "Франция", categories: "Драма, Комедия" },
  { id: 7, title: "ИНТЕРСТЕЛЛАР", titleEn: "Interstellar", genre: "фантастика", year: 2014, rating: 8.6, poster: "img/interstellar.jpg", description: "Путешествие через червоточину в поисках новой планеты для человечества.", duration: "169 мин", country: "США", categories: "Фантастика, Драма" },
  { id: 8, title: "ОСТРОВ ПРОКЛЯТЫХ", titleEn: "Shutter Island", genre: "триллер", year: 2010, rating: 8.1, poster: "img/shutter-island.jpg", description: "Маршалы прибывают на остров для расследования исчезновения пациентки психушки.", duration: "138 мин", country: "США", categories: "Триллер, Детектив" },
  { id: 9, title: "ФОРРЕСТ ГАМП", titleEn: "Forrest Gump", genre: "драма", year: 1994, rating: 8.8, poster: "img/forrest-gump.jpg", description: "Простодушный парень из Алабамы оказывается в центре важнейших событий истории США.", duration: "142 мин", country: "США", categories: "Драма, Мелодрама" },
  { id: 10, title: "КРИМИНАЛЬНОЕ ЧТИВО", titleEn: "Pulp Fiction", genre: "криминал", year: 1994, rating: 8.5, poster: "img/pulp-fiction.jpg", description: "Переплетающиеся истории гангстеров, боксёра и грабителей.", duration: "154 мин", country: "США", categories: "Криминал, Триллер" },
  { id: 11, title: "ПОБЕГ ИЗ ШОУШЕНКА", titleEn: "Shawshank Redemption", genre: "драма", year: 1994, rating: 9.3, poster: "img/shawshank.jpg", description: "Банкир Энди Дюфрейн осуждён за убийство жены. В тюрьме он находит надежду.", duration: "142 мин", country: "США", categories: "Драма" },
  { id: 12, title: "МАТРИЦА", titleEn: "The Matrix", genre: "фантастика", year: 1999, rating: 8.7, poster: "img/matrix.jpg", description: "Программист Томас Андерсон узнаёт, что мир вокруг — симуляция.", duration: "136 мин", country: "США", categories: "Фантастика, Боевик" },
  { id: 13, title: "БОЙЦОВСКИЙ КЛУБ", titleEn: "Fight Club", genre: "триллер", year: 1999, rating: 8.8, poster: "img/fight-club.jpg", description: "Офисный работник и торговец мылом создают подпольный клуб.", duration: "139 мин", country: "США", categories: "Триллер, Драма" },
  { id: 14, title: "ГЛАДИАТОР", titleEn: "Gladiator", genre: "боевик", year: 2000, rating: 8.5, poster: "img/gladiator.jpg", description: "Римский генерал предан императором и становится гладиатором.", duration: "155 мин", country: "США", categories: "Боевик, Драма" },
  { id: 15, title: "ВЛАСТЕЛИН КОЛЕЦ", titleEn: "Lord of the Rings", genre: "фантастика", year: 2003, rating: 8.9, poster: "img/lotr.jpg", description: "Хоббит Фродо должен уничтожить Кольцо Всевластья.", duration: "201 мин", country: "США", categories: "Фантастика, Приключения" },
  // КОМЕДИИ
  { id: 16, title: "МАЛЬЧИШНИК В ВЕГАСЕ", titleEn: "The Hangover", genre: "комедия", year: 2009, rating: 7.7, poster: "img/hangover.jpg", description: "Трое друзей просыпаются после мальчишника в Вегасе и не помнят, что произошло прошлой ночью. Жених исчез, а в ванной тигр.", duration: "100 мин", country: "США", categories: "Комедия" },
  { id: 17, title: "МЫ - МИЛЛЕРЫ", titleEn: "We're the Millers", genre: "комедия", year: 2013, rating: 7.0, poster: "img/millers.jpg", description: "Торговец наркотиками собирает фальшивую семью для перевозки груза через границу.", duration: "110 мин", country: "США", categories: "Комедия" },
  { id: 18, title: "ОДИН ДОМА", titleEn: "Home Alone", genre: "комедия", year: 1990, rating: 7.7, poster: "img/home-alone.jpg", description: "Восьмилетнего Кевина случайно забыли дома на Рождество. Он отбивается от двух незадачливых грабителей.", duration: "103 мин", country: "США", categories: "Комедия, Семейный" },
  { id: 19, title: "БРЮС ВСЕМОГУЩИЙ", titleEn: "Bruce Almighty", genre: "комедия", year: 2003, rating: 6.8, poster: "img/bruce-almighty.jpg", description: "Журналист Брюс получает силу Бога на неделю и учится отвечать за молитвы людей.", duration: "101 мин", country: "США", categories: "Комедия, Фэнтези" },
  { id: 20, title: "ЭЙС ВЕНТУРА", titleEn: "Ace Ventura", genre: "комедия", year: 1994, rating: 6.9, poster: "img/ace-ventura.jpg", description: "Эксцентричный сыщик по розыску пропавших животных берётся за дело о похищении талисмана команды.", duration: "86 мин", country: "США", categories: "Комедия" },
  { id: 21, title: "МАСКА", titleEn: "The Mask", genre: "комедия", year: 1994, rating: 7.0, poster: "img/mask.jpg", description: "Скромный клерк Стенли находит маску, которая даёт ему сверхспособности и меняет его личность.", duration: "101 мин", country: "США", categories: "Комедия, Фэнтези" },
  { id: 22, title: "ТУПОЙ И ТУПЕЕ", titleEn: "Dumb and Dumber", genre: "комедия", year: 1994, rating: 7.3, poster: "img/dumb-dumber.jpg", description: "Два придурка отправляются в путешествие через всю страну, чтобы вернуть чемодан владелице.", duration: "107 мин", country: "США", categories: "Комедия" },
  { id: 23, title: "НЕСНОСНЫЕ ЛЕДИ", titleEn: "Bridesmaids", genre: "комедия", year: 2011, rating: 6.8, poster: "img/bridesmaids.jpg", description: "Подружка невесты пытается организовать идеальную свадьбу, но всё идёт наперекосяк.", duration: "125 мин", country: "США", categories: "Комедия" },
  { id: 24, title: "СУПЕРБАД", titleEn: "Superbad", genre: "комедия", year: 2007, rating: 7.6, poster: "img/superbad.jpg", description: "Два друга пытаются раздобыть алкоголь для вечеринки, попадая в нелепые ситуации.", duration: "113 мин", country: "США", categories: "Комедия" },
  { id: 25, title: "НА ДНЕ", titleEn: "The Other Guys", genre: "комедия", year: 2010, rating: 6.6, poster: "img/other-guys.jpg", description: "Два неудачника-полицейских пытаются стать героями.", duration: "107 мин", country: "США", categories: "Комедия, Боевик" },
  // БОЕВИКИ И ФАНТАСТИКА
  { id: 26, title: "ДЖОН УИК", titleEn: "John Wick", genre: "боевик", year: 2014, rating: 7.4, poster: "img/john-wick.jpg", description: "Легендарный киллер возвращается к преступной жизни мести после убийства его собаки.", duration: "101 мин", country: "США", categories: "Боевик, Триллер" },
  { id: 27, title: "ДЭДПУЛ", titleEn: "Deadpool", genre: "боевик", year: 2016, rating: 8.0, poster: "img/deadpool.jpg", description: "Наёмник с чёрным юмором мстит тем, кто изуродовал его лицо.", duration: "108 мин", country: "США", categories: "Боевик, Комедия" },
  { id: 28, title: "ДЮНА", titleEn: "Dune", genre: "фантастика", year: 2021, rating: 8.0, poster: "img/dune.jpg", description: "Молодой Пол Атрейдес должен защитить самую опасную планету во вселенной.", duration: "155 мин", country: "США", categories: "Фантастика, Драма" },
  { id: 29, title: "ОППЕНГЕЙМЕР", titleEn: "Oppenheimer", genre: "драма", year: 2023, rating: 8.5, poster: "img/oppenheimer.jpg", description: "История создателя атомной бомбы и его мучительной ответственности.", duration: "180 мин", country: "США", categories: "Драма, Биография" },
  { id: 30, title: "ЧЕЛОВЕК-ПАУК: ПАУТИНА ВСЕЛЕННЫХ", titleEn: "Spider-Verse", genre: "фантастика", year: 2018, rating: 8.4, poster: "img/spiderverse.jpg", description: "Майлз Моралес становится Человеком-пауком в мультивселенной.", duration: "117 мин", country: "США", categories: "Фантастика, Анимация" },
  { id: 31, title: "ВЕЧНОЕ СИЯНИЕ ЧИСТОГО РАЗУМА", titleEn: "Eternal Sunshine", genre: "драма", year: 2004, rating: 8.3, poster: "img/eternal-sunshine.jpg", description: "Пара решает удалить друг друга из памяти после разрыва.", duration: "108 мин", country: "США", categories: "Драма, Мелодрама" },
  { id: 32, title: "ТРЕЙНИНГ ДНЯ", titleEn: "Training Day", genre: "криминал", year: 2001, rating: 7.8, poster: "img/training-day.jpg", description: "Опытный полицейский вводит новичка в мир коррупции.", duration: "122 мин", country: "США", categories: "Криминал, Триллер" },
  { id: 33, title: "ДЕВУШКА С ТАТУИРОВКОЙ ДРАКОНА", titleEn: "Dragon Tattoo", genre: "триллер", year: 2011, rating: 7.8, poster: "img/dragon-tattoo.jpg", description: "Журналист и хакерша расследуют исчезновение девушки.", duration: "158 мин", country: "США", categories: "Триллер, Детектив" }
];

// ========== БАЗА ДАННЫХ СЕРИАЛОВ (17 ШТУК) ==========
const tvDB = [
  { id: 101, title: "ВО ВСЕ ТЯЖКИЕ", titleEn: "Breaking Bad", genre: "криминал", year: 2008, rating: 9.5, poster: "img/breaking-bad.jpg", description: "Учитель химии начинает производство метамфетамина.", duration: "45 мин", country: "США", categories: "Криминал, Драма" },
  { id: 102, title: "ИГРА ПРЕСТОЛОВ", titleEn: "Game of Thrones", genre: "фантастика", year: 2011, rating: 9.2, poster: "img/got.jpg", description: "Борьба за Железный трон в вымышленном мире.", duration: "55 мин", country: "США", categories: "Фэнтези, Драма" },
  { id: 103, title: "ШЕРЛОК", titleEn: "Sherlock", genre: "триллер", year: 2010, rating: 9.1, poster: "img/sherlock.jpg", description: "Современный Шерлок Холмс в Лондоне.", duration: "90 мин", country: "Великобритания", categories: "Детектив, Триллер" },
  { id: 104, title: "ЧЕРНОЕ ЗЕРКАЛО", titleEn: "Black Mirror", genre: "фантастика", year: 2011, rating: 8.8, poster: "img/black-mirror.jpg", description: "Сериал о тёмной стороне технологий.", duration: "60 мин", country: "Великобритания", categories: "Фантастика, Триллер" },
  { id: 105, title: "КЛОНИНГ", titleEn: "Orphan Black", genre: "фантастика", year: 2013, rating: 8.3, poster: "img/orphan-black.jpg", description: "Девушка узнаёт, что у неё есть клоны, и оказывается в центре заговора.", duration: "44 мин", country: "Канада", categories: "Фантастика, Триллер" },
  { id: 106, title: "ОСТРЫЕ КОЗЫРЬКИ", titleEn: "Peaky Blinders", genre: "криминал", year: 2013, rating: 8.8, poster: "img/peaky-blinders.jpg", description: "Британская гангстерская семья Шелби в 1920-х годах.", duration: "60 мин", country: "Великобритания", categories: "Криминал, Драма" },
  { id: 107, title: "ВИКИНГИ", titleEn: "Vikings", genre: "боевик", year: 2013, rating: 8.5, poster: "img/vikings.jpg", description: "История легендарного Рагнара Лодброка и его сыновей.", duration: "45 мин", country: "Канада, Ирландия", categories: "Боевик, Драма" },
  { id: 108, title: "МИСТЕР РОБОТ", titleEn: "Mr. Robot", genre: "триллер", year: 2015, rating: 8.5, poster: "img/mr-robot.jpg", description: "Молодой хакер с социальным расстройством пытается спасти мир.", duration: "49 мин", country: "США", categories: "Триллер, Драма" },
  { id: 109, title: "ЛЮЦИФЕР", titleEn: "Lucifer", genre: "фэнтези", year: 2016, rating: 8.1, poster: "img/lucifer.jpg", description: "Дьявол устал от ада и открывает ночной клуб в Лос-Анджелесе.", duration: "48 мин", country: "США", categories: "Фэнтези, Драма" },
  { id: 110, title: "ОФИС", titleEn: "The Office", genre: "комедия", year: 2005, rating: 8.9, poster: "img/office.jpg", description: "Документальный сериал о жизни офисных работников.", duration: "22 мин", country: "США", categories: "Комедия" },
  { id: 111, title: "БУДЬ ЧЕЛОВЕКОМ", titleEn: "Being Human", genre: "фэнтези", year: 2008, rating: 7.9, poster: "img/being-human.jpg", description: "Вампир, оборотень и призрак пытаются жить как обычные люди.", duration: "58 мин", country: "Великобритания", categories: "Фэнтези, Драма" },
  { id: 112, title: "СВЕТЛЯЧОК", titleEn: "Firefly", genre: "фантастика", year: 2002, rating: 8.9, poster: "img/firefly.jpg", description: "Команда контрабандистов путешествует по космосу на корабле Серенити.", duration: "44 мин", country: "США", categories: "Фантастика, Приключения" },
  { id: 113, title: "ВЕЛИКОЛЕПНЫЙ ВЕК", titleEn: "Magnificent Century", genre: "драма", year: 2011, rating: 8.1, poster: "img/magnificent-century.jpg", description: "История любви султана Сулеймана и славянской наложницы Хюррем.", duration: "120 мин", country: "Турция", categories: "Драма, История" }
];

// ========== ПЕРЕМЕННЫЕ ==========
let currentSection = "movies";
let currentFilter = "all";
let currentPage = 1;
let currentSearch = "";
let itemsPerPage = 12;
let currentData = [];

// ========== DOM ЭЛЕМЕНТЫ ==========
const contentContainer = document.getElementById('contentContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resetBtn = document.getElementById('resetBtn');
const movieCountSpan = document.getElementById('movieCount');
const sectionTitleSpan = document.getElementById('sectionTitle');

// ========== ПОЛУЧИТЬ ДАННЫЕ ==========
function getData() {
  if (currentSection === "movies") return [...moviesDB];
  if (currentSection === "tv") return [...tvDB];
  if (currentSection === "top") {
    const all = [...moviesDB, ...tvDB];
    return all.sort((a,b) => b.rating - a.rating).slice(0, 20);
  }
  return [...moviesDB];
}

// ========== ФИЛЬТРАЦИЯ ==========
function filterData() {
  let data = getData();

  if (currentSearch) {
    const searchLower = currentSearch.toLowerCase();
    data = data.filter(item => 
      item.title.toLowerCase().includes(searchLower) ||
      (item.titleEn && item.titleEn.toLowerCase().includes(searchLower))
    );
  }

  if (currentFilter !== "all") {
    data = data.filter(item => item.genre === currentFilter);
  }

  return data;
}

// ========== ОТРИСОВКА ==========
function render() {
  const filtered = filterData();
  currentData = filtered;

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  // Обновляем заголовок
  if (currentSection === "movies") sectionTitleSpan.textContent = "ПОПУЛЯРНЫЕ ФИЛЬМЫ";
  else if (currentSection === "tv") sectionTitleSpan.textContent = "ЛУЧШИЕ СЕРИАЛЫ";
  else sectionTitleSpan.textContent = "ТОП ЛУЧШИХ ФИЛЬМОВ И СЕРИАЛОВ";

  // Обновляем счётчик если есть
  if (movieCountSpan) movieCountSpan.textContent = filtered.length;
  
  if (paginated.length === 0) {
    contentContainer.innerHTML = '<div style="text-align:center;padding:60px;grid-column:1/-1;">🎬 НИЧЕГО НЕ НАЙДЕНО</div>';
    document.getElementById("pagination").innerHTML = "";
    return;
  }

  let html = "";
  paginated.forEach(movie => {
    html += `
      <div class="movie-card" onclick="openModal(${movie.id})">
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=NO+POSTER'">
        <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-year">${movie.year}</div>
          <div class="movie-rating">⭐ ${movie.rating.toFixed(1)}/10</div>
        </div>
      </div>
    `;
  });
  contentContainer.innerHTML = html;

  // Пагинация
  const paginationContainer = document.getElementById("pagination");
  if (totalPages <= 1) {
    paginationContainer.innerHTML = "";
    return;
  }

  let pagHtml = "";
  pagHtml += `<button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>◀</button>`;
  for (let i = 1; i <= Math.min(totalPages, 7); i++) {
    pagHtml += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  pagHtml += `<button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>▶</button>`;
  paginationContainer.innerHTML = pagHtml;

  document.querySelectorAll(".page-btn").forEach(btn => {
    if (!btn.disabled) {
      btn.addEventListener("click", () => {
        const page = parseInt(btn.dataset.page);
        if (!isNaN(page) && page !== currentPage && page >= 1 && page <= totalPages) {
          currentPage = page;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }
  });
}

// ========== МОДАЛКА (ДЕТАЛИ) ==========
function openModal(id) {
  const allData = [...moviesDB, ...tvDB];
  const movie = allData.find(m => m.id === id);
  if (!movie) return;

  const modal = document.getElementById("movieModal");
  const modalContent = document.getElementById("modalContent");
  
  modalContent.innerHTML = `
    <div class="modal-poster">
      <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=NO+POSTER'">
    </div>
    <div class="modal-info">
      <div class="modal-title">${movie.title}</div>
      <div class="modal-year">${movie.year} | ${movie.titleEn || ""}</div>
      <div class="modal-desc">${movie.description || "Описание временно отсутствует."}</div>
      <div class="modal-details">
        <div class="detail-item">
          <div class="detail-label">РЕЙТИНГ</div>
          <div class="detail-value">⭐ ${movie.rating.toFixed(1)}/10</div>
        </div>
        ${movie.duration ? `<div class="detail-item">
          <div class="detail-label">ДЛИТЕЛЬНОСТЬ</div>
          <div class="detail-value">${movie.duration}</div>
        </div>` : ''}
        ${movie.country ? `<div class="detail-item">
          <div class="detail-label">СТРАНА</div>
          <div class="detail-value">${movie.country}</div>
        </div>` : ''}
      </div>
      <div class="modal-genres">
        ${(movie.categories || movie.genre).split(',').map(g => `<span class="genre-tag">${g.trim().toUpperCase()}</span>`).join('')}
      </div>
    </div>
  `;
  
  modal.style.display = "flex";
}

// ========== ЗАКРЫТЬ МОДАЛКУ ==========
document.querySelector(".close-modal").onclick = () => {
  document.getElementById("movieModal").style.display = "none";
};
window.onclick = (e) => {
  if (e.target === document.getElementById("movieModal")) {
    document.getElementById("movieModal").style.display = "none";
  }
};

// ========== СБРОС ФИЛЬТРОВ ==========
function resetFilters() {
  currentFilter = "all";
  currentSearch = "";
  currentPage = 1;
  searchInput.value = "";
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.filter === "all") btn.classList.add("active");
  });
  render();
}

// ========== ПЕРЕКЛЮЧЕНИЕ РАЗДЕЛОВ ==========
function switchSection(section) {
  currentSection = section;
  currentFilter = "all";
  currentSearch = "";
  currentPage = 1;
  searchInput.value = "";
  
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.filter === "all") btn.classList.add("active");
  });
  
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.dataset.section === section) link.classList.add("active");
    else link.classList.remove("active");
  });
  
  render();
}

// ========== СОБЫТИЯ ==========
searchBtn.onclick = () => {
  currentSearch = searchInput.value;
  currentPage = 1;
  render();
};

searchInput.onkeypress = (e) => {
  if (e.key === "Enter") {
    currentSearch = searchInput.value;
    currentPage = 1;
    render();
  }
};

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    currentPage = 1;
    render();
  };
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.onclick = (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    if (section) switchSection(section);
  };
});

// ========== ЗАПУСК ==========
render();