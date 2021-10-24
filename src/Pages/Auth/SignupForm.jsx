import { Fragment } from 'react';

const SignupForm = (props) => {
    return (
        <Fragment>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        required 
                        placeholder="Please enter a username" 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Please enter an email" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Please enter a password" 
                        required 
                    />
                </div>
 
            </form>
        </Fragment>
    );
}

export default SignupForm;