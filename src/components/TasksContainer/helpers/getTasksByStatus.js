export const getTasksByStatus = (status) => (todo) => {
  return todo?.task?.status && todo.task.status === status;
};
