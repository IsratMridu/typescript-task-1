const email = <HTMLInputElement>document.querySelector('#email')!; 
const password = <HTMLInputElement>document.querySelector('#password')!; 

function loginUser(event : Event){
    event.preventDefault();
    class User{
        email: string;
        password: string;
    
    
        constructor(email:string,password: string){
            this.email = email;
            this.password = password;
    
        }
    }
    
    const jubair =  new User(email.value, password.value); 
    
    // console.log(jubair);

    if(jubair.email === 'admin@admin.com' && jubair.password === 'admin123'){
        window.location.href='index1.html';
    }
    else{
        alert('Enter Correct Email and Password');
    }
}
