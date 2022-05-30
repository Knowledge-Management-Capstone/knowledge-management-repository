import { useField } from 'formik';

const BaseInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='mt-1'>
        <input
          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className='mt-1 text-xs text-red-500'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default BaseInput;
