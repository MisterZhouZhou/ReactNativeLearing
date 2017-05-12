import Realm from 'realm';
import Schema from './ZWSchema'

class ZWModelManager{
  constructor(){
    this.realm = new Realm(Schema);
  }

  saveItems(tableName,items){
    this.realm.write(()=>{
      items.forEach((item)=>{
        let model = this.realm.create(tableName,item,true);
      });
    });
  }

  /*获取条件数据*/
  getItems(tableName,sqlStr){
    let plans;
    if(sqlStr){
      plans = this.realm.objects(tableName).filtered(sqlStr);
    }
    else{
      // 查询所有
      plans = this.realm.objects(tableName);
    }
    return plans;
  }

  /*获取分页数据*/
  getPageItems(tableName,page,pagesize){
    let items = this.realm.objects(tableName);
    let pageItems = items.slice(page*pagesize,(page+1)*pagesize);  //查询分页
    return pageItems;
  }

  /*删除条件数据*/
  delete(tableName,sqlStr){
    this.realm.write(()=>{
      if(sqlStr){
        let allItems = this.realm.objects(tableName).filtered(sqlStr);
        this.realm.delete(allItems);
      }else{
        let allItems = this.realm.objects(tableName);
        this.realm.delete(allItems);
      }
    });
  }
}


export default ZWModelManager
