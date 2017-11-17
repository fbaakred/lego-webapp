// @flow

import { reduxForm, SubmissionError } from 'redux-form';
import { handleSubmissionError } from './utils';
import { pick, difference } from 'lodash';
type Props = {
  onSubmitFail: any => any,
  onSubmit: any => Promise<*>,
  /* Enable auto submissionError */
  enableSubmissionError?: boolean,
  /* Move the screen to the first error in the list on SubmissionError */
  enableFocusOnError?: boolean,
  /* Also pick these values based on the keys given on the array
   * Should be used when there is no visible filed for the value,
   * but that it should still pass the value further.
   * 
   * The id is always picked
   */
  pickAdditionalValues?: Array<string>,
  ...any
};

const legoForm = ({
  onSubmitFail = () => {},
  onSubmit,
  enableSubmissionError = true,
  enableFocusOnError = true,
  pickAdditionalValues = [],
  ...rest
}: Props) =>
  reduxForm({
    ...rest,
    onSubmitFail: errors => {
      onSubmitFail(errors);

      if (!enableFocusOnError) {
        return;
      }

      try {
        // We should instead check if error is SubmissionError. Does not work now
        const [firstErrorField] = Object.keys(errors);

        const field = document.querySelector(`[name="${firstErrorField}"]`);
        if (field && field.focus) {
          field.focus();
        }
      } catch (e) {
        //
      }
    },
    onSubmit: (values, dispatch, props) => {
      const pickedValues = pick(
        values,
        Object.keys(props.registeredFields)
          .concat('id')
          .concat(pickAdditionalValues)
      );

      console.log(
        'Diff (lost in translation): ',
        difference(Object.keys(values), Object.keys(pickedValues))
      );

      return onSubmit(pickedValues, dispatch, props).catch(error => {
        if (error instanceof SubmissionError || !enableSubmissionError) {
          throw error;
        }

        return handleSubmissionError(error);
      });
    }
  });

export default legoForm;
