const Styles = (theme) => ({
  wrapper: {
    padding: '20px 300px',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    '& button': {
      width: '45%',
      marginRigth: '10px',
    },
  },
});

export default Styles;