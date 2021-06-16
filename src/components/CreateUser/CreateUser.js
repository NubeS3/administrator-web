import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import store from '../../store';
import { addUser, clearUserState } from '../../store/userManage';
import AddUserSuccess from '../AddUserSuccess/AddUserSuccess';
import { connect } from 'react-redux';

const CreateUser = ({
  authToken,
  onCancel,
  onClose,
  isFulfilled,
  isRejected,
  newUser
}) => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .matches(/^[^\s@]+@[^\s@]+$/, 'Invalid email format')
        .required('Required!'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .max(32, 'Maximum 32 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
          'Must contain at least One Uppercase, One Lowercase, One Number and one special case Character (8-32 characters)'
        )
        .required('Required!')
    }),
    onSubmit: (values) => {
      // const error = preValidateRegisterData(values);
      // // if (error) {
      // //   return setError(error);
      // // }
      // setError("");
      console.log(values.password);
      store.dispatch(
        addUser({
          email: values.email,
          password: values.password,
          authToken: authToken
        })
      );
    }
  });

  useEffect(() => {
    if (isFulfilled) {
      setSuccess(true);
      store.dispatch(clearUserState());
    }
    if (isRejected) {
      setSuccess(false);
      store.dispatch(clearUserState());
    }
  }, [isFulfilled, isRejected]);

  return (
    <>
      {!success ? (
        <div className="w-full">
          <p className="font-medium text-lg py-2 px-12">Add a user</p>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <p className="font-medium text-2xl px-12 py-10">
              Set up the basics
            </p>
            <p className="text-sm px-12 text-gray-400">
              To get started fill out some basic information about who you are
              adding as a user
            </p>
            <div className="px-12 py-12">
              <div>
                <label htmlFor="">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-2/3 block mt-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  formNoValidate={true}
                />
                {formik.errors.email ? (
                  <div className="text-red-600 text-sm" role="alert">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mt-3">
                <label htmlFor="">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-2/3 block mt-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password ? (
                  <div className="text-red-600 text-sm word-wrap" role="alert">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="px-12 mb-6">
              <div className="flex flex-col">
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-400"
                  />
                  <span className="ml-2 text-gray-700">
                    Automatic create password
                  </span>
                </label>
              </div>
              {/*<div className="flex flex-col">*/}
              {/*  <label className="inline-flex items-center mt-3">*/}
              {/*    <input*/}
              {/*      type="checkbox"*/}
              {/*      className="form-checkbox h-5 w-5 text-blue-400"*/}
              {/*    />*/}
              {/*    <span className="ml-2 text-gray-700">*/}
              {/*      Require User To Change Their Password After Login*/}
              {/*    </span>*/}
              {/*  </label>*/}
              {/*</div>*/}
              <div className="flex flex-col">
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-400"
                  />
                  <span className="ml-2 text-gray-700">
                    Send password to email
                  </span>
                </label>
              </div>
            </div>
            <hr />
            <div className="px-12">
              <div className="mt-6">
                <button
                  type={'submit'}
                  className="mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
                <button
                  onClick={onCancel}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <AddUserSuccess type="user" onClose={onClose} newUser={newUser} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const isFulfilled = state.userManage.isFulfilled;
  const isRejected = state.userManage.isRejected;
  const newUser = state.userManage.newUser;
  return {
    authToken,
    isFulfilled,
    isRejected,
    newUser
  };
};

export default connect(mapStateToProps)(CreateUser);
