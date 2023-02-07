emailjs.init('FPBu-XMaiAh1cibXk');

const contactForm = document.getElementById('contactForm')

contactForm.onsubmit = event => {
    event.preventDefault()

    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const subject = document.querySelector('#subject')
    const comment = document.querySelector('#comment')

    emailjs.send('service_6cn5c41','template_e766flw',{
        from_name: name.value,
        subject: subject.value,
        email: email.value,
        message: comment.value,
    }).then(response => {
        [name, email, subject, comment].forEach(el => el.value = '')
        
        alert('Your message has been sent')
    }).catch(error => {
        console.log('Failed:' + error)
    });
}
