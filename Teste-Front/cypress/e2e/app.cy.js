class RegistroForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get('#imageUrl'),
    imageUrlInputFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }


  typeTitle(text) {
    if (!text) return;
    this.elements.titleInput().type(text);
  }

  typeUrl(url) {
    if (!url) return;
    this.elements.imageUrlInput().type(url);
  }

  clickSubmit() {
    this.elements.submitBtn().click();
  }



}

describe('Registro de imagem', () => {
  describe('Enviar uma imagem com entradas inválidas', () => {
    const imagem = {
      titulo: '',
      url: ''
    }

    const registroForm = new RegistroForm();

    it('Estou na pagina de cadastro de imagens', () => {
      cy.visit('/')
    })
    it(`Quando eu digito "${imagem.titulo}" no campo titulo`, () => {
      registroForm.typeTitle(imagem.titulo)
    })
    it(`Quando eu digito "${imagem.url}" no campo de URL`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it('Eu clico no botão  de envio', () => {
      registroForm.clickSubmit()
    })
    it('Entao eu devo ver a mensagem "Please type a title for the image" acima do campo de titulo', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image")
    })
    it('E eu devo ver a mensagem "Please type a valid URL" acima do cmapo de URL da imagem', () => {
      registroForm.elements.imageUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })


   describe('Enviar uma imagem com entradas válidas', () => {
    const imagem = {
      titulo: 'xxxxxxxxx',
      url: 'https://static.vecteezy.com/system/resources/previews/017/396/808/non_2x/google-translate-icons-free-png.png'
    }

    const registroForm = new RegistroForm();

    it('Estou na pagina de cadastro de imagens', () => {
      cy.visit('/')
    })
    it(`Quando eu digito "${imagem.titulo}" no campo titulo`, () => {
      registroForm.typeTitle(imagem.titulo)
    })
    it(`Quando eu digito "${imagem.url}" no campo de URL`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it('Eu clico no botão  de envio', () => {
      registroForm.clickSubmit()
    })
    // it('Entao eu devo ver a mensagem "the title was registered" acima do campo de titulo', () => {
    //   registroForm.elements.titleFeedback().should("contains.text", "the title was registered")
    // })
    // it('E eu devo ver a mensagem "the image was registered" acima do campo de URL da imagem', () => {
    //   registroForm.elements.imageUrlInputFeedback().should("contains.text", "the image was registered")
    // })
  })


})