export const updateCurrentTaskStatus = (taskId, status) => (todo) => {
  if (todo.id === taskId) {
    const tempItem = {
      id: todo.id,
      task: { ...todo.task, status: status },
    };
    return tempItem;
  } else {
    return todo;
  }
};
