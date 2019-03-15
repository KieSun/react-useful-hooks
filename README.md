# react-useful-hooks

如果你还不知道 Hooks 该怎么用，可以先阅读下[这篇文章](https://github.com/KieSun/Dream/issues/15)。

## 用例

具体用例可以在 [codesandbox](https://codesandbox.io/s/xrlwz94zkp) 阅读

### useSetState

```js
const [state, setState] = useSetState({
    loading: true,
    count: 0
});
setState({
    count: 2
});
```

### useOnDidUpdate

```js
// 组件更新就执行
useOnDidUpdate(
  () => console.log(1)
);
// 只执行一次
useOnDidUpdate(
  () => console.log(1),
  []
);
```

### useOnWillUnmount

用法于 `useOnDidUpdate` 一致

### usePreState

```js
const preCount = usePreState(state.count);
```
