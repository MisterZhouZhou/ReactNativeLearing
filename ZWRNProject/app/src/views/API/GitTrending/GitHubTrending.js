import TrendingUtil from './TrendingUtil';
export default class GitHubTrending{
  // 单例方法
  GitHubTrending(){
    if(typeof GitHubTrending.instance === 'object'){
      return GitHubTrending.instance;
    }
    GitHubTrending.instance = this;
  }

  fetchTrending(url){
     return new Promise((resolve,reject)=>{
       fetch(url).then((response)=>response.text())
       .catch((error)=>{
          reject(error);
       }).then((responseData)=>{
          try{
            // resolve()
            alert(TrendingUtil.htmlToRepo(responseData));
          } catch(e){
            reject(e);
          }
       }).done();
     })
  }
}
