const Styles = () => ({
  wrapperText: {
    '& > p': {
      color: "#000000",
      fontSize: "16px",
      fontFamily: 'Popins',
      fontWeight: '400',
      marginBottom: '8px',
    },
    '& > input': {
      padding: '10px 20px',
      backgroundColor: "white",
      color: "#000000",
      borderRadius: '5px',
      border: '1px solid #32a852',
      fontFamily: 'Popins',
      fontSize: '16px',
      '&:focus': {
        outline: 'none',
        border: '1px solid #54ab6b',
      },
    },
  }
});

export default Styles;