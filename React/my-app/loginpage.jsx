import react,{useState} from 'react';

function loginpage(){
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            [event.target.name]: event.target.value
        });
    }
    return (
        <div>
            <h1>login page  
                <form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </h1>
        </div>
    )
};