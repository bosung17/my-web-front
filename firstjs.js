function func(callFun) {
  callFun('Hello SSAFY')
}

function fn(msg) {
  console.log(msg)
}

func(fn)