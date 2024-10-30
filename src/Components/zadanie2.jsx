import 'bootstrap/dist/css/bootstrap.min.css'
export const Zadanie2 =() =>{
    return (
        <>
        
        <h1 className='bg-success text-center py-5'>Formularz rejestracyjny</h1>
     
        <form className='text-center container'>
            <span className='my-1'>Podaj imie</span>
            <input className='form-control my-2' type='text' placeholder='Imie'></input><br/>
            <span>Podaj Nazwisko</span>
            <input className='form-control my-2' type='text' placeholder='Nazwisko'></input><br/>
            <span>Podaj E-mail</span>
            <input className='form-control my-2' type='text' placeholder='E-mail'></input><br/>
            <span>Podaj Hasło</span>
            <input className='form-control my-2' type='password' placeholder='Hasło'></input><br/>
            <span>Powtórz Hasło</span>
            <input className='form-control my-2' type='password' placeholder='Powtórz hasło'></input><br/>
            <button className='btn  btn-success'>Zarejestruj się</button>

        </form>
       
        </>
  )
}