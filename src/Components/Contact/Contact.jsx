
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {MdUpdate} from 'react-icons/md';
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi';
import {FaPinterestP} from 'react-icons/fa';


import './Contact.css';


const Contact = () => {
  return (
    <div className='container '>
      <div className='row'>
      <div className='text-white contact-row w-100'>
        <div className='flex-lg-row d-flex justify-content-lg-between align-items-lg-center flex-md-column justify-content-md-center align-items-md-center '>
        <div className='col'>
          
            <span style={{fontSize:"14px"}} ><BsFillTelephoneFill className=' text-white'/>{" "}+1-2222-44445-44 </span>
            <span style={{fontSize:"14px"}}><GrMail className='mx-2 text-white'/>reservation@recibotheme.com</span>
          </div>
          
          <div className=' col d-flex justify-content-center align-items-center'>
            <span style={{fontSize:"14px"}}><MdUpdate className='mx-2 text-white '/>Mon - Fri / 10:00-21:00, Sat - Sun / 09:00 - 23:00</span>
          </div>
<div className='col'>
          <div className=' social-icon  d-flex justify-content-end'>

            <a href="#" className=' mx-2 text-white'><BiLogoFacebook className='fs-5'/></a>
            <a href="#" className='text-white mx-2'><AiFillLinkedin className='fs-5'/></a>
            <a href="#" className='text-white mx-2'><FaPinterestP  className='fs-5'/></a>
            <a href="#" className='text-white mx-2'><AiOutlineTwitter className='fs-5'/></a>
          </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Contact