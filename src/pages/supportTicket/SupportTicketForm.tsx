import { Form, Formik } from "formik";
import { createTicket } from "../../features/ticket/ticketSlice";
import ReuTextField from "../../components/ReuTextField";
import ReuTextArea from "../../components/ReuTextArea";
import ReuUploadBox from "../../components/ReuUploadBox";
import { Box } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { ValidationSchemas } from "../../utils/ValidationSchemas";

const SupportTicketForm = ({ reloadData }: { reloadData: () => void }) => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{
        issue: "",
        describeIssue: "",
        screenshotOfIssue: [] as File[],
      }}
      validationSchema={ValidationSchemas.supportTicketValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        const result = await dispatch(createTicket(values));

        if (createTicket.fulfilled.match(result)) {
          reloadData();
          resetForm();
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <Form style={{ width: "100%" }}>
          <div className="support-ticket-form-group">
            <label className="support-ticket-form-label">Issue</label>
            <ReuTextField
              name="issue"
              placeholder="(log in issue)"
              value={values.issue}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.issue && Boolean(errors.issue)}
              helperText={touched.issue && errors.issue}
              className="support-ticket-form-field"
              fullWidth
            />
          </div>

          <div
            className="support-ticket-form-group"
            style={{ marginBottom: "30px" }}
          >
            <label className="support-ticket-form-label">Describe Issue</label>
            <ReuTextArea
              name="describeIssue"
              placeholder=""
              value={values.describeIssue}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.describeIssue && Boolean(errors.describeIssue)}
              helperText={"*Please don't include password or card details"}
              className="custom-textarea"
              fullWidth
            />
          </div>

          <div className="support-ticket-form-group">
            <label className="support-ticket-form-label">
              Screenshot of the issue (Optional)
            </label>
            <ReuUploadBox
              name="screenshotOfIssue"
              value={values.screenshotOfIssue}
              onChange={(files) => setFieldValue("screenshotOfIssue", files)}
              multiple={true}
            />
          </div>

          <div className="contact-form-group">
            <Box
              mt={4}
              display="flex"
              justifyContent="flex-end"
              sx={{
                "@media (max-width: 768px)": {
                  justifyContent: "center",
                },
              }}
            >
              <button className="contact-submit-button">Submit</button>
            </Box>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SupportTicketForm;
