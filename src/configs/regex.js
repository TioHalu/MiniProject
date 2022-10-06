/* eslint-disable no-useless-escape */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  emailv2: /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  unslugify: /\-/g,
  alphanumeric: /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,})$/,
  youtube: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
  noSymbol: /^[A-z0-9]*(([,.]|\s)*[A-z0-9,.])*$/, // allow string, number, dot (.), and comma (,)
  http: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
  stringOnly: /^[A-Za-z0-9 ]+$/,
  account: /^[@][^ .,<>:;!#$%&’'"*+/[\]\\=?^_`(){|}~-](?!.*[. ]{2})[a-zA-Z0-9]{1,}[^ .,@<>:;!#$%&’'"*+/[\]\\=?^_`(){|}~-]+$/,
  account2: /^[@][^ ](?!.*[. ]{2})[a-zA-Z0-9]{1,}[^ @]+$/,
  number: /^[0-9]*$/,
  apostrof: /^[a-z'\s-]+$/i,
  checkUpperLowerCase: /(?=.*[A-Z])(?=.*[a-z]){8,}/,
  checkSpecial: /^(?=.*?[0-9])|(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])+$/,
  idealPassword: /^(?=.*\d)|(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{1,}$/,
  numberAndstring: /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]+$/i,
  chechLowercase: /^(?=.*[a-z])/,
  checkUpperCase: /^(?=.*[A-Z])/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
};