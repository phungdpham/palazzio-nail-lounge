import phoneIcon from '../../images/telephone.png';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegCalendarPlus } from 'react-icons/fa';

function AppointmentBtn() {
  return (
    <div className="fixed right-0 bottom-1 md:top-[35%]">
      <button className="btn-primary rounded-l-lg flex items-center gap-2 ">
        <span className="text-lg">
          <FaRegCalendarPlus />
        </span>
        <a
          href="https://booking.salonready.io/a6ba97c0-74f4-4ebb-bd1a-2293830cd97a"
          className="items-center text-center text-base"
          target="_blank"
        >
          Book Appointment
        </a>
      </button>
    </div>
  );
}

export default AppointmentBtn;
