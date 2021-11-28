import React from "react";

import { useWizard } from "hooks";
import { ButtonClickEventHandler } from "types/global";

import WizardFormSteps from "./WizardFormSteps";
import WizardFormButtons from "./WizardFormButtons";

interface Props {
  steps: React.ReactElement[];
  handleSubmit: ButtonClickEventHandler;
  loading: boolean;
  allowSkippingSteps: boolean;
}

function WizardForm({ steps, loading, handleSubmit, allowSkippingSteps }: Props) {
  const numberOfSteps = steps.length;

  const { stepIndex, handleBack, handleNext, handleSelect } = useWizard(numberOfSteps);

  return (
    <>
      <WizardFormSteps
        stepIndex={stepIndex}
        numberOfSteps={numberOfSteps}
        handleSelect={handleSelect}
        allowSkippingSteps={allowSkippingSteps}
      />
      {steps[stepIndex]}
      <WizardFormButtons
        isFirstStep={stepIndex === 0}
        isFinalStep={stepIndex === numberOfSteps - 1}
        loading={loading}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default WizardForm;
