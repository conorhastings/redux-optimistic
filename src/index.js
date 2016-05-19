export default function optimistic() {
  return () => next => action => {
    next(action);
    action.remote().then(res => action.success()).catch(action.failure)
  }
}