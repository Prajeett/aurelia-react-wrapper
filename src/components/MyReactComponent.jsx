import React from "react";
import { ThemeProvider } from "styled-components";
import { Confirm, Theme } from '@desygner/ui-common-components';



const MyReactComponent = () => {



  const confirmLabels = {
    title: "Confirm Action",
    description: "Are you sure you want to perform this action?",
    remember: "Remember my choice",
    confirmButton: "Yes",
    cancelButton: "No",
  };

  const handleConfirm = () => {
    console.log("Confirmed");
    alert("It's working :)")
  };

  const handleCancel = () => {
    console.log("Cancelled");
    alert("It's working :)")
  };

  return (
    <div>
    <ThemeProvider theme={Theme}>
    <div className="App">
    <Confirm
        labels={confirmLabels}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>

</ThemeProvider>
</div>

  );
};

export default MyReactComponent;
