import User from "@/helpers/user";
import Validation from "@/helpers/validation";

export default function submitUser(e) {

    e.preventDefault()

    const valid = new Validation()

    if (valid.validateStartForm() == true) {

        const name = document.querySelector('.input-text');

        const userName = name.value
    
        const user = new User();
    
        user.setUserName(userName)
    
        console.log(user.getUserName())
    }

}

