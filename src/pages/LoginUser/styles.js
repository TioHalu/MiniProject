const Styles = (theme) => ({
  container: {
    display: 'flex',
    padding: '20px 300px',
    marginTop: '50px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    padding: '0 30px',
    '& button': {
      width: '45%',
      marginRigth: '10px',
    },
  },
});

export default Styles;