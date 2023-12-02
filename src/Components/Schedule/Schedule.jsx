
import { MdUpdate } from 'react-icons/md'

const Schedule = ({day,time}) => {
  return (
    <li className=" liste-date my-3 list-group-item d-flex justify-content-between align-items-center">
    <MdUpdate className='icon-date text-white '/>
<span className="fw-500" style={{fontSize:"14px"}}>{day}</span>
<span className="fw-500" style={{fontSize:"14px"}}>{time}</span>
    </li>
    
  )
}

export default Schedule