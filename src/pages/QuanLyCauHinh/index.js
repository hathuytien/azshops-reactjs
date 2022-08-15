import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, welcome } from "../../store/manageProper/action"

function QLCauHinh () {
  const count = useSelector((state) => state.counter.counterr)
  const listDelivery = useSelector((state) => state.counter.listDelivery)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('init');
    dispatch(welcome());
  }, []);

  function renderListDelivery() {
    if(listDelivery && listDelivery.length > 0) {
      let container = [];

      listDelivery.forEach((val, indx) => {
        container.push(renderListDeliveryItem(val, indx))
      });
      return container;
    }
  }

  function renderListDeliveryItem(data, index) {
    return <div key={index}><span>{data.code}</span>-<span>{data.name}</span></div>
  }

  return (
    <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment(5))}
          >
            Increment
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement(5))}
          >
            Decrement
          </button>
          
          <span>{count}</span>
        </div>
        <div>
          {renderListDelivery()}
        </div>
    </div>
  )
}
export default QLCauHinh
