import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodoListComponent extends Component {
  @tracked taskContent = '';
  @tracked tasks = [
    {
      content: 'kupić jajka',
      isChecked: false,
    },
    {
      content: 'sprzedać jajka',
      isChecked: true,
    },
    {
      content: 'odkupić jajka',
      isChecked: true,
    },
  ];

  get completedTaskCount() {
    return this.tasks.filter((task) => task.isChecked).length;
  }

  @action
  onInput(event) {
    this.taskContent = event.target.value;
  }

  @action
  onAddTask() {
    this.tasks = [
      ...this.tasks,
      { content: this.taskContent, isChecked: false },
    ];
    this.taskContent = '';
  }

  @action
  onRemoveTask(rowIndex) {
    this.tasks = this.tasks.filter((_, taskIndex) => rowIndex !== taskIndex);
  }

  @action
  onToggleCheckbox(rowIndex) {
    this.tasks = this.tasks.map((task, taskIndex) => {
      if (rowIndex === taskIndex) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });
  }
}
