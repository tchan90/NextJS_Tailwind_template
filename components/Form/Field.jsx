import React from "react";

const Field = ({
	display,
	errors,
	name,
	register,
	validations = {},
	wrapperClass,
	textArea,
}) => {
	return (
		<p className={wrapperClass}>
			<label htmlFor={name} className="text-gray-100">
				{display}
			</label>
			{textArea ? (
				<textarea {...register(name, validations)} className="w-full p-4" />
			) : (
				<input {...register(name, validations)} className="w-full p-4" />
			)}
			<span className="text-white italic">{errors[name]?.message}</span>
		</p>
	);
};

export default Field;
