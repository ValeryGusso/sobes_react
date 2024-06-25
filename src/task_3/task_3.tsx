import { FC } from 'react';
import '../task_3_solution/animations.css';

const Task_3: FC = () => {
  /* Блокирование основного потока на 5сек */
  function lockMainTrade() {
    const start = Date.now();
    while (true) if (Date.now() - start > 5000) break;
  }

  return (
    <section>
      <h1 className="warning">ВАЖНО!!!</h1>
      <h2>
        Нельзя открывать файл "src/task_3_solution/animations.css", пользоваться инспектором кода и
        дев.тулзами до того, как задание будет выполнено
      </h2>
      <div className="container">
        <div className="wrapper">
          <div className="text-wrapper">
            <h3>
              К обоим div`ам применена CSS-анимация перемещения, но реализованы они по-разному.
              <br />
              1) Почему при блокировании основного потока одна анимация останавливается, а другая
              продолжает работать?
              <br />
              2) Через какие CSS-свойства реализовны эти анимации и почему?
            </h3>
          </div>
        </div>

        <div className="circle_1 animate_1">
          <p>1</p>
        </div>

        <div className="circle_2 animate_2">
          <p>2</p>
        </div>
      </div>
      <button onClick={lockMainTrade}>Заблокировать main tread</button>
    </section>
  );
};

export default Task_3;
