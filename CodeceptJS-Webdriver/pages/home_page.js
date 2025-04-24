const { I } = inject();

module.exports = {

  // OLD QAZANDO website
  fields:{

  },
  button:{
    sign_in:'.login',
    createAccount:'#SubmitCreate',
    register:'#submitAccount'
  },
  messages:{

  },
  accessLoginPage(){
    I.click(this.button.sign_in)
  }
}
