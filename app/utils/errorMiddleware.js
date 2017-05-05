export default function createErrorMiddleware(actionToDispatch) {
  return store => next => action => {
    if (!action.error || !action.meta || !action.meta.errorMessage) {
      return next(action);
    }

    const errorMessage = typeof action.meta.errorMessage === 'function'
      ? action.meta.errorMessage(action.error)
      : action.meta.errorMessage;

    store.dispatch(actionToDispatch(errorMessage));
    return next(action);
  };
}
