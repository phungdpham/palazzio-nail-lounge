import phoneIcon from '../../images/telephone.png';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegCalendarPlus } from 'react-icons/fa';

function CallButton() {
  return (
    <div className="fixed bottom-1 left-1  w-full mx-auto md:invisible">
      <button className="btn-primary p-4  rounded-lg inline-block">
        <a
          href="tel:832-779-3378"
          className="items-center itext-center  text-xl"
        >
          <FiPhoneCall />
        </a>
      </button>
    </div>
  );
}

export default CallButton;
