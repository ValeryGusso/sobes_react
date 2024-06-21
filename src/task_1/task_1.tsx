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

  useEffect(() => {
    removeDoubles(notFiltredArray);
    addElement(notCompletedArray);
  }, []);

  return (
    <section>
      <div className="container">
        <h2>Работа с массивами и числами</h2>
        <div>
          <h3>1a: Исходный массив преобразовать в массив с уникальными значениями </h3>
          <p>
            Исходный массив {JSON.stringify(notFiltredArray)} {'=>'} [1,2,3,4,5]
          </p>
          <p>Ваш результат: {JSON.stringify(filtredArray)}</p>
        </div>
        <div>
          <h3>1б: Вставить недостающий элемент на своё место</h3>
          <p>
            Исходный массив {JSON.stringify(notCompletedArray)} {'=>'} [0,1,2,3,4,5]
          </p>
          <p>Ваш результат: {JSON.stringify(сompletedArray)}</p>
        </div>
        <div>
          <h3>1в: Написать функцию "compareFloat" для сравнения двух дробных чисел</h3>
          <p>0.1 + 0.2 === 0.3 // {JSON.stringify(compareFloat(0.1 + 0.2, 0.3))}</p>
          <p>0.1 + 0.2 === 0.4 // {JSON.stringify(compareFloat(0.1 + 0.2, 0.4))}</p>
          <p>
            0.1 + 0.2 === 0.30000000000000004 //{' '}
            {JSON.stringify(compareFloat(0.1 + 0.2, 0.30000000000000004))}
          </p>
          <br />
          <p>1 - 0.8 === 0.2 // {JSON.stringify(compareFloat(1 - 0.8, 0.2))}</p>
          <p>1 - 0.8 === 0.3 // {JSON.stringify(compareFloat(1 - 0.8, 0.3))}</p>
          <p>
            1 - 0.8 === 0.19999999999999996 //{' '}
            {JSON.stringify(compareFloat(1 - 0.8, 0.19999999999999996))}
          </p>
          <br />
          <p>0.2 + 0.5 === 0.7 // {JSON.stringify(compareFloat(0.2 + 0.5, 0.7))}</p>
          <p>0.8 - 0.5 === 0.3 // {JSON.stringify(compareFloat(0.8 - 0.5, 0.3))}</p>
        </div>
      </div>
    </section>
  );
};

export default Task_1;
