const loadData = ()=>{
    return new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholer.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err=> reject(new Error(err)));
    })
}
loadData().then(data=> console.log('data', data)).catch(err=> console.log('err', err));