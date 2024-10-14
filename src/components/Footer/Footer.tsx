import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column gap-1">
            <h4>Сыр и тесто</h4>
            <a href="">О нас</a>
            <a href="">Акции</a>
            <a href="">Контакты</a>
          </div>
          <div className="col d-flex flex-column gap-1">
            <h4>Работа</h4>
            <a className="text-gray-300" href="">
              Актуальные вакансии
            </a>
          </div>
          <div className="col d-flex flex-column gap-1">
            <h4>Партнерам</h4>
            <a href="">Франшиза</a>
            <a href="">Инвестиции</a>
            <a href="">Поставщикам</a>
            <a href="">Предложить помещение</a>
          </div>
          <div className="col d-flex flex-column gap-1">
            <p>feedback@cheesendough.com</p>
          </div>
          <div className="col d-flex flex-column gap-1">a.</div>
        </div>
      </div>
    </footer>
  );
}
