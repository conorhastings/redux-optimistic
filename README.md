# Redux Optimistic

Simple, user controlled optimistic updates for redux. 

## how?

When you a remote call that can succeed or fail, simply add a key to your dispatched action describing the remote call(this should be a promise) and what to do if it succeeds or fails

```js
dispatch({
	type: MY_CONST
	payload: optimisticData,
	remote: {
		action: promiseThatCanSucceedOrFail,
		onSuccess: /* FUNCTION TO CALL ON SUCCESS, will receive state before action is committed to state, current state and the response */,
		onFail: /* FUNCTION TO CALL ON FAILURE, will receive state before action is committed to state, current state and the error */
	}
});
```