import React, { useState, useEffect} from 'react';
import "./m-list.css";

function MList (props) {

  const [arrData, setArrData] = useState(props.data);
  const [selectIndex, setSelectIndex] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setArrData(props.data.filter(it => it.name.toLowerCase().includes(value.toLowerCase())));
  }, [value])

  useEffect(() => {
    setArrData(props.data);
  }, [props.data])

  useEffect(handleSelect, [selectIndex])

  function handleSelect() {
    if (typeof props.onSelect === "function") {
      props.onSelect(arrData[selectIndex], props.index)
    }
  }

  function resetInput() {
    setValue("");
  }

  function handleChange(event) {
    setValue(event.target.value);
    
  }

  function replaceMatchingText(val) {
    if (!val) return "";
    let strArr = val.split(new RegExp(`(${value})`, "ig"));
    return strArr.map((ea, i) => {
      if(ea.toLowerCase() === value.toLowerCase()){
        return <span key={i} className='txt-hilight'>{ea}</span>
      } else {
        return ea;
      }
    });
  }

  function renderText(val) {
    let rs = <div style={{display: 'inline-block', width: '90%'}}><span className='short-text'>{replaceMatchingText(val)}</span></div>;
    return rs;
  }

  function renderNextButton (hasNext) {
    if (hasNext) {
      return <i className="bi bi-chevron-right float-end"></i>
    }
  }

  function renderClearButton () {
    if (value) {
      return <i className="bi bi-x-circle-fill" onClick={resetInput}></i>
    } else {
      return <i className="bi bi-search"></i>
    }
  }

  return (
    <div className="border p-2 m-list" style={{width: "200px"}} >
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search..." value={value} onChange={handleChange}/>
        <div type="button" className="btn bg-transparent" style={{marginLeft: "-40px", zIndex: 100}}>
          {renderClearButton()}
        </div>
      </div>
      <div className="scrollbar" style={{height: "200px", overflow: "auto"}}>
        <div className="force-overflow">
          {
            (() => {
              let container = [];
              arrData.forEach((val, indx) => {
                container.push(
                  <div className={selectIndex === indx ? "list-item active" : "list-item"} title={val.name} key={indx} onClick={() => {setSelectIndex(indx);}}>
                    {/* <span>{val.name}</span> */}
                    {renderText(val.name)}
                    {renderNextButton(val.hasChild)}
                  </div>
                  )
              });
              return container;
            })()
          }
        </div>
        
      </div>
    </div>
  )
}

MList.defaultProps = {
  // data: [{name: "Bếp & Văn Phòng"}, {name: "Dịch Vụ"},{name: "Văn Phòng"}]
  data: [],
  // onSelect: ()=>{return {}}
}

export default MList
