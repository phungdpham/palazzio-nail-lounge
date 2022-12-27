import phoneIcon from '../../images/telephone.png';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegCalendarPlus } from 'react-icons/fa';
import db from '../../constant/db';

function MobileButtons() {
  return (
    <div className="fixed bottom-0 left-0  w-full mx-auto md:invisible">
      <div className="flex mx-auto btn-primary divide-x-[1px] divide-primary">
        
        <button className="w-6/12 flex items-center  mx-3 p-1 ">
        
          <a
            href={db.booking}
            className="items-center mx-auto flex gap-2 text-center text-base"
            target="_blank"
          >
            <FaRegCalendarPlus />Book Appointment
          </a>
        </button>
        <button className="w-6/12 flex items-center  mx-3 p-1  ">
          <a
            href={`tel:${db.phone}`}
            className="items-center  mx-auto flex gap-2 text-base"
          >
            <FiPhoneCall /> Call Us
          </a>
        </button>
      </div>
    </div>
  );
}

export default MobileButtons;
