import React, {useState} from 'react';
import { withFormik, Form, Field } from "formik";
//import * as Yup from "yup";

function FormCard() {

    const [users, setUsers] = useState([]);
  return (
    <div>
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="text" name="email" placeholder="E-mail" />
            <Field type="text" name="password" placeholder="Password" />
            <label>
          <Field
            type="checkbox"
            name="tos"
            //checked={props.values.vaccinations}
          />
          Terms of Service
          </label>
          <button type="submit">Submit</button>

        </Form>

    </div>
  );
}

export default FormCard;
