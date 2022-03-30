export const getRemainingTasks = (id) => (task) => {
  return id !== task.id;
};
