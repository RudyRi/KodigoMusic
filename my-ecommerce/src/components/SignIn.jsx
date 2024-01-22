import {useForm} from 'react-hook-form'
import { emailValidation, maxPassword, minPassword } from '../utils/validators'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase'
 
export const Signin = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const auth = getAuth(app)

    console.log(errors)
    console.log(watch('email'))

    const createUser = async(data) => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            console.log(userCredential)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title text-center">Create new User</h5>
            <form onSubmit={handleSubmit(createUser)}>
                <div className="mb-3">
                    <input 
                    type="text" 
                    name="email" 
                    {...register('email', {required: 'Email is required', pattern: emailValidation})} 
                    className="form-control" 
                    placeholder="Type your email" 
                    />
                    {
                        errors.email && <span className='text-danger'>{errors.email.message}</span>
                    }
                </div>
                <div className="mb-3">
                    <input 
                    type="password" 
                    name="password" 
                    {...register('password', {required: 'Password is required', minLength: minPassword, maxLength: maxPassword})} 
                    className="form-control" 
                    placeholder="Type your password" 
                    />
                    {
                        errors.password && <span className='text-danger'>{errors.password.message}</span>
                    }
                </div>
                <div className="mb-3">
                    <input 
                    type="password" 
                    name="cpassword" 
                    {...register('cpassword', {required: 'Passwords must match', validate: value => value==watch('password') || "Passwords must match."})} 
                    className="form-control" 
                    placeholder="Confirm your password" 
                    />
                    {
                        errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>
                    }
                </div>
                <div className="mb-3 d-grid gap-2">
                    <button type="submit" className="btn btn-secondary"> Crear Cuenta </button>

                </div>
            </form>
          </div>
        </div>
        </>
    )
}