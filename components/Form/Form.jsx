import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCaptchaV2 from "react-google-recaptcha";
import ClipLoader from "react-spinners/ClipLoader";

import Field from "./Field";

const schema = yup.object().shape({
	firstName: yup.string().required("This field is required"),
	lastName: yup.string().required("This field is required"),
	email: yup
		.string()
		.email("Must be a valid email")
		.max(255)
		.required("This field is required"),
	phone: yup
		.string()
		.max(13, "Phone number must not exceed 13 digits")
		.optional(),
	message: yup.string().required("This field is required"),
});

const ConfirmationMessage = ({ showFailed, showSuccess }) => {
	return (
		<div className="h-80 text-center text-white flex items-center">
			{showSuccess && (
				<div className="flex flex-col">
					<p className="font-bold text-lg mb-5">
						Thank you for getting in touch!
					</p>
					<p>
						We appreciate you contacting our store, and we will reply to you
						soon!
					</p>
				</div>
			)}
			{showFailed && (
				<div className="flex flex-col">
					<p className="font-bold text-lg mb-5">
						Oh no your message failed to get sent through!
					</p>
					<p>
						We will try to fix this issue as soon as possible. <br />
						<br /> In the meantime you can try emailing us at{" "}
						<a
							className="hover:text-primary-light"
							href="mailto:example@example.com"
						>
							example@example.com
						</a>{" "}
						or calling us directly on{" "}
						<a className="hover:text-primary-light" href="tel:+61(8)8888888">
							+61(8)8888888
						</a>
					</p>
				</div>
			)}
		</div>
	);
};

const FooterForm = () => {
	const [loading, setIsLoading] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showFailed, setShowFailed] = useState(false);
	const [reCaptcha, setReCaptcha] = useState(false);
	const [noCaptchaSubmitted, setNoCaptchaSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onChange = (value) => {
		if (value) {
			setReCaptcha(true);
		}
	};

	const onSubmit = async (data) => {
		setIsLoading(true);
		if (!reCaptcha) {
			setIsLoading(false);
			setNoCaptchaSubmitted(true);
			return;
		}
		setNoCaptchaSubmitted(false);
		await fetch("api/mail", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.status === 200) {
					setHasSubmitted(true);
					setIsLoading(false);
					setShowSuccess(true);
				} else {
					setHasSubmitted(true);
					setIsLoading(false);
					setShowFailed(true);
					console.error("Error sending email");
				}
			})
			.catch((e) => {
				setHasSubmitted(true);
				setIsLoading(false);
				setShowFailed(true);
				console.error("Error sending email", e);
			});
	};

	const siteKey = process.env.GOOGLE_SITE_KEY;

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`${
				!hasSubmitted ? "grid grid-cols-2" : "flex justify-center"
			} py-12 px-3 md:px-8 xl:px-10 lg:ml-10 font-sans uppercase text-lg`}
		>
			{!hasSubmitted ? (
				<>
					<Field
						display="First Name"
						errors={errors}
						name="firstName"
						register={register}
						wrapperClass="p-2 lg:col-span-1 col-span-2"
					/>
					<Field
						display="Last Name"
						errors={errors}
						name="lastName"
						register={register}
						wrapperClass="p-2 lg:col-span-1 col-span-2"
					/>
					<Field
						display="Phone Number"
						errors={errors}
						name="phone"
						register={register}
						wrapperClass="col-span-2 p-2"
					/>
					<Field
						display="Email"
						errors={errors}
						name="email"
						register={register}
						wrapperClass="col-span-2 p-2"
					/>
					<Field
						display="Message"
						errors={errors}
						name="message"
						register={register}
						wrapperClass="col-span-2 p-2"
						textArea
					/>
					<div className="col-span-2 px-2 pt-10">
						{loading ? (
							<div className="text-center">
								<ClipLoader loading={loading} size={50} />
							</div>
						) : (
							<>
								<div className="flex flex-col md:flex-row">
									<input
										type="submit"
										value="Send Message"
										className="w-full p-4 text-lg text-gray-50 bg-primary cursor-pointer hover:bg-primary-light mb-2 md:mr-2 md:mb-0"
									/>
									<span className="flex justify-center md:block">
										<ReCaptchaV2 sitekey={siteKey} onChange={onChange} />
									</span>
								</div>
								{noCaptchaSubmitted && (
									<p className="text-white text-center mt-6">
										Please tick the reCAPTCHA required to submit the form.
									</p>
								)}
							</>
						)}
					</div>
				</>
			) : (
				<ConfirmationMessage
					showSuccess={showSuccess}
					showFailed={showFailed}
				/>
			)}
		</form>
	);
};

export default FooterForm;
