export const constructTask = (payload) => {
    const {id, ...task} = payload;
    const newTaskItem = {
      id: payload.id,
      task: task
    }
    return newTaskItem
  }