export const updateTasks = (id, name) => (currentTask) => {
        if (currentTask.id === id) {
          return {
            ...currentTask,
            task: {
              ...currentTask.task,
              name: name,
            },
          };
        }
        return currentTask;
}