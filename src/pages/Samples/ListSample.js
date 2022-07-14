import React, { useState} from 'react';
import MList from "../../Component/controls/MList"
import { httpService } from '../../core/http-service';
import "./list-sample.css";

function ListSample () {

  const arr = [{id: 1, name: "Bếp & Văn Phòng", hasChild: true}, {id: 2, name: "Dịch Vụ"},{id: 3, name: "Văn Phòng", hasChild: true},{id: 4, name: "Đồ chơi"}]
  
  const [category, setCatgory] = useState([arr]);

  // async function initList() {
  //   let dataAPI = await httpService.get('api/mst/category');
  //   if (dataAPI.success && dataAPI.data.length > 0) {
  //     return [dataAPI.data]
  //   }
  //   return []
  // }


  async function handleSelect (data, index) {
    if (data) {
      let dataAPI = await httpService.get('api/mst/category', {parentId:data.id});
      let ar = category.slice(0, index+1);
      if (dataAPI.success && dataAPI.data.length > 0) {
        ar.push(dataAPI.data)
      }
      setCatgory(ar);
    }
  }

  function renderListCatgory() {
    let listMlist = []

    category.forEach((e,indx)=>{
      listMlist.push(<MList key={indx} data={e} index={indx} onSelect={handleSelect}></MList>);
    });

    return listMlist
  }

  return (
    <div>
      <MList data={arr} onSelect={handleSelect}></MList>
      <div className="category">{renderListCatgory()}</div>
      <button>Click</button>
    </div>
  )
}
export default ListSample
