function handleFormSubmit(event) {
    //event.preventDefault()
    let name = document.getElementById('InputName').value
    let email = document.getElementById('InputEmail').value
    let m1 = document.getElementById('InputSubject').value
    let m2 = document.getElementById('InputMessage').value
    $.ajax({
        type: 'POST',
        url: 'https://api.telegram.org/bot5469423688:AAFFYjZ5A3dHmdfROAbPyyjyMH1Jx-GBJHI/sendMessage',
        data: {'chat_id': 456022925, 'text': 'Пришла заявка от ' + name + '\n' + 'Почта: ' + email + '\n-------------\n'
    + m1 +  '\n-------------\n' + m2}
    });
  }
  
  const applicantForm = document.getElementById('contact-form')
  applicantForm.addEventListener('submit', handleFormSubmit)


  function program_1(){
    document.getElementById('program_3').value = "Junior"
  }

  function program_2(){
    document.getElementById('program_3').value = "Middle"
  }

  function program_3(){
    document.getElementById('program_3').value = "Senior"
  }