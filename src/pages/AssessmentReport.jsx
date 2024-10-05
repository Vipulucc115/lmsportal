import Aicalender from "../components/Aicalender";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import chart from "../assets/Image/chart.png";

const AssessmentReport = () => {
  return (
    <>
      <Navbar />
      <Aicalender />
      <div>
        <div className=" p-10 font-inter">
          <div className="flex space-x-1 font-inter">
            <h2 className="text-2xl font-semibold">Month 1 </h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Week 1</h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Day #6</h2>
            <MdOutlineKeyboardArrowRight className="my-auto" size={24} />
            <h2 className="text-2xl font-semibold">Assessment Report</h2>
          </div>

          <div className="mt-10 px-5 grid grid-cols-12">
            <div className=" col-span-8">
              <h3 className="text-2xl font-semibold">Result Meter</h3>
              <div className="grid grid-cols-8 grid-rows-4">
                <div className="p-2 space-y-4 col-span-4 row-span-4">
                  <img className="w-96  " src={chart} alt="" />
                  <h2 className="text-4xl  font-bold">87%</h2>
                  <p className="font-semibold text-base">
                    You have scored 17.00 marks out of 21.00!
                  </p>
                </div>
                <div className=" col-span-2 space-y-4 row-span-2">
                  <div className="bg-[#5FD9A1] p-1 w-7 rounded-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M12.5007 3.33301C13.3847 3.33301 14.2326 3.6842 14.8577 4.30932C15.4828 4.93444 15.834 5.78229 15.834 6.66634C15.834 7.5504 15.4828 8.39824 14.8577 9.02336C14.2326 9.64849 13.3847 9.99967 12.5007 9.99967C11.6166 9.99967 10.7688 9.64849 10.1436 9.02336C9.51851 8.39824 9.16732 7.5504 9.16732 6.66634C9.16732 5.78229 9.51851 4.93444 10.1436 4.30932C10.7688 3.6842 11.6166 3.33301 12.5007 3.33301ZM12.5007 4.91634C12.0365 4.91634 11.5914 5.10072 11.2632 5.4289C10.935 5.75709 10.7507 6.20221 10.7507 6.66634C10.7507 7.13047 10.935 7.57559 11.2632 7.90378C11.5914 8.23197 12.0365 8.41634 12.5007 8.41634C12.9648 8.41634 13.4099 8.23197 13.7381 7.90378C14.0663 7.57559 14.2507 7.13047 14.2507 6.66634C14.2507 6.20221 14.0663 5.75709 13.7381 5.4289C13.4099 5.10072 12.9648 4.91634 12.5007 4.91634ZM12.5007 10.833C14.7257 10.833 19.1673 11.9413 19.1673 14.1663V16.6663H5.83398V14.1663C5.83398 11.9413 10.2757 10.833 12.5007 10.833ZM12.5007 12.4163C10.0007 12.4163 7.41732 13.633 7.41732 14.1663V15.083H17.584V14.1663C17.584 13.633 14.9757 12.4163 12.5007 12.4163ZM4.16732 11.0663L2.08398 12.308L2.65065 9.96634L0.833984 8.39967L3.22565 8.19134L4.16732 5.99134L5.09232 8.19134L7.50065 8.39967L5.66732 9.96634L6.20898 12.308L4.16732 11.0663Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <h3 className=" font-medium">Aptitude Skills</h3>
                  <h3 className="font-semibold text-xl">75.05%</h3>
                </div>
                <div className=" col-span-2 space-y-4 row-span-2">
                  <div className="bg-[#5FD9A1] p-1 w-7 rounded-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none">
                      <svg>
                        <path
                          d="M8.88773 9.6165C9.88268 10.101 10.7292 10.8421 11.3423 11.7635C11.9553 12.6848 12.3115 13.753 12.3741 14.8579C12.3805 14.9685 12.365 15.0794 12.3285 15.184C12.292 15.2887 12.2353 15.3851 12.1615 15.4679C12.0878 15.5506 11.9984 15.618 11.8986 15.6662C11.7988 15.7144 11.6905 15.7425 11.5799 15.7489C11.4692 15.7552 11.3584 15.7397 11.2537 15.7032C11.1491 15.6668 11.0526 15.61 10.9699 15.5363C10.8871 15.4625 10.8197 15.3732 10.7715 15.2734C10.7233 15.1736 10.6952 15.0653 10.6889 14.9546C10.6264 13.8027 10.1251 12.7185 9.28792 11.9248C8.45073 11.1312 7.34132 10.6884 6.18773 10.6875C5.03414 10.6884 3.92473 11.1312 3.08755 11.9248C2.25036 12.7185 1.74903 13.8027 1.68661 14.9546C1.68033 15.0653 1.65231 15.1736 1.60417 15.2734C1.55602 15.3733 1.48868 15.4626 1.406 15.5364C1.32331 15.6103 1.2269 15.667 1.12227 15.7036C1.01763 15.7401 0.906823 15.7557 0.796168 15.7494C0.685513 15.7432 0.577178 15.7151 0.477349 15.667C0.37752 15.6189 0.288151 15.5515 0.214346 15.4688C0.140541 15.3861 0.0837444 15.2897 0.0471994 15.1851C0.0106544 15.0805 -0.00492338 14.9697 0.00135545 14.859C0.0637599 13.7539 0.419852 12.6855 1.0329 11.764C1.64595 10.8424 2.49375 10.1011 3.48886 9.6165C2.91458 9.0757 2.51598 8.37488 2.34472 7.60487C2.17345 6.83485 2.23741 6.03115 2.52832 5.29791C2.81922 4.56468 3.32365 3.93573 3.97623 3.49257C4.62882 3.04941 5.39946 2.81248 6.18829 2.81248C6.97712 2.81248 7.74777 3.04941 8.40035 3.49257C9.05293 3.93573 9.55736 4.56468 9.84827 5.29791C10.1392 6.03115 10.2031 6.83485 10.0319 7.60487C9.8606 8.37488 9.462 9.0757 8.88773 9.6165ZM14.9065 0C15.1303 0 15.3449 0.0888948 15.5031 0.247129C15.6613 0.405362 15.7502 0.619974 15.7502 0.84375V2.25H17.1565C17.3803 2.25 17.5949 2.33889 17.7531 2.49713C17.9113 2.65536 18.0002 2.86997 18.0002 3.09375C18.0002 3.31753 17.9113 3.53214 17.7531 3.69037C17.5949 3.84861 17.3803 3.9375 17.1565 3.9375H15.7502V5.34375C15.7502 5.56753 15.6613 5.78214 15.5031 5.94037C15.3449 6.09861 15.1303 6.1875 14.9065 6.1875C14.6827 6.1875 14.4681 6.09861 14.3099 5.94037C14.1516 5.78214 14.0627 5.56753 14.0627 5.34375V3.9375H12.6565C12.4327 3.9375 12.2181 3.84861 12.0599 3.69037C11.9016 3.53214 11.8127 3.31753 11.8127 3.09375C11.8127 2.86997 11.9016 2.65536 12.0599 2.49713C12.2181 2.33889 12.4327 2.25 12.6565 2.25H14.0627V0.84375C14.0627 0.619974 14.1516 0.405362 14.3099 0.247129C14.4681 0.0888948 14.6827 0 14.9065 0ZM6.18773 4.5C5.8881 4.49322 5.59013 4.54638 5.31133 4.65634C5.03252 4.76631 4.77849 4.93086 4.56416 5.14035C4.34983 5.34984 4.17951 5.60004 4.0632 5.87626C3.94689 6.15248 3.88694 6.44915 3.88686 6.74886C3.88679 7.04857 3.94659 7.34527 4.06276 7.62155C4.17893 7.89783 4.34913 8.14811 4.56336 8.35771C4.77759 8.56731 5.03153 8.73199 5.31028 8.84209C5.58903 8.9522 5.88697 9.0055 6.18661 8.99887C6.77449 8.98588 7.33392 8.74325 7.74515 8.32293C8.15637 7.90261 8.38672 7.33801 8.38686 6.74999C8.38701 6.16196 8.15695 5.59724 7.74593 5.17672C7.33492 4.7562 6.77561 4.51329 6.18773 4.5Z"
                          fill="black"
                        />
                      </svg>
                      <defs>
                        <clipPath id="clip0_404_17374">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className=" font-medium">Technical Skills</h3>
                  <h3 className="font-semibold text-xl">63.46%</h3>
                </div>
                <div className=" col-span-2 space-y-4 row-span-2">
                  <div className="bg-[#5FD9A1] p-1 w-7 rounded-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M7.08333 3.33366C6.75503 3.33366 6.42994 3.39832 6.12663 3.52396C5.82331 3.6496 5.54771 3.83375 5.31557 4.06589C5.08342 4.29804 4.89927 4.57364 4.77363 4.87695C4.648 5.18026 4.58333 5.50535 4.58333 5.83366C4.58333 6.16196 4.648 6.48705 4.77363 6.79037C4.89927 7.09368 5.08342 7.36928 5.31557 7.60143C5.54771 7.83357 5.82331 8.01772 6.12663 8.14336C6.42994 8.26899 6.75503 8.33366 7.08333 8.33366C7.74638 8.33366 8.38226 8.07027 8.8511 7.60143C9.31994 7.13259 9.58333 6.4967 9.58333 5.83366C9.58333 5.17062 9.31994 4.53473 8.8511 4.06589C8.38226 3.59705 7.74638 3.33366 7.08333 3.33366ZM2.91667 5.83366C2.91667 4.72859 3.35565 3.66878 4.13706 2.88738C4.91846 2.10598 5.97826 1.66699 7.08333 1.66699C8.1884 1.66699 9.24821 2.10598 10.0296 2.88738C10.811 3.66878 11.25 4.72859 11.25 5.83366C11.25 6.93873 10.811 7.99854 10.0296 8.77994C9.24821 9.56134 8.1884 10.0003 7.08333 10.0003C5.97826 10.0003 4.91846 9.56134 4.13706 8.77994C3.35565 7.99854 2.91667 6.93873 2.91667 5.83366ZM17.1442 4.70699L17.5583 5.42949C18.0662 6.31394 18.3333 7.31608 18.333 8.33596C18.3327 9.35585 18.065 10.3578 17.5567 11.242L17.1408 11.9645L15.6967 11.1337L16.1117 10.4112C16.4748 9.77968 16.6661 9.06402 16.6664 8.33555C16.6667 7.60708 16.476 6.89126 16.1133 6.25949L15.6983 5.53699L17.1442 4.70699ZM14.615 6.15866L15.0292 6.88199C15.2832 7.32409 15.4168 7.82505 15.4168 8.33491C15.4168 8.84477 15.2832 9.34573 15.0292 9.78783L14.6125 10.5103L13.1683 9.67949L13.5833 8.95699C13.6923 8.76746 13.7496 8.55268 13.7496 8.33407C13.7496 8.11547 13.6923 7.90069 13.5833 7.71116L13.1692 6.98866L14.615 6.15866ZM0 15.8337C0 14.7286 0.438987 13.6688 1.22039 12.8874C2.00179 12.106 3.0616 11.667 4.16667 11.667H10C11.1051 11.667 12.1649 12.106 12.9463 12.8874C13.7277 13.6688 14.1667 14.7286 14.1667 15.8337V17.5003H12.5V15.8337C12.5 15.1706 12.2366 14.5347 11.7678 14.0659C11.2989 13.5971 10.663 13.3337 10 13.3337H4.16667C3.50363 13.3337 2.86774 13.5971 2.3989 14.0659C1.93006 14.5347 1.66667 15.1706 1.66667 15.8337V17.5003H0V15.8337Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <h3 className=" font-medium">Core Concepts</h3>
                  <h3 className="font-semibold text-xl">94.59%</h3>
                </div>
                <div className=" col-span-2 space-y-4 row-span-2">
                  <div className="bg-[#5FD9A1] p-1 w-7 rounded-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none">
                      <svg>
                        <path
                          d="M8.88773 9.6165C9.88268 10.101 10.7292 10.8421 11.3423 11.7635C11.9553 12.6848 12.3115 13.753 12.3741 14.8579C12.3805 14.9685 12.365 15.0794 12.3285 15.184C12.292 15.2887 12.2353 15.3851 12.1615 15.4679C12.0878 15.5506 11.9984 15.618 11.8986 15.6662C11.7988 15.7144 11.6905 15.7425 11.5799 15.7489C11.4692 15.7552 11.3584 15.7397 11.2537 15.7032C11.1491 15.6668 11.0526 15.61 10.9699 15.5363C10.8871 15.4625 10.8197 15.3732 10.7715 15.2734C10.7233 15.1736 10.6952 15.0653 10.6889 14.9546C10.6264 13.8027 10.1251 12.7185 9.28792 11.9248C8.45073 11.1312 7.34132 10.6884 6.18773 10.6875C5.03414 10.6884 3.92473 11.1312 3.08755 11.9248C2.25036 12.7185 1.74903 13.8027 1.68661 14.9546C1.68033 15.0653 1.65231 15.1736 1.60417 15.2734C1.55602 15.3733 1.48868 15.4626 1.406 15.5364C1.32331 15.6103 1.2269 15.667 1.12227 15.7036C1.01763 15.7401 0.906823 15.7557 0.796168 15.7494C0.685513 15.7432 0.577178 15.7151 0.477349 15.667C0.37752 15.6189 0.288151 15.5515 0.214346 15.4688C0.140541 15.3861 0.0837444 15.2897 0.0471994 15.1851C0.0106544 15.0805 -0.00492338 14.9697 0.00135545 14.859C0.0637599 13.7539 0.419852 12.6855 1.0329 11.764C1.64595 10.8424 2.49375 10.1011 3.48886 9.6165C2.91458 9.0757 2.51598 8.37488 2.34472 7.60487C2.17345 6.83485 2.23741 6.03115 2.52832 5.29791C2.81922 4.56468 3.32365 3.93573 3.97623 3.49257C4.62882 3.04941 5.39946 2.81248 6.18829 2.81248C6.97712 2.81248 7.74777 3.04941 8.40035 3.49257C9.05293 3.93573 9.55736 4.56468 9.84827 5.29791C10.1392 6.03115 10.2031 6.83485 10.0319 7.60487C9.8606 8.37488 9.462 9.0757 8.88773 9.6165ZM14.9065 0C15.1303 0 15.3449 0.0888948 15.5031 0.247129C15.6613 0.405362 15.7502 0.619974 15.7502 0.84375V2.25H17.1565C17.3803 2.25 17.5949 2.33889 17.7531 2.49713C17.9113 2.65536 18.0002 2.86997 18.0002 3.09375C18.0002 3.31753 17.9113 3.53214 17.7531 3.69037C17.5949 3.84861 17.3803 3.9375 17.1565 3.9375H15.7502V5.34375C15.7502 5.56753 15.6613 5.78214 15.5031 5.94037C15.3449 6.09861 15.1303 6.1875 14.9065 6.1875C14.6827 6.1875 14.4681 6.09861 14.3099 5.94037C14.1516 5.78214 14.0627 5.56753 14.0627 5.34375V3.9375H12.6565C12.4327 3.9375 12.2181 3.84861 12.0599 3.69037C11.9016 3.53214 11.8127 3.31753 11.8127 3.09375C11.8127 2.86997 11.9016 2.65536 12.0599 2.49713C12.2181 2.33889 12.4327 2.25 12.6565 2.25H14.0627V0.84375C14.0627 0.619974 14.1516 0.405362 14.3099 0.247129C14.4681 0.0888948 14.6827 0 14.9065 0ZM6.18773 4.5C5.8881 4.49322 5.59013 4.54638 5.31133 4.65634C5.03252 4.76631 4.77849 4.93086 4.56416 5.14035C4.34983 5.34984 4.17951 5.60004 4.0632 5.87626C3.94689 6.15248 3.88694 6.44915 3.88686 6.74886C3.88679 7.04857 3.94659 7.34527 4.06276 7.62155C4.17893 7.89783 4.34913 8.14811 4.56336 8.35771C4.77759 8.56731 5.03153 8.73199 5.31028 8.84209C5.58903 8.9522 5.88697 9.0055 6.18661 8.99887C6.77449 8.98588 7.33392 8.74325 7.74515 8.32293C8.15637 7.90261 8.38672 7.33801 8.38686 6.74999C8.38701 6.16196 8.15695 5.59724 7.74593 5.17672C7.33492 4.7562 6.77561 4.51329 6.18773 4.5Z"
                          fill="black"
                        />
                      </svg>
                      <defs>
                        <clipPath id="clip0_404_17374">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className=" font-medium">Technical Skills</h3>
                  <h3 className="font-semibold text-xl">63.46%</h3>
                </div>
              </div>
            </div>
            <div className=" col-span-4 px-10">
              <h3 className="text-2xl font-semibold py-2">Strengths</h3>
              <ul className=" text-sm space-y-4 list-disc">
                <li>
                  Et iaculis faucibus lacus integer. Etiam libero eu rhoncus dis
                </li>
                <li>
                  Et iaculis faucibus lacus integer. Etiam libero eu rhoncus dis
                </li>
                <li>
                  Et iaculis faucibus lacus integer. Etiam libero eu rhoncus dis
                </li>
                <li>
                  Et iaculis faucibus lacus integer. Etiam libero eu rhoncus dis
                </li>
                <li>
                  Et iaculis faucibus lacus integer. Etiam libero eu rhoncus dis
                </li>
              </ul>
            </div>
            <div className=" col-span-8 px-2 mt-20">
              <h3 className="text-2xl font-semibold">Areas of Improvement</h3>
              <ul className=" text-sm py-2 space-y-4 list-disc">
                <li>
                  Etiam libero eu dis Et iaculis faucibus lacus integer. Etiam
                  libero eu rhoncus dis Etiam libero eu rhoncus dis Etiam libero
                </li>
                <li>
                  Etiam libero eu dis Et iaculis faucibus lacus integer. Etiam
                  libero eu rhoncus dis Etiam libero eu rhoncus dis Etiam libero
                </li>
              </ul>
            </div>
            <div className=" col-span-4 space-y-3 px-12 mt-20">
              <h3 className="text-2xl font-semibold">Share</h3>
              <div className=" grid gap-4">
                <button className="w-48 p-2 border-[1px] text-sm rounded-lg font-medium border-black">
                  Share Report
                </button>
                <button className="w-48 p-2 border-[1px] text-sm rounded-lg font-light bg-[#034118] text-white  whitespace-nowrap">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AssessmentReport;
