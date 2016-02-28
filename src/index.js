export default function optimisticMiddleware() {
  return ({ getState }) => next => action => {
    const prevState = getState();
    next(action);
    remote.action()
    .then(res => onSuccess(prevState, getState(), res))
    .catch(e => onFail(prevState, getState(), e));
  }
}