let initState = {
  todos: [
    {
      id: ~~(Math.random() * 1000000),
      title: '学习React',
      isComplete: true,
    },
    {
      id: ~~(Math.random() * 1000000),
      title: '学习Node',
      isComplete: false,
    },
    {
      id: ~~(Math.random() * 1000000),
      title: '学习Hooks',
      isComplete: false,
    },
  ],
}

function reducer(state = initState, action) {}

export default reducer
