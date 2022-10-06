const Styles = (theme) => ({
  '@global': {
    '& h1': {
      fontSize: '25px',
    },
  },
  card: {
    width: '100%',
    borderRadius: '5px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    padding: '20px',
    boxSizing: 'border-box',
    marginBottom: '20px',
    border: '1px solid #32a852',
  },
  cardHeader: {
    marginBottom: '20px',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    marginBottom: '20px',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cardFooter: {
    marginBottom: '20px',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
