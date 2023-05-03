/*
    Genel rutin işlemlerimizi burda yapacağız.
    öreğin text yazdığımız anda bizim key up olayı gerçekleştiği anda biz bir sorgulama göndeririz.
    örn: a'ya bastığımızda a'dan bir sorgulama gidecek vs
*/

const profile = new Profile();
const ui = new UI();

const searhProfile = document.querySelector('#searhProfile');


searhProfile.addEventListener('keyup',(event) => {
    ui.clear();
    let text = event.target.value;

    if(text !==''){
        profile.getProfile(text)
            .then(res => {
                if(res.profile.length === 0) { //her tuşa tıkladığımızda ekrana gelmesin diye yaptık.
                    ui.showAlert(text);
                }
                else {
                  ui.showProfile(res.profile);
                  ui.showTodo(res.todo);
                }
            })

                   
    }
});