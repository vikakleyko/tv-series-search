const ErrorMessageStyle = {
  display: "flex",
  justifyContent: "center",
};

function Error() {
  return (
    <div style={ErrorMessageStyle}>
      Something went wrong, please try again later
    </div>
  );
}

export default Error;
