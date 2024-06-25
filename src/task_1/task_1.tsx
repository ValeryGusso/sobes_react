import { useEffect, useState, type FC } from 'react';

/* Массив с повторяющимися элементами для задания 1а */
const notFiltredArray = [1, 2, 3, 3, 4, 5, 5];

/* Массив с пропущенным элементом для задания 1б */
const notCompletedArray = [0, 1, 3, 4, 5];

const Task_1: FC = () => {
  const [filtredArray, setFiltredArray] = useState<null | number[]>(null);
  const [сompletedArray, setCompletedArray] = useState<null | number[]>(null);

  /* Задание 1a */
  function removeDoubles(array: number[]) {
    /* Решение здесь */
    setFiltredArray(array);
  }

  /* Задание 1б */
  function addElement(array: number[]) {
    /* Решение здесь */
    setCompletedArray(array);
  }

  /* Задание 1в */
  function compareFloat(num_1: number, num_2: number) {
    /* Решение здесь */
    return num_1 === num_2;
  }

  /* Служебная информация. Не нужна для задания.

  | | |
  | | |
  | | |
  V V V

  */
  useEffect(() => {
    removeDoubles(notFiltredArray);
    addElement(notCompletedArray);
  }, []);

  return (
    <section>
      <div className="container">
        <h2>Работа с массивами и числами</h2>

        <div className="wrapper">
          <div className="text-wrapper">
            <h3>1a: Исходный массив преобразовать в массив с уникальными значениями </h3>
            <p>
              Исходный массив {JSON.stringify(notFiltredArray)} {'=>'} [1,2,3,4,5]
            </p>
            <p>Ваш результат: {JSON.stringify(filtredArray)}</p>
          </div>
          <div className="text-wrapper">
            <h3>1б: Вставить недостающий элемент на своё место</h3>
            <p>
              Исходный массив {JSON.stringify(notCompletedArray)} {'=>'} [0,1,2,3,4,5]
            </p>
            <p>Ваш результат: {JSON.stringify(сompletedArray)}</p>
          </div>
          <div className="text-wrapper">
            <h3>1в: Написать функцию "compareFloat" для сравнения двух дробных чисел</h3>
            <p className={compareFloat(0.1 + 0.2, 0.3) ? 'correct' : 'wrong'}>
              0.1 + 0.2 === 0.3 // {JSON.stringify(compareFloat(0.1 + 0.2, 0.3))}
            </p>
            <p className={compareFloat(0.1 + 0.2, 0.300004) ? 'wrong' : 'correct'}>
              0.1 + 0.2 === 0.300004 // {JSON.stringify(compareFloat(0.1 + 0.2, 0.300004))}
            </p>
            <p className={compareFloat(0.1 + 0.2, 0.30000000000000004) ? 'correct' : 'wrong'}>
              0.1 + 0.2 === 0.30000000000000004 //{' '}
              {JSON.stringify(compareFloat(0.1 + 0.2, 0.30000000000000004))}
            </p>
            <br />
            <p className={compareFloat(1 - 0.8, 0.2) ? 'correct' : 'wrong'}>
              1 - 0.8 === 0.2 // {JSON.stringify(compareFloat(1 - 0.8, 0.2))}
            </p>
            <p className={compareFloat(1 - 0.8, 0.199996) ? 'wrong' : 'correct'}>
              1 - 0.8 === 0.199996 // {JSON.stringify(compareFloat(1 - 0.8, 0.199996))}
            </p>
            <p className={compareFloat(1 - 0.8, 0.19999999999999996) ? 'correct' : 'wrong'}>
              1 - 0.8 === 0.19999999999999996 //{' '}
              {JSON.stringify(compareFloat(1 - 0.8, 0.19999999999999996))}
            </p>
            <br />
            <p className={compareFloat(0.5 - 0.8, -0.3) ? 'correct' : 'wrong'}>
              0.5 - 0.8 === -0.3 // {JSON.stringify(compareFloat(0.5 - 0.8, -0.3))}
            </p>
            <p className={compareFloat(0.7 - 0.9, -0.2) ? 'correct' : 'wrong'}>
              0.7 - 0.9 === -0.2 // {JSON.stringify(compareFloat(0.7 - 0.9, -0.2))}
            </p>
            <p className={compareFloat(-0.1 - 0.2, -0.3) ? 'correct' : 'wrong'}>
              -0.1 - 0.2 === -0.3 // {JSON.stringify(compareFloat(-0.1 - 0.2, -0.3))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task_1;
