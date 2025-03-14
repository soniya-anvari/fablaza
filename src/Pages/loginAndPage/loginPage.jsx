import { navigate } from "ionicons/icons";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const [isSend, setIsSend] = useState({
        status: false,
        number: ""
    })
    const [errNumber, setErrNumber] = useState(false)
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [serverOtp] = useState("1234")
    const [error, setError] = useState(false);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return; // فقط اعداد مجازند

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // فوکوس به اینپوت بعدی در صورت وارد شدن مقدار
        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }

        if (newOtp.join("").length === 4) {
            checkOtp(newOtp.join(""));
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const checkOtp = (enteredOtp) => {
        if (enteredOtp === serverOtp) {
            navigate("/user-panel")
            setError(false);
        } else {
            alert("❌ کد اشتباه است! لطفاً دوباره امتحان کنید.");
            setError(true);
            setOtp(["", "", "", ""]); // پاک کردن ورودی‌ها
            inputRefs[0].current.focus(); // فوکوس روی اولین اینپوت
        }
    };
    const handleVerifyOtp = () => {
        const enteredOtp = otp.join(""); // تبدیل آرایه به یک رشته عددی

        if (enteredOtp.length < 4) {
            setError(true);
            alert("❌ لطفاً کد کامل را وارد کنید.");
            return;
        }

        if (enteredOtp === serverOtp) {
            navigate("/user-panel")
            setError(false);
        } else {
            alert("❌ کد اشتباه است! لطفاً دوباره امتحان کنید.");
            setError(true);
            setOtp(["", "", "", ""]); // پاک کردن ورودی‌ها
            inputRefs[0].current.focus(); // فوکوس روی اولین اینپوت
        }
    };


    return (
        <>
            {
                !isSend.status && <form className="max-w-[550px] mx-auto py-10 px-8 shadow-xl rounded-2xl border-[1px] border-[#0000003c]">

                    <p className="text-center text-clamp_des mb-6 mt-5 font-Iran_Bold text-black">
                        به <span className="text-purple_d font-Iran_Bold">فپلازا</span> خوش آمدید
                    </p>
                    <div class="flex flex-col items-stretch">
                        <label htmlFor="name" class=" my-5 mx-5 text-clamp"> شـــمـــــاره همــــــــــــــــراه :  </label>
                        <input className={`${!errNumber ? "border-[1px] border-purple_d " : "border-[2px] border-red_text_color "} mb-3 rounded-xl px-5 py-3 outline-none`} type="text" id="name" name="name" autoComplete="off" required placeholder=" مثال : 09121231234 " onChange={(e) => {
                            setIsSend((prev) => ({ ...prev, number: e.target.value }));

                        }} />

                    </div>
                    {errNumber &&
                        <p className="text-red_text_color ">
                            ساختار شماره وارد شده درست نیست
                        </p>
                    }
                    <button href="#" inputMode="numeric" class="w-full mt-5 bg-purple_d border-[1px] border-purple_l text-white rounded-xl px-5 py-3 outline-none"
                        onClick={(e) => {
                            e.preventDefault()
                            if (/^09\d{9}$/.test(isSend.number) && isSend.number.length === 11) {
                                setIsSend((prev) => ({ ...prev, status: true }));
                                setErrNumber(false);
                                console.log(isSend.number)
                            } else {
                                setErrNumber(true);
                            }



                        }}> درخواست کد یک بار مصرف </button>

                </form>
            }
            {
                isSend.status &&
                <form className=" max-w-[550px] mx-auto py-10 px-8 shadow-xl rounded-2xl border-[1px] border-[#0000003c]">
                    <div className="flex gap-3 items-center mb-7 justify-stretch ">
                        <p className="w-2/3 flex gap-2 text-center">
                            کد به شـــمـــــاره
                            <span dir="ltr" className="text-purple_d font-Iran_Bold">
                                {
                                    isSend.number.replace(/^(\d{4})\d{3}(\d{4})$/, "$1***$2")
                                }
                            </span>
                            ارسال شد
                        </p>
                        <a className="w-1/3 text-center text-purple_l cursor-pointer border-[0.5px] border-[#915eff7c] rounded-xl p-2 hover:bg-purple_d hover:text-white transition-all" onClick={() => {
                            setIsSend({
                                status: false,
                                number: ""
                            })
                        }}>
                            ویرایش شماره
                        </a>
                    </div>
                    {
                        <div className="flex gap-3 justify-center mb-5">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={inputRefs[index]}
                                    type="text"
                                    maxLength="1"
                                    className="w-12 h-12 text-center text-xl border-[1px] border-purple_d rounded-xl"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                />
                            ))}
                        </div>
                    }
                    {error && <p className="text-red_text_color mt-5">کد وارد شده اشتباه است....</p>}

                    <button href="#" class="w-full mt-5 bg-purple_d border-[1px] border-purple_l text-white rounded-xl px-5 py-3 outline-none" onClick={(e) => {
                        e.preventDefault()
                        handleVerifyOtp()
                    }}> برسی و ورود </button>
                </form>
            }
        </>
    )
}

export default LoginPage