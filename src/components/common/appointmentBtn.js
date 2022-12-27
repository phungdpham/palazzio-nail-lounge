import phoneIcon from '../../images/telephone.png';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegCalendarPlus } from 'react-icons/fa';
import db from "../../constant/db";

function AppointmentBtn() {
  return (
    <div className="fixed right-0  md:top-[35%]">
      <button className="btn-primary rounded-l-lg flex items-center gap-2 ">
        <span className="text-lg">
          <FaRegCalendarPlus />
        </span>
        <a
          href={db.booking}
          className="items-center text-center text-xl"
          target="_blank"
        >
          Book Appointment
        </a>
      </button>
    </div>
  );
}

export default AppointmentBtn;
