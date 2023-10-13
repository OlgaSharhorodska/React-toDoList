import React, { Component } from "react";

// 1. Создать кнопку удаления
// 2. Создать метод для удаления елемента (фильтер)
// 3. Создать компонент тудулист и передать пропсом метод для удаления
// 4. Созать компонент поиска (инпут)
// 5. Создать компонент для добавления задач
// 6. Добавить чекбокс состояния задачи (комплитед = тру или фолс)
// 7.

// Add todo
// Search by todo string
// Todolist
// Filter - необязательно

export default class App extends Component {
  state = {
    todos: [
      { id: "2", todo: "Купить молоко" },
      { id: "1", todo: "Купить хлеб" },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((item) => (
            <li key={item.id}>{item.todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
