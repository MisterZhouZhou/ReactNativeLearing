export default function makeCancelable(promise){
  let hasCanced_ =false;
  const wrappedPromise = new Promise((resolve,reject)=>{
    promise.then((val)=>{
      hasCanced_ ? reject({isCanceled: true}) : resolve(val)
    });
    promise.catch((error)=>{
      hasCanced_ ? reject({isCanceled: true}) : resolve(error)
    });
  });
  return{
    promise :wrappedPromise,
    cancel(){
      hasCanced_ = true;
    }
  }
}


/*  异步请求调用
  this.cancelable = makeCancelable(fetch('url')));
  this.cancelable.promise
      .then((response)=>response.json())
      .then((responseData)=> {
          console.log(responseData);
      }).catch((error)=> {
          console.log(error);
      });
*/

/* 异步请求取消
componentWillUnmount() {
  this.cancelable.cancel();
}*/
